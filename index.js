function handpicked(hand){
    const container = document.querySelector(".container");
    const competediv = document.querySelector(".compete");
    let generatedhand = document.querySelector('.generated-hand');
    let generatedimg = generatedhand.querySelector('img');
    let newImage = document.getElementById("newImage");
    let pickedDiv = document.querySelector('.picked-div');
    const handpicked = document.querySelector(hand);
    let selectedimg =handpicked.querySelector('img')

    container.style.display="none";
    competediv.style.display="grid"; 
    pickedDiv.innerHTML = handpicked.innerHTML;
    pickedDiv.classList.add(hand)
    console.log(pickedDiv)
}

function playagain(){
    const container = document.querySelector(".container");
    const competediv = document.querySelector(".compete");
    
        competediv.style.display="none";
        container.style.display="flex";
      

}


function closerules() {
     const rulescontainer = document.querySelector('.Rules-container');
     const rulesbtn = document.querySelector('.btn')
     
      rulescontainer.style.display ='none';
      rulesbtn.style.display='block'
      

}

function openrules(){
    const rulescontainer = document.querySelector('.Rules-container');
    
    const rulesbtn = document.querySelector('.btn')
    rulesbtn.style.display='none'
    rulescontainer.style.display='inline-block';
    rulescontainer.style.background='red'
  
}