function init() {
  console.log("T");
  var inputV = document.querySelector("input");
  inputV.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      console.log(inputV.value);
      alert("Your are " + inputV.value + "cm tall!");
    }
  });
}
init();
