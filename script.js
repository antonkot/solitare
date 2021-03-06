const GAP = 20
const CARD_WIDTH = 79
const CARD_HEIGHT = 123

let app = {
    element: document.getElementById('app'),
    mainStack: null,
    subStack: null,
    playingStacks: [],
    homeStacks: [],
    currentCard: null,
    timeout: null,
    onClick: function(card) {
        switch (card.stack.type) {
            case 'main':
                let last = card.stack.deal()
                last.flip()
                this.subStack.push(last)
                break;
            case 'playing':
                if (
                    !card.faceUp &&
                    card.stack.cards.indexOf(card) == card.stack.cards.length - 1
                ) {
                    card.flip()
                }
                break;
        }
    },
    canDrop: function(stack) {
        if (stack.type == 'main' || stack.type == 'sub') {
            return false
        }

        if (stack.type == 'playing') {
            if (stack.cards.length == 0) {
                if (this.currentCard.kind == 13) {
                    return true
                }
                return false
            } else {
                let last = stack.last()
                // kind of current card is less than last card's kind by 1
                if (last.kind - this.currentCard.kind == 1) {
                    // sum of both card's suits equals 3 when colors are match
                    if (
                        last.suit == this.currentCard.suit ||
                        last.suit + this.currentCard.suit == 3
                    ) {
                        return false
                    } else {
                        return true
                    }
                } else {
                    return false
                }
            }
        }

        if (stack.type == 'home') {
            let idx = this.currentCard.stack.cards.indexOf(this.currentCard)
            let count = this.currentCard.stack.cards.length - idx

            if (count > 1) {
                return false
            } else {
                if (stack.cards.length == 0) {
                    if (this.currentCard.kind == 1) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    let last = stack.cards[stack.cards.length - 1]
                    if (last.suit == this.currentCard.suit) {
                        if (this.currentCard.kind - last.kind == 1) {
                            return true
                        } else {
                            return false
                        }
                    } else {
                        return false
                    }
                }
            }
        }
    },
    onDragStart: function(card) {
        this.currentCard = card
    },
    onDragEnter: function(stack) {
        if (this.currentCard != null) {
            if (stack != this.currentCard.stack) {
                if (this.canDrop(stack)) {
                    this.timeout = setTimeout(() => {
                        stack.element.classList.add('active')
                    }, 1)
                }
            }
        }
    },
    onDragLeave: function(stack) {
        if (this.currentCard != null) {
            if (stack != this.currentCard.stack) {
                stack.element.classList.remove('active')
            }
        }
    },
    onDrop: function(stack) {
        if (this.canDrop(stack)) {
            // consider case when there is more
            // than one card dragging

            let idx = this.currentCard.stack.cards.indexOf(this.currentCard)
            let count = this.currentCard.stack.cards.length - idx

            let buffer = []

            for (let i = 0; i < count; i++) {
                buffer.push(this.currentCard.stack.deal())
            }
            for (let j = count - 1; j >= 0; j--) {
                stack.push(buffer[j])
            }
            stack.element.classList.remove('active')
        }
    }
}

init(app)

app.mainStack.element.addEventListener('click', evt => {
    if (app.mainStack.cards.length == 0) {
        let count = app.subStack.cards.length
        for (let i = 0; i < count; i++) {
            let card = app.subStack.deal()
            card.flip()
            app.mainStack.push(card)
        }
    }
})