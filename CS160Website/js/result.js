const params = new URLSearchParams(window.location.search);
const resultsDiv = document.getElementById("results");

function addResult(label, value) {
  const div = document.createElement("div");
  div.classList.add("result-item");
  div.innerHTML = `<span class="result-label">${label}:</span> ${value}`;
  resultsDiv.appendChild(div);
}

let score = 0;

const company = params.get("company") || "No answer selected";
addResult("Company with two GOTY winners", company);
if (company === "FromSoftware"){
	score++;
}

const selectedGames = params.getAll("games");
addResult(
  "Selected Games",
  selectedGames.length > 0 ? selectedGames.join(", ") : "No games selected"
);

const multiplayerCorrect = ["overwatch", "it_takes_two"];
multiplayerCorrect.forEach(game => {
  if (selectedGames.includes(game)) {
	  score++;
  }
});

const sameCompanyCorrect = ["sekiro", "elden_ring"];
if (sameCompanyCorrect.every(game => selectedGames.includes(game))) {
  score += 2;
}

const comments = params.get("comments") || "No comment provided";
addResult("Why it's your favorite", comments);

const goty = params.get("goty") || "No favorite selected";
addResult("Favorite Game", goty);

addResult("Final Score", score + " / 5");
