document.querySelector(".show-result").style.display = "none";

document.querySelector(".calcBtn").addEventListener("click", () => {
  const weight = document.getElementById("weight").value;

  let result = calc(weight).toFixed(1);

  showData(result);
});

document.getElementById("clear-data").addEventListener("click", () => {
  document.querySelector(".show-result").style.display = "none";
});

function calc(weight) {
  document.querySelector(".show-result").style.display = "flex";
  document.getElementById("weight").value = "";
  return weight * 35;
}

function showData(result) {
  const data = document.getElementById("showCalc");
  data.innerText = `Você precisa beber ${result} ml de água por dia.`;
}
