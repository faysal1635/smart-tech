var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active-faq");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};
const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(enrty => {
            if (!enrty.isIntersecting) {
                return;
            } else {
                enrty.target.classList.add("appear");
                appearOnScroll.unobserve(enrty.target);
            }
        })
    },
    appearOptions)

faders.forEach(faders => { appearOnScroll.observe(fader); })
sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});