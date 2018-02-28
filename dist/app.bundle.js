/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_style_scss__);
var gameLoop = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var cpuPattern, playerTurnVerdict;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!resetTriggered) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt('return');

          case 2:
            _context3.next = 4;
            return cpuTurn();

          case 4:
            cpuPattern = _context3.sent;

            if (!resetTriggered) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt('return');

          case 7:
            gameView.stepsEl.textContent = cpuPattern.length;
            simonMorphTo(you);
            _context3.next = 11;
            return playerTurn(cpuPattern);

          case 11:
            playerTurnVerdict = _context3.sent;

            if (playerTurnVerdict) {
              _context3.next = 23;
              break;
            }

            if (!strictMode) {
              _context3.next = 18;
              break;
            }

            simonMorphTo(reset);
            return _context3.abrupt('return');

          case 18:
            _context3.next = 20;
            return playerRetry();

          case 20:
            if (!strictMode) {
              _context3.next = 23;
              break;
            }

            simonMorphTo(reset);
            return _context3.abrupt('return');

          case 23:
            if (!(cpuPattern.length === 20)) {
              _context3.next = 28;
              break;
            }

            simonMorphTo(win);
            return _context3.abrupt('return');

          case 28:
            simonMorphTo(simonAttrCopy);
            _context3.next = 31;
            return delayStart();

          case 31:
            gameLoop();

          case 32:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function gameLoop() {
    return _ref3.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// Polyfills for IE //
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
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

var strictMode = false,
    resetTriggered = false,
    playerEscapeAdded = false;

var canGenRandomStep = function canGenRandomStep(state) {
  return {
    genRandomStep: function genRandomStep() {
      state.pattern.push(Math.floor(Math.random() * 4) + 1);
    }
  };
};
var canAddStepFromUser = function canAddStepFromUser(state) {
  return {
    addStepFromUser: function addStepFromUser(e) {
      state.pattern.push(parseInt(e.target.getAttribute("data-name")));
    }
  };
};
var canPlayBackPattern = function canPlayBackPattern(state) {
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
  function playBackPattern() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (state.pattern.length === 0) {
      return;
    }
    var i = index;
    patternStepToColor(state.pattern[i]).play(state.cadence).then(function () {
      i++;
      if (i < state.pattern.length) {
        playBackPattern(i);
      }
    });
  }
  return {
    playBackPattern: playBackPattern
  };
};
var canClearPattern = function canClearPattern(state) {
  return {
    clearPattern: function clearPattern() {
      state.pattern.length = 0;
    }
  };
};

var CPU = function () {
  var state = {
    pattern: [],
    cadence: 900
  };
  return Object.assign({}, state, canGenRandomStep(state), canPlayBackPattern(state), canClearPattern(state));
}();

var userInterface = function () {
  var state = {
    pattern: [],
    cadence: 1
  };
  return Object.assign({}, state, canAddStepFromUser(state), canPlayBackPattern(state), canClearPattern(state));
}();

var SVGpiece = function (elementID) {
  var rootSVG = document.querySelector(".console__message");
  return {
    create: function create(elementID) {
      var el = rootSVG.getElementById(elementID);
      return {
        el: el,
        path: function path() {
          return this.el.getAttribute("d");
        },
        fill: function fill() {
          return this.el.getAttribute("fill");
        },
        strokeWidth: function strokeWidth() {
          return this.el.getAttribute("stroke-width");
        }
      };
    }
  };
}();

var simon = {
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

var simonAttrCopy = function () {
  var attributes = {};

  var _loop = function _loop(i, keys) {
    var path = simon[keys[i]].path(),
        fill = simon[keys[i]].fill(),
        strokeWidth = simon[keys[i]].strokeWidth();
    attributes[keys[i]] = {
      path: function (_path) {
        function path() {
          return _path.apply(this, arguments);
        }

        path.toString = function () {
          return _path.toString();
        };

        return path;
      }(function () {
        return path;
      }),
      fill: function (_fill) {
        function fill() {
          return _fill.apply(this, arguments);
        }

        fill.toString = function () {
          return _fill.toString();
        };

        return fill;
      }(function () {
        return fill;
      }),
      strokeWidth: function (_strokeWidth) {
        function strokeWidth() {
          return _strokeWidth.apply(this, arguments);
        }

        strokeWidth.toString = function () {
          return _strokeWidth.toString();
        };

        return strokeWidth;
      }(function () {
        return strokeWidth;
      })
    };
  };

  for (var i = 0, keys = Object.keys(simon); i < keys.length; i++) {
    _loop(i, keys);
  }
  return attributes;
}();

var you = {
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

var reset = {
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

var win = {
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
  for (var i = 0, keys = Object.keys(toObj); i < keys.length; i++) {
    KUTE.to(simon[keys[i]].el, { path: toObj[keys[i]].path(), attr: { fill: toObj[keys[i]].fill(), strokeWidth: toObj[keys[i]].strokeWidth() } }, { morphPrecision: 6, morphIndex: 400, duration: 1000 }).start();
  }
}

var gameView = function () {
  var state = {
    simonEl: document.querySelector(".simon"),
    buttonEls: {},
    stepsEl: '',
    restartEl: '',
    colorButtonComponents: {}
  };

  function ColorButton(node) {
    var glow = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var lighten, removeLighten;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                removeLighten = function removeLighten() {
                  el.classList.remove(colorID + '--played');
                };

                lighten = function lighten() {
                  el.classList.add(colorID + '--played');
                  return new Promise(function (resolve) {
                    setTimeout(function () {
                      resolve();
                    }, 300);
                  });
                };

                _context.next = 4;
                return lighten();

              case 4:
                removeLighten();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function glow() {
        return _ref.apply(this, arguments);
      };
    }();

    var el = node,
        name = el.getAttribute('data-name'),
        sound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound' + name + '.mp3'),
        classNames = el.className.split(' '),
        colorID = classNames[classNames.length - 1];

    return {
      el: el,
      play: function play(cadence) {
        glow();
        sound.load();
        sound.play();
        return new Promise(function (resolve) {
          setTimeout(resolve, cadence);
        });
      },
      gameStartAnimation: function gameStartAnimation() {
        return new Promise(function (resolve) {
          el.classList.add(colorID + '--game-started');
          setTimeout(function () {
            resolve();
          }, 1000);
        });
      }
    };
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
    state.colorButtonComponents.green = ColorButton(state.buttonEls.green), state.colorButtonComponents.red = ColorButton(state.buttonEls.red), state.colorButtonComponents.yellow = ColorButton(state.buttonEls.yellow), state.colorButtonComponents.blue = ColorButton(state.buttonEls.blue);
  })();
  (function bindEvents() {
    state.restartEl.addEventListener('click', function restart() {
      resetGame();
      delayStart().then(function () {
        resetTriggered = false;
        gameLoop();
      });
    });
    state.startEl.addEventListener('click', function startGame() {
      Promise.all([gameView.colorButtonComponents.green.gameStartAnimation(), gameView.colorButtonComponents.red.gameStartAnimation(), gameView.colorButtonComponents.yellow.gameStartAnimation(), gameView.colorButtonComponents.blue.gameStartAnimation()]).then(function () {
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

  return Object.assign({}, state);
}();

function cpuTurn() {
  return new Promise(function (resolve) {
    CPU.genRandomStep();
    CPU.playBackPattern();
    var patternTime = CPU.pattern.length * CPU.cadence + 300;
    setTimeout(function () {
      resolve(CPU.pattern);
    }, patternTime);
  });
}

function playerTurn(patternToMatch) {
  userInterface.clearPattern();
  return new Promise(function (finalResolve) {
    var isSuccessfulTurn = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        var lastTurnIndex, isPlayerInputMatched;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return receiveInput(e);

              case 2:
                lastTurnIndex = _context2.sent;
                _context2.next = 5;
                return checkInput(lastTurnIndex);

              case 5:
                isPlayerInputMatched = _context2.sent;

                if (!isPlayerInputMatched) {
                  finalResolve(false);
                  gameView.boardEl.removeEventListener('click', isSuccessfulTurn);
                }
                if (lastTurnIndex === patternToMatch.length - 1) {
                  finalResolve(true);
                  gameView.boardEl.removeEventListener('click', isSuccessfulTurn);
                }

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function isSuccessfulTurn(_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

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
      var lastStepIndex = userInterface.pattern.length - 1;
      userInterface.playBackPattern(lastStepIndex);
      return Promise.resolve(lastStepIndex);
    }
    function checkInput(index) {
      var lastUserInput = userInterface.pattern[index],
          corresponding_cpu_input = patternToMatch[index];
      if (lastUserInput !== corresponding_cpu_input) {
        return Promise.resolve(false);
      } else {
        return Promise.resolve(true);
      }
    }


    gameView.boardEl.addEventListener('click', isSuccessfulTurn);
  });
}

function playerRetry() {
  return new Promise(function (finalResolve) {
    var retryLoop = function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var cpuPattern, playerTurnVerdict;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!strictMode) {
                  _context4.next = 3;
                  break;
                }

                finalResolve();
                return _context4.abrupt('return');

              case 3:
                simonMorphTo(simonAttrCopy);
                _context4.next = 6;
                return delayStart();

              case 6:
                _context4.next = 8;
                return replay_cpu_pattern();

              case 8:
                cpuPattern = _context4.sent;

                simonMorphTo(you);
                _context4.next = 12;
                return playerTurn(cpuPattern);

              case 12:
                playerTurnVerdict = _context4.sent;

                if (playerTurnVerdict) {
                  finalResolve();
                } else {
                  retryLoop();
                }

              case 14:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function retryLoop() {
        return _ref4.apply(this, arguments);
      };
    }();

    function replay_cpu_pattern() {
      return new Promise(function (resolve) {
        CPU.playBackPattern();
        var patternTime = CPU.pattern.length * CPU.cadence + 300;
        setTimeout(function () {
          resolve(CPU.pattern);
        }, patternTime);
      });
    }

    retryLoop();
  });
}

function delayStart() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 3000);
  });
}

function resetGame() {
  CPU.clearPattern();
  gameView.stepsEl.textContent = 0;
  resetTriggered = true;
  simonMorphTo(simonAttrCopy);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "style.css";

/***/ })
/******/ ]);