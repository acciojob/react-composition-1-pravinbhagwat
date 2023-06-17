
import React from "react";
import Tabs from "./Tabs";

const App = () => {
  let tablist = [
    {
      title: "Tab 1",
      content: "This is content for Tab 1."
    },
    {
      title: "Tab 2",
      content: "This is content for Tab 2."
    },
    {
      title: "Tab 3",
      content: "This is content for Tab 3."
    }
  ];
  return (
    <div>
        <Tabs tablist={tablist} />
    </div>
  )
}

export default App
