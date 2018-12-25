const app = document.getElementById('app')
let mainStack = new Stack(app, false, true)
let subStack = new Stack(app)

let playingStacks = []
let homeStacks = []

for (var i = 0; i < 7; i++) {
    playingStacks[i] = new Stack(app)
}
for (var i = 0; i < 4; i++) {
    homeStacks[i] = new Stack(app)
}