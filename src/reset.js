import { main, footer } from "./index";

const emptySection = section => {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    section.removeAttribute("id");
}

const clearPage = () => {
    emptySection(main);
    emptySection(footer);
}

export { clearPage };