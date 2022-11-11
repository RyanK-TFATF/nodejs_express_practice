// Import the encryptors functions here.
const { caesarCipher } = require('./encryptors.js'); 
const { symbolCipher } = require('./encryptors.js'); 
const { reverseCipher } = require('./encryptors.js'); 

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  return symbolCipher(reverseCipher(caesarCipher(str, 5))); // Used hint. 
}

/* 
My Initial Attempt
const encodeMessage = (str) => {
  // Use the encryptor functions here.
  let string = str; 
  string = caesarCipher(str, 5);
  string = reverseCipher(string);
  string = symbolCipher(string);
  return string; 
}
*/ 


const decodeMessage = (str) => {
  // Use the encryptor functions here.
  return caesarCipher(reverseCipher(symbolCipher(str)), -5); // Used hint, why -5? Read code more closely, caesarCipher usest the amount argument to shift the characters, use -amount to shift back. 
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);