import './stylesheets/Common.css'
import './stylesheets/Animations.css'
import CustomModal from "./CustomModal";
import CustomParticles from "./CustomParticles";
import {ABOUT_ME, PERSONAL_PROJECTS, THIS_SITE} from "./Content"
import React, {useState, useEffect} from 'react'
import {THEME_ID, THEMES} from "./constants";
import CustomToggle from "./CustomToggle";

function App(props) {
    const [lightMode, setLightMode] = useState((props.theme === "light" || !props.theme))

    useEffect(() => {
        updateTheme()
    }, [lightMode]);

    function handleThemeChange() {
        setLightMode(!lightMode)
    }

    function updateTheme() {
        console.log("light: " + lightMode)
        if (lightMode) {
            document.getElementById(THEME_ID).setAttribute("href", process.env.PUBLIC_URL + THEMES.light)
        } else {
            document.getElementById(THEME_ID).setAttribute("href", process.env.PUBLIC_URL + THEMES.dark)
        }
        localStorage.setItem(THEME_ID, (lightMode? "light" : "dark"))
    }

    return (
        <div>
            <CustomToggle toggle={handleThemeChange}
                          enabled={lightMode} enableText={"light"}
                          disableText={"dark"}/>
            <CustomParticles/>
            <div className={"main-container"}>
                <h1 className={"main-title"}>Jasmine Kwong</h1>
                <p>
                    Hi my name's Jasmine and this is my website, I hope you like it :D
                </p>
                <div className={"btn-container"}>
                    <CustomModal data={ABOUT_ME}/>
                    <CustomModal data={PERSONAL_PROJECTS}/>
                    <CustomModal data={THIS_SITE}/>
                    <a href={"https://github.com/jaskwong"}
                       target={"_blank"}>
                        <button className={"modal-button"}>
                            github
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
