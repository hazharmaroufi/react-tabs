import "./App.css";
import TabPanel from "./TabPanel";

function App() {
  const tabs = [
    {
      label: "Tab 1",
      content: "tab 1 content",
    },
    {
      label: "Tab 2",
      content: "tab 2 content",
    },
    {
      label: "Tab 3",
      content: "tab 3 content",
    },
    {
      label: "Tab 4",
      content: "tab 4 content",
    },
    {
      label: "Tab 5",
      content: "tab 5 content",
    },
  ];
  return (
    <>
      <h1>Tabs Component with react</h1>
      <TabPanel tabs={tabs} />
    </>
  );
}

export default App;
