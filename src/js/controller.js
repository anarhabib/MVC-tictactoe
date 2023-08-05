export default class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    init(view) {
        this.view = view;
        this.view.setupCellClickListener(this.onDrawSign.bind(this));
    }

    onDrawSign(cell){
        const isValidMove = this.model.drawSign(cell);
        if (isValidMove) {
            this.view.checkWin(this.handleWin.bind(this)); 
        }
    }
    handleWin(winner){
        if(winner){
            alert(`${winner} wins!`);
        }
    }
}