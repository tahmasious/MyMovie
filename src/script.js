const openBtnEvent = document
      .getElementById("open-menu-btn")
      .addEventListener("click", () => {
        const mainTag = document.querySelector("main");
        mainTag.style.display = "none";
        const navTag = document.querySelector("nav");
        navTag.style.display = "block";
        navTag.style.width = "100%";
      });
const closeBtnEvent = document
    .getElementById("close-menu-btn")
    .addEventListener("click", () => {
    const mainTag = document.querySelector("main");
    mainTag.style.display = "block";
    const navTag = document.querySelector("nav");
    navTag.style.display = "none";
    });