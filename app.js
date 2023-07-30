// ! Selectors

const canvas = document.getElementById("canvas");

canvas.style.width =  canvas.height * (canvas.clientWidth / canvas.clientHeight);
canvas.style.height = "1920";
canvas.style.background = "black";

let character = {
    x: 0,
    y:700,
    height: 30,
    width: 30,
};

let floor = {
    x:200,
    y:200,
    width:400,
    height:400,
};

let ctx = canvas.getContext("2d");
ctx.globalAlpha = 1.0;
ctx.fillStyle = "rgba(255,0,0,1.0)";
//ctx.fillRect(character.x, character.y, character.height, character.width);
const myImage = new Image(100, 200);
myImage.src = "Barbarian_icons_01_b.PNG";

ctx.fillStyle = "rgba(0,210,0,0.5)";
//ctx.fillRect(floor.x, floor.y, floor.height, floor.width);
//window.addEventListener("keydown", moveCharacter);
window.addEventListener("keydown", sparklez);

setInterval(gravity, 60);
setInterval(sparklez, 0.25);
function gravity(){
    if(character.y !== 720){
        ctx.fillStyle = "rgba(255,0,0,1.0)";
        ctx.clearRect(character.x, character.y, character.height, character.width);
        character.y += 5;
        //ctx.fillRect(character.x, character.y, character.height, character.width);
    }        
}

function sparklez(){
    let sparkleAreaX = Math.floor(Math.random() * 1050);
    let sparkleAreaY = Math.floor(Math.random() * 750);
    let r = Math.floor(Math.random() * 255) +75;
    let g = Math.floor(Math.random() * 255) +75;
    let b = Math.floor(Math.random() * 255) +75;
    let a = Math.random();
    let d = Math.random();
    let sparkSize = Math.floor(Math.random() * 50);
    let sparkSize2 = Math.floor(Math.random() * 50);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    ctx.fillRect(sparkleAreaX, sparkleAreaY, sparkSize,sparkSize2);
    /*
    if(e.key = "b"){
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        ctx.fillRect(sparkleAreaX, sparkleAreaY, sparkSize,sparkSize2);
    }
    */
}

/*
function moveCharacter(e){
    let charBoarder = {
        left: character.x,
        right: character.x + character.width,
        top: character.y,
        bottom: character.y + character.height,
    };

    let objectBoarder = {
        left: floor.x,
        right: floor.x + floor.width,
        top: floor.y,
        bottom: floor.y + floor.height,
    };
    

    ctx.fillStyle = "rgba(255,0,0, 0.5)";
    ctx.drawImage(myImage, 0, 0);

    if(e.key === "d" && character.x !== 1020){
        ctx.clearRect(character.x, character.y, character.height, character.width);
        character.x += 5;
        ctx.fillRect(character.x, character.y, character.height, character.width);
    }
    if(e.key === "s" && character.y !== 720){
        ctx.clearRect(character.x, character.y, character.height, character.width);
        character.y += 5;
        ctx.fillRect(character.x, character.y, character.height, character.width);
    }
    if(e.key === "w" && character.y !== 0){
        ctx.clearRect(character.x, character.y, character.height, character.width);
        character.y -= 5;
        ctx.fillRect(character.x, character.y, character.height, character.width);
    }
    if(e.key === "a" && character.x !== 0){
        ctx.clearRect(character.x, character.y, character.height, character.width);
        character.x -= 5;
        ctx.fillRect(character.x, character.y, character.height, character.width);
    }
    if ((charBoarder.bottom <= objectBoarder.top) || (charBoarder.top >= objectBoarder.bottom) || (charBoarder.right <= objectBoarder.left) || (charBoarder.left >= objectBoarder.right)) {
        console.log("Did not crash.");
    }
    else{
        console.log("Object Boarder:", objectBoarder, "Char Boarder:", charBoarder);
    }
}
*/


