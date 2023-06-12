function playGame(userChoice) {
    var choices = ["камень", "ножницы", "бумага"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    document.getElementById("result").textContent = `Ваш выбор: ${userChoice}. Выбор компьютера: ${computerChoice}. ${result}`;
}







