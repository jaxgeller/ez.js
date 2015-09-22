### ez.js
Importable easing functions in es6


### Use

```javascript
import {easeInCubic} from 'ez';

var timeStart;
var diff = 1;

(function ticker(currTime) {
  if (!timeStart) timeStart = currTime;

  let elapsed = currTime - timeStart;
  let tick = easeInCubic(elapsed, timeStart, diff, 1000);

  console.log(tick);

  requestAnimationFrame(ticker);
})();
```
