import Component from './Component';

class Card extends Component {
  constructor(id, value) {
    super('div', 'card');

    this.id = id;
    this.value = value;
    this.isFlipped = false;
    this.isMatched = false;

    this.render();
  }

  render() {
    this.element.dataset.id = this.id;

    const cardContent = document.createElement('div');
    cardContent.className = 'card__content';

    const cardFront = document.createElement('div');
    cardFront.className = 'card__front';
    cardFront.textContent = this.value;

    const cardBack = document.createElement('div');
    cardBack.className = 'card__back';
    cardBack.textContent = '❓';

    cardContent.append(cardFront, cardBack);
    this.element.append(cardContent);
  }

  flip() {
    if (this.isMatched) return;

    this.isFlipped = !this.isFlipped;
    this.element.classList.toggle('is-flipped', this.isFlipped);
  }

  setMatched() {
    this.isMatched = true;
    this.element.classList.add('is-matched');
  }

  reset() {
    if (this.isMatched) return;

    this.isFlipped = false;
    this.element.classList.remove('is-flipped');
  }
}

export default Card;
