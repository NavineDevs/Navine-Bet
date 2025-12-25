games.dice = {
  render() {
    return `
    <div class="game">
      <h2>Dice</h2>
      <button onclick="diceRoll()">Roll (Bet $25)</button>
      <div id="diceOut"></div>
    </div>`;
  }
};

function diceRoll() {
  const bet = 25;
  if (!spend(bet)) return;

  const roll = Math.floor(Math.random() * 100) + 1;
  let result = "Lost";

  if (roll > 50) {
    win(bet * 2);
    result = `Rolled ${roll} → WIN +$${bet * 2}`;
  }

  document.getElementById("diceOut").innerText = result;
}
