function cesar(msg){
    let text = msg;
    let valueDisplace = 3;
    return text.split('').map(l => {
        let upper = (l === l.toUpperCase());
        let valueComplete = l.toLowerCase().charCodeAt(0);
        if (valueComplete >= 97 && valueComplete <= 122) {
            if ((valueComplete + valueDisplace) > 122) {
                valueComplete = 97 + (valueComplete - 122) + valueDisplace - 1;
            } else {
                valueComplete = valueComplete + valueDisplace;
            }
        }
        let encrypted = String.fromCharCode(valueComplete);
        return upper ? encrypted.toUpperCase() : encrypted;
    }).join('');
}

const cesarEncrypt = cesar('Hello World');
console.log('Text Encrypted: ' + cesarEncrypt);
