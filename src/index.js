const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let resultStr = '';
    let tempStr = expr;
    const arrCode = [];
    let tempChar = '';
    let codeChar = '';
    let morseStr = '';
    for (i = 0; i < tempStr.length; i++) {
        tempChar += tempStr[i]
        if (tempChar.length === 10) {
            arrCode.push(tempChar);
            tempChar = '';
        }
    }
    for (i = 0; i < arrCode.length; i++) {
        if (arrCode[i] == '**********') {
            resultStr.push(' ');
        } else {
            for (j = 0; j < arrCode[i].length; j++) {
                codeChar += arrCode[i][j];
                if (codeChar.length === 2) {
                    if (codeChar === '00') { morseStr += ''; }
                    else if (codeChar === '10') { morseStr += '.'; }
                    else if (codeChar === '11') { morseStr += '-'; }
                }
                resultStr.push(morseStr);
            }
        }
    }

    // write your solution here
    return resultStr;
}

module.exports = {
    decode
}