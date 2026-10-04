import Component from './Component';
import StorageService from '../core/StorageService';

class LeaderboardModal extends Component {
  constructor() {
    super('div', 'modal-overlay');
    this.render();
    this._initEvents();
  }

  render() {
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-container';

    const title = document.createElement('h2');

    title.className = 'modal-container__title';
    title.textContent = 'Leaderboard';

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'modal-container__close-button';
    closeButton.textContent = '×';

    const records = StorageService.getRecords();

    if (records.length === 0) {
      const emptyMessage = document.createElement('p');
      emptyMessage.className = 'modal-container__empty-message';
      emptyMessage.textContent = 'No records yet. Be the first!';
      modalContent.append(closeButton, title, emptyMessage);
    } else {
      const table = document.createElement('table');
      table.className = 'leaderboard-table';

      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');

      ['Rank', 'Moves', 'Date'].forEach((cell) => {
        const th = document.createElement('th');
        th.textContent = cell;
        headerRow.append(th);
      });

      thead.append(headerRow);

      const tbody = document.createElement('tbody');

      records.forEach((record, index) => {
        const row = document.createElement('tr');

        const rankTd = document.createElement('td');

        rankTd.textContent = String(index + 1);

        if (index === 0) {
          rankTd.style.fontSize = '1.6rem';
        }

        const movesTd = document.createElement('td');
        movesTd.className = 'weight-bold';
        movesTd.textContent = String(record.moves);

        const dateTd = document.createElement('td');
        dateTd.textContent = record.date;

        row.append(rankTd, movesTd, dateTd);
        tbody.append(row);
      });

      table.append(thead, tbody);
      modalContent.append(closeButton, title, table);
    }

    this.element.append(modalContent);
  }

  open() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }

    this.render();
    this._initEvents();

    document.body.append(this.element);
    setTimeout(() => this.element.classList.add('is-open'), 10);
  }

  close() {
    this.element.classList.remove('is-open');
    setTimeout(() => this.element.remove(), 300);
  }

  _initEvents() {
    const closeBtn = this.element.querySelector('.modal-container__close-button');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    this.element.addEventListener('click', (e) => {
      if (e.target === this.element) {
        this.close();
      }
    });
  }
}

export default LeaderboardModal;
