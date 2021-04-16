import './App.css';
import './Animations.css'
import CustomModal from "./CustomModal";
import CustomParticles from "./CustomParticles";
import {ABOUT_ME, PERSONAL_PROJECTS, THIS_SITE} from "./Content"

function App() {
    return (
        <div>
            <CustomParticles/>
            <div className={"main-container"}>
                <h1 className={"main-title"}>Jasmine Kwong</h1>
                <p style={{textTransform: "uppercase"}}>
                    Hi! My name's Jasmine and this is my website, I hope you like it :D
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
