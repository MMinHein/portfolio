import React, { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div>{!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}</div>
  );
}

export default App;
