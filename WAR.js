const suits = ['Spades','Clubs','Diamonds','Hearts'];
const values =['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const number =[2,3,4,5,6,7,8,9,10,11,12,13,14];

const player1Hand = [];
const player2Hand = [];
const gameDeck =[];
let player1Score = 0;
let player2Score = 0;

class Card {
  constructor(suit,value,number){
      this.suit = suit
      this.value = value
      this.number = number
  }

}

class Deck extends Card {
    constructor(){
        super()
        this.suits= ['Spades','Clubs','Diamonds','Hearts'];
        this.values =['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        this.number =[2,3,4,5,6,7,8,9,10,11,12,13,14];
        this.gameDeck =[]
        this.shuffledDeck;
        this.player1= [];
        this.player2=[];
    }
    newDeck() {
    for (let i=0; i < this.suits.length; i++){
        for (let j=0; j< this.values.length;j++){
            this.gameDeck.push(new Card(this.suits[i],this.values[j],this.number[j]))
        }
    }
}
    shuffle(arr) { 
        let newPos,
            temp;

        for (let i = arr.length - 1; i > 0; i--){
            newPos = Math.floor(Math.random() * (i + 1));
            temp =arr[i];
            arr[i] = arr[newPos];
            arr[newPos] = temp;
        }
        return (this.shuffledDeck = arr);
    }

}   

  
  
  
  let testcard = new Card(suits[0],values[0],number[12])
 
  
  let casinoDeck = new Deck();

  casinoDeck.newDeck();
  console.log(casinoDeck.gameDeck);
  casinoDeck.shuffle(casinoDeck.gameDeck);
 


  

for( let i=0;i<casinoDeck.gameDeck.length;i++){
    if (i % 2 == 0) {
        player1Hand.push(casinoDeck.gameDeck[i])
    } else
    player2Hand.push(casinoDeck.gameDeck[i])
    }

 
console.log(player1Hand);
console.log(player2Hand);
 
for (let i=0; i<player1Hand.length;i++){
    if (player1Hand[i].number > player2Hand[i].number) {
        player1Score += 1
        console.log('Point awarded to Player 1')   
    } if (player2Hand[i].number > player1Hand[i].number){
        player2Score += 1
        console.log('Point awarded to Player 2')
    } if (player1Hand[i].number === player2Hand[i].number){ 
    console.log('Tie. No points awarded');
}
}
console.log(`
----------
Scoreboard:
Player1 score: ${player1Score}
player2 score: ${player2Score}
----------
`);
if (player1Score > player2Score) {
    console.log('Player 1 Wins')
    
} if (player2Score > player1Score) {
    console.log('Player 2 Wins')
    
};