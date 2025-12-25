games.poker = {
  render() {
    return `
    <div class="game">
      <h2>Video Poker</h2>
      <button onclick="pokerPlay()">Deal (Bet $25)</button>
      <div id="pokerOut"></div>
    </div>`;
  }
};

function pokerPlay() {
  const bet = 25;
  if (!spend(bet)) return;

  const winRoll = Math.random();
  let winAmt = 0;

  if (winRoll > 0.95) winAmt = bet * 50;
  else if (winRoll > 0.85) winAmt = bet * 10;
  else if (winRoll > 0.7) winAmt = bet * 2;

  if (winAmt > 0) win(winAmt);

  document.getElementById("pokerOut").innerText =
    winAmt ? `Win +$${winAmt}` : "No win";
}
