### ez.js

Importable easing functions in ES6

[![Build Status](https://travis-ci.org/jaxgeller/ez.js.svg?branch=master)](https://travis-ci.org/jaxgeller/ez.js)


### Install

`npm install ez.js --save`


### Use

Import singular

```javascript
import {easeInCubic} from 'ez.js';

let timeStart;
let diff = 1;

(function ticker(currTime) {
  if (!timeStart) timeStart = currTime;

  let elapsed = currTime - timeStart;
  let tick = easeInCubic(elapsed, timeStart, diff, 1000);

  console.log(tick);

  requestAnimationFrame(ticker);
})();
```

Import all

```javascript
import * as ez from "./ez.js"

for (let key of Object.keys(ez)) {
  alert(ez[key](100, 0, 10, 1000));
}
```

Use as non-ES6

```javascript
// download minified dist file and add it as a script
<script src="dist.min.js"></script>
```

### Using easing functions

Takes four parameters, `t: current time, b: beginning value, c: change in value, d: duration`.

This will output a single number depending on how long the function has been running, this is great in conjunction with `requestAnimationFrame` to produce buttery animations.


Easings from [Robert Penner](http://robertpenner.com/easing_terms_of_use.html)
