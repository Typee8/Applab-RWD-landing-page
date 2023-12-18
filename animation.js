document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth >= 1000) {
    let menus = document.getElementsByClassName("menu");

    if (menus.length > 0) {
      const menu = menus[0];

    window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        menu.style.backgroundColor = "#2C2C2C";
      } else {
        menu.style.backgroundColor = "transparent";
      }
      });
    }
  }
});