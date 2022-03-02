function changeNav() {
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
        var nav = document.querySelector('nav');
        nav.classList.add("onscroll");
    } else {
        var nav = document.querySelector('nav');
        nav.classList.remove("onscroll");
    }
};

var linkId = document.querySelectorAll('nav a[href^="#"]')

var lengthLinkId = linkId.length;

for (i = 0; i < lengthLinkId; i++) {
    linkId[i].addEventListener("click", closeMenu);
}

var navHeight = document.querySelector('nav').clientHeight;

function menuTabletMobile() {
    if (navHeight === document.querySelector('nav').clientHeight) {
        openMenu();
    } else {
        closeMenu();
    }
}

function openMenu() {
    var nav = document.querySelector('nav');
    nav.style.height = 'fit-content';
    var menuList = document.querySelector('nav .menu-list');
    menuList.style.display = 'block';
}

function closeMenu() {
    if (window.innerWidth < 1024) {
        var nav = document.querySelector('nav');
        nav.style.height = null;
        var menuList = document.querySelector('nav .menu-list');
        menuList.style.display = 'none';
    }
}