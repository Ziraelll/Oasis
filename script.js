// scripts.js
// плавный переход
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}


// function calculate() {
//     // Логика расчета будет добавлена позже
//     let popup = document.getElementById("calculation-popup");
//     popup.style.display = "flex";
// }
//
// function closePopup() {
//     let popup = document.getElementById("calculation-popup");
//     popup.style.display = "none";
// }
//
// let slideIndex = 0;
//
// function plusSlides(n) {
//     slideIndex += n;
//     showSlides();
// }
//
// function showSlides() {
//     const slides = document.getElementsByClassName("slide");
//     const totalSlides = slides.length;
//     const slidesToShow = 3;
//     const maxIndex = totalSlides - slidesToShow;
//
//     if (slideIndex > maxIndex) {
//         slideIndex = 0;
//     } else if (slideIndex < 0) {
//         slideIndex = maxIndex;
//     }
//
//     for (let i = 0; i < totalSlides; i++) {
//         slides[i].style.display = "none";
//     }
//
//     for (let i = slideIndex; i < slideIndex + slidesToShow; i++) {
//         slides[i].style.display = "flex";
//     }
// }
//
// // Initialize the slider by showing the first set of slides
// showSlides();

