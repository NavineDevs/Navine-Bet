games.plinko = {
  render() {
    return `
    <div class="game">
      <h2>Plinko</h2>
      <button onclick="plinkoDrop()">Drop Ball (Bet $30)</button>
      <div id="plinkoOut"></div>
    </div>`;
  }
};

function plinkoDrop() {
  const bet = 30;
  if (!spend(bet)) return;

  const multipliers = [0, 0.5, 1, 2, 5];
  const m = multipliers[Math.floor(Math.random() * multipliers.length)];
  const winAmt = Math.floor(bet * m);

  if (winAmt > 0) win(winAmt);

  document.getElementById("plinkoOut").innerText =
    `Multiplier ${m}× → ${winAmt ? "+$" + winAmt : "Lost"}`;
}
