
//create a shuffled array randomly   //////////////////////////////////////////////////////////////

var shuffledArr;
let alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function shuffle(array) {
	let shuffledArray = array.slice(0,array.length)
	var currentIndex = shuffledArray.length;
	var temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = shuffledArray[currentIndex];
		shuffledArray[currentIndex] = shuffledArray[randomIndex];
		shuffledArray[randomIndex] = temporaryValue;
	}

	return shuffledArray;
}

// the encryption function //////////////////////////////////////////////////////////////

function Encrypt(textArr){
shuffledArr = shuffle(alphabetArr);

var plainText = document.getElementById('plainText');
var cipherText = document.getElementById('cipherText');
var keyText = document.getElementById('key');

keyText.value == ""? keyText.value = shuffledArr.join().replace(/,/g, '') : shuffledArr = keyText.value = keyText.value;

textArr = plainText.value;
//console.log("Key : " + shuffledArr.join().replace(/,/g, '')); // Writes the created key on console


textArr = textArr.split(""); // Insert the plaintext to cipher in between first quotes, don't change the split method.

for(let k=0; k<textArr.length; k++){
if ((textArr[k] == ' ') || (textArr[k] == '\t') || (textArr[k] == '\n' || alphabetArr.indexOf(textArr[k].toUpperCase())==-1)){
continue;

}else
textArr[k]=shuffledArr[alphabetArr.indexOf(textArr[k].toUpperCase())];
    }
    cipherText.value = textArr.join().replace(/,/g, '');
//console.log(textArr.join().replace(/,/g, '')) // Writes the ciphering output on console
}


//the decryption function     //////////////////////////////////////////////////////////////
    

function Decrypt(cipheredText){
    let keyText = document.getElementById('key');
    let plainText = document.getElementById('plainText');
    let cipherText = document.getElementById('cipherText');
    let shuffledArr = keyText.value;

    cipheredText = cipherText.value;


    cipheredText = cipheredText.split("");
    for(let k=0; k<cipheredText.length;k++){
    if ((cipheredText[k] == ' ') || (cipheredText[k] == '\t') || (cipheredText[k] == '\n' || alphabetArr.indexOf(cipheredText[k].toUpperCase())==-1)){
    continue;

    }else
    cipheredText[k]=alphabetArr[shuffledArr.indexOf(cipheredText[k].toUpperCase())];
    }
    
    plainText.value = cipheredText.join().replace(/,/g, '');
    //console.log(textArr.join().replace(/,/g, '')) // Writes the deciphering output on console

}
    

