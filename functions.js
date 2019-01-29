function init(app) {
    app.mainStack = new Stack(app, false, true, 'main')
    app.mainStack.element.style.left = GAP + "px"
    app.mainStack.element.style.top = GAP + "px"

    app.subStack = new Stack(app)
    app.subStack.type = 'sub'
    app.subStack.element.style.left = GAP + (CARD_WIDTH + GAP) + "px"
    app.subStack.element.style.top = GAP + "px"

    for (var i = 0; i < 7; i++) {
        app.playingStacks[i] = new Stack(app)
        app.playingStacks[i].element.style.left = GAP + (CARD_WIDTH + GAP) * i + "px"
        app.playingStacks[i].element.style.top = GAP * 2 + CARD_HEIGHT + "px"
        app.playingStacks[i].element.classList.add('playing')

        for (var j = 0; j < i + 1; j++) {
            app.playingStacks[i].push(app.mainStack.deal())

            if (j == i) {
                app.playingStacks[i].cards[j].flip()
            }
        }
    }
    for (var i = 0; i < 4; i++) {
        app.homeStacks[i] = new Stack(app)
        app.homeStacks[i].type = 'home'
        app.homeStacks[i].element.style.left = GAP + (CARD_WIDTH + GAP) * (i + 3) + "px"
        app.homeStacks[i].element.style.top = GAP + "px"
    }
}