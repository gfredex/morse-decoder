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
    let resultStr = [];
    let tempStr = expr;
    const arrCode = [];
    let tempChar = '';
    let codeChar = '';
    let morseStr = '';
    let decoderText = '';
    for (i = 0; i < tempStr.length; i++) {
        tempChar += tempStr[i];
        if (tempChar.length === 10) {
            arrCode.push(tempChar);
            tempChar = '';
        }
    }
    // console.log(arrCode);

    for (i = 0; i < arrCode.length; i++) {
        if (arrCode[i] == '**********') {
            resultStr.push(' ');
        } else {

            for (j = 0; j < 10; j++) {
                // console.log(arrCode[i].length);
                codeChar += arrCode[i][j];

                if (codeChar.length === 2) {
                    console.log(codeChar);
                    if (codeChar === '00') { morseStr += ''; }
                    else if (codeChar === '10') { morseStr += '.'; }
                    else if (codeChar === '11') { morseStr += '-'; }

                    console.log(morseStr);

                    codeChar = '';
                }

            }
            resultStr.push(morseStr);
            morseStr = '';
            // resultStr.push(morseStr);
        }
    }

    for (i = 0; i < resultStr.length; i++) {
        if (resultStr[i] === ' ') {
            decoderText += resultStr[i];
        } else {
            for (let key in MORSE_TABLE) {
                if (resultStr[i] == key) {
                    decoderText += MORSE_TABLE[key];
                }
            }
        }

    }

    // write your solution here
    return decoderText;
}

module.exports = {
    decode
}