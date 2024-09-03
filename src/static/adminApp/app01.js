/**
 * Creates a span element with specified classes and text content.
 * @param {string[]} classNames - The list of class names to be applied to the span element.
 * @param {string} textContent - The text content of the span element.
 * @returns {HTMLElement} The created span element.
 */
function createSpanElement(classNames, textContent) {
  const span = document.createElement("span");
  span.classList.add(...classNames);
  span.textContent = textContent;
  return span;
}

/**
 * Creates a div element with specified classes.
 * @param {string[]} classes - The list of classes to be applied to the div element.
 * @returns {HTMLElement} The created div element.
 */
function createDivElement(classes) {
  const div = document.createElement("div");
  div.classList.add(...classes);
  return div;
}

/**
 * Creates a table element with specified classes.
 * @param {string[]} classes - The list of classes to be applied to the table element.
 * @returns {HTMLElement} The created table element.
 */
function createTableElement(classes) {
  const table = document.createElement("table");
  table.classList.add(...classes);
  return table;
}

/**
 * Creates a div for displaying a player's name and score.
 * @param {string} playerName - The name of the player.
 * @param {string} score - The score of the player.
 * @returns {HTMLElement} The created div element representing the player.
 */
function createCurrentPlayerElement(playerName, score) {
  const playerElement = createDivElement(["flex", "justify-between"]);
  playerElement.appendChild(createSpanElement(["text-sm", "px-2"], playerName));
  playerElement.appendChild(createSpanElement(["text-sm", "px-2"], score));
  return playerElement;
}

/**
 * Creates and returns the current bowler's stats container.
 * @returns {HTMLElement} The created bowler container element.
 */
function createCurrentBowler() {
  // Create the current bowler container
  const currentBowler = createDivElement([
    "flex",
    "flex-col",
    "text-left",
    "md:mt-4",
  ]);

  // Create and append the bowler's details
  const bowlerDetails = createCurrentPlayerElement("Bowler Name", "3.3/4");
  currentBowler.appendChild(bowlerDetails);

  // Create the over table to display ball counts
  const currentOverTable = createTableElement(["table", "table-xs", "px-5"]);
  const currentOverBallCount = document.createElement("tr");
  currentOverBallCount.innerHTML = `
      <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>1</td>
    `;

  // Append the ball count row to the over table
  currentOverTable.appendChild(currentOverBallCount);

  // Append the over table to the current bowler container
  currentBowler.appendChild(currentOverTable);

  return currentBowler;
}

/**
 * Initializes and appends the score display to the stats container.
 * @returns {HTMLElement} The initialized stats container.
 */
function initializeStatsContainer() {
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

  runsContainer.appendChild(RUNS);
  runsContainer.appendChild(WICKETS);
  oversContainer.appendChild(OVERS);
  currentScore.appendChild(runsContainer);
  currentScore.appendChild(oversContainer);
  currentStats.appendChild(currentScore);

  // Current Batsmen Container
  const currentStrikers = createDivElement(["my-2"]);
  currentStrikers.appendChild(BATSMAN_ONE);
  currentStrikers.appendChild(BATSMAN_TWO);
  currentStats.appendChild(currentStrikers);
  currentStats.appendChild(BOWLER);

  return currentStats;
}

// Create RUNS, WICKETS, OVERS, and player elements
const RUNS = createSpanElement(["md:text-5xl", "text-2xl"], "100");
const WICKETS = createSpanElement(["md:text-3xl", "text-xl"], "/10");
const OVERS = createSpanElement(["md:text-2xl", "text-md"], "3.5");
const BATSMAN_ONE = createCurrentPlayerElement("Batsman One", "12(2)");
const BATSMAN_TWO = createCurrentPlayerElement("Batsman Two", "33(22)");
const BOWLER = createCurrentBowler();

// Create the outer container and append it to the body
const outerContainer = createDivElement(["flex", "flex-col", "md:flex-row"]);
document.body.appendChild(outerContainer);

// Create the controls and stats container
const controlsStatsContainer = createDivElement([
  "border",
  "w-full",
  "md:w-96",
]);
const currentStats = initializeStatsContainer();
controlsStatsContainer.appendChild(currentStats);

// Create the information container
const informationContainer = createDivElement(["w-full", "border"]);
informationContainer.innerText = "info";

// Append containers to the outer container
outerContainer.appendChild(controlsStatsContainer);
outerContainer.appendChild(informationContainer);
