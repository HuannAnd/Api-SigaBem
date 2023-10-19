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

  const location = useMemo(() => {
    if (stageValue === 0) return null;
    const station = stages.find((x) => x.stage === stageValue);
    const location = station.to;

    return location;
  }, [stageValue]);

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

  if (stageValue === 0) return null;

  return (
    <article className="w-full mb-8">
      <p>
        O ônibus selecionado:{" "}
        <span className="text-@primary font-medium">{location}</span>
      </p>
      <ClockIcon color="#58bf97" className="mx-auto py-4" width={200} height={200} />
      <p>
        Falta <span className="text-@primary font-medium">{Math.max(arrivalTime, 0)} minutos</span> para a chegada!
      </p>
    </article>
  );
}
