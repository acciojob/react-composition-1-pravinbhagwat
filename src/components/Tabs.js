import react, { useState } from "react";
import React from "react";

const Tabs = (props) => {

    let [selectedTab, setSelectedTab] = useState('');

    return (
        <div>
            <ul>
                {props.tablist.map((tab, index) => {
                    return <li key={index} onClick={(e) => setSelectedTab(tab.content)}>{tab.title}</li>
                })}
            </ul>
            <div>
                {selectedTab}
            </div>
        </div>
    )
}

export default Tabs;