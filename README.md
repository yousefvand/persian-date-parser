# Persian date parser

A **Javascript** library for parsing date and time to desired format (Jalali, Gregorian or mixed).

When possible consider using built-in [Date.prototype.toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString#:~:text=The%20toLocaleDateString()%20method%20returns,the%20behavior%20of%20the%20function.) method.

## Usage


```bash
$ npm i persian-date-parser
```


```js
const pdp = require('persian-date-parser')

console.log(pdp('pjyyyy/pjmm/pjdd - pjdddd - pjHH:pjMM pjTT', new Date(), true))
۱۳۹۹/۰۶/۰۷ - جمعه - ۰۹:۴۶ ق.ظ
```

The last boolean option if set `true` partially **caches** results for the input format. If you parse different formats on each call frequently **DO NOT** set it to `true`.

## Masks

Masks are according to following table but there are three general prefixes used with them. Using `g` or `j` is mandatory.

- `g`: **Gregorian** date.

- `j`: **Jalali** date.

- `p`: Represent results in **Persian** when possible (numbers, month names...)

| Mask | Description                                                            |
|:-----|:-----------------------------------------------------------------------|
| d    | Day of the month as digits. No leading zero for single-digit days.     |
| dd   | Day of the month as digits. Leading zero for single-digit days.        |
| ddd  | Day of the week as a three-letter abbreviation. Persian -> one-letter. |
| dddd | Day of the week as its full name.                                      |
| m    | Month as digits. No leading zero for single-digit months.              |
| mm   | Month as digits. Leading zero for single-digit months.                 |
| mmm  | Month as a three-letter abbreviation.                                  |
| mmmm | Month as its full name.                                                |
| yy   | Year as last two digits. Leading zero for years less than 10.          |
| yyyy | Year represented by four digits.                                       |
| h    | Hours. No leading zero for single-digit hours (12-hour clock).         |
| hh   | Hours. Leading zero for single-digit hours (12-hour clock).            |
| H    | Hours. No leading zero for single-digit hours (24-hour clock).         |
| HH   | Hours. Leading zero for single-digit hours (24-hour clock).            |
| M    | Minutes. No leading zero for single-digit minutes.                     |
| MM   | Minutes. Leading zero for single-digit minutes.                        |
| s    | Seconds. No leading zero for single-digit seconds.                     |
| ss   | Seconds. Leading zero for single-digit seconds.                        |
| t    | Lowercase, single-character time marker string: a or p.                |
| tt   | Lowercase, two-character time marker string: am or pm.                 |
| T    | Uppercase, single-character time marker string: A or P.                |
| TT   | Uppercase, two-character time marker string: AM or PM.                 |
