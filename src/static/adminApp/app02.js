/**
 * Creates a button element with specified classes and text content.
 * @param {string[]} classNames - The list of class names to be applied to the button element.
 * @param {string} textContent - The text content of the button element.
 * @returns {HTMLElement} The created button element.
 */
function createButtonElement(classNames, textContent) {
  const button = document.createElement("button");
  button.classList.add(...classNames);
  button.textContent = textContent;
  return button;
}

/**
 * Appends a list of buttons to a container element.
 * @param {HTMLElement} container - The container to which buttons will be appended.
 * @param {Array<{ classes: string[], text: string }>} buttons - An array of button configurations.
 */
function appendButtonsToContainer(container, buttons) {
  buttons.forEach(({ classes, text }) => {
    const button = createButtonElement(classes, text);
    button.id=text
    button.classList.add('hover:scale-[1.05]')
    button.addEventListener('click',()=>{
        logText(button.id)
    })
    container.appendChild(button);
  });
}

function logText(text){
    console.log(text)
}

// Create the controls container
const controls = createDivElement([
  "border",
  "flex",
  "flex-col",
  "justify-center",
  "p-4",
  "gap-3",
]);

// Button configurations
const buttonConfigs = [
  { classes: ["btn", "btn-success"], text: "6" },
  { classes: ["btn", "btn-warning"], text: "4" },
  { classes: ["btn", "btn-info"], text: "3" },
  { classes: ["btn", "btn-info"], text: "2" },
  { classes: ["btn", "btn-primary"], text: "1" },
  { classes: ["btn", "btn-neutral"], text: "Dot" },
  { classes: ["btn", "btn-error"], text: "Wicket" },
  { classes: ["btn", "btn-error"], text: "Wide" },
  { classes: ["btn", "btn-error"], text: "NoBall" },
  { classes: ["btn", "btn-error"], text: "By" }
];

// Append buttons to the controls container
appendButtonsToContainer(controls, buttonConfigs);

// Add the controls container to the controls stats container
controlsStatsContainer.appendChild(controls);
