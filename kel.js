let firstbatch = 7
let secondbatch = 12
let count = firstbatch + secondbatch
console.log(count)

 let bonuspoints = 50
 bonuspoints = bonuspoints + 50
 console.log(bonuspoints)
 bonuspoints = bonuspoints - 75
 console.log(bonuspoints)
 bonuspoints = bonuspoints + 45
 console.log(bonuspoints)

function countdown() {
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
 }

 countdown()

function variable() {
console.log(45)
 }
 variable()

 let lap1 = 34
 let lap2 = 33
 let lap3 = 36

 function laptimes() {
    console.log(lap1 + lap2 + lap3)
 }
 laptimes()

let lapscompleted = 0
function laps() {
console.log(lapscompleted + 1)
console.log(lapscompleted + 2)
console.log(lapscompleted + 3)
 }
laps()

let lapsCompleted = 0
function incrementlap() {
    lapsCompleted = lapsCompleted + 1
}

incrementlap()
incrementlap()
incrementlap()

console.log(lapscompleted)


let name = "Kelvin"
let greeting = "Hi, my name is"
let myGreeting = greeting + " " + name
console.log(myGreeting)

let Firstname = "Kelvin "
let Lastname = "Ayisi"
let fullname = "Kelvin " + "Ayisi"
console.log(fullname)

let name = "Linda"
let greeting = "Hi there"
function greetlinda() {
    console.log(greeting + "," + " " + name)
}
greetlinda() 


let myPoints = 3
function add3points() {
    myPoints +=3
}

function remove1points() {
    myPoints -=1
}

add3points()
add3points()
add3points()
remove1points()
remove1points()
remove1points()

console.log(myPoints)

console.log("2" + 2)

let name = "linda"
let greeting = "Hi there"
function greetlinda() {
    console.log(greeting + ", " + name + "!" )
}
greetlinda()

let myMarks = 3
function add3Points(){
    myMarks += 3
}

function remove1Points(){
    myMarks -= 1
}
add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()
remove1Points()
console.log(myMarks)

let firstcard = 10
let secondcard = 12

let sum = firstcard + secondcard 

if (sum < 21) {
    console.log("do you wanna draw a new card?") 
} else if (sum === 21){
    console.log("sheesh!! you've got blackjack")
} else if( sum > 21){
    console.log("you're out of the game!")
}

let age = 21
if (age < 21){
    console.log("you cannot enter the club!")
} else (age => 21){
    console.log("You're welcome!")
}

let age = 100
if (age < 100){
    console.log("not elegible")
}else if (age === 100){
    console.log("here is your birthday card from the king!")
} else{
    console.log("not eligible, you have already gotten one")
}

let firstcard = 10
let secondcard = 12

let sum = firstcard + secondcard 
if (sum <= 20){
    console.log("do you want to draw a new card?")
}else if (sum === 21){
    console.log("you've got blackjack")
}else {
    console.log("you're out of the game!")
}