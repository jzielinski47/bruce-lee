# Bruce Lee Atari rework

This is my typescript rework of an old-school platformer game. **Bruce Lee** was a platform game originally written by Ron J. Fortier for the Atari 8-bit family and published in 1984 by Datasoft. The plot involves the eponymous martial artist advancing from chamber to chamber in a wizard's tower, seeking to claim infinite wealth and the secret of immortality. There are twenty chambers, each represented by a single screen with platforms and ladders. To progress, the player must collect a number of lanterns suspended from various points in the chamber.

![bruce-lee-cover](https://i.imgur.com/MmzTukm.png)

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
