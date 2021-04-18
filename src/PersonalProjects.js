import React, {useState} from "react";
import {AIPHA_GO_AWAY, PANDEMIC_PAL, TCP_SERVER, TAPESTRY} from "./Content"

function PersonalProjects() {
    const PERSONAL_PROJECT_TABS = {
        alphaGoAway: {
            title: "AIpha Go Away",
            content: AIPHA_GO_AWAY
        },
        pandemicPal: {
            title: "Pandemic Pal",
            content: PANDEMIC_PAL
        },
        tcpServer: {
            title: "Linux TCP Server",
            content: TCP_SERVER
        },
        tapestry: {
            title: "Tapestry",
            content: TAPESTRY
        }
    }

    const [currTab, setCurrTab] = useState(Object.keys(PERSONAL_PROJECT_TABS)[0])

    function handleSelected(tabKey) {
        setCurrTab(tabKey)
    }

    return (
        <div style={{height: "75%"}}>
            <div className={"tab-container"} style={{maxHeight: "25%", overflowY: "auto"}}>
                {Object.keys(PERSONAL_PROJECT_TABS).map(tabKey => {
                        let tab = PERSONAL_PROJECT_TABS[tabKey]
                        return (
                            <a
                                className={"tab " + (currTab === tabKey ? "active-tab" : "")}
                                key={tabKey}
                                onClick={() => {
                                    handleSelected(tabKey)
                                }}
                            >
                                {tab.title}
                            </a>
                        )
                    }
                )}
            </div>
            <br/>
            <div style={{height: "75%", overflowY: "auto"}}>
                {PERSONAL_PROJECT_TABS[currTab].content}
            </div>
        </div>
    )
}

export default PersonalProjects;