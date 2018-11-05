window.onload = () => {

    const guessedLettersArray = [];
    let letterChosenByPlayer;
    let triesCounter = 0;
    let space = 0;
    let lives = 7;


    const charactersArray = [
        'a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','r','s','ś','t','q','u','w','x','y','z','ź','ż'
    ];

    const fruits = [
        'truskawka', 'melon', 'cytryna', 'śliwka', 'pomarańcza'
    ];

    selectWordToGuess = () => {
      return fruits[Math.floor(Math.random()*fruits.length)];
    };

    let wordSelectedForCurrentGame = selectWordToGuess();
    wordSelectedForCurrentGame = wordSelectedForCurrentGame.replace(/\s/g, "-");
    console.log(wordSelectedForCurrentGame);

    createLettersButtonsList = () => {
        const lettersButtonsDiv = document.getElementById('lettersButtonsDiv');
        const lettersButtonsUl = document.createElement('ul');

        for(let i = 0; i < charactersArray.length; i++){
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
            letterButtonLi.setAttribute("class", "active")
            for (let i = 0; i < wordSelectedForCurrentGame.length; i++) {
                if (wordSelectedForCurrentGame[i] === letterChosenByPlayer) {
                    guessedLettersArray[i].innerHTML = letterChosenByPlayer;
                    triesCounter += 1;
                }
            }
            let index = (wordSelectedForCurrentGame.indexOf(letterChosenByPlayer));
            if(index === -1){
                lives -= 1;
                drawHangman(lives)
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
            console.log(wordSelectedForCurrentGame[i]);
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
      if(lives < 0 ){
          console.log(lives);
          image.setAttribute('src', '../img/view0.jpg');
      }else {
          image.setAttribute('src', `../img/view${lives}.jpg`);
      }
    };

    createLettersButtonsList();
    showResultForPlayer();
};

