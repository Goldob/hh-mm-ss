# hh-mm-ss: time formatting utility [![Build Status](https://travis-ci.org/Goldob/hh-mm-ss.svg?branch=master)](https://travis-ci.org/Goldob/hh-mm-ss)

```js
var TimeFormat = require('hh-mm-ss')

TimeFormat.toMs('01:20:00')           // 4800000

TimeFormat.fromMs(45250)              // '00:45.250'
TimeFormat.fromMs(150000)             // '02:30'
TimeFormat.fromMs(3600000)            // '01:00:00'

TimeFormat.fromMs(0, 'hh:mm:ss')      // '00:00:00'
```

Supported formats: `mm:ss` (default), `hh:mm:ss`, `mm:ss.sss`, `hh:mm:ss.sss`

## License

MIT
