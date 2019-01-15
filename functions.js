function init() {
    mainStack = new Stack(app, false, true)
    mainStack.element.style.left = GAP + "px"
    mainStack.element.style.top = GAP + "px"

    subStack = new Stack(app)
    subStack.element.style.left = GAP + (CARD_WIDTH + GAP) + "px"
    subStack.element.style.top = GAP + "px"

    for (var i = 0; i < 7; i++) {
        playingStacks[i] = new Stack(app)
        playingStacks[i].element.style.left = GAP + (CARD_WIDTH + GAP) * i + "px"
        playingStacks[i].element.style.top = GAP * 2 + CARD_HEIGHT + "px"
        playingStacks[i].element.classList.add('playing')

        for (var j = 0; j < i + 1; j++) {
            playingStacks[i].push(mainStack.deal())

            if (j == i) {
                playingStacks[i].cards[j].flip()
            }
        }
    }
    for (var i = 0; i < 4; i++) {
        homeStacks[i] = new Stack(app)
        homeStacks[i].element.style.left = GAP + (CARD_WIDTH + GAP) * (i + 3) + "px"
        homeStacks[i].element.style.top = GAP + "px"
    }
}