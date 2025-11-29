import { Navbar, Welcome, Dock } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Terminal from "#windows/Terminal.jsx";

gsap.registerPlugin(Draggable);


const App = () => {
    return (
        <div>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
        </div>
    );
};

export default App;
