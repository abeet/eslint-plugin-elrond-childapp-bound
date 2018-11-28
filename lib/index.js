module.exports = {
  rules: {
    'no-global-declaration': require('./rules/no-global-declaration.js'),
    'no-write-cookie': require('./rules/no-write-cookie.js')
  },
  rulesConfig: {
    'no-global-declaration': 1,
    'no-write-cookie': 1
  }
}