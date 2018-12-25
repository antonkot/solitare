const GAP = 20
const CARD_WIDTH = 79
const CARD_HEIGHT = 123

const app = document.getElementById('app')
let mainStack
let subStack
let playingStacks = []
let homeStacks = []

init()

let card = mainStack.cards[mainStack.cards.length - 1]
console.log(card);
card.flip()