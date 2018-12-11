class Stack {
    constructor(empty = true, shuffle = false) {
        this.cards = []

        if (!empty) {
            // Suit from #0 to #3
            for (var s = 0; s < 4; s++) {
                // Kind from #1 (Ace) to #13 (King)
                for (var k = 1; k <= 13; k++) {
                    this.cards.push(new Card(s, k))
                }
            }
        }

        if (shuffle) {
            let newCards = []

            while (this.cards.length > 0) {
                let index = Math.floor(Math.random() * this.cards.length)
                let card = this.cards.splice(index, 1)[0]
                newCards.push(card)
            }

            this.cards = newCards
        }
    }

    print() {
        for (let card of this.cards) {
            card.print()
        }
    }
}