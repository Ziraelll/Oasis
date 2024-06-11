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

// Открыть всплывающее окно
function togglePopup() {
    document.getElementById("district-popup").style.display = "flex";
}

// Закрыть всплывающее окно
function closeDistrictPopup() {
    document.getElementById("district-popup").style.display = "none";
}

// Скачать информацию о районе
function downloadDistrictInfo() {
    // Здесь добавьте логику для скачивания информации
    alert("Downloading district information...");
}

// Добавляем обработчик события для изображения
document.querySelector('.button-image').addEventListener('click', togglePopup);
