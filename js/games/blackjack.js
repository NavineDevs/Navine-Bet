games.blackjack = {
  render() {
    return `
    <div class="game">
      <h2>Blackjack</h2>
      <button onclick="bjPlay()">Deal (Bet $50)</button>
      <div id="bjOut"></div>
    </div>`;
  }
};

function bjPlay() {
  const bet = 50;
  if (!spend(bet)) return;

  const player = Math.floor(Math.random() * 11) + 16;
  const dealer = Math.floor(Math.random() * 11) + 16;

  let result = "Lost";
  if (player <= 21 && (dealer > 21 || player > dealer)) {
    win(bet * 2);
    result = `You ${player} vs Dealer ${dealer} → WIN`;
  }

  document.getElementById("bjOut").innerText = result;
}
