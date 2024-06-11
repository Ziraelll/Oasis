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
    alert("Downloading district information...");
}

// Добавляем обработчик события для изображения
document.querySelector('.button-image').addEventListener('click', togglePopup);


// Открыть попап с расчетами
function openCalculatePopup() {
    document.getElementById("calculate-popup").style.display = "flex";
}

// Закрыть попап с расчетами
function closeCalculatePopup() {
    document.getElementById("calculate-popup").style.display = "none";
}

// Рассчитать данные и показать в попапе
function calculate() {
    // Пример расчетов (можете заменить на свои)
    const result = "Результаты ваших расчетов";

    // Показать результат в попапе
    document.getElementById("calculation-result").innerText = result;

    // Открыть попап
    openCalculatePopup();
}

// Перетаскивание попапа
dragElement(document.getElementById("draggable-popup"));

function dragElement(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Получить начальные позиции курсора
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Рассчитать новую позицию курсора
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Установить новую позицию элемента
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
