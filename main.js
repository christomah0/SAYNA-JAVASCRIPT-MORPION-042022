(function () {
    let player = {
        username: ['YOU', 'CPU'],
        symbol: ['X', 'O'],
        score: [document.querySelector('.you-score'), document.querySelector('.cpu-score')],
        ownClass: ['you', 'cpu']
    }

    let items = document.getElementsByClassName('grid-item');
    let youScore = 0, cpuScore = 0, turn = 0, symbols = ['X', 'O'];
    let alternationTurn = 0;
    let randomNumber = Math.floor(Math.random() * 9);
    let verification = 0;

    let gridItems = [
        [items[0], items[1], items[2]],
        [items[3], items[4], items[5]],
        [items[6], items[7], items[8]]
    ];

    chooseCase = function(id) {
        if (turn == 0) {
            alignmentSymbols();
            if (document.getElementById(id).classList.contains('taken')) {
                alert('La case est déjà prise par un symbole.');
            } else {
                document.getElementById(id).innerText = player.symbol[0];
                document.getElementById(id).classList.add('taken', 'you');
            }
            turn++;
        }
        if (turn == 1) {
            alignmentSymbols();
            while (items[randomNumber].classList.contains('taken')) {
                randomNumber = Math.floor(Math.random() * 9);
            }
            items[randomNumber].innerText = player.symbol[1];
            items[randomNumber].classList.add('taken', 'cpu');
            turn = 0;
        }

        for (let i = 0; i < 9; i++) {
            if (items[i].classList.contains('taken')) {
                verification++;
            }
        }

        if (verification == 9) {
            for (let i = 0; i < 9; i++) {
                items[i].innerText = '';
                items[i].classList.remove('taken', 'you', 'cpu');
            }
            alert('Aucun du joueur n\'a gagné la partie. Ressayez!');
            alternationSymbol();
        }
    }

    alignmentSymbols =  function () {
        for (let i = 0; i < 2; i++) {
            if (gridItems[0][0].classList.contains(player.ownClass[i]) && gridItems[0][1].classList.contains(player.ownClass[i]) && gridItems[0][2].classList.contains(player.ownClass[i])) {
                alert(`${player.username[i]} a gagné, symbol ${player.symbol[i]}.`);
                alternationSymbol();
                if (i == 0) {
                    player.score[i].innerText = ++youScore;
                } else {
                    player.score[i].innerText = ++cpuScore;
                }
                for (let j = 0; j < 9; j++) {
                    items[j].innerText = '';
                    items[j].classList.remove('taken', 'you', 'cpu');
                }
            }
            else if (gridItems[1][0].classList.contains(player.ownClass[i]) && gridItems[1][1].classList.contains(player.ownClass[i]) && gridItems[1][2].classList.contains(player.ownClass[i])) {
                alert(`${player.username[i]} a gagné, symbol ${player.symbol[i]}.`);
                alternationSymbol();
                if (i == 0) {
                    player.score[i].innerText = ++youScore;
                } else {
                    player.score[i].innerText = ++cpuScore;
                }
                for (let j = 0; j < 9; j++) {
                    items[j].innerText = '';
                    items[j].classList.remove('taken', 'you', 'cpu');
                }
            }
            else if (gridItems[2][0].classList.contains(player.ownClass[i]) && gridItems[2][1].classList.contains(player.ownClass[i]) && gridItems[2][2].classList.contains(player.ownClass[i])) {
                alert(`${player.username[i]} a gagné, symbol ${player.symbol[i]}.`);
                alternationSymbol();
                if (i == 0) {
                    player.score[i].innerText = ++youScore;
                } else {
                    player.score[i].innerText = ++cpuScore;
                }
                for (let j = 0; j < 9; j++) {
                    items[j].innerText = '';
                    items[j].classList.remove('taken', 'you', 'cpu');
                }
            }
            else if (gridItems[0][0].classList.contains(player.ownClass[i]) && gridItems[1][0].classList.contains(player.ownClass[i]) && gridItems[2][0].classList.contains(player.ownClass[i])) {
                alert(`${player.username[i]} a gagné, symbol ${player.symbol[i]}.`);
                alternationSymbol();
                if (i == 0) {
                    player.score[i].innerText = ++youScore;
                } else {
                    player.score[i].innerText = ++cpuScore;
                }
                for (let j = 0; j < 9; j++) {
                    items[j].innerText = '';
                    items[j].classList.remove('taken', 'you', 'cpu');
                }
            }
            else if (gridItems[0][1].classList.contains(player.ownClass[i]) && gridItems[1][1].classList.contains(player.ownClass[i]) && gridItems[2][1].classList.contains(player.ownClass[i])) {
                alert(`${player.username[i]} a gagné, symbol ${player.symbol[i]}.`);
                alternationSymbol();
                if (i == 0) {
                    player.score[i].innerText = ++youScore;
                } else {
                    player.score[i].innerText = ++cpuScore;
                }
                for (let j = 0; j < 9; j++) {
                    items[j].innerText = '';
                    items[j].classList.remove('taken', 'you', 'cpu');
                }
            }
            else if (gridItems[0][2].classList.contains(player.ownClass[i]) && gridItems[1][2].classList.contains(player.ownClass[i]) && gridItems[2][2].classList.contains(player.ownClass[i])) {
                alert(`${player.username[i]} a gagné, symbol ${player.symbol[i]}.`);
                alternationSymbol();
                if (i == 0) {
                    player.score[i].innerText = ++youScore;
                } else {
                    player.score[i].innerText = ++cpuScore;
                }
                for (let j = 0; j < 9; j++) {
                    items[j].innerText = '';
                    items[j].classList.remove('taken', 'you', 'cpu');
                }
            }
            else if (gridItems[0][0].classList.contains(player.ownClass[i]) && gridItems[1][1].classList.contains(player.ownClass[i]) && gridItems[2][2].classList.contains(player.ownClass[i])) {
                alert(`${player.username[i]} a gagné, symbol ${player.symbol[i]}.`);
                alternationSymbol();
                if (i == 0) {
                    player.score[i].innerText = ++youScore;
                } else {
                    player.score[i].innerText = ++cpuScore;
                }
                for (let j = 0; j < 9; j++) {
                    items[j].innerText = '';
                    items[j].classList.remove('taken', 'you', 'cpu');
                }
            }
            else if (gridItems[0][2].classList.contains(player.ownClass[i]) && gridItems[1][1].classList.contains(player.ownClass[i]) && gridItems[2][0].classList.contains(player.ownClass[i])) {
                alert(`${player.username[i]} a gagné, symbol ${player.symbol[i]}.`);
                alternationSymbol();
                if (i == 0) {
                    player.score[i].innerText = ++youScore;
                } else {
      
                    player.score[i].innerText = ++cpuScore;
                }
                for (let j = 0; j < 9; j++) {
                    items[j].innerText = '';
                    items[j].classList.remove('taken', 'you', 'cpu');
                }
            }
        }
    }

    alternationSymbol = function () {
        alternationTurn = Math.floor(Math.random() * 2);
        player.symbol[0] = symbols[alternationTurn];
        if (player.symbol[0] == 'X') {
            player.symbol[1] = symbols[1];
        } else {
            player.symbol[1] = symbols[0];
        }
    }
})();
