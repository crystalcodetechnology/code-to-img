import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { toPng, toJpeg, toSvg, toBlob } from "html-to-image";
import { Options } from "html-to-image/lib/types";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { AppState, appStateAtom, initAppState } from "../stores/appState";

export type EditorContextType = {
  canvasRef: React.RefObject<HTMLDivElement>;
  onExport: () => void;
  onReset: () => void;
  onCopyAsLink: () => void;
  onCopyAsImage: () => void;
};

export const EditorContext = createContext<EditorContextType | null>(null);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useAtom(appStateAtom);
  const router = useRouter();

  const getSettings = useCallback(async () => {
    let decodedQuery: any = Object.fromEntries(
      new URLSearchParams(location.search)
    );
    Object.keys(decodedQuery).map((key) => {
      switch (decodedQuery[key]) {
        case "true":
          decodedQuery[key] = true;
          break;

        case "false":
          decodedQuery[key] = false;
          break;

        default:
          break;
      }
    });

    setSettings({
      ...initAppState,
      ...decodedQuery,
    });

    setIsLoading(false);
  }, [setSettings]);

  useEffect(() => {
    getSettings();
  }, [getSettings]);

  useEffect(() => {
    if (isLoading) return;
    router.replace({
      query: settings,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings, isLoading]);

  const canvasRef = useRef<HTMLDivElement>(null);

  const getConvertOptions = (settings: AppState) => {
    const scale =
      settings.renderScale === "3x" ? 3 : settings.renderScale === "2x" ? 2 : 1;
    console.log(scale);

    const options: Options = {
      canvasWidth: canvasRef.current.clientWidth * scale,
      canvasHeight: canvasRef.current.clientHeight * scale,
      quality: 0.95,
    };
    return options;
  };

  const onExport: EditorContextType["onExport"] = useCallback(async () => {
    if (!canvasRef.current) return;

    const options = getConvertOptions(settings);

    var imgUrl: string | null = null;

    const fileExtension = `.${settings.renderFormat.toLowerCase()}`;

    switch (fileExtension) {
      case ".png":
        imgUrl = await toPng(canvasRef.current, options);
        break;
      case ".jpeg":
        imgUrl = await toJpeg(canvasRef.current, options);
        break;
      case ".svg":
        imgUrl = await toSvg(canvasRef.current, options);
        break;
      default:
        imgUrl = await toPng(canvasRef.current, options);
        break;
    }

    if (!imgUrl) return;

    const link = document.createElement("a");
    link.download = `${settings.filename || "Untitled"}${fileExtension}`;
    link.href = imgUrl;
    link.click();
  }, [settings, canvasRef]);

  const onCopyAsLink: EditorContextType["onCopyAsLink"] =
    useCallback(async () => {
      window.navigator.clipboard.writeText(location.href);
    }, []);

  const onCopyAsImage: EditorContextType["onCopyAsImage"] =
    useCallback(async () => {
      if (!canvasRef.current) return;
      const options = getConvertOptions(settings);
      const blog = await toBlob(canvasRef.current, options);
      window.navigator.clipboard.write([
        new ClipboardItem({ "image/png": blog }),
      ]);
      console.log("Copied");
    }, [settings]);

  const onReset = () => {
    setSettings(initAppState);
  };
  if (isLoading) return null;

  return (
    <EditorContext.Provider
      value={{
        canvasRef,
        onExport,
        onCopyAsLink,
        onCopyAsImage,
        onReset,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw "Editor context is not initialized!";
  }
  return context;
};
