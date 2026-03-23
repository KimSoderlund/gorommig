const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".header-nav p");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const target = link.getAttribute("data-target");

        navLinks.forEach(navLink => {
            navLink.classList.remove("active");
        });
        link.classList.add("active");

        sections.forEach(section => {
            if (section.id === target) {
                section.style.display = "block";
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
            section.style.display = "block";
            section.classList.add("active");
        } else {
            section.style.display = "none";
            section.classList.remove("active");
        }
    });
}
init();