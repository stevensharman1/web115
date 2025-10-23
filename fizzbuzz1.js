document.addEventListener("DOMContentLoaded", () => {
  const nameForm = document.getElementById("nameForm");
  const outputDiv = document.getElementById("output");
  const fizzbuzzList = document.getElementById("fizzbuzz-list");

  // The FizzBuzz logic now runs only AFTER the form is submitted
  nameForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // 1. Get Name Inputs
    const firstName = document.getElementById("first_name").value;
    const middleInitial = document.getElementById("middle_initial").value;
    const lastName = document.getElementById("last_name").value;

    // 2. Create Greeting
    const greetingText = `Hello, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}! Here's your FizzBuzz:`;
    outputDiv.innerHTML = `<h4>${greetingText}</h4>`;
    
    // 3. Clear previous list results
    fizzbuzzList.innerHTML = ''; 

    // 4. Generate FizzBuzz List
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
      fizzbuzzList.appendChild(li);
    }
  });
});
