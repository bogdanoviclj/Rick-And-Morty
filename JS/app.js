import { renderHomePage, renderCharPage } from "./ui.js";
import { getCharacters, getCharCard } from "./data.js";

const mainContentEl = document.querySelector("#main-content");
const homeEl = document.querySelector("#home");

const onHomeClick = () => {
    getCharacters().then((char) => {
        renderHomePage(char);
    });
};
    
const onCharCardClick = (event) => {
    const targetEl = event.target.parentElement.parentElement;
    console.log(targetEl);
    if (targetEl.getAttribute("class") !== "char-item") {
        return;
    }
    const id = targetEl.getAttribute("id");
    console.log(id);
    getCharCard(id)
    .then((char) => {
        renderCharPage(char);
    });
};

onHomeClick();

mainContentEl.addEventListener("click", onCharCardClick);
homeEl.addEventListener("click", onHomeClick);