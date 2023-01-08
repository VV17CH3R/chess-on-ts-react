import { Colors } from '../Colors';
import {Figure, FigureNames} from './Figure';
import { Cell } from '../Cell';
import blackLogo from '../../assets/figures/black-king.png';
import whiteLogo from '../../assets/figures/white-king.png';

export class King extends Figure {
    
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        if(this.cell.isEmptyVertical(target))
            return true;
        if(this.cell.isEmptyHorizontal(target))
            return true; 
        if(this.cell.isEmptyDiagonal(target))
            return true; 
        return false;
    }
}