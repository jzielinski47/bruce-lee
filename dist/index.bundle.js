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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentScene\": () => (/* binding */ currentScene),\n/* harmony export */   \"gravityScale\": () => (/* binding */ gravityScale),\n/* harmony export */   \"mem\": () => (/* binding */ mem),\n/* harmony export */   \"player\": () => (/* binding */ player),\n/* harmony export */   \"setCurrentScene\": () => (/* binding */ setCurrentScene),\n/* harmony export */   \"velocity\": () => (/* binding */ velocity)\n/* harmony export */ });\n/* harmony import */ var _inputListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputListener */ \"./src/inputListener.ts\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ \"./src/setup.ts\");\n/* harmony import */ var _sprites_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprites/Player */ \"./src/sprites/Player.ts\");\n/* harmony import */ var _sprites_Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sprites/Background */ \"./src/sprites/Background.ts\");\n/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes */ \"./src/scenes.ts\");\n/* harmony import */ var _sprites_Lantern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sprites/Lantern */ \"./src/sprites/Lantern.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst gravityScale = 0.1;\r\nconst velocity = 1.3;\r\nlet currentScene = 0;\r\nconst setCurrentScene = (num) => currentScene = num;\r\nconst player = new _sprites_Player__WEBPACK_IMPORTED_MODULE_2__.Player({ position: { x: 30, y: 150 }, velocity: { x: 0, y: 0 }, scale: { width: 15, height: 22 } }, {\r\n    idleRight: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/idleRight.png' },\r\n    idleLeft: { frameRate: 1, frameBuffer: 2, loop: false, imageSrc: '../assets/sprites/brucelee/idleLeft.png' },\r\n    walkLeft: { frameRate: 2, frameBuffer: 8, loop: false, imageSrc: '../assets/sprites/brucelee/walkLeft.png' },\r\n    walkRight: { frameRate: 2, frameBuffer: 8, loop: false, imageSrc: '../assets/sprites/brucelee/walkRight.png' },\r\n    jump: { frameRate: 3, frameBuffer: 8, loop: true, imageSrc: '../assets/sprites/brucelee/jump.png' },\r\n    jumpLeft: { frameRate: 2, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/brucelee/jumpLeft.png' },\r\n    jumpRight: { frameRate: 2, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/brucelee/jumpRight.png' },\r\n    fall: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/fall.png' },\r\n    climb1: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/climb1.png' },\r\n    climb2: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/climb2.png' },\r\n});\r\nconst scene = new _sprites_Background__WEBPACK_IMPORTED_MODULE_3__.Background({ position: { x: 0, y: 0 }, scale: { width: _setup__WEBPACK_IMPORTED_MODULE_1__.canvas.width, height: _setup__WEBPACK_IMPORTED_MODULE_1__.canvas.height } });\r\nconst mem = { lanterns: [] };\r\n_scenes__WEBPACK_IMPORTED_MODULE_4__.levels[currentScene].lanterns.map(lantern => {\r\n    const lanternObject = new _sprites_Lantern__WEBPACK_IMPORTED_MODULE_5__.Latnern(lantern.id, { position: { x: lantern.x, y: lantern.y }, scale: { width: 6, height: 10 } });\r\n    mem.lanterns.push(lanternObject);\r\n});\r\nfunction update() {\r\n    window.requestAnimationFrame(update);\r\n    // console.log(player.updateLevel)\r\n    if (player.updateLevel)\r\n        resetScene();\r\n    scene.update();\r\n    player.update();\r\n    mem.lanterns.map(lantern => lantern.update());\r\n    (0,_scenes__WEBPACK_IMPORTED_MODULE_4__.drawColliders)(currentScene);\r\n    player.velocity.x = 0;\r\n    if (_inputListener__WEBPACK_IMPORTED_MODULE_0__.input.a.pressed && _inputListener__WEBPACK_IMPORTED_MODULE_0__.lastKey === 'a') {\r\n        player.velocity.x = -velocity;\r\n        player.switchSprite('walkLeft');\r\n    }\r\n    else if (_inputListener__WEBPACK_IMPORTED_MODULE_0__.input.d.pressed && _inputListener__WEBPACK_IMPORTED_MODULE_0__.lastKey === 'd') {\r\n        player.velocity.x = velocity;\r\n        player.switchSprite('walkRight');\r\n    }\r\n    if (player.velocity.y < 0 && _inputListener__WEBPACK_IMPORTED_MODULE_0__.input.a.pressed && _inputListener__WEBPACK_IMPORTED_MODULE_0__.lastKey === 'a') {\r\n        player.switchSprite('jumpLeft');\r\n    }\r\n    else if (player.velocity.y < 0 && _inputListener__WEBPACK_IMPORTED_MODULE_0__.input.d.pressed && _inputListener__WEBPACK_IMPORTED_MODULE_0__.lastKey === 'd') {\r\n        player.switchSprite('jumpRight');\r\n    }\r\n    else if (player.velocity.y < 0) {\r\n        player.switchSprite('fall');\r\n    }\r\n    else if (player.velocity.y > gravityScale + 0.3) {\r\n        player.switchSprite('fall');\r\n    }\r\n    if (player.triggers.onLadder && player.climbAnimVariant === 1) {\r\n        player.switchSprite('climb2');\r\n    }\r\n    else if (player.triggers.onLadder && player.climbAnimVariant === 2) {\r\n        player.switchSprite('climb1');\r\n    }\r\n}\r\nfunction resetScene() {\r\n    currentScene = player.levelToLoad;\r\n    console.warn('change');\r\n    player.updateLevel = false;\r\n    mem.lanterns = [];\r\n    _scenes__WEBPACK_IMPORTED_MODULE_4__.levels[currentScene].lanterns.map(lantern => {\r\n        const lanternObject = new _sprites_Lantern__WEBPACK_IMPORTED_MODULE_5__.Latnern(lantern.id, { position: { x: lantern.x, y: lantern.y }, scale: { width: 6, height: 10 } });\r\n        mem.lanterns.push(lanternObject);\r\n    });\r\n}\r\nupdate();\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/index.ts?");

/***/ }),

/***/ "./src/inputListener.ts":
/*!******************************!*\
  !*** ./src/inputListener.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"lastKey\": () => (/* binding */ lastKey)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.ts\");\n\r\nconst input = {\r\n    a: { pressed: false },\r\n    d: { pressed: false },\r\n    w: { pressed: false },\r\n    s: { pressed: false },\r\n};\r\nlet lastKey;\r\nwindow.onkeydown = e => {\r\n    switch (e.key) {\r\n        case \"a\":\r\n        case \"ArrowLeft\":\r\n            input.a.pressed = true;\r\n            lastKey = 'a';\r\n            ___WEBPACK_IMPORTED_MODULE_0__.player.climbAnimVariant = (___WEBPACK_IMPORTED_MODULE_0__.player.climbAnimVariant === 1) ? 2 : 1;\r\n            break;\r\n        case \"d\":\r\n        case \"ArrowRight\":\r\n            input.d.pressed = true;\r\n            lastKey = 'd';\r\n            ___WEBPACK_IMPORTED_MODULE_0__.player.climbAnimVariant = (___WEBPACK_IMPORTED_MODULE_0__.player.climbAnimVariant === 1) ? 2 : 1;\r\n            break;\r\n        case \"w\":\r\n        case \"ArrowUp\":\r\n            ___WEBPACK_IMPORTED_MODULE_0__.player.jump();\r\n            break;\r\n        case \"s\":\r\n        case \"ArrowDown\":\r\n            ___WEBPACK_IMPORTED_MODULE_0__.player.down();\r\n            break;\r\n    }\r\n};\r\nwindow.onkeyup = e => {\r\n    switch (e.key) {\r\n        case \"a\":\r\n        case \"ArrowLeft\":\r\n            input.a.pressed = false;\r\n            break;\r\n        case \"d\":\r\n        case \"ArrowRight\":\r\n            input.d.pressed = false;\r\n            break;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/inputListener.ts?");

/***/ }),

/***/ "./src/scenes.ts":
/*!***********************!*\
  !*** ./src/scenes.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawColliders\": () => (/* binding */ drawColliders),\n/* harmony export */   \"levels\": () => (/* binding */ levels)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/setup.ts\");\n\r\n// { id: 0, player: true, ninja: false, green: false }\r\nconst levels = [\r\n    {\r\n        id: 0, sprite: '../assets/map/level_0.png', colliders: [\r\n            { id: 0, name: 'floor', x: 0, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 6, width: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, height: 6 },\r\n            { id: 1, name: 'fence', x: 0, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 68, width: 8, height: 68 },\r\n            { id: 2, name: 'fence', x: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 8, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 42, width: 8, height: 36 },\r\n            { id: 3, name: 'platform', x: 0, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 72, width: 32, height: 8 },\r\n            { id: 4, name: 'platform', x: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 118, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 56, width: 118, height: 14 },\r\n            { id: 5, name: 'platform', x: 0, y: 76, width: 136, height: 4 },\r\n            { id: 6, name: 'platform', x: 176, y: 76, width: 32, height: 4 },\r\n            { id: 7, name: 'platform', x: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 70, y: 72, width: 70, height: 16 },\r\n            { id: 8, name: 'prop', x: 10, y: 48, width: 20, height: 32 },\r\n            { id: 9, name: 'border-top', x: 0, y: 0, width: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, height: 0 },\r\n            { id: 10, name: 'border-left', x: 0, y: 0, width: 0, height: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height }\r\n        ], lanterns: [\r\n            { id: 0, name: 'lantern', x: 18, y: 134, width: 6, height: 10, collected: false }\r\n        ], triggers: [\r\n            { id: 0, name: 'ladder', x: 144, y: 80, width: 24, height: 58, mode: 'ladder' },\r\n            { id: 1, name: 'loader', x: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, y: 0, width: 0, height: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height, mode: 'loader', level: 1, dir: 'right' }\r\n        ]\r\n    },\r\n    {\r\n        id: 1, sprite: '../assets/map/level_1.png', colliders: [\r\n            { id: 0, name: 'floor', x: 0, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 6, width: 150, height: 6 },\r\n            { id: 1, name: 'floor', x: 170, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 6, width: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 170, height: 6 },\r\n            { id: 2, name: 'fence', x: 0, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 42, width: 8, height: 36 },\r\n            { id: 3, name: 'fence', x: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 16, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 42, width: 8, height: 36 },\r\n            { id: 4, name: 'fence', x: 304, y: 86, width: 8, height: 36 },\r\n            { id: 5, name: 'platform', x: 0, y: 120, width: 126, height: 14 },\r\n            { id: 6, name: 'platform', x: 194, y: 120, width: 126, height: 14 },\r\n            { id: 7, name: 'platform', x: 0, y: 72, width: 78, height: 14 },\r\n            { id: 8, name: 'platform', x: 120, y: 76, width: 24, height: 4 },\r\n            { id: 9, name: 'platform', x: 176, y: 76, width: 24, height: 4 },\r\n            { id: 7, name: 'platform', x: 242, y: 72, width: 78, height: 14 },\r\n        ], lanterns: [], triggers: [\r\n            { id: 0, name: 'ladder', x: 152, y: 80, width: 16, height: 8, mode: 'ladder' },\r\n            { id: 1, name: 'ladder', x: 152, y: 114, width: 16, height: 26, mode: 'ladder' },\r\n            { id: 3, name: 'loader', dir: 'left', x: 0, y: 0, width: 0, height: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height, mode: 'loader', level: 0 },\r\n            { id: 4, name: 'loader', dir: 'right', x: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, y: 0, width: 0, height: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height, mode: 'loader', level: 2 },\r\n            { id: 5, name: 'loader', dir: 'down', x: 0, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height, width: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, height: 20, mode: 'loader', level: 3, hatch: { x: 56, y: 0, width: 32, heigth: 16 } },\r\n            { id: 6, name: 'door', x: 152, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 10, width: 20 - 4, height: 10, mode: 'door' },\r\n        ]\r\n    },\r\n    {\r\n        id: 2, sprite: '../assets/map/level_2.png', colliders: [\r\n            { id: 0, name: 'floor', x: 0, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 6, width: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, height: 6 },\r\n            { id: 1, name: 'fence', x: 0, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 42, width: 8, height: 36 },\r\n            { id: 1, name: 'fence', x: 0, y: 86, width: 8, height: 36 },\r\n            { id: 2, name: 'platform', x: 0, y: 120, width: 46, height: 14 },\r\n            { id: 2, name: 'platform', x: 74, y: 120, width: 52, height: 14 },\r\n            { id: 2, name: 'platform', x: 170, y: 120, width: 52, height: 14 },\r\n            { id: 2, name: 'platform', x: 0, y: 72, width: 80, height: 14 },\r\n            { id: 2, name: 'weird-platform', x: 80, y: 74, width: 24, height: 6 },\r\n            { id: 2, name: 'platform', x: 178, y: 72, width: 36, height: 14 },\r\n            { id: 2, name: 'fence', x: 248, y: 80, width: 8, height: 48 },\r\n            { id: 2, name: 'fence', x: 248, y: 80, width: 8, height: 48 },\r\n            { id: 2, name: 'fence', x: 240, y: 74, width: 80, height: 6 },\r\n            { id: 2, name: 'fence', x: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 8, y: 80, width: 8, height: 48 },\r\n            { id: 2, name: 'fence', x: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 8, y: 80 + 48, width: 8, height: 48 },\r\n            { id: 2, name: 'prop', x: 274, y: 48, width: 20, height: 32 },\r\n        ], lanterns: [], triggers: [\r\n            { id: 0, name: 'ladder', x: 136, y: 78, width: 24, height: 60, mode: 'ladder' },\r\n            { id: 0, name: 'loader', dir: 'left', x: 0, y: 0, width: 0, height: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height, mode: 'loader', level: 1 },\r\n        ]\r\n    },\r\n    {\r\n        id: 3, sprite: '../assets/map/level_3.png', colliders: [\r\n            { id: 0, name: 'platform', x: 32, y: 56, width: 236, height: 6 },\r\n            { id: 0, name: 'platform', x: 8, y: 104, width: 204, height: 6 },\r\n            { id: 0, name: 'floor', x: 0, y: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 8, width: _setup__WEBPACK_IMPORTED_MODULE_0__.canvas.width, height: 8 },\r\n        ], lanterns: [], triggers: []\r\n    }\r\n];\r\nconst drawColliders = (num) => {\r\n    levels[num].colliders.map(col => {\r\n        _setup__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = 'rgba(0,255,0,0.5)';\r\n        _setup__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(col.x, col.y, col.width, col.height);\r\n    });\r\n    levels[num].triggers.map(col => {\r\n        _setup__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = 'rgba(0,0,255,0.5)';\r\n        _setup__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(col.x, col.y, col.width, col.height);\r\n    });\r\n    levels[num].lanterns.map(col => {\r\n        if (!col.collected) {\r\n            _setup__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = 'rgba(255,0,0,0.5)';\r\n            _setup__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(col.x, col.y, col.width, col.height);\r\n        }\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/scenes.ts?");

/***/ }),

/***/ "./src/setup.ts":
/*!**********************!*\
  !*** ./src/setup.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": () => (/* binding */ canvas),\n/* harmony export */   \"ctx\": () => (/* binding */ ctx),\n/* harmony export */   \"stats\": () => (/* binding */ stats),\n/* harmony export */   \"updateStats\": () => (/* binding */ updateStats)\n/* harmony export */ });\nconst canvas = document.querySelector('#canvas');\r\nconst ctx = canvas.getContext('2d');\r\nconst settings = { width: 320, height: 176 };\r\ncanvas.width = settings.width;\r\ncanvas.height = settings.height;\r\nconst bar = document.querySelector('#bar');\r\nbar.style.width = settings.width + 'px';\r\nconst stats = { score: 420, top: 69, falls: 4 };\r\nlet data = ['1UP', resetZeros(stats.score, 6), 'TOP', resetZeros(stats.top, 6), 'FALLS', resetZeros(stats.falls, 2)];\r\ndata.map(el => {\r\n    const div = document.createElement('div');\r\n    div.innerHTML = el;\r\n    bar.append(div);\r\n});\r\nfunction updateStats() {\r\n    bar.innerHTML = '';\r\n    let data = ['1UP', resetZeros(stats.score, 6), 'TOP', resetZeros(stats.top, 6), 'FALLS', resetZeros(stats.falls, 2)];\r\n    data.map(el => {\r\n        const div = document.createElement('div');\r\n        div.innerHTML = el;\r\n        bar.append(div);\r\n    });\r\n}\r\nfunction resetZeros(num, max) {\r\n    let string = '';\r\n    if (num.toString().length < max) {\r\n        for (let i = 0; i < max - num.toString().length; i++) {\r\n            string += '0';\r\n        }\r\n    }\r\n    string += num.toString();\r\n    return string;\r\n}\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/setup.ts?");

/***/ }),

/***/ "./src/sprites/Background.ts":
/*!***********************************!*\
  !*** ./src/sprites/Background.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Background\": () => (/* binding */ Background)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.ts\");\n/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scenes */ \"./src/scenes.ts\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setup */ \"./src/setup.ts\");\n\r\n\r\n\r\nclass Background {\r\n    constructor(transform) {\r\n        this.position = transform.position;\r\n        this.scale = transform.scale;\r\n        this.image = new Image();\r\n        this.image.onload = () => {\r\n            this.scale.width = this.image.width;\r\n            this.scale.height = this.image.height;\r\n        };\r\n        this.image.src = _scenes__WEBPACK_IMPORTED_MODULE_1__.levels[___WEBPACK_IMPORTED_MODULE_0__.currentScene].sprite;\r\n    }\r\n    render() {\r\n        _setup__WEBPACK_IMPORTED_MODULE_2__.ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height);\r\n    }\r\n    update() {\r\n        this.render();\r\n        this.image.src = _scenes__WEBPACK_IMPORTED_MODULE_1__.levels[___WEBPACK_IMPORTED_MODULE_0__.currentScene].sprite;\r\n        // console.error(currentScene)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/sprites/Background.ts?");

/***/ }),

/***/ "./src/sprites/Lantern.ts":
/*!********************************!*\
  !*** ./src/sprites/Lantern.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Latnern\": () => (/* binding */ Latnern)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.ts\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../setup */ \"./src/setup.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprite */ \"./src/sprites/Sprite.ts\");\n\r\n\r\n\r\n\r\nclass Latnern extends _Sprite__WEBPACK_IMPORTED_MODULE_3__.Sprite {\r\n    constructor(id, transform) {\r\n        super(transform, { texture: '../assets/sprites/lantern/lantern.png' }, 3, { idle: { frameRate: 3, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/lantern/lantern.png' } });\r\n        this.id = id;\r\n        this.scale = transform.scale;\r\n        this.position = transform.position;\r\n        this.collected = false;\r\n    }\r\n    update() {\r\n        if (!this.collected)\r\n            this.render();\r\n        this.onCollect();\r\n    }\r\n    onCollect() {\r\n        if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.refinedOnCollison)(this, ___WEBPACK_IMPORTED_MODULE_0__.player)) {\r\n            this.collected = true;\r\n            _setup__WEBPACK_IMPORTED_MODULE_1__.stats.score += 100;\r\n            (0,_setup__WEBPACK_IMPORTED_MODULE_1__.updateStats)();\r\n            ___WEBPACK_IMPORTED_MODULE_0__.mem.lanterns = ___WEBPACK_IMPORTED_MODULE_0__.mem.lanterns.filter(lant => lant.id !== this.id);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/sprites/Lantern.ts?");

/***/ }),

/***/ "./src/sprites/Player.ts":
/*!*******************************!*\
  !*** ./src/sprites/Player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.ts\");\n/* harmony import */ var _inputListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputListener */ \"./src/inputListener.ts\");\n/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scenes */ \"./src/scenes.ts\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setup */ \"./src/setup.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sprite */ \"./src/sprites/Sprite.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Player extends _Sprite__WEBPACK_IMPORTED_MODULE_5__.Sprite {\r\n    constructor(transform, animations) {\r\n        super(transform, { texture: '../assets/sprites/brucelee/idleRight.png' }, 1, animations);\r\n        this.horizontalCollisionDetection = () => {\r\n            _scenes__WEBPACK_IMPORTED_MODULE_2__.levels[___WEBPACK_IMPORTED_MODULE_0__.currentScene].colliders.map(collider => {\r\n                if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.onCollison)(this.hitbox, collider)) {\r\n                    if (this.velocity.x > 0) {\r\n                        // this.velocity.x = 0\r\n                        const offset = this.hitbox.position.x - this.position.x + this.hitbox.scale.width;\r\n                        this.position.x = collider.x - offset - 0.01;\r\n                    }\r\n                    if (this.velocity.x < -0) {\r\n                        // this.velocity.x = 0\r\n                        const offset = this.hitbox.position.x - this.position.x;\r\n                        this.position.x = (collider.x + collider.width) - offset + 0.01;\r\n                    }\r\n                    console.log('player collides with ' + collider.name);\r\n                }\r\n            });\r\n        };\r\n        this.verticalCollisionDetection = () => {\r\n            _scenes__WEBPACK_IMPORTED_MODULE_2__.levels[___WEBPACK_IMPORTED_MODULE_0__.currentScene].colliders.map(collider => {\r\n                if (!this.updateLevel) {\r\n                    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.onCollison)(this.hitbox, collider)) {\r\n                        if (this.velocity.y > 0) {\r\n                            this.velocity.y = 0;\r\n                            const offset = this.hitbox.position.y - this.position.y + this.hitbox.scale.height;\r\n                            this.position.y = collider.y - offset - 0.1;\r\n                        }\r\n                        if (this.velocity.y < 0) {\r\n                            this.velocity.y = 0;\r\n                            const offset = this.hitbox.position.y - this.position.y;\r\n                            this.position.y = (collider.y + collider.height) - offset + 0.1;\r\n                        }\r\n                        console.log('player collides with ' + collider.name);\r\n                    }\r\n                }\r\n            });\r\n        };\r\n        this.onTriggerEnter = () => {\r\n            if (_scenes__WEBPACK_IMPORTED_MODULE_2__.levels[___WEBPACK_IMPORTED_MODULE_0__.currentScene].triggers) {\r\n                _scenes__WEBPACK_IMPORTED_MODULE_2__.levels[___WEBPACK_IMPORTED_MODULE_0__.currentScene].triggers.map(trigger => {\r\n                    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.onCollison)(this.hitbox, trigger)) {\r\n                        switch (trigger.mode) {\r\n                            case 'ladder':\r\n                                this.triggers.onLadder = true;\r\n                                break;\r\n                            case 'loader':\r\n                                this.levelToLoad = trigger.level;\r\n                                this.updateLevel = true;\r\n                                this.velocity.x = 0;\r\n                                this.velocity.y = 0;\r\n                                switch (trigger.dir) {\r\n                                    case 'right':\r\n                                        this.position.x = 0.1;\r\n                                        this.position.y -= this.gravity / 2;\r\n                                        break;\r\n                                    case 'left':\r\n                                        this.position.x = _setup__WEBPACK_IMPORTED_MODULE_3__.canvas.width - this.scale.width - 0.1;\r\n                                        this.position.y -= this.gravity / 2;\r\n                                        break;\r\n                                    case 'down':\r\n                                        this.position.x = (trigger.hatch.x + (trigger.hatch.width / 2) - (this.scale.width / 2));\r\n                                        this.position.y = 0;\r\n                                }\r\n                                break;\r\n                            case 'door':\r\n                                break;\r\n                        }\r\n                    }\r\n                });\r\n            }\r\n        };\r\n        this.checkForLaterns = () => {\r\n            _scenes__WEBPACK_IMPORTED_MODULE_2__.levels[___WEBPACK_IMPORTED_MODULE_0__.currentScene].lanterns.map(lantern => {\r\n                if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.onCollison)(this.hitbox, lantern)) {\r\n                    if (!lantern.collected) {\r\n                        console.log('collected ' + lantern.name + ' ' + lantern.id);\r\n                    }\r\n                    lantern.collected = true;\r\n                }\r\n                // console.log(lattern)\r\n            });\r\n        };\r\n        this.updateHitbox = () => {\r\n            this.hitbox = {\r\n                position: { x: this.position.x + 1, y: this.position.y },\r\n                scale: { width: 16, height: 21 }\r\n            };\r\n        };\r\n        this.jump = () => {\r\n            if ((this.velocity.y === 0 || this.velocity.y === this.gravity) && !this.triggers.onLadder) {\r\n                this.velocity.y = -this.jumpHeight;\r\n            }\r\n            // this.velocity.y = -this.jumpHeight // flying\r\n            if (this.triggers.onLadder) {\r\n                if (this.velocity.y === 0) {\r\n                    this.velocity.y = -this.climbSpeed;\r\n                    // console.error(this.velocity.y)\r\n                    this.climbAnimVariant = (this.climbAnimVariant === 1) ? 2 : 1;\r\n                }\r\n            }\r\n        };\r\n        this.down = () => {\r\n            if (this.triggers.onLadder) {\r\n                this.velocity.y = this.climbSpeed;\r\n                // console.error(this.velocity.y)\r\n                this.climbAnimVariant = (this.climbAnimVariant === 1) ? 2 : 1;\r\n            }\r\n            // console.log('down');\r\n        };\r\n        this.switchSprite = (sprite) => {\r\n            if (this.image === this.animations[sprite].image || !this.loaded)\r\n                return;\r\n            // this.currentFrame = 0\r\n            this.image = this.animations[sprite].image;\r\n            this.frameRate = this.animations[sprite].frameRate;\r\n            this.frameBuffer = this.animations[sprite].frameBuffer;\r\n        };\r\n        this.drawHitbox = () => {\r\n            _setup__WEBPACK_IMPORTED_MODULE_3__.ctx.fillStyle = 'rgba(255,0,0,0.5)';\r\n            _setup__WEBPACK_IMPORTED_MODULE_3__.ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.scale.width, this.hitbox.scale.height);\r\n        };\r\n        this.applyLadderMovement = () => {\r\n            if (this.velocity.y < 0) {\r\n                // console.warn(this.velocity.y)\r\n                this.position.y += this.velocity.y;\r\n                this.velocity.y = 0;\r\n            }\r\n            else if (this.velocity.y > this.gravity) {\r\n                // console.warn(this.velocity.y)\r\n                this.position.y += this.velocity.y;\r\n                this.velocity.y = 0;\r\n            }\r\n        };\r\n        this.scale = transform.scale;\r\n        this.position = transform.position;\r\n        this.velocity = transform.velocity;\r\n        this.gravity = ___WEBPACK_IMPORTED_MODULE_0__.gravityScale;\r\n        // this.jumpHeight = 2.5\r\n        this.jumpHeight = 1.8;\r\n        this.climbSpeed = 4;\r\n        this.sprite = new Image();\r\n        this.sprite.src = '../assets/sprites/brucelee/brucelee-anim.png';\r\n        this.triggers = {\r\n            onLadder: false,\r\n        };\r\n        this.climbAnimVariant = 1;\r\n        this.climbCooldown = 1000;\r\n        this.levelToLoad = ___WEBPACK_IMPORTED_MODULE_0__.currentScene;\r\n        this.updateLevel = false;\r\n        this.lastPos = { x: this.position.x, y: this.position.y };\r\n    }\r\n    update() {\r\n        this.render();\r\n        this.position.x += this.velocity.x;\r\n        if (___WEBPACK_IMPORTED_MODULE_0__.player.velocity.x === 0 && _inputListener__WEBPACK_IMPORTED_MODULE_1__.lastKey === 'd') {\r\n            this.switchSprite('idleRight');\r\n        }\r\n        if (___WEBPACK_IMPORTED_MODULE_0__.player.velocity.x === 0 && _inputListener__WEBPACK_IMPORTED_MODULE_1__.lastKey === 'a') {\r\n            this.switchSprite('idleLeft');\r\n        }\r\n        this.updateHitbox();\r\n        this.triggers.onLadder = false;\r\n        this.onTriggerEnter();\r\n        this.checkForLaterns();\r\n        this.updateHitbox();\r\n        this.horizontalCollisionDetection();\r\n        if (this.triggers.onLadder) {\r\n            this.applyLadderMovement();\r\n        }\r\n        else {\r\n            this.applyGravity();\r\n        }\r\n        this.updateHitbox();\r\n        // this.drawHitbox()\r\n        this.verticalCollisionDetection();\r\n    }\r\n    applyGravity() {\r\n        this.position.y += this.velocity.y;\r\n        this.velocity.y += this.gravity;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/sprites/Player.ts?");

/***/ }),

/***/ "./src/sprites/Sprite.ts":
/*!*******************************!*\
  !*** ./src/sprites/Sprite.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sprite\": () => (/* binding */ Sprite)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../setup */ \"./src/setup.ts\");\n\r\nclass Sprite {\r\n    constructor(transform, material, frameRate = 1, animations) {\r\n        this.position = transform.position;\r\n        this.scale = transform.scale;\r\n        this.loaded = false;\r\n        this.image = new Image();\r\n        this.image.onload = () => {\r\n            this.scale.width = this.image.width / frameRate;\r\n            this.scale.height = this.image.height;\r\n            this.loaded = true;\r\n        };\r\n        this.image.src = material.texture;\r\n        // animation\r\n        this.animations = animations;\r\n        this.frameRate = frameRate;\r\n        this.currentFrame = 0;\r\n        this.elapsedFrames = 0;\r\n        this.frameBuffer = 8;\r\n        if (this.animations) {\r\n            for (let key in this.animations) {\r\n                const image = new Image();\r\n                image.src = this.animations[key].imageSrc;\r\n                this.frameRate = this.animations[key].frameRate;\r\n                this.frameBuffer = this.animations[key].frameBuffer;\r\n                this.animations[key].image = image;\r\n            }\r\n        }\r\n    }\r\n    render() {\r\n        const cropbox = {\r\n            position: { x: this.scale.width * this.currentFrame, y: 0 },\r\n            width: this.scale.width, height: this.scale.height\r\n        };\r\n        _setup__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, cropbox.position.x, cropbox.position.y, cropbox.width, cropbox.height, this.position.x, this.position.y, this.scale.width, this.scale.height);\r\n        this.anim();\r\n        // ctx.drawImage(this.image, this.position.x, this.position.y)\r\n        // ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height)\r\n    }\r\n    update() {\r\n        this.render();\r\n    }\r\n    anim() {\r\n        this.elapsedFrames++;\r\n        if (this.elapsedFrames % this.frameBuffer === 0) {\r\n            (this.currentFrame < this.frameRate - 1) ? this.currentFrame++ : this.currentFrame = 0;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/sprites/Sprite.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onCollison\": () => (/* binding */ onCollison),\n/* harmony export */   \"refinedOnCollison\": () => (/* binding */ refinedOnCollison)\n/* harmony export */ });\nfunction onCollison(object, collider) {\r\n    return (object.position.y + object.scale.height >= collider.y && object.position.y <= (collider.y + collider.height)\r\n        && object.position.x <= (collider.x + collider.width) && object.position.x + object.scale.width >= collider.x);\r\n}\r\nfunction refinedOnCollison(object, collider) {\r\n    return (object.position.y + object.scale.height >= collider.position.y && object.position.y <= (collider.position.y + collider.scale.height)\r\n        && object.position.x <= (collider.position.x + collider.scale.width) && object.position.x + object.scale.width >= collider.position.x);\r\n}\r\n\n\n//# sourceURL=webpack://bruce-lee/./src/utils.ts?");

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