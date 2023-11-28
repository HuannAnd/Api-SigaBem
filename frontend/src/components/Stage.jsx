import busIcon from '../assets/icons/bus.png'

import useStageContext from "../hooks/useStageContext";

import useElepsingTime from "../hooks/useElepsingTime";

export default function Stage({
  stage,
  to,
  from,
  busNumber,
  roadway,
  time,
  onClick,
}) {
  const stageValue = useStageContext();
  const elapsedTime = useElepsingTime(time);

  const isOnPoint = elapsedTime > 0;

  return (
    <button
      onClick={onClick}
      className="border-b-2 p-2 border-b-gray-200 bg-@primary rounded-md text-white"
      style={{ backgroundColor: stage === stageValue ? "#9747FF"  :  "rgb(88,191,151)" }}
    >
      <div className="flex w-full h-full justify-between items-center">
        <img
          className="invert aspect-square mr-2 w-[48px]"
          src={busIcon}
          alt=""
        />
        <div className='grow'>
          <p className="font-medium text-left text-xs">
            {busNumber} {from} / {to}
            <br />({roadway})<span></span>
          </p>
          <small className="text-left block">
            {" "}
            {isOnPoint
              ? `Chegada em ${Math.max(elapsedTime, 0)} min`
              : `O ônibus chegou na parada!`}
          </small>
        </div>
      </div>
    </button>
  );
}
