document.addEventListener("DOMContentLoaded", function() {
    //  кнопки "Order now"
    const orderButtons = document.querySelectorAll('.header .btn, .order .btn');

    // секцию продукта
    const productSection = document.getElementById('product');

    orderButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Отключаем стандартное поведение ссылки

            // Прокручиваем к секции продукта
            productSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const closeModalButton = document.querySelector(".modal__close");
    const closeModalButtonFromInside = document.getElementById("closeModal");
    const productButtons = document.querySelectorAll('.product .btn'); // Получаем все кнопки в секции product

    // Функция для открытия модального окна
    function openModal() {
        modal.style.display = "block"; // Делаем модальное окно видимым
    }

    // Функция для закрытия модального окна
    function closeModal() {
        modal.style.display = "none"; // Скрываем модальное окно
    }

    // Открываем модальное окно при загрузке страницы (если нужно)
    // openModal(); 

    // Привязываем события кнопок закрытия
    closeModalButton.addEventListener("click", closeModal); // Обработчик для крестика
    closeModalButtonFromInside.addEventListener("click", closeModal); // Обработчик для кнопки "Закрыть"

    // Закрытие модального окна при клике вне его содержимого
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal(); // Закрываем модальное окно, если кликнули вне его
        }
    });

    // Привязываем события к кнопкам в секции "product"
    productButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Отключаем стандартное поведение ссылки
            openModal(); // Открываем модальное окно
        });
    });
});