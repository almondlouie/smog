body {
  font-family: 'Arial', sans-serif;
  text-align: center;
  background-color: black;
  color: white;
}

h1 {
  margin-top: 20px;
  font-size: 2em;
}

.game-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
}

.inventory {
  width: 200px;
  border: 2px solid white;
  padding: 10px;
}

.wheel-section {
  text-align: center;
}

#currency {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.wheel-container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: auto;
}

.wheel {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid white;
  background: conic-gradient(
    red 0deg 36deg,
    blue 36deg 72deg,
    green 72deg 108deg,
    yellow 108deg 144deg,
    purple 144deg 180deg,
    orange 180deg 216deg,
    cyan 216deg 252deg,
    pink 252deg 288deg,
    lime 288deg 324deg,
    violet 324deg 360deg
  );
  transition: transform 3s ease-out;
}

.pointer {
  position: absolute;
  top: -10px;
  left: 50%;
  width: 20px;
  height: 20px;
  background: red;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform: translateX(-50%);
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: gray;
}
