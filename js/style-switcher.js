/*---------------- TOGGLE STYLE SWITCHER ----------------*/

const styleSwitcherToggle = document.querySelector(`.style-switcher-toggler`);
styleSwitcherToggle.addEventListener(`click`, () => {
    document.querySelector(`.style-switcher`).classList.toggle(`open`);
})

// Hide Style Switcher On Scroll 

window.addEventListener(`scroll`, () => {
    if(document.querySelector(`.style-switcher`).classList.contains(`open`)) {
        document.querySelector(`.style-switcher`).classList.remove(`open`);
    }
})

/*---------------- THEME COLORS ----------------*/

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) 
{
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) 
        {
            style.removeAttribute("disabled");
        }

        else 
        {
            style.setAttribute("disabled", "true");
        }
    })
}

/*---------------- THEME LIGHT AND DARK MODE ----------------*/

const dayLight = document.querySelector(`.day-light`);
dayLight.addEventListener(`click`, () => {
    dayLight.querySelector(`i`).classList.toggle(`fa-moon`);
    dayLight.querySelector(`i`).classList.toggle(`fa-sun`);
    document.body.classList.toggle(`light`);
})
window.addEventListener(`load`, () => {
    if(document.body.classList.contains(`light`))
    {
        dayLight.querySelector(`i`).classList.add(`fa-moon`);
    }

    else {
        dayLight.querySelector(`i`).classList.add(`fa-sun`);
    }
})