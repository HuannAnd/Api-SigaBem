import {
  createContext,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import Aside from "../components/Aside";

import stages from "../services/stages";

export const StageContext = createContext(null);
export const StageTimeContext = createContext(null);

export default function StageProvider({ children }) {
  const [stage, setStage] = useState(1);

  useLayoutEffect(() => {}, []);

  return (
    <StageContext.Provider value={stage}>
      <StageTimeContext.Provider value={stages[stage - 1].time}>
        <div className="flex flex-col">
          <Aside setStage={setStage} />
          {children}
        </div>
      </StageTimeContext.Provider>
    </StageContext.Provider>
  );
}
