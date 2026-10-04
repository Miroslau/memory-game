import './styles/style.css';
import Header from './components/Header.js';
import Board from './components/Board';
import Card from './components/Card';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  if (!app) {
    console.error('The root element #app is not found!');
    return;
  }

  const headerComponent = new Header();
  const gameBoardComponent = new Board();

  app.append(headerComponent.getElement(), gameBoardComponent.getElement());

  const testItems = ['🍎', '🍌', '🍎', '🍌'];

  testItems.forEach((emoji, index) => {
    const card = new Card(`card-${index}`, emoji);

    card.getElement().addEventListener('click', () => {
      card.flip();
    });

    gameBoardComponent.boardElement.append(card.getElement());
  });
});
