
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {
  let tablist = [
    {
      title: "Tab 1",
      content: "Tab 1 content is showing here"
    },
    {
      title: "Tab 2",
      content: "Tab 2 content is showing here"
    },
    {
      title: "Tab 3",
      content: "Tab 3 content is showing here"
    }
  ];
  return (
    <div>
        <Tabs tablist={tablist} />
        <h1>ef</h1>
    </div>
  )
}

export default App
