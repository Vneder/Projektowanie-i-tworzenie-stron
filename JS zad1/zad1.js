const inputText1 = document.querySelector(".inputText1");
const btn1 = document.querySelector(".btnSeparateText");
const outputText1 = document.querySelector(".outputText1");

btn1.addEventListener("click", function () {
    let inputValue1 = inputText1.value;
    function separateText(text, char) {

        let tablicaLiter = text.split("");

        let tablicaZSeparatorem = tablicaLiter.join(char);

        return tablicaZSeparatorem;
    }

    let wynik = separateText(inputValue1, '-');

    outputText1.innerHTML = wynik;
});
