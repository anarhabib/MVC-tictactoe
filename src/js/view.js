export default class View {
    constructor(callback) {
        this.cellContainer = document.querySelector('.cell-container');
        this.cells = document.querySelectorAll('.cell');
    }

    setupCellClickListener(callback) {
        this.cellContainer.addEventListener('click', event => {
            const cell = event.target;
            if (cell.classList.contains('cell') && !cell.textContent) {
                callback(cell);
            }
        });
    }

}
