const inputText3 = document.querySelector(".inputText3");
const inputNumber = document.querySelector(".inputNumber");
const btn3 = document.querySelector(".btnCodeText");
const outputText3 = document.querySelector(".outputText3");

btn3.addEventListener("click", function () {
    let inputValue3 = inputText3.value;
    let inputNumberValue = inputNumber.value;

    function codeText(text, inputNumberValue) {
        let wynik = "";

        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            let code = text.charCodeAt(i);

            char = String.fromCharCode((code + parseInt(inputNumberValue)) % 256);

            wynik += char;
        }

        return wynik;
    }

    let wynik = codeText(inputValue3, inputNumberValue);

    outputText3.innerHTML = wynik;
});