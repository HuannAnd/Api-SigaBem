import { ClockIcon } from "@radix-ui/react-icons";

import stages from "../services/stages";

import Clock from "../components/Clock";
import Stage from '../components/Stage'

import sigaBemLogo from "../assets/sigabem.png";


export default function Aside({ setStage }) {
  return (
    <aside className="@mobile:py-12 bg-white @mobile:order-2 @mobile:w-full @mobile:h-auto h-screen @laptop:fixed px-4 left-0 top-0 shadow-lg text-[#111] text-sm gap-2">
      <div className="flex items-center mb-8">
        <img
          className="h-[96px] @mobile:invisible mix-blend-multiply"
          src={sigaBemLogo}
          alt="Sigabem logo"
        />
        <h2 className="text-@primary text-3xl font-semibold">
          Apoio
          <br />
          Embarque
        </h2>
      </div>
      <Clock />
      <h5 className="mb-8 font-bold">Paradas</h5>
      <div className="flex @mobile:w-full @mobile:h-auto flex-col gap-1">
        {stages.map((x, i) => (
          <Stage key={`stage_${i}`} onClick={() => setStage(x.stage)} {...x} />
        ))}
      </div>
    </aside>
  );
}
