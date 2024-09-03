/**
 * Creates a span element with a specified class and text content.
 * @param {string} className - The class name to be applied to the span element.
 * @param {string} textContent - The text content of the span element.
 * @returns {HTMLElement} The created span element.
 */
function createSpanElement(className, textContent) {
  const span = document.createElement("span");
  span.classList.add(...className);
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
  const div = document.createElement("table");
  div.classList.add(...classes);
  return div;
}

/**
 * Creates a div for displaying a batsman's name and score.
 * @param {string} batsmanName - The name of the batsman.
 * @param {string} score - The score of the batsman.
 * @returns {HTMLElement} The created div element representing the batsman.
 */
function createCurrentPlayerElement(batsmanName, score) {
  const batsmanElement = createDivElement(["flex", "justify-between"]);
  batsmanElement.appendChild(
    createSpanElement(["text-sm", "px-2"], batsmanName)
  );
  batsmanElement.appendChild(createSpanElement(["text-sm", "px-2"], score));
  return batsmanElement;
}

// Create RUNS and WICKETS elements
const RUNS = createSpanElement(["md:text-5xl", "text-2xl"], 100);
const WICKETS = createSpanElement(["md:text-3xl", "text-xl"], "/10");
const OVERS = createSpanElement(["md:text-2xl", "text-md"], "3.5");
const BATSMAN_ONE = createCurrentPlayerElement("Batsman One", "12(2)");
const BATSMAN_TWO = createCurrentPlayerElement("Batsman Two", "33(22)");

// Create the outer container and append it to the body
const outerContainer = createDivElement(["flex", "flex-col", "md:flex-row"]);
document.body.appendChild(outerContainer);

// Create the controls and stats container
const controlsStatsContainer = createDivElement([
  "border",
  "w-full",
  "md:w-96",
]);

/**
 * Initializes and appends the score display to the stats container.
 */
const currentStats = createDivElement([
  "flex",
  "flex-row",
  "justify-between",
  "md:flex-col",
  "text-center",
  "p-4",
]);

// Current Score Container
const currentScore = createDivElement(["flex","flex-col","justify-center"]);
const runs_container = createDivElement(["px-3"]);
const overs_container = createDivElement(["px-1"]);
runs_container.appendChild(RUNS);
runs_container.appendChild(WICKETS);
overs_container.appendChild(OVERS)
currentScore.appendChild(runs_container);
currentScore.appendChild(overs_container)
currentStats.appendChild(currentScore);

// Current Batsmen Container
const currentStrikers = createDivElement(["my-2"]);
currentStrikers.appendChild(BATSMAN_ONE);
currentStrikers.appendChild(BATSMAN_TWO);
currentStats.appendChild(currentStrikers);

// Current Blower Container
const currentBlower = createDivElement([
  "flex",
  "flex-col",
  "text-left",
  "md:mt-4",
]);
const currentOverTable = createTableElement(["table", "table-xs","px-5"]);
const currentOverBallCount = document.createElement("tr");
currentOverBallCount.innerHTML="<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>1</td>"
currentOverTable.appendChild(currentOverBallCount);
currentBlower.appendChild(createCurrentPlayerElement("Bowler Name", "3.3/4"));
currentBlower.appendChild(currentOverTable);
currentStats.appendChild(currentBlower);
// Add Stats to col 1
controlsStatsContainer.appendChild(currentStats);

// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************

// Create the information container
const informationContainer = createDivElement(["w-full", "border"]);
informationContainer.innerText = "info";

// Append containers to the outer container
outerContainer.appendChild(controlsStatsContainer);
outerContainer.appendChild(informationContainer);
