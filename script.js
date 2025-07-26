window.onload = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
 
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTopButton");

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
});

const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.src = "./Assets/sun.png"; // Switch to sun icon for light mode
    toggleBtn.alt = "Switch to Light Mode";
  } else {
    toggleBtn.src = "./Assets/moon.png"; // Switch to moon icon for dark mode
    toggleBtn.alt = "Switch to Dark Mode";
  }
});