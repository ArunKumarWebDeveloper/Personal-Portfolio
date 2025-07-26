window.onload = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkMode"); // fixed ID

  // Apply dark mode from localStorage if saved
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }

  // Add event listener to toggle dark mode
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Optional: close menu when a link is clicked (for mobile UX)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});
