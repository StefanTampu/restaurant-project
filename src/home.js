import { main, footer } from "./index";

const homePage = () => {
    document.body.setAttribute("id", "index-body");

    /*Creates main section of index page */
    main.setAttribute("id", "index-main");

    const indexContainer = document.createElement("div");
    indexContainer.classList.add("main-container");
    const indexTitle = document.createElement("h1");
    indexTitle.classList.add("main-title");
    indexTitle.textContent = "Good Dawning to thee, Friend!";
    const indexDescription = document.createElement("p");
    indexDescription.setAttribute("id", "index-description");
    indexDescription.textContent = "Whether you are a lover of the bard, curious about historical cuisine, or crave a hearty meal, the Toronto Shakespeare is the place for you! Our diner is ready to serve you the best in English food from the Elizabethan period.";
    indexContainer.append(indexTitle, indexDescription);
    main.appendChild(indexContainer);

    /*Footer section of index page */
    const refOne = document.createElement("a");
    refOne.href = "https://www.flaticon.com/free-icons/shakespeare";
    refOne.title = "shakespeare icons";
    refOne.textContent = "Shakespeare icon created by Flat Icons - Flaticon";
    const footerLineTwo = document.createElement("p");
    footerLineTwo.innerHTML = "Photo of Shakespeare's birthplace by <a href='https://unsplash.com/@phoenix_2022?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Swati Kedia</a> on <a href='https://unsplash.com/photos/LtEf3pAUNDo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>";
    footer.append(refOne, footerLineTwo);

    document.body.append(main, footer);

    return document.body;
};

export { homePage };