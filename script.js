const GAP = 20
const CARD_WIDTH = 79
const CARD_HEIGHT = 123

let app = {
    element: document.getElementById('app'),
    mainStack: null,
    subStack: null,
    playingStacks: [],
    homeStacks: [],
    onClick: function(card) {
        switch (card.stack.type) {
            case 'main':
                let last = card.stack.deal()
                last.flip()
                this.subStack.push(last)
                break;
        }
    }
}


init(app)