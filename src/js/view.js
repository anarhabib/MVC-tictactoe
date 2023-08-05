export default class View {
    constructor(callback) {
        this.cellContainer = document.querySelector('.cell-container');
        this.setupCellClickListener(callback);
    }

    setupCellClickListener(callback) {
        this.cellContainer.addEventListener('click', event => {
            const cell = event.target;
            if (cell.classList.contains('cell') && !cell.textContent) {
                callback(cell);
            }
        });
    }

    checkWin(callback) {
        const cells = this.cellContainer.querySelectorAll('.cell');
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            const contentA = cells[a].textContent;
            const contentB = cells[b].textContent;
            const contentC = cells[c].textContent;

            if (contentA && contentA === contentB && contentA === contentC) {
                callback(contentA); 
                return;
            }
        }

        callback(null); 
    }
}
