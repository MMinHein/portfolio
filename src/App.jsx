import React, { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      ></div>
    </>
  );
}

export default App;
