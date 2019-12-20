function encrypt(word,keyword) {

    var plainText = document.getElementById('plainText');
    var cipherText = document.getElementById('cipherText');
    var key = document.getElementById('key');

    word = plainText.value;
    keyword = key.value;

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var encryptedWord = "";
    for (var i = 0;i < word.length;i++) {
      encryptedWord += alphabet.charAt((alphabet.indexOf(word.charAt(i)) + alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length); //لما ال  i=0 بجيب الاندكس بتاع ال اف ف اللي الالفابت وبجيب الاندكس بتاع ال دابلو ف ال الالفابت وبجمعهم مع بعض ف هيبقي الناتج 27 وبعدين بجيب موديلوس ال 27 من الالفابيت وهيبقي 1 وبعدين بجيب الاكاركتر اللي ف اندكس 1
    }
    cipherText.value = encryptedWord;
  }
  
function decrypt(word,keyword) {

    let plainText = document.getElementById('plainText');
    let cipherText = document.getElementById('cipherText');
    let key = document.getElementById('key')

    word = cipherText.value;
    keyword = key.value;

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var decryptedWord = "";
    for (var i = 0;i < word.length;i++) {
        decryptedWord += alphabet.charAt(((alphabet.indexOf(word.charAt(i)) + alphabet.length) - alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
    }
    plainText.value = decryptedWord;
  }