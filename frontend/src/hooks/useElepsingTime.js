import { useState, useEffect, useLayoutEffect } from "react";

import getArrivalTimeInMin from "../utils/getArrivalTimeInMin";

const ONE_SECOND_IN_MS = 1 * 1000;
const CURRENT_TIME_IN_MS = Date.now();

export default function useElepsingTime(intialTimeInMs) {
  const [timeInMs, setTimeInMs] = useState(intialTimeInMs);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setTimeInMs(getArrivalTimeInMin(timeInMs));
    }, ONE_SECOND_IN_MS);

    return () => {  
      clearInterval(interval);
    };
  }, []);

  return timeInMs;
}
