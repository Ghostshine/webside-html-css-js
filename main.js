console.log("working");

function DarkColor(){
    console.log("DARK!!!");
    document.getElementById("headerId").style.backgroundColor = "#000";
    document.getElementById("footerId").style.backgroundColor = "#000";
    document.getElementById("footerId").style.color = "#fff";
    document.getElementById("bg").className = "dark";
}

function PinkColor(){
    console.log("PINK!!!");
    document.getElementById("headerId").style.backgroundColor = "#E30B5D";
    document.getElementById("footerId").style.backgroundColor = "#E30B5D";
    document.getElementById("footerId").style.color = "#000";
    document.getElementById("bg").className = "pink";
}

function BlueColor(){
    console.log("BLUE!!!");
    document.getElementById("headerId").style.backgroundColor = "#fff";
    document.getElementById("footerId").style.backgroundColor = "#fff";
    document.getElementById("footerId").style.color = "#000";
    document.getElementById("bg").className = "blue";
}