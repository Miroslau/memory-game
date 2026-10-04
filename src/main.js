import './styles/style.css';
import Header from './components/Header.js';
import Board from './components/Board';
import Card from './components/Card';
import GmeEngine from './core/GmeEngine';
import BoardController from './components/BoardController';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  if (!app) {
    console.error('The root element #app is not found!');
    return;
  }

  const headerComponent = new Header();
  const gameBoardComponent = new Board();

  app.append(headerComponent.getElement(), gameBoardComponent.getElement());

  const emojis = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🥑', '🥝'];

  const gameEngine = new GmeEngine(emojis);
  const boardController = new BoardController(gameBoardComponent, gameEngine);

  boardController.startNewGame();
});
