games.mines = {
  render() {
    return `
    <div class="game">
      <h2>Mines</h2>
      <button onclick="minesPlay()">Pick Tile (Bet $40)</button>
      <div id="minesOut"></div>
    </div>`;
  }
};

function minesPlay() {
  const bet = 40;
  if (!spend(bet)) return;

  const hitMine = Math.random() < 0.3;
  if (hitMine) {
    document.getElementById("minesOut").innerText = "💣 Boom! Lost.";
  } else {
    const winAmt = bet * 2;
    win(winAmt);
    document.getElementById("minesOut").innerText = `💎 Safe! +$${winAmt}`;
  }
}
