
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
    "mt-4",
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