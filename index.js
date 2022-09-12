import { toFarsiDigits } from 'farsi-digits'

const SIZE_UNITS = [
  'بایت',
  'کیلوبایت', // since KB has no short form in Farsi
  'مگ',
  'گیگ',
  'ترا',
  'پتا',
  'اگزا',
  'زتا',
  'یوتا',
]

/**
 * @param {number} bytes
 * @param {Object} options
 * @param {boolean?} options.compact e.g. گیگ instead of گیگابایت (default: false)
 * @param {boolean?} options.convertZeroToWord write صفر instead of numeric zero (default: false)
 * @returns {string}
 */
export function chandgig(
  bytes,
  { compact = false, convertZeroToWord = false } = {},
) {
  let pow = 0
  while (Math.abs(bytes) >= 1024) {
    pow++
    bytes /= 1024
  }

  const prettierBytes = bytes
    .toFixed(2)
    .replace(/0+$/, '') // remove trailing zeros
    .replace(/\.$/, '') // and the trailing dot

  let unit = SIZE_UNITS[pow]
  if (!compact && !unit.endsWith('بایت')) {
    if (!unit.endsWith('ا')) unit += 'ا'
    unit += 'بایت'
  }

  return `${toFarsiDigits(parseFloat(prettierBytes), {
    convertZeroToWord,
  })} ${unit}`
}
