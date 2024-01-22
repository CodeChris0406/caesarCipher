function rot13(str) {
    var decodedStr = '';

    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {  
            var newCharCode = charCode + 13;
            if (newCharCode > 90) {
                newCharCode -= 26;
            }
            decodedStr += String.fromCharCode(newCharCode);
        } else {
            decodedStr += str.charAt(i); 
        }
    }

    return decodedStr;
}

rot13("SERR PBQR PNZC");
