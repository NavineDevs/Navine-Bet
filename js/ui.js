window.games = window.games || {};

const view = document.getElementById("view");
const toasts = document.getElementById("toasts");

function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  toasts.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function spend(bet) {
  if (state.balance < bet) {
    toast("Not enough balance");
    return false;
  }
  state.balance -= bet;
  save();
  return true;
}

function win(amount) {
  state.balance += amount;
  save();
}

window.loadGame = function (name) {
  view.innerHTML = games[name].render();
};
