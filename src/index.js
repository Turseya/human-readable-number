module.exports = function toReadable (number) {
    if ( number == 0) {
        return 'zero';
    }
    const numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',

    };
    const biggerNumbers = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    const dozens = {
        10: 'ten',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };
    
    const arrayNumber = number.toString().split('')

    if (number < 10) {
        return numbers[number].trim();
    } else if (number < 20) {
        return biggerNumbers[number].trim();
    } else if (number < 100) {
        const first = parseInt('' + arrayNumber[0] + '0')
        let second = numbers[arrayNumber[1]];

        if (arrayNumber[1] == 0) {
            second = '';
        }
        const result = dozens[first] + ' ' + second;
        return result.trim()
    } else if (number < 1000) {
        const realFirst = arrayNumber[0];
        arrayNumber.shift();
        const tempJoin = arrayNumber.join('')
        let firstName = ''
        let second = numbers[arrayNumber[1]];
        if (tempJoin > 9 && tempJoin < 20) {
            firstName = biggerNumbers[parseInt(tempJoin)]
            second = '';
        } else { 
            if (arrayNumber[0] != 0) {
                const first = parseInt('' + arrayNumber[0] + '0')
                firstName = dozens[first]
            }
            if (arrayNumber[1] == 0) {
                second = '';
            }
        }
        const result = `${numbers[realFirst]} hundred ${firstName} ${second}`
        return result.trim().replace(/\s{2,}/g, ' ')
    }
}
