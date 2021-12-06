# HeightCalculator
This simple tool helps you to calculate your height. With just a simple numeric input, you can see how tall you are!
## Requirements
* Visual Studio Code (VSC) or another texteditor
* Browser (Firefox recommended)
* Server (if you want to use the Tool)
## Installation

1. Download the zip-File via GitHib Desktop or trough direct download
2. unzip file
3. open in VSC 
4. Have Fun

## Code
This simple Code snippet, shows how the tool works

```javascript
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
```
 
 ## Preview of the Tool
![Height_Calculator_Tool](https://github.com/ValdrDarmir/HeightCalculator/blob/main/pictures/Height_cal.PNG)
