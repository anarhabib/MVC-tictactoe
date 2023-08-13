export default class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    init() {
        this.view.setupCellClickListener(this.onDrawSign.bind(this));
    }

    onDrawSign(cell){
        const isValidMove = this.model.drawSign(cell);
        if (isValidMove) {
            this.checkWin(this.handleWin.bind(this)); 
        }
    }
    handleWin(winner){
        if(winner){
            alert(`${winner} wins!`);
        }
    }
    checkWin(callback) {
        const cells = this.view.cells
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