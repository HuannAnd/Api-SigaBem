import { createContext, useCallback, useLayoutEffect, useMemo, useState } from "react";

import Aside from "../components/Aside";

import stages from "../services/stages";

export const StageContext = createContext(null);

export default function StageProvider({ children }) {
  const [stage, setStage] = useState(1);

  useLayoutEffect(() => {}, []);

  return (
    <StageContext.Provider value={stage}>
      <Aside setStage={setStage} />
      {children}
    </StageContext.Provider>
  );
}
