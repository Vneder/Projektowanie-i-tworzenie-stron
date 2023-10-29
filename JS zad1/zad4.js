const inputText4 = document.querySelector(".inputText4");
const btn4 = document.querySelector(".btnMathText");
const outputText4 = document.querySelector(".outputText4");

btn4.addEventListener("click", function () {
    let inputValue4 = inputText4.value;

    function sumText(text) {
        let wynik = 0;

        for (let i = 0; i < text.length; i++) {
            wynik += text.charCodeAt(i);
        }

        return wynik;
    }

    let wynik = sumText(inputValue4);

    outputText4.innerHTML = wynik;
});