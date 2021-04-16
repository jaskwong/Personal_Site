import Particles from "react-tsparticles";

function CustomParticles() {
    return (
        <Particles
            id="tsparticles"
            options={{
                fpsLimit: 30,
                fullScreen: {
                    enable: true
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 200,
                            duration: 2,
                            opacity: 0.6,
                            size: 15,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 15,
                    },
                    opacity: {
                        value: 0.9,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        random: true,
                        value: 7,
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default CustomParticles
