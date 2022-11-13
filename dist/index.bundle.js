/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gravityScale\": () => (/* binding */ gravityScale),\n/* harmony export */   \"player\": () => (/* binding */ player),\n/* harmony export */   \"velocity\": () => (/* binding */ velocity)\n/* harmony export */ });\n/* harmony import */ var _inputListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputListener */ \"./src/inputListener.ts\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ \"./src/setup.ts\");\n/* harmony import */ var _sprites_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprites/Player */ \"./src/sprites/Player.ts\");\n/* harmony import */ var _sprites_Scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sprites/Scene */ \"./src/sprites/Scene.ts\");\n\r\n\r\n\r\n\r\nconst gravityScale = 0.2;\r\nconst velocity = 1.3;\r\nconst player = new _sprites_Player__WEBPACK_IMPORTED_MODULE_2__.Player({ position: { x: 30, y: 150 }, velocity: { x: 0, y: 0 }, scale: { width: 15, height: 22 } });\r\nconst scene = new _sprites_Scene__WEBPACK_IMPORTED_MODULE_3__.Scene({ position: { x: 0, y: 0 }, scale: { width: _setup__WEBPACK_IMPORTED_MODULE_1__.canvas.width, height: _setup__WEBPACK_IMPORTED_MODULE_1__.canvas.height } }, { texture: '../assets/map/test.png' });\r\nfunction update() {\r\n    window.requestAnimationFrame(update);\r\n    scene.update();\r\n    player.update();\r\n    player.velocity.x = 0;\r\n    if (_inputListener__WEBPACK_IMPORTED_MODULE_0__.input.a.pressed && _inputListener__WEBPACK_IMPORTED_MODULE_0__.lastKey === 'a')\r\n        player.velocity.x = -velocity;\r\n    else if (_inputListener__WEBPACK_IMPORTED_MODULE_0__.input.d.pressed && _inputListener__WEBPACK_IMPORTED_MODULE_0__.lastKey === 'd')\r\n        player.velocity.x = velocity;\r\n}\r\nupdate();\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/index.ts?");

/***/ }),

/***/ "./src/inputListener.ts":
/*!******************************!*\
  !*** ./src/inputListener.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"lastKey\": () => (/* binding */ lastKey)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.ts\");\n\r\nconst input = {\r\n    a: { pressed: false },\r\n    d: { pressed: false },\r\n    w: { pressed: false },\r\n    s: { pressed: false },\r\n};\r\nlet lastKey;\r\nwindow.onkeydown = e => {\r\n    switch (e.key) {\r\n        case \"a\":\r\n        case \"ArrowLeft\":\r\n            input.a.pressed = true;\r\n            lastKey = 'a';\r\n            break;\r\n        case \"d\":\r\n        case \"ArrowRight\":\r\n            input.d.pressed = true;\r\n            lastKey = 'd';\r\n            break;\r\n        case \"w\":\r\n        case \"ArrowUp\":\r\n            ___WEBPACK_IMPORTED_MODULE_0__.player.jump();\r\n            break;\r\n    }\r\n};\r\nwindow.onkeyup = e => {\r\n    switch (e.key) {\r\n        case \"a\":\r\n        case \"ArrowLeft\":\r\n            input.a.pressed = false;\r\n            break;\r\n        case \"d\":\r\n        case \"ArrowRight\":\r\n            input.d.pressed = false;\r\n            break;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/inputListener.ts?");

/***/ }),

/***/ "./src/scenes.ts":
/*!***********************!*\
  !*** ./src/scenes.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"colliders\": () => (/* binding */ colliders)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/setup.ts\");\n\r\nconst colliders = {\r\n    level0: [\r\n        { id: 0, left: 0, right: 8, top: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 72, bottom: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height },\r\n        { id: 1, left: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 8, right: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, top: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 46, bottom: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height },\r\n        { id: 2, left: 0, right: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, top: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 10, bottom: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height },\r\n        { id: 3, left: 204, right: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, top: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 60, bottom: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 46 },\r\n        { id: 4, left: 0, right: 32, top: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 76, bottom: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 68 },\r\n        { id: 5, left: 0, right: 136, top: 86, bottom: 90 },\r\n        { id: 6, left: 176, right: 208, top: 86, bottom: 90 },\r\n        { id: 7, left: 10, right: 30, top: 58, bottom: 90 },\r\n        { id: 8, left: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 68, right: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, top: 82, bottom: 96 }\r\n    ]\r\n};\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/scenes.ts?");

/***/ }),

/***/ "./src/setup.ts":
/*!**********************!*\
  !*** ./src/setup.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": () => (/* binding */ canvas),\n/* harmony export */   \"ctx\": () => (/* binding */ ctx)\n/* harmony export */ });\nconst canvas = document.querySelector('#canvas');\r\nconst ctx = canvas.getContext('2d');\r\ncanvas.width = 320;\r\ncanvas.height = 190;\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/setup.ts?");

/***/ }),

/***/ "./src/sprites/Player.ts":
/*!*******************************!*\
  !*** ./src/sprites/Player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.ts\");\n/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scenes */ \"./src/scenes.ts\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setup */ \"./src/setup.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\n\r\n\r\n\r\n\r\nclass Player {\r\n    constructor(transform) {\r\n        this.render = () => {\r\n            // ctx.fillStyle = 'green'\r\n            // ctx.fillRect(this.position.x, this.position.y, this.scale.width, this.scale.height)\r\n            _setup__WEBPACK_IMPORTED_MODULE_2__.ctx.drawImage(this.sprite, this.position.x, this.position.y, this.scale.width, this.scale.height);\r\n        };\r\n        this.horizontalCollisionDetection = () => {\r\n            _scenes__WEBPACK_IMPORTED_MODULE_1__.colliders.level0.map(collider => {\r\n                if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.onCollison)(this, collider)) {\r\n                    if (this.velocity.x > 0) {\r\n                        this.velocity.x = 0;\r\n                        this.position.x = collider.left - this.scale.width - 0.01;\r\n                    }\r\n                    if (this.velocity.x < 0) {\r\n                        this.velocity.x = 0;\r\n                        this.position.x = collider.right + 0.01;\r\n                    }\r\n                    // console.log('col -h')\r\n                }\r\n            });\r\n        };\r\n        this.verticalCollisionDetection = () => {\r\n            _scenes__WEBPACK_IMPORTED_MODULE_1__.colliders.level0.map(collider => {\r\n                if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.onCollison)(this, collider)) {\r\n                    if (this.velocity.y > 0) {\r\n                        this.velocity.y = 0;\r\n                        this.position.y = collider.top - this.scale.height - 0.1;\r\n                    }\r\n                    if (this.velocity.y < 0) {\r\n                        this.velocity.y = 0;\r\n                        this.position.y = collider.bottom + 0.01;\r\n                    }\r\n                    // console.log('col -v')\r\n                }\r\n            });\r\n        };\r\n        this.jump = () => { if (this.velocity.y === 0 || this.velocity.y === this.gravity)\r\n            this.velocity.y = -this.jumpHeight; };\r\n        this.scale = transform.scale;\r\n        this.position = transform.position;\r\n        this.velocity = transform.velocity;\r\n        this.gravity = ___WEBPACK_IMPORTED_MODULE_0__.gravityScale;\r\n        this.sprite = new Image();\r\n        this.sprite.src = '../assets/sprites/brucelee/bruce-lee.png';\r\n        this.jumpHeight = 2.5;\r\n    }\r\n    update() {\r\n        this.render();\r\n        this.position.x += this.velocity.x;\r\n        this.horizontalCollisionDetection();\r\n        this.applyGravity();\r\n        this.verticalCollisionDetection();\r\n        // console.log(player.velocity.y)\r\n    }\r\n    applyGravity() {\r\n        this.position.y += this.velocity.y;\r\n        this.velocity.y += this.gravity;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/sprites/Player.ts?");

/***/ }),

/***/ "./src/sprites/Scene.ts":
/*!******************************!*\
  !*** ./src/sprites/Scene.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scene\": () => (/* binding */ Scene)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../setup */ \"./src/setup.ts\");\n\r\nclass Scene {\r\n    constructor(transform, material) {\r\n        this.position = transform.position;\r\n        this.scale = transform.scale;\r\n        this.image = new Image();\r\n        this.image.src = material.texture;\r\n        this.texture = material.texture;\r\n    }\r\n    render() {\r\n        _setup__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height);\r\n    }\r\n    update() {\r\n        this.render();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/sprites/Scene.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onCollison\": () => (/* binding */ onCollison)\n/* harmony export */ });\nfunction onCollison(object, collider) {\r\n    return (object.position.y + object.scale.height >= collider.top && object.position.y <= collider.bottom\r\n        && object.position.x <= collider.right && object.position.x + object.scale.width >= collider.left);\r\n}\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/utils.ts?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;