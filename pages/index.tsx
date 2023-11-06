import { useAtom } from "jotai";
import Preview from "../src/components/Preview";
import ToolBar from "../src/components/ToolBar";
import { appStateAtom } from "../src/stores/appState";
import Script from "next/script";

function IndexPage() {
  return (
    <>
      <Backgorund />
      <div className="flex flex-col py-16 items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7322439099058988"
          data-ad-slot="4221413788"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <Script id="top-bar-add" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>

      <Preview />

      <div className="flex flex-col pt-16 pb-40 items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7322439099058988"
          data-ad-slot="3568455787"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <Script id="bottom-bar-add" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
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
