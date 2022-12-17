import { useAtom } from "jotai";
import Preview from "../src/components/Preview";
import ToolBar from "../src/components/ToolBar";
import { appStateAtom } from "../src/stores/appState";

function IndexPage() {
  return (
    <>
      <Backgorund />
      <div className="flex w-fit mx-auto gap-4 my-8 mb-[250px]">
        <aside className="w-[160px] h-[600px]">
          <div id="ezoic-pub-ad-placeholder-116"> </div>
        </aside>
        <div className="w-fit space-y-10">
          <div className="w-[728px] h-[90px] mx-auto">
            <div id="ezoic-pub-ad-placeholder-117"> </div>
          </div>
          <Preview />
          <div className="w-[728px] h-[90px] mx-auto">
            <div id="ezoic-pub-ad-placeholder-118"> </div>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="w-[300px] h-[250px]">
            <div id="ezoic-pub-ad-placeholder-119"> </div>
          </div>
          <div className="w-[300px] h-[250px]">
            <div id="ezoic-pub-ad-placeholder-120"> </div>
          </div>
        </aside>
      </div>
      <ToolBar />
      <div className="w-full fixed bottom-0 bg-gray-900/50 backdrop-blur-xl z-30">
        <div className="mx-auto h-[90px] w-[970px]">
          <div id="ezoic-pub-ad-placeholder-121"> </div>
        </div>
      </div>
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
