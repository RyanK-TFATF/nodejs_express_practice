// Define Interfaces First 
interface User { // Always at OBJECT LEVEL when creating the Interface.  
    first_name: string;
    last_name: string;
    email: string;
    phone?: string; 
    
    // [key: string]:any; Allows any dynamic value added to the user object. 
}; 

/*
interface Users {
    users: User[]; // Refers to the array of User. 
}
*/ 

// User: First Name, Last Name, Email, Phone. 
const objArr: User[] = [
    {
        first_name: 'Ryan', 
        last_name: 'Kelley', 
        email: 'example@mail.com', 
        phone: '904-123-4567'

    }, 
    {
        first_name: 'Bob', 
        last_name: 'Ross', 
        email: 'paint@painter.com', 
        phone: '904-567-8901'

    }, 
    {
        first_name: 'Mike', 
        last_name: 'Smith', 
        email: 'mike@mail.com', 
        phone: '123-456-7890'
    } 
];

// Best practices to make a copy, then make changes.  
const newArr = objArr.map((user) => {
    // const {first_name} = user; 
    const newUser = {
        ...user, // {...} Spread operator, used only for copying arrays and objects.  (Copies all key:value pairs for each object/array element.)
        email: 'b10@live.com',         
    };       
    return newUser; 
});
console.log(newArr); 

// Create Class Named Person: 

class Person {
    private readonly first_name!: string; // Create a local variable.  ! means data will assigned later.  
    constructor(user: User) {
        // for ... in for looping through objects. 
        // for ... of for looping through arrays. 
        for (const key in user) {
            (this as any)[key] = (user as any)[key]; // Dynamically select items from array/object in TypeScript.  
        }
    }   
    // Methods that live within a class. 
    getFirstName() {
        this.first_name = 'Hello'; 
    }

    async sleeper() { 
        const myAPICall = await new Promise((resolve, reject) => {
            setTimeout(() => { 
                resolve('I am done!'); 
            }, 6000)
        }) 
        return myAPICall; // Do something with the data we waited on. 
    }
}

const newGuy = new Person(objArr[1]);
console.log(newGuy.getFirstName()); 
const resolvedString = newGuy.sleeper(); // Best Practices if .then() is not needed. 
newGuy.sleeper().then((resolvedString) => { // .then() is only used with Promises, execute code after getting Promise back.  
    console.log(resolvedString);
}) // .then --> RESOLVE, .catch --> REJECT, .finally --> EITHER FINISHES
console.log('We are done.'); 

function test() {
    return new Promise((resolve, reject) => {
        
    })
}

/* 
class People {
    constructor(users: User[]) {

    }
}
*/ 

// Classes TypeScript (Create, Methods, Constructor, Private = Read-Only, Pub)


