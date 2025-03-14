let atext = document.querySelector("textarea");
let lang = document.getElementById("lang");
let rate = document.getElementById("rate");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (!atext.value) {
    atext.value = "Please enter some text";
    atext.style.color = "red";
    atext.style.fontSize = "36px";
    atext.style.border = "2px solid red";
    setTimeout(() => {
      atext.value = "";
        atext.style.color = "black";
        atext.style.fontSize = "16px";
        atext.style.border = "none";
    }, 2000);
    return;
  }
  let speech = new SpeechSynthesisUtterance(atext.value);
  speech.lang = lang.value;
  speech.rate = rate.value;
  speechSynthesis.speak(speech);
});
