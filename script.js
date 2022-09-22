/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const button = document.querySelector(".forecast-btn");
const forecastsList = document.querySelector(".forecasts");

const forecast1 = "Сегодня вечером тебя ожидает приятный сюрприз";
const forecast2 = "Очень скоро сбудется то, о чём ты мечтаешь";
const forecast3 = "Ты на верном пути";
const forecast4 = "Сегодня ты получишь хорошие новости";
const forecast5 = "Сегодня у тебя всё получится";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function createNewForecastItem(title, text) {
    const template = document.querySelector("#forecast-item");
    const newForecastItem = template.content.cloneNode(true);
    newForecastItem.querySelector("h3").textContent = title;
    newForecastItem.querySelector("p").textContent = text;
    forecastsList.prepend(newForecastItem);
}

button.addEventListener('click', function() {
    const currentForecast = document.querySelector(".current-forecast h1");
    const currentPercent = document.querySelector(".current-forecast p");

    const forecastNumber = getRandomInt(1, 6);
    const randomPercent = getRandomInt(0, 101);

    if (currentForecast.textContent) {
        createNewForecastItem(currentForecast.textContent, currentPercent.textContent);
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