const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    // Oczyszczanie wartości z białych znaków na krańcach
    const inputValue = event.currentTarget.value.trim();

    if (inputValue === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = inputValue;
    }
});


