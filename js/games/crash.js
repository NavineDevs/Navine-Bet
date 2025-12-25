games.crash = {
  render() {
    return `
    <div class="game">
      <h2>Crash</h2>
      <button onclick="crashPlay()">Start (Bet $50)</button>
      <div id="crashOut"></div>
    </div>`;
  }
};

function crashPlay() {
  const bet = 50;
  if (!spend(bet)) return;

  const crash = (Math.random() * 5 + 1).toFixed(2);
  const cashout = (Math.random() * crash).toFixed(2);

  let result = "Crashed!";
  if (cashout < crash) {
    const winAmt = Math.floor(bet * cashout);
    win(winAmt);
    result = `Cashed at ${cashout}× → +$${winAmt}`;
  }

  document.getElementById("crashOut").innerText = result;
}
