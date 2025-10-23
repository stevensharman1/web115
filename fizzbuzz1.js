document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Hardcoded Name and Greeting Logic ---
  const firstName = "Steven";
  const lastName = "Sharman";
  
  // Construct the greeting message
  const greetingText = `Hello, ${firstName} ${lastName}!`; 

  // Get the new greeting placeholder element
  const greetingElement = document.getElementById("greeting-message");
  
  // Set the personalized greeting
  if (greetingElement) {
    greetingElement.textContent = greetingText;
  }

  // --- 2. Existing FizzBuzz Logic ---
  const list = document.getElementById("fizzbuzz-list");

  for (let i = 1; i <= 140; i++) {
    let text = "";

    // Word substitutions
    if (i % 3 === 0) text += "Zoom";
    if (i % 5 === 0) text += " Snail";

    // Default if no substitution
    if (text === "") text = "Speedy";

    // Create list item
    const li = document.createElement("li");
    li.textContent = `${i}. ${text}`;
    list.appendChild(li);
  }
});
