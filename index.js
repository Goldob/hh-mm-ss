'use strict'

module.exports = {
  fromMs,
  fromS,
  toMs,
  toS
}

const zeroFill = require('zero-fill')

// Time units with their corresponding values in miliseconds
const HOUR = 3600000
const MINUTE = 60000
const SECOND = 1000

// =============================================================================
// Export functions
// =============================================================================

function fromMs (ms, format = 'mm:ss') {
  if (typeof ms !== 'number' || Number.isNaN(ms)) {
    throw new Error('NaN error')
  }

  let absMs = Math.abs(ms)

  let negative = (ms < 0)
  let hours = Math.floor(absMs / HOUR)
  let minutes = Math.floor(absMs % HOUR / MINUTE)
  let seconds = Math.floor(absMs % MINUTE / SECOND)
  let miliseconds = Math.floor(absMs % SECOND)

  return formatTime({
    negative, hours, minutes, seconds, miliseconds
  }, format)
}

function fromS (s, format = 'mm:ss') {
  if (typeof s !== 'number' || Number.isNaN(s)) {
    throw new Error('NaN error')
  }

  let ms = s * SECOND

  return fromMs(ms, format)
}

function toMs (time) {
  const re = /^(-)?(?:(\d\d+):)?(\d\d):(\d\d)(\.\d+)?$/

  let result = re.exec(time)
  if (!result) throw new Error()

  let negative = result[1] === '-'
  let hours = result[2] | 0
  let minutes = result[3] | 0
  let seconds = result[4] | 0
  let miliseconds = Math.floor(1000 * result[5] | 0)

  if (minutes > 60 || seconds > 60) {
    throw new Error()
  }

  return (negative ? -1 : 1) * (
    hours * HOUR + minutes * MINUTE + seconds * SECOND + miliseconds
  )
}

function toS (time) {
  let ms = toMs(time)
  return Math.floor(ms / SECOND)
}

// =============================================================================
// Utility functions
// =============================================================================

function formatTime (time, format) {
  let showHr
  let showMs
  let showSc // added a new variable to check if the user require seconds or not

  switch (format.toLowerCase()) {
    case 'hh:mm:ss.sss':
      showHr = true
      showMs = true
      break
    case 'hh:mm:ss':
      showHr = true
      showMs = !(!time.miliseconds)
      showSc= true
      break
    case 'hh:mm':
      showHr = true
      showSc = !(!time.seconds)
      showMs = !(!time.miliseconds);
      break
    case 'mm:ss':
      showHr = !(!time.hours)
      showMs = !(!time.miliseconds)
      break
    case 'mm:ss.sss':
      showHr = !(!time.hours)
      showMs = true
      break
    default:
      throw new Error('Invalid time format')
  }

  let hh = zeroFill(2, time.hours)
  let mm = zeroFill(2, time.minutes)
  let ss = zeroFill(2, time.seconds)
  let sss = zeroFill(3, time.miliseconds)

  return (time.negative ? '-' : '') + (showHr ? (
    // added a new ternary oprator to check if the second is required
    showMs ? `${hh}:${mm}:${ss}.${sss}` : showSc ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`
  ) : (
    showMs ? `${mm}:${ss}.${sss}` : `${mm}:${ss}`
  ))
}
