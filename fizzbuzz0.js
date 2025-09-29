document.getElementById("nameForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get user input
  const firstName = document.getElementById("first_name").value;
  const middleInitial = document.getElementById("middle_initial").value;
  const lastName = document.getElementById("last_name").value;

  // Create greeting
  const greeting = `Hello, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}! Here's your FizzBuzz:`;

  // Generate FizzBuzz
  let outputHTML = `<h4>${greeting}</h4><ul>`;
  for (let i = 1; i <= 100; i++) {
    let result = '';
    if (i % 3 === 0) result += 'Fizz';
    if (i % 5 === 0) result += 'Buzz';
    outputHTML += `<li>${result || i}</li>`;
  }
  outputHTML += '</ul>';

  // Display result
  document.getElementById("output").innerHTML = outputHTML;
});

