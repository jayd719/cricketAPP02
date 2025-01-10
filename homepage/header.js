/**
 * Creates and appends a header element to the document with a given message and link.
 *
 * @param { string } headerText - The text content to be displayed before the link.
 * @param { string } linkText - The clickable text for the hyperlink.
 * @param { string } link - The URL the link should navigate to.Defaults to "#".
 */
function renderHeader(headerText = "Learn more about", linkText = "Click here", link = "#") {
    // Validate link (ensure it is a proper URL or hash)
    if (!link.startsWith("http") && link !== "#") {
        console.warn("Invalid link provided. Defaulting to '#'.");
        link = "#";
    }

    // Create header element
    const header = document.createElement("header");
    header.className = "bg-gradient-to-r from-blue-600 to-purple-600 text-white py-1 text-center fixed w-full z-[10]";

    // Create paragraph element
    const paragraph = document.createElement("p");
    paragraph.textContent = headerText + " ";

    // Create link element
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.className = "underline";
    anchor.textContent = linkText;

    // Append elements
    paragraph.appendChild(anchor);
    paragraph.append(" →");
    header.appendChild(paragraph);
    document.body.appendChild(header);
}

// Example usage
renderHeader("Learn more about", "Go", "https://example.com");
