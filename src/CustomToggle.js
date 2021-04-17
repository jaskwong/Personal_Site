import React, {useState, useEffect} from "react";
import "./stylesheets/Toggle.css"


function CustomToggle(props) {
    const [enabled, setEnabled] = useState(false)
    const [text, setText] = useState("")

    useEffect(() => {
        let enabledTemp = props.enabled
        setEnabled(enabledTemp)
        if (enabledTemp && props.enableText) {
            setText(props.enableText)
        } else if (!enabledTemp && props.disableText) {
            setText(props.disableText)
        }
    })

    function handleToggle() {
        setEnabled(!enabled)
        if (props.toggle) props.toggle()
    }

    return (
        <div className={"toggle-container"}>
            <div className={"toggle-text"}> {text} </div>
            <div className={"toggle"} onClick={handleToggle}>
                <button className={"toggle-btn " + (enabled ? "toggle-btn-enabled" : "")} type="checkbox"/>
            </div>
        </div>
    )
}

export default CustomToggle
