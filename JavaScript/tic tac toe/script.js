const statusDisplay = document.getElementById('status');
const gameBoard = document.getElementById('gameBoard');
const restartButton = document.getElementById('restartButton');
const cells = document.querySelectorAll('.cell');

let gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', '']; // Represents the 9 cells

// Define your image paths here
const xImagePath = 'x.png'; // Or 'images/x.png' if in an images folder
const oImagePath = 'o.png'; // Or 'images/o.png' if in an images folder

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleCellPlayed = (clickedCell, clickedCellIndex) => {
    gameState[clickedCellIndex] = currentPlayer;

    // Create an image element instead of setting innerHTML to text
    const img = document.createElement('img');
    img.src = currentPlayer === 'X' ? xImagePath : oImagePath;
    img.alt = currentPlayer; // Good for accessibility
    clickedCell.innerHTML = ''; // Clear any previous content
    clickedCell.appendChild(img);

    clickedCell.classList.add(currentPlayer); // Still add class for potential custom styling (e.g., border)
}

const handlePlayerChange = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = `Player ${currentPlayer}'s Turn`;
}

const handleResultValidation = () => {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = `Player ${currentPlayer} Has Won!`;
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes('');
    if (roundDraw) {
        statusDisplay.innerHTML = 'Game Ended in a Draw!';
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

const handleCellClick = (event) => {
    const clickedCell = event.target;
    // Ensure we get the cell itself, not a child image if one exists
    const actualCell = clickedCell.classList.contains('cell') ? clickedCell : clickedCell.closest('.cell');
    if (!actualCell) return; // Safety check

    const clickedCellIndex = parseInt(actualCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    handleCellPlayed(actualCell, clickedCellIndex);
    handleResultValidation();
}

const handleRestartGame = () => {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.innerHTML = `Player ${currentPlayer}'s Turn`;
    cells.forEach(cell => {
        cell.innerHTML = ''; // Clear image elements
        cell.classList.remove('X', 'O');
    });
}

// Attach event listener to the gameBoard itself using event delegation
// This is more robust when content inside cells changes (like adding images)
gameBoard.addEventListener('click', handleCellClick);
restartButton.addEventListener('click', handleRestartGame);

// Initial status display
statusDisplay.innerHTML = `Player ${currentPlayer}'s Turn`;