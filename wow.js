const wrapper= document.querySelector('.wrapper');
const loginLink= document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');

const btnpopup = document.querySelector('.btnLogin-popup');

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});




const counters = document.querySelectorAll("h3");
let started = false;

function startCounting() {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 100;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
        startCounting();
        started = true;
    }
}, { threshold: 0.5 });

observer.observe(document.querySelector(".count"));




