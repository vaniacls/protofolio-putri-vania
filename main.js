// toggle
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navlists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navlists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// Clear form before unlimited
window.onbeforeunload = () => {
    for (const form of document.getElemenetsByTagName("form")) {
        form.reset();
    }
};
