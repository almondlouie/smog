let souls = 1000;
const currencyDisplay = document.getElementById("currency");
const spinBtn = document.getElementById("spin-btn");
const wheel = document.getElementById("wheel");
const wonTowersList = document.getElementById("won-towers");

const towers = [
  "Tower 1", "Tower 2", "Tower 3", "Tower 4", "Tower 5",
  "Tower 6", "Tower 7", "Tower 8", "Tower 9", "Tower 10"
];

function updateCurrency() {
  currencyDisplay.textContent = `Souls: ${souls}`;
}

function addWonTower(towerName) {
  const li = document.createElement("li");
  li.textContent = towerName;
  wonTowersList.appendChild(li);
}

function spinWheel() {
  if (souls < 1000) {
    alert("Not enough souls!");
    return;
  }

  souls -= 1000;
  updateCurrency();

  const randomDegree = Math.floor(Math.random() * 360) + 3600; 
  wheel.style.transition = "transform 3s ease-out";
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  setTimeout(() => {
    const selectedSegment = Math.floor((randomDegree % 360) / (360 / 10));
    const wonTower = towers[selectedSegment];
    addWonTower(wonTower);
    alert(`You won: ${wonTower}`);
  }, 3000);
}

spinBtn.addEventListener("click", spinWheel);

updateCurrency();
