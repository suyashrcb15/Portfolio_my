import { Navbar, Welcome, Dock } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Terminal from "#windows/Terminal.jsx";
import {Finder, Resume, Safari, Text, Image, Contact, Photos} from "#windows/index.js";
import Home from "#components/Home.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
gsap.registerPlugin(Draggable);


const App = () => {
    return (
        <div>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
            <Safari/>
            <Resume/>
            <Finder/>
            <Text/>
            <Image/>
            <Contact />
            <Photos/>
            <Home/>
        </div>
    );
};

export default App;
