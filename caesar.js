let isEncryptMode = true;

  function Caesar_Cipher() {

    //  Runs when user clicks the Encrypt/Decrypt button.
    const input = document.getElementById("inputText").value;
    const shiftInput = document.getElementById("shift").value;
    const errorMsg = document.getElementById("errorMsg");
    const shift = parseInt(shiftInput);

    //Error Display
    const direction = isEncryptMode ? shift : -shift;

    errorMsg.textContent = "";

    // encrypting, shift forward -- decrypting, shift backward.

    if (isNaN(shift)) {
      errorMsg.textContent = "Please enter a valid number for shift.";
      return;
    }

      // if shift is not a number display a error
    let result = "";


    //Build output 

    for (let char of input) {

      // Loop on the each character in input txt

      const code = char.charCodeAt(0);

      // conditons manage the upper and lower case letter

      if (char >= 'A' && char <= 'Z') {
        result += String.fromCharCode(((code - 65 + direction + 26) % 26) + 65);
      } else if (char >= 'a' && char <= 'z') {
        result += String.fromCharCode(((code - 97 + direction + 26) % 26) + 97);
      } else {
        result += char;
      }
    }

    // non Alphabetic char unchaged like number or any symbol

    document.getElementById("outputText").value = result;
  }

  // Toggle Encrypt and Decrypt

  function swapMode() {
    isEncryptMode = !isEncryptMode;

    document.getElementById("fromLabel").textContent = isEncryptMode ? "From: Plaintext" : "From: Encrypted";
    document.getElementById("toLabel").textContent = isEncryptMode ? "To: Encrypted" : "To: Plaintext";

    const inputText = document.getElementById("inputText");
    const outputText = document.getElementById("outputText");
    const temp = inputText.value;

    inputText.value = outputText.value;
    outputText.value = temp;

    // Swap the content input and output

    inputText.readOnly = !isEncryptMode;
    outputText.readOnly = isEncryptMode;

    document.getElementById("actionButton").textContent = isEncryptMode ? "Encrypt" : "Decrypt";
  }