interface MagicCards {
    name: string;
    color: number; // 0 - White, 1 = Blue, 2 = Black, 3 = Red, 4 = Green, 5 = Colorless
    manaValue: number;
    cardType?: string; 
    rarity: string;    
}

// Create Array of Objects Using MagicCards Interface 
const myCards: MagicCards[] = [
    {
        name: 'Black Lotus', 
        color: 5, 
        manaValue: 0,
        cardType: undefined,
        rarity: 'Rare'
    },
    {
        name: 'Lightning Bolt', 
        color: 3, 
        manaValue: 2,
        cardType: 'Instant',
        rarity: 'Common'
    },
    {
        name: 'Brain Storm', 
        color: 1, 
        manaValue: 1,
        cardType: 'Instant',
        rarity: 'Common'
    },
    {
        name: 'Serra Angel', 
        color: 0, 
        manaValue: 5,
        cardType: 'Creature',
        rarity: 'Unknown'
    },
    {
        name: 'Sengir Vampire', 
        color: 2, 
        manaValue: 5,
        cardType: 'Creature',
        rarity: 'Rare'
    },
    {
        name: 'Plains', 
        color: 0, 
        manaValue: 0,
        cardType: 'Land',
        rarity: 'Basic Land'
    },
    {
        name: 'Swamp', 
        color: 0, 
        manaValue: 0,
        cardType: 'Land',
        rarity: 'Basic Land'
    },
    {
        name: 'Island', 
        color: 0, 
        manaValue: 0,
        cardType: 'Land',
        rarity: 'Basic Land'
    },
    {
        name: 'Forest', 
        color: 0, 
        manaValue: 0,
        cardType: 'Land',
        rarity: 'Basic Land'
    },
    {
        name: 'Mountain', 
        color: 0, 
        manaValue: 0,
        cardType: 'Land',
        rarity: 'Basic Land'
    },

];
// console.log(myCards); ARRAY WORKING @ 9:57PM 12/09/22

/* Create a sum of the mana values of all cards in the array.  WORKING @ 10:23PM 12/09/22 

const manaValueArr = myCards.map((card) => {
    return card.manaValue;
});

console.log('Mana Value Array');
console.log(manaValueArr);

function getCMCSum(total: number, num: number) {
    return total + num;
}

const manaValueSum = manaValueArr.reduce(getCMCSum, 0);
console.log('Mana Value Sum');
console.log(manaValueSum);
*/ 

/* NOT COMPLETE -- Create two random 'decks' from the myCards array. -- NOT COMPLETE
function createDeck(collection, cardList) {
    collection = myCards;
    for
}
*/ 

/* NOT COMPLETE -- async / await Syntax -- NOT COMPLETE 
async function drawCard(card) {
    card = {...myCards}
    const newCard0 = await 
}
*/ 