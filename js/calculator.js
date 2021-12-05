function init() {
  var input = document.querySelector("input"),
    outputField = document.querySelector(".height"),
    output;
  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      if (input.value > 0 && input.value < 231) {
        output = outputField.innerHTML.replace("$Height", input.value);
        outputField.innerHTML = output;
        outputField.style.visibility = "visible";
        input.disabled = true;
      }
    }
  });
}
init();
