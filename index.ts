import {Game} from './src/game'

const game = new Game()
game.roll(1)
game.roll(1)
game.roll(1)

console.log(game.score())