import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showMe, setShowMe] = useState(true);

  useEffect(() => {
    const onMessage = (event) => {
      setShowMe(event.data.iframeVisible);
      // console.log(event.data);
      console.info("message", event);
    };

    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  function ShowIframe() {
    setShowMe(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span>Sistema React</span>{" "}
          <button onClick={ShowIframe}>Aparecer Iframe</button>
        </div>

        {showMe ? (
          <div style={{backgroundColor : 'white', marginTop : '25px'}}>
            <iframe src="http://localhost:4200/" height="500px" width="100%" />
          </div>
        ) : null}
      </header>
    </div>
  );
}

export default App;
