/*
 * Create a list that holds all of your cards
 */
// let cards = document.querySelectorAll('.card');
let cards = document.querySelector('.deck').childNodes;
let allCards = document.getElementsByClassName('card');
let cardNames = [
    "diamond",
    "paper-plane-o",
    "anchor",
    "bolt",
    "cube",
    "leaf",
    "bicycle",
    "bomb",
    "diamond",
    "paper-plane-o",
    "anchor",
    "bolt",
    "cube",
    "leaf",
    "bicycle",
    "bomb"
];
let deck = document.querySelector('.deck');
let cardsClickedOn = [];
let match = [];
let deckHTML = " ";
// let moves = document.querySelector('.moves').textContent;
/*
 * Display the cards on the page*/
/*   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//starting a new game
function newGame() {
    document.querySelector('.moves').textContent = 0;
    let shuffledCards = shuffle(cardNames);
    cardNames.map(function(card) {
        deckHTML += `<li class="card">
  <i class="fa fa-${card}"></i>
  </li>`;
        return deckHTML;
    });
    deck.innerHTML = deckHTML;
} //closes newGame

newGame();

function showCards() {
    for (i = 0; i < cardNames.length; i++) {
        cards[i].addEventListener('click', function(evt) {
          cardsClickedOn.push(evt.target);
          function seeIfCardsMatch(cardsClickedOn) {
            console.log('fx seeIfCardsMatch fires');
          };

            if (cardsClickedOn.length <= 2) {
              evt.target.classList.add("show", "open");
              seeIfCardsMatch();
            } else {

            } //closes if else
        }); //closes event listenr
    } //closes for loop
} //closes showCards fx

showCards();

function limitCardsBy2() {
    cards.forEach(function(card) {}); //closes forEach
} //closes limitCardsBy2()

// function seeIfCardsMatch() {
//     if (cardsClickedOn[0] == cardsClickedOn[1]) {
//         match.push(cardsClickedOn[0], cardsClickedOn[1]);
//         cardsClickedOn.classList.add('match');
//         // matchedCards();
//         console.log('a match found and it fires');
//     } else {
//         // cardsClickedOn = [];
//         //empty out the cardsClickOn
//         console.log('no matches found but it fires');
//     }
// } //closes seeifcardsmatch

function matchedCards() {
    // cards.classList.add('show', 'open', 'match');
    //close eventlistener
    console.log('matchedcards fx fires');
} //closes matchedcards
/*
 * set up the event listener for a card. If a card is clicked:*/
/*  - display the card's symbol (put this functionality in another function that you call from this one)*/
/*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
