function caesarCipher(string, shiftPositions){
    
    string = string.split("");
    shiftedString = string.map( el => { 
        let shiftAux;
        let elCode = el.charCodeAt(0);
        if(elCode + shiftPositions > 255) shiftAux = shiftPositions- 255 + 31; //if ascci code >255, we start form ascii printable characters from position 32
        el = String.fromCharCode(elCode + (shiftAux || shiftPositions));
        return el;
    })

    return shiftedString.join("");
}

caesarCipher("ýþÿ", 3)


module.exports = caesarCipher;