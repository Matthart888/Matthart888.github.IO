// make sure JS is linked
console.log("linked")

// create the opening window with three options: New Game, about, and credits

//when the user clicks on about or credits, display a pop up with the designated information

// if the user clicks on new game, start the game!

//make an object for the player

//make an object(s) for the bad guys

//create a command so that when the user presses on the left key, the player moves to the left, or moves to the right if they press on the right key

// create an array for the missiles to show up on the screen (in front of the player)

// make an animation for the missile to fly forward

// UNIT COLLISION 

const guardian = {
    top: 500,
    left: 450
};

let missiles = [];

const $bullet = $("<div>").addClass("missile")

const movePlayer = (evt) => {
    console.log(evt)
    if (evt.key === "ArrowLeft"){
        guardian.left -= 10
        $("#guardian").css("left", guardian.left)
    } else if (evt.key === "ArrowRight"){
        guardian.left += 10
        $("#guardian").css("left", guardian.left)
    }
    
}

const shoot = (evt) => {
    if (evt.key === " "){
        let misslePositionLeft = guardian.left +3
        console.log(misslePositionLeft)
        missiles.push({
            left: misslePositionLeft,
            top: guardian.top
        })
        $("#missiles").empty
        for (let playerFire = 0; playerFire < missiles.length; playerFire ++){
            $bullet.css({ "left": missiles[playerFire].left, "top": missiles[playerFire].top}).appendTo("#missiles")
        }
        $(".missile").animate({
            top: 0
        })
    }
}


$(() => {
    console.log("jq linked")
    $(document).on("keydown", movePlayer)
    $(document).on("keydown", shoot)



})