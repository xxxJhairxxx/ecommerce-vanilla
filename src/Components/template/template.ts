import { Navbar } from "./Navbar";
import { Footer } from "./Footer";


const Template = () : HTMLDivElement => {
    const div : HTMLDivElement = document.createElement("div");
    const main : HTMLElement = document.createElement("main");
    const children : HTMLDivElement = document.createElement("div")
    children.classList.add('children')
    main.classList.add('min-h-[90vh]')
    main.appendChild(children);
    div.prepend(Navbar());
    div.appendChild(main)
    div.appendChild(Footer())
    return div
};


export default Template