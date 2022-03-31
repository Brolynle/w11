
function askname() {
    var name = prompt("What is your name?")
    return name
} 

function randomnumber() {
    var numran = Math.floor(Math.random() * 10) + 1
    return numran
}

function usernum() {

    user = 0

    do {

        var numran = randomnumber()
        
        user = user + numran
        
        var drawnum = prompt(`You drew... ${numran} and your total is... ${user}.\n\nDo you want to draw another number? If so enter 'y'`)

    } while ((usertotal < 20) && (drawnum == "y"))

    return user
}

function comnum() {

    computer = 0

    do {

        var numran = randomnumber()
    
        computer = computer + numran
        
        var comran= prompt(`I drew the number... ${numran} my total is... ${computer}`)

    } while (computer < 16)

    return computer
}

function comparnum(user, computer) {

    if (computer > 20) {
        alert("You  win!")
    }

    else if (user > 20) {
        alert("You lose!")
    }

    else if ((user > computer) && (computer <= 20) && (user <= 20)) {
        alert("Good job, you won!")
    }

    // if ((user)) {}

}

// var playagain = prompt("Do you want to play again? Enter `y` or `n`")


function master() {
    var u = usernum()
    var c = comnum()
    comparnum(u, c)
    var playagain = prompt("Do you want to play again? Enter `y` or `n`")
    if (playagain == "y") {
        master() // recursive function
    }
}

master() // run this for the whole program



