class Card {
    constructor(suit_, kind_, app_) {
        this.suit = suit_
        this.kind = kind_
        this.faceUp = false
        this.app = app_

        this.element = document.createElement('div')
        this.element.className = 'card'
        this.app.appendChild(this.element)
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