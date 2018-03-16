export default function PlayerFunctions() {
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
  };

  const canPlayBackPattern = (state) => (gameColorButtonComponents) => {
    function patternStepToColor(patternStep) {
      switch (patternStep) {
        case 1:
          return gameColorButtonComponents.green;
        case 2:
          return gameColorButtonComponents.red;
        case 3:
          return gameColorButtonComponents.yellow;
        case 4:
          return gameColorButtonComponents.blue;
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
  };

  const canClearPattern = (state) => {
    return {
      clearPattern: () => {
        state.pattern.length = 0;
      }
    }
  };

  return {
    canGenRandomStep,
    canAddStepFromUser,
    canPlayBackPattern,
    canClearPattern
  }
}
