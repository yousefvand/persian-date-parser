# Persian date parser

[![npm version](https://badge.fury.io/js/persian-date-parser.svg)](https://badge.fury.io/js/persian-date-parser) [![GitHub forks](https://img.shields.io/github/forks/yousefvand/persian-date-parser)](https://github.com/yousefvand/persian-date-parser/network) [![GitHub stars](https://img.shields.io/github/stars/yousefvand/persian-date-parser)](https://github.com/yousefvand/persian-date-parser/stargazers) [![GitHub issues](https://img.shields.io/github/issues/yousefvand/persian-date-parser)](https://github.com/yousefvand/persian-date-parser/issues) [![Code coverage](https://img.shields.io/badge/coverage-100%25-blueviolet)](https://github.com/yousefvand/persian-date-parser) [![GitHub license](https://img.shields.io/github/license/yousefvand/persian-date-parser)](https://github.com/yousefvand/persian-date-parser/blob/master/LICENSE)

Library for parsing date and time to desired format (Jalali, Gregorian or mixed).

When possible consider using built-in [Date.prototype.toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString#:~:text=The%20toLocaleDateString()%20method%20returns,the%20behavior%20of%20the%20function.) method.

## Usage

```bash
> npm i persian-date-parser
```

```js
const parser = require('persian-date-parser')
```

From the above line `parser` accepts an optional argument as the limit of cache entries. Each cache entry has a string (format) as its key (i.e. `'gyyyy-gm-gd'`) and a function as its value. If in your use-case format strings are limited, parser can benefit from caching those functions. On subsequent parsings for the same format, tokenizing and arranging steps are the same and can be bypassed by using cache, which results in better performance.

| Cache size limit | Description                                                            |
|:----------------:|:-----------------------------------------------------------------------|
| > 0              | Any positive number. Bigger numbers mean more memory usage.            |
| -1               | No caching. Default behavior.                                          |
| 0                | Unlimited caching a.k.a memory leak. Use with caution.                 |

```js
const parse = parser() // no caching by default
```

or

```js
const parse = parser(1000) // cache up to 1000 entries (FIFO)
```

```js
const now = new Date()
```

Jalali example:

```js
const format = 'pjyyyy/pjmm/pjdd - pjdddd - pjHH:pjMM pjTT'
const result = parse(format, now)
// result: ۱۳۹۹/۰۶/۰۹ - یکشنبه - ۲۱:۳۶ ب.ظ
```

Gregorian Example:

```js
const format = 'gyyyy/gmm/gdd - gdddd - gHH:gMM gTT'
const result = parse(format, now)
// result: 2020/08/30 - Sunday - 21:36 PM
```

## Masks

Masks are according to following table but there are three general prefixes used with them. Using `g` or `j` is mandatory.

- `g`: **Gregorian** date.

- `j`: **Jalali** date.

- `p`: Represent results in **Persian** when possible (numbers, month names, weekdays and their abbreviations).

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
