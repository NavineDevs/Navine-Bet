games.limbo = {
  render() {
    return `
    <div class="game">
      <h2>Limbo</h2>
      <button onclick="limboPlay()">Play (Bet $20)</button>
      <div id="limboOut"></div>
    </div>`;
  }
};

function limboPlay() {
  const bet = 20;
  if (!spend(bet)) return;

  const roll = Math.random() * 10;
  const target = 2;

  if (roll > target) {
    const winAmt = Math.floor(bet * target);
    win(winAmt);
    document.getElementById("limboOut").innerText = `Hit ${roll.toFixed(2)} → +$${winAmt}`;
  } else {
    document.getElementById("limboOut").innerText = "Crashed!";
  }
}
