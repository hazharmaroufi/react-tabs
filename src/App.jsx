import { useState } from "react";
import "./App.css";

function App() {
  const [tab, setTab] = useState(1);
  return (
    <>
      <h1>Tabs Component with react</h1>
      <div>
        <button onClick={() => setTab(1)}>Tab 1</button>
        <button onClick={() => setTab(2)}>Tab 2</button>
        <button onClick={() => setTab(3)}>Tab 3</button>
        <button onClick={() => setTab(4)}>Tab 4</button>
      </div>
      <div>
        <p className={tab === 1 ? "" : "hidden"}>tab 1 content</p>
        <p className={tab === 2 ? "" : "hidden"}>tab 2 content</p>
        <p className={tab === 3 ? "" : "hidden"}>tab 3 content</p>
        <p className={tab === 4 ? "" : "hidden"}>tab 4 content</p>
      </div>
    </>
  );
}

export default App;
