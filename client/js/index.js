window.onload = () => {

    let guessedLettersArray = [];
    let letterChosenByPlayer;
    let triesCounter = 0;
    let space = 0;
    let lives = 7;

    startGame = () => {
        let guessedLettersArray = [];
        let letterChosenByPlayer;
        let triesCounter = 0;
        let space = 0;
        let lives = 7;


        const charactersArray = [
            'a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'q', 'u', 'w', 'x', 'y', 'z', 'ź', 'ż'
        ];

        const fruits = [
            'truskawka', 'melon', 'cytryna', 'śliwka', 'pomarańcza'
        ];

        let wordSelectedForCurrentGame = fruits[Math.floor(Math.random() * fruits.length)];
        wordSelectedForCurrentGame = wordSelectedForCurrentGame.replace(/\s/g, "-");

        createLettersButtonsList = () => {
            const lettersButtonsDiv = document.getElementById('lettersButtonsDiv');
            const lettersButtonsUl = document.createElement('ul');

            for (let i = 0; i < charactersArray.length; i++) {
                let letterButtonLi = document.createElement('li');
                lettersButtonsUl.id = 'lettersButtonsUl';
                letterButtonLi.id = 'letter';
                letterButtonLi.innerHTML = charactersArray[i];
                lettersButtonsDiv.appendChild(lettersButtonsUl);
                lettersButtonsUl.appendChild(letterButtonLi);
                onLetterClick(letterButtonLi);
            }
        };


        onLetterClick = (letterButtonLi) => {
            letterButtonLi.onclick = () => {
                letterChosenByPlayer = (letterButtonLi.innerHTML);
                letterButtonLi.setAttribute("class", "active");
                for (let i = 0; i < wordSelectedForCurrentGame.length; i++) {
                    if (wordSelectedForCurrentGame[i] === letterChosenByPlayer) {
                        guessedLettersArray[i].innerHTML = letterChosenByPlayer;
                        triesCounter += 1;
                        if (triesCounter === wordSelectedForCurrentGame.length) {
                            const livesCounter = document.getElementById('livesCounter');
                            livesCounter.innerText = `Congratz bro! You won!`;
                        }
                    }
                }
                let index = (wordSelectedForCurrentGame.indexOf(letterChosenByPlayer));
                if (index === -1) {
                    lives -= 1;
                    drawHangman(lives);
                    displayWordToGuess(lives);
                }
            };
        };

        showResultForPlayer = () => {
            const wordToGuessDiv = document.getElementById('selectedWordDisplayerDiv');
            const wordToGuessUl = document.createElement('ul');
            for (let i = 0; i < wordSelectedForCurrentGame.length; i++) {
                wordToGuessUl.setAttribute('id', 'selectedWordDisplayerUl');
                letterChosenByPlayer = document.createElement('li');
                letterChosenByPlayer.setAttribute('class', 'selectedWordDisplayerLi');
                if (wordSelectedForCurrentGame[i] === "-") {
                    letterChosenByPlayer.innerHTML = "-";
                    space = 1;
                } else {
                    letterChosenByPlayer.innerHTML = "_";
                }
                guessedLettersArray.push(letterChosenByPlayer);
                wordToGuessDiv.appendChild(wordToGuessUl);
                wordToGuessUl.appendChild(letterChosenByPlayer);
            }
        };

        drawHangman = (lives) => {
            const image = document.getElementById('hangmanImage');
            if (lives < 0) {
                image.setAttribute('src', '../img/view0.jpg');
            } else {
                image.setAttribute('src', `../img/view${lives}.jpg`);
            }
            livesCounter(lives);
        };

        livesCounter = (lives) => {
            const livesCounter = document.getElementById('livesCounter');
            if (lives > 1) {
                livesCounter.innerText = `You've got ${lives} tries left`;
            } else if (lives === 1) {
                livesCounter.innerText = `You've got last try to cheat death`;
            } else {
                livesCounter.innerText = `Bang bang, you're dead! Click any of the remaining letters to show the word you had to guess`;
            }
        };

        displayWordToGuess = (lives) => {
            for (let i = 0; i < wordSelectedForCurrentGame.length; i++) {
                if (lives === -1) {
                    guessedLettersArray[i].innerHTML = wordSelectedForCurrentGame[i];
                }
            }
        };
        createLettersButtonsList();
        showResultForPlayer();
        drawHangman(lives)
    };

    startGame();

    document.getElementById('restartGameButton').onclick = () => {

        const wordToGuessUl = document.getElementById('selectedWordDisplayerUl');
        const lettersButtonsUl = document.getElementById('lettersButtonsUl');

        wordToGuessUl.parentNode.removeChild(wordToGuessUl);
        lettersButtonsUl.parentNode.removeChild(lettersButtonsUl);

        startGame();
    };

};
