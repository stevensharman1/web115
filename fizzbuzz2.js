/**
 * @function checkDivision
 * @description Checks if the first number (dividend) is evenly divisible by the second number (divisor).
 * @param {number} dividend - The number being divided (iCounter).
 * @param {number} divisor - The number to divide by (e.g., firstDivisor or secondDivisor).
 * @returns {boolean} True if the division is even (remainder is 0), false otherwise.
 */
function checkDivision(dividend, divisor) {
    // This is the core logic: returns true if the remainder of the division is 0.
    return dividend % divisor === 0;
}

document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("fizzbuzz-list");

      const firstName = document.getElementById("first_name").value;
    const middleInitial = document.getElementById("middle_initial").value;
    const lastName = document.getElementById("last_name").value;

    // 2. Create Greeting
    const greetingText = `Hello, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}! Here's your FizzBuzz:`;
    outputDiv.innerHTML = `<h4>${greetingText}</h4>`;

    // --- Divisor and Word Variables for Flexibility ---
    const firstDivisor = 3;   // The number to check for the first word
    const secondDivisor = 5;  // The number to check for the second word

    const firstWord = "Zoom";
    const secondWord = " Snail"; // Note the leading space for clean concatenation
    // ----------------------------------------------------

    for (let iCounter = 1; iCounter <= 140; iCounter++) {
        let text = "";

        // 1. Check for the first divisor using the new function
        if (checkDivision(iCounter, firstDivisor)) {
            text += firstWord;
        }

        // 2. Check for the second divisor using the new function
        if (checkDivision(iCounter, secondDivisor)) {
            text += secondWord;
        }

        // 3. Default if no substitution occurred
        if (text === "") {
            text = "Speedy";
        }

        // Create and append the list item
        const li = document.createElement("li");
        li.textContent = `${iCounter}. ${text}`;
        list.appendChild(li);
    }
});
