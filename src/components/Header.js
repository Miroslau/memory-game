import Component from './Component';

class Header extends Component {
  constructor() {
    super('header', 'header');
    this.render();
  }

  render() {
    const title = document.createElement('h1');
    title.className = 'header__title';
    title.textContent = 'Memory Game';

    const controls = document.createElement('div');
    controls.className = 'header__controls';

    const newGameBtn = document.createElement('button');
    newGameBtn.type = 'button';
    newGameBtn.className = 'button button_primary';
    newGameBtn.id = 'new-game-btn';
    newGameBtn.textContent = 'New Game';

    const leaderBoardBtn = document.createElement('button');
    leaderBoardBtn.type = 'button';
    leaderBoardBtn.className = 'button button_secondary';
    leaderBoardBtn.id = 'leaderboard-btn';
    leaderBoardBtn.textContent = 'Leaderboard';

    controls.append(newGameBtn, leaderBoardBtn);
    this.element.append(title, controls);
  }
}

export default Header;
