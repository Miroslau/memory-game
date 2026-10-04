import Card from './Card';
import StorageService from '../core/StorageService';
import WinModal from './WinModal';

class BoardController {
  constructor(gameBoardComponent, gameEngineInstance, scoreboardComponent) {
    this.gameBoard = gameBoardComponent;
    this.engine = gameEngineInstance;
    this.scoreboard = scoreboardComponent;
    this.cardComponents = [];
    this.mismatchTimeoutId = null;
    this.activeMismatchCards = [];
  }

  startNewGame() {
    this._forceResetMismatch();

    this.gameBoard.clear();
    this.cardComponents = [];

    const shuffledCards = this.engine.init();

    this.scoreboard.updateMoves(this.engine.moves);
    this.scoreboard.updatePairs(this.engine.matchedPairs, this.engine.baseValues.length);

    shuffledCards.forEach((item) => {
      const card = new Card(item.id, item.value);
      this.cardComponents.push(card);

      card.getElement().addEventListener('click', () => this._onCardClick(card));

      this.gameBoard.boardElement.append(card.getElement());
    });
  }

  _forceResetMismatch() {
    if (this.mismatchTimeoutId) {
      clearTimeout(this.mismatchTimeoutId);
      this.mismatchTimeoutId = null;
    }

    if (this.activeMismatchCards.length > 0) {
      this.activeMismatchCards.forEach((card) => card.reset());
      this.activeMismatchCards = [];
    }
  }

  _onCardClick(cardInstance) {
    if (this.activeMismatchCards.length > 0) {
      if (this.activeMismatchCards.includes(cardInstance)) return;

      this._forceResetMismatch();
    }

    const result = this.engine.handleSelect(cardInstance);

    this.scoreboard.updateMoves(this.engine.moves);
    this.scoreboard.updatePairs(this.engine.matchedPairs, this.engine.baseValues.length);

    switch (result.action) {
      case 'match':
        console.log(`Match found! Total matches: ${this.engine.matchedPairs}`);
        if (result.isGameOver) {
          this._handleGameOver();
        }
        break;
      case 'mismatch':
        this.activeMismatchCards = result.cardsToReset;
        this.mismatchTimeoutId = setTimeout(() => {
          this.activeMismatchCards.forEach((card) => card.reset());
          this.activeMismatchCards = [];
          this.mismatchTimeoutId = null;
        }, 800);
        break;
      case 'first_card_opened':
      case 'none':
      default:
        break;
    }
  }

  _handleGameOver() {
    StorageService.saveRecords(this.engine.moves);
    setTimeout(() => {
      const winModal = new WinModal(this.engine.moves, () => this.startNewGame());
      winModal.open();
    }, 500);
  }
}

export default BoardController;
