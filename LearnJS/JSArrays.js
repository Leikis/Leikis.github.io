let days = ['Modday', 'Tuesday', 'Wedday', 'Thursday', 'Saturday', 'Sudday']

days[2] = 'Wednesday'

days.pop()

days.push('Sunday')

days.shift()

days.unshift('Monday')

days.splice(4, 0, 'Friday')

console.log(days)

const nums = [1, 2, 3]

const gameBoard = [
    ['X', 'O', 'X'],
    ['O', null, 'X'],
    ['O', 'O', 'X']
]

console.log(gameBoard)
console.log(`value is: ${gameBoard[1][1]}`)