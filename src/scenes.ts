import { canvas, ctx } from "./config"

export const scenes = [
    {
        id: 0, sprite: '../assets/map/level_0.jpg', colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 6 + 1, width: canvas.width, height: 6 },
            { id: 1, name: 'fence', x: 0, y: canvas.height - 68, width: 8, height: 68 },
            { id: 2, name: 'fence', x: canvas.width - 8, y: canvas.height - 42, width: 8, height: 36 },
            { id: 3, name: 'platform', x: 0, y: canvas.height - 72 + 1, width: 32, height: 8 },
            { id: 4, name: 'platform', x: canvas.width - 118, y: canvas.height - 56 + 1, width: 118, height: 14 },
            { id: 5, name: 'platform', x: 0, y: 76 + 1, width: 136, height: 4 },
            { id: 6, name: 'platform', x: 176, y: 76 + 1, width: 32, height: 4 },
            { id: 7, name: 'platform', x: canvas.width - 70, y: 72 + 1, width: 70, height: 16 },
            { id: 8, name: 'prop', x: 10, y: 48, width: 20, height: 32 },
            { id: 9, name: 'border-top', x: 0, y: 0, width: canvas.width, height: 0 },
            { id: 10, name: 'border-left', x: 0, y: 0, width: 0, height: canvas.height }
        ], lanterns: [
            { id: 0, name: 'lantern', x: 18, y: 134, width: 6, height: 10, collected: false },
            { id: 1, name: 'lantern', x: 202, y: 134, width: 6, height: 10, collected: false },
            { id: 2, name: 'lantern', x: 232, y: 134, width: 6, height: 10, collected: false },
            { id: 3, name: 'lantern', x: 304, y: 134, width: 6, height: 10, collected: false },
            { id: 4, name: 'lantern', x: 304, y: 86, width: 6, height: 10, collected: false },
            { id: 5, name: 'lantern', x: 250, y: 86, width: 6, height: 10, collected: false }
        ], triggers: [
            { id: 0, name: 'ladder', x: 144, y: 80, width: 24, height: 58, mode: 'ladder' },
            { id: 1, name: 'loader', x: canvas.width, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 1, dir: 'right' },
        ], traps: [

        ], platforms: [
            { id: 0, name: 'platform', x: 48, y: 70 + 1, width: 32, height: 2 },
            { id: 1, name: 'platform', x: 104, y: 70 + 1, width: 24, height: 2 },
            { id: 2, name: 'platform', x: 184, y: 70 + 1, width: 16, height: 2 },
            { id: 3, name: 'platform', x: 136, y: 76 + 1, width: 40, height: 2 },
        ], entrances: [
            { id: 0, name: 'entrance', x: 298, y: 48 },
            { id: 1, name: 'entrance', x: 298, y: 92 }
        ], defaultPlayerPosition: { x: 30, y: 150 }


    },
    {
        id: 1, sprite: '../assets/map/level_1.jpg', defaults: [30, 150], colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 6 + 1, width: 150, height: 6 },
            { id: 1, name: 'floor', x: 170, y: canvas.height - 6 + 1, width: canvas.width - 170, height: 6 },
            { id: 2, name: 'fence', x: 0, y: canvas.height - 42, width: 8, height: 36 },
            { id: 3, name: 'fence', x: canvas.width - 16, y: canvas.height - 42, width: 8, height: 36 },
            { id: 4, name: 'fence', x: 304, y: 86, width: 8, height: 36 },
            { id: 5, name: 'platform', x: 0, y: 120 + 1, width: 126, height: 14 },
            { id: 6, name: 'platform', x: 194, y: 120 + 1, width: 126, height: 14 },
            { id: 7, name: 'platform', x: 0, y: 72 + 1, width: 78, height: 14 },
            { id: 8, name: 'platform', x: 120, y: 76 + 1, width: 24, height: 4 },
            { id: 9, name: 'platform', x: 176, y: 76 + 1, width: 24, height: 4 },
            { id: 10, name: 'platform', x: 242, y: 72 + 1, width: 78, height: 14 },
        ], lanterns: [
            { id: 0, name: 'lantern', x: 48, y: 134, width: 6, height: 10, collected: false, door: null },
            { id: 1, name: 'lantern', x: 120, y: 134, width: 6, height: 10, collected: false, door: null },
            { id: 2, name: 'lantern', x: 72, y: 86, width: 6, height: 10, collected: false, door: null },
            { id: 3, name: 'lantern', x: 242, y: 86, width: 6, height: 10, collected: false, door: null },
            { id: 4, name: 'lantern', x: 194, y: 134, width: 6, height: 10, collected: false, door: null },
            { id: 5, name: 'lantern', x: 256, y: 134, width: 6, height: 10, collected: false, door: null },
        ], triggers: [
            { id: 0, name: 'ladder', x: 152, y: 80, width: 16, height: 8, mode: 'ladder' },
            { id: 1, name: 'ladder', x: 152, y: 114, width: 16, height: 26, mode: 'ladder' },
            { id: 3, name: 'loader', dir: 'left', x: 0, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 0 },
            { id: 4, name: 'loader', dir: 'right', x: canvas.width, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 2 },
            { id: 5, name: 'loader', dir: 'down', x: 0, y: canvas.height + 20, width: canvas.width, height: 20, mode: 'loader', level: 3, hatch: { x: 56, y: 0, width: 32, heigth: 16 } },
            { id: 6, name: 'door', x: 152, y: canvas.height - 6 + 1, width: 20 - 4, height: 10, mode: 'door', opened: false, model: 0, keyOpened: false, key: 22 }, // usually 22

        ], traps: [

        ], platforms: [
            { id: 0, name: 'platform', x: 112, y: 76 + 1, width: 96, height: 2 },
            { id: 1, name: 'platform', x: 120, y: 70 + 1, width: 24, height: 2 },
            { id: 2, name: 'platform', x: 176, y: 70 + 1, width: 24, height: 2 },
            { id: 3, name: 'platform', x: 154, y: 110 + 1, width: 12, height: 2 },
        ], entrances: [
            { id: 0, name: 'entrance', x: 8, y: 48 },
            { id: 1, name: 'entrance', x: 294, y: 48 },
            { id: 2, name: 'entrance', x: 8, y: 92 },
        ], defaultPlayerPosition: { x: 8, y: 96 }
    },
    {
        id: 2, sprite: '../assets/map/level_2.jpg', colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 6 + 1, width: canvas.width, height: 6 },
            { id: 1, name: 'fence', x: 0, y: canvas.height - 42, width: 8, height: 36 },
            { id: 2, name: 'fence', x: 0, y: 86, width: 8, height: 36 },
            { id: 3, name: 'platform', x: 0, y: 120 + 1, width: 46, height: 14 },
            { id: 4, name: 'platform', x: 74, y: 120 + 1, width: 52, height: 14 },
            { id: 5, name: 'platform', x: 170, y: 120 + 1, width: 52, height: 14 },
            { id: 6, name: 'platform', x: 0, y: 72 + 1, width: 80, height: 14 },
            { id: 7, name: 'weird-platform', x: 80, y: 74 + 1, width: 24, height: 6 },
            { id: 8, name: 'platform', x: 178, y: 72 + 1, width: 36, height: 14 },
            { id: 9, name: 'fence', x: 248, y: 80, width: 8, height: 48 },
            { id: 10, name: 'fence', x: 248, y: 80, width: 8, height: 48 },
            { id: 11, name: 'fence', x: 240, y: 74, width: 80, height: 6 },
            { id: 12, name: 'fence', x: canvas.width - 8, y: 80, width: 8, height: 48 },
            { id: 13, name: 'fence', x: canvas.width - 8, y: 80 + 48, width: 8, height: 48 },
            { id: 14, name: 'prop', x: 274, y: 48, width: 20, height: 32 },


        ], lanterns: [
            { id: 0, name: 'lantern', x: 40, y: 86, width: 6, height: 10, collected: false, door: null },
            { id: 1, name: 'lantern', x: 72, y: 86, width: 6, height: 10, collected: false, door: null },
            { id: 2, name: 'lantern', x: 40, y: 134, width: 6, height: 10, collected: false, door: null },
            { id: 3, name: 'lantern', x: 74, y: 134, width: 6, height: 10, collected: false, door: null },
            { id: 4, name: 'lantern', x: 120, y: 134, width: 6, height: 10, collected: false, door: null },
            { id: 5, name: 'lantern', x: 178, y: 86, width: 6, height: 10, collected: false, door: null },
            { id: 6, name: 'lantern', x: 208, y: 86, width: 6, height: 10, collected: false, door: null },
            { id: 7, name: 'lantern', x: 242, y: 86, width: 6, height: 10, collected: false, door: null },
            { id: 8, name: 'lantern', x: 170, y: 134, width: 6, height: 10, collected: false, door: null },
            { id: 9, name: 'lantern', x: 216, y: 134, width: 6, height: 10, collected: false, door: null },

        ], triggers: [
            { id: 0, name: 'ladder', x: 136, y: 78, width: 24, height: 60, mode: 'ladder' },
            { id: 1, name: 'loader', dir: 'left', x: 0, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 1 },
        ], traps: [], platforms: [
            { id: 0, name: 'platform', x: 136, y: 74 + 1, width: 24, height: 2 },
            { id: 1, name: 'platform', x: 80, y: 74 + 1, width: 24, height: 2 },
        ], entrances: [
            { id: 0, name: 'entrance', x: 8, y: 48 },
        ], defaultPlayerPosition: { x: 8, y: 48 }
    },
    {
        id: 3, sprite: '../assets/map/level_3.jpg', colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 8 + 1, width: canvas.width, height: 8 },
            { id: 1, name: 'platform', x: 0, y: 8 + 1, width: 52, height: 6 },
            { id: 2, name: 'platform', x: 92, y: 8 + 1, width: 176, height: 6 },
            { id: 3, name: 'platform', x: 300, y: 8 + 1, width: 20, height: 6 },
            { id: 4, name: 'platform', x: 32, y: 56 + 1, width: 236, height: 6 },
            { id: 5, name: 'platform', x: 300, y: 56 + 1, width: 20, height: 6 },
            { id: 6, name: 'platform', x: 8, y: 104 + 1, width: 204, height: 6 },
            { id: 7, name: 'platform', x: 244, y: 104 + 1, width: 24, height: 6 },
            { id: 8, name: 'platform', x: 300, y: 104 + 1, width: 24, height: 6 },
            { id: 9, name: 'fence', x: 0, y: 16, width: 8, height: 112 },
            { id: 10, name: 'fence', x: 8, y: 0, width: 8, height: 12 },
            { id: 11, name: 'fence', x: 40, y: 0, width: 8, height: 12 },
            { id: 12, name: 'fence', x: 96, y: 0, width: 8, height: 12 },
            { id: 13, name: 'fence', x: 224, y: 0, width: 8, height: 12 },
            { id: 14, name: 'fence', x: 256, y: 0, width: 8, height: 12 },
            { id: 15, name: 'fence', x: 304, y: 0, width: 8, height: 12 },
            { id: 16, name: 'fence', x: 228, y: 16, width: 32, height: 6 },
            { id: 17, name: 'fence', x: 240, y: 22, width: 8, height: 38 },
            { id: 18, name: 'fence', x: 240, y: 112, width: 8, height: 16 },
            { id: 19, name: 'fence', x: 248, y: 112, width: 8, height: 60 },
            { id: 20, name: 'fence', x: 256, y: 64, width: 8, height: 44 },
            { id: 21, name: 'fence', x: 208, y: 112, width: 8, height: 16 },
            { id: 22, name: 'fence', x: 200, y: 112, width: 8, height: 16 },
            { id: 23, name: 'fence', x: 192, y: 112, width: 8, height: 22 },
            { id: 24, name: 'fence', x: 8, y: 112, width: 8, height: 22 },
            { id: 25, name: 'fence', x: 312, y: 112, width: 8, height: 60 },

        ], lanterns: [
            { id: 0, name: 'lantern', x: 16, y: 22, width: 6, height: 10, collected: false, door: null },
            { id: 1, name: 'lantern', x: 48, y: 22, width: 6, height: 10, collected: false, door: null },
            { id: 3, name: 'lantern', x: 226, y: 22, width: 6, height: 10, collected: false, door: null },
            { id: 4, name: 'lantern', x: 256, y: 22, width: 6, height: 10, collected: false, door: null },
            { id: 5, name: 'lantern', x: 306, y: 22, width: 6, height: 10, collected: false, door: null },
            { id: 6, name: 'lantern', x: 242, y: 70, width: 6, height: 10, collected: false, door: null },
            { id: 7, name: 'lantern', x: 16, y: 134, width: 6, height: 10, collected: false, door: 2 }, // opens door
            { id: 8, name: 'lantern', x: 186, y: 134, width: 6, height: 10, collected: false, door: null },
            { id: 9, name: 'lantern', x: 208, y: 134, width: 6, height: 10, collected: false, door: 1 }, // opens door
            { id: 10, name: 'lantern', x: 242, y: 134, width: 6, height: 10, collected: false, door: null },
        ], triggers: [
            { id: 0, name: 'loader', dir: 'custom', x: 0, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 4, custom: { x: canvas.width - 20 - 0.1, y: 32 } },
            { id: 1, name: 'door', x: 200, y: 128, width: 8, height: 44, mode: 'door', opened: false, model: 1, keyOpened: true },
            { id: 2, name: 'door', x: 0, y: 128, width: 8, height: 44, mode: 'door', opened: false, model: 1, keyOpened: true },
            { id: 3, name: 'water', x: 272, y: 16, width: 24, height: 160, mode: 'water', dir: 'up', model: 0 },
        ], traps: [
            { id: 0, name: 'trap', x: 8, y: 58, width: 24, height: 6, mode: 'trap', dmg: 200, model: 1, timeout: 240 },
            { id: 1, name: 'trap', x: 216, y: 122, width: 24, height: 6, mode: 'trap', dmg: 200, model: 1, timeout: 240 },
        ], platforms: [],
        entrances: [
            { id: 0, name: 'entrance', x: 64, y: -10 },
        ], defaultPlayerPosition: { x: 64, y: -10 }
    },
    {
        id: 4, sprite: '../assets/map/level_4.jpg', colliders: [
            { id: 0, name: 'floor', x: 48, y: canvas.height - 22 + 1, width: 96, height: 4 },
            { id: 0, name: 'floor', x: 176, y: canvas.height - 22 + 1, width: 144, height: 4 },
            { id: 0, name: 'fence', x: 176, y: canvas.height - 18, width: 144, height: 18 },
            { id: 0, name: 'fence', x: 48, y: canvas.height - 18, width: 96, height: 18 },
            { id: 0, name: 'fence', x: 40, y: 60, width: 8, height: 116 },
            { id: 0, name: 'fence', x: 0, y: 14, width: 8, height: canvas.height },
            { id: 0, name: 'fence', x: 192, y: 0, width: 128, height: 12 },
            { id: 0, name: 'platform', x: 8, y: 8 + 1, width: 120, height: 6 },
            { id: 0, name: 'platform', x: 192, y: 8 + 1, width: 120, height: 6 },
            { id: 0, name: 'fence', x: 80, y: 16, width: 8, height: 98 },
            { id: 0, name: 'fence', x: 120, y: 80, width: 8, height: 74 },
            { id: 0, name: 'fence', x: 112, y: 62, width: 24, height: 20 },
            { id: 0, name: 'platform', x: 112, y: 60 + 1, width: 32, height: 6 },
            { id: 0, name: 'platform', x: 176, y: 60 + 1, width: 32, height: 6 },
            { id: 0, name: 'fence', x: 184, y: 62, width: 24, height: 20 },
            { id: 0, name: 'fence', x: 192, y: 80, width: 8, height: 36 },
            { id: 0, name: 'fence', x: 232, y: 16, width: 8, height: 98 },
            { id: 0, name: 'fence', x: canvas.width - 8, y: 60, width: 8, height: 94 },
            { id: 0, name: 'fence', x: 0, y: 0, width: 128, height: 12 },
            { id: 0, name: 'fence', x: 272, y: 60, width: 8, height: 60 },
            { id: 0, name: 'fence', x: 0, y: 0, width: 8, height: 16 },
            { id: 26, name: 'ceiling', x: 0, y: 0, width: canvas.width, height: 2 },

        ], lanterns: [
            { id: 0, name: 'lantern', x: 88, y: 38, width: 6, height: 10, collected: false, door: 4 },
            { id: 1, name: 'lantern', x: 226, y: 38, width: 6, height: 10, collected: false, door: 5 },
        ], triggers: [
            { id: 0, name: 'ladder', x: 56, y: 16, width: 16, height: 110, mode: 'ladder' },
            { id: 1, name: 'ladder', x: 248, y: 16, width: 16, height: 110, mode: 'ladder' },
            { id: 2, name: 'loader', dir: 'custom', x: canvas.width, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 3, custom: { x: 0.1, y: 140 } },
            { id: 3, name: 'water', x: 144, y: 1, width: 32, height: 160, mode: 'water', dir: 'up', model: 1 },
            { id: 4, name: 'door', x: 88, y: 108 + 1, width: 32, height: 4, mode: 'door', opened: false, model: 2, keyOpened: true },
            { id: 5, name: 'door', x: 200, y: 108 + 1, width: 32, height: 4, mode: 'door', opened: false, model: 3, keyOpened: true },
            { id: 6, name: 'loader', dir: 'down', x: 0, y: canvas.height + 20, width: canvas.width, height: 20, mode: 'loader', level: 6, hatch: { x: 28, y: 0, width: 36, heigth: 6 } },
        ], traps: [
            { id: 0, name: 'trap', x: 130 + 2, y: 0, width: 6 - 4, height: 16, mode: 'spike', dmg: 100, timeout: 240 },
            { id: 1, name: 'trap', x: 138 + 2, y: 0, width: 6 - 4, height: 16, mode: 'spike', dmg: 100, timeout: 240 },
            { id: 2, name: 'trap', x: 178 + 2, y: 0, width: 6 - 4, height: 16, mode: 'spike', dmg: 100, timeout: 240 },
            { id: 3, name: 'trap', x: 186 + 2, y: 0, width: 6 - 4, height: 16, mode: 'spike', dmg: 100, timeout: 240 },
            { id: 4, name: 'trap', x: 130 + 2, y: 80, width: 6 - 4, height: 16, mode: 'spike', dmg: 100, timeout: 240 },
            { id: 5, name: 'trap', x: 138 + 2, y: 64, width: 6 - 4, height: 16, mode: 'spike', dmg: 100, timeout: 240 },
            { id: 6, name: 'trap', x: 178 + 2, y: 64, width: 6 - 4, height: 16, mode: 'spike', dmg: 100, timeout: 240 },
            { id: 7, name: 'trap', x: 186 + 2, y: 80, width: 6 - 4, height: 16, mode: 'spike', dmg: 100, timeout: 240 },
            { id: 8, name: 'trap', x: 8, y: 154, width: 24, height: 6, mode: 'trap', dmg: 200, model: 2, timeout: 240 },
            { id: 9, name: 'trap', x: 90, y: 84, width: 24, height: 6, mode: 'trap', dmg: 200, model: 2, timeout: 240 },
            { id: 9, name: 'trap', x: 204, y: 84, width: 24, height: 6, mode: 'trap', dmg: 200, model: 2, timeout: 240 },
        ], platforms: [

        ], entrances: [
            { id: 0, name: 'entrance', x: 286, y: 56 },
        ], defaultPlayerPosition: { x: 286, y: 56 }
    },
    {
        id: 5, sprite: '../assets/map/level_5.jpg', colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 8, width: canvas.width, height: 8 },
        ], lanterns: [], triggers: [], traps: [], platforms: [], defaultPlayerPosition: { x: 286, y: 56 }
    },
    {
        id: 6, sprite: '../assets/map/level_6.jpg', colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 16, width: canvas.width, height: 16 },
            { id: 1, name: 'fence', x: 0, y: 0, width: 8, height: 54 },
            { id: 2, name: 'fence', x: 8, y: 0, width: 8, height: 96 },
            { id: 3, name: 'fence', x: 0, y: 96, width: 320, height: 16 },
            { id: 4, name: 'fence', x: 304, y: 0, width: 8, height: 40 },
            { id: 5, name: 'fence', x: 312, y: 0, width: 8, height: 54 },
            { id: 6, name: 'platform', x: 0, y: 90, width: 320, height: 6 },
            { id: 7, name: 'platform', x: 0, y: 158, width: 320, height: 6 },
            { id: 8, name: 'platform', x: 288, y: 156, width: 32, height: 2 },
            { id: 9, name: 'platform', x: 16, y: 42 + 1, width: 248, height: 6 },
            { id: 10, name: 'fence', x: 0, y: 96, width: 8, height: 70 },
            { id: 11, name: 'ceiling', x: 64, y: 0, width: 200, height: 6 },
            { id: 12, name: 'ceiling', x: 16, y: 0, width: 10, height: 6 },
            { id: 13, name: 'ceiling', x: 272, y: 0, width: 48, height: 6 },
        ], lanterns: [
            { id: 0, name: 'lantern', x: 24, y: 6, width: 6, height: 10, collected: false, door: null },
            { id: 1, name: 'lantern', x: 98, y: 6, width: 6, height: 10, collected: false, door: null },
            { id: 2, name: 'lantern', x: 104, y: 6, width: 6, height: 10, collected: false, door: null },
            { id: 3, name: 'lantern', x: 202, y: 6, width: 6, height: 10, collected: false, door: null },
            { id: 4, name: 'lantern', x: 208, y: 6, width: 6, height: 10, collected: false, door: 3 }, // opens door (up)
            { id: 5, name: 'lantern', x: 42, y: 54, width: 6, height: 10, collected: false, door: 2 }, // opens door (bottom)
            { id: 6, name: 'lantern', x: 48, y: 54, width: 6, height: 10, collected: false, door: null },
            { id: 7, name: 'lantern', x: 98, y: 54, width: 6, height: 10, collected: false, door: null },
            { id: 8, name: 'lantern', x: 104, y: 54, width: 6, height: 10, collected: false, door: null },
            { id: 9, name: 'lantern', x: 202, y: 54, width: 6, height: 10, collected: false, door: null },
            { id: 10, name: 'lantern', x: 208, y: 54, width: 6, height: 10, collected: false, door: null },
        ], triggers: [
            { id: 1, name: 'loader', dir: 'custom', x: canvas.width, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 7, custom: { x: 8, y: 20 } },
            { id: 2, name: 'door', x: 304, y: 40, width: 8, height: 54, mode: 'door', opened: false, model: 4, keyOpened: true },
            { id: 3, name: 'door', x: 264, y: 0, width: 8, height: 54, mode: 'door', opened: false, model: 4, keyOpened: true },
        ], traps: [], platforms: [
            { id: 0, name: 'platform', x: 16, y: 150 + 1, width: 16, height: 2 },
            { id: 2, name: 'platform', x: 8, y: 156, width: 32, height: 2 },
        ], entrances: [
            { id: 0, name: 'entrance', x: 32, y: -10 },
        ], defaultPlayerPosition: { x: 32, y: -10 }
    },
    {
        id: 7, sprite: '../assets/map/level_7.jpg', colliders: [
            { id: 0, name: 'ceiling', x: 0, y: 0, width: 120, height: 4 },
            { id: 0, name: 'ceiling', x: 202, y: 0, width: 120, height: 4 },
            { id: 1, name: 'fence', x: 0, y: 46, width: 16, height: 80 },
            { id: 1, name: 'fence', x: 272, y: 46, width: 8, height: 68 },
            { id: 2, name: 'fence', x: 112, y: 62, width: 8, height: 62 },
            { id: 3, name: 'fence', x: 200, y: 62, width: 8, height: 62 },
            { id: 4, name: 'fence', x: 104, y: 0, width: 8, height: 72 },
            { id: 5, name: 'platform', x: 44, y: 168, width: 24, height: 6 },
            { id: 6, name: 'platform', x: 0, y: 168, width: 8, height: 6 },
            { id: 7, name: 'platform', x: 92, y: 168, width: 40, height: 6 },
            { id: 8, name: 'platform', x: 92, y: 120, width: 32, height: 6 },
            { id: 9, name: 'platform', x: 196, y: 120, width: 32, height: 6 },
            { id: 10, name: 'platform', x: 188, y: 168, width: 40, height: 6 },
            { id: 12, name: 'platform', x: 252, y: 168, width: 24, height: 6 },
            { id: 13, name: 'platform', x: 304, y: 46, width: 16, height: 82 },
            { id: 14, name: 'platform', x: 312, y: 168, width: 8, height: 6 },
            { id: 15, name: 'fence', x: 304, y: 128, width: 8, height: 48 },
            { id: 15, name: 'fence', x: 208, y: 0, width: 8, height: 80 },
            { id: 16, name: 'door', x: 8, y: 128, width: 8, height: 54 },
            { id: 17, name: 'fence', x: 40, y: 46, width: 8, height: 68 },
            { id: 17, name: 'fence', x: 304, y: 0, width: 8, height: 48 },
        ], lanterns: [], triggers: [
            { id: 0, name: 'loader', dir: 'custom', x: 0, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 6, custom: { x: canvas.width - 8, y: 64 } },
            { id: 0, name: 'loader', dir: 'custom', x: 0, y: canvas.height, width: canvas.width, height: 0, mode: 'loader', level: 11, custom: { x: canvas.width / 2, y: 0 } },
            { id: 1, name: 'water', x: 16, y: 46, width: 24, height: 130, mode: 'water', dir: 'up', model: 3 },
            { id: 2, name: 'water', x: 136, y: 1, width: 24, height: 159, mode: 'water', dir: 'up', model: 3 },
            { id: 3, name: 'water', x: 136 + 24 + 1, y: 1, width: 24, height: 159, mode: 'water', dir: 'up', model: 3 },
            { id: 4, name: 'water', x: 280, y: 46, width: 24, height: 130, mode: 'water', dir: 'up', model: 3 },
        ], traps: [
            { id: 0, name: 'trap', x: 48, y: 62, width: 24, height: 6, mode: 'trap', dmg: 200, model: 0, timeout: 480 },
            { id: 0, name: 'trap', x: 216, y: 62, width: 24, height: 6, mode: 'trap', dmg: 200, model: 0, timeout: 480 },
        ], platforms: [
            { id: 0, name: 'platform', x: 0, y: 44 + 1, width: 48, height: 2 },
            { id: 1, name: 'platform', x: 48, y: 76 + 1, width: 8, height: 4 },
            { id: 1, name: 'platform', x: 264, y: 76 + 1, width: 8, height: 4 },
            { id: 2, name: 'platform', x: 112, y: 60, width: 24, height: 4 },
            { id: 3, name: 'platform', x: 186, y: 60, width: 22, height: 4 },
            { id: 4, name: 'platform', x: 272, y: 44 + 1, width: 48, height: 2 },
        ], defaultPlayerPosition: { x: 8, y: 20 }
    },
    {
        id: 8, sprite: '../assets/map/level_8.jpg', colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 8, width: canvas.width, height: 8 },
        ], lanterns: [], triggers: [], traps: [], platforms: [], defaultPlayerPosition: { x: 30, y: 150 }
    },
    {
        id: 9, sprite: '../assets/map/dead.jpg', colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 8, width: canvas.width, height: 8 },
        ], lanterns: [], triggers: [], traps: [], platforms: [], defaultPlayerPosition: { x: 30, y: 150 }
    },
    {
        id: 10, sprite: '../assets/start-screen.jpg', colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 8, width: canvas.width, height: 8 },
        ], lanterns: [], triggers: [], traps: [], platforms: [], defaultPlayerPosition: { x: 30, y: 150 }
    },
    {
        id: 11, sprite: '../assets/map/boss.jpg', colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 2, width: canvas.width, height: 8 },
            { id: 1, name: 'fence', x: 0, y: 0, width: 0, height: canvas.height },
            { id: 2, name: 'fence', x: canvas.width, y: 0, width: 0, height: canvas.height },
        ], lanterns: [], triggers: [], traps: [], platforms: [], defaultPlayerPosition: { x: 30, y: 150 }
    },

]

export const drawColliders = (num) => {
    scenes[num].colliders.map(col => {
        ctx.fillStyle = 'rgba(0,255,0,0.5)'
        if (col.name === 'platform') ctx.fillStyle = 'rgba(255,255,0,0.5)'
        ctx.fillRect(col.x, col.y, col.width, col.height)
    })

    scenes[num].triggers.map(col => {

        ctx.fillStyle = (col.name === 'door') ? 'rgba(255,165,0,0.5)' : 'rgba(0,0,255,0.5)'
        ctx.fillRect(col.x, col.y, col.width, col.height)
    })

    scenes[num].lanterns.map(col => {
        if (!col.collected) {
            ctx.fillStyle = 'rgba(255,0,0,0.5)'
            ctx.fillRect(col.x, col.y, col.width, col.height)
        }
    })

    // scenes[num].traps.map(trap => {
    //     ctx.fillStyle = 'rgba(221,225,28,0.5)'
    //     ctx.fillRect(trap.x, trap.y, trap.width, trap.height)
    // })

    if (scenes[num].platforms) {
        scenes[num].platforms.map(platform => {
            ctx.fillStyle = 'rgba(0, 128, 0,0.5)'
            ctx.fillRect(platform.x, platform.y, platform.width, platform.height)
        })
    }


}