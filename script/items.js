document.addEventListener('DOMContentLoaded', () => {
    // Массив данных с фоновыми изображениями
    const backgroundImages = [
        'url(/img/1.jpg)',
        'url(/img/2.jpg)',
        'url(/img/3.jpg)',
        'url(/img/4.jpg)'
    ];

    const slide = document.querySelector('.screen');
    let currentSlide = 0;
    const fadeInDuration = 1000; // Плавное появление (500мс)
    const visibleDuration = 3000; // Время отображения картинки (3000мс)
    const fadeOutDuration = 1000; // Плавное исчезновение (500мс)

    // Функция для смены фона
    const changeBackground = () => {
        // Сначала плавно показываем изображение
        slide.style.backgroundColor = 'rgb(246, 206, 65)'; // Устанавливаем прозрачность для затухания

        setTimeout(() => {
            slide.style.backgroundImage = backgroundImages[currentSlide]; // Меняем фон
            slide.style.opacity = 'transparent'; // Плавно появляем изображение

            // Переход на следующий слайд
            currentSlide = (currentSlide + 1) % backgroundImages.length; // Цикл по массиву изображений

            // Плавное исчезновение через время видимости
            setTimeout(() => {
                slide.style.backgroundColor = 'rgb(246, 206, 65)'; // Плавно исчезаем
            }, visibleDuration); // Пауза для отображения фона (3000мс)

        }, fadeOutDuration); // Ждём, пока предыдущий фон исчезнет
    };

    // Запуск смены фонов с интервалом
    setInterval(changeBackground, fadeInDuration + visibleDuration + fadeOutDuration); 
    changeBackground(); // Начать сразу
});
