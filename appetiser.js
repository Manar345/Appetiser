// Select the elements
const successSection = document.querySelector(".success__content");
const successContent = document.querySelectorAll(".success__content__card");
const tabsContainer = document.querySelector(".success__tabs");
const successTab = document.querySelectorAll(".success__tabs__img");

// Add click event listeners to the tabs
successTab.forEach((tab, tabIndex) => {
  tab.addEventListener("click", () => {
    // Remove active class from the currently active tab and content
    tabsContainer.querySelector(".active").classList.remove("active");
    successContent.forEach((contentEl) => contentEl.classList.remove("active"));

    // Add active class to the clicked tab and corresponding content
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

  // Remove active class from all tabs and content
  tabsContainer.querySelector(".active").classList.remove("active");
  successContent.forEach((contentEl) => contentEl.classList.remove("active"));

  // Add active class to the new tab and corresponding content
  successTab[tabIndex].classList.add("active");
  successContent[tabIndex].classList.add("active");
};

// Start the autoplay with a 3-second interval
let successInterval = setInterval(autoplay, 3000);

// Stop the autoplay when hovering over the success section
successSection.addEventListener("mouseenter", () => {
  clearInterval(successInterval);
});

// Restart the autoplay when the mouse leaves the success section
successSection.addEventListener("mouseleave", () => {
  successInterval = setInterval(autoplay, 3000);
});
