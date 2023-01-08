const cardArray = [
 {
     name: 'fries',
     img: 'images/fries.png',
 },
 {
     name: 'cheeseburger',
     img: 'images/cheeseburger.png',
 },
 {
     name: 'hotdog',
     img: 'images/hotdog.png',
 },
 {
     name: 'ice-cream',
     img: 'images/ice-cream.png',
 },
 {
     name: 'milkshake',
     img: 'images/milkshake.png',
 },
 {
     name: 'pizza',
     img: 'images/pizza.png',
 },
 {
     name: 'fries',
     img: 'images/fries.png',
 },
 {
     name: 'cheeseburger',
     img: 'images/cheeseburger.png',
 },
 {
     name: 'hotdog',
     img: 'images/hotdog.png',
 },
 {
     name: 'ice-cream',
     img: 'images/ice-cream.png',
 },
 {
     name: 'milkshake',
     img: 'images/milkshake.png',
 },
 {
     name: 'pizza',
     img: 'images/pizza.png',
 }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

//create the game board
function createBoard() {
     for (let i = 0; i < cardArray.length; i++) {
          const card = document.createElement('img')
          card.setAttribute('src', 'images/blank.png')
          card.setAttribute('data-id', i)
          card.addEventListener('click', flipCard)
          grid.appendChild(card)
     }
}

//check for matches
function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert(`You've clicked the same image!`)
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        alert(`You've found a match!`)
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length == (cardArray.length/2)) {
        resultDisplay.textContent = `Congratulations you've found them all!`
    }
}

//flip the cards
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout( checkMatch, 500)
    }

}
createBoard()
