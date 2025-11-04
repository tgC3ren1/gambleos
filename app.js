// Telegram WebApp Init
if (window.Telegram && window.Telegram.WebApp) {
  try { window.Telegram.WebApp.expand(); } catch(e){}
}

const bootScreen = document.getElementById('bootScreen');
window.addEventListener('load', () => {
  setTimeout(() => bootScreen.classList.add('fade-out'), 1800);
});

// Balance / Topup Simulation
const balanceEl = document.getElementById('balance');
const topupBtn = document.getElementById('topupBtn');
let balance = 100.00;

topupBtn.addEventListener('click', () => {
  balance += 50;
  balanceEl.textContent = `₺${balance.toFixed(2)}`;
  balanceEl.classList.add('glow-text');
  setTimeout(()=>balanceEl.classList.remove('glow-text'),1000);
});

// Fake Active User Counter
const userCountEl = document.getElementById('userCount');
let count = 1245;
setInterval(() => {
  count += Math.floor(Math.random()*3 - 1); // -1, 0, +1
  userCountEl.textContent = count;
}, 2500);
