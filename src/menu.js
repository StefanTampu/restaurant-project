import { main, footer } from "./index";

const foodFactory = (name, price, description) => {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");
    const itemHead = document.createElement("div");
    itemHead.classList.add("item-head");
    const itemTitle = document.createElement("h4");
    itemTitle.textContent = name;
    const itemPrice = document.createElement("div");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = `$${price}`;
    itemHead.append(itemTitle, itemPrice);
    const itemDescription = document.createElement("div");
    itemDescription.classList.add("item-description");
    itemDescription.textContent = description;
    foodItem.append(itemHead, itemDescription);
    return foodItem;
}

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
    mainFoods.classList.add("nav-button");
    mainFoods.textContent = "Main";
    const desertFoods = document.createElement("h2");
    desertFoods.classList.add("nav-button");
    desertFoods.textContent = "Deserts";
    const drinks = document.createElement("h2");
    drinks.classList.add("nav-button");
    drinks.textContent = "Drinks";
    foodTypesList.append(mainFoods, desertFoods, drinks);

    const foodSection = document.createElement("div");
    foodSection.setAttribute("id", "food-section");
    const mainFoodsContent = document.createElement("div");
    mainFoodsContent.setAttribute("id", "main-foods-content");

    const soup = document.createElement("div");
    const soupTitle = document.createElement("h3");
    soupTitle.classList.add("main-foods-title");
    soupTitle.textContent = "Soup";
    soup.appendChild(soupTitle);
    soup.appendChild(foodFactory("Soup of Melons", 10, "Melons cooked with butter or chicken broth; includes grated cheese, eggs and gooseberries"));
    soup.appendChild(foodFactory("Pottage", 10, "Vegetable stew with oats, served with brown bread"))

    const poultry = document.createElement("div");
    const poultryTitle = document.createElement("h3");
    poultryTitle.classList.add("main-foods-title");
    poultryTitle.textContent = "Poultry";
    poultry.appendChild(poultryTitle);
    poultry.appendChild(foodFactory("Chicken with Damsons", 22, "Chicken and plum pie"));
    poultry.appendChild(foodFactory("Mortis", 10, "Chicken pâté"));
    poultry.appendChild(foodFactory("Capon", 27, "Chicken in a rich fruit sauce"));

    const meats = document.createElement("div");
    const meatsTitle = document.createElement("h3");
    meatsTitle.classList.add("main-foods-title");
    meatsTitle.textContent = "Meats";
    meats.appendChild(meatsTitle);
    meats.appendChild(foodFactory("Spanish Balles", 16, "Lamb meatballs"));
    meats.appendChild(foodFactory("Farts of Portingale", 18, "Lamb and date meatballs"));
    meats.appendChild(foodFactory("Powdered Beef", 27, "Salted beef soaked in a wine sauce"));

    const seafoods = document.createElement("div");
    const seaTitle = document.createElement("h3");
    seaTitle.classList.add("main-foods-title");
    seaTitle.textContent = "Sea Food";
    seafoods.appendChild(seaTitle);
    seafoods.appendChild(foodFactory("Boiled Muskels", 21, "Mussels boiled with onions, butter and beer"));
    seafoods.appendChild(foodFactory("Salmon Poached in Beer", 25, "A sailor's favourite"));

    const vegetarian = document.createElement("div");
    const vegTitle = document.createElement('h3');
    vegTitle.classList.add("main-foods-title");
    vegTitle.textContent = "Vegetarian"
    vegetarian.appendChild(vegTitle);
    vegetarian.appendChild(foodFactory("Medley of Greens", 12, "Medley of greens and herbs, including (beet leaves, baby chard, spinach, leeks, parsley, sage, rosemary, thyme, mint and much else!) with olive oil and red wine vinegar"));

    mainFoodsContent.append(soup, poultry, meats, seafoods, vegetarian);
    foodSection.appendChild(mainFoodsContent);

    const desertFoodsContent = document.createElement("div");
    desertFoodsContent.setAttribute("id", "desert-foods-content");
    desertFoodsContent.appendChild(foodFactory("Prune Tarts", 8, "3 tarts made with paste of prunes marinated in red wine overnight"))
    desertFoodsContent.appendChild(foodFactory("Damson Conserve", 8, "delicious conserve made with prunes, rosewater and white wine, served with biscuits"))

    const drinksContent = document.createElement("div");
    drinksContent.setAttribute("id", "drinks-content");
    drinksContent.appendChild(foodFactory("Water", 1, "Drink at your own peril!"));
    drinksContent.appendChild(foodFactory("Water", 4, "Non-alcoholic"));
    drinksContent.appendChild(foodFactory("Ale", 6, "Alcoholic"));
    drinksContent.appendChild(foodFactory("Wine", 9, "Locally-made red or white wine"));

    mainFoods.addEventListener("click", () => {
        console.log("hello");
        foodSection.removeChild(foodSection.firstChild);
        foodSection.appendChild(mainFoodsContent);
    })
    desertFoods.addEventListener("click", () => {
        console.log("hello");
        foodSection.removeChild(foodSection.firstChild);
        foodSection.appendChild(desertFoodsContent);
    })
    drinks.addEventListener("click", () => {
        console.log("hello");
        foodSection.removeChild(foodSection.firstChild);
        foodSection.appendChild(drinksContent);
    })

    menuContainer.append(menuTitle, foodTypesList, foodSection);
    main.appendChild(menuContainer);

    const refOne = document.createElement("a");
    refOne.href = "https://www.flaticon.com/free-icons/shakespeare";
    refOne.title = "shakespeare icons";
    refOne.textContent = "Shakespeare icon created by Flat Icons - Flaticon";
    const footerLineTwo = document.createElement("p");
    footerLineTwo.innerHTML = "Photo by <a href='https://unsplash.com/@lauraadaiphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>laura adai</a> on <a href='https://unsplash.com/photos/q0GUMkYUmds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>";
    footer.append(refOne, footerLineTwo);

    document.body.append(main, footer);

    return document.body;
}

export { menuPage };