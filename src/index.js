import "lodash";
import "../resources/style.css"
import Logo from "../resources/shakespeare.png";
import IndexBackground from "../resources/index-background.jpg"
import { homePage } from "./home";
import { aboutPage } from "./about";
import { clearPage } from "./reset";

const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

const headerFunction = (() => {
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");
    const logoImg = new Image();
    logoImg.src = Logo;
    logoImg.setAttribute("id", "logo-img");
    logoContainer.appendChild(logoImg);
    const logoTitle = document.createElement("h2");
    logoTitle.setAttribute("id", "logo-title");
    logoTitle.textContent = "The Toronto Shakespeare";
    logoContainer.appendChild(logoTitle);

    const nav = document.createElement("nav");
    const navAbout = document.createElement("button");
    navAbout.classList.add("nav-button");
    navAbout.textContent = "About";
    const navMenu = document.createElement("button");
    navMenu.textContent = "Menu";
    navMenu.classList.add("nav-button");
    const navContact = document.createElement("button");
    navContact.textContent = "Contact us";
    navContact.classList.add("nav-button");
    nav.append(navAbout, navMenu, navContact);

    header.append(logoContainer, nav);

    return{ 
        header,
        logoContainer,
        navAbout,
        navMenu,
        navContact
    };
})

let result = headerFunction();

document.body.appendChild(result.header);
homePage();

const choosePage = () => {
    console.log("hello");
    result.logoContainer.onclick = () => {
        clearPage();
        homePage();
    }
    result.navAbout.onclick = () => {
        clearPage();
        aboutPage();
    }
};

choosePage();

export { main, footer };