function handpicked(hand){
    const container = document.querySelector(".container");
    const competediv = document.querySelector(".compete");
    let generatedhand = document.querySelector('.generated-hand');
    let generatedimg = generatedhand.querySelector('img');
    let newImage = document.getElementById("newImage");
    const handpicked = document.querySelector(hand);
    let selectedimg =handpicked.querySelector('img')
    container.style.display="none";
    competediv.style.display="grid";
    newImage.src = selectedimg.src;
    
}

function playagain(){
    const container = document.querySelector(".container");
    const competediv = document.querySelector(".compete");
        competediv.style.display="none";
        container.style.display="flex";

}


function closerules() {
     const rulescontainer = document.querySelector('.Rules-container');
      rulescontainer.style.display ='none'
}

function openrules(){
    const rulescontainer = document.querySelector('.Rules-container');
    rulescontainer.style.display='block'
}