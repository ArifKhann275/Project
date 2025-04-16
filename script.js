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




   
      
