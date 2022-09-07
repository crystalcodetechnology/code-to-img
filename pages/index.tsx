import dynamic from "next/dynamic";
import Preview from "../src/components/Preview";
import ToolBar from "../src/components/ToolBar";
import { useEditor } from "../src/contexts/EditorContext";

const LeftBarAd = dynamic(import("../src/components/LeftBarAd"), {
  ssr: false,
});
const RightAdUnit = dynamic(import("../src/components/RightAdUnit"), {
  ssr: false,
});
const TopBarAd = dynamic(import("../src/components/TopBarAd"), {
  ssr: false,
});

function IndexPage() {
  return (
    <>
      <Backgorund />
      <div className="pb-40 relative w-fit mx-auto">
        <div className="flex items-center justify-center my-4">
          <TopBarAd />
        </div>
        <div className="absolute -left-40 top-0">
          <LeftBarAd />
        </div>
        <div className="absolute -right-60 top-0 flex flex-col gap-4">
          <RightAdUnit />
          <RightAdUnit />
        </div>
        <Preview />
      </div>
      <ToolBar />
    </>
  );
}

export default IndexPage;

const Backgorund = () => {
  const { settings } = useEditor();
  return (
    <div
      className="fixed w-full h-full inset-0 -z-10 bg-no-repeat bg-cover"
      style={{
        backgroundImage: settings.backgroundThumb || settings.backgroundImage,
        backgroundColor: settings.backgroundColor,
      }}
    >
      <div className="absolute w-full h-full inset-0 backdrop-blur-3xl bg-gray-900/95"></div>
    </div>
  );
};
