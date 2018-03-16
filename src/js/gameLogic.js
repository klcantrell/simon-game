import PlayerFunctions from './playerFunctions';

const playerFunctions = PlayerFunctions();

export default function GameLogic() {
  let view,
      model,
      CPU,
      userInterface;

  function init(dependencies = {view, model}) {
    view = dependencies.view;
    model = dependencies.model;
    CPU = bootCPU();
    userInterface = bootUserInterface();
  }

  const bootCPU = () => {
    let state = {
      pattern: [],
      cadence: 900
    };
    return Object.assign(
      {},
      state,
      playerFunctions.canGenRandomStep(state),
      playerFunctions.canPlayBackPattern(state)(view.colorButtonComponents),
      playerFunctions.canClearPattern(state)
    );
  };

  const bootUserInterface = () => {
    let state = {
      pattern: [],
      cadence: 1
    };
    return Object.assign(
      {},
      state,
      playerFunctions.canAddStepFromUser(state),
      playerFunctions.canPlayBackPattern(state)(view.colorButtonComponents),
      playerFunctions.canClearPattern(state)
    );
  };

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

      function receiveInput(e) {
        userInterface.addStepFromUser(e);
        let lastStepIndex = userInterface.pattern.length - 1;
        userInterface.playBackPattern(lastStepIndex);
        return Promise.resolve(lastStepIndex);
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
        if (e.target.dataset.name !== undefined) {
          let lastTurnIndex = await receiveInput(e),
              isPlayerInputMatched = await checkInput(lastTurnIndex);
          if (!isPlayerInputMatched) {
            finalResolve(false);
            view.boardEl.removeEventListener('click', isSuccessfulTurn);
            view.restartEl.removeEventListener('click', resetDuringPlayerTurn);
          }
          if (lastTurnIndex === (patternToMatch.length - 1)) {
            finalResolve(true);
            view.boardEl.removeEventListener('click', isSuccessfulTurn);
            view.restartEl.removeEventListener('click', resetDuringPlayerTurn);
          }
        }
      }

      function resetDuringPlayerTurn() {
        finalResolve();
        view.boardEl.removeEventListener('click', isSuccessfulTurn);
        view.restartEl.removeEventListener('click', resetDuringPlayerTurn);
      }

      view.restartEl.addEventListener('click', resetDuringPlayerTurn);
      view.boardEl.addEventListener('click', isSuccessfulTurn);
    });
  }

  async function gameLoop() {
    if (model.resetTriggered) {
      return;
    }
    let cpuPattern = await cpuTurn();
    if (model.resetTriggered) {
      return;
    }
    view.stepsEl.textContent = cpuPattern.length;
    view.animations.simonMorphTo("you");
    let playerTurnVerdict = await playerTurn(cpuPattern);
    if (model.resetTriggered) {
      return;
    }
    if (!playerTurnVerdict) {
      if (model.strictMode) {
        view.animations.simonMorphTo("reset");
        return;
      } else {
        await playerRetry();
        if (model.strictMode) {
          view.animations.simonMorphTo("reset");
          return;
        }
      }
    }
    if (cpuPattern.length === 20) {
      view.animations.simonMorphTo("win");
      return;
    } else {
      view.animations.simonMorphTo("simonAttrCopy");
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
        if (model.strictMode) {
          finalResolve();
          return;
        }
        view.animations.simonMorphTo("simonAttrCopy");
        await delayStart();
        let cpuPattern = await replay_cpu_pattern();
        view.animations.simonMorphTo("you");
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
    view.stepsEl.textContent = 0;
    model.resetTriggered = true;
    view.animations.simonMorphTo("simonAttrCopy");
  }

  return {
    gameLoop,
    delayStart,
    resetGame,
    init
  }

}
