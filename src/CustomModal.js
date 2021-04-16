import React, {useState, useRef, useEffect} from "react";


function CustomModal(props) {
    const [show, setShow] = useState(false)
    const [animate, setAnimate] = useState(false)

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
        setAnimate(true)
        setShow(true)
    }

    const showPanel =
        {
            display: "block",
            position: "fixed",
            width: "80%",
            top: "5%",
            margin: "2.5% auto",
            left: "0",
            right: "0",
            backgroundColor: "rgba(255, 237, 219, 1)",
            borderRadius: "10px",
            textAlign: "left",
            padding: "30px",
            color: "dimgray",
            height: "70%",
            animation: show ? "displayPanel 1s 1" : "closePanel 1s forwards",
        }

    const hidePanel = {
        display: "none"
    }

    return (
        <div ref={clickedOutside}>
            <button className={"modal-button"} onClick={handleShow}> {props.data.title} </button>
            <div className={'custom-modal'} style={animate ? showPanel : hidePanel}>
                <div>
                    <h2 style={{display: "inline-block", width: "98%"}}> {props.data.title} </h2>
                    <div style={{display: "inline-block", width: "2%", cursor: "pointer", fontSize: "1.5em"}}
                         onClick={handleClose} className={"close-button"}> ✕
                    </div>
                </div>
                <hr style={{borderBottom: "none", borderTop: "solid 1px rgba(1, 1, 1, 0.2)"}}/>

                {props.data.component && props.data.component}
                <br/>
                <div style={{overflowY: "auto", maxHeight: "75%", lineHeight: "1.75em"}}>
                    {props.data.content}
                </div>
            </div>
        </div>
    );
}

export default CustomModal;
