const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".header-nav p");
const hero = document.querySelector("header");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const target = link.getAttribute("data-target");
        const bgImage = link.getAttribute("data-bg");

        hero.style.backgroundImage = `url("../assets/images/${bgImage}")`;

        navLinks.forEach(navLink => {
            navLink.classList.remove("active");
        });
        link.classList.add("active");

        sections.forEach(section => {
            if (section.id === target) {
                section.style.display = "flex";
                section.classList.add("active");
            } else {
                section.style.display = "none";
                section.classList.remove("active");
            }
        });
    });
});


function init (){
    sections.forEach(section => {
        if (section.id === "home") {
            section.style.display = "flex";
            section.classList.add("active");
        } else {
            section.style.display = "none";
            section.classList.remove("active");
        }
    });
}
init();