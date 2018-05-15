/**
 * Unit test for deck class
 */

const expect = require('chai').expect

const Deck = require('../modules/deck')

const CARD_COUNT = 52

describe('Deck', function() {
  let deck

  beforeEach(function() {
    deck = new Deck()
  })

  describe('#getCards()', function() {

    it('should generate and shuffle a new deck', function() {
      const cards = deck.getCards()

      expect(cards.length).to.equal(CARD_COUNT)
    })

    it('should return unique cards', function() {
      const cards = deck.getCards()
      
      cards.forEach(card => {
        expect(
          cards.filter(aCard => card === aCard).length
        ).to.equal(1)
      })
    })

    it('should return undealt and dealt cards', function() {
      const undealtCards = deck.getCards({dealt: false})
      deck.deal()
      const dealtCards = deck.getCards({dealt: true})

      expect(undealtCards.length).to.equal(CARD_COUNT)
      expect(dealtCards.length).to.equal(1)
    })

    it('should throw exception with non-boolean parameter', function() {
      try {
        deck.getCards({dealt: 1})
      } catch (error) {
        expect(error.message.indexOf('boolean')).to.be.greaterThan(-1)
      }
    })

  })

  describe('#shuffle()', function() {

    it('should return new randomized deck', function() {
      const cards = deck.getCards()
      deck.shuffle()
      const shuffledCards = deck.getCards()

      expect(shuffledCards.length).to.equal(CARD_COUNT)
      expect(
        cards.join('')
      ).to.not.equal(
        shuffledCards.join('')
      )
    })

  })

  describe('#deal()', function() {

    it('should deal the first card from the deck', function() {
      const cards = deck.getCards()
      const card = deck.deal()

      expect(cards[0]).to.equal(card)
    })

    describe('after all cards are dealt,', function() {
      
      beforeEach(function() {
        const cards = deck.getCards()

        for (let i = 0; i < cards.length; i++) {
          deck.deal()
        }
      })

      it('should return empty undealt deck', function() {
        expect(deck.getCards().length).to.equals(0)
        expect(deck.getCards({dealt: true}).length).to.equals(CARD_COUNT)
      })

      it('should throw exception when attempt to deal another card', function() {
        try {
          deck.deal()
        } catch (error) {
          expect(error.message.indexOf('dealt')).to.be.greaterThan(-1)
        }
      })

    })

  })

})