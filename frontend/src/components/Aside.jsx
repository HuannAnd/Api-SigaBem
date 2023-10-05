import { ClockIcon } from "@radix-ui/react-icons";

import stages from "../services/stages";

import sigaBemLogo from "../assets/sigabem.png";
import getArrivalTimeInMin from "../utils/getArrivalTimeInMin";
import useStageContext from "../hooks/useStageContext";

function Stage({ stage, to, time, onClick }) {
  const stageValue = useStageContext();
  const arrivalTime = getArrivalTimeInMin(time);

  return (
    <button
      onClick={onClick}
      className="pb-8 border-b-2 border-b-gray-200 opacity-50 hover:opacity-100"
      style={{ opacity: stage === stageValue ? 1 : 0.2 }}
    >
      <div className="flex w-full justify-between mb-4">
        <div className="flex gap-2">
          <ClockIcon />
          <span className="text-xs text-black/40 ">{stage}</span>
        </div>
        <p>{to}</p>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-red-400 text-xs">Horário de chegada em: </p>
        <time className="text-[#111]/30 text-xs">{arrivalTime} min</time>
      </div>
    </button>
  );
}

export default function Aside({ setStage }) {
  return (
    <aside className="@mobile:py-12 @mobile:order-2 @mobile:w-full @mobile:h-auto h-screen @laptop:fixed px-4 left-0 top-0 shadow-lg text-[#111] text-sm gap-2">
      <div className="grid @mobile:none place-content-center mb-8 @mobile:h-0 @laptop:h-[20%]">
        <img
          className="scale-50 @mobile:invisible mix-blend-multiply"
          src={sigaBemLogo}
          alt="Sigabem logo"
        />
      </div>
      <h5 className="mb-8">Paradas</h5>
      <div className="flex @mobile:w-full @mobile:h-auto flex-col gap-4">
        {stages.map((x, i) => (
          <Stage key={`stage_${i}`} onClick={() => setStage(x.stage)} {...x} />
        ))}
      </div>
    </aside>
  );
}
