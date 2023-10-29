const inputText2 = document.querySelector(".inputText2");
const btn2 = document.querySelector(".btnChangeText");
const outputText2 = document.querySelector(".outputText2");

btn2.addEventListener("click", function () {
    let inputValue2 = inputText2.value;
    function changeText(text) {
        let wynik = "";

        for (let i = 0; i < text.length; i++) {
            wynik += text.charCodeAt(i) + " ";
        }
        return wynik;
    }

    let wynik = changeText(inputValue2);

    outputText2.innerHTML = wynik;
});