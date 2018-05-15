# card-deck
Small demo of a deck of cards

## Data Structure

An instance of the `Deck` object keeps two private arrays: `__undealtCards` and `__dealtCards`. Each element is a string representing a card, with a rank and suit. For example, '9C' would be nine of clubs.

When a new instance is created, `__undealtCards` is created with a full deck, shuffled.

When a card is dealt, it's shifted from `__undealtCards` and pushed onto `__dealtCards`.

When a deck needs to be shuffled again, it's simply concatenating both arrays and randomize.

The benefit of keeping track of dealt cards is having a history of cards being dealt.

## Usage

The `Deck` class resides in `modules/deck.js`. Simply `require()` to use.

```
let Deck = require('./modules/deck')
let deck = new Deck()
```

## API

### `getCards()`

Returns a copy of dealt/undealt cards array. It is a copy to ensure it's immutable

#### Parameters

`{dealt: boolean}`

Returns either dealt cards or undealt cards

#### Exceptions

Thrown when param is not a boolean

### `shuffle()`

Combines the card array and randomize. Reset the undealt array

#### Parameters

None

#### Exceptions

None

### `deal()`

Deals a card, also records it in the dealt array

#### Parameters

None

#### Exceptions

Thrown when there's no more undealt cards left

## Run
- `npm start`

## Test
- `npm run lint`: run just lint
- `npm run mocha`: run just Mocha unit tests
- `npm run test`: run both