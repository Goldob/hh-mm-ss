'use-strict'

const test = require('tape')
const {fromMs, fromS, toMs, toS} = require('../')

// =============================================================================
//  Test cases
// =============================================================================

test('fromMs() test', (t) => {
  // Basic functionality
  t.equal(fromMs(75000), '01:15')
  t.equal(fromMs(442800000, 'hh:mm:ss'), '123:00:00')
  t.equal(fromMs(90576), '01:30.576')
  t.equal(fromMs(-157250), '-02:37.250')

  // Output formatting
  t.equal(fromMs(38000, 'mm:ss.sss'), '00:38.000')
  t.equal(fromMs(0, 'hh:mm:ss'), '00:00:00')
  t.equal(fromMs(3600000, 'hh:mm:ss'), '01:00:00')

  // Input validation
  t.throws(() => fromMs(null))
  t.throws(() => fromMs('text'))
  t.throws(() => fromMs(0, 'mm:hh:ss'))

  t.end()
})

test('fromS() test', (t) => {
  // Basic functionality
  t.equal(fromS(75), '01:15')
  t.equal(fromS(442800,'hh:mm:ss'), '123:00:00')
  // added these two tests to chekc if the new format 'hh:mm' works
  t.equal(fromS(8100,'hh:mm'), '02:15')
  t.equal(fromS(-8100,'hh:mm'), '-02:15')
  t.equal(fromS(-442800, 'hh:mm:ss'), '-123:00:00')

  // Output formatting
  t.equal(fromS(38, 'mm:ss.sss'), '00:38.000')
  t.equal(fromS(0, 'hh:mm:ss'), '00:00:00')
  t.equal(fromS(3600, 'hh:mm:ss'), '01:00:00')

  // Input validation
  t.throws(() => fromS(null))
  t.throws(() => fromS('text'))
  t.throws(() => fromS(0, 'mm:hh:ss'))

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

test('toS() test', (t) => {
  // Basic functionality
  t.equal(toS('01:05:17'), 3917)
  t.equal(toS('137:00:00.0'), 493200)
  t.equal(toS('00:10.230'), 10)
  t.equal(toS('00:00:07.10845'), 7)
  t.equal(toS('-02:07:12'), -7632)

  // Input validation
  t.throws(() => toS('13:05:02:11'))
  t.throws(() => toS('153'))
  t.throws(() => toS(null))
  t.throws(() => toS('00:62'))

  t.end()
})
