import GooglePlayground from "./layouts/GooglePlayground";

export default function App() {
  return (
    <div className="w-full @mobile:bg-white @laptop:min-h-screen @mobile:h-auto @mobile:min-h-0 px-[3vw] mx-auto block">
      <GooglePlayground />
    </div>
  );
}
