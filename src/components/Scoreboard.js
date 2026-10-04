import Component from './Component';

class Scoreboard extends Component {
  constructor() {
    super('section', 'scoreboard');
    this.movesValueElement = null;
    this.pairsValueElement = null;
    this.render();
  }

  render() {
    const movesWrapper = document.createElement('div');
    movesWrapper.className = 'scoreboard__item';

    const movesLabel = document.createElement('span');
    movesLabel.className = 'scoreboard__label';
    movesLabel.textContent = 'Moves: ';

    const movesValue = document.createElement('span');
    movesValue.className = 'scoreboard__value';
    movesValue.id = 'moves-count';
    movesValue.textContent = '0';

    this.movesValueElement = movesValue;
    movesWrapper.append(movesLabel, movesValue);

    const pairsWrapper = document.createElement('div');
    pairsWrapper.className = 'scoreboard__item';

    const pairsLabel = document.createElement('span');
    pairsLabel.className = 'scoreboard__label';
    pairsLabel.textContent = 'Pairs: ';

    const pairsValue = document.createElement('span');
    pairsValue.className = 'scoreboard__value highlight';
    pairsValue.id = 'pairs-count';
    pairsValue.textContent = '0 / 0';

    this.pairsValueElement = pairsValue;
    pairsWrapper.append(pairsLabel, pairsValue);

    this.element.append(movesWrapper, pairsWrapper);
  }

  updateMoves(count) {
    if (this.movesValueElement) {
      this.movesValueElement.textContent = String(count);
    }
  }

  updatePairs(current, total) {
    if (this.pairsValueElement) {
      this.pairsValueElement.textContent = `${current} / ${total}`;
    }
  }
}

export default Scoreboard;
