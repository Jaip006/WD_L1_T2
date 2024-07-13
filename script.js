function changeColor() {
  const button = document.getElementById("colorButton");
  button.style.backgroundColor =
    button.style.backgroundColor === "#131842" ? "#42778b" : "#131842";
}

function showGreeting() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good Morning!";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting);
}

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 + num2;

  document.getElementById("result").innerText = `Sum= ${result}`;
}
