let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let home = 0
let guest = 0

function add1home() {
    home += 1
    homeScore.textContent = home
}

function add2home() {
    home += 2
    homeScore.textContent = home
}

function add3home() {
    home += 3
    homeScore.textContent = home
}

function add1guest() {
    guest += 1
    guestScore.textContent = guest
}

function add2guest() {
    guest += 2
    guestScore.textContent = guest
}

function add3guest() {
    guest += 3
    guestScore.textContent = guest
}

function newGame() {
    home = 0
    guest = 0
    guestScore.textContent = 0
    homeScore.textContent = 0
}