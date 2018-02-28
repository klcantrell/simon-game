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


const SVGpiece = ((elementID) => {
  const rootSVG = document.querySelector(".console__message");
  return {
    create(elementID) {
      let el = rootSVG.getElementById(elementID);
      return {
        el: el,
        path: function() {
          return this.el.getAttribute("d");
        },
        fill: function() {
          return this.el.getAttribute("fill");
        },
        strokeWidth: function() {
          return this.el.getAttribute("stroke-width");
        }
      }
    }
  }
})();


const simon = {
  one: SVGpiece.create("simonMessage1"),
  two: SVGpiece.create("simonMessage1-clone1"),
  three: SVGpiece.create("simonMessage1-clone2"),
  four: SVGpiece.create("simonMessage1-clone3"),
  five: SVGpiece.create("simonMessage2"),
  six: SVGpiece.create("simonMessage2-clone1"),
  seven: SVGpiece.create("simonMessage2-clone2"),
  eight: SVGpiece.create("simonMessage2-clone3"),
  nine: SVGpiece.create("simonMessage3"),
  ten: SVGpiece.create("simonMessage3-clone1"),
  eleven: SVGpiece.create("simonMessage3-clone2"),
  twelve: SVGpiece.create("simonMessage3-clone3"),
  thirteen: SVGpiece.create("simonMessage4"),
  fourteen: SVGpiece.create("simonMessage4-clone1"),
  fifteen: SVGpiece.create("simonMessage4-clone2"),
  sixteen: SVGpiece.create("simonMessage4-clone3"),
  seventeen: SVGpiece.create("simonMessage5"),
  eighteen: SVGpiece.create("simonMessage5-clone1"),
  nineteen: SVGpiece.create("simonMessage5-clone2"),
  twenty: SVGpiece.create("simonMessage5-clone3"),
  twentyOne: SVGpiece.create("simonMessage6"),
  twentyTwo: SVGpiece.create("simonMessage6-clone1"),
  twentyThree: SVGpiece.create("simonMessage6-clone2"),
  twentyFour: SVGpiece.create("simonMessage7"),
  twentyFive: SVGpiece.create("simonMessage7-clone1"),
  twentySix: SVGpiece.create("simonMessage7-clone2")
};

const simonAttrCopy = (() => {
  let attributes = {};
  for (let i = 0, keys = Object.keys(simon); i < keys.length; i++) {
    let path = simon[keys[i]].path(),
        fill = simon[keys[i]].fill(),
        strokeWidth = simon[keys[i]].strokeWidth();
    attributes[keys[i]] = {
      path: function() {
        return path;
      },
      fill: function() {
        return fill;
      },
      strokeWidth: function() {
        return strokeWidth;
      }
    }
  }
  return attributes;
})();

const you = {
  one: SVGpiece.create("youMessage1"),
  two: SVGpiece.create("youMessage1-clone1"),
  three: SVGpiece.create("youMessage1-clone2"),
  four: SVGpiece.create("youMessage1-clone3"),
  five: SVGpiece.create("youMessage1-clone4"),
  six: SVGpiece.create("youMessage1-clone5"),
  seven: SVGpiece.create("youMessage1-clone6"),
  eight: SVGpiece.create("youMessage2"),
  nine: SVGpiece.create("youMessage2-clone1"),
  ten: SVGpiece.create("youMessage2-clone2"),
  eleven: SVGpiece.create("youMessage2-clone3"),
  twelve: SVGpiece.create("youMessage2-clone4"),
  thirteen: SVGpiece.create("youMessage2-clone5"),
  fourteen: SVGpiece.create("youMessage2-clone6"),
  fifteen: SVGpiece.create("youMessage3"),
  sixteen: SVGpiece.create("youMessage3-clone1"),
  seventeen: SVGpiece.create("youMessage3-clone2"),
  eighteen: SVGpiece.create("youMessage3-clone3"),
  nineteen: SVGpiece.create("youMessage3-clone4"),
  twenty: SVGpiece.create("youMessage3-clone5"),
  twentyOne: SVGpiece.create("youMessage4"),
  twentyTwo: SVGpiece.create("youMessage4-clone1"),
  twentyThree: SVGpiece.create("youMessage4-clone2"),
  twentyFour: SVGpiece.create("youMessage4-clone3"),
  twentyFive: SVGpiece.create("youMessage4-clone4"),
  twentySix: SVGpiece.create("youMessage4-clone5")
};

const reset = {
  one: SVGpiece.create("resetMessage1"),
  two: SVGpiece.create("resetMessage2"),
  three: SVGpiece.create("resetMessage3"),
  four: SVGpiece.create("resetMessage4"),
  five: SVGpiece.create("resetMessage5"),
  six: SVGpiece.create("resetMessage6"),
  seven: SVGpiece.create("resetMessage7"),
  eight: SVGpiece.create("resetMessage8"),
  nine: SVGpiece.create("resetMessage9"),
  ten: SVGpiece.create("resetMessage10"),
  eleven: SVGpiece.create("resetMessage11"),
  twelve: SVGpiece.create("resetMessage12"),
  thirteen: SVGpiece.create("resetMessage13"),
  fourteen: SVGpiece.create("resetMessage14"),
  fifteen: SVGpiece.create("resetMessage15"),
  sixteen: SVGpiece.create("resetMessage16"),
  seventeen: SVGpiece.create("resetMessage17"),
  eighteen: SVGpiece.create("resetMessage18"),
  nineteen: SVGpiece.create("resetMessage19"),
  twenty: SVGpiece.create("resetMessage20"),
  twentyOne: SVGpiece.create("resetMessage21"),
  twentyTwo: SVGpiece.create("resetMessage22"),
  twentyThree: SVGpiece.create("resetMessage23"),
  twentyFour: SVGpiece.create("resetMessage24"),
  twentyFive: SVGpiece.create("resetMessage25"),
  twentySix: SVGpiece.create("resetMessage26")
};

const win = {
  one: SVGpiece.create("winMessage1"),
  two: SVGpiece.create("winMessage1-clone1"),
  three: SVGpiece.create("winMessage1-clone2"),
  four: SVGpiece.create("winMessage1-clone3"),
  five: SVGpiece.create("winMessage2"),
  six: SVGpiece.create("winMessage2-clone1"),
  seven: SVGpiece.create("winMessage2-clone2"),
  eight: SVGpiece.create("winMessage2-clone3"),
  nine: SVGpiece.create("winMessage3"),
  ten: SVGpiece.create("winMessage3-clone1"),
  eleven: SVGpiece.create("winMessage3-clone2"),
  twelve: SVGpiece.create("winMessage3-clone3"),
  thirteen: SVGpiece.create("winMessage4"),
  fourteen: SVGpiece.create("winMessage4-clone1"),
  fifteen: SVGpiece.create("winMessage4-clone2"),
  sixteen: SVGpiece.create("winMessage4-clone3"),
  seventeen: SVGpiece.create("winMessage5"),
  eighteen: SVGpiece.create("winMessage5-clone1"),
  nineteen: SVGpiece.create("winMessage5-clone2"),
  twenty: SVGpiece.create("winMessage5-clone3"),
  twentyOne: SVGpiece.create("winMessage6"),
  twentyTwo: SVGpiece.create("winMessage6-clone1"),
  twentyThree: SVGpiece.create("winMessage6-clone2"),
  twentyFour: SVGpiece.create("winMessage7"),
  twentyFive: SVGpiece.create("winMessage7-clone1"),
  twentySix: SVGpiece.create("winMessage7-clone2")
};

function simonMorphTo(toObj) {
    for (let i = 0, keys = Object.keys(toObj); i < keys.length; i++) {
      KUTE.to(simon[keys[i]].el, {path: toObj[keys[i]].path(), attr: {fill: toObj[keys[i]].fill(), strokeWidth: toObj[keys[i]].strokeWidth()}}, {morphPrecision: 6, morphIndex: 400, duration: 1000}).start();
    }
}


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
      resetGame();
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
  simonMorphTo(you);
  let playerTurnVerdict = await playerTurn(cpuPattern);
  if (!playerTurnVerdict) {
    if (strictMode) {
      simonMorphTo(reset);
      return;
    } else {
      await playerRetry();
      if (strictMode) {
        simonMorphTo(reset);
        return;
      }
    }
  }
  if (cpuPattern.length === 20) {
    simonMorphTo(win);
    return;
  } else {
    simonMorphTo(simonAttrCopy);
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
      simonMorphTo(simonAttrCopy);
      await delayStart();
      let cpuPattern = await replay_cpu_pattern();
      simonMorphTo(you);
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

function resetGame() {
  CPU.clearPattern();
  gameView.stepsEl.textContent = 0;
  resetTriggered = true;
  simonMorphTo(simonAttrCopy);
}
