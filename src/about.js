import { main, footer } from "./index";
import ysBook from "../resources/yale-shakespeare.jpeg";

const aboutPage = () => {
    document.body.setAttribute("id", "about-body");

    main.setAttribute("id", "about-main");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("main-container");
    const aboutTitle = document.createElement("h1");
    aboutTitle.classList.add("main-title");
    aboutTitle.textContent = "Obviously, this is not a real restaurant.";

    
    const aboutParagraph = document.createElement("p");
    aboutParagraph.innerHTML = "It was designed for the Odin Project's <a href='https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page' target='_blank'>restaurant page assignment</a> in the Javascript course.<br><br> On the other hand, if you are a restaurant owner, or any kind of business owner, a website would be a great tool for you to advertise your business to the world. If you like what you see here, I would be happy to work with you to create a useful website for you. The layout is currently pretty simple, so we can add layers and animations, modify it, cut some parts, leave some parts as they are - whatever meets your needs!<br><br> If you're interested in working together, <a href='mailto: stefan_tampu@yahoo.com'>email me here</a>, or <a href='https://ca.linkedin.com/in/stefan-tampu-0b83a515a' target='_blank'>contact me on Linkedin.</a>";
    aboutContainer.append(aboutTitle, aboutParagraph);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const ysDescriptor = document.createElement("div");
    ysDescriptor.classList.add("image-descriptor");
    ysDescriptor.textContent = "The tome that inspired the restaurant theme";
    const aboutImage = new Image();
    aboutImage.src = ysBook;
    aboutImage.setAttribute("id", "ysBook");
    imageContainer.append(aboutImage, ysDescriptor);

    aboutImage.onmouseenter = () => {
        ysDescriptor.classList.add("image-descriptor-hover");
    }
    aboutImage.onmouseout = () => {
        ysDescriptor.classList.remove("image-descriptor-hover");
    }

    main.append(aboutContainer, imageContainer);
    document.body.appendChild(main);
}

export { aboutPage };