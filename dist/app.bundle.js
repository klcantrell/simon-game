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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(28)('wks');
var uid = __webpack_require__(16);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(29);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(4);
var has = __webpack_require__(9);
var SRC = __webpack_require__(16)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(5).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(44);
var toPrimitive = __webpack_require__(45);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(11);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(5);
var hide = __webpack_require__(4);
var redefine = __webpack_require__(6);
var ctx = __webpack_require__(13);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(51);
var enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(32);
var defined = __webpack_require__(20);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys');
var uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* KUTE.js - The Light Tweening Engine
 * by dnp_theme
 * Licensed under MIT-License
 */
(function (root,factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD. Register as an anonymous module.
  } else if (typeof exports == 'object') {
    module.exports = factory(); // Node, not strict CommonJS
  } else {
    root.KUTE = factory();
  }
}(this, function () {
  "use strict";

  // set a custom scope for KUTE.js
  var g = typeof global !== 'undefined' ? global : window, time = g.performance,
    body = document.body, tweens = [], tick = null, // tick must be null!!

    // strings
    length = 'length',
    split = 'split',
    indexOf = 'indexOf',
    replace = 'replace',

    offsetWidth = 'offsetWidth',
    offsetHeight = 'offsetHeight',

    options = 'options',
    valuesStart = 'valuesStart',
    valuesEnd = 'valuesEnd',
    valuesRepeat = 'valuesRepeat',

    element = 'element',
    playing = 'playing',

    duration = 'duration',
    delay = 'delay',
    offset = 'offset',
    repeat = 'repeat',
    repeatDelay = 'repeatDelay',
    yoyo = 'yoyo',
    easing = 'easing',
    chain = 'chain',
    keepHex = 'keepHex',

    style = 'style',
    dataTweening = 'data-tweening',
    getElementsByTagName = 'getElementsByTagName',
    addEventListener = 'addEventListener',
    removeEventListener = 'removeEventListener';


  //supported properties
  var colorProps = ['color', 'backgroundColor'], // 'hex', 'rgb', 'rgba' '#fff' 'rgb(0,0,0)' / 'rgba(0,0,0,0)' 'red' (IE9+)
    boxModelProps  = ['top', 'left', 'width', 'height'], 
    transformFunctions  = ['translate3d', 'translateX', 'translateY', 'translateZ', 'rotate', 'translate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'scale'],
    scrollProp  = ['scroll'], // has no default value, it's calculated on tween start
    opacityProp  = ['opacity'], // opacity
    coreProps = colorProps.concat( opacityProp, boxModelProps, transformFunctions),
    defaultPropsValues = {}; 

  //populate default values object
  for ( var propertyIndex=0, allCorePropLength = coreProps[length], coreProp; propertyIndex < allCorePropLength; propertyIndex++ ){
    coreProp = coreProps[propertyIndex];
    if (colorProps[indexOf](coreProp) !== -1){
      defaultPropsValues[coreProp] = 'rgba(0,0,0,0)'; // defaultPropsValues[coreProp] = {r:0,g:0,b:0,a:1};
    } else if ( boxModelProps[indexOf](coreProp) !== -1 ) {
      defaultPropsValues[coreProp] = 0;
    } else if ( coreProp === 'translate3d' ){ // px
      defaultPropsValues[coreProp] = [0,0,0];
    } else if ( coreProp === 'translate' ){ // px
      defaultPropsValues[coreProp] = [0,0];
    } else if ( coreProp === 'rotate' || /X|Y|Z/.test(coreProp) ){ // deg
      defaultPropsValues[coreProp] = 0;
    } else if ( coreProp === 'scale' || coreProp === 'opacity' ){ // unitless
      defaultPropsValues[coreProp] = 1;
    }
  }

  // default tween options, since 1.6.1
  var defaultOptions = {
      duration: 700,
      delay: 0,
      offset: 0,
      repeat: 0,
      repeatDelay: 0,
      yoyo: false,
      easing: 'linear',
      keepHex: false,
    },
    // tools / utils
    getPrefix = function() { //returns browser prefix
      var prefixes = ['Moz', 'moz', 'Webkit', 'webkit', 'O', 'o', 'Ms', 'ms'], thePrefix;
      for (var pIndex = 0, pfl = prefixes[length]; pIndex < pfl; pIndex++) { 
        if (prefixes[pIndex]+'Transform' in body[style]) { thePrefix = prefixes[pIndex]; break; }  
      }
      return thePrefix;
    },
    property = function(propertyToPrefix){ // returns prefixed property | property
      var prefixRequired = (!(propertyToPrefix in body[style])) ? true : false, prefix = getPrefix(); // is prefix required for property | prefix
      return prefixRequired ? prefix + (propertyToPrefix.charAt(0).toUpperCase() + propertyToPrefix.slice(1)) : propertyToPrefix;
    },
    selector = function(el,multi){ // a public selector utility
      var requestedElem;
      if (multi){
        requestedElem = el instanceof Object || typeof el === 'object' ? el : document.querySelectorAll(el);
      } else {
        requestedElem = typeof el === 'object' ? el : document.querySelector(el);
      }
      if (requestedElem === null && el !== 'window') throw new TypeError('Element not found or incorrect selector: '+el);
      return requestedElem;
    },
    radToDeg = function(a) { return a*180/Math.PI; },
    trueDimension = function (dimValue,isAngle) { //true dimension returns { v = value, u = unit }
      var intValue = parseInt(dimValue) || 0, mUnits = ['px','%','deg','rad','em','rem','vh','vw'], theUnit;
      for (var mIndex=0; mIndex<mUnits[length]; mIndex++) { 
        if ( typeof dimValue === 'string' && dimValue[indexOf](mUnits[mIndex]) !== -1 ) { 
          theUnit = mUnits[mIndex]; break; 
        } 
      }
      theUnit = theUnit !== undefined ? theUnit : (isAngle ? 'deg' : 'px');
      return { v: intValue, u: theUnit };
    },
    trueColor = function (colorString) { // replace transparent and transform any color to rgba()/rgb()
      if (/rgb|rgba/.test(colorString)) { // first check if it's a rgb string
        var vrgb = colorString[replace](/\s|\)/,'')[split]('(')[1][split](','), colorAlpha = vrgb[3] ? vrgb[3] : null;
        if (!colorAlpha) {
          return { r: parseInt(vrgb[0]), g: parseInt(vrgb[1]), b: parseInt(vrgb[2]) };
        } else {
          return { r: parseInt(vrgb[0]), g: parseInt(vrgb[1]), b: parseInt(vrgb[2]), a: parseFloat(colorAlpha) };
        }
      } else if (/^#/.test(colorString)) {
        var fromHex = hexToRGB(colorString); return { r: fromHex.r, g: fromHex.g, b: fromHex.b };
      } else if (/transparent|none|initial|inherit/.test(colorString)) {
        return { r: 0, g: 0, b: 0, a: 0 };
      } else if (!/^#|^rgb/.test(colorString) ) { // maybe we can check for web safe colors
        var siteHead = document[getElementsByTagName]('head')[0]; siteHead[style].color = colorString;
        var webColor = g.getComputedStyle(siteHead,null).color; webColor = /rgb/.test(webColor) ? webColor[replace](/[^\d,]/g, '')[split](',') : [0,0,0];
        siteHead[style].color = ''; return { r: parseInt(webColor[0]), g: parseInt(webColor[1]), b: parseInt(webColor[2]) };
      }
    },
    rgbToHex = function (r, g, b) { // transform rgb to hex or vice-versa | webkit browsers ignore HEX, always use RGB/RGBA
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    hexToRGB = function (hex) {
      var hexShorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      hex = hex[replace](hexShorthand, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    },
    getInlineStyle = function(el) { // get transform style for element from cssText for .to() method
      if (!el) return; // if the scroll applies to `window` it returns as it has no styling
      var css = el[style].cssText[replace](/\s/g,'')[split](';'), transformObject = {}; // the cssText | the resulting transform object

      // if we have any inline style in the cssText attribute, usually it has higher priority
      for ( var i=0, csl = css[length]; i<csl; i++ ){
        if ( /transform/i.test(css[i])) {
          var tps = css[i][split](':')[1][split](')'); //all transform properties
          for ( var k=0, tpl = tps[length]-1; k< tpl; k++){
            var tpv = tps[k][split]('('), tp = tpv[0], tv = tpv[1]; // each transform property, the sp is for transform property
            if ( transformFunctions[indexOf](tp) !== -1 ){
              transformObject[tp] = /translate3d/.test(tp) ? tv[split](',') : tv;
            }
          }
        }
      }
      return transformObject;
    },
    getCurrentStyle = function (elem,propertyName) { // get computed style property for element for .to() method
      var styleAttribute = elem[style], computedStyle = g.getComputedStyle(elem,null) || elem.currentStyle, 
        prefixedProp = property(propertyName), //the computed style | prefixed property
        styleValue = styleAttribute[propertyName] && !/auto|initial|none|unset/.test(styleAttribute[propertyName]) ? styleAttribute[propertyName] : computedStyle[prefixedProp];
      if ( propertyName !== 'transform' && (prefixedProp in computedStyle || prefixedProp in styleAttribute) ) {
        if ( styleValue ){
          if (prefixedProp === 'filter') { // handle IE8 opacity
            var filterValue = parseInt(styleValue[split]('=')[1][replace](')',''));
            return parseFloat(filterValue/100);
          } else {
            return styleValue;
          }
        } else {
          return defaultPropsValues[propertyName];
        }
      }
    },

    //more internals
    getAll = function () { return tweens; },
    removeAll = function () { tweens = []; },
    add = function (tw) { tweens.push(tw); },
    remove = function (tw) { var i = tweens[indexOf](tw); if (i !== -1) { tweens.splice(i, 1); }},
    stop = function () { if (tick) { _cancelAnimationFrame(tick); tick = null; } },

    canTouch = ('ontouchstart' in g || navigator && navigator.msMaxTouchPoints) || false, // support Touch?
    touchOrWheel = canTouch ? 'touchstart' : 'mousewheel', mouseEnter = 'mouseenter', //events to prevent on scroll
    _requestAnimationFrame = g.requestAnimationFrame || g.webkitRequestAnimationFrame || function (c) { return setTimeout(c, 16) },
    _cancelAnimationFrame = g.cancelAnimationFrame || g.webkitCancelRequestAnimationFrame || function (c) { return clearTimeout(c) },
    transformProperty = property('transform'),

    // true scroll container
    html = document[getElementsByTagName]('HTML')[0],
    // scrollContainer = navigator && /webkit/i.test(navigator.userAgent) || document.compatMode == 'BackCompat' ? body : html,
    scrollContainer = document.compatMode == 'BackCompat' ? body : html, // webkit browsers are now srolling the HTML

    // browser detection
    isIE = navigator && (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) !== null) ? parseFloat( RegExp.$1 ) : false,
    isIE8 = isIE === 8, // check IE8/IE


    // KUTE.js INTERPOLATORS
    interpolate = g.Interpolate = {},
    number = interpolate.number = function(a,b,v) { // number1, number2, progress
      a = +a; b -= a; return a + b * v;
    },
    unit = interpolate.unit = function(a,b,u,v) { // number1, number2, unit, progress
      a = +a; b -= a; return ( a + b * v ) + u;
    },
    color = interpolate.color = function(a,b,v,toHex){ // rgba1, rgba2, progress, convertToHex(true/false)
      var _c = {}, c, ep = ')', cm =',', rgb = 'rgb(', rgba = 'rgba(';
      for (c in b) { _c[c] = c !== 'a' ? (number(a[c],b[c],v)>>0 || 0) : (a[c] && b[c]) ? (number(a[c],b[c],v) * 100 >> 0 )/100 : null; }
      return toHex ? rgbToHex( _c.r, _c.g, _c.b ) : !_c.a ? rgb + _c.r + cm + _c.g + cm + _c.b + ep : rgba + _c.r + cm + _c.g + cm + _c.b + cm + _c.a + ep;
    },
    translate = interpolate.translate = function (a,b,u,v){
      var translation = {};
      for (var ax in b){
        translation[ax] = ( a[ax]===b[ax] ? b[ax] : ( (a[ax] + ( b[ax] - a[ax] ) * v ) * 1000 >> 0 ) / 1000 ) + u;
      }
      return translation.x||translation.y ? 'translate(' + translation.x + ',' + translation.y + ')' :
        'translate3d(' + translation.translateX + ',' + translation.translateY + ',' + translation.translateZ + ')';
    },
    rotate = interpolate.rotate = function (a,b,u,v){
      var rotation = {};
      for ( var rx in b ){
        rotation[rx] = rx === 'z' ? ('rotate('+ (((a[rx] + (b[rx] - a[rx]) * v) * 1000 >> 0 ) / 1000) + u + ')')
                                  : (rx + '(' + (((a[rx] + (b[rx] - a[rx]) * v) * 1000 >> 0 ) / 1000) + u + ')');
      }
      return rotation.z ? rotation.z : (rotation.rotateX||'') + (rotation.rotateY||'') + (rotation.rotateZ||'');
    },
    skew = interpolate.skew = function (a,b,u,v){
      var skewProp = {};
      for ( var sx in b ){
        skewProp[sx] = sx + '(' + (((a[sx] + (b[sx] - a[sx]) * v) * 1000 >> 0) / 1000) + u + ')';
      }
      return (skewProp.skewX||'') + (skewProp.skewY||'');
    },
    scale = interpolate.scale = function(a,b,v){
      return 'scale(' + (((a + (b - a) * v) * 1000 >> 0 ) / 1000) + ')';
    },

    // KUTE.js DOM update functions
    DOM = {},
    ticker = function(t) {
      var i = 0;
      while ( i < tweens[length] ) {
        if ( update.call(tweens[i],t) ) {
          i++;
        } else {
          tweens.splice(i, 1);
        }
      }
      tick = _requestAnimationFrame(ticker);
    },
    update = function(t) {
      t = t || time.now();
      if ( t < this._startTime && this[playing] ) { return true; }

      var elapsed = Math.min(( t - this._startTime ) / this[options][duration], 1), progress = this[options][easing](elapsed); // calculate progress

      for (var tweenProp in this[valuesEnd]){ // render the DOM update
        DOM[tweenProp](this[element],tweenProp,this[valuesStart][tweenProp],this[valuesEnd][tweenProp],progress,this[options]); 
      }

      if (this[options].update) { this[options].update.call(); } // fire the updateCallback

      if (elapsed === 1) {
        if (this[options][repeat] > 0) {
          if ( isFinite(this[options][repeat] ) ) { this[options][repeat]--; }

          if (this[options][yoyo]) { // handle yoyo
            this.reversed = !this.reversed;
            reverse.call(this);
          }

          this._startTime = (this[options][yoyo] && !this.reversed) ? t + this[options][repeatDelay] : t; //set the right time for delay
          return true;
        } else {

          if (this[options].complete) { this[options].complete.call(); }

          scrollOut.call(this); // unbind preventing scroll when scroll tween finished

          for (var i = 0, ctl = this[options][chain][length]; i < ctl; i++) { // start animating chained tweens
            this[options][chain][i].start();
          }

          //stop ticking when finished
          close.call(this);
        }
        return false;
      }
      return true;
    },

    // applies the transform origin and perspective
    perspective = function () {
      var el = this[element], ops = this[options];
      if ( ops.perspective !== undefined && transformProperty in this[valuesEnd] ) { // element perspective
        this[valuesStart][transformProperty]['perspective'] = this[valuesEnd][transformProperty]['perspective']; 
      }
      // element transform origin / we filter it out for svgTransform to fix the Firefox transformOrigin bug https://bugzilla.mozilla.org/show_bug.cgi?id=923193
      if ( ops.transformOrigin !== undefined && (!('svgTransform' in this[valuesEnd])) ) { el[style][property('transformOrigin')] = ops.transformOrigin; } // set transformOrigin for CSS3 transforms only
      if ( ops.perspectiveOrigin !== undefined ) { el[style][property('perspectiveOrigin')] = ops.perspectiveOrigin; } // element perspective origin
      if ( ops.parentPerspective !== undefined ) { el.parentNode[style][property('perspective')] = ops.parentPerspective + 'px'; } // parent perspective
      if ( ops.parentPerspectiveOrigin !== undefined ) { el.parentNode[style][property('perspectiveOrigin')] = ops.parentPerspectiveOrigin; } // parent perspective origin
    },

    // plugin connector objects
    prepareStart = {}, // check current property value when .to() method is used
    crossCheck = {}, // checks for differences between start and end value, try to make sure start unit and end unit are same as well as consistent, stack transforms, process SVG paths

    // parse properties object
    // string parsing and property specific value processing
    parseProperty = { // we already start working on core supported properties
      boxModel : function(tweenProp,inputValue){
        if (!(tweenProp in DOM)){
          DOM[tweenProp] = function(elem,tweenProp,a,b,v){
            elem[style][tweenProp] = ( v > 0.99 || v < 0.01 ? ((number(a,b,v)*10)>>0)/10 : (number(a,b,v) ) >> 0 ) + 'px';
          }
        }
        var boxValue = trueDimension(inputValue), offsetProp = tweenProp === 'height' ? offsetHeight : offsetWidth;
        return boxValue.u === '%' ? boxValue.v * this[element][offsetProp] / 100 : boxValue.v;
      },
      transform : function(tweenProp,inputValue) {
        if (!(transformProperty in DOM)) {
          DOM[transformProperty] = function(elem,tweenProp,a,b,v,o){
            elem[style][tweenProp] = (a.perspective||'')
              + ('translate' in a ? translate(a.translate,b.translate,'px',v):'')
              + ('rotate' in a ? rotate(a.rotate,b.rotate,'deg',v):'')
              + ('skew' in a ? skew(a.skew,b.skew,'deg',v):'')
              + ('scale' in a ? scale(a.scale,b.scale,v):'');
          }
        }

        // process each transform property
        if (/translate/.test(tweenProp)) {
          if (tweenProp === 'translate3d') {
            var t3d = inputValue[split](','), t3d0 = trueDimension(t3d[0]), t3d1 = trueDimension(t3d[1], t3d2 = trueDimension(t3d[2]));
            return {
              translateX : t3d0.u === '%' ? (t3d0.v * this[element][offsetWidth] / 100) : t3d0.v,
              translateY : t3d1.u === '%' ? (t3d1.v * this[element][offsetHeight] / 100) : t3d1.v,
              translateZ : t3d2.u === '%' ? (t3d2.v * (this[element][offsetHeight] + this[element][offsetWidth]) / 200) : t3d2.v // to be changed with something like element and/or parent perspective
            };
          } else if (/^translate(?:[XYZ])$/.test(tweenProp)) {
            var t1d = trueDimension(inputValue), percentOffset = /X/.test(tweenProp) ? this[element][offsetWidth] / 100 : /Y/.test(tweenProp) ? this[element][offsetHeight] / 100 : (this[element][offsetWidth]+this[element][offsetHeight]) / 200;

            return t1d.u === '%' ? (t1d.v * percentOffset) : t1d.v;
          } else if (tweenProp === 'translate') {
            var tv = typeof inputValue === 'string' ? inputValue[split](',') : inputValue, t2d = {}, t2dv,
              t2d0 = trueDimension(tv[0]), t2d1 = tv[length] ? trueDimension(tv[1]) : {v: 0, u: 'px'};
            if (tv instanceof Array) {
              t2d.x = t2d0.u === '%' ? (t2d0.v * this[element][offsetWidth] / 100) : t2d0.v,
              t2d.y = t2d1.u === '%' ? (t2d1.v * this[element][offsetHeight] / 100) : t2d1.v
            } else {
              t2dv = trueDimension(tv);
              t2d.x = t2dv.u === '%' ? (t2dv.v * this[element][offsetWidth] / 100) : t2dv.v,
              t2d.y = 0
            }

            return t2d;
          }
        } else if (/rotate|skew/.test(tweenProp)) {
          if (/^rotate(?:[XYZ])$|skew(?:[XY])$/.test(tweenProp)) {
            var r3d = trueDimension(inputValue,true);
            return r3d.u === 'rad' ? radToDeg(r3d.v) : r3d.v;
          } else if (tweenProp === 'rotate') {
            var r2d = {}, r2dv = trueDimension(inputValue,true);
            r2d.z = r2dv.u === 'rad' ? radToDeg(r2dv.v) : r2dv.v;
            return r2d;
          }
        } else if (tweenProp === 'scale') {
          return parseFloat(inputValue); // this must be parseFloat(v)
        }
      },
      unitless : function(tweenProp,inputValue){  // scroll | opacity
        if (/scroll/.test(tweenProp) && !(tweenProp in DOM) ){
          DOM[tweenProp] = function(elem,tweenProp,a,b,v) {
            elem.scrollTop = (number(a,b,v))>>0;
          };
        } else if (tweenProp === 'opacity') {
          if (!(tweenProp in DOM)) {
            if (isIE8) {
              DOM[tweenProp] = function(elem,tweenProp,a,b,v) {
                var st = "alpha(opacity=", ep = ')';
                elem[style].filter = st + ((number(a,b,v) * 100)>>0) + ep;
              };
            } else {
              DOM[tweenProp] = function(elem,tweenProp,a,b,v) {
                elem[style].opacity = ((number(a,b,v) * 100)>>0)/100;
              };
            }
          }
        }
        return parseFloat(inputValue);
      },
      colors : function(tweenProp,inputValue){ // colors
        if (!(tweenProp in DOM)) {
          DOM[tweenProp] = function(elem,tweenProp,a,b,v,o) {
            elem[style][tweenProp] = color(a,b,v,o[keepHex]);
          };
        }
        return trueColor(inputValue);
      }
    },

    // process properties for endValues and startValues or one of them
    preparePropertiesObject = function(obj, fn) { // this, props object, type: start/end
      var propertiesObject = fn === 'start' ? this[valuesStart] : this[valuesEnd],
        skewObject = {}, rotateObject = {}, translateObject = {}, transformObject = {};

      for (var x in obj) {
        if (transformFunctions[indexOf](x) !== -1) { // transform object gets built here
          var prepAxis = ['X', 'Y', 'Z']; //coordinates //   translate[x] = pp(x, obj[x]);
          if ( /^translate(?:[XYZ]|3d)$/.test(x) ) { //process translate3d

            for (var fnIndex = 0; fnIndex < 3; fnIndex++) {
              var translateAxis = prepAxis[fnIndex];
              if ( /3d/.test(x) ) {
                translateObject['translate' + translateAxis] = parseProperty.transform.call(this,'translate' + translateAxis, obj[x][fnIndex]);
              } else {
                translateObject['translate' + translateAxis] = ('translate' + translateAxis in obj) ? parseProperty.transform.call(this,'translate' + translateAxis, obj['translate' + translateAxis]) : 0;
              }
            }
            transformObject['translate'] = translateObject;
          } else if ( /^rotate(?:[XYZ])$|^skew(?:[XY])$/.test(x) ) { //process rotation/skew
            var objectName = /rotate/.test(x) ? 'rotate' : 'skew',
              rotationOrSkew = objectName === 'rotate' ? rotateObject : skewObject;
            for (var rIndex = 0; rIndex < 3; rIndex++) {
              var oneAxis = prepAxis[rIndex];
              if ( obj[objectName+oneAxis] !== undefined && x !== 'skewZ' ) {
                rotationOrSkew[objectName+oneAxis] = parseProperty.transform.call(this,objectName+oneAxis, obj[objectName+oneAxis]);
              }
            }
            transformObject[objectName] = rotationOrSkew;
          } else if ( /(rotate|translate|scale)$/.test(x) ) { //process 2d translation / rotation
            transformObject[x] = parseProperty.transform.call(this, x, obj[x]);
          }
          propertiesObject[transformProperty] = transformObject;
        } else {
          if ( boxModelProps[indexOf](x) !== -1 ) {
            propertiesObject[x] = parseProperty.boxModel.call(this,x,obj[x]);
          } else if (opacityProp[indexOf](x) !== -1 || x === 'scroll') {
            propertiesObject[x] = parseProperty.unitless.call(this,x,obj[x]);
          } else if (colorProps[indexOf](x) !== -1) {
            propertiesObject[x] = parseProperty.colors.call(this,x,obj[x]);
          } else if (x in parseProperty) {  // or any other property from css/ attr / svg / third party plugins
            propertiesObject[x] = parseProperty[x].call(this,x,obj[x]);
          }
        }
      }
    },
    reverse = function () {
      if (this[options][yoyo]) {
        for (var reverseProp in this[valuesEnd]) {
          var tmp = this[valuesRepeat][reverseProp];
          this[valuesRepeat][reverseProp] = this[valuesEnd][reverseProp];
          this[valuesEnd][reverseProp] = tmp;
          this[valuesStart][reverseProp] = this[valuesRepeat][reverseProp];
        }
      }
    },
    close = function () { //  when animation is finished reset repeat, yoyo&reversed tweens
      if (this[repeat] > 0) { this[options][repeat] = this[repeat]; }
      if (this[options][yoyo] && this.reversed===true) { reverse.call(this); this.reversed = false; }
      this[playing] = false;

      !tweens[length] && stop();  // when all animations are finished, stop ticking after ~3 frames
    },
    preventScroll = function (eventObj) { // prevent mousewheel or touch events while tweening scroll
      var data = body.getAttribute(dataTweening);
      if (data && data === 'scroll') { eventObj.preventDefault(); }
    },
    scrollOut = function(){ //prevent scroll when tweening scroll
      if ( 'scroll' in this[valuesEnd] && body.getAttribute(dataTweening)) {
        body.removeAttribute(dataTweening);
      }
    },
    scrollIn = function(){
      if ( 'scroll' in this[valuesEnd] && !body.getAttribute(dataTweening)) {
        body.setAttribute(dataTweening, 'scroll');
      }
    },
    processEasing = function (fn) {
      if ( typeof fn === 'function') {
        return fn;
      } else if ( typeof fn === 'string' ) {
        return easingFn[fn]; // regular Robert Penner Easing Functions
      }
    },
    getStartValues = function () { // stack transform props for .to() chains
      var startValues = {}, currentStyle = getInlineStyle(this[element]),
        degreeProps = ['rotate','skew'], startAxis = ['X','Y','Z'];

      for (var tweenProperty in this[valuesStart]){
        if ( transformFunctions[indexOf](tweenProperty) !== -1 ) {
          var r2d = (/(rotate|translate|scale)$/.test(tweenProperty));
          if ( /translate/.test(tweenProperty) && tweenProperty !== 'translate' ) {
            startValues['translate3d'] = currentStyle['translate3d'] || defaultPropsValues[tweenProperty];
          } else if ( r2d ) { // 2d transforms
            startValues[tweenProperty] = currentStyle[tweenProperty] || defaultPropsValues[tweenProperty];
          } else if ( !r2d && /rotate|skew/.test(tweenProperty) ) { // all angles
            for (var degIndex=0; degIndex<2; degIndex++) {
              for (var axisIndex = 0; axisIndex<3; axisIndex++) {
                var s = degreeProps[degIndex]+startAxis[axisIndex];
                if (transformFunctions[indexOf](s) !== -1 && (s in this[valuesStart]) ) { startValues[s] = currentStyle[s] || defaultPropsValues[s]; }
              }
            }
          }
        } else {
          if ( tweenProperty !== 'scroll' ) {
            if (tweenProperty === 'opacity' && isIE8 ) { // handle IE8 opacity
              var currentOpacity = getCurrentStyle(this[element],'filter');
              startValues['opacity'] = typeof currentOpacity === 'number' ? currentOpacity : defaultPropsValues['opacity'];
            } else {
              if ( coreProps[indexOf](tweenProperty) !== -1 ) {
                startValues[tweenProperty] = getCurrentStyle(this[element],tweenProperty) || d[tweenProperty];
              } else { // plugins register here
                startValues[tweenProperty] = tweenProperty in prepareStart ? prepareStart[tweenProperty].call(this,tweenProperty,this[valuesStart][tweenProperty]) : 0;
              }
            }
          } else {
            startValues[tweenProperty] = this[element] === scrollContainer ? (g.pageYOffset || scrollContainer.scrollTop) : this[element].scrollTop;
          }
        }
      }
      for ( var currentProperty in currentStyle ){ // also add to startValues values from previous tweens
        if ( transformFunctions[indexOf](currentProperty) !== -1 && (!( currentProperty in this[valuesStart] )) ) {
          startValues[currentProperty] = currentStyle[currentProperty] || defaultPropsValues[currentProperty];
        }
      }

      this[valuesStart] = {};
      preparePropertiesObject.call(this,startValues,'start');

      if ( transformProperty in this[valuesEnd] ) { // let's stack transform
        for ( var sp in this[valuesStart][transformProperty]) { // sp is the object corresponding to the transform function objects translate / rotate / skew / scale
          if ( sp !== 'perspective') {
            if ( typeof this[valuesStart][transformProperty][sp] === 'object' ) {
              for ( var spp in this[valuesStart][transformProperty][sp] ) { // 3rd level
                if ( typeof this[valuesEnd][transformProperty][sp] === 'undefined' ) { this[valuesEnd][transformProperty][sp] = {}; }
                if ( typeof this[valuesStart][transformProperty][sp][spp] === 'number' && typeof this[valuesEnd][transformProperty][sp][spp] === 'undefined' ) {
                  this[valuesEnd][transformProperty][sp][spp] = this[valuesStart][transformProperty][sp][spp];
                }
              }
            } else if ( typeof this[valuesStart][transformProperty][sp] === 'number' ) {
              if ( typeof this[valuesEnd][transformProperty][sp] === 'undefined' ) { // scale
                this[valuesEnd][transformProperty][sp] = this[valuesStart][transformProperty][sp];
              }
            }
          }
        }
      }
    };

  // core easing functions
  var easingFn = g.Easing = {};
  easingFn.linear = function (t) { return t; };
  easingFn.easingSinusoidalIn = function(t) { return -Math.cos(t * Math.PI / 2) + 1; };
  easingFn.easingSinusoidalOut = function(t) { return Math.sin(t * Math.PI / 2); };
  easingFn.easingSinusoidalInOut = function(t) { return -0.5 * (Math.cos(Math.PI * t) - 1); };
  easingFn.easingQuadraticIn = function (t) { return t*t; };
  easingFn.easingQuadraticOut = function (t) { return t*(2-t); };
  easingFn.easingQuadraticInOut = function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t; };
  easingFn.easingCubicIn = function (t) { return t*t*t; };
  easingFn.easingCubicOut = function (t) { return (--t)*t*t+1; };
  easingFn.easingCubicInOut = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; };
  easingFn.easingQuarticIn = function (t) { return t*t*t*t; };
  easingFn.easingQuarticOut = function (t) { return 1-(--t)*t*t*t; };
  easingFn.easingQuarticInOut = function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t; };
  easingFn.easingQuinticIn = function (t) { return t*t*t*t*t; };
  easingFn.easingQuinticOut = function (t) { return 1+(--t)*t*t*t*t; };
  easingFn.easingQuinticInOut = function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t; };
  easingFn.easingCircularIn = function(t) { return -(Math.sqrt(1 - (t * t)) - 1); };
  easingFn.easingCircularOut = function(t) { return Math.sqrt(1 - (t = t - 1) * t); };
  easingFn.easingCircularInOut = function(t) {  return ((t*=2) < 1) ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1); };
  easingFn.easingExponentialIn = function(t) { return Math.pow(2, 10 * (t - 1)) - 0.001; };
  easingFn.easingExponentialOut = function(t) { return 1 - Math.pow(2, -10 * t); };
  easingFn.easingExponentialInOut = function(t) { return (t *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))); };
  easingFn.easingBackIn = function(t) { var s = 1.70158; return t * t * ((s + 1) * t - s); };
  easingFn.easingBackOut = function(t) { var s = 1.70158; return --t * t * ((s + 1) * t + s) + 1; };
  easingFn.easingBackInOut = function(t) { var s = 1.70158 * 1.525;  if ((t *= 2) < 1) return 0.5 * (t * t * ((s + 1) * t - s));  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2); };
  easingFn.easingElasticIn = function(t) {
    var s, _kea = 0.1, _kep = 0.4;
    if ( t === 0 ) return 0; if ( t === 1 ) return 1;
    if ( !_kea || _kea < 1 ) { _kea = 1; s = _kep / 4; } else s = _kep * Math.asin( 1 / _kea ) / Math.PI * 2;
    return - ( _kea * Math.pow( 2, 10 * ( t -= 1 ) ) * Math.sin( ( t - s ) * Math.PI * 2 / _kep ) );
  };
  easingFn.easingElasticOut = function(t) {
    var s, _kea = 0.1, _kep = 0.4;
    if ( t === 0 ) return 0; if ( t === 1 ) return 1;
    if ( !_kea || _kea < 1 ) { _kea = 1; s = _kep / 4; } else s = _kep * Math.asin( 1 / _kea ) / Math.PI * 2 ;
    return ( _kea * Math.pow( 2, - 10 * t) * Math.sin( ( t - s ) * Math.PI * 2  / _kep ) + 1 );
  };
  easingFn.easingElasticInOut = function(t) {
    var s, _kea = 0.1, _kep = 0.4;
    if ( t === 0 ) return 0; if ( t === 1 ) return 1;
    if ( !_kea || _kea < 1 ) { _kea = 1; s = _kep / 4; } else s = _kep * Math.asin( 1 / _kea ) / Math.PI * 2 ;
    if ( ( t *= 2 ) < 1 ) return - 0.5 * ( _kea * Math.pow( 2, 10 * ( t -= 1 ) ) * Math.sin( ( t - s ) * Math.PI * 2  / _kep ) );
    return _kea * Math.pow( 2, -10 * ( t -= 1 ) ) * Math.sin( ( t - s ) * Math.PI * 2  / _kep ) * 0.5 + 1;
  };
  easingFn.easingBounceIn = function(t) { return 1 - easingFn.easingBounceOut( 1 - t ); };
  easingFn.easingBounceOut = function(t) {
    if ( t < ( 1 / 2.75 ) ) { return 7.5625 * t * t; }
    else if ( t < ( 2 / 2.75 ) ) { return 7.5625 * ( t -= ( 1.5 / 2.75 ) ) * t + 0.75; }
    else if ( t < ( 2.5 / 2.75 ) ) { return 7.5625 * ( t -= ( 2.25 / 2.75 ) ) * t + 0.9375; }
    else {return 7.5625 * ( t -= ( 2.625 / 2.75 ) ) * t + 0.984375; }
  };
  easingFn.easingBounceInOut = function(t) { if ( t < 0.5 ) return easingFn.easingBounceIn( t * 2 ) * 0.5; return easingFn.easingBounceOut( t * 2 - 1 ) * 0.5 + 0.5;};

  // single Tween object construct
  var Tween = function (targetElement, startObject, endObject, optionsObj) {
      this[element] = 'scroll' in endObject && (targetElement === undefined || targetElement === null) ? scrollContainer : targetElement; // element animation is applied to

      this[playing] = false;
      this.reversed = false;
      this.paused = false;

      this._startTime = null;
      this._pauseTime = null;

      this._startFired = false;
      this[options] = {}; for (var o in optionsObj) { this[options][o] = optionsObj[o]; }
      this[options].rpr = optionsObj.rpr || false; // internal option to process inline/computed style at start instead of init true/false

      this[valuesRepeat] = {}; // internal valuesRepeat
      this[valuesEnd] = {}; // valuesEnd
      this[valuesStart] = {}; // valuesStart

      preparePropertiesObject.call(this,endObject,'end'); // valuesEnd
      if ( this[options].rpr ) { this[valuesStart] = startObject; } else { preparePropertiesObject.call(this,startObject,'start'); } // valuesStart

      if ( this[options].perspective !== undefined && transformProperty in this[valuesEnd] ) { // element transform perspective
        var perspectiveString = 'perspective('+parseInt(this[options].perspective)+'px)';
        this[valuesEnd][transformProperty].perspective = perspectiveString;
      }

      for ( var repeatProp in this[valuesEnd] ) {
        if (repeatProp in crossCheck && !this[options].rpr) crossCheck[repeatProp].call(this); // this is where we do the valuesStart and valuesEnd check for fromTo() method
      }

      this[options][chain] = []; // chained Tweens
      this[options][easing] = processEasing(optionsObj[easing]) || easingFn[defaultOptions[easing]] || easingFn['linear']; // you can only set a core easing function as default
      this[options][repeat] = optionsObj[repeat] || defaultOptions[repeat];
      this[options][repeatDelay] = optionsObj[repeatDelay] || defaultOptions[repeatDelay];
      this[options][yoyo] = optionsObj[yoyo] || defaultOptions[yoyo];
      this[options][duration] = optionsObj[duration] || defaultOptions[duration]; // duration option | default
      this[options][delay] = optionsObj[delay] || defaultOptions[delay]; // delay option | default

      this[repeat] = this[options][repeat]; // we cache the number of repeats to be able to put it back after all cycles finish
    },
    // tween control and chain
    TweenProto = Tween.prototype = {
      // queue tween object to main frame update
      start : function (t) { // move functions that use the ticker outside the prototype to be in the same scope with it
        scrollIn.call(this);

        if ( this[options].rpr ) { getStartValues.apply(this); } // on start we reprocess the valuesStart for TO() method
        perspective.apply(this); // apply the perspective and transform origin

        for ( var endProp in this[valuesEnd] ) {
          if (endProp in crossCheck && this[options].rpr) crossCheck[endProp].call(this); // this is where we do the valuesStart and valuesEnd check for to() method
          this[valuesRepeat][endProp] = this[valuesStart][endProp];
        }

        // now it's a good time to start
        tweens.push(this);
        this[playing] = true;
        this.paused = false;
        this._startFired = false;
        this._startTime = t || time.now();
        this._startTime += this[options][delay];

        if (!this._startFired) {
          if (this[options].start) { this[options].start.call(); }
          this._startFired = true;
        }
        !tick && ticker();
        return this;
      },
      play : function () {
        if (this.paused && this[playing]) {
          this.paused = false;
          if (this[options].resume) { this[options].resume.call(); }
          this._startTime += time.now()  - this._pauseTime;
          add(this);
          !tick && ticker();  // restart ticking if stopped
        }
        return this;
      },
      resume : function () { return this.play(); },
      pause : function() {
        if (!this.paused && this[playing]) {
          remove(this);
          this.paused = true;
          this._pauseTime = time.now();
          if (this[options].pause) { this[options].pause.call(); }
        }
        return this;
      },
      stop : function () {
        if (!this.paused && this[playing]) {
          remove(this);
          this[playing] = false;
          this.paused = false;
          scrollOut.call(this);

          if (this[options].stop) { this[options].stop.call(); }
          this.stopChainedTweens();
          close.call(this);
        }
        return this;
      },
      chain : function() { this[options][chain] = arguments; return this; },
      stopChainedTweens : function () {
        for (var i = 0, ctl = this[options][chain][length]; i < ctl; i++) {
          this[options][chain][i].stop();
        }
      }
    },

    // the multi elements Tween constructs
    TweensTO = function (els, vE, o) { // .to
      this.tweens = []; var optionsObj = [];
      for ( var i = 0, tl = els[length]; i < tl; i++ ) {
        optionsObj[i] = o || {}; o[delay] = o[delay] || defaultOptions[delay];
        optionsObj[i][delay] = i>0 ? o[delay] + (o[offset]||defaultOptions[offset]) : o[delay];
        this.tweens.push( to(els[i], vE, optionsObj[i]) );
      }
    },
    TweensFT = function (els, vS, vE, o) { // .fromTo
      this.tweens = []; var optionsObj = [];
      for ( var i = 0, l = els[length]; i < l; i++ ) {
        optionsObj[i] = o || {}; o[delay] = o[delay] || defaultOptions[delay];
        optionsObj[i][delay] = i>0 ? o[delay] + (o[offset]||defaultOptions[offset]) : o[delay];
        this.tweens.push( fromTo(els[i], vS, vE, optionsObj[i]) );
      }
    },
    ws = TweensTO.prototype = TweensFT.prototype = {
      start : function(t){
        t = t || time.now();
        for ( var i = 0, tl = this.tweens[length]; i < tl; i++ ) {
          this.tweens[i].start(t);
        }
        return this;
      },
      stop : function(){ for ( var i = 0, tl = this.tweens[length]; i < tl; i++ ) { this.tweens[i].stop(); } return this; },
      pause : function(){ for ( var i = 0, tl = this.tweens[length]; i < tl; i++ ) { this.tweens[i].pause(); } return this; },
      chain : function(){ this.tweens[this.tweens[length]-1][options][chain] = arguments; return this; },
      play : function(){ for ( var i = 0, tl = this.tweens[length]; i < tl; i++ ) { this.tweens[i].play(); } return this; },
      resume : function() {return this.play()}
    },

    // main methods
    to = function (element, endObject, optionsObj) {
      optionsObj = optionsObj || {}; optionsObj.rpr = true;
      return new Tween(selector(element), endObject, endObject, optionsObj);
    },
    fromTo = function (element, startObject, endObject, optionsObj) {
      optionsObj = optionsObj || {};
      return new Tween(selector(element), startObject, endObject, optionsObj);
    },

    // multiple elements tweening
    allTo = function (elements, endObject, optionsObj) {
      return new TweensTO(selector(elements,true), endObject, optionsObj);
    },
    allFromTo = function (elements, startObject, endObject, optionsObj) {
      return new TweensFT(selector(elements,true), startObject, endObject, optionsObj);
    };

  document[addEventListener](touchOrWheel, preventScroll, false);
  document[addEventListener](mouseEnter, preventScroll, false);

  return { // export core methods to public for plugins
    property: property, getPrefix: getPrefix, selector: selector, processEasing : processEasing, // utils
    defaultOptions : defaultOptions, // default tween options since 1.6.1
    to: to, fromTo: fromTo, allTo: allTo, allFromTo: allFromTo, // main methods
    ticker : ticker, tick : tick, tweens : tweens, update: update, dom : DOM, // update
    parseProperty: parseProperty, prepareStart: prepareStart, crossCheck : crossCheck, Tween : Tween, // property parsing & preparation | Tween | crossCheck
    truD: trueDimension, truC: trueColor, rth: rgbToHex, htr: hexToRGB, getCurrentStyle: getCurrentStyle, // property parsing
  };
}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var $export = __webpack_require__(21);
var redefine = __webpack_require__(6);
var hide = __webpack_require__(4);
var has = __webpack_require__(9);
var Iterators = __webpack_require__(10);
var $iterCreate = __webpack_require__(48);
var setToStringTag = __webpack_require__(25);
var getPrototypeOf = __webpack_require__(54);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(11);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(20);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(13);
var invoke = __webpack_require__(66);
var html = __webpack_require__(35);
var cel = __webpack_require__(18);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(11)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(14);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, setImmediate) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_promise__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_fn_object_assign__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_fn_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_fn_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_howler_dist_howler_core_min__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_howler_dist_howler_core_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_howler_dist_howler_core_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_kute_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_kute_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_kute_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_kute_js_kute_svg__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_kute_js_kute_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_kute_js_kute_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_kute_js_kute_attr__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_kute_js_kute_attr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_kute_js_kute_attr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__playerFunctions__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scss_style_scss__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__scss_style_scss__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
  "use strict";

  if (!Function.prototype.$asyncbind) {
    Object.defineProperty(Function.prototype, "$asyncbind", {
      value: $asyncbind,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }

  if (!$asyncbind.trampoline) {
    $asyncbind.trampoline = function trampoline(t, x, s, e, u) {
      return function b(q) {
        while (q) {
          if (q.then) {
            q = q.then(b, e);
            return u ? undefined : q;
          }

          try {
            if (q.pop) {
              if (q.length) return q.pop() ? x.call(t) : q;
              q = s;
            } else q = q.call(t);
          } catch (r) {
            return e(r);
          }
        }
      };
    };
  }

  if (!$asyncbind.LazyThenable) {
    $asyncbind.LazyThenable = function () {
      function isThenable(obj) {
        return obj && obj instanceof Object && typeof obj.then === "function";
      }

      function resolution(p, r, how) {
        try {
          var x = how ? how(r) : r;
          if (p === x) return p.reject(new TypeError("Promise resolution loop"));

          if (isThenable(x)) {
            x.then(function (y) {
              resolution(p, y);
            }, function (e) {
              p.reject(e);
            });
          } else {
            p.resolve(x);
          }
        } catch (ex) {
          p.reject(ex);
        }
      }

      function _unchained(v) {}

      function thenChain(res, rej) {
        this.resolve = res;
        this.reject = rej;
      }

      function Chained() {}

      ;
      Chained.prototype = {
        resolve: _unchained,
        reject: _unchained,
        then: thenChain
      };

      function then(res, rej) {
        var chain = new Chained();

        try {
          this._resolver(function (value) {
            return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
          }, function (ex) {
            resolution(chain, ex, rej);
          });
        } catch (ex) {
          resolution(chain, ex, rej);
        }

        return chain;
      }

      function Thenable(resolver) {
        this._resolver = resolver;
        this.then = then;
      }

      ;

      Thenable.resolve = function (v) {
        return Thenable.isThenable(v) ? v : {
          then: function then(resolve) {
            return resolve(v);
          }
        };
      };

      Thenable.isThenable = isThenable;
      return Thenable;
    }();

    $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
      tick = tick || (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
        setTimeout(f, 0);
      };

      var soon = function () {
        var fq = [],
            fqStart = 0,
            bufferSize = 1024;

        function callQueue() {
          while (fq.length - fqStart) {
            try {
              fq[fqStart]();
            } catch (ex) {}

            fq[fqStart++] = undefined;

            if (fqStart === bufferSize) {
              fq.splice(0, bufferSize);
              fqStart = 0;
            }
          }
        }

        return function (fn) {
          fq.push(fn);
          if (fq.length - fqStart === 1) tick(callQueue);
        };
      }();

      function Zousan(func) {
        if (func) {
          var me = this;
          func(function (arg) {
            me.resolve(arg);
          }, function (arg) {
            me.reject(arg);
          });
        }
      }

      Zousan.prototype = {
        resolve: function resolve(value) {
          if (this.state !== undefined) return;
          if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
          var me = this;

          if (value && (typeof value === "function" || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object")) {
            try {
              var first = 0;
              var then = value.then;

              if (typeof then === "function") {
                then.call(value, function (ra) {
                  if (!first++) {
                    me.resolve(ra);
                  }
                }, function (rr) {
                  if (!first++) {
                    me.reject(rr);
                  }
                });
                return;
              }
            } catch (e) {
              if (!first) this.reject(e);
              return;
            }
          }

          this.state = STATE_FULFILLED;
          this.v = value;
          if (me.c) soon(function () {
            for (var n = 0, l = me.c.length; n < l; n++) {
              STATE_FULFILLED(me.c[n], value);
            }
          });
        },
        reject: function reject(reason) {
          if (this.state !== undefined) return;
          this.state = STATE_REJECTED;
          this.v = reason;
          var clients = this.c;
          if (clients) soon(function () {
            for (var n = 0, l = clients.length; n < l; n++) {
              STATE_REJECTED(clients[n], reason);
            }
          });
        },
        then: function then(onF, onR) {
          var p = new Zousan();
          var client = {
            y: onF,
            n: onR,
            p: p
          };

          if (this.state === undefined) {
            if (this.c) this.c.push(client);else this.c = [client];
          } else {
            var s = this.state,
                a = this.v;
            soon(function () {
              s(client, a);
            });
          }

          return p;
        }
      };

      function STATE_FULFILLED(c, arg) {
        if (typeof c.y === "function") {
          try {
            var yret = c.y.call(undefined, arg);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.resolve(arg);
      }

      function STATE_REJECTED(c, reason) {
        if (typeof c.n === "function") {
          try {
            var yret = c.n.call(undefined, reason);
            c.p.resolve(yret);
          } catch (err) {
            c.p.reject(err);
          }
        } else c.p.reject(reason);
      }

      Zousan.resolve = function (val) {
        if (val && val instanceof Zousan) return val;
        var z = new Zousan();
        z.resolve(val);
        return z;
      };

      Zousan.reject = function (err) {
        if (err && err instanceof Zousan) return err;
        var z = new Zousan();
        z.reject(err);
        return z;
      };

      Zousan.version = "2.3.3-nodent";
      return Zousan;
    })();
  }

  function boundThen() {
    return resolver.apply(self, arguments);
  }

  var resolver = this;

  switch (catcher) {
    case true:
      return new $asyncbind.Thenable(boundThen);

    case 0:
      return new $asyncbind.LazyThenable(boundThen);

    case undefined:
      boundThen.then = boundThen;
      return boundThen;

    default:
      return function () {
        try {
          return resolver.apply(self, arguments);
        } catch (ex) {
          return catcher(ex);
        }
      };
  }
};










var strictMode = false,
    resetTriggered = false,
    playerEscapeAdded = false;

var playerFunctions = Object(__WEBPACK_IMPORTED_MODULE_6__playerFunctions__["a" /* default */])();

var gameView = function () {
  var state = {
    simonEl: document.querySelector(".simon"),
    buttonEls: {},
    stepsEl: '',
    restartEl: '',
    colorButtonComponents: {}
  };

  function ColorButton(node) {
    var el = node,
        name = el.getAttribute('data-name'),
        sound = new __WEBPACK_IMPORTED_MODULE_2_howler_dist_howler_core_min__["Howl"]({ src: __webpack_require__(84)("./simonSound" + name + '.mp3') }),
        classNames = el.className.split(' '),
        colorID = classNames[classNames.length - 1];

    function glow() {
      return new Promise(function ($return, $error) {
        function lighten() {
          el.classList.add(colorID + '--played');
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve();
            }, 300);
          });
        }
        function removeLighten() {
          el.classList.remove(colorID + '--played');
        }

        return lighten().then(function ($await_5) {
          removeLighten();
          return $return();
        }.$asyncbind(this, $error), $error);
      }.$asyncbind(this));
    }

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

var CPU = function () {
  var state = {
    pattern: [],
    cadence: 900
  };
  return Object.assign({}, state, playerFunctions.canGenRandomStep(state), playerFunctions.canPlayBackPattern(state)(gameView.colorButtonComponents), playerFunctions.canClearPattern(state));
}();

var userInterface = function () {
  var state = {
    pattern: [],
    cadence: 1
  };
  return Object.assign({}, state, playerFunctions.canAddStepFromUser(state), playerFunctions.canPlayBackPattern(state)(gameView.colorButtonComponents), playerFunctions.canClearPattern(state));
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
    __WEBPACK_IMPORTED_MODULE_3_kute_js___default.a.to(simon[keys[i]].el, { path: toObj[keys[i]].path(), attr: { fill: toObj[keys[i]].fill(), strokeWidth: toObj[keys[i]].strokeWidth() } }, { morphPrecision: 6, morphIndex: 400, duration: 1000 }).start();
  }
}

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

    function isSuccessfulTurn(e) {
      return new Promise(function ($return, $error) {
        var lastTurnIndex, isPlayerInputMatched;

        if (e.target.dataset.name !== undefined) {
          return receiveInput(e).then(function ($await_6) {
            lastTurnIndex = $await_6;
            return checkInput(lastTurnIndex).then(function ($await_7) {
              isPlayerInputMatched = $await_7;
              if (!isPlayerInputMatched) {
                finalResolve(false);
                gameView.boardEl.removeEventListener('click', isSuccessfulTurn);
                gameView.restartEl.removeEventListener('click', resetDuringPlayerTurn);
              }
              if (lastTurnIndex === patternToMatch.length - 1) {
                finalResolve(true);
                gameView.boardEl.removeEventListener('click', isSuccessfulTurn);
                gameView.restartEl.removeEventListener('click', resetDuringPlayerTurn);
              }
              return $If_1.call(this);
            }.$asyncbind(this, $error), $error);
          }.$asyncbind(this, $error), $error);
        }

        function $If_1() {
          return $return();
        }

        return $If_1.call(this);
      }.$asyncbind(this));
    }

    function resetDuringPlayerTurn() {
      finalResolve();
      gameView.boardEl.removeEventListener('click', isSuccessfulTurn);
      gameView.restartEl.removeEventListener('click', resetDuringPlayerTurn);
    }

    gameView.restartEl.addEventListener('click', resetDuringPlayerTurn);
    gameView.boardEl.addEventListener('click', isSuccessfulTurn);
  });
}

function gameLoop() {
  return new Promise(function ($return, $error) {
    var cpuPattern, playerTurnVerdict;

    if (resetTriggered) {
      return $return();
    }
    return cpuTurn().then(function ($await_8) {
      cpuPattern = $await_8;
      if (resetTriggered) {
        return $return();
      }
      gameView.stepsEl.textContent = cpuPattern.length;
      simonMorphTo(you);
      return playerTurn(cpuPattern).then(function ($await_9) {
        playerTurnVerdict = $await_9;
        if (resetTriggered) {
          return $return();
        }
        if (!playerTurnVerdict) {
          if (strictMode) {
            simonMorphTo(reset);
            return $return();
          } else {
            return playerRetry().then(function ($await_10) {
              if (strictMode) {
                simonMorphTo(reset);
                return $return();
              }
              return $If_4.call(this);
            }.$asyncbind(this, $error), $error);
          }

          function $If_4() {
            return $If_2.call(this);
          }

          return $If_4.call(this);
        }

        function $If_2() {
          if (cpuPattern.length === 20) {
            simonMorphTo(win);
            return $return();
          } else {
            simonMorphTo(simonAttrCopy);
            return delayStart().then(function ($await_11) {
              gameLoop();
              return $If_3.call(this);
            }.$asyncbind(this, $error), $error);
          }

          function $If_3() {
            return $return();
          }

          return $If_3.call(this);
        }

        return $If_2.call(this);
      }.$asyncbind(this, $error), $error);
    }.$asyncbind(this, $error), $error);
  }.$asyncbind(this));
}

function playerRetry() {
  return new Promise(function (finalResolve) {
    function replay_cpu_pattern() {
      return new Promise(function (resolve) {
        CPU.playBackPattern();
        var patternTime = CPU.pattern.length * CPU.cadence + 300;
        setTimeout(function () {
          resolve(CPU.pattern);
        }, patternTime);
      });
    }

    function retryLoop() {
      return new Promise(function ($return, $error) {
        var cpuPattern, playerTurnVerdict;

        if (strictMode) {
          finalResolve();
          return $return();
        }
        simonMorphTo(simonAttrCopy);
        return delayStart().then(function ($await_12) {
          return replay_cpu_pattern().then(function ($await_13) {
            cpuPattern = $await_13;
            simonMorphTo(you);
            return playerTurn(cpuPattern).then(function ($await_14) {
              playerTurnVerdict = $await_14;
              if (playerTurnVerdict) {
                finalResolve();
              } else {
                retryLoop();
              }
              return $return();
            }.$asyncbind(this, $error), $error);
          }.$asyncbind(this, $error), $error);
        }.$asyncbind(this, $error), $error);
      }.$asyncbind(this));
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(27), __webpack_require__(40).setImmediate))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(41);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(27)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(46);
__webpack_require__(55);
__webpack_require__(59);
module.exports = __webpack_require__(5).Promise;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(15);
var test = {};
test[__webpack_require__(0)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(6)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(18)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(47)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(30)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var defined = __webpack_require__(20);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(49);
var descriptor = __webpack_require__(29);
var setToStringTag = __webpack_require__(25);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(2);
var dPs = __webpack_require__(50);
var enumBugKeys = __webpack_require__(34);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(18)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(35).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(2);
var getKeys = __webpack_require__(22);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(23);
var arrayIndexOf = __webpack_require__(52)(false);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(23);
var toLength = __webpack_require__(33);
var toAbsoluteIndex = __webpack_require__(53);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(36);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(56);
var getKeys = __webpack_require__(22);
var redefine = __webpack_require__(6);
var global = __webpack_require__(1);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(10);
var wks = __webpack_require__(0);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(57);
var step = __webpack_require__(58);
var Iterators = __webpack_require__(10);
var toIObject = __webpack_require__(23);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(30)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(4)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var global = __webpack_require__(1);
var ctx = __webpack_require__(13);
var classof = __webpack_require__(15);
var $export = __webpack_require__(21);
var isObject = __webpack_require__(7);
var aFunction = __webpack_require__(14);
var anInstance = __webpack_require__(60);
var forOf = __webpack_require__(61);
var speciesConstructor = __webpack_require__(65);
var task = __webpack_require__(37).set;
var microtask = __webpack_require__(67)();
var newPromiseCapabilityModule = __webpack_require__(38);
var perform = __webpack_require__(68);
var promiseResolve = __webpack_require__(69);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(70)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(25)($Promise, PROMISE);
__webpack_require__(71)(PROMISE);
Wrapper = __webpack_require__(5)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(72)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(13);
var call = __webpack_require__(62);
var isArrayIter = __webpack_require__(63);
var anObject = __webpack_require__(2);
var toLength = __webpack_require__(33);
var getIterFn = __webpack_require__(64);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(2);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(10);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(15);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(10);
module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(2);
var aFunction = __webpack_require__(14);
var SPECIES = __webpack_require__(0)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(37).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(11)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(2);
var isObject = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(38);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(6);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var dP = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
module.exports = __webpack_require__(5).Object.assign;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(21);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(75) });


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(76);
var pIE = __webpack_require__(77);
var toObject = __webpack_require__(36);
var IObject = __webpack_require__(32);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(17)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! howler.js v2.0.9 | (c) 2013-2018, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
!function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var e=this||n;return e._counter=1e3,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.mobileAutoEnable=!0,e._setup(),e},volume:function(e){var t=this||n;if(e=parseFloat(e),t.ctx||_(),void 0!==e&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,n.ctx.currentTime);for(var o=0;o<t._howls.length;o++)if(!t._howls[o]._webAudio)for(var r=t._howls[o]._getSoundIds(),a=0;a<r.length;a++){var u=t._howls[o]._soundById(r[a]);u&&u._node&&(u._node.volume=u._volume*e)}return t}return t._volume},mute:function(e){var t=this||n;t.ctx||_(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,n.ctx.currentTime);for(var o=0;o<t._howls.length;o++)if(!t._howls[o]._webAudio)for(var r=t._howls[o]._getSoundIds(),a=0;a<r.length;a++){var u=t._howls[o]._soundById(r[a]);u&&u._node&&(u._node.muted=!!e||u._muted)}return t},unload:function(){for(var e=this||n,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,_()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx?e.ctx.state||"running":"running",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{var t=new Audio;void 0===t.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{var t=new Audio;t.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,t=null;try{t="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!t||"function"!=typeof t.canPlayType)return e;var o=t.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),a=r&&parseInt(r[0].split("/")[1],10)<33;return e._codecs={mp3:!(a||!o&&!t.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!o,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_enableMobileAudio:function(){var e=this||n,t=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator&&e._navigator.userAgent),o=!!("ontouchend"in window||e._navigator&&e._navigator.maxTouchPoints>0||e._navigator&&e._navigator.msMaxTouchPoints>0);if(!e._mobileEnabled&&e.ctx&&(t||o)){e._mobileEnabled=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var r=function(){n._autoResume();var t=e.ctx.createBufferSource();t.buffer=e._scratchBuffer,t.connect(e.ctx.destination),void 0===t.start?t.noteOn(0):t.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),t.onended=function(){t.disconnect(0),e._mobileEnabled=!0,e.mobileAutoEnable=!1,document.removeEventListener("touchstart",r,!0),document.removeEventListener("touchend",r,!0)}};return document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",r,!0),e}},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&n.usingWebAudio){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio)for(var o=0;o<e._howls[t]._sounds.length;o++)if(!e._howls[t]._sounds[o]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var n=new e,t=function(e){var n=this;if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");n.init(e)};t.prototype={init:function(e){var t=this;return n.ctx||_(),t._autoplay=e.autoplay||!1,t._format="string"!=typeof e.format?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload="boolean"!=typeof e.preload||e.preload,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src="string"!=typeof e.src?e.src:[e.src],t._volume=void 0!==e.volume?e.volume:1,t._xhrWithCredentials=e.xhrWithCredentials||!1,t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onresume=[],t._webAudio=n.usingWebAudio&&!t._html5,void 0!==n.ctx&&n.ctx&&n.mobileAutoEnable&&n._enableMobileAudio(),n._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&t.load(),t},load:function(){var e=this,t=null;if(n.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var u,i;if(e._format&&e._format[r])u=e._format[r];else{if("string"!=typeof(i=e._src[r])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}u=/^data:audio\/([^;,]+);/i.exec(i),u||(u=/\.([^.]+)$/.exec(i.split("?",1)[0])),u&&(u=u[1].toLowerCase())}if(u||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),u&&n.codecs(u)){t=e._src[r];break}}return t?(e._src=t,e._state="loading","https:"===window.location.protocol&&"http:"===t.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new o(e),e._webAudio&&a(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,t){var o=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===o._state&&!o._sprite[e])return null;if(void 0===e){e="__default";for(var a=0,u=0;u<o._sounds.length;u++)o._sounds[u]._paused&&!o._sounds[u]._ended&&(a++,r=o._sounds[u]._id);1===a?e=null:r=null}}var i=r?o._soundById(r):o._inactiveSound();if(!i)return null;if(r&&!e&&(e=i._sprite||"__default"),"loaded"!==o._state){i._sprite=e,i._ended=!1;var d=i._id;return o._queue.push({event:"play",action:function(){o.play(d)}}),d}if(r&&!i._paused)return t||o._loadQueue("play"),i._id;o._webAudio&&n._autoResume();var _=Math.max(0,i._seek>0?i._seek:o._sprite[e][0]/1e3),s=Math.max(0,(o._sprite[e][0]+o._sprite[e][1])/1e3-_),l=1e3*s/Math.abs(i._rate);i._paused=!1,i._ended=!1,i._sprite=e,i._seek=_,i._start=o._sprite[e][0]/1e3,i._stop=(o._sprite[e][0]+o._sprite[e][1])/1e3,i._loop=!(!i._loop&&!o._sprite[e][2]);var c=i._node;if(o._webAudio){var f=function(){o._refreshBuffer(i);var e=i._muted||o._muted?0:i._volume;c.gain.setValueAtTime(e,n.ctx.currentTime),i._playStart=n.ctx.currentTime,void 0===c.bufferSource.start?i._loop?c.bufferSource.noteGrainOn(0,_,86400):c.bufferSource.noteGrainOn(0,_,s):i._loop?c.bufferSource.start(0,_,86400):c.bufferSource.start(0,_,s),l!==1/0&&(o._endTimers[i._id]=setTimeout(o._ended.bind(o,i),l)),t||setTimeout(function(){o._emit("play",i._id)},0)};"running"===n.state?f():(o.once("resume",f),o._clearTimer(i._id))}else{var p=function(){c.currentTime=_,c.muted=i._muted||o._muted||n._muted||c.muted,c.volume=i._volume*n.volume(),c.playbackRate=i._rate;try{var r=c.play();if("undefined"!=typeof Promise&&r instanceof Promise){o._playLock=!0;var a=function(){o._playLock=!1,t||o._emit("play",i._id)};r.then(a,a)}else t||o._emit("play",i._id);if(c.paused)return void o._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.");"__default"!==e?o._endTimers[i._id]=setTimeout(o._ended.bind(o,i),l):(o._endTimers[i._id]=function(){o._ended(i),c.removeEventListener("ended",o._endTimers[i._id],!1)},c.addEventListener("ended",o._endTimers[i._id],!1))}catch(e){o._emit("playerror",i._id,e)}},m=window&&window.ejecta||!c.readyState&&n._navigator.isCocoonJS;if(c.readyState>=3||m)p();else{var v=function(){p(),c.removeEventListener(n._canPlayEvent,v,!1)};c.addEventListener(n._canPlayEvent,v,!1),o._clearTimer(i._id)}}return i._id},pause:function(e){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var t=n._getSoundIds(e),o=0;o<t.length;o++){n._clearTimer(t[o]);var r=n._soundById(t[o]);if(r&&!r._paused&&(r._seek=n.seek(t[o]),r._rateSeek=0,r._paused=!0,n._stopFade(t[o]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var t=this;if("loaded"!==t._state)return t._queue.push({event:"stop",action:function(){t.stop(e)}}),t;for(var o=t._getSoundIds(e),r=0;r<o.length;r++){t._clearTimer(o[r]);var a=t._soundById(o[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,t._stopFade(o[r]),a._node&&(t._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),t._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause())),n||t._emit("stop",a._id))}return t},mute:function(e,t){var o=this;if("loaded"!==o._state)return o._queue.push({event:"mute",action:function(){o.mute(e,t)}}),o;if(void 0===t){if("boolean"!=typeof e)return o._muted;o._muted=e}for(var r=o._getSoundIds(t),a=0;a<r.length;a++){var u=o._soundById(r[a]);u&&(u._muted=e,u._interval&&o._stopFade(u._id),o._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,n.ctx.currentTime):u._node&&(u._node.muted=!!n._muted||e),o._emit("mute",u._id))}return o},volume:function(){var e,t,o=this,r=arguments;if(0===r.length)return o._volume;if(1===r.length||2===r.length&&void 0===r[1]){o._getSoundIds().indexOf(r[0])>=0?t=parseInt(r[0],10):e=parseFloat(r[0])}else r.length>=2&&(e=parseFloat(r[0]),t=parseInt(r[1],10));var a;if(!(void 0!==e&&e>=0&&e<=1))return a=t?o._soundById(t):o._sounds[0],a?a._volume:0;if("loaded"!==o._state)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,r)}}),o;void 0===t&&(o._volume=e),t=o._getSoundIds(t);for(var u=0;u<t.length;u++)(a=o._soundById(t[u]))&&(a._volume=e,r[2]||o._stopFade(t[u]),o._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(e,n.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=e*n.volume()),o._emit("volume",a._id));return o},fade:function(e,t,o,r){var a=this;if("loaded"!==a._state)return a._queue.push({event:"fade",action:function(){a.fade(e,t,o,r)}}),a;a.volume(e,r);for(var u=a._getSoundIds(r),i=0;i<u.length;i++){var d=a._soundById(u[i]);if(d){if(r||a._stopFade(u[i]),a._webAudio&&!d._muted){var _=n.ctx.currentTime,s=_+o/1e3;d._volume=e,d._node.gain.setValueAtTime(e,_),d._node.gain.linearRampToValueAtTime(t,s)}a._startFadeInterval(d,e,t,o,u[i],void 0===r)}}return a},_startFadeInterval:function(e,n,t,o,r,a){var u=this,i=n,d=t-n,_=Math.abs(d/.01),s=Math.max(4,_>0?o/_:o),l=Date.now();e._fadeTo=t,e._interval=setInterval(function(){var r=(Date.now()-l)/o;l=Date.now(),i+=d*r,i=Math.max(0,i),i=Math.min(1,i),i=Math.round(100*i)/100,u._webAudio?e._volume=i:u.volume(i,e._id,!0),a&&(u._volume=i),(t<n&&i<=t||t>n&&i>=t)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,u.volume(t,e._id),u._emit("fade",e._id))},s)},_stopFade:function(e){var t=this,o=t._soundById(e);return o&&o._interval&&(t._webAudio&&o._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(o._interval),o._interval=null,t.volume(o._fadeTo,e),o._fadeTo=null,t._emit("fade",e)),t},loop:function(){var e,n,t,o=this,r=arguments;if(0===r.length)return o._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(t=o._soundById(parseInt(r[0],10)))&&t._loop;e=r[0],o._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var a=o._getSoundIds(n),u=0;u<a.length;u++)(t=o._soundById(a[u]))&&(t._loop=e,o._webAudio&&t._node&&t._node.bufferSource&&(t._node.bufferSource.loop=e,e&&(t._node.bufferSource.loopStart=t._start||0,t._node.bufferSource.loopEnd=t._stop)));return o},rate:function(){var e,t,o=this,r=arguments;if(0===r.length)t=o._sounds[0]._id;else if(1===r.length){var a=o._getSoundIds(),u=a.indexOf(r[0]);u>=0?t=parseInt(r[0],10):e=parseFloat(r[0])}else 2===r.length&&(e=parseFloat(r[0]),t=parseInt(r[1],10));var i;if("number"!=typeof e)return i=o._soundById(t),i?i._rate:o._rate;if("loaded"!==o._state)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,r)}}),o;void 0===t&&(o._rate=e),t=o._getSoundIds(t);for(var d=0;d<t.length;d++)if(i=o._soundById(t[d])){i._rateSeek=o.seek(t[d]),i._playStart=o._webAudio?n.ctx.currentTime:i._playStart,i._rate=e,o._webAudio&&i._node&&i._node.bufferSource?i._node.bufferSource.playbackRate.setValueAtTime(e,n.ctx.currentTime):i._node&&(i._node.playbackRate=e);var _=o.seek(t[d]),s=(o._sprite[i._sprite][0]+o._sprite[i._sprite][1])/1e3-_,l=1e3*s/Math.abs(i._rate);!o._endTimers[t[d]]&&i._paused||(o._clearTimer(t[d]),o._endTimers[t[d]]=setTimeout(o._ended.bind(o,i),l)),o._emit("rate",i._id)}return o},seek:function(){var e,t,o=this,r=arguments;if(0===r.length)t=o._sounds[0]._id;else if(1===r.length){var a=o._getSoundIds(),u=a.indexOf(r[0]);u>=0?t=parseInt(r[0],10):o._sounds.length&&(t=o._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),t=parseInt(r[1],10));if(void 0===t)return o;if("loaded"!==o._state)return o._queue.push({event:"seek",action:function(){o.seek.apply(o,r)}}),o;var i=o._soundById(t);if(i){if(!("number"==typeof e&&e>=0)){if(o._webAudio){var d=o.playing(t)?n.ctx.currentTime-i._playStart:0,_=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(_+d*Math.abs(i._rate))}return i._node.currentTime}var s=o.playing(t);if(s&&o.pause(t,!0),i._seek=e,i._ended=!1,o._clearTimer(t),s&&o.play(t,!0),!o._webAudio&&i._node&&(i._node.currentTime=e),s&&!o._webAudio){var l=function(){o._playLock?setTimeout(l,0):o._emit("seek",t)};setTimeout(l,0)}else o._emit("seek",t)}return o},playing:function(e){var n=this;if("number"==typeof e){var t=n._soundById(e);return!!t&&!t._paused}for(var o=0;o<n._sounds.length;o++)if(!n._sounds[o]._paused)return!0;return!1},duration:function(e){var n=this,t=n._duration,o=n._soundById(e);return o&&(t=n._sprite[o._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,o=0;o<t.length;o++){if(t[o]._paused||e.stop(t[o]._id),!e._webAudio){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(t[o]._node.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),t[o]._node.removeEventListener("error",t[o]._errorFn,!1),t[o]._node.removeEventListener(n._canPlayEvent,t[o]._loadFn,!1)}delete t[o]._node,e._clearTimer(t[o]._id);var a=n._howls.indexOf(e);a>=0&&n._howls.splice(a,1)}var u=!0;for(o=0;o<n._howls.length;o++)if(n._howls[o]._src===e._src){u=!1;break}return r&&u&&delete r[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,t,o){var r=this,a=r["_on"+e];return"function"==typeof n&&a.push(o?{id:t,fn:n,once:o}:{id:t,fn:n}),r},off:function(e,n,t){var o=this,r=o["_on"+e],a=0;if("number"==typeof n&&(t=n,n=null),n||t)for(a=0;a<r.length;a++){var u=t===r[a].id;if(n===r[a].fn&&u||!n&&u){r.splice(a,1);break}}else if(e)o["_on"+e]=[];else{var i=Object.keys(o);for(a=0;a<i.length;a++)0===i[a].indexOf("_on")&&Array.isArray(o[i[a]])&&(o[i[a]]=[])}return o},once:function(e,n,t){var o=this;return o.on(e,n,t,1),o},_emit:function(e,n,t){for(var o=this,r=o["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,t)}.bind(o,r[a].fn),0),r[a].once&&o.off(e,r[a].fn,r[a].id));return o._loadQueue(e),o},_loadQueue:function(e){var n=this;if(n._queue.length>0){var t=n._queue[0];t.event===e&&(n._queue.shift(),n._loadQueue()),e||t.action()}return n},_ended:function(e){var t=this,o=e._sprite;if(!t._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(t._ended.bind(t,e),100),t;var r=!(!e._loop&&!t._sprite[o][2]);if(t._emit("end",e._id),!t._webAudio&&r&&t.stop(e._id,!0).play(e._id),t._webAudio&&r){t._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);t._endTimers[e._id]=setTimeout(t._ended.bind(t,e),a)}return t._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,t._clearTimer(e._id),t._cleanBuffer(e._node),n._autoSuspend()),t._webAudio||r||t.stop(e._id),t},_clearTimer:function(e){var n=this;if(n._endTimers[e]){if("function"!=typeof n._endTimers[e])clearTimeout(n._endTimers[e]);else{var t=n._soundById(e);t&&t._node&&t._node.removeEventListener("ended",n._endTimers[e],!1)}delete n._endTimers[e]}return n},_soundById:function(e){for(var n=this,t=0;t<n._sounds.length;t++)if(e===n._sounds[t]._id)return n._sounds[t];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new o(e)},_drain:function(){var e=this,n=e._pool,t=0,o=0;if(!(e._sounds.length<n)){for(o=0;o<e._sounds.length;o++)e._sounds[o]._ended&&t++;for(o=e._sounds.length-1;o>=0;o--){if(t<=n)return;e._sounds[o]._ended&&(e._webAudio&&e._sounds[o]._node&&e._sounds[o]._node.disconnect(0),e._sounds.splice(o,1),t--)}}},_getSoundIds:function(e){var n=this;if(void 0===e){for(var t=[],o=0;o<n._sounds.length;o++)t.push(n._sounds[o]._id);return t}return[e]},_refreshBuffer:function(e){var t=this;return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=r[t._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,n.ctx.currentTime),t},_cleanBuffer:function(e){var t=this;if(n._scratchBuffer){e.bufferSource.onended=null,e.bufferSource.disconnect(0);try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}}return e.bufferSource=null,t}};var o=function(e){this._parent=e,this.init()};o.prototype={init:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,t._sounds.push(e),e.create(),e},create:function(){var e=this,t=e._parent,o=n._muted||e._muted||e._parent._muted?0:e._volume;return t._webAudio?(e._node=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(o,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):(e._node=new Audio,e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._node.src=t._src,e._node.preload="auto",e._node.volume=o*n.volume(),e._node.load()),e},reset:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,t=e._parent;t._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(t._sprite).length&&(t._sprite={__default:[0,1e3*t._duration]}),"loaded"!==t._state&&(t._state="loaded",t._emit("load"),t._loadQueue()),e._node.removeEventListener(n._canPlayEvent,e._loadFn,!1)}};var r={},a=function(e){var n=e._src;if(r[n])return e._duration=r[n].duration,void d(e);if(/^data:[^;]+;base64,/.test(n)){for(var t=atob(n.split(",")[1]),o=new Uint8Array(t.length),a=0;a<t.length;++a)o[a]=t.charCodeAt(a);i(o.buffer,e)}else{var _=new XMLHttpRequest;_.open("GET",n,!0),_.withCredentials=e._xhrWithCredentials,_.responseType="arraybuffer",_.onload=function(){var n=(_.status+"")[0];if("0"!==n&&"2"!==n&&"3"!==n)return void e._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");i(_.response,e)},_.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete r[n],e.load())},u(_)}},u=function(e){try{e.send()}catch(n){e.onerror()}},i=function(e,t){n.ctx.decodeAudioData(e,function(e){e&&t._sounds.length>0&&(r[t._src]=e,d(t,e))},function(){t._emit("loaderror",null,"Decoding audio data failed.")})},d=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},_=function(){try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),t=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),o=t?parseInt(t[1],10):null;if(e&&o&&o<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());(n._navigator&&n._navigator.standalone&&!r||n._navigator&&!n._navigator.standalone&&!r)&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:1,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()};"function"=="function"&&__webpack_require__(79)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return{Howler:n,Howl:t}}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),"undefined"!=typeof exports&&(exports.Howler=n,exports.Howl=t),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=n,window.Howl=t,window.Sound=o):"undefined"!=typeof global&&(global.HowlerGlobal=e,global.Howler=n,global.Howl=t,global.Sound=o)}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 79 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* KUTE.js - The Light Tweening Engine
 * package - SVG Plugin
 * desc - draw SVG strokes, morph SVG and SVG transforms
 * by dnp_theme
 * Licensed under MIT-License
 */

(function (root,factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(26)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if(typeof module == 'object' && typeof require == 'function') {
    module.exports = factory(require('./kute.js'));
  } else if ( typeof root.KUTE !== 'undefined' ) {
    factory(root.KUTE);
  } else {
    throw new Error("SVG Plugin require KUTE.js.");
  }
}(this, function(KUTE) {
  'use strict';

  var g = typeof global !== 'undefined' ? global : window, K = KUTE, // connect plugin to KUTE object and global
    DOM = K.dom, parseProperty = K.parseProperty, prepareStart = K.prepareStart, getCurrentStyle = K.getCurrentStyle,
    trueColor = K.truC, trueDimension = K.truD, crossCheck = K.crossCheck,
    number = g.Interpolate.number, unit = g.Interpolate.unit, color = g.Interpolate.color, // interpolate functions
    defaultOptions = K.defaultOptions, // default tween options since 1.6.1

    // browser detection
    isIE = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) !== null ? parseFloat( RegExp.$1 ) : false;

  if (isIE&&isIE<9) {return;} // return if SVG API is not supported

  // here we go with the plugin
  var pathReg = /(m[^(h|v|l)]*|[vhl][^(v|h|l|z)]*)/gmi, ns = 'http://www.w3.org/2000/svg',
    // function(array1, array2, length, progress) for SVG morph
    coords = g.Interpolate.coords = function(a,b,l,v) {
      var points = [];
      for(var i=0;i<l;i++) { // for each point
        points[i] = [];
        for(var j=0;j<2;j++) { // each point coordinate
          points[i].push( ((a[i][j]+(b[i][j]-a[i][j])*v) * 1000 >> 0)/1000 );
        }
      }
      return points;
    };


  // SVG MORPH
  var getSegments = function(s,e,r){ // getSegments returns an array of points based on a sample size morphPrecision
      var s1 = [], e1 = [], le1 = s.getTotalLength(), le2 = e.getTotalLength(), ml = Math.max(le1,le2),
        d = r, ar = ml / r, j = 0, sl = ar*r; // sl = sample length

      while ( (j += r) < sl ) { // populate the points arrays based on morphPrecision as sample size
        s1.push( [s.getPointAtLength(j).x, s.getPointAtLength(j).y]);
        e1.push( [e.getPointAtLength(j).x, e.getPointAtLength(j).y]);
      }
      return [s1,e1];
    },
    getClosestPoint = function(p,t,s){ // utility for polygon paths, returns a close point from the original path (length,pointAtLength,smallest); // intervalLength
      var x, y, a = [], l = s.length, dx, nx, pr;
      for (var i=0; i<l; i++){
        x = Math.abs(s[i][0] - t.x);
        y = Math.abs(s[i][1] - t.y);
        a.push( Math.sqrt( x * x + y * y ) );
      }
      dx = a.indexOf(Math.min.apply(null,a));
      pr = !!s[dx-1] ? dx-1 : l-1;
      nx = !!s[dx+1] ? dx+1 : 0;
      return Math.abs(s[pr][0] - t.x) < p && Math.abs(s[pr][1] - t.y) < p ? s[pr]
      : Math.abs(s[nx][0] - t.x) < p && Math.abs(s[nx][1] - t.y) < p ? s[nx]
      : Math.abs(s[dx][0] - t.x) < p && Math.abs(s[dx][1] - t.y) < p ? s[dx]
      : [t.x,t.y];
    },
    pathToAbsolute = function(p) { // simple utility for polygons | this is still BETA / a work in progress
      var np = p.match(pathReg), wp = [], l = np.length, s, c, r, x = 0, y = 0;
      for (var i = 0; i<l; i++){
        np[i] = np[i]; c = np[i][0]; r = new RegExp(c+'[^\\d|\\-]*','i');
        np[i] = np[i].replace(/(^|[^,])\s*-/g, '$1,-').replace(/(\s+\,|\s|\,)/g,',').replace(r,'').split(',');
        np[i][0] = parseFloat(np[i][0]);
        np[i][1] = parseFloat(np[i][1]);
        if (i === 0) { x+=np[i][0]; y +=np[i][1]; }
        else {
          x = np[i-1][0];
          y = np[i-1][1];
          if (/l/i.test(c)) {
            np[i][0] = c === 'l' ? np[i][0] + x : np[i][0];
            np[i][1] = c === 'l' ? np[i][1] + y : np[i][1];
          } else if (/h/i.test(c)) {
            np[i][0] = c === 'h' ? np[i][0] + x : np[i][0];
            np[i][1] = y;
          } else if (/v/i.test(c)) {
            np[i][0] = x;
            np[i][1] = c === 'v' ? np[i][0] + y : np[i][0];
          }
        }
      }
      return np;
    },
    getOnePath = function(p){ return p.split(/z/i).shift() + 'z'; }, // we only tween first path only
    createPath = function (p){ // create a <path> when glyph
      var createdPath = document.createElementNS(ns,'path'), d = typeof p === 'object' ? p.getAttribute('d') : p;
      createdPath.setAttribute('d',d); return createdPath;
    },
    forcePath = function(p){ // forcePath for glyph elements
      if (p.tagName === 'glyph') { // perhaps we can also change other SVG tags in the future
        var c = createPath(p); p.parentNode.appendChild(c); return c;
      }
      return p;
    },
    clone = function(a) {
      var copy;
      if (a instanceof Array) {
        copy = [];
        for (var i = 0, len = a.length; i < len; i++) {
          copy[i] = clone(a[i]);
        }
        return copy;
      }
      return a;
    },
    getPath = function(e){ // get path d attribute or create a path from string value
      var p = {}, el = typeof e === 'object' ? e : /^\.|^\#/.test(e) ? document.querySelector(e) : null;
      if ( el && /path|glyph/.test(el.tagName) ) {
        p.e = forcePath(el);
        p.o = el.getAttribute('d');

      } else if (!el && /[a-z][^a-z]*/ig.test(e)) { // maybe it's a string path already
        p.e = createPath(e.trim());
        p.o = e;
      }
      return p;
    },
    computePathCross = function(s,e){ // pathCross
      var s1, e1, pointsArray, largerPathLength, smallerPath, largerPath, simulatedSmallerPath, nsm = [], sml, cl = [], len, tl, cs,
        index = this.options.morphIndex;

      if (!this._isPolygon) {
        s = createPath(s); e = createPath(e);
        pointsArray = getSegments(s,e,this.options.morphPrecision);
        s1 = pointsArray[0]; e1 = pointsArray[1]; largerPathLength = e1.length;
      } else {
        s = pathToAbsolute(s); e = pathToAbsolute(e);

        if ( s.length !== e.length ){
          largerPathLength = Math.max(s.length,e.length);
          if ( largerPathLength === e.length) { smallerPath = s; largerPath = e; } else { smallerPath = e; largerPath = s; }
          sml = smallerPath.length;

          simulatedSmallerPath = createPath('M'+smallerPath.join('L')+'z'); len = simulatedSmallerPath.getTotalLength() / largerPathLength;
          for (var i=0; i<largerPathLength; i++){
            tl = simulatedSmallerPath.getPointAtLength(len*i);
            cs = getClosestPoint(len,tl,smallerPath);
            nsm.push( [ cs[0], cs[1] ] );
          }

          if (largerPathLength === e.length) { e1 = largerPath; s1 = nsm; } else { s1 = largerPath; e1 = nsm; }
        } else {
          s1 = s; e1 = e;
        }
      }

      // reverse arrays
      if (this.options.reverseFirstPath) { s1.reverse(); }
      if (this.options.reverseSecondPath) { e1.reverse(); }

      // shift second array to for smallest tween distance
      if (index) {
        var e11 = e1.splice(index,largerPathLength-index);
        e1 = e11.concat(e1);
      }

      s = e = null;
      return [s1,e1]
    };

  // set default morphPrecision since 1.6.1
  defaultOptions.morphPrecision = 15;

  // process path object and also register the render function
  parseProperty.path = function(o,v) {
    if (!('path' in DOM)) {
      DOM.path = function(l,p,a,b,v){
        l.setAttribute("d", v === 1 ? b.o : 'M' + coords( a['d'],b['d'],b['d'].length,v ) + 'Z' );
      }
    }
    return getPath(v);
  };

  prepareStart.path = function(p){
    return this.element.getAttribute('d');
  };

  crossCheck.path = function() { // unlike other cases, the crossCheck apply to both to() and fromTo() methods
    var p1 = getOnePath(this.valuesStart.path.o), p2 = getOnePath(this.valuesEnd.path.o), paths;

    // path tween options
    this.options.morphPrecision = this.options && 'morphPrecision' in this.options ? parseInt(this.options.morphPrecision) : defaultOptions.morphPrecision;
    this._isPolygon = !/[CSQTA]/i.test(p1) && !/[CSQTA]/i.test(p2); // check if both shapes are polygons

    // begin processing paths
    paths = computePathCross.apply(this,[p1,p2]);

    this.valuesStart.path.d = paths[0];
    this.valuesEnd.path.d = paths[1];
  };


  // SVG DRAW
  var percent = function(v,l){ return parseFloat(v) / 100 * l; },
    // SVG DRAW UTILITITES
    // http://stackoverflow.com/a/30376660
    getRectLength = function(el){ // returns the length of a Rect
      var w = el.getAttribute('width');
      var h = el.getAttribute('height');
      return (w*2)+(h*2);
    },
    getPolyLength = function(el){ // getPolygonLength / getPolylineLength - return the length of the Polygon / Polyline
      var points = el.getAttribute('points').split(' '), len = 0;
      if (points.length > 1) {
        var coord = function (p) {
          var c = p.split(',');
          if (c.length != 2) { return; } // return undefined
          if (isNaN(c[0]) || isNaN(c[1])) { return; }
          return [parseFloat(c[0]), parseFloat(c[1])];
        };

        var dist = function (c1, c2) {
          if (c1 != undefined && c2 != undefined) {
            return Math.sqrt(Math.pow((c2[0]-c1[0]), 2) + Math.pow((c2[1]-c1[1]), 2));
          }
          return 0;
        };

        if (points.length > 2) {
          for (var i=0; i<points.length-1; i++) {
            len += dist(coord(points[i]), coord(points[i+1]));
          }
        }
        len += dist(coord(points[0]), coord(points[points.length-1]));
      }
      return len;
    },
    getLineLength = function(el){ // return the length of the line
      var x1 = el.getAttribute('x1');
      var x2 = el.getAttribute('x2');
      var y1 = el.getAttribute('y1');
      var y2 = el.getAttribute('y2');
      return Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1),2));
    },
    getCircleLength = function(el){ // return the length of the circle
      var r = el.getAttribute('r');
      return 2 * Math.PI * r;
    },
    getEllipseLength = function(el) { // returns the length of an ellipse
      var rx = el.getAttribute('rx'), ry = el.getAttribute('ry'),
          len = 2*rx, wid = 2*ry;
      return ((Math.sqrt(.5 * ((len * len) + (wid * wid)))) * (Math.PI * 2)) / 2;
    },
    getTotalLength = function(el){ // returns the result of any of the below functions
      if (/rect/.test(el.tagName)) {
        return getRectLength(el);
      } else if (/circle/.test(el.tagName)) {
        return getCircleLength(el);
      } else if (/ellipse/.test(el.tagName)) {
        return getEllipseLength(el);
      } else if (/polygon|polyline/.test(el.tagName)) {
        return getPolyLength(el);
      } else if (/line/.test(el.tagName)) {
        return getLineLength(el);
      }
    },
    getDraw = function(e,v){
      var l = /path|glyph/.test(e.tagName) ? e.getTotalLength() : getTotalLength(e), start, end, d, o;
      if ( v instanceof Object ) {
        return v;
      } else if (typeof v === 'string') {
        v = v.split(/\,|\s/);
        start = /%/.test(v[0]) ? percent(v[0].trim(),l) : parseFloat(v[0]);
        end = /%/.test(v[1]) ? percent(v[1].trim(),l) : parseFloat(v[1]);
      } else if (typeof v === 'undefined') {
        o = parseFloat(getCurrentStyle(e,'stroke-dashoffset'));
        d = getCurrentStyle(e,'stroke-dasharray').split(/\,/);

        start = 0-o;
        end = parseFloat(d[0]) + start || l;
      }
      return { s: start, e: end, l: l }
    };

  parseProperty.draw = function(a,o){ // register the draw property
    if (!('draw' in DOM)) {
      DOM.draw = function(l,p,a,b,v){
        var pathLength = (a.l*100>>0)/100, start = (number(a.s,b.s,v)*100>>0)/100, end = (number(a.e,b.e,v)*100>>0)/100,
        offset = 0 - start, dashOne = end+offset;
        l.style.strokeDashoffset = offset +'px';
        l.style.strokeDasharray = (((dashOne <1 ? 0 : dashOne)*100>>0)/100) + 'px, ' + pathLength + 'px';
      }
    }
    return getDraw(this.element,o);
  }

  prepareStart.draw = function(){
    return getDraw(this.element);
  }


  // SVG Transform
  var parseStringOrigin = function(origin,box){
      return /[a-zA-Z]/.test(origin) && !/px/.test(origin) ? origin.replace(/top|left/,0).replace(/right|bottom/,100).replace(/center|middle/,50)
                                     : /%/.test(origin) ? (box.x + parseFloat(origin) * box.width / 100) : parseFloat(origin);
    },
    parseTransformString = function (a){ // helper function that turns transform value from string to object
      var d = a && /\)/.test(a) ? a.substring(0, a.length-1).split(/\)\s|\)/) : 'none', c = {};

      if (d instanceof Array) {
        for (var j=0, jl = d.length; j<jl; j++){
          var p = d[j].trim().split('('); c[p[0]] = p[1];
        }
      }
      return c;
    },
    parseTransformObject = function(v){
      var svgTransformObject = {}, bb = this.element.getBBox(),
        cx = bb.x + bb.width/2, cy = bb.y + bb.height/2, // by default the transformOrigin is "50% 50%" of the shape box
        origin = this.options.transformOrigin, translation;

      origin = !!origin ? (origin instanceof Array ? origin : origin.split(/\s/)) : [cx,cy];

      origin[0] = typeof origin[0] === 'number' ? origin[0] : parseStringOrigin(origin[0],bb);
      origin[1] = typeof origin[1] === 'number' ? origin[1] : parseStringOrigin(origin[1],bb);

      svgTransformObject.origin = origin;

      for ( var i in v ) { // populate the valuesStart and / or valuesEnd
        if (i === 'rotate'){
          svgTransformObject[i] = typeof v[i] === 'number' ? v[i] : v[i] instanceof Array ? v[i][0] : v[i].split(/\s/)[0]*1;
        } else if (i === 'translate'){
          translation = v[i] instanceof Array ? v[i] : /\,|\s/.test(v[i]) ? v[i].split(',') : [v[i],0];
          svgTransformObject[i] = [translation[0]*1||0, translation[1]*1||0];
        } else if (/skew/.test(i)) {
          svgTransformObject[i] = v[i]*1||0;
        } else if (i === 'scale'){
          svgTransformObject[i] = parseFloat(v[i])||1;
        }
      }

      return svgTransformObject;
    };

  parseProperty.svgTransform = function(p,v){
    // register the render function
    if (!('svgTransform' in DOM)) {
      DOM.svgTransform = function(l,p,a,b,v){
        var x = 0, y = 0, tmp, deg = Math.PI/180,
          scale = 'scale' in b ? number(a.scale,b.scale,v) : 1,
          rotate = 'rotate' in b ? number(a.rotate,b.rotate,v) : 0,
          sin = Math.sin(rotate*deg), cos = Math.cos(rotate*deg),
          skewX = 'skewX' in b ? number(a.skewX,b.skewX,v) : 0,
          skewY = 'skewY' in b ? number(a.skewY,b.skewY,v) : 0,
          complex = rotate||skewX||skewY||scale!==1 || 0;

        // start normalizing the translation, we start from last to first (from last chained translation)
        // the normalized translation will handle the transformOrigin tween option and makes sure to have a consistent transformation
        x -= complex ? b.origin[0] : 0; y -= complex ? b.origin[1] : 0; // we start with removing transformOrigin from translation
        x *= scale; y *= scale; // we now apply the scale
        y += skewY ? x*Math.tan(skewY*deg) : 0; x += skewX ? y*Math.tan(skewX*deg) : 0; // now we apply skews
        tmp = cos*x - sin*y; // apply rotation as well
        y = rotate ? sin*x + cos*y : y; x = rotate ? tmp : x;
        x += 'translate' in b ? number(a.translate[0],b.translate[0],v) : 0; // now we apply the actual translation
        y += 'translate' in b ? number(a.translate[1],b.translate[1],v) : 0;
        x += complex ? b.origin[0] : 0; y += complex ? b.origin[1] : 0; // normalizing ends with the addition of the transformOrigin to the translation

        // finally we apply the transform attribute value
        l.setAttribute('transform', ( x||y ? ('translate(' + (x*1000>>0)/1000 + ( y ? (',' + ((y*1000>>0)/1000)) : '') + ')') : '' )
                                    +( rotate ? 'rotate(' + (rotate*1000>>0)/1000 + ')' : '' )
                                    +( skewX ? 'skewX(' + (skewX*1000>>0)/1000 + ')' : '' )
                                    +( skewY ? 'skewY(' + (skewY*1000>>0)/1000 + ')' : '' )
                                    +( scale !== 1 ? 'scale(' + (scale*1000>>0)/1000 +')' : '' ) );
      }
    }

    // now prepare transform
    return parseTransformObject.call(this,v);
  }

  // returns an obect with current transform attribute value
  prepareStart.svgTransform = function(p,t) {
    var transformObject = {}, currentTransform = parseTransformString(this.element.getAttribute('transform'));
    for (var i in t) { transformObject[i] = i in currentTransform ? currentTransform[i] : (i==='scale'?1:0); } // find a value in current attribute value or add a default value
    return transformObject;
  }

  crossCheck.svgTransform = function() { // helper function that helps preserve current transform properties into the objects
    if (!this.options.rpr) return; // fix since 1.6.1 for fromTo() method
    var valuesStart = this.valuesStart.svgTransform, valuesEnd = this.valuesEnd.svgTransform,
      currentTransform = parseTransformObject.call(this, parseTransformString(this.element.getAttribute('transform')) );

    for ( var i in currentTransform ) { valuesStart[i] = currentTransform[i]; } // populate the valuesStart first

    // now try to determine the REAL translation
    var parentSVG = this.element.ownerSVGElement,
      newTransform = parentSVG.createSVGTransformFromMatrix(
        parentSVG.createSVGMatrix()
        .translate(-valuesStart.origin[0],-valuesStart.origin[1]) // - origin
        .translate('translate' in valuesStart ? valuesStart.translate[0] : 0,'translate' in valuesStart ? valuesStart.translate[1] : 0) // the current translate
        .rotate(valuesStart.rotate||0).skewX(valuesStart.skewX||0).skewY(valuesStart.skewY||0).scale(valuesStart.scale||1)// the other functions
        .translate(+valuesStart.origin[0],+valuesStart.origin[1]) // + origin
      );

    valuesStart.translate = [newTransform.matrix.e,newTransform.matrix.f]; // finally the translate we're looking for

    // copy existing and unused properties to the valuesEnd
    for ( var i in valuesStart) { if ( !(i in valuesEnd)) { valuesEnd[i] = valuesStart[i]; } }
  }

  return this;
}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* KUTE.js - The Light Tweening Engine
 * package - Attributes Plugin
 * desc - enables animation for color attributes and any numeric presentation attribute
 * by dnp_theme
 * Licensed under MIT-License
 */

(function (root,factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(26)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if(typeof module == 'object' && typeof require == 'function') {
    module.exports = factory(require('./kute.js'));
  } else if ( typeof root.KUTE !== 'undefined' ) {
    factory(root.KUTE);
  } else {
    throw new Error("Attributes Plugin require KUTE.js.");
  }
}(this, function (KUTE) {
  'use strict';

  var g = typeof global !== 'undefined' ? global : window, // connect to KUTE object and global
    K = KUTE, DOM = K.dom, prepareStart = K.prepareStart, parseProperty = K.parseProperty,
    trueColor = K.truC, trueDimension = K.truD, crossCheck = K.crossCheck,
    unit = g.Interpolate.unit, number = g.Interpolate.number, color = g.Interpolate.color;

  // here we go with the plugin
  var getCurrentValue = function(e,a){ return e.getAttribute(a); }, // get current attribute value
    svgColors = ['fill','stroke','stop-color'], attributes,
    replaceUppercase = function(a) {
      return a.replace(/[A-Z]/g, "-$&").toLowerCase();
    };

  prepareStart.attr = function(p,v){
    var attrStartValues = {};
    for (var a in v){
      var attribute = replaceUppercase(a).replace(/_+[a-z]+/,''),
        currentValue = getCurrentValue(this.element,attribute); // get the value for 'fill-opacity' not fillOpacity
      attrStartValues[attribute] = svgColors.indexOf(attribute) !== -1 ? (currentValue || 'rgba(0,0,0,0)') : (currentValue || (/opacity/i.test(a) ? 1 : 0));
    }
    return attrStartValues;
  };

  // process attributes object K.pp.attr(t[x])
  // and also register their render functions
  parseProperty.attr = function(a,o){
    if (!('attr' in DOM)) {
      DOM.attr = function(l,p,a,b,v) {
        for ( var o in b ){
          DOM.attributes[o](l,o,a[o],b[o],v);
        }
      }
      attributes = DOM.attributes = {}
    }

    var attributesObject = {};
    for ( var p in o ) {
      var prop = replaceUppercase(p), regex = /(%|[a-z]+)$/, cv = getCurrentValue(this.element,prop.replace(/_+[a-z]+/,''));
      if ( svgColors.indexOf(prop) === -1) {
        if ( cv !== null && regex.test(cv) ) {
          var prefix = trueDimension(cv).u || trueDimension(o[p]).u, s = /%/.test(prefix) ? '_percent' : '_'+prefix;
          if (!(prop+s in attributes)) {
            if (/%/.test(prefix)) {
              attributes[prop+s] = function(l,p,a,b,v) {
                var _p = _p || p.replace(s,'');
                l.setAttribute(_p, ((number(a.v,b.v,v) * 1000>>0)/1000) + b.u );
              }
            } else {
              attributes[prop+s] = function(l,p,a,b,v) {
                var _p = _p || p.replace(s,'');
                l.setAttribute(_p, ( (number(a.v,b.v,v)*1000>>0)/1000) + b.u );
              }
            }
          }
          attributesObject[prop+s] = trueDimension(o[p]);
        } else if ( !regex.test(o[p]) || cv === null || cv !== null && !regex.test(cv) ) {
          if (!(prop in attributes)) {
            if (/opacity/i.test(p)) {
              attributes[prop] = function(l,o,a,b,v) {
                l.setAttribute(o, (number(a,b,v) * 1000 >> 0) / 1000 );
              }
            } else {
              attributes[prop] = function(l,o,a,b,v) {
                l.setAttribute(o, (number(a,b,v) * 1000 >> 0) / 1000 );
              }
            }
          }
          attributesObject[prop] = parseFloat(o[p]);
        }
      } else {
        if (!(prop in attributes)) {
          attributes[prop] = function(l,u,a,b,v) {
            l.setAttribute(u, color(a,b,v,o.keepHex));
          }
        }
        attributesObject[prop] = trueColor(o[p]);
      }
    }
    return attributesObject;
  }

  return this;
}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PlayerFunctions;
function PlayerFunctions() {
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
    return function (gameColorButtonComponents) {
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
  };

  var canClearPattern = function canClearPattern(state) {
    return {
      clearPattern: function clearPattern() {
        state.pattern.length = 0;
      }
    };
  };

  return {
    canGenRandomStep: canGenRandomStep,
    canAddStepFromUser: canAddStepFromUser,
    canPlayBackPattern: canPlayBackPattern,
    canClearPattern: canClearPattern
  };
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "style.css";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./simonSound1.mp3": 85,
	"./simonSound2.mp3": 86,
	"./simonSound3.mp3": 87,
	"./simonSound4.mp3": 88
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 84;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sounds/simonSound1.mp3";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sounds/simonSound2.mp3";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sounds/simonSound3.mp3";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sounds/simonSound4.mp3";

/***/ })
/******/ ]);