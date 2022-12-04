import { useAtom } from "jotai";
import Preview from "../src/components/Preview";
import ToolBar from "../src/components/ToolBar";
import { appStateAtom } from "../src/stores/appState";

function IndexPage() {
  return (
    <>
      <Backgorund />
      <div id="ezoic-pub-ad-placeholder-101"> </div>
      <div className="flex gap-8">
        <aside className="space-y-8">
          <div id="ezoic-pub-ad-placeholder-104"> </div>
          <div id="ezoic-pub-ad-placeholder-105"> </div>
        </aside>
        <Preview />
        <aside className="space-y-8">
          <div id="ezoic-pub-ad-placeholder-102"> </div>
          <div id="ezoic-pub-ad-placeholder-103"> </div>
        </aside>
      </div>

      <ToolBar />
    </>
  );
}

export default IndexPage;

const Backgorund = () => {
  const [appState] = useAtom(appStateAtom);
  return (
    <div
      className="fixed w-full h-full inset-0 -z-10 bg-no-repeat bg-cover"
      style={{
        backgroundImage: appState.backgroundThumb || appState.backgroundImage,
        backgroundColor: appState.backgroundColor,
      }}
    >
      <div className="absolute w-full h-full inset-0 backdrop-blur-3xl bg-gray-900/95"></div>
    </div>
  );
};
