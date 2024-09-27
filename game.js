const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 100, 50, 50);  // Just a placeholder for your spaceship
}

function gameLoop() {
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();

