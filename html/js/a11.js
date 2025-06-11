// 轮播图
document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    const slideCount = slides.length;
    let slideInterval;

    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }

        slidesContainer.style.transform = `translateX(-${index * 100}%)`;

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });

        currentIndex = index;
    }

    // 下一张
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // 上一张
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 10000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    nextBtn.addEventListener('click', function() {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', function() {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // 点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            stopAutoSlide();
            goToSlide(index);
            startAutoSlide();
        });
    });

    slidesContainer.parentElement.addEventListener('mouseenter', stopAutoSlide);
    slidesContainer.parentElement.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
});