import React, { useState, useEffect } from "react";

import kanyePicture from './assets/kanye-head.png'
import "./App.css"

function App() {
  const [data, setData] = useState(null);

  const [reloadAPI, setReloadAPI] = useState(false)

  const [viewPhrase, setViewPhrase] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.kanye.rest/");
      const data = await response.json();
      setData(data.quote);
    };
    fetchData();
  }, [reloadAPI]);

  return (
    <div className="App">
      <div className="containerHeader">
        <img src={kanyePicture} alt="Face Kanye" width={100} />
        <h1>Kanye Phrase</h1>
        <img src={kanyePicture} alt="Face Kanye" width={100} />
      </div>
      <button className="btn" onClick={() => {
        if (!reloadAPI) {
          setViewPhrase(true)
          setReloadAPI(true)

        } else {
          setReloadAPI(false)
        }
      }}>GENERATE PHRASE</button>
      <h1 id={viewPhrase ? "quote" : "noQuote"}>{data}</h1>
    </div>
  )
}

export default App
