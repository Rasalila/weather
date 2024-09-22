const main = document.querySelector(".main");

const cities = ["Москва", "Нью-Йорк", "Париж", "Пекин", "Нью-Дели"];
const temperature = [];

for (let i = 0; i < cities.length; i++) {
  let temp = prompt(`Введите температуру для каждого города: ${cities[i]}`);

  let mapedCities = cities.map(function (item) {
    return item;
  });

  const subarr = [`${temp}, ${mapedCities[i]}`];
  temperature.push(Number(temp));
  console.log(subarr);
}
// мин и макс
const maxValue = Math.max(...temperature);
console.log(maxValue);

const minValue = Math.min(...temperature);
console.log(minValue);

const plusMinus = temperature.map(function (num) {
  if (num >= 1) {
    return "+";
  } else {
    return "";
  }
});
console.log(plusMinus);
// создание
let firstCity = document.createElement("p");
firstCity.classList.add("text");
firstCity.innerText =
  "Погода в Москве: " + plusMinus[0] + temperature[0] + " ℃";
main.appendChild(firstCity);

let secondCity = document.createElement("p");
secondCity.classList.add("text");
secondCity.innerText =
  "Погода в Нью-Йорке: " + plusMinus[1] + temperature[1] + " ℃";
main.appendChild(secondCity);

let thirstCity = document.createElement("p");
thirstCity.classList.add("text");
thirstCity.innerText =
  "Погода в Париже: " + plusMinus[2] + temperature[2] + " ℃";
main.appendChild(thirstCity);

let fourCity = document.createElement("p");
fourCity.classList.add("text");
fourCity.innerText = "Погода в Пекине: " + plusMinus[3] + temperature[3] + " ℃";
main.appendChild(fourCity);

let fithCity = document.createElement("p");
fithCity.classList.add("text");
fithCity.textContent =
  "Погода в Нью-Дели : " + plusMinus[4] + temperature[4] + " ℃";
main.appendChild(fithCity);

const result3 = document.createElement("p");
result3.classList.add("width");
result3.innerText = "Максимальная температура: +" + maxValue + " ℃";
main.appendChild(result3);

const result4 = document.createElement("p");
result4.classList.add("width");
result4.textContent = "Минимальная температура: " + minValue + " ℃";
main.appendChild(result4);
