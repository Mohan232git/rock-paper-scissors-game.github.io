function handpicked(hand){
    const container = document.querySelector(".container");
    const competediv = document.querySelector(".compete");
    let newImage = document.getElementById("newImage");
    console.log(container);
    const handpicked = document.querySelector(hand);
     let selectedimg =handpicked.querySelector('img')
    console.log(handpicked)
    container.style.display="none";
    competediv.style.display="grid";
    console.log(newImage)
    newImage.src = selectedimg.src;
    let borderstyle = handpicked.style.outlineColor;
    console.log(borderstyle)
}

function playagain(){
    const container = document.querySelector(".container");
    const competediv = document.querySelector(".compete");
        competediv.style.display="none";
        container.style.display="flex";

}