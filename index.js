
let randompick=null ;
let score = 0;

function handpicked(hand){
    const container = document.querySelector(".container");
    const competediv = document.querySelector(".compete");
    let newImage = document.querySelector(".newImage");
    let pickedDiv = document.querySelector('.picked-div');
    const handpicked = document.querySelector(hand);
    let displayscore = document.querySelector('.display-score');
    const checkbtn = document.querySelector('.changebtn').innerText;
    container.style.display="none";
    competediv.style.display="block"; 
    pickedDiv.innerHTML = handpicked.innerHTML;
    pickedDiv.setAttribute( 'id' ,'winner')
    if(checkbtn=='INTERMEDIATE')result(hand,intermediate_generate_Hand());
        
    if(checkbtn=='ADCANCED')result(hand,advanced_generate_hand());
        
    if(hand==".rock"){
        pickedDiv.querySelector('img').style.padding='30px';
    }
    if(hand=='.lizard') pickedDiv.querySelector('img').style.padding='25px';
    displayscore.innerText=score;
    setoutline();
    set_outline_to_generated_hand()
}

function playagain(){
    const container = document.querySelector(".container");
    const competediv = document.querySelector(".compete");
    const btn = document.querySelector('.changebtn')
    competediv.style.display="none";
    container.style.display="flex";
       
      

}
const setoutline = () => {
    let pickedDiv = document.querySelector('.picked-div');
    let img = pickedDiv.querySelector('img');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    img.style.outlineColor = "#" + randomColor;
   
  }
const set_outline_to_generated_hand = () => {
    let random = document.querySelector('.random');
    let img = random.querySelector('img');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    img.style.outlineColor = "#" + randomColor;
   
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
        rulesbtn.style.display='none'
     }
     else {
        rulesbtn.style.display='none';
        rulescontainer.style.display='inline-block';
     }
}


let rulescontainer = document.querySelector('.advanced-rules-wapper');
let cross = document.querySelector('.ad-cross')
cross.addEventListener('click',()=>{
    let btn = document.querySelector('.btn')
    rulescontainer.style.display='none';
    btn.style.display = 'block'
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
    return randompick
}

const advanced_generate_hand = ()=>{
    let handreplace = document.querySelector('.random-hand');
    const advanced_list =['rock','paper','scissors','lizard','spock']
    let randompick =advanced_list[Math.floor(Math.random()*advanced_list.length)];
    handreplace.src ='images/icon-'+randompick+'.svg';
    console.log(handreplace)
    return randompick;
    
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

    /* Advanced results */
    if(user=='.rock'&&computer=='lizard'){
        displayresult.innerText='you win'.toUpperCase()
        score++
    }
    if(user=='.paper'&&computer=='spock'){
        displayresult.innerText='you win'.toUpperCase()
        score++
    }
    if(user=='.lizard'&&computer=='spock'){
        displayresult.innerText='you win'.toUpperCase()
        score++
    }
    if(user=='.spock'&&computer=='scissors'){
        displayresult.innerText='you win'.toUpperCase()
        score++
    }
    if(user=='.scissors'&&computer=='lizard'){
        displayresult.innerText='you win'.toUpperCase()
        score++
    }
    if(user=='.lizard'&&computer=='paper'){
        displayresult.innerText='you win'.toUpperCase()
        score++
    }
    if(user=='.spock'&&computer=='rock'){
        displayresult.innerText='you win'.toUpperCase()
        score++
    }


    if(user=='.lizard'&&computer=='lizard'){
        displayresult.innerText='tie'.toUpperCase()
       
    }
    if(user=='.spock'&&computer=='spock'){
        displayresult.innerText='tie'.toUpperCase()
        
    }
    

    if(user=='.lizard'&&computer=='rock'){
        displayresult.innerText='you lose'.toUpperCase()
        
    }
    if(user=='.scissors'&&computer=='spock'){
        displayresult.innerText='you lose'.toUpperCase()
        
    }
    if(user=='.spock'&&computer=='paper'){
        displayresult.innerText='you lose'.toUpperCase()
        
    }
    if(user=='.spock'&&computer=='lizard'){
        displayresult.innerText='you lose'.toUpperCase()
        
    }
    if(user=='.rock'&&computer=='spock'){
        displayresult.innerText='you lose'.toUpperCase()
        
    }
    if(user=='.lizard'&&computer=='scissors'){
        displayresult.innerText='you lose'.toUpperCase()
        
    }

   
    
}

