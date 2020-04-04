// make sure JS is linked
// console.log("linked")

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

const badGuys = [
    {left: 200, top:50},
    {left: 250, top:50},
    {left: 300, top:50},
    {left: 350, top:50},
    {left: 400, top:50},
    {left: 450, top:50},
    {left: 500, top:50},
    {left: 550, top:50},
    {left: 600, top:50},
    {left: 650, top:50},
    {left: 700, top:50},
];




const movePlayer = (evt) => {
    console.log(evt)
    if (evt.key === "ArrowLeft"){
        guardian.left -= 10
        $("#guardian").css("left", guardian.left)
    } else if (evt.key === "ArrowRight"){
        guardian.left += 10
        $("#guardian").css("left", guardian.left)
    };
    
};

const drawMissile = (evt) => {
    if (evt.key === " "){
        // let missilePositionLeft = guardian.left +3
        // // console.log(missilePositionLeft)
        //     missiles.push({
        //         // left: missilePositionLeft,
        //         // top: guardian.top
        //     });
        //     // let currentMissile = $("#missiles").children().toArray()
            $("#missiles").empty()
            // for (let playerFire = 0; playerFire < currentMissile.length; playerFire ++){
                let newMissile = $("<div>").addClass("missile").css({ "left": guardian.left +3, "top": guardian.top})
                newMissile.appendTo("#missiles")
                missiles.push(newMissile)
                newMissile.animate({
                    top: 0
                }, {
                    step: unitCollision
                }); 
            };
};



// const $baddy = $("<div>").addClass("baddies")

const drawBaddies = () => {
    for (let numOfBaddies = 0; numOfBaddies < badGuys.length; numOfBaddies ++){
        $("<div>").addClass("baddies").css({ "left": badGuys[numOfBaddies].left, "top": badGuys[numOfBaddies].top}).appendTo("#baddies")
    };
};

const unitCollision = () => 
{

    for (let numOfBaddies = 0; numOfBaddies < badGuys.length; numOfBaddies ++)
    {
        for (let playerFire = 0; playerFire < missiles.length; playerFire ++)
        {
            console.log("badGuys[numOfBaddies].top", badGuys[numOfBaddies].top)
            console.log("missiles[playerFire].position().top", missiles[playerFire].position().top)
            if (missiles[playerFire].position().top <= badGuys[numOfBaddies].top) 
            {
                console.log("HIT")
            };
        };
    };
};



$(() => {
    
    $(document).on("keydown", movePlayer)
    $(document).on("keydown", drawMissile)
    drawBaddies()
    // unitCollision()

});