import { TopComponent } from "./components/TopComponent";
import { BottomComponent } from "./components/BottomCompoent";

function App() {
  return (
    <>
      <div className="relative">
        <TopComponent />
        <div className="blur_item z-[500]"></div>
      </div>
      <BottomComponent />
    </>
  );
}

export default App;
