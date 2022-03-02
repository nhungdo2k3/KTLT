const header = document.querySelector("header");
const mainNavItems = document.querySelectorAll(
  "header nav .main-nav .main-nav__item"
);
const featureItems = document.querySelectorAll(".feature__item");
const planOptions = document.querySelectorAll(".plan__selection span");
const planItems = document.querySelectorAll(".plan__item");
const btnGoToTop = document.querySelector(".btn-goToTop");

btnGoToTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = () => {
  let heightScroll = window.scrollY;
  if (heightScroll > 0) {
    header.style.padding = "12px 0";
    header.style.backgroundColor = "#fff";
    header.style.boxShadow = "0 -3px 20px 0 #838383";
    btnGoToTop.style.opacity = "1";
    btnGoToTop.style.visibility = "visible";
  } else {
    header.style.padding = "";
    header.style.backgroundColor = "";
    header.style.boxShadow = "";
    btnGoToTop.style.opacity = "0";
    btnGoToTop.style.visibility = "hidden";
  }
};

mainNavItems.forEach((mainNavItem) => {
  let aTag = mainNavItem.querySelector("a");
  let iTag = mainNavItem.querySelector("i");
  var myTimeOut;
  mainNavItem.addEventListener("mouseenter", () => {
    iTag.style.transition = "0.3s linear";
    iTag.style.color = "var(--primary-color)";

    aTag.style.animation = "animation-main-nav 0.3s linear";
    myTimeOut = setTimeout(() => {
      aTag.style.color = "var(--primary-color)";
    }, 300);
  });
  mainNavItem.addEventListener("mouseleave", () => {
    aTag.style.animation = "";
    aTag.style.color = "";
    iTag.style.color = "";
    clearTimeout(myTimeOut);
  });
});

featureItems.forEach((featureItem) => {
  featureItem.addEventListener("mouseover", () => {
    featureItems.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
        return;
      }
    });
    featureItem.classList.add("active");
  });
});

planOptions[0].onclick = () => {
  if (!planOptions[0].classList.contains("plan__selection__active")) {
    planOptions[0].classList.add("plan__selection__active");
    planOptions[1].classList.remove("plan__selection__active");
    document.querySelector(".plan__selection div").style.transform =
      "translate(0%, -50%)";
  }
};

planOptions[1].onclick = () => {
  if (!planOptions[1].classList.contains("plan__selection__active")) {
    planOptions[1].classList.add("plan__selection__active");
    planOptions[0].classList.remove("plan__selection__active");
    document.querySelector(".plan__selection div").style.transform =
      "translate(100%, -50%)";
  }
};

planItems.forEach((planItem) => {
  planItem.addEventListener("mouseover", () => {
    planItems.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
        return;
      }
    });
    planItem.classList.add("active");
  });
});
