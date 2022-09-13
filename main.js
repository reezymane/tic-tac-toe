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
    gameBoard.boardArray.forEach((div) => {
        div.addEventListener('click', () => {
            // Renders players gameboard placement
            const playerMove = document.createElement('p');
            playerMove.textContent = 'x';

            div.appendChild(playerMove);
        });
    })
})();