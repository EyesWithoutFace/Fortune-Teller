const goodfortunes = [' You will be rich', ' You will live a long life', 
' Wednesday looking lucky', ' You have good luck today']
const badfortunes = [' You will die in 7 days', ' You have bad luck', 
' You will be poort', ' Look out on Tuesday']

let randnum = () => Math.floor(Math.random() * 8);

let randphrase = () => {
    if (randnum() === 0) {
         return goodfortunes[0]
    }else if (randnum() === 1) {
        return goodfortunes[1]
    } else if (randnum() === 2) {
        return goodfortunes[2]
    } else if (randnum() === 3) {
        return goodfortunes[3]
    } else if (randnum() === 4) {
        return badfortunes[0]
    }else if (randnum() === 5) {
        return badfortunes[1]
    }else if (randnum() === 6) {
        return badfortunes[2]
    }else if (randnum === 7) {
        return badfortunes[3]
    }else {
        return 'Try again'
    }
}
console.log(randphrase())
