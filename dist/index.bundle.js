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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentScene\": () => (/* binding */ currentScene),\n/* harmony export */   \"gravityScale\": () => (/* binding */ gravityScale),\n/* harmony export */   \"player\": () => (/* binding */ player),\n/* harmony export */   \"velocity\": () => (/* binding */ velocity)\n/* harmony export */ });\n/* harmony import */ var _inputListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputListener */ \"./src/inputListener.ts\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ \"./src/setup.ts\");\n/* harmony import */ var _sprites_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprites/Player */ \"./src/sprites/Player.ts\");\n/* harmony import */ var _sprites_Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sprites/Background */ \"./src/sprites/Background.ts\");\n\r\n\r\n\r\n\r\nconst gravityScale = 0.2;\r\nconst velocity = 1.3;\r\nlet currentScene = 0;\r\nconst player = new _sprites_Player__WEBPACK_IMPORTED_MODULE_2__.Player({ position: { x: 30, y: 150 }, velocity: { x: 0, y: 0 }, scale: { width: 15, height: 22 } }, {\r\n    idle: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/idle.png' },\r\n    walkLeft: { frameRate: 2, frameBuffer: 8, loop: true, imageSrc: '../assets/sprites/brucelee/walkLeft.png' },\r\n    walkRight: { frameRate: 2, frameBuffer: 8, loop: true, imageSrc: '../assets/sprites/brucelee/walkRight.png' }\r\n});\r\nconst scene = new _sprites_Background__WEBPACK_IMPORTED_MODULE_3__.Background({ position: { x: 0, y: 0 }, scale: { width: _setup__WEBPACK_IMPORTED_MODULE_1__.canvas.width, height: _setup__WEBPACK_IMPORTED_MODULE_1__.canvas.height } }, { texture: '../assets/map/level_0.png' });\r\nfunction update() {\r\n    window.requestAnimationFrame(update);\r\n    scene.update();\r\n    player.update();\r\n    // drawColliders()\r\n    player.velocity.x = 0;\r\n    if (_inputListener__WEBPACK_IMPORTED_MODULE_0__.input.a.pressed && _inputListener__WEBPACK_IMPORTED_MODULE_0__.lastKey === 'a') {\r\n        player.velocity.x = -velocity;\r\n        player.switchSprite('walkLeft');\r\n    }\r\n    else if (_inputListener__WEBPACK_IMPORTED_MODULE_0__.input.d.pressed && _inputListener__WEBPACK_IMPORTED_MODULE_0__.lastKey === 'd') {\r\n        player.velocity.x = velocity;\r\n        player.switchSprite('walkRight');\r\n    }\r\n}\r\nupdate();\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/index.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawColliders\": () => (/* binding */ drawColliders),\n/* harmony export */   \"levels\": () => (/* binding */ levels)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/setup.ts\");\n\r\nconst levels = [\r\n    {\r\n        id: 0, sprite: '../assets/map/level_0.png', colliders: [\r\n            { id: 0, left: 0, right: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, top: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 6, bottom: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height },\r\n            { id: 1, left: 0, right: 8, top: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 68, bottom: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height },\r\n            { id: 2, left: 0, right: 32, top: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 72, bottom: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 64 },\r\n            { id: 3, left: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 8, right: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, top: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 52, bottom: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height },\r\n            { id: 4, left: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 118, right: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, top: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 56, bottom: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 40 },\r\n            { id: 5, left: 0, right: 145, top: 76, bottom: 80 },\r\n            { id: 6, left: 168, right: 208, top: 76, bottom: 80 },\r\n            { id: 7, left: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 70, right: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, top: 72, bottom: 86 },\r\n            { id: 8, left: 10, right: 30, top: 48, bottom: 80 },\r\n            { id: 9, left: 0, right: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, top: 0, bottom: 0 },\r\n            { id: 9, left: 0, right: 0, top: 0, bottom: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height }, // left \r\n        ], lanterns: {}\r\n    }\r\n];\r\nconst drawColliders = () => {\r\n    levels[0].colliders.map(col => {\r\n        _setup__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = 'rgba(255,0,0,0.5)';\r\n        _setup__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(col.left, col.top, col.right, col.bottom);\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/scenes.ts?");

/***/ }),

/***/ "./src/setup.ts":
/*!**********************!*\
  !*** ./src/setup.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": () => (/* binding */ canvas),\n/* harmony export */   \"ctx\": () => (/* binding */ ctx)\n/* harmony export */ });\nconst canvas = document.querySelector('#canvas');\r\nconst ctx = canvas.getContext('2d');\r\nconst settings = { width: 320, height: 176 };\r\ncanvas.width = settings.width;\r\ncanvas.height = settings.height;\r\nconst bar = document.querySelector('#bar');\r\nbar.style.width = settings.width + 'px';\r\nconst score = '000000';\r\nconst top = '000000';\r\nconst falls = '00';\r\nconst data = ['1UP', score, 'TOP', top, 'FALLS', falls];\r\ndata.map(el => {\r\n    const div = document.createElement('div');\r\n    div.innerHTML = el;\r\n    bar.append(div);\r\n});\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/setup.ts?");

/***/ }),

/***/ "./src/sprites/Background.ts":
/*!***********************************!*\
  !*** ./src/sprites/Background.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Background\": () => (/* binding */ Background)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../setup */ \"./src/setup.ts\");\n\r\nclass Background {\r\n    constructor(transform, material) {\r\n        this.position = transform.position;\r\n        this.scale = transform.scale;\r\n        this.image = new Image();\r\n        this.image.onload = () => {\r\n            this.scale.width = this.image.width;\r\n            this.scale.height = this.image.height;\r\n        };\r\n        this.image.src = material.texture;\r\n    }\r\n    render() {\r\n        _setup__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height);\r\n        // ctx.drawImage(this.image, this.position.x, this.position.y)\r\n        // ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height)\r\n    }\r\n    update() {\r\n        this.render();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/sprites/Background.ts?");

/***/ }),

/***/ "./src/sprites/Player.ts":
/*!*******************************!*\
  !*** ./src/sprites/Player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.ts\");\n/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scenes */ \"./src/scenes.ts\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setup */ \"./src/setup.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sprite */ \"./src/sprites/Sprite.ts\");\n\r\n\r\n\r\n\r\n\r\nclass Player extends _Sprite__WEBPACK_IMPORTED_MODULE_4__.Sprite {\r\n    constructor(transform, animations) {\r\n        super(transform, { texture: '../assets/sprites/brucelee/idle.png' }, 1, animations);\r\n        this.horizontalCollisionDetection = () => {\r\n            _scenes__WEBPACK_IMPORTED_MODULE_1__.levels[0].colliders.map(collider => {\r\n                if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.onCollison)(this.hitbox, collider)) {\r\n                    if (this.velocity.x > 0) {\r\n                        // this.velocity.x = 0\r\n                        const offset = this.hitbox.position.x - this.position.x + this.hitbox.scale.width;\r\n                        this.position.x = collider.left - offset - 0.01;\r\n                    }\r\n                    if (this.velocity.x < -0) {\r\n                        // this.velocity.x = 0\r\n                        const offset = this.hitbox.position.x - this.position.x;\r\n                        this.position.x = collider.right - offset + 0.01;\r\n                    }\r\n                }\r\n            });\r\n        };\r\n        this.verticalCollisionDetection = () => {\r\n            _scenes__WEBPACK_IMPORTED_MODULE_1__.levels[0].colliders.map(collider => {\r\n                if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.onCollison)(this.hitbox, collider)) {\r\n                    if (this.velocity.y > 0) {\r\n                        this.velocity.y = 0;\r\n                        const offset = this.hitbox.position.y - this.position.y + this.hitbox.scale.height;\r\n                        this.position.y = collider.top - offset - 0.1;\r\n                    }\r\n                    if (this.velocity.y < 0) {\r\n                        this.velocity.y = 0;\r\n                        const offset = this.hitbox.position.y - this.position.y;\r\n                        this.position.y = collider.bottom - offset + 0.1;\r\n                    }\r\n                }\r\n            });\r\n        };\r\n        this.updateHitbox = () => {\r\n            this.hitbox = {\r\n                position: { x: this.position.x + 1, y: this.position.y },\r\n                scale: { width: 16, height: 21 }\r\n            };\r\n        };\r\n        this.jump = () => {\r\n            if (this.velocity.y === 0 || this.velocity.y === this.gravity) {\r\n                this.velocity.y = -this.jumpHeight;\r\n            }\r\n        };\r\n        this.switchSprite = (sprite) => {\r\n            if (this.image === this.animations[sprite].image)\r\n                return;\r\n            this.currentFrame = 0;\r\n            this.image = this.animations[sprite].image;\r\n            this.frameRate = this.animations[sprite].frameRate;\r\n            this.frameBuffer = this.animations[sprite].frameBuffer;\r\n        };\r\n        this.drawHitbox = () => {\r\n            _setup__WEBPACK_IMPORTED_MODULE_2__.ctx.fillStyle = 'rgba(255,0,0,0.5)';\r\n            _setup__WEBPACK_IMPORTED_MODULE_2__.ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.scale.width, this.hitbox.scale.height);\r\n        };\r\n        this.scale = transform.scale;\r\n        this.position = transform.position;\r\n        this.velocity = transform.velocity;\r\n        this.gravity = ___WEBPACK_IMPORTED_MODULE_0__.gravityScale;\r\n        this.jumpHeight = 2.2;\r\n        this.sprite = new Image();\r\n        this.sprite.src = '../assets/sprites/brucelee/brucelee-anim.png';\r\n    }\r\n    update() {\r\n        this.render();\r\n        this.position.x += this.velocity.x;\r\n        this.updateHitbox();\r\n        this.horizontalCollisionDetection();\r\n        this.applyGravity();\r\n        this.updateHitbox();\r\n        // this.drawHitbox()\r\n        this.verticalCollisionDetection();\r\n        console.log(this.position);\r\n    }\r\n    applyGravity() {\r\n        this.position.y += this.velocity.y;\r\n        this.velocity.y += this.gravity;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/sprites/Player.ts?");

/***/ }),

/***/ "./src/sprites/Sprite.ts":
/*!*******************************!*\
  !*** ./src/sprites/Sprite.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sprite\": () => (/* binding */ Sprite)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../setup */ \"./src/setup.ts\");\n\r\nclass Sprite {\r\n    constructor(transform, material, frameRate = 1, animations) {\r\n        this.position = transform.position;\r\n        this.scale = transform.scale;\r\n        this.image = new Image();\r\n        this.image.onload = () => {\r\n            this.scale.width = this.image.width / frameRate;\r\n            this.scale.height = this.image.height;\r\n        };\r\n        this.image.src = material.texture;\r\n        // animation\r\n        this.animations = animations;\r\n        this.frameRate = frameRate;\r\n        this.currentFrame = 0;\r\n        this.elapsedFrames = 0;\r\n        this.frameBuffer = 8;\r\n        if (this.animations) {\r\n            for (let key in this.animations) {\r\n                const image = new Image();\r\n                image.src = this.animations[key].imageSrc;\r\n                this.animations[key].image = image;\r\n            }\r\n        }\r\n    }\r\n    render() {\r\n        const cropbox = {\r\n            position: { x: this.scale.width * this.currentFrame, y: 0 },\r\n            width: this.scale.width, height: this.scale.height\r\n        };\r\n        _setup__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, cropbox.position.x, cropbox.position.y, cropbox.width, cropbox.height, this.position.x, this.position.y, this.scale.width, this.scale.height);\r\n        this.anim();\r\n        // ctx.drawImage(this.image, this.position.x, this.position.y)\r\n        // ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height)\r\n    }\r\n    update() {\r\n        this.render();\r\n    }\r\n    anim() {\r\n        this.elapsedFrames++;\r\n        if (this.elapsedFrames % this.frameBuffer === 0) {\r\n            (this.currentFrame < this.frameRate - 1) ? this.currentFrame++ : this.currentFrame = 0;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/sprites/Sprite.ts?");

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