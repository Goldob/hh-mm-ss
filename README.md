# hh-mm-ss: time formatting utility
[![Build Status](https://travis-ci.org/Goldob/hh-mm-ss.svg?branch=master)](https://travis-ci.org/Goldob/hh-mm-ss)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


:watch: Convert miliseconds to `hh:mm:ss` format and vice versa.

```js
var TimeFormat = require('hh-mm-ss')

TimeFormat.toMs('137:00:00')           // 493200000

TimeFormat.fromMs(194000)              // '03:14'
TimeFormat.fromMs(420)                 // '00:00.420'
TimeFormat.fromMs(150000, 'hh:mm:ss')  // '00:02:30'

TimeFormat.fromS(194)			// '03:14'
TimeFormat.fromS(150, 'hh:mm:ss')	// '00:02:30'
```

## Usage

### `toMs(time)`

Convert given `hh:mm:ss` formatted string to miliseconds

#### Parameters
- `time` String representation

### `fromMs(ms, format)`

Generate formatted string from time in miliseconds

### `fromS(s, format)`

Generate formatted string from time in seconds

#### Parameters
- `ms` Time in miliseconds
- `format` _(optional)_ Default output format. If not specified, `mm:ss` is implied. See section below for supported format list

### Supported time formats
The following formats are supported: `mm:ss`, `hh:mm:ss`, `mm:ss.sss`, `hh:mm:ss.sss`.

- `hh` - hours
- `mm` - minutes
- `ss` - second
- `sss` - miliseconds

## Install

`npm install hh-mm-ss --save`

## License

MIT
