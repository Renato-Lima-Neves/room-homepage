let slideIndex = 1;
const btnLeft = document.querySelector('.btn.left');
const btnRight = document.querySelector('.btn.right');
const main = document.querySelector('.main');
// Next/previous controls
const plusSlides = (n) => {
    showSlides(slideIndex += n);
}
// Image and Text controls
const currentSlide = (n) => {
    showSlides(slideIndex = n);
}
// Slides
const showSlides = (n) => {
    let i;
    let sliderImg = document.getElementsByClassName('slider-img');
    let sliderText = document.getElementsByClassName('slider-text');
    if(n > sliderImg.length && sliderText.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = sliderImg.length
        slideIndex = sliderText.length
    }
    for (i = 0; i < sliderImg.length; i++) {
        sliderImg[i].style.display = "none";
    }
    sliderImg[slideIndex-1].style.display = "block";
    for (i = 0; i < sliderText.length; i++) {
        sliderText[i].style.display = "none";
    }
    sliderText[slideIndex-1].style.display = "block";
}

showSlides(slideIndex);
// Buttons
btnLeft.addEventListener('click', () => {
    plusSlides(-1)
})

btnRight.addEventListener('click', () => {
    plusSlides(1)
})
//Nav ham
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const navList = document.querySelector('.nav-list__wrapper');

open.addEventListener('click', () => {
    navList.style.display = 'flex';
    document.body.classList.add('dark-opacity');
});

close.addEventListener('click', () => {
    navList.style.display = 'none';
    document.body.classList.remove('dark-opacity');
});

navList.style.display = 'none';