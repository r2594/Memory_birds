
//elementList = parentNode.querySelectorAll(selectors);
//retourne une nodelist des élements spécifiés.
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
//la fonction qui active le flip sur le clic. ligne 57.
function flipCard() {
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
     return;
   }

   secondCard = this;
   hasFlippedCard = false;

   checkForMatch();
 }

 function checkForMatch() {
   if (firstCard.dataset.framework === secondCard.dataset.framework) {
     disableCards();
     return;
   }

   unflipCards();
 }

 function disableCards() {
    setTimeout(() => {
        firstCard.classList.add('gone');
        secondCard.classList.add('gone');
    }, 850);

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
 }

 function unflipCards() {
   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
   }, 850);
 }

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));