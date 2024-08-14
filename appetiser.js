// Select the elements
const successSection = document.querySelector(".success__content");
const successContent = document.querySelectorAll(".success__content__card");
const tabsContainer = document.querySelector(".success__tabs");
const successTab = document.querySelectorAll(".success__tabs__img");

// Add click event listeners to the tabs
successTab.forEach((tab, tabIndex) => {
  tab.addEventListener("click", () => {
    tabsContainer.querySelector(".active").classList.remove("active");
    successContent.forEach((contentEl) => contentEl.classList.remove("active"));

    tab.classList.add("active");
    successContent[tabIndex].classList.add("active");
  });
});

// Autoplay function definition
const autoplay = () => {
  // Find the current active tab index
  let tabIndex = 0;
  successTab.forEach((tab, i) => {
    if (tab.classList.contains("active")) {
      tabIndex = i;
    }
  });

  // Move to the next tab index or loop back to the start
  tabIndex = tabIndex < successTab.length - 1 ? tabIndex + 1 : 0;

  tabsContainer.querySelector(".active").classList.remove("active");
  successContent.forEach((contentEl) => contentEl.classList.remove("active"));

  successTab[tabIndex].classList.add("active");
  successContent[tabIndex].classList.add("active");
};

let successInterval = setInterval(autoplay, 2000);

// Stop the autoplay when hovering over the success section
successSection.addEventListener("mouseenter", () => {
  clearInterval(successInterval);
});

// Restart the autoplay when the mouse leaves the success section
successSection.addEventListener("mouseleave", () => {
  successInterval = setInterval(autoplay, 2000);
});
// =======================================================================
const counter = document.querySelector(".counter");

counter.innerText = "0";
const updateCounter = () => {
  const target = +counter.getAttribute("data-target");
  const c = +counter.innerText;
  const increment = target / 500;

  if (c < target) {
    counter.innerText = `${Math.ceil(c + increment)}`;
    setTimeout(updateCounter, 10);
  } else {
    counter.innerText = target;
  }
};
updateCounter();
