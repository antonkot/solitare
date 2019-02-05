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
    onDragStart: function(card) {
        this.currentCard = card
    },
    onDragEnter: function(stack) {
        if (this.currentCard != null) {
            if (stack != this.currentCard.stack) {
                if (this.timeout != null) {
                    clearTimeout(this.timeout)
                }
                stack.element.classList.add('active')
            }
        }
    },
    onDragLeave: function(stack) {
        if (this.timeout == null) {
            this.timeout = setTimeout(function() {
                stack.element.classList.remove('active')
            }, 10)
        }
        console.log(this.timeout)
    }
}


init(app)