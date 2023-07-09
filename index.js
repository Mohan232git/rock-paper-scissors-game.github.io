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
    const btn = document.querySelector('.changebtn')
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
    const advancedgame = document.querySelector('.advanced');
    const advancedrules = document.querySelector('.advanced-rules-wapper');
    const rulesbtn = document.querySelector('.btn')
    const label = document.querySelector('.changebtn');
    const advancedlabel = 'Adcanced'.toUpperCase()
    const intermediatelabel = 'intermediate'.toUpperCase()
     if(label.innerText==advancedlabel){
        advancedrules.style.display='block' ;
     }
     else {
        rulesbtn.style.display='none';
        rulescontainer.style.display='inline-block';
     }
}


let rulescontainer = document.querySelector('.advanced-rules-wapper');
let cross = document.querySelector('.ad-cross')
cross.addEventListener('click',()=>{
    rulescontainer.style.display='none'
})

function changelevel(){
    let intermediate = document.querySelector('.intermediate')
    let advanced = document.querySelector('.advanced');

    let btn = document.querySelector('.changebtn')
    const advancedlabel = 'Adcanced'.toUpperCase()
    const intermediatelabel = 'intermediate'.toUpperCase()
    
    
     if(btn.innerText===advancedlabel){
        
        advanced.style.display='none';
        intermediate.style.display='flex';
        btn.innerText = intermediatelabel;
     }
     else{
        advanced.style.display='grid';
        intermediate.style.display='none';
        btn.innerText=advancedlabel;
        
     }

}