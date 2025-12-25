games.roulette = {
  render() {
    return `
    <div class="game">
      <h2>Roulette</h2>
      <button onclick="rouletteSpin()">Spin (Bet $25)</button>
      <div id="rouletteOut"></div>
    </div>`;
  }
};

function rouletteSpin() {
  const bet = 25;
  if (!spend(bet)) return;

  const num = Math.floor(Math.random() * 37);
  const red = num % 2 === 1;

  if (red) {
    win(bet * 2);
    document.getElementById("rouletteOut").innerText = `Red ${num} → +$${bet * 2}`;
  } else {
    document.getElementById("rouletteOut").innerText = `Black ${num} → Lost`;
  }
}
