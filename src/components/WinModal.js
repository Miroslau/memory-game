import Component from './Component';

class WinModal extends Component {
  constructor(moves, onNewGameClick) {
    super('div', 'modal-overlay');
    this.moves = moves;
    this.onNewGameClick = onNewGameClick;
    this.render();
    this._initEvents();
  }

  render() {
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-container';

    const title = document.createElement('h2');

    title.className = 'modal-container__title';
    title.textContent = 'Congratulations!';

    const closeTopBtn = document.createElement('button');
    closeTopBtn.type = 'button';
    closeTopBtn.className = 'modal-container__close-button';
    closeTopBtn.textContent = '×';

    const message = document.createElement('p');
    message.className = 'modal-container__message';
    message.style.textAlign = 'center';
    message.style.fontSize = '1.35rem';
    message.style.marginBottom = '24px';
    message.textContent = `You completed the game in ${this.moves} moves! Your result has been saved.`;

    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'modal-actions';
    actionsContainer.style.display = 'flex';
    actionsContainer.style.gap = '12px';
    actionsContainer.style.justifyContent = 'center';

    const newGameBtn = document.createElement('button');
    newGameBtn.type = 'button';
    newGameBtn.className = 'button button_primary';
    newGameBtn.textContent = 'New Game';

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'button button_secondary';
    closeBtn.textContent = 'Close';

    actionsContainer.append(newGameBtn, closeBtn);
    modalContent.append(closeTopBtn, title, message, actionsContainer);
    this.element.append(modalContent);
  }

  open() {
    document.body.append(this.element);
    setTimeout(() => this.element.classList.add('is-open'), 10);
  }

  close() {
    this.element.classList.remove('is-open');
    setTimeout(() => this.element.remove(), 300);
  }

  _initEvents() {
    const closeTopBtn = this.element.querySelector('.modal-container__close-button');
    const closeBtn = this.element.querySelector('.button_secondary');
    const newGameBtn = this.element.querySelector('.button_primary');

    // Кнопки закрытия окна
    if (closeTopBtn) closeTopBtn.addEventListener('click', () => this.close());
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    if (newGameBtn) {
      newGameBtn.addEventListener('click', () => {
        this.close();
        if (typeof this.onNewGameClick === 'function') {
          this.onNewGameClick();
        }
      });
    }

    this.element.addEventListener('click', (e) => {
      if (e.target === this.element) {
        this.close();
      }
    });
  }
}

export default WinModal;
