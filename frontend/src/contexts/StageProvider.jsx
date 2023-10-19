import { createContext, useLayoutEffect, useState } from "react";

import Aside from "../layouts/Aside";

import stages from "../services/stages";

export const StageContext = createContext(null);
export const StageTimeContext = createContext(null);

export default function StageProvider({ children }) {
  const [stage, setStage] = useState(0);

  useLayoutEffect(() => {}, []);

  return (
    <StageContext.Provider value={stage}>
      <StageTimeContext.Provider
        value={stage !== 0 ? stages[stage - 1].time : 0}
      >
        <Aside setStage={setStage} />
        {children}
      </StageTimeContext.Provider>
    </StageContext.Provider>
  );
}
