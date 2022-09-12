import tap from 'tap'
import { chandgig } from './index.js'

tap.equal(chandgig(2.5 * 1024), '۲٫۵ کیلوبایت')
tap.equal(chandgig(-2.5 * 1024), '-۲٫۵ کیلوبایت')
tap.equal(chandgig(0), '۰ بایت')
tap.equal(chandgig(0, { convertZeroToWord: true }), 'صفر بایت')
tap.equal(chandgig(1.459999999), '۱٫۴۶ بایت')
tap.equal(chandgig(75 * 1024 * 1024, { compact: true }), '۷۵ مگ')
