import { Howl, Howler } from 'howler/dist/howler.core.min';
import Animations from './animations';

const animations = Animations();

export default function GameView(logic, model) {
  const state = {
    simonEl: document.querySelector(".simon"),
    buttonEls: {},
    stepsEl: '',
    restartEl: '',
    colorButtonComponents: {}
  };

  function ColorButton(node) {
    let el = node,
        name = el.getAttribute('data-name'),
        sound = new Howl({ src: require(`../sounds/simonSound${name}.mp3`) }),
        classNames = el.className.split(' '),
        colorID = classNames[classNames.length - 1];

    async function glow() {
      function lighten() {
        el.classList.add(`${colorID}--played`);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 500)
        });
      }
      function removeLighten() {
        el.classList.remove(`${colorID}--played`);
      }

      await lighten();
      removeLighten();
    }

    return {
      el,
      play(cadence) {
        glow();
        sound.play();
        return new Promise((resolve) => {
          setTimeout(resolve, cadence);
        });
      },
      gameStartAnimation() {
        return new Promise((resolve) => {
          el.classList.add(`${colorID}--game-started`);
          setTimeout(() => {
            resolve();
          }, 1000)
        });
      }
    }
  }

  (function cacheDom() {
    state.boardEl = state.simonEl.querySelector(".board");
    state.buttonEls.green = state.boardEl.querySelector(".green");
    state.buttonEls.red = state.boardEl.querySelector(".red");
    state.buttonEls.yellow = state.boardEl.querySelector(".yellow");
    state.buttonEls.blue = state.boardEl.querySelector(".blue");
    state.restartEl = state.simonEl.querySelector(".console__reset");
    state.startEl = state.simonEl.querySelector(".console__start");
    state.strictEl = state.simonEl.querySelector("#strictToggle");
    state.stepsEl = state.simonEl.querySelector(".console__steps");
  })();
  (function createColorButtonComponents() {
    state.colorButtonComponents.green = ColorButton(state.buttonEls.green),
    state.colorButtonComponents.red = ColorButton(state.buttonEls.red),
    state.colorButtonComponents.yellow = ColorButton(state.buttonEls.yellow),
    state.colorButtonComponents.blue = ColorButton(state.buttonEls.blue)
  })();
  (function bindEvents() {
    state.restartEl.addEventListener('click', function restart() {
      logic.resetGame();
      logic.delayStart()
        .then(() => {
          model.resetTriggered = false;
          logic.gameLoop();
        });
    });
    state.startEl.addEventListener('click', function startGame() {
      state.startEl.removeEventListener('click', startGame);
      Promise.all([
        state.colorButtonComponents.green.gameStartAnimation(),
        state.colorButtonComponents.red.gameStartAnimation(),
        state.colorButtonComponents.yellow.gameStartAnimation(),
        state.colorButtonComponents.blue.gameStartAnimation()
      ])
      .then(() => {
        logic.gameLoop();
      });
    });
    state.strictEl.addEventListener('change', function toggleStrict(e) {
      if (e.target.checked) {
        model.strictMode = true;
      } else {
        model.strictMode = false;
      }
    });
  })();

  return Object.assign(
    {},
    state,
    {
      animations
    }
  );
}
