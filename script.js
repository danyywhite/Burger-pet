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