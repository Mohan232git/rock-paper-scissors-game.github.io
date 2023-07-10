
let randompick=null ;
let score = 0;

function handpicked(hand){
    const container = document.querySelector(".container");
    const competediv = document.querySelector(".compete");
    let newImage = document.querySelector(".newImage");
    let pickedDiv = document.querySelector('.picked-div');
    const handpicked = document.querySelector(hand);
    let selectedimg =handpicked.querySelector('img');
    let displayscore = document.querySelector('.display-score');
    container.style.display="none";
    competediv.style.display="grid"; 
    pickedDiv.innerHTML = handpicked.innerHTML;
    intermediate_generate_Hand();
    result(hand , intermediate_generate_Hand())
    displayscore.innerText=score;
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


const intermediate_generate_Hand = () =>{
    const intermediate_List = ['rock','paper','scissors']
    let randompick = intermediate_List[Math.floor((Math.random()*3))] ;
    let handreplace = document.querySelector('.random-hand');
    handreplace.src='images/icon-'+randompick+'.svg';
    console.log(randompick)
    return randompick
}


const result=( userpicked , computerpicked) =>{
    const user = userpicked;
    const computer = computerpicked;
    let displayresult = document.querySelector('.display-result');
    console.log(userpicked,computerpicked)
    if(user=='.scissors'&&computer=='paper'){
        displayresult.innerText='you win'.toUpperCase()
        score++;
    }
    if(user=='.paper'&&computer=='rock'){
        displayresult.innerText='you win'.toUpperCase()
        score++
    }
    if(user=='.scissors'&&computer=='rock'){
        displayresult.innerText='you lose'.toUpperCase()
        
    }
    if(user=='.rock'&&computer=='scissors'){
        displayresult.innerText='you win'.toUpperCase()
        score++
    }
    if(user=='.rock'&&computer=='paper'){
        displayresult.innerText='you lose'.toUpperCase()
       
    }
    if(user=='.paper'&&computer=='scissors'){
        displayresult.innerText='you lose'.toUpperCase()
        
    }
    if(user=='.scissors'&&computer=='scissors'){
        displayresult.innerText='tie'.toUpperCase()
       
    }
    
    if(user=='.paper'&&computer=='paper'){
        displayresult.innerText='tie'.toUpperCase()
        
    }
    if(user=='.rock'&&computer=='rock'){
        displayresult.innerText='tie'.toUpperCase()
        
    }
    
}

