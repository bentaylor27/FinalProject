var total = 0
function gainMoney () {
    if (total == 0) {
        alert("Cut the grass with your teeth!")
        total ++
    }
    if (total >= 1 && tool == "teeth") {
        total ++
    }
    if (total >= 5 && tool == "scissors") {
        total += 5
        document.getElementById("memo").innerHTML = "You've started making the big bucks, you've upgraded to scissors"
    }
    if ( total >= 25 && tool == "push lawnmower") {
        total += 50
        document.getElementById("memo").innerHTML = "You've upgraded to a push lawnmower"
    }
    if (total >= 100 && tool == "riding lawnmower") {
        total += 100
        document.getElementById("memo").innerHTML = "You've upgraded to a riding lawnmower"
    }
    if (total >= 500 && tool == "starving students") {
        total += 250
        document.getElementById("memo").innerHTML = "You've upgraded to a team of starving students"
    }
    document.getElementById("total").innerHTML = total;
}

var tool = "teeth"
function upgradeTool () {
    var input = prompt ("Please enter the tool you would like to purchase")
    if (input == "scissors") {
        total = total - 5
    }
    tool = input
    document.getElementById("tool").innerHTML = ("Your tool is now this " + tool)
    
}

console.log(tool)