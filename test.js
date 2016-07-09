'use-strict'

const test = require('tape')
const {fromMs, toMs} = require('./')

// =============================================================================
//  Test cases
// =============================================================================

test('fromMs() test', (t) => {
  // Basic functionality
  t.equal(fromMs(75000), '01:15')
  t.equal(fromMs(442800000), '123:00:00')
  t.equal(fromMs(90576), '01:30.576')
  t.equal(fromMs(-157250), '-02:37.250')

  // Output formatting
  t.equal(fromMs(38000, 'mm:ss.sss'), '00:38.000')
  t.equal(fromMs(0, 'hh:mm:ss'), '00:00:00')
  t.equal(fromMs(3600000, 'mm:ss'), '01:00:00')

  // Input validation
  t.throws(() => fromMs(null))
  t.throws(() => fromMs('text'))
  t.throws(() => fromMs(0, 'mm:hh:ss'))

  t.end()
})

test('toMs() test', (t) => {
  // Basic functionality
  t.equal(toMs('01:05:17'), 3917000)
  t.equal(toMs('137:00:00.0'), 493200000)
  t.equal(toMs('00:10.230'), 10230)
  t.equal(toMs('00:00:07.10845'), 7108)
  t.equal(toMs('-02:07:12'), -7632000)

  // Input validation
  t.throws(() => toMs('13:05:02:11'))
  t.throws(() => toMs('153'))
  t.throws(() => toMs(null))
  t.throws(() => toMs('00:62'))

  t.end()
})
