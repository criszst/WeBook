document.addEventListener("DOMContentLoaded", () => {
    const toggleNavbar = (toggleId, navId, bodyId, headerId) => {
const toggleElement = document.getElementById(toggleId);
 const navElement = document.getElementById(navId);
 const bodyElement = document.getElementById(bodyId);
 const headerElement = document.getElementById(headerId);

 if (toggleElement && navElement && bodyElement && headerElement) {
   toggleElement.addEventListener("click", () => {
     navElement.classList.toggle("show");
     toggleElement.classList.toggle("bx-x");
     bodyElement.classList.toggle("body-pd");
     headerElement.classList.toggle("body-pd");
   });
}
};

 toggleNavbar("header-toggle", "nav-bar", "body-pd", "header");

 // Ativa apenas um link
 const navigationLinks = document.querySelectorAll(".nav_link");

navigationLinks.forEach((link) => {
   link.addEventListener("click", (event) => {
     event.preventDefault();

     link.classList.add("active");
     window.location.href = link.href;

   });
});

 // função para ativar o link correto
 function setActiveLink() {
const currentUrl = window.location.pathname;
 const navigationLinks = document.querySelectorAll(".nav_link");

navigationLinks.forEach((link) => {
 const href = link.getAttribute("href");

 if (href !== "#" && href !== "") navigationLinks[0].classList.remove("active");

 if (href === currentUrl) link.classList.add("active");

});
}

 setActiveLink();
});


 const navBar = document.getElementById('header')

 window.addEventListener('scroll', function () {
if (window.pageYOffset > 0) {
   navBar.classList.add('navbar-after-scroll')
 } else {
   navBar.classList.remove('navbar-after-scroll')
 }

})