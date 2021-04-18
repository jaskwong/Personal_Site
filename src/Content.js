import PersonalProjects from "./PersonalProjects";
import jasmine from './images/jasmine.jpg'

export const ABOUT_ME = {
    title: "About Me",
    content:
        <div>
            <div>
                <img alt={"Jasmine Kwong"} className={"pfp"} src={jasmine}/>
            </div>
            <div>
                Hi there! As you may know, my name is Jasmine and I'm a 4th year computer science student at the
                University
                of
                British Columbia.
                <br/>
                <br/>
                I am passionate about technology, and its ability to span multiple disciplines, especially the field
                of education. I think that technology can play a large role in providing accessible, effective education
                in
                the coming
                years (and it already has). As you may have guessed, education is another passion of mine.
                <br/>
                <br/>
                In my free time, I enjoy creating digital art (like the background on this website), baking, and
                running. Oh
                yea, and creating
                personal websites.
            </div>
        </div>,
    component: null
}

export const PERSONAL_PROJECTS = {
    title: "Personal Projects",
    content: "",
    component: <PersonalProjects/>
}

export const AIPHA_GO_AWAY =
    <div>
        <h4> Overview </h4>
        AIpha Go Away was a 4 month project in which I worked with a team of 5 other students to create a basic 2D game
        in C++. We used OpenGL for rendering, as well as employed an Entity Component System design pattern. AIpha
        Go Away (a play on 'Alpha Go') is a 2-player auto-battle game revolving around humans vs AI, designed to be
        able to be played on Zoom via remote control of a user's device.
        <h4> Accomplishments </h4>
        Having been my first exposure to game development, creating this game was equal parts challenging and
        fulfilling.
        My personal contributions most notably include developing the path-finding, implementing keyframe animations
        (with state interpolation), and adding in a parallax scrolling background.
    </div>

export const PANDEMIC_PAL =
    <div>
        <h4> Overview </h4>
        Pandemic Pal was developed as a web application using ReactJS, Java Springboot, and mySQL. The goal of the
        application was to
        aid transitioning to remote working, during the pandemic. The application was a 4 month project, with 5 other
        students.
        There were 3 modules of the application: a booking module to allow admins to add locations and employees to book
        those
        locations as their work locations, a social module allowing admins to create topics and for users to add posts
        and comments,
        and a mail module allowing admins to assign physical mail parcels to users, and for users to request assistance.
        <h4> Accomplishments </h4>
        For this project, I assumed the position of Project Manager - I felt I was fit for this role due to my previous
        experience
        in developing web applications, and also because I wanted to challenge myself. I worked largely on the frontend
        of the application
        and was involved in creating almost every reactive component. I consistently performed code reviews and testing
        for both the frontend and backend. However, my greatest accomplishment in this role was learning how to
        integrate Azure Active Directory into our application,
        and using it to acquire ID and Access Tokens, that were then used to secure the application
    </div>

export const TCP_SERVER =
    <div>
        <h4> Overview </h4>
        I created a Linux TCP server/host program using C, that allowed users to listen and connect to specific hosts,
        on specified ports.
        It consisted of 2 non-blocking servers - one implemented with threads, and another with polling. It allowed for
        upto 5 simultaneous
        connections on a given server, and could act as a chat server, relaying messages from one client to another.
        <h4> Accomplishments </h4>
        This application was inspired by netcat and was meant to be a simplified version of the server. It was a
        challenging project
        and my first time creating a server. Overall it was a rewarding experience and I gained useful knowledge of C's
        networking APIs.
        <br/><br/>
    </div>

export const TAPESTRY =
    <div>
        <h4> Overview </h4>
        Tapestry is an educational tool developed by UBC's Psychology Department. I was lucky to volunteer with them and
        help develop
        an educational WordPress plugin using Vue.js and PHP. The plugin approached education in a non-linear fashion
        to help students make connections between topics via a graph-based interface. You can read more
        about it <a rel={"noopener noreferrer"} style={{textDecoration: "underline"}} href={"https://tapestry-tool.com/"}
                    target={"_blank"}> here</a>.
        <h4> Accomplishments </h4>
        While working in a team of 3 other software developers, I gained experience in using Vue.js and PHP for the
        first time, as well as
        was inspired by those around me. It was a great experience with lots of learning opportunities. However, most
        memorably, I
        was humbled by the many amazing student developers there. This was my first time working with a team in a
        professional environment, and I
        gained insight into collaborative coding within a structured environment, with strict guidelines for coding
        practices, processes,
        etc. It was a fun and unique experience!
        <br/><br/>
    </div>

export const THIS_SITE = {
    title: "This Site",
    content:
        <div>
            <h4> Overview </h4>
            This site was built using ReactJS and custom CSS - with no bootstrap! The star particles were added
            using the react-tsparticles library. All the artwork was drawn by hand and animations are done with
            CSS. You can check out the code <a rel={"noopener noreferrer"} style={{textDecoration: "underline"}}
                                               href={"https://github.com/jaskwong/Personal_Site"} target={"_blank"}>
            here</a>. All in all, this website took me about 2 days. I'm proud of the design I created,
            and hope you can enjoy it while you're here too! (Make sure to check out the dark theme :D)
            <br/>
            <br/>
            <h4> Design Choices</h4>
            So you might wonder why I didn't use bootstrap (because why reinvent the wheel). I wanted to gain a better
            understanding of css and visual design. Using bootstrap would've seemed like a bit of a cop-out haha.
            The custom artwork allowed me to combine 2 of my hobbies - art and technology - to create something
            (hopefully) aesthetically pleasing yet functional.
            <br/>
            <br/>
            Lastly, the star particles were purely self-indulgent and I thought it added a professional yet beautiful
            touch
            to the site.

        </div>,
    component: null
}

