games.keno = {
  render() {
    return `
    <div class="game">
      <h2>Keno</h2>
      <button onclick="kenoPlay()">Draw (Bet $20)</button>
      <div id="kenoOut"></div>
    </div>`;
  }
};

function kenoPlay() {
  const bet = 20;
  if (!spend(bet)) return;

  const hits = Math.floor(Math.random() * 5);
  const mult = hits >= 3 ? hits * 2 : 0;
  const winAmt = bet * mult;

  if (winAmt > 0) win(winAmt);

  document.getElementById("kenoOut").innerText =
    `Hits: ${hits} → ${winAmt ? "+$" + winAmt : "Lost"}`;
}
