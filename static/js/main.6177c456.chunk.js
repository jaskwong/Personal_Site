(this.webpackJsonpuntitled1=this.webpackJsonpuntitled1||[]).push([[0],{228:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n.n(a),o=n(47),s=n.n(o),c=(n(53),n(13)),r=(n(54),n(55),n(56),n(2));var l=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),i=n[0],o=n[1],s=Object(a.useRef)();Object(a.useEffect)((function(){var e=function(e){s.current.contains(e.target)||l()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]);var l=function(){o(!1)};return Object(r.jsxs)("div",{ref:s,children:[Object(r.jsxs)("button",{className:"modal-button",onClick:function(){o(!0)},children:[" ",e.data.title," "]}),Object(r.jsxs)("div",{className:"custom-modal "+(i?"show-modal":"hide-modal"),children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{style:{display:"inline-block",width:"94%"},children:[" ",e.data.title," "]}),Object(r.jsx)("div",{style:{display:"inline-block",width:"2%",cursor:"pointer"},onClick:l,className:"close-button",children:" \u2715"})]}),Object(r.jsx)("hr",{}),e.data.component&&e.data.component,Object(r.jsx)("br",{}),Object(r.jsx)("div",{style:{overflowY:"auto",maxHeight:"75%",lineHeight:"1.75em"},children:e.data.content})]})]})},d=n(48),h=n.n(d);var b=function(){return Object(r.jsx)(h.a,{id:"tsparticles",options:{fpsLimit:30,fullScreen:{enable:!0},interactivity:{detectsOn:"canvas",events:{onHover:{enable:!0,mode:"bubble"},resize:!0},modes:{bubble:{distance:200,duration:2,opacity:.6,size:15}}},particles:{color:{value:"#ffffff"},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:800},value:15},opacity:{value:.9},shape:{type:"star"},size:{random:!0,value:7}},detectRetina:!0}})};var u=function(){var e={alphaGoAway:{title:"AIpha Go Away",content:g},pandemicPal:{title:"Pandemic Pal",content:f},tcpServer:{title:"Linux TCP Server",content:v},tapestry:{title:"Tapestry",content:w}},t=Object(a.useState)(Object.keys(e)[0]),n=Object(c.a)(t,2),i=n[0],o=n[1];return Object(r.jsxs)("div",{style:{height:"75%"},children:[Object(r.jsx)("div",{className:"tab-container",style:{maxHeight:"20%",overflowY:"auto"},children:Object.keys(e).map((function(t){var n=e[t];return Object(r.jsx)("a",{className:"tab "+(i===t?"active-tab":""),onClick:function(){!function(e){o(e)}(t)},children:n.title},t)}))}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{style:{height:"80%",overflowY:"auto",lineHeight:"1.75em"},children:e[i].content})]})},m=n.p+"static/media/jasmine.35a881fa.jpg",j={title:"About Me",content:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{alt:"Jasmine Kwong",className:"pfp",src:m})}),Object(r.jsxs)("div",{children:["Hi there! As you may know, my name is Jasmine and I'm a 4th year computer science student at the University of British Columbia.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"I am passionate about technology, and its ability to span multiple disciplines, especially the field of education. I think that technology can play a large role in providing accessible, effective education in the coming years (and it already has). As you may have guessed, education is another passion of mine.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"In my free time, I enjoy creating digital art (like the background on this website), baking, and running. Oh yea, and creating personal websites."]})]}),component:null},p={title:"Personal Projects",content:"",component:Object(r.jsx)(u,{})},g=Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:" Overview "}),"AIpha Go Away was a 4 month project in which I worked with a team of 5 other students to create a basic 2D game in C++. We used OpenGL for rendering, as well as employed an Entity Component System design pattern. AIpha Go Away (a play on 'Alpha Go') is a 2-player auto-battle game revolving around humans vs AI, designed to be able to be played on Zoom via remote control of a user's device.",Object(r.jsx)("h4",{children:" Accomplishments "}),"Having been my first exposure to game development, creating this game was equal parts challenging and fulfilling. My personal contributions most notably include developing the path-finding, implementing keyframe animations (with state interpolation), and adding in a parallax scrolling background."]}),f=Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:" Overview "}),"Pandemic Pal was developed as a web application using ReactJS, Java Springboot, and mySQL. The goal of the application was to aid transitioning to remote working, during the pandemic. The application was a 4 month project, with 5 other students. There were 3 modules of the application: a booking module to allow admins to add locations and employees to book those locations as their work locations, a social module allowing admins to create topics and for users to add posts and comments, and a mail module allowing admins to assign physical mail parcels to users, and for users to request assistance.",Object(r.jsx)("h4",{children:" Accomplishments "}),"For this project, I assumed the position of Project Manager - I felt I was fit for this role due to my previous experience in developing web applications, and also because I wanted to challenge myself. I worked largely on the frontend of the application and was involved in creating almost every reactive component. I consistently performed code reviews and testing for both the frontend and backend. However, my greatest accomplishment in this role was learning how to integrate Azure Active Directory into our application, and using it to acquire ID and Access Tokens, that were then used to secure the application"]}),v=Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:" Overview "}),"I created a Linux TCP server/host program using C, that allowed users to listen and connect to specific hosts, on specified ports. It consisted of 2 non-blocking servers - one implemented with threads, and another with polling. It allowed for upto 5 simultaneous connections on a given server, and could act as a chat server, relaying messages from one client to another.",Object(r.jsx)("h4",{children:" Accomplishments "}),"This application was inspired by netcat and was meant to be a simplified version of the server. It was a challenging project and my first time creating a server. Overall it was a rewarding experience and I gained useful knowledge of C's networking APIs.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),w=Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:" Overview "}),"Tapestry is an educational tool developed by UBC's Psychology Department. I was lucky to volunteer with them and help develop an educational WordPress plugin using Vue.js and PHP. The plugin approached education in a non-linear fashion to help students make connections between topics via a graph-based interface. You can read more about it ",Object(r.jsx)("a",{rel:"noopener noreferrer",style:{textDecoration:"underline"},href:"https://tapestry-tool.com/",target:"_blank",children:" here"}),".",Object(r.jsx)("h4",{children:" Accomplishments "}),"While working in a team of 3 other software developers, I gained experience in using Vue.js and PHP for the first time, as well as was inspired by those around me. It was a great experience with lots of learning opportunities. However, most memorably, I was humbled by the many amazing student developers there. This was my first time working with a team in a professional environment, and I gained insight into collaborative coding within a structured environment, with strict guidelines for coding practices, processes, etc. It was a fun and unique experience!",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),y={title:"This Site",content:Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:" Overview "}),"This site was built using ReactJS and custom CSS - with no bootstrap! The star particles were added using the react-tsparticles library. All the artwork was drawn by hand and animations are done with CSS. You can check out the code ",Object(r.jsx)("a",{rel:"noopener noreferrer",style:{textDecoration:"underline"},href:"https://github.com/jaskwong/Personal_Site",target:"_blank",children:"here"}),". All in all, this website took me about 2 days. I'm proud of the design I created, and hope you can enjoy it while you're here too! (Make sure to check out the dark theme :D)",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h4",{children:" Design Choices"}),"So you might wonder why I didn't use bootstrap (because why reinvent the wheel). I wanted to gain a better understanding of css and visual design. Using bootstrap would've seemed like a bit of a cop-out haha. The custom artwork allowed me to combine 2 of my hobbies - art and technology - to create something (hopefully) aesthetically pleasing yet functional.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Lastly, the star particles were purely self-indulgent and I thought it added a professional yet beautiful touch to the site."]}),component:null},x="lightDarkTheme",O="/stylesheets/LightTheme.css",k="/stylesheets/DarkTheme.css";n(228);var I=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),i=n[0],o=n[1],s=Object(a.useState)(""),l=Object(c.a)(s,2),d=l[0],h=l[1];return Object(a.useEffect)((function(){var t=e.enabled;o(t),t&&e.enableText?h(e.enableText):!t&&e.disableText&&h(e.disableText)}),[e.enabled,e.enableText,e.disableText]),Object(r.jsxs)("div",{className:"toggle-container",children:[Object(r.jsxs)("div",{className:"toggle-text",children:[" ",d," "]}),Object(r.jsx)("div",{className:"toggle",onClick:function(){o(!i),e.toggle&&e.toggle()},children:Object(r.jsx)("button",{className:"toggle-btn "+(i?"toggle-btn-enabled":""),type:"checkbox"})})]})};var T=function(e){var t=Object(a.useState)("light"===e.theme||!e.theme),n=Object(c.a)(t,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){!function(){i?document.getElementById(x).setAttribute("href","/Personal_Site"+O):document.getElementById(x).setAttribute("href","/Personal_Site"+k);localStorage.setItem(x,i?"light":"dark")}()})),Object(r.jsxs)("div",{children:[Object(r.jsx)(I,{toggle:function(){o(!i)},enabled:i,enableText:"light",disableText:"dark"}),Object(r.jsx)(b,{}),Object(r.jsxs)("div",{className:"main-container",children:[Object(r.jsx)("h1",{className:"main-title",children:"Jasmine Kwong"}),Object(r.jsx)("p",{children:"Hi my name's Jasmine and this is my website, I hope you like it :D"}),Object(r.jsxs)("div",{className:"btn-container",children:[Object(r.jsx)(l,{data:j}),Object(r.jsx)(l,{data:p}),Object(r.jsx)(l,{data:y}),Object(r.jsx)("a",{rel:"noopener noreferrer",href:"https://github.com/jaskwong",target:"_blank",children:Object(r.jsx)("button",{className:"modal-button",children:"github"})})]}),Object(r.jsx)("p",{style:{width:"100%",textAlign:"center",marginTop:"10%",zIndex:"-1",opacity:"0.5"},children:"\xa9 Jasmine Kwong 2021"})]})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,230)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))},S=document.createElement("link");S.setAttribute("rel","stylesheet"),S.setAttribute("href","/Personal_Site"+O),S.setAttribute("id",x),document.head.appendChild(S);var P=localStorage.getItem(x);s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(T,{theme:P})}),document.getElementById("root")),A()},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){}},[[229,1,2]]]);
//# sourceMappingURL=main.6177c456.chunk.js.map