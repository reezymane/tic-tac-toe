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
        const controller = new AbortController();
        gameBoard.boardArray.forEach((div) => {
            div.addEventListener('click', () => {
                // Checks div for a current player marker
                if (div.firstChild == null) {
                    function displayMove(player) {
                        const playerMove = document.createElement('p');
                        playerMove.textContent = player.marker;
                    
                        div.appendChild(playerMove);

                        turnCount += 1;
                    };

                    if (firstMove === 1) {
                        displayMove(player1);
                        firstMove += 1;
                    } else {
                        displayMove(player2);
                        firstMove -=1;
                    };
                } else {
                    alert('OOPS! It looks like that spot is taken. Please choose a new spot on the board.');
                };

                // Checks gameboard for winner or tie
                if (gameBoard.boardArray[0].textContent != '' &&
                    gameBoard.boardArray[0].textContent === gameBoard.boardArray[1].textContent &&
                    gameBoard.boardArray[0].textContent === gameBoard.boardArray[2].textContent) {

                        // Chooses which player to display as winner
                        if (gameBoard.boardArray[0].textContent === player1.marker) {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player1.marker + '\'s in a row! ' + player1.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        } else {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player2.marker + '\'s in a row! ' + player2.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        };

                        controller.abort();
                } else if (gameBoard.boardArray[3].textContent != '' &&
                    gameBoard.boardArray[3].textContent === gameBoard.boardArray[4].textContent &&
                    gameBoard.boardArray[3].textContent === gameBoard.boardArray[5].textContent) {
                    
                        if (gameBoard.boardArray[3].textContent === player1.marker) {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player1.marker + '\'s in a row! ' + player1.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        } else {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player2.marker + '\'s in a row! ' + player2.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        };

                        controller.abort();
                } else if (gameBoard.boardArray[6].textContent != '' &&
                    gameBoard.boardArray[6].textContent === gameBoard.boardArray[7].textContent &&
                    gameBoard.boardArray[6].textContent === gameBoard.boardArray[8].textContent) {
                    
                        if (gameBoard.boardArray[6].textContent === player1.marker) {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player1.marker + '\'s in a row! ' + player1.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        } else {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player2.marker + '\'s in a row! ' + player2.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        };

                        controller.abort();
                } else if (gameBoard.boardArray[0].textContent != '' &&
                    gameBoard.boardArray[0].textContent === gameBoard.boardArray[3].textContent &&
                    gameBoard.boardArray[0].textContent === gameBoard.boardArray[6].textContent) {
                    
                        if (gameBoard.boardArray[0].textContent === player1.marker) {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player1.marker + '\'s in a row! ' + player1.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        } else {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player2.marker + '\'s in a row! ' + player2.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        };

                        controller.abort();
                } else if (gameBoard.boardArray[1].textContent != '' &&
                    gameBoard.boardArray[1].textContent === gameBoard.boardArray[4].textContent &&
                    gameBoard.boardArray[1].textContent === gameBoard.boardArray[7].textContent) {
                    
                        if (gameBoard.boardArray[1].textContent === player1.marker) {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player1.marker + '\'s in a row! ' + player1.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        } else {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player2.marker + '\'s in a row! ' + player2.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        };

                        controller.abort();
                } else if (gameBoard.boardArray[2].textContent != '' &&
                    gameBoard.boardArray[2].textContent === gameBoard.boardArray[5].textContent &&
                    gameBoard.boardArray[2].textContent === gameBoard.boardArray[8].textContent) {
                    
                        if (gameBoard.boardArray[2].textContent === player1.marker) {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player1.marker + '\'s in a row! ' + player1.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        } else {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player2.marker + '\'s in a row! ' + player2.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        };

                        controller.abort();
                } else if (gameBoard.boardArray[0].textContent != '' &&
                    gameBoard.boardArray[0].textContent === gameBoard.boardArray[4].textContent &&
                    gameBoard.boardArray[0].textContent === gameBoard.boardArray[8].textContent) {
                    
                        if (gameBoard.boardArray[0].textContent === player1.marker) {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player1.marker + '\'s in a row! ' + player1.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        } else {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player2.marker + '\'s in a row! ' + player2.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        };

                        controller.abort();
                } else if (gameBoard.boardArray[2].textContent != '' &&
                    gameBoard.boardArray[2].textContent === gameBoard.boardArray[4].textContent &&
                    gameBoard.boardArray[2].textContent === gameBoard.boardArray[6].textContent) {
                    
                        if (gameBoard.boardArray[2].textContent === player1.marker) {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player1.marker + '\'s in a row! ' + player1.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        } else {
                            const winner = document.createElement('p');
                            winner.textContent = 'That\'s three ' + player2.marker + '\'s in a row! ' + player2.name + ' wins!'

                            const footer = document.getElementById('footer');
                            footer.appendChild(winner);
                        };

                        controller.abort();
                } else if (turnCount === 9) {
                    
                    const tie = document.createElement('p');
                    tie.textContent = 'Looks like the board is filled but no three in a row\'s. It\'s a tie!'

                    const footer = document.getElementById('footer');
                    footer.appendChild(tie);

                    controller.abort();
                };
            }, { signal: controller.signal });
        });

        // Clears the gameboard and both player objects
        const restart = document.querySelector('.restart');
        restart.addEventListener('click', () => {
            const board = document.querySelectorAll('.gameBoard');
            board.forEach((div) => {
                if (div.firstChild != null) {
                    div.removeChild(div.firstChild);
                };
            });

            const wintext = document.getElementById('footer');
            if (wintext.firstChild != null) {
                wintext.removeChild(wintext.firstChild);
            }

            player1 = undefined;
            player2 = undefined;

            controller.abort();
        });
    });
})();