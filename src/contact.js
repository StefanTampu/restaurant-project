import { main, footer } from "./index";

const contactPage = () => {
    document.body.setAttribute("id", "contact-body");
    main.setAttribute("id", "contact-main");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("main-container");

    const contactTitle = document.createElement("h1");
    contactTitle.classList.add("main-title");
    contactTitle.textContent = "Talk to you soon!";
    const contactDescription = document.createElement("p");
    contactDescription.setAttribute("id", "contact-description");
    contactDescription.innerHTML = "If you are interested in working together on a beautiful website, you can contact me below:<br><br><h3>Phone Number:</h3> +1 647-504-1997<br><br><h3>Email Address:</h3> <a href='mailto: stefan_tampu@yahoo.com'>stefan_tampu@yahoo.com</a><br><br><h3>LinkedIn:</h3> <a href='https://www.linkedin.com/in/stefan-tampu-0b83a515a/'>Stefan Tampu</a>";
    contactContainer.append(contactTitle, contactDescription);
    main.appendChild(contactContainer);

    const refOne = document.createElement("a");
    refOne.href = "https://www.flaticon.com/free-icons/shakespeare";
    refOne.title = "shakespeare icons";
    refOne.textContent = "Shakespeare icon created by Flat Icons - Flaticon";
    const footerLineTwo = document.createElement("p");
    footerLineTwo.innerHTML = 'Photo by <a href="https://unsplash.com/@lauraadaiphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">laura adai</a> on <a href="https://unsplash.com/photos/ZNbk5WkaIBo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    footer.append(refOne, footerLineTwo);

    document.body.append(main, footer);

    return document.body;
}

export { contactPage };