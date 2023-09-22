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
    <>
      <Clock />
    </>
  );
}

export default App;
