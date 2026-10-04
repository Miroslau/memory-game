class GmeEngine {
  constructor(values) {
    this.baseValues = values;
    this.cards = [];
    this.selectedCards = [];
    this.moves = 0;
    this.matchedPairs = 0;
  }

  _shuffle(array) {
    let m = array.length;

    while (m > 0) {
      const i = Math.floor(Math.random() * m--);

      [array[m], array[i]] = [array[i], array[m]];
    }

    return array;
  }

  init() {
    this.moves = 0;
    this.matchedPairs = 0;
    this.selectedCards = [];

    const doubledCards = [...this.baseValues, ...this.baseValues].map((value, index) => ({
      id: `card-${index}`,
      value: value,
    }));

    this.cards = this._shuffle(doubledCards);
    return this.cards;
  }

  handleSelect(cardInstance) {
    if (cardInstance.isFlipped || cardInstance.isMatched || this.selectedCards.length >= 2) {
      return { action: 'none' };
    }

    cardInstance.flip();
    this.selectedCards.push(cardInstance);

    if (this.selectedCards.length === 1) {
      return { action: 'first_card_opened' };
    }

    this.moves++;

    const [firstCard, secondCard] = this.selectedCards;

    if (firstCard.value === secondCard.value) {
      firstCard.setMatched();
      secondCard.setMatched();
      this.matchedPairs += 1;
      this.selectedCards = [];

      const isGameOver = this.matchedPairs === this.baseValues.length;

      return { action: 'match', isGameOver };
    } else {
      const cardsToReset = [...this.selectedCards];
      this.selectedCards = [];

      return { action: 'mismatch', cardsToReset };
    }
  }
}

export default GmeEngine;
