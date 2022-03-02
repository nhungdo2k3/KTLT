// section "About"
const aboutButtons = document.querySelectorAll(".about-button");
const aboutListText = document.querySelectorAll(".about__list-text__item");

aboutButtons.forEach((aboutButton, index) => {
  aboutButton.onclick = () => {
    document.querySelector(".about-button.active").classList.remove("active");
    aboutButton.classList.add("active");

    document
      .querySelector(".about__list-text__item.active")
      .classList.remove("active");
    aboutListText[index].classList.add("active");
  };
});

// section "Testimonial"
const listAvatar = document.querySelectorAll(".testimonial__list-avatar__item");
const listFeedback = document.querySelectorAll(
  ".testimonial__list-feedback__item"
);

listAvatar.forEach((avatar, index) => {
  avatar.onclick = () => {
    document
      .querySelector(".testimonial__list-avatar__item.active")
      .classList.remove("active");
    avatar.classList.add("active");

    document
      .querySelector(".testimonial__list-feedback__item.active")
      .classList.remove("active");
    listFeedback[index].classList.add("active");
  };
});

// Menu
const menuMobileItems = document.querySelectorAll(
  ".popup__nav > ul > li.arrow-subnav"
);

menuMobileItems.forEach((menuMobileItem) => {
  menuMobileItem.onclick = () => {
    let isActive = menuMobileItem.classList.contains("active");
    if (!isActive) {
      menuMobileItem.classList.add("active");
      const popupSubNav = menuMobileItem.querySelector(".popup__subnav");
      popupSubNav.style.maxHeight = "1000px";
      popupSubNav.style.opacity = "1";
      popupSubNav.style.visibility = "visible";
      popupSubNav.style.padding = "0.5rem !important";
    } else {
      menuMobileItem.classList.remove("active");
      const popupSubNav = menuMobileItem.querySelector(".popup__subnav");
      popupSubNav.style.maxHeight = "0";
      popupSubNav.style.opacity = "0";
      popupSubNav.style.visibility = "hidden";
      popupSubNav.style.padding = "";
    }
  };
});

const btnClosePopup = document.querySelector(".btn__close-popup");
const popup = document.querySelector(".popup");
const popupMenu = document.querySelector(".popup__menu");
const popupOverlay = document.querySelector(".popup__overlay");

const closePopupFuc = () => {
  popup.style.opacity = "0";
  popup.style.visibility = "hidden";
  popupMenu.style.transform = "translateX(-100%)";
};

btnClosePopup.onclick = closePopupFuc;
popupOverlay.onclick = closePopupFuc;

const toggleMenu = document.querySelector(".toggle-menu");
toggleMenu.onclick = () => {
  popup.style.opacity = "1";
  popup.style.visibility = "visible";
  popupMenu.style.transform = "translateX(0%)";
};

// Btn Go to top
const btnGoToTop = document.querySelector(".btn-GoToTop");
const circlePercentHeight = document.querySelector(".circle-percent-height");
const heightBody = document.querySelector("body").offsetHeight;
window.onscroll = () => {
  let heightScroll = window.scrollY + 30;
  let percentHeight = (heightScroll / heightBody) * 100;
  console.log(percentHeight);
  circlePercentHeight.setAttribute("stroke-dasharray", `${percentHeight} 100`);

  if (heightScroll > 500) {
    btnGoToTop.style.opacity = "1";
    btnGoToTop.style.visibility = "visible";
    btnGoToTop.style.transform = "translateY(0)";
  } else {
    btnGoToTop.style.opacity = "0";
    btnGoToTop.style.visibility = "hidden";
    btnGoToTop.style.transform = "translateY(30px)";
  }
};
btnGoToTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
