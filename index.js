'use strict'

module.exports = [
  fromMs,
  toMs
]

const zeroFill = require('zero-fill')

// =============================================================================
// Module exports
// =============================================================================

function fromMs (ms, format = 'hh:mm:ss') {
  if (typeof ms !== 'number' || Number.isNaN(ms)) {
    throw new Error('NaN error')
  }

  let hours = Math.floor(ms / 3600000)
  let minutes = Math.floor(ms % 3600000 / 60)
  let seconds = Math.floor(ms % 60000 / 1000)
  let miliseconds = Math.floor(ms % 1000)

  return formatTime({hours, minutes, seconds, miliseconds}, format)
}

function toMs (time) {
  // TODO Convert time string to miliseconds
  return 0
}

// =============================================================================
// Utility functions
// =============================================================================

function formatTime (time, format) {
  let showHr
  let showMs

  switch (format.toLowerCase()) {
    case 'hh:mm:ss.sss':
      showHr = true
      showMs = true
      break
    case 'hh:mm:ss':
      showHr = true
      showMs = !(!time.miliseconds)
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

  return showHr ? (
    showMs ? `${hh}:${mm}:${ss}.${sss}` : `${hh}:${mm}:${ss}`
  ) : (
    showMs ? `${mm}:${ss}.${sss}` : `${mm}:${ss}`
  )
}
