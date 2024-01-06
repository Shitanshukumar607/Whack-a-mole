let score = 0;
let time = 10;
let highscore = 0;
let y;
let Interval;

let TimeLeftEl = document.getElementById("timeleft")
let ScoreEl = document.getElementById("score")
let HighscoreEl = document.getElementById("highscore")

TimeLeftEl.textContent = `Time : ${time}`
ScoreEl.textContent = `Your Score : ${score}`

//Checks if highscore variable isn't 0 then it takes the old highscore 

if (JSON.parse(localStorage.getItem("highsc")) == null) {
    highscore = 0
} else {
    highscore = JSON.parse(localStorage.getItem("highsc"))
}

HighscoreEl.textContent = `Your Highscore : ${highscore}`


let Startbtn = document.getElementById("start")
let Moles = document.querySelectorAll(".mole");
let Bushes = document.querySelectorAll(".bush");


Startbtn.addEventListener("click", start)

function start() {
    score = 0
    time = 10
    ScoreEl.textContent = `Your Score : ${score}`
    TimeLeftEl.textContent = `Time left : ${time}`

    MoveTheMole()
    Interval = setInterval(TimeLeftfun, 1000)
    Startbtn.removeEventListener("click", start)
}

//this function moves the mole out
function MoveTheMole() {
    if (time > 0) {
        let x = RandomNumber()
        y = x

        //mole comes out
        document.getElementById(`mole${x}`).style.transform = "translateY(-20px)"

        // adding event Listener to both bush and mole
        document.getElementById(`mole${x}`).addEventListener("click", scoreplus)
        document.getElementById(`bush${x}`).addEventListener("click", scoreplus);
    }
};


//this function adds 1 to score 
function scoreplus() {
    score++
    ScoreEl.textContent = `Your Score : ${score}`

    // removing event Listener to both bush and mole
    Moles.forEach(value => {
        value.removeEventListener("click", scoreplus)
    })
    Bushes.forEach(value => {
        value.removeEventListener("click", scoreplus)
    })

    //making mole go into bush
    document.getElementById(`mole${y}`).style.transform = "scale(0.5)"
    console.log(score);
    MoveTheMole()
}

let TimeLeftfun = () => {
    if (time > 0) {
        TimeMinusOne()
    } else {
        clearInterval(Interval)
        Startbtn.addEventListener("click", start)
        Moles.forEach(value => {
            value.removeEventListener("click", scoreplus)
        })
        Bushes.forEach(value => {
            value.removeEventListener("click", scoreplus)
        })
        document.getElementById(`mole${y}`).style.transform = "scale(0.5)"

        if (score > highscore) {
            highscore = score
            HighscoreEl.textContent = `Your Highscore : ${highscore}`
            localStorage.setItem("highsc", JSON.stringify(highscore))
        }

        alert(`You Scored ${score} in 10 seconds.`)

        Startbtn.addEventListener("click", start)
        time = 10
        TimeLeftEl.textContent = `Time : ${time}`
    }
}

//Random number 
function RandomNumber() {
    return Math.floor(Math.random() * 9) + 1
};

//decreases the time by 1
function TimeMinusOne() {
    time--
    TimeLeftEl.textContent = `Time left : ${time}`
}
        document.getElementById(`bush${x}`).addEventListener("click", scoreplus);
    }
};


//this function adds 1 to score 
function scoreplus() {
    score++
    ScoreEl.textContent = `Your Score : ${score}`

    // removing event Listener to both bush and mole
    Moles.forEach(value => {
        value.removeEventListener("click", scoreplus)
    })
    Bushes.forEach(value => {
        value.removeEventListener("click", scoreplus)
    })

    //making mole go into bush
    document.getElementById(`mole${y}`).style.transform = "scale(0.5)"
    console.log(score);
    MoveTheMole()
}

let TimeLeftfun = () => {
    if (time > 0) {
        TimeMinusOne()
    } else {
        clearInterval(Interval)
        Startbtn.addEventListener("click", start)
        Moles.forEach(value => {
            value.removeEventListener("click", scoreplus)
        })
        Bushes.forEach(value => {
            value.removeEventListener("click", scoreplus)
        })
        document.getElementById(`mole${y}`).style.transform = "scale(0.5)"

        alert(`You Scored ${score} in 10 seconds.`)
        Startbtn.addEventListener("click", start)
        time = 10
        TimeLeftEl.textContent = `Time : ${time}`
    }
}

//decreases the time by 1
function TimeMinusOne() {
    time--
    TimeLeftEl.textContent = `Time left : ${time}`
}
