// Data Types 
const myArr: [] = [];
const myObj: {} = {};
const myBool: boolean = true;
const myNum: number = 1; 
const myString: string = 'Hello, world.'; 
const myNaN = NaN; 
const myUndef: undefined = undefined; 
const myNull: null = null; 

interface MagicCards {
    name: string;
    color: number; // 0 - White, 1 = Blue, 2 = Black, 3 = Red, 4 = Green, 5 = Colorless
    manaValue: number;
    cardType?: string; 
    rarity: string;    
}

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
];
