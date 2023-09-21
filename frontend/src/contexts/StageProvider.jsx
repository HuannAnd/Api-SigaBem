import { createContext, useLayoutEffect, useState } from "react";

export const StageContext = createContext(null);

export default function StageProvider({ children }) {
  const [stage, setStage] = useState(1);

  useLayoutEffect(() => {}, []);

  return (
    <StageContext.Provider value={stage}>{children}</StageContext.Provider>
  );
}
