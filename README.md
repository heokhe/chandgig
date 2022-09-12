# chandgig

Data size units (B, KB, MB, GB, TB, PB, EB, ZB, YB) in Farsi

```js
import { chandgig } from 'chandgig'

const bytes = 1555978999 // 1.449118367GB
chandgig(bytes) // '۱٫۴۵ گیگابایت'
chandgig(bytes, { compact: true }) // '۱٫۴۵ گیگ'

chandgig(0) // '۰ بایت'
chandgig(0, { convertZeroToWord: true }) // 'صفر بایت'
```
