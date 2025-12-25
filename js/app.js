const STORE = "navinebet_demo_v1";

const state = JSON.parse(localStorage.getItem(STORE)) || {
  balance: 1000
};

function save() {
  localStorage.setItem(STORE, JSON.stringify(state));
  renderBalance();
}

function renderBalance() {
  document.getElementById("balance").textContent =
    "$" + state.balance.toLocaleString();
}

function deposit() {
  const amt = Number(prompt("Deposit fake credits", 1000));
  if (amt > 0) {
    state.balance += amt;
    save();
  }
}

function resetAll() {
  if (!confirm("Reset balance?")) return;
  state.balance = 1000;
  save();
}

document.getElementById("deposit").onclick = deposit;
document.getElementById("reset").onclick = resetAll;

function loadView(name) {
  document.getElementById("view").innerHTML =
    window.games[name]?.render() || "<div class='game'>Coming soon</div>";
}

document.querySelectorAll("nav button").forEach(btn => {
  btn.onclick = () => loadView(btn.dataset.view);
});

renderBalance();
loadView("lobby");
