import 'core-js/es6/promise';
import 'core-js/fn/object/assign';
import GameState from './gameState';
import GameLogic from './gameLogic';
import GameView from './gameView';
import styles from '../scss/style.scss';


const gameState = GameState();
const gameLogic = GameLogic();
const gameView = GameView(gameLogic, gameState);

gameLogic.init({view: gameView, model: gameState});
