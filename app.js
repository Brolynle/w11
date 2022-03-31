function rungame() {

user = 0
computer = 0

function askname() {
    var name = prompt("What is your name?")
    return name
} 

alert(askname())

function randomnumber() {
    var numran = Math.floor(Math.random() * 10) + 1
    return numran
}

function usernum(numran) {

    do {
        

        user = user + numran
        
        var drawnum = prompt(`You drew... ${numran} and your total is... ${user}.\n\nDo you want to draw another number? If so enter 'y'`)

    } while ((usertotal < 20) && (drawnum == "y"))

    return user
}


function comnum(b) {

    do {
    
        computer = computer + numran
        
        var comran= prompt(`I drew the number... ${numran} my total is... ${computerl}`)

    } while (computer < 16)
}

function comparnum(user, computer) {

    if (computer > 20) {
        alert("You  win!")
    }

    if (user > 20) {
        alert("You lose!")
    }

    if ((user > computer) && (computer <= 20) && (user <= 20)) {
        alert("Good job, you won!")
    }

    if ((user)) {}


}

askname()
randomnumber()
usernum()
comnum()
comparnum()

}