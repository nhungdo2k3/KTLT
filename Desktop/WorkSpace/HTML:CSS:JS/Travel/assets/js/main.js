function ShowMenuInTablet() {
    var menu = document.getElementsByClassName("nav__list");
    menu[0].style.transform = "translateX(0)";
}

function CloseMenuInTablet() {
    var menu = document.getElementsByClassName("nav__list");
    menu[0].style.transform = "translateX(100%)";
}