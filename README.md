# Bruce Lee Atari web rework

This is my typescript rework of an old-school platformer game. **Bruce Lee** was a platform game originally written by Ron J. Fortier for the Atari 8-bit family and published in 1984 by Datasoft. The plot involves the eponymous martial artist advancing from chamber to chamber in a wizard's tower, seeking to claim infinite wealth and the secret of immortality. There are twenty chambers, each represented by a single screen with platforms and ladders. To progress, the player must collect a number of lanterns suspended from various points in the chamber.

![image](https://github.com/jzielinski47/bruce-lee/assets/63867153/029830b0-f1eb-4742-b0bb-8cf498fee47b)

![bruce-lee-cover](https://i.imgur.com/MmzTukm.jpg)

### Instalation

1. Download the project.
2. Unzip the downloaded file.
3. Open Visual Studio Code and select the “Live Server” extension from the Extensions tab.
4. With the Live Server extension enabled, open the unzipped game folder.
5. Right click on the game’s main file and select “Open with Live Server”.
6. The game will be automatically launched in a browser window.

### Controls
```c#
W, ArrowUp - Jump / (Climb Up)
S, ArrowDown - Crouch / (Climb Down)
A, ArrowLeft - Move Left / (Climb Left)
D, ArrowRight - Move Right / (Climb Right)
F - Hit (Fight 1)
Move & F - Kick (Fight 2)
```
### Project structure
The project was fully written in typescript and compiled with webpack. All the source files are located in `/src` directory.

```ts
config: 'a file responsible for pre-loading the necessary settings and game configuration',
index: 'main file responsible for game render on canvas',
scenes: 'a file responsible for holding all the scene data (such as colliders, triggers, traps, locations)',
controls: 'a file responsible for handling the user input',
userinterface: 'a file responsible for displaying the user interface at the top',
utils: 'all additional functions and features',
```

**Interfaces**
```ts
interafces: 'a file responsible for storing all the typescript types and interfaces'
```
**Sprites**
```ts
Background: 'scene background class',
Door: 'door class',
Enemy: 'enemy class (simple ai)',
Lantern: 'lantern class',
Player: 'player class',
Prefab: 'every other object in the scene class',
Sprite: 'class responsible for animations and rendering sprites on canvas in specific order',
Trap: 'trap class'
```

### Developer Options

The game implements some developer-only options. To toggle the collision detection display press `Ctrl + Q`; 
However, there is a couple of additional dev-only-features (such as logging all the collisions in the console) that can be toggled in config file before the game initializes.

### Specification
```js
Google Chrome Developer Edition +
Firefox Developer Edition +
```
### Minimum PC requirements: 
- CPU: Intel Core i3 or equivalent
- RAM: 4 GB
- Graphics card: Dedicated GPU with at least 2 GB of VRAM
- Hard drive space: 10 GB
- Operating system: Windows 7 or higher, macOS 10.13 or higher, or Linux

