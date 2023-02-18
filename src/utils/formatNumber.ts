import numeral from 'numeral';

if (numeral.locales.en === undefined) {
    numeral.register('locale', 'en', {
        delimiters: {
            thousands: ',',
            decimal: '.',
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal(num: number) {
            switch (num) {
                case 1:
                    return 'st';
                case 2:
                    return 'nd';
                case 3:
                    return 'rd';
                default:
                    return 'th';
            }
        },
        currency: {
            symbol: '$.'
        }
    });
}

numeral.locale('en');

export function fCurrency(number: string | number) {
    return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

export function fCurrencyCap(number: string | number, upper: boolean = true) {

    const resp = numeral(number).format('($ 0.00 a)');
    return upper ? resp.toUpperCase() : resp;
}

export function fPercent(number: number) {
    return numeral(number / 100).format('0.0%');
}

export function fNumber(number: string | number) {
    return numeral(number).format();
}

export function fNumberFloat(number: string | number, fomat: string = '0,0.00') {
    return numeral(number).format(fomat);
}

export function fShortenNumber(number: string | number) {
    return numeral(number).format('0.00a');
}

export function fData(number: string | number) {
    return numeral(number).format('0.0 b');
}


export function toInt_ss(number: string | number) {
    return numeral(Number(number || 0) <= 0 ? 0 : number).value() as number;
}

export function superScript(number: number) {

    const numberString = number.toString();
    const _superscript = [ '⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹' ];
    return numberString.split('').map((char) => _superscript[ toInt_ss(char) ]).join('');
}

export function subscript(number: number) {
    const numberString = number.toString();
    const _subscript = [ '₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉' ];
    return numberString.split('').map((char) => _subscript[ toInt_ss(char) ]).join('');
}


export function getPrecision(num: number, fractionDigits: number) {

    const str = (num || 0).toFixed(fractionDigits);
    const [ before, after ] = str.split('.');
    const zerosBefore = before.length - 1;
    const firstNonZeroChar = after?.split('').findIndex(char => char !== '0');
    const zerosAfter = firstNonZeroChar === -1 ? 0 : firstNonZeroChar;
    const precision = zerosBefore + zerosAfter;

    return {
        precision,
        zerosBefore,
        zerosAfter,
        decimal: after?.slice(firstNonZeroChar, after.length)
    };
}

export function tokenPriceShitFormat(value: number, fractionDigits: number) {

    if (value >= 0.01)
        return toDecimal(value, 2);

    const { precision, decimal } = getPrecision(value, fractionDigits);
    const ss = subscript(precision);

    return `0.0${ss}${decimal}`;
}

export function toDecimal(amount: string | number, digits = 2) {

    const number = Number(amount);

    const decimalFormatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: digits
    });

    return decimalFormatter.format(number);
}