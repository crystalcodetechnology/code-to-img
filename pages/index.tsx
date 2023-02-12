import { useAtom } from "jotai";
import Preview from "../src/components/Preview";
import ToolBar from "../src/components/ToolBar";
import { appStateAtom } from "../src/stores/appState";

function IndexPage() {
  return (
    <>
      <Backgorund />
      <Preview />
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
