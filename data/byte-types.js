const METRIC_EXPONENTS = require('./exponents.json')
const BASE_1024_EXPONENTS = require('./base-1024-exponents.json')

const byteTypes = {}

// Metric
METRIC_EXPONENTS.forEach((i) => {
  i.value = Math.pow(10, i.exponent)
  byteTypes[i.symbol] = i
  byteTypes[i.name] = i
})

// Base 1024
BASE_1024_EXPONENTS.forEach((i) => {
  i.value = Math.pow(1024, i.exponent)
  byteTypes[i.symbol] = i
  byteTypes[i.name] = i
})

module.exports = byteTypes
