let slides = document.querySelectorAll('.slide')
var count = 0

slides.forEach((slide, i) => {
    slide.style.left = `${i * 100}%`
})

const slideimg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`
    })
}

function prev() {
    if (count > 0) {
        count--
        slideimg()
    }
}

function next() {
    if (count < slides.length - 1) {
        count++
        slideimg()
    }
}
