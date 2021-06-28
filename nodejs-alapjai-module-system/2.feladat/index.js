const utils = require('./utils.js')

const users = [
  {
    firstName: 'Szabó',
    lastName: 'Matild',
    age: 45
  },
  {
    firstName: 'Kiss',
    lastName: 'Irén',
    age: 66
  },
  {
    firstName: 'Nagy',
    lastName: 'Béla',
    age: 16
  }
]

console.log(utils.generateUserList(users))
console.log(utils.getUserNames(users))

// try to override
utils.getUserNames = 'Kovács Lajos'
console.log(utils.getUserNames)
