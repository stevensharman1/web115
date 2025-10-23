document.getElementById("fizzbuzzForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get user info
  const firstName = document.getElementById("first_name").value.trim();
  const middleInitial = document.getElementById("middle_initial").value.trim();
  const lastName = document.getElementById("last_name").value.trim();

  // Get FizzBuzz settings
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const num3 = parseInt(document.getElementById("num3").value);

  const word1 = document.getElementById("word1").value.trim();
  const word2 = document.getElementById("word2").value.trim();
  const word3 = document.getElementById("word3").value.trim();

  const defaultWord = document.getElementById("defaultWord").value.trim();
  const total = parseInt(document.getElementById("total").value);

  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "";

  // Greeting
  let greeting = `Hello, ${firstName} ${middleInitial ? middleInitial + ". " : ""}${lastName}!\n\n`;
  greeting += `Here’s your custom FizzBuzz up to ${total}:\n\n`;
  outputDiv.textContent = greeting;

  // Generate FizzBuzz
  for (let i = 1; i <= total; i++) {
    let output = "";

    if (i % num1 === 0) output += word1;
    if (i % num2 === 0) output += word2;
    if (i % num3 === 0) output += word3;

    if (output === "") output = defaultWord || i;

    outputDiv.textContent += `${i}: ${output}\n`;
  }
});
