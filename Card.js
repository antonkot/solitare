class Card {
    constructor(suit_, kind_, stack_) {
        this.suit = suit_
        this.kind = kind_
        this.faceUp = false
        this.stack = stack_

        this.element = document.createElement('div')
        this.element.className = 'card'
        this.element.draggable = true

        this.element.addEventListener('click', evt => {
            evt.cancelBubble = true
            this.stack.onClick(this)
        })

        this.element.addEventListener('dragstart', evt => {
            evt.cancelBubble = true
            this.stack.onDragStart(this)
        })

        this.dx = -1 * (this.kind - 1) * 79 + "px"
        this.dy = -1 * this.suit * 123 + "px"

        this.element.style.backgroundPosition = "-158px -492px"
        this.stack.element.appendChild(this.element)
    }

    flip() {
        this.faceUp = !this.faceUp
        if (this.faceUp) {
            this.element.style.backgroundPositionX = this.dx
            this.element.style.backgroundPositionY = this.dy
        } else {
            this.element.style.backgroundPosition = "-158px -492px"
        }
    }

    print() {
        let suits = ['&hearts;', '&diams;', '&clubs;', '&spades;']
        let kinds = {
            1: "A",
            11: "J",
            12: "Q",
            13: "K"
        }
        document.write((kinds[this.kind] || this.kind) + suits[this.suit] + " ")
    }
}