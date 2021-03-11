document.addEventListener("DOMContentLoaded",() => {
    //nav
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav__link");

    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');

        
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            document.body.classList.remove("nav-open");
        });
    });
    // scroll top button show 
    scrollTopBtn = document.getElementById("btn top");

    window.onscroll = function() {

        if(this.scrollY > 50){
            scrollTopBtn.style.display = "block";
        }else  {
            scrollTopBtn.style.display = "none";
        }
    }
    //scroll back top 
    scrollTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });



    //type writer
    let typed = new Typed(".typed", {
        strings: ["junior developer","team player","sports enthusiast", "technology lover","junior developer"],
        startDelay: 1000,
        typeSpeed: 100,
        backSpeed: 100,
        loop: false,
        autoInsertCss: true
               
    });
});
