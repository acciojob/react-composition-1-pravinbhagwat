import react from "react";

const Tabs = (props) => {
    return (
        <div>
            <ul>
                {props.tabs.map((tab, index) => {
                    return <li key={index} onClick={(e) => props.onClickHandler(e, index)}>{tab.label}</li>
                })}
            </ul>
            <div>
                {props.tabs[props.selectedTab].content}
            </div>
        </div>
    )
}

export default Tabs;