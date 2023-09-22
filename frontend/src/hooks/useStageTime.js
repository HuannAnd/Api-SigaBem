import { useContext } from "react";

import { StageTimeContext } from "../contexts/StageProvider";

export default function useStageTimeContext() {
  return useContext(StageTimeContext);
}
