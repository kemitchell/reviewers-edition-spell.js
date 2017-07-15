#!/usr/bin/env node
var spell = require('./')
require('pump')(
  process.stdin,
  require('split2')(),
  require('through2').obj(function (chunk, encoding, done) {
    var line = chunk.toString(encoding)
    var spelled = spell(line)
    done(null, (spelled || line) + '\n')
  }),
  process.stdout
)
