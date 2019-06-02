const Hangman = function (words, remainingGuesses) {
    this.words = words.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetter = [] 
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.words.forEach((letter) => {
        if(this.guessedLetter.includes(letter) || letter === ' '){
            puzzle += letter
        }else{
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.guessing = function (char) {
    char =  char.toLowerCase()
    const isUnique = !this.guessedLetter.includes(char)
    const isBadGuess = !this.words.includes(char)
    
    if (isUnique){
        this.guessedLetter.push(char)
    }

    if (isUnique && isBadGuess){
        this.remainingGuesses--
    }
}

const one = new Hangman('Cat', 2)
console.log(one.getPuzzle())
console.log(one.remainingGuesses)

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    one.guessing(guess)
    console.log(one.getPuzzle())
    console.log(one.remainingGuesses)
})