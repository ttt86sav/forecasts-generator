/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const button = document.querySelector(".forecast-btn");
const forecast1 = "Сегодня вечером тебя ожидает приятный сюрприз";
const forecast2 = "Очень скоро сбудется то, о чём ты мечтаешь";
const forecast3 = "Ты на верном пути";
const forecast4 = "Сегодня ты получишь хорошие новости";
const forecast5 = "Сегодня у тебя всё получится";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

button.addEventListener('click', function() {
    const currentForecast = document.querySelector(".current-forecast h1");
    const currentPercent = document.querySelector(".current-forecast p");
    const forecastsList = document.querySelector(".forecasts");
    const forecastItem = document.querySelector(".forecast-item");
    const previousForecast = document.querySelector(".forecast-item h3");
    const previousPercent = document.querySelector(".forecast-item p");

    const forecastNumber = getRandomInt(1, 6);
    const randomPercent = getRandomInt(0, 101);

    if (currentPercent) {
        previousForecast.textContent = currentForecast;
        previousPercent.textContent = `Вероятность: ${currentPercent}%`;
        forecastItem.append(previousForecast, previousPercent);
        forecastsList.prepend(forecastItem);
    }

    currentPercent.textContent = `Вероятность: ${randomPercent}%`;

    switch (forecastNumber) {
        case 1:
            currentForecast.textContent = forecast1;
            return currentForecast;
        case 2:
            currentForecast.textContent = forecast2;
            return currentForecast;
        case 3:
            currentForecast.textContent = forecast3;
            return currentForecast;
        case 4:
            currentForecast.textContent = forecast4;
            return currentForecast;
        default:
            currentForecast.textContent = forecast5;
            return currentForecast;
    }
})