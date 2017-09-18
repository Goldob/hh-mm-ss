# hh-mm-ss: time formatting utility
[![Build Status](https://travis-ci.org/Goldob/hh-mm-ss.svg?branch=master)](https://travis-ci.org/Goldob/hh-mm-ss)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


:watch: Convert seconds or miliseconds to `hh:mm:ss` format and vice versa.

```js
var TimeFormat = require('hh-mm-ss')

TimeFormat.toS('137:00:00')            // 493200

TimeFormat.fromS(194)                  // '03:14'
TimeFormat.fromS(150, 'hh:mm:ss')      // '00:02:30'
TimeFormat.fromS(8100, 'hh:mm')        // '02:15'

TimeFormat.fromMs(12345)               // '00:12.345'
```

## Usage

### `toMs(time)`

Convert given `hh:mm:ss` formatted string to miliseconds

#### Parameters
- `time` String representation

### `toS(time)`

Convert given `hh:mm:ss` formatted string to seconds

#### Parameters
- `time` String representation

### `fromMs(ms, format)`

Generate formatted string from time in miliseconds

#### Parameters
- `ms` Time in miliseconds
- `format` _(optional)_ Default output format. If not specified, `mm:ss` is implied. See section below for supported format list

### `fromS(s, format)`

Generate formatted string from time in seconds

#### Parameters
- `s` Time in seconds
- `format` _(optional)_ Default output format. If not specified, `mm:ss` is implied. See section below for supported format list

### Supported time formats
The following formats are supported: `mm:ss`, `hh:mm:ss`,  `hh:mm`, `mm:ss.sss`, `hh:mm:ss.sss`.

- `hh` - hours
- `mm` - minutes
- `ss` - second
- `sss` - miliseconds

## Install

`npm install hh-mm-ss --save`

## License

MIT
