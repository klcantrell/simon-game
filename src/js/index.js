import styles from '../scss/style.scss';

// Polyfills for IE //
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
// End polyfills for IE //

let strictMode = false,
    resetTriggered = false,
    playerEscapeAdded = false;

const canGenRandomStep = (state) => {
  return {
    genRandomStep: () => {
      state.pattern.push(Math.floor(Math.random() * 4) + 1);
    }
  }
};
const canAddStepFromUser = (state) => {
  return {
    addStepFromUser: (e) => {
      state.pattern.push(parseInt(e.target.getAttribute("data-name")));
    }
  }
}
const canPlayBackPattern = (state) => {
  function patternStepToColor(patternStep) {
    switch (patternStep) {
      case 1:
        return gameView.colorButtonComponents.green;
      case 2:
        return gameView.colorButtonComponents.red;
      case 3:
        return gameView.colorButtonComponents.yellow;
      case 4:
        return gameView.colorButtonComponents.blue;
    }
  }
  function playBackPattern(index = 0) {
    if (state.pattern.length === 0) {
      return;
    }
    let i = index;
    patternStepToColor(state.pattern[i]).play(state.cadence)
      .then(() => {
        i++;
        if (i < state.pattern.length) {
          playBackPattern(i);
        }
      });
  }
  return {
    playBackPattern: playBackPattern
  }
}
const canClearPattern = (state) => {
  return {
    clearPattern: () => {
      state.pattern.length = 0;
    }
  }
};




const CPU = (() => {
  let state = {
    pattern: [],
    cadence: 900
  };
  return Object.assign(
    {},
    state,
    canGenRandomStep(state),
    canPlayBackPattern(state),
    canClearPattern(state)
  );
})();

const userInterface = (() => {
  let state = {
    pattern: [],
    cadence: 1
  };
  return Object.assign(
    {},
    state,
    canAddStepFromUser(state),
    canPlayBackPattern(state),
    canClearPattern(state)
  );
})();


const messageMorph = (() => {
  let tl = new TimelineLite(),
      simonMessage = document.getElementById("simonMessage");
  tl.pause(0);
  tl.add("simon-start");
  tl.add(TweenLite.to(simonMessage, 1, {morphSVG: "#youMessage"}));
  tl.add("you-end");
  tl.addPause("you-end");
  tl.add(TweenLite.to(simonMessage, 1, {morphSVG: "#resetMessage"}));
  tl.add("reset-end");
  tl.addPause("reset-end");
  tl.add(TweenLite.to(simonMessage, 1, {morphSVG: "#youMessage"}));
  tl.add("win-start");
  tl.add(TweenLite.to(simonMessage, 1, {morphSVG: "#winMessage"}));
  return {
    simonToYou() {
      tl.play("simon-start");
    },
    youToSimon() {
      tl.reverse("you-end");
    },
    youToReset() {
      tl.play("you-end");
    },
    restart() {
      tl.pause(0);
    },
    win() {
      tl.play("win-start");
    }
  }
})();


const gameView = (() => {
  let state = {
    simonEl: document.querySelector(".simon"),
    buttonEls: {},
    stepsEl: '',
    restartEl: '',
    colorButtonComponents: {},
  };

  function ColorButton(node) {
    let el = node,
        name = el.getAttribute('data-name'),
        sound = new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound${name}.mp3`),
        classNames = el.className.split(' '),
        colorID = classNames[classNames.length - 1];

    async function glow() {
      function lighten() {
        el.classList.add(`${colorID}--played`);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 300)
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
      reset();
      delayStart()
        .then(() => {
        resetTriggered = false;
        gameLoop();
      });
    });
    state.startEl.addEventListener('click', function startGame() {
      Promise.all([
        gameView.colorButtonComponents.green.gameStartAnimation(),
        gameView.colorButtonComponents.red.gameStartAnimation(),
        gameView.colorButtonComponents.yellow.gameStartAnimation(),
        gameView.colorButtonComponents.blue.gameStartAnimation()
      ])
      .then(() => {
        gameLoop();
        state.startEl.removeEventListener('click', startGame);
      });
    });
    state.strictEl.addEventListener('change', function toggleStrict(e) {
      if (e.target.checked) {
        strictMode = true;
      } else {
        strictMode = false;
      }
    });
  })();

  return Object.assign(
    {}, state
  );
})();






function cpuTurn() {
  return new Promise((resolve) => {
    CPU.genRandomStep();
    CPU.playBackPattern();
    let patternTime = CPU.pattern.length * CPU.cadence + 300;
    setTimeout(() => {
      resolve(CPU.pattern);
    }, patternTime);
  });
}

function playerTurn(patternToMatch) {
  userInterface.clearPattern();
  return new Promise((finalResolve) => {
    function escape(resolveStream) {
      resolveStream();
    }
    if (!playerEscapeAdded) {
      playerEscapeAdded = true;
      gameView.restartEl.addEventListener('click', function resetDuringPlayerTurn() {
        playerEscapeAdded = false;
        escape(finalResolve);
        gameView.restartEl.removeEventListener('click', resetDuringPlayerTurn);
      });
    }

    function receiveInput(e) {
      userInterface.addStepFromUser(e);
      let lastStepIndex = userInterface.pattern.length - 1;
      userInterface.playBackPattern(lastStepIndex);
      return Promise.resolve(lastStepIndex)
    }
    function checkInput(index) {
      let lastUserInput = userInterface.pattern[index],
          corresponding_cpu_input = patternToMatch[index];
      if (lastUserInput !== corresponding_cpu_input) {
        return Promise.resolve(false);
      } else {
        return Promise.resolve(true);
      }
    }
    async function isSuccessfulTurn(e) {
      let lastTurnIndex = await receiveInput(e),
          isPlayerInputMatched = await checkInput(lastTurnIndex);
      if (!isPlayerInputMatched) {
        finalResolve(false);
        gameView.boardEl.removeEventListener('click', isSuccessfulTurn);
      }
      if (lastTurnIndex === (patternToMatch.length - 1)) {
        finalResolve(true);
        gameView.boardEl.removeEventListener('click', isSuccessfulTurn);
      }
    }

    gameView.boardEl.addEventListener('click', isSuccessfulTurn);
  });
}

async function gameLoop() {
  if (resetTriggered) {
    return;
  }
  let cpuPattern = await cpuTurn();
  if (resetTriggered) {
    return;
  }
  gameView.stepsEl.textContent = cpuPattern.length;
  messageMorph.simonToYou();
  let playerTurnVerdict = await playerTurn(cpuPattern);
  if (!playerTurnVerdict) {
    if (strictMode) {
      messageMorph.youToReset();
      return;
    } else {
      await playerRetry();
      if (strictMode) {
        messageMorph.youToReset();
        return;
      }
    }
  }
  if (cpuPattern.length === 20) {
    messageMorph.win();
    return;
  } else {
    messageMorph.youToSimon();
    await delayStart();
    gameLoop();
  }
}

function playerRetry() {
  return new Promise((finalResolve) => {
    function replay_cpu_pattern() {
      return new Promise((resolve) => {
        CPU.playBackPattern();
        let patternTime = CPU.pattern.length * CPU.cadence + 300;
        setTimeout(() => {
          resolve(CPU.pattern);
        }, patternTime);
      })
    }

    async function retryLoop() {
      if (strictMode) {
        finalResolve();
        return;
      }
      messageMorph.youToSimon();
      await delayStart();
      let cpuPattern = await replay_cpu_pattern();
      messageMorph.simonToYou();
      let playerTurnVerdict = await playerTurn(cpuPattern);
      if (playerTurnVerdict) {
        finalResolve();
      } else {
        retryLoop();
      }
    }

    retryLoop();
  });
}

function delayStart() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000)
  });
}

function reset() {
  CPU.clearPattern();
  gameView.stepsEl.textContent = 0;
  resetTriggered = true;
  messageMorph.restart();
}
