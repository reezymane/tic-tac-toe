// Stores the gameboard components into an object
const gameBoard = (() => {
    return gameObj = {
        boardArray: document.querySelectorAll('.gameBoard')
    };
})();

// Stores player info into an object
const player = (name, marker) => {
    return {name, marker};
};

// Controls what is displayed on the gameboard
const displayController = (() => {
    // Requests and stores info for Players 1 & 2
    let player1;
    let player2;
    const start = document.querySelector('.start');
    start.addEventListener('click', () => {
        const name = prompt('Player 1, enter your name!')
        const marker = prompt('Would you like to be X or O?').toUpperCase();
       
        player1 = player(name, marker);
        
        const name2 = prompt('Player 2, enter your name!')
        if (marker === 'X') {
            alert(name2 + '\'s marker is O!');
            player2 = player(name2, 'O');
        } else {
            alert(name2 + '\'s marker is X!');
            player2 = player(name2, 'X');
        };
    });
    
    gameBoard.boardArray.forEach((div) => {
        div.addEventListener('click', () => {
            // Renders players gameboard placement
            const playerMove = document.createElement('p');
            playerMove.textContent = 'x';

            div.appendChild(playerMove);
        });
    })
})();