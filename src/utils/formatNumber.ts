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