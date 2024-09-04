/**
 * Initializes and appends the score display to the stats container.
 * @returns {HTMLElement} The initialized stats container.
 */
function initializeStatsContainer(sb) {
  const currentStats = createDivElement([
    "flex",
    "flex-row",
    "justify-between",
    "md:flex-col",
    "text-center",
    "p-4",
  ]);

  // Current Score Container
  const currentScore = createDivElement(["flex", "flex-col", "justify-center"]);
  const runsContainer = createDivElement(["px-3"]);
  const oversContainer = createDivElement(["px-1"]);

  runsContainer.appendChild(sb.RUNS);
  runsContainer.appendChild(sb.WICKETS);
  oversContainer.appendChild(sb.OVERS);
  currentScore.appendChild(runsContainer);
  currentScore.appendChild(oversContainer);
  currentStats.appendChild(currentScore);

  // Current Batsmen Container
  const currentStrikers = createDivElement(["my-2"]);
  currentStrikers.appendChild(sb.BATSMAN_ONE);
  currentStrikers.appendChild(sb.BATSMAN_TWO);
  const currentPlayers = createDivElement(["s"]);
  currentPlayers.appendChild(currentStrikers);
  currentPlayers.appendChild(sb.BOWLER);
  currentStats.appendChild(currentPlayers);

  return currentStats;
}

// Create RUNS, WICKETS, OVERS, and player elements

// Create the outer container and append it to the body
const outerContainer = createDivElement(["flex", "flex-col", "md:flex-row"]);
document.body.appendChild(outerContainer);

// Create the controls and stats container
const controlsStatsContainer = createDivElement([
  "border",
  "w-full",
  "md:w-96",
]);


const currentStats = initializeStatsContainer(sb);
controlsStatsContainer.appendChild(currentStats);

// Create the information container
const informationContainer = createDivElement(["w-full", "border"]);
informationContainer.innerText = "info";

// Append containers to the outer container
outerContainer.appendChild(controlsStatsContainer);
outerContainer.appendChild(informationContainer);