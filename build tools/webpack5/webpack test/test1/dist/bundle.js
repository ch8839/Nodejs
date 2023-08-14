/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./test1/eat.js":
/*!**********************!*\
  !*** ./test1/eat.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const run = __webpack_require__(/*! ./run */ "./test1/run.js")

function eat() {
  console.log('eating')
  run()
}

module.exports = {
  eat,
}


/***/ }),

/***/ "./test1/run.js":
/*!**********************!*\
  !*** ./test1/run.js ***!
  \**********************/
/***/ ((module) => {

function run() {
  console.log('running')
}

module.exports = {
  run,
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./test1/app.js ***!
  \**********************/
const eat = __webpack_require__(/*! ./eat */ "./test1/eat.js")
const run = __webpack_require__(/*! ./run */ "./test1/run.js")

function main() {
  const list = [1, 2, 4]
  const cloneList = [...list]
  eat()
  run()

  const User = {
    name: 'Tom',
    getName: () => {
      return this.name
    },
  }

  return User
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map