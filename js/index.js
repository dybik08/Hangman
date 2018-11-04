window.onload = () => {

    let word ;
    let counter ;

    const characters = [
        'a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','r','s','ś','t','q','u','w','x','y','z','ź','ż'
    ];

    const fruits = [
        'truskawka', 'melon', 'cytryna', 'śliwka', 'pomarańcza'
    ];

    selectWord = () => {
      return word = fruits[Math.floor(Math.random()*fruits.length)];
    };

    createLetterButtons = () => {
        const letters = document.getElementById('letters');
        const letterList = document.createElement('ul');

        for(let i = 0; i < characters.length; i++){
            let list = document.createElement('li');
            letterList.id = 'characters';
            list.id = 'letter';
            list.innerHTML = characters[i];
            letters.appendChild(letterList);
            letterList.appendChild(list);
            onLetterClick(list);
        }
    };


    onLetterClick = (list) => {
        list.onclick = () => {
            let geuss = (list.innerHTML);
            list.setAttribute("class", "active");
            let word = selectWord();
            for (let i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    counter += 1;
                }
            }
        };


    };

    createLetterButtons();
};

