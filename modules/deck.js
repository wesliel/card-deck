
/**
 * Deck module
 */

// Diamonds, Clubs, Hearts, Spades
const suits = ['D', 'C', 'H', 'S']
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

/**
 * Simple function to randomly return sort value
 * @returns {number}
 */
const randomArraySortFunction = (() => (0.5 - Math.random()))

/**
 * Generates a new deck based on suits and ranks, each card's value is in
 * the format of rank + suit, for example: Jack of Diamonds would be 'JD'
 * @returns {Array}
 */
const generateDeck = () => (
  suits.reduce(
    (tempDeck, suit) => (
      tempDeck.concat(
        ranks.map(rank => (rank + suit))
      )
    ),
    []
  )
)

/**
 * Class for card deck
 */
class Deck {

  /**
   * Creates a deck as undealt, and initializes empty dealt array
   */
  constructor() {
    this.__undealtCards = generateDeck().sort(randomArraySortFunction)
    this.__dealtCards = []
  }
  
  getCards() {
  }
  
  shuffle() {
  }
  
  deal() {
  }
}

module.exports = Deck