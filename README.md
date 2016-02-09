# [redux-storage-engine-localStorageFakePromise][]

[![build](https://travis-ci.org/michaelcontento/redux-storage-engine-localStorageFakePromise.svg)](https://travis-ci.org/michaelcontento/redux-storage-engine-localStorageFakePromise)
[![dependencies](https://david-dm.org/michaelcontento/redux-storage-engine-localStorageFakePromise.svg)](https://david-dm.org/michaelcontento/redux-storage-engine-localStorageFakePromise)
[![devDependencies](https://david-dm.org/michaelcontento/redux-storage-engine-localStorageFakePromise/dev-status.svg)](https://david-dm.org/michaelcontento/redux-storage-engine-localStorageFakePromise#info=devDependencies)

[![license](https://img.shields.io/npm/l/redux-storage-engine-localStorageFakePromise.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localStorageFakePromise)
[![npm version](https://img.shields.io/npm/v/redux-storage-engine-localStorageFakePromise.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localStorageFakePromise)
[![npm downloads](https://img.shields.io/npm/dm/redux-storage-engine-localStorageFakePromise.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localStorageFakePromise)
[![Code Climate](https://codeclimate.com/github/michaelcontento/redux-storage-engine-localStorageFakePromise/badges/gpa.svg)](https://codeclimate.com/github/michaelcontento/redux-storage-engine-localStorageFakePromise)

`window.localStorage` based engine for [redux-storage][] - like
[redux-storage-engine-localStorage][] - but it does not require a environment
with ES6 Promises.

## Warning

In contrast to [redux-storage-engine-localStorage][] this engine can be used
with old browsers like IE<=11. **BUT** the best solution for you would be to
use a Promise polyfill like [es6-promise][].

## Installation

    npm install --save redux-storage-engine-localStorageFakePromise

## Usage

Similar to [redux-storage-engine-localStorage][]:

```js
import createEngine from 'redux-storage-engine-localStorageFakePromise';
const engine = createEngine('my-save-key');
```

## License

    The MIT License (MIT)

    Copyright (c) 2015 Michael Contento

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  [redux-storage]: https://github.com/michaelcontento/redux-storage
  [redux-storage-engine-localStorage]: https://github.com/michaelcontento/redux-storage-engine-localStorage
  [redux-storage-engine-localStorageFakePromise]: https://github.com/michaelcontento/redux-storage-engine-localStorageFakePromise
  [es6-promise]: https://www.npmjs.com/package/es6-promise
