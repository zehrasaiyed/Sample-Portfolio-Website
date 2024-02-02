const navbar= document.querySelector(".navbar");
const navbaroffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll('section');
const navbarlinks = document.querySelectorAll('.navbar-link');


const progress = document.querySelector('.progress-bar-wrapper');
const progressBarPercents = [97,90,50,40,50];

window.addEventListener('scroll',() =>{
mainFn();
});

const mainFn = () => {
    if(window.pageYOffset >= navbaroffsetTop){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove("sticky");
    }

    sections.forEach((section,i) => {
        if(window.pageYOffset >= section.offsetTop - 10){
            navbarlinks.forEach(navbarlink => {
                navbarlink.classList.remove('change');
            })

            navbarlinks[i].classList.add('change');
        }
    });

    if(window.pageYOffset + window.innerHeight >=
        progress.offsetTop){
            document.querySelectorAll('.progress-percent').forEach(
                (el,i) => {
                    el.style.width = `${progressBarPercents[i]}%`;
                });
        }
};

mainFn();

window.addEventListener('resize', () => {
    window.location.reload();
})