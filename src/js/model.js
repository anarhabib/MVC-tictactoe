export default class Model {
    constructor(){
        this.currentPlayer = 'X';
    }

    drawSign(cell) {
        if (!cell.textContent) {
            cell.textContent = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
            return true; 
        }
        return false; 
    }
}