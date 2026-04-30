let btn = document.querySelector("button");
let adviceId = document.querySelector("#advice-id");
let adviceText = document.querySelector("#advice-text");

btn.addEventListener("click", async () => {
  // btn.classList.toggle("animate-pulse");
  btn.classList.toggle("rotate-0");
  btn.classList.toggle("rotate-180");

  let res = await fetch("https://api.adviceslip.com/advice");
  let data = await res.json();

  adviceId.textContent = `ADVICE #${data.slip.id}`;
  adviceText.textContent = `"${data.slip.advice}"`;
});
