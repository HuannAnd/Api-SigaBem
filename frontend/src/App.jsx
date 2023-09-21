import useStageContext from "./hooks/useStageContext";

import Aside from "./components/Aside";

function App() {
  const stage = useStageContext();

  return <Aside />;
}

export default App;
