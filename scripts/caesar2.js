var caesarEncrypt = function(str, amount) {

    var plain = document.getElementById('plainText');
    var shift = document.getElementById('shift');
    var cipher = document.getElementById('cipherText');

    str = plain.value;
    amount = parseInt(shift.value);


	// Wrap the amount
    if (amount < 0)
		return caesarEncrypt(str, (amount + 26));

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	cipher.value = output;

};


var caesarDecrypt = function(str, amount) {

    var plain = document.getElementById('plainText');
    var shift = document.getElementById('shift');
    var cipher = document.getElementById('cipherText');

    str = plain.value;
    amount = parseInt(shift.value);


	// Wrap the amount
    // if (amount < 0)
    //     return caesarDecrypt(str, (amount+26));

	
	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	cipher.value = output;


};