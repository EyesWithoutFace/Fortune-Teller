const goodfortunes = [' You will be rich', ' You will live a long life', 
' Wednesday looking lucky', ' You have good luck today']
const badfortunes = [' You will die in 7 days', ' You have bad luck', 
' You will be poor', ' Look out on Tuesday']

let randNum = () => Math.floor(Math.random() * 8);

let randPhrase = () => {
    if (randNum() === 0) {
         return goodfortunes[0]
    }else if (randNum() === 1) {
        return goodfortunes[1]
    } else if (randNum() === 2) {
        return goodfortunes[2]
    } else if (randNum() === 3) {
        return goodfortunes[3]
    } else if (randNum() === 4) {
        return badfortunes[0]
    }else if (randNum() === 5) {
        return badfortunes[1]
    }else if (randNum() === 6) {
        return badfortunes[2]
    }else if (randNum === 7) {
        return badfortunes[3]
    }else {
        return 'Try again'
    }
}
console.log(randphrase())
