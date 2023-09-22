import useStageContext from "../hooks/useStageContext";

import { ClockIcon } from "@radix-ui/react-icons";
import stages from "../services/stages";
import { useMemo } from "react";
import getArrivalTimeInMin from "../utils/getArrivalTimeInMin";

export default function Clock() {
  const stageValue = useStageContext();

  const arrivalTime = useMemo(() => {
    const newStage = stages.find((x) => x.stage === stageValue);

    return getArrivalTimeInMin(newStage.time);
  }, [stageValue]);

  // const arrivalTime = getArrivalTimeInMin(stage.time);

  return (
    <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <ClockIcon color="red" width={300} height={300} />O ônibus chegará na sua
      parada em:
      <p className="text-3xl text-red-300">{arrivalTime} minutes</p>
    </section>
  );
}
