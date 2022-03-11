let activeSlide = 1;

slideMove(activeSlide);

function nextSlide(n) {
    slideMove(activeSlide += n);
}

function slideMove(slideNumber) {
    let i;
    const slidesImg = document.querySelectorAll('.slider .right .slide');
    const slidesTitle = document.querySelectorAll('.slider-main-title .slide');

    if (slideNumber > slidesImg.length) {
        activeSlide = 1;
    }

    if (slideNumber < 1) {
        activeSlide = slidesImg.length;
    }

    for (i = 0; i < slidesImg.length; i++) {
        slidesImg[i].style.display = 'none';
        slidesTitle[i].style.display = 'none';
    }

    slidesImg[activeSlide - 1].style.display = 'block';
    slidesTitle[activeSlide - 1].style.display = 'block';
}

document.querySelector('.slider-btn-left').addEventListener('click', () => {
    nextSlide(-1);
});

document.querySelector('.slider-btn-right').addEventListener('click', () => {
    nextSlide(1);
});

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('header nav').classList.toggle('active');
})