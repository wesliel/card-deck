/**
 * Main app
 */
const Deck = require('./modules/deck')

process.stdout.write('Instantiating new deck... \n')
const deck = new Deck()

const newCard = deck.deal()
process.stdout.write(`Dealing card: ${newCard}\n`)

const remainingCards = deck.getCards()
process.stdout.write(`Cards left in deck: ${remainingCards.length}\n`)