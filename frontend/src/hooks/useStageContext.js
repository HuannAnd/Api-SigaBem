import { useContext } from "react";

import { StageContext } from "../contexts/StageProvider";

export default function useStageContext() {
  return useContext(StageContext)
}
