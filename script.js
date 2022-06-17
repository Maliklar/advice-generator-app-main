const adviceId = document.getElementById("advice-id");
const quote = document.getElementById("quote");



function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            data = data.slip;
            adviceId.innerHTML = data.id;
            quote.innerHTML = data.advice;
            console.log(data);

        });
}