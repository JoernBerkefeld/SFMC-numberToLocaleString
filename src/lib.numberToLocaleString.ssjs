/* exported numberToLocaleString */

/**
 * method that prints out parameters handed to a triggerd send email via API call
 * @author Jörn Berkefeld <joern.berkefeld@gmail.com>
 * @copyright 2020 https://github.com/JoernBerkefeld/SFMC-numberToLocaleString
 * @license MIT
 * @param {string} number - the string you want converted into JSON
 * @param {string} maxDecimals - the string you want converted into JSON
 * @param {string} locale - the string you want converted into JSON
 * @returns {numberToLocaleString} - class methods
 */
function numberToLocaleString(number, maxDecimals, locale) {
    var transformForLocale = {
        da: 'dotThousCommaDec',
        'de-AT': 'dotThousCommaDec',
        'de-BE': 'dotThousCommaDec',
        'de-CH': 'apostrophThousDotDec',
        'de-DE': 'dotThousCommaDec',
        'de-LI': 'apostrophThousDotDec',
        de: 'dotThousCommaDec',
        en: 'commaThousDotDec',
        fr: 'spaceThousCommaDec',
        hu: 'spaceThousCommaDec',
        it: 'dotThousCommaDec',
        nb: 'spaceThousCommaDec',
        ro: 'dotThousCommaDec',
        sv: 'spaceThousCommaDec'
    };
    var combinations = {
        dotThousCommaDec: ['.', ','],
        apostrophThousDotDec: ['’', '.'],
        commaThousDotDec: [',', '.'],
        spaceThousCommaDec: [' ', ',']
    };
    var options;
    var service = constructor(number, maxDecimals, locale);

    return service;

    /**
     * convert string to JSON
     *
     * @param {string} number - the string you want converted into JSON
     * @param {string} maxDecimals - the string you want converted into JSON
     * @param {string} locale - the string you want converted into JSON
     * @returns {Object} javascript object based on the string
     */
    function constructor(number, maxDecimals, locale) {
        if ((!maxDecimals && maxDecimals !== 0) || maxDecimals < 0) {
            maxDecimals = 2;
        }
        if (!locale) {
            Write('locale not set');
        }
        if (!transformForLocale[locale]) {
            locale = locale.split('-')[0];
        }
        if (!transformForLocale[locale]) {
            Write('could not find locale');
        }
        options = combinations[transformForLocale[locale]];
        var thousandSeparator = options[0];
        var decimalSeparator = options[1];

        var sNum = Stringify(number);
        var numParts = sNum.split('.');

        // ensure we have the right amount of decimals
        if (numParts.length === 1) {
            // no decimals given
            numParts[1] = '';
        }
        var decimalsLength = numParts[1].length;
        if (maxDecimals && decimalsLength > maxDecimals) {
            // too many decimals - shorten
            numParts[1] = Substring(numParts[1], 0, maxDecimals);
        } else if (maxDecimals && decimalsLength < maxDecimals) {
            // not enough decimals
            for (var j = decimalsLength; j < maxDecimals; j++) {
                numParts[1] += '0';
            }
        }

        // handle thousand separator
        var wholeNumber = null;
        var i;
        for (i = numParts[0].length - 3; i >= 0; i = i - 3) {
            if (wholeNumber != null) {
                wholeNumber = Substring(numParts[0], i, 3) + thousandSeparator + wholeNumber;
            } else {
                wholeNumber = Substring(numParts[0], i, 3);
            }
        }
        if (i < 0) {
            i += 3;
        }
        if (i != 0) {
            if (wholeNumber != null) {
                wholeNumber = Substring(numParts[0], 0, i) + thousandSeparator + wholeNumber;
            } else {
                wholeNumber = Substring(numParts[0], 0, i);
            }
        }
        numParts[0] = wholeNumber;

        // prep final output with decimal separator
        if (maxDecimals !== 0) {
            sNum = numParts.join(decimalSeparator);
        } else {
            sNum = numParts[0];
        }
        return sNum;
    }
}
