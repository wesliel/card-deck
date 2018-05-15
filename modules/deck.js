
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
  
  /**
   * Returns a copy of dealt/undealt cards array. It is a copy to ensure
   * it's immutable
   * @param {{dealt: boolean}}
   * @returns {Array}
   * @throws {Error} if param is not a boolean
   */
  getCards({dealt = false} = {}) {
    if (typeof dealt !== 'boolean') {
      throw new Error('Parameter dealt must be a boolean')
    }
    return dealt ?
      [].concat(this.__dealtCards) :
      [].concat(this.__undealtCards)
  }
  
  /**
   * Combines the card array and randomize. Reset the undealt array
   * @returns {undefined}
   */
  shuffle() {
    this.__undealtCards = [].concat(
      this.__undealtCards,
      this.__dealtCards
    ).sort(randomArraySortFunction)
    this.__dealtCards = []
  }
  
  /**
   * Deals a card, also records it in the dealt array (for record keeping)
   * @returns {string}
   * @throws {Error} if no more cards left
   */
  deal() {
    if (this.__undealtCards.length === 0) {
      throw new Error('All cards are dealt!')
    }
    
    const nextCard = this.__undealtCards.shift()

    this.__dealtCards.push(nextCard)
    return nextCard
  }
}

module.exports = Deck