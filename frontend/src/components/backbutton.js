// Create the outer div element
const div = document.createElement('div');
div.className = 'fixed bottom-0 left-0 p-6 z-[500]';
div.onclick = () => history.back();

// Create the button element
const button = document.createElement('button');
button.type = 'button';
button.setAttribute('aria-label', 'Go back');
button.className = 'btn btn-outline flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 hover:scale-[1.3]';

// Create the SVG element
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('viewBox', '0 0 16 16');
svg.setAttribute('fill', 'none');
svg.setAttribute('aria-hidden', 'true');
svg.className = 'h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400';

// Create the path element for the SVG
const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('d', 'M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5');
path.setAttribute('stroke-width', '1.5');
path.setAttribute('stroke-linecap', 'round');
path.setAttribute('stroke-linejoin', 'round');

// Append the path to the SVG
svg.appendChild(path);

// Append the SVG to the button
button.appendChild(svg);

// Append the button to the div
div.appendChild(button);

// Append the div to the body (or any other desired parent element)
document.body.appendChild(div);