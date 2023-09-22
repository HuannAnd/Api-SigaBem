import useStageContext from "../hooks/useStageContext";

import { ClockIcon } from "@radix-ui/react-icons";
import stages from "../services/stages";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import getArrivalTimeInMin from "../utils/getArrivalTimeInMin";
import useStageTimeContext from "../hooks/useStageTime";

const ONE_MINUTE_IN_MS = 1000 * 60;

export default function Clock() {
  const stageValue = useStageContext();
  const time = useStageTimeContext();
  const [arrivalTime, setArrivalTime] = useState(getArrivalTimeInMin(time));

  useEffect(() => {
    setArrivalTime(getArrivalTimeInMin(time));
  }, [stageValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      setArrivalTime(getArrivalTimeInMin(time));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <ClockIcon color="red" width={300} height={300} />O ônibus chegará na sua
      parada em:
      <p className="text-3xl text-red-300">{arrivalTime} minutes</p>
    </section>
  );
}
