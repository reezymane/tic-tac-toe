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
    let player1;
    let player2;

    // Decides which player goes first
    let firstMove = Math.floor(Math.random() * (2 - 1 + 1) ) + 1;

    // Requests and stores info for Players 1 & 2
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

        // Alerts which player goes first
        if (firstMove === 1) {
            alert(player1.name + ' gets the first move!');
        } else {
            alert(player2.name + ' gets the first move!');
        };

        // Switches turns between users and Adds players' markers to gameboard
        let turnCount = 0;
        gameBoard.boardArray.forEach((div) => {
            div.addEventListener('click', () => {
            
                function displayMove(player) {
                    const playerMove = document.createElement('p');
                    playerMove.textContent = player.marker;
                    
            
            // ADD IF STATEMENT TO CHECK IF THERE'S ALREADY A MARKER IN THAT DIV. IF SO, CREATE ERROR MESSAGE. NEST TURN COUNT INCREMENT.
                    if (condition) {
                        div.appendChild(playerMove);

                        turnCount += 1;
                    } else {
                        
                    };
                    
                };

                if (firstMove === 1) {
                    displayMove(player1);
                    firstMove += 1;
                } else {
                    displayMove(player2);
                    firstMove -=1;
                };
            });
        });
    });
})();