let slides = document.querySelectorAll('.slide');
const dotcon = document.querySelector('.dotcon');
let count = 0;

slides.forEach((slide, i) => {
    slide.style.left = `${i * 100}%`;
});

const slideimg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
    updateDots();
};

const createdots = () => {
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        dotcon.appendChild(dot);
    });
    updateDots();
};

const updateDots = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[count].classList.add('active');
};

function goToSlide(index) {
    count = index;
    slideimg();
}

function prev() {
    if (count > 0) {
        count--;
    }
    slideimg();
}

function next() {
    if (count < slides.length - 1) {
        count++;
    } else {
        count = 0;
    }
    slideimg();
}

createdots();
