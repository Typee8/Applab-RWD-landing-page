document.addEventListener("DOMContentLoaded", function() {
    let menus = document.getElementsByClassName("menu");

    if (menus.length > 0) {
      const menu = menus[0];
    window.addEventListener("resize", function () {
      if (this.window.innerWidth < 1100) {
      menu.style.backgroundColor = "#2C2C2C";
      } else if (this.window.innerWidth >= 1100 && window.scrollY === 0) {
        menu.style.backgroundColor = "transparent";
      }
    })
    window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        menu.style.backgroundColor = "#2C2C2C";
      } else if (this.window.innerWidth >= 1100 && window.scrollY === 0) {
        menu.style.backgroundColor = "transparent";
      }
      });
    }
});

function dropdown () {
  let navbar__items = document.getElementsByClassName("navbar__item");
  const navbar__sub_containers = document.getElementsByClassName("navbar__sub-container");
  const navbar__sub_items = document.getElementsByClassName("navbar__sub-item");
  const hamburgerInput = document.querySelector(".hamburger__input");
  
  for (let i = 0; i < navbar__items.length; i++) {
    navbar__items[i].addEventListener("click", function () {

      if (this.querySelector(".navbar__sub-container")) {
        const navbar__sub_container = this.querySelector(".navbar__sub-container");
        const navbar__sub_container_styles = window.getComputedStyle(navbar__sub_container);
     
        if (navbar__sub_container_styles.getPropertyValue("display") === "none") {
          navbar__sub_container.style.display = "unset";

          for (let i = 0; i < navbar__sub_containers.length; i++) {
            if (navbar__sub_containers[i] !== navbar__sub_container) {
              navbar__sub_containers[i].style.display = "none";
            }
          }
        } else {
          navbar__sub_container.style.display = "none";
        }
     } else {
       for (let i = 0; i < navbar__sub_containers.length; i++) {
          navbar__sub_containers[i].style.display = "none";
       }
     }

      if (window.innerWidth < 1100) {
        if (navbar__items[i].style.backgroundColor) {
          this.style.backgroundColor = "";
        } else {
          this.style.backgroundColor = "#4C4C4C";    
        }

        for (let i = 0; i < navbar__items.length; i++) {
          if (navbar__items[i] !== this) {
            navbar__items[i].style.backgroundColor = "";
          }
        }
      }

      if (!this.querySelector(".navbar__sub-container")) {
        let navbar__text = this.querySelector('.navbar__text');
        navbar__text.click();
      }
    })
  }

  for (let i = 0; i < navbar__sub_items.length; i++) {
    navbar__sub_items[i].addEventListener("click", function () {
      let navbar__text__sub = this.querySelector('.navbar__text--sub');
      navbar__text__sub.click();
    })
  }
    
  window.addEventListener("resize", function () {

    if (window.innerWidth >= 1100) {
      for (let i = 0; i < navbar__items.length; i++) {
        if (navbar__items[i].style.backgroundColor) {
          navbar__items[i].style.backgroundColor = "";
        }
      }
      if (hamburgerInput.checked) {
        hamburgerInput.checked = false;
      }
    }
    if (!hamburgerInput.checked && this.window.innerWidth < 1100) {
      for (let i = 0; i < navbar__sub_containers.length; i++) {
      navbar__sub_containers[i].style.display = "none";
      }
    }
  })
}

/* Jeżeli kliknę w navbar__item to:
    1. Otworzy się sub-menu DONE
    2. Zmieni się kolor navbar__item na: #4C4C4C; DONE
    3. Jeżeli navbar__item został kliknięty to kolejne kliknięcie zamyka navbar DONE
    4. Po kliknięciu navbar__item zamyka inny sub-container DONE
    5. Po kliknięciu navbar__item zostaje odznaczony DONE
    6. Przy desktop, jeżeli kliknę na navbar__item to zostanie on podświetlony w wyglądzie tabletowym i smartphonowym. - zamknąłem navbar
    7. kliknięcie w .navbar__item uruchamia <a>

    Sprawdzić czy kliknięcie w navbar__text liczy się jako kliknięcie w navbar__item LICZY SIE - DONE
*/

dropdown ();