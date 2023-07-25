import { main, footer } from "./index";

const menuPage = () => {
    document.body.setAttribute("id", "menu-body");

    main.setAttribute("id", "menu-main");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("main-container");

    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("main-title");
    menuTitle.textContent = "Ready to dine?";

    const foodTypesList = document.createElement("div");
    foodTypesList.setAttribute("id", "food-types-list");
    const mainFoods = document.createElement("h2");
    mainFoods.classList.add("food-type");
    mainFoods.textContent = "Main";
    const desertFoods = document.createElement("h2");
    desertFoods.classList.add("food-type");
    desertFoods.textContent = "Deserts";
    const drinks = document.createElement("h2");
    drinks.classList.add("food-type");
    drinks.textContent = "Drinks";
    foodTypesList.append(mainFoods, desertFoods, drinks);

    const foodSection = document.createElement("div");
    foodSection.setAttribute("id", "food-section");
    const mainFoodsContent = document.createElement("div");
    mainFoodsContent.setAttribute("id", "main-foods-content");
    const desertFoodsContent = document.createElement("div");
    const drinksContent = document.createElement("div");

    const soup = document.createElement("div");
    const soupTitle = document.createElement("h3");
    soupTitle.classList.add("main-foods-title");
    soupTitle.textContent = "Soup";
    soup.appendChild(soupTitle);

    const poultry = document.createElement("div");
    const poultryTitle = document.createElement("h3");
    poultryTitle.classList.add("main-foods-title");
    poultryTitle.textContent = "Poultry";
    poultry.appendChild(poultryTitle);

    const meats = document.createElement("div");
    const meatsTitle = document.createElement("h3");
    meatsTitle.classList.add("main-foods-title");
    meatsTitle.textContent = "Meats";
    meats.appendChild(meatsTitle);

    const seafoods = document.createElement("div");
    const seaTitle = document.createElement("h3");
    seaTitle.classList.add("main-foods-title");
    seaTitle.textContent = "Sea Food";
    seafoods.appendChild(seaTitle);

    const vegetarian = document.createElement("div");
    const vegTitle = document.createElement('h3');
    vegTitle.classList.add("main-foods-title");
    vegTitle.textContent = "Vegetarian"
    vegetarian.appendChild(vegTitle);

    mainFoodsContent.append(soup, poultry, meats, seafoods, vegetarian);
    foodSection.appendChild(mainFoodsContent);

    menuContainer.append(menuTitle, foodTypesList, foodSection);
    main.appendChild(menuContainer);

    document.body.append(main, footer);

    return document.body;
}

export { menuPage };