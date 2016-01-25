This npm package exports a single function that takes a single
[reviewers edition][reved] argument and returns a string containing the
pronunciation of that edition in English.

[reved]: https://npmjs.com/packages/reviewers-edition-parse

The following examples are also the test suite for the function. The
tests use Node.js' built-in `assert` module.

```javascript
var assert = require('assert')
var spell = require('reviewers-edition-spell')

assert.equal(
  spell('1e'),
  'first edition')

assert.equal(
  spell('1e2u'),
  'first edition, second update')

assert.equal(
  spell('1e2u3c'),
  'first edition, second update, third correction')

assert.equal(
  spell('1e2u3c4d'),
  'first edition, second update, third correction, fourth draft')

assert.equal(
  spell('1e101d'),
  'first edition, one hundred first draft')

assert.equal(
  spell('101e2c'),
  'one hundred first edition, second correction')
```

The function returns `false` for an invalid argument.

```javascript
assert.equal(
  spell('1.0.0'),
  false)
```
