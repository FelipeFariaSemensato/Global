document.querySelector("#calc-btn").addEventListener("click", () => {
  const weight = document.querySelector(".js-peso").value;
  const height = document.querySelector(".js-altura").value;
  const onScreen = document.querySelector(".resultado");

  let result = calcImc(weight, height).toFixed(2);

  showResult(result, onScreen);
});

document.querySelector("#clear-result").addEventListener("click", () => {
  document.querySelector(".resultado").style.display = "none";
  document.querySelector("#clear-result").style.display = "none";
});

function calcImc(weight, height) {
  document.querySelector(".js-peso").value = "";
  document.querySelector(".js-altura").value = "";
  return weight / (height * height);
}

function showResult(result, onScreen) {
  onScreen.style.display = "flex";
  document.querySelector("#clear-result").style.display = "flex";

  if (result < 17) {
    onScreen.innerText = "Peso muito abaixo do ideal";
  } else if (result >= 17 && result < 18.49) {
    onScreen.innerText = "Abaixo do peso";
  } else if (result >= 18.5 && result < 24.99) {
    onScreen.innerText = "Peso normal";
  } else if (result >= 25 && result < 29.99) {
    onScreen.innerText = "Acima do peso";
  } else if (result >= 30 && result < 34.99) {
    onScreen.innerText = "Obesidade grau 1";
  } else if (result >= 35 && result < 39.99) {
    onScreen.innerText = "Obesidade grau 2";
  } else if (result > 40) {
    onScreen.innerText = "Obesidade grau 3";
  } else {
    onScreen.innerText = "O valor passado está incorreto.";
  }
}
