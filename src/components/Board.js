import Component from './Component';

class Board extends Component {
  constructor() {
    super('main', 'game-container');
    this.boardElement = null;
    this.render();
  }

  render() {
    const board = document.createElement('div');
    board.className = 'game-board';
    board.id = 'game-board';

    this.element.append(board);
    this.boardElement = board;
  }

  clear() {
    if (this.boardElement) {
      while (this.boardElement.firstChild) {
        this.boardElement.removeChild(this.boardElement.firstChild);
      }
    }
  }
}

export default Board;
