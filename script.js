let souls = 1000;
const currencyDisplay = document.getElementById("currency");
const spinBtn = document.getElementById("spin-btn");
const wheel = document.querySelector(".wheel");

function updateCurrency() {
  currencyDisplay.textContent = `Souls: ${souls}`;
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
    alert(`You won: Tower ${selectedSegment + 1}`);
    souls += 500; // Rewarding some souls back
    updateCurrency();
  }, 3000);
}

spinBtn.addEventListener("click", spinWheel);

updateCurrency();
