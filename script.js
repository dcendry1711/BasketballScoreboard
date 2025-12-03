const add1h = document.getElementById('addh1')
const add2h = document.getElementById('addh2')
const add3h = document.getElementById('addh3') 
const add1a = document.getElementById('adda1')
const add2a = document.getElementById('adda2')
const add3a = document.getElementById('adda3') 
const hRes = document.getElementById('home-result')
const aRes = document.getElementById('away-result')
const resBtn = document.getElementById('reset-btn')

let homeResult = 0
let awayResult = 0


function add1pH(){
    homeResult += 1
    hRes.textContent = homeResult
}

function add2pH(){
    homeResult += 2
    hRes.textContent = homeResult
}

function add3pH(){
    homeResult += 3
    hRes.textContent = homeResult
}

function add1pA(){
    awayResult += 1
    aRes.textContent = awayResult
}

function add2pA(){
    awayResult += 2
    aRes.textContent = awayResult
}

function add3pA(){
    awayResult += 3
    aRes.textContent = awayResult
}

function resetScore(){
    homeResult = 0
    awayResult = 0
    hRes.textContent = homeResult
    aRes.textContent = awayResult
}

add1h.addEventListener('click', add1pH)
add2h.addEventListener('click', add2pH)
add3h.addEventListener('click', add3pH)
add1a.addEventListener('click', add1pA)
add2a.addEventListener('click', add2pA)
add3a.addEventListener('click', add3pA)
resBtn.addEventListener('click', resetScore)





