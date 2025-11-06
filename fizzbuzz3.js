// Flexible FizzBuzz — handles 3 (Fizz), 5 (Buzz), 7 (Bang), and can easily expand.
  const firstName = document.getElementById("first_name").value;
    const middleInitial = document.getElementById("middle_initial").value;
    const lastName = document.getElementById("last_name").value;

    // 2. Create Greeting
    const greetingText = `Hello, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}! Here's your FizzBuzz:`;
    outputDiv.innerHTML = `<h4>${greetingText}</h4>`;

const fizzBuzzMap = {
  3: "Fizz",
  5: "Buzz",
  7: "Bang"
};

// Function to run FizzBuzz logic
function runFizzBuzz(limit = 140) {
  const list = document.getElementById("fizzbuzz-list");
  list.innerHTML = ""; 

  for (let i = 1; i <= limit; i++) {
    let output = "";
    
    for (const divisor in fizzBuzzMap) {
      if (i % divisor === 0) {
        output += fizzBuzzMap[divisor];
      }
    }

    if (output === "") {
      output = i;
    }

    const li = document.createElement("li");
    li.textContent = output;
    list.appendChild(li);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  runFizzBuzz();
});
