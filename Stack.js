class Stack {
    constructor(app_, empty = true, shuffle = false, type_ = 'playing') {
        this.cards = []
        this.app = app_
        this.type = type_

        this.element = document.createElement('div')
        this.element.className = 'stack'
        this.app.element.appendChild(this.element)

        if (!empty) {
            // Suit from #0 to #3
            for (var s = 0; s < 4; s++) {
                // Kind from #1 (Ace) to #13 (King)
                for (var k = 1; k <= 13; k++) {
                    this.cards.push(new Card(s, k, this))
                }
            }
        }

        if (shuffle) {
            let newCards = []

            while (this.cards.length > 0) {
                let index = Math.floor(Math.random() * this.cards.length)
                let card = this.cards.splice(index, 1)[0]
                newCards.push(card)
                card.element.style.zIndex = newCards.length
            }

            this.cards = newCards
        }
    }

    onClick(card) {
        this.app.onClick(card)
    }

    deal() {
        return this.cards.pop()
    }

    last() {
        return this.cards[this.cards.length - 1]
    }

    push(card) {
        card.element.remove()
        let last = this.last()
        if (last) {
            this.last().element.appendChild(card.element)
        } else {
            this.element.appendChild(card.element)
        }
        card.element.style.zIndex = this.cards.length
        this.cards.push(card)
        card.stack = this
    }

    print() {
        for (let card of this.cards) {
            card.print()
        }
    }
}