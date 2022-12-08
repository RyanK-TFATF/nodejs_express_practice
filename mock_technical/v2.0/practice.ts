/* Data Types 
const myArr:any [] = [];
const myObj: {} = {};
const myBool: boolean = true;
const myNum: number = 1; 
const myString: string = 'Hello, world.'; 
const myNaN = NaN; 
const myUndef: undefined = undefined; 
const myNull: null = null; 
*/ 

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
        rarity: 'Rare'
    },
    {
        name: 'Lightning Bolt', 
        color: 3, 
        manaValue: 1,
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
        rarity: 'Rare'
    },
    {
        name: 'Sengir Vampire', 
        color: 2, 
        manaValue: 5,
        cardType: 'Creature',
        rarity: 'Rare'
    },
];

// Create a new array of cards that are Instants only. 
const newCards = myCards.filter((card:any) => { // Forgot :any after card
    return card.cardType === 'Instant';      
});
console.log(newCards);