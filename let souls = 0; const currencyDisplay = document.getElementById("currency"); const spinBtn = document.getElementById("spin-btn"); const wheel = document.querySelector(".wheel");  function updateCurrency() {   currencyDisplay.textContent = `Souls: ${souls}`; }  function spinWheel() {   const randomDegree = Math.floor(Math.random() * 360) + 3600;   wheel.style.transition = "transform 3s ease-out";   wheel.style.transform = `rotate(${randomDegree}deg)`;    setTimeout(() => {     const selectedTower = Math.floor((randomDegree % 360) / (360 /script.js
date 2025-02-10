let souls = 0;
const currencyDisplay = document.getElementById("currency");
const spinBtn = document.getElementById("spin-btn");
const wheel = document.querySelector(".wheel");

function updateCurrency() {
  currencyDisplay.textContent = `Souls: ${souls}`;
}

function spinWheel() {
  const randomDegree = Math.floor(Math.random() * 360) + 3600;
  wheel.style.transition = "transform 3s ease-out";
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  setTimeout(() => {
    const selectedTower = Math.floor((randomDegree % 360) / (360 / 3));
    console.log(`Selected Tower: Tower ${selectedTower + 1}`);
    souls += 10;
    updateCurrency();
  }, 3000);
}

spinBtn.addEventListener("click", spinWheel);

updateCurrency();
