import useStageContext from "./hooks/useStageContext";

import stages from "./services/stages";

import Clock from "./components/Clock";
import { useLayoutEffect } from "react";

const ONE_MINUTE_IN_MS = 1000 * 60;

function App() {
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      stages.forEach((x) => (x.time -= 1));
    }, 3000);
  }, []);

  return (
    <div className="w-full @mobile:bg-white @laptop:min-h-screen @mobile:h-auto @mobile:min-h-0 px-[3vw] mx-auto block">
        <Clock />
    </div>
  );
}

export default App;
