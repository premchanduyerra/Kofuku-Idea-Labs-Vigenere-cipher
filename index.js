function vigenereDecrypt(encryptedText, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decryptedText = "";

    for (let i = 0; i < encryptedText.length; i++) {
        // Get the position of the current encrypted letter and key letter
        let encryptedLetterIndex = alphabet.indexOf(encryptedText[i]);
        let keyLetterIndex = alphabet.indexOf(key[i % key.length]);

        // Decrypt: Subtract key letter position from encrypted letter position, mod 26
        let decryptedLetterIndex = (encryptedLetterIndex - keyLetterIndex + 26) % 26;
        decryptedText += alphabet[decryptedLetterIndex];
    }

    return decryptedText;
}

// Given data
const encryptedText = "RNRGTIGSBCDSUCKNSJYQFHIUTPICVKQBPEJGMPPU";
const key = "PZEACINYQCKKGPSPEPWCTSXQALFJOGQJXWDTALCB";

// Decrypt the message
const decryptedMessage = vigenereDecrypt(encryptedText, key);
console.log(decryptedMessage);
