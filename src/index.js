const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let arrayWithCodeLetters = [];
    let objEncode = {
        '**********': ' '
    }

    for (let prop in MORSE_TABLE) {
        let codedLetter = '';

        for (let i = 0; i < prop.length; i++) {
            if (prop[i] === '.') {
                codedLetter += '10';
            } else {
                codedLetter += '11';
            }
        }

        if (codedLetter.length < 10) {
            objEncode['0'.repeat(10 - codedLetter.length) + codedLetter] = MORSE_TABLE[prop];
        } else {
            objEncode[codedLetter] = MORSE_TABLE[prop];
        }
    }

    for (let i = 0, start = 0, end = 10; i < (expr.length / 10); i++ , start += 10, end += 10) {
        arrayWithCodeLetters.push(expr.slice(start, end));
    }

    let initialValue = '';
    let result = arrayWithCodeLetters.reduce(
        (accumulator, currentValue) => accumulator + objEncode[currentValue],
        initialValue
    );
    return result;
}

module.exports = {
    decode
}