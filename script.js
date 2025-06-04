const hamburger = document.querySelector(".burger-menu");
const menu = document.querySelector(".hamburger-menu");
const closeIcon = document.querySelector(".close-icon");
const blurImg = document.querySelectorAll(".blur-img");

hamburger.addEventListener("click", () => {
  closeIcon.style.display = "block";
  menu.style.display = "inline";
  hamburger.style.display = "none";
  blurImg.forEach((img) => {
    img.classList.add("blur-effect");
  });
});

closeIcon.addEventListener("click", () => {
  menu.style.display = "none";
  closeIcon.style.display = "none";
  hamburger.style.display = "block";
  blurImg.forEach((img) => {
    img.classList.remove("blur-effect");
  });
});

// Function to check window width and set appropriate menu state
function checkScreenSize() {
  const isMobile = window.innerWidth <= 910; // Adjust this breakpoint to match your CSS media query

  // Show/hide burger menu icon based on screen size
  if (isMobile) {
    hamburger.style.display = "block";
    menu.style.display = "none";
    closeIcon.style.display = "none";
  }

  // On desktop, ensure hamburger menu is visible and close icon is hidden
  if (!isMobile) {
    menu.style.display = "block";
    closeIcon.style.display = "none";
    hamburger.style.display = "none"; // Remove any active class if you're using one
  }
}

// Run on page load
checkScreenSize();

// Re-run whenever window is resized
window.addEventListener("resize", checkScreenSize);
