class Card {
    constructor(suit_, kind_) {
        this.suit = suit_
        this.kind = kind_
        this.faceUp = false
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