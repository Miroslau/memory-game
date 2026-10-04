import './styles/style.css';
import Header from './components/Header.js';
import Board from './components/Board';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  if (!app) {
    console.error('The root element #app is not found!');
    return;
  }

  const headerComponent = new Header();
  const gameBoardComponent = new Board();

  app.append(headerComponent.getElement(), gameBoardComponent.getElement());
});
