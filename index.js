module.exports = reviewersEditionCompare

var ordinal = require('number-to-words').toWordsOrdinal
var parse = require('reviewers-edition-parse')
var numbers = require('reviewers-edition-parse/numbers')

function reviewersEditionCompare (edition) {
  var parsed = parse(edition)
  if (parsed) {
    return numbers.reduce(function (components, number) {
      return parsed.hasOwnProperty(number)
      ? components.concat(ordinal(parsed[number]) + ' ' + number)
      : components
    }, [])
    .join(', ')
  } else {
    return false
  }
}
