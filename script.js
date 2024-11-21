const form = document.getElementById("colorForm");
const textInput = document.getElementById("textInput")
const colorInput = document.getElementById("colorForm");

const savedColor = localStorage.getItem("selectedColor");
if (savedColor) {
    console.log("Saved Color: ${savedColor}");
    colorInput.value = savedColor;
}

colorInput.addEventListener("input", (event) => {
    const currentColor = event.target.value;
    console.log("Current color ${currentColor}");
    localStorage.setItem("selectedColor", currentColor);
});

form.addEventListener("Submit", (event) => {
    event.preventDefault();
    console.log("Text Input Value: ${textInput.value}");
});