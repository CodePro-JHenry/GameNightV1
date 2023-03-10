const ownedGamesString = localStorage.getItem("ownedGames");
let ownedGames = [];
if (ownedGamesString) {
  ownedGames = JSON.parse(ownedGamesString);
}

function updateOwnedGamesInLS() {
  localStorage.setItem("ownedGames", JSON.stringify(ownedGames));
}

function addOwned(gameName) {
  if (!ownedGames.includes(gameName)) {
    ownedGames.push(gameName);
    updateOwnedGamesInLS();
  }
  renderOwnedList();
}

function removeOwned(gameName) {
  const gameIdx = ownedGames.findIndex((game) => game === gameName);
  console.log(gameIdx);
  if (gameIdx > -1) {
    ownedGames.splice(gameIdx, 1);
    updateOwnedGamesInLS();
  }
  renderOwnedList();
}

function renderOwnedList() {
  // TODO : Implement clearing the container and rebuilding list of
  // owned games based on ownedGames array.
}

// Test the function:
addOwned("Dominion");
addOwned("Ticket to Ride");
console.log(ownedGames);
// Test again to verify that the same game doesn't get added more than once:
addOwned("Ticket to Ride");
console.log(ownedGames);
// Test removing game
removeOwned("Dominion");
console.log(ownedGames);
