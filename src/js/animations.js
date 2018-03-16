import KUTE from 'kute.js';
import 'kute.js/kute-svg';
import 'kute.js/kute-attr';

export default function Animations() {
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

  function simonMorphTo(toKey) {
    const messages = {
      simon,
      simonAttrCopy,
      you,
      reset,
      win
    };

    const toObj = messages[toKey];

    for (let i = 0, keys = Object.keys(toObj); i < keys.length; i++) {
      KUTE.to(simon[keys[i]].el, {path: toObj[keys[i]].path(), attr: {fill: toObj[keys[i]].fill(), strokeWidth: toObj[keys[i]].strokeWidth()}}, {morphPrecision: 6, morphIndex: 400, duration: 1000}).start();
    }
  }

  return {
    simonMorphTo
  };

}
