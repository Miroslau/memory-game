import './styles/style.css';
import Header from './components/Header.js';
import Board from './components/Board';
import GmeEngine from './core/GmeEngine';
import BoardController from './components/BoardController';
import Scoreboard from './components/Scoreboard';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  if (!app) {
    console.error('The root element #app is not found!');
    return;
  }

  const headerComponent = new Header();
  const scoreboardComponent = new Scoreboard();
  const gameBoardComponent = new Board();

  app.append(
    headerComponent.getElement(),
    scoreboardComponent.getElement(),
    gameBoardComponent.getElement()
  );

  const emojis = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🥑', '🥝'];

  const gameEngine = new GmeEngine(emojis);
  const boardController = new BoardController(gameBoardComponent, gameEngine, scoreboardComponent);

  boardController.startNewGame();
});
