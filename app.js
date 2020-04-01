// make sure JS is linked
console.log("linked")

// create the opening window with three options: New Game, about, and credits

//when the user clicks on about or credits, display a pop up with the designated information

// if the user clicks on new game, start the game!

//make an object for the player

//make an object(s) for the bad guys

//create a command so that when the user presses on the left key, the player moves to the left, or moves to the right if they press on the right key

const guardian = {
    top: 500,
    left: 450
};

let missile = [];

const movePlayer = (evt) => {
    console.log(evt)
    if (evt.key === "ArrowLeft"){
        guardian.left -= 10
    } else if (evt.key === "ArrowRight"){
        guardian.left += 10
    }
    $("#guardian").css("left", guardian.left)
}

const shoot = (evt) => {
    if (evt.key === " "){
        missile.push({
            left: guardian.left += 15,
            top: guardian.top
        })
        $("#missiles").css("left", missile.left) = ""
        for (let missile = 0; missile < missile.length; missile ++){
            $("#missiles").css("left", missile.left).appendTo("#missiles")
        }
    }
}
$(() => {
    console.log("jq linked")
    $(document).on("keydown", movePlayer)
    $(document).on("keydown", shoot)



})