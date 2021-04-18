import React, {useState, useRef, useEffect} from "react";
import "./stylesheets/Modal.css"


function CustomModal(props) {
    const [show, setShow] = useState(false)

    const clickedOutside = useRef()

    useEffect(() => {
        // add when mounted
        const handleClick = e => {
            if (clickedOutside.current.contains(e.target)) {
                return;
            }
            handleClose()
        };
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)
    }

    return (
        <div ref={clickedOutside}>
            <button className={"modal-button"} onClick={handleShow}> {props.data.title} </button>
            <div className={'custom-modal ' + (show? "show-modal" : "hide-modal")}>
                <div>
                    <h2 style={{display: "inline-block", width: "98%"}}> {props.data.title} </h2>
                    <div style={{display: "inline-block", width: "2%", cursor: "pointer", fontSize: "1.5em"}}
                         onClick={handleClose} className={"close-button"}> ✕
                    </div>
                </div>
                <hr />

                {props.data.component && props.data.component}
                <br/>
                <div style={{overflowY: "auto", maxHeight: "75%", lineHeight: "1.75em", fontSize: "120%"}}>
                    {props.data.content}
                </div>
            </div>
        </div>
    );
}

export default CustomModal;
