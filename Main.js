function animateTitle(){
    const T1 = document.querySelector('#T1');
    T1.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slow');

    setTimeout(function(){
        T1.classList.remove('animate__fadeInUp');
        T1.classList.add('animate__fadeOutUp');
        animateBox();
    }, 2100);
}

function animateBox(){
    setTimeout(function(){
        const B1 = document.querySelector('#B1');
        B1.style.display = "block";
        B1.classList.add('animate__animated', 'animate__fadeInUp');
    }, 2000);
}


animateTitle();

//animate the box to take up the viewport
function boxBig() {

const box = document.querySelector('.box'); //box
const boxHolder = document.querySelector('#fillScreen'); //box holder

box.addEventListener('animationend', function() { 
    boxHolder.classList.add('fillScreen');
});

setTimeout(function(){
    const T1 = document.querySelector('#T1');
})
}

boxBig();

//changes the bg color to red after the box fills the screen*
function sceneTwo(){

    const boxHolder = document.querySelector('#fillScreen'); //box holder
    const box = document.querySelector('#B1') //box

    setTimeout(function(){ //happens AFTER 7.5 Seconds
        document.body.style.backgroundColor = '#ed4f47'; //changes bg color
        boxHolder.classList.remove('fillScreen'); //removes ani
        box.classList.remove( 'box' ); // removes box
    }, 6500);

}

sceneTwo();

//attempt to animate title two in 
function titleTwo(){

    const T2 = document.querySelector( '#T2' ); //H2

    setTimeout(function(){
        T2.classList.remove('hidden');
        T2.classList.add( 'animate__animated', 'animate__fadeInUp' ); //adds animation after 7.5 seconds
    }, 6700);

}

titleTwo();

//title three in 
function titleThree(){
    const T3 = document.querySelector('#T3');

    setTimeout(function(){
        T3.classList.remove('hidden'); 
        T3.classList.add('animate__animated', 'animate__fadeInUp');
    }, 7500);
 
}

titleThree();


function timeListen1(){

    setTimeout(function(){
        document.addEventListener("touchstart", startSpin);
        document.addEventListener("click", startSpin);
    }, 7300);

}

timeListen1();

function timeListen2(){

    setTimeout(function(){
        document.addEventListener("touchstart", revealAnswer)
        document.addEventListener("click", revealAnswer);
    }, 7200);    

}

timeListen2();

function startSpin(){

    const T2 = document.querySelector( '#T2' ); //h2
    const T3 = document.querySelector('#T3'); //h3
  
    
    T2.classList.remove('animate__fadeInUp'); //remove old ani  
    T2.classList.add('animate__fadeOutUp'); // add fade out ani

    T3.classList.remove('animate__fadeInUp'); //remove old ani
    T3.classList.add('animate__fadeOutUp'); // add fade out ani 

    setTimeout(function(){

        T2.classList.add('hidden'); //hide T2 after 9ms
        T3.classList.add('hidden'); //hide T3 after 9ms

    }, 900);

}


function revealAnswer(){
    const rest = document.querySelector('#rest'); //restaurants 
    const again = document.querySelector('#again'); //again
    const answers = ["Chili's", 'Sprouts', 'ATL Wings',
    'McDonalds', "NiMarco's", 'My Pita Wrap', "Oscar's", 
    'Chic-Fil-A', 'Raising Canes', 'Panda Express', "Jersey Mike's", 
    "Bosa Doughnuts", "Firehouse Subs"];

    setTimeout(function(){ 
        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[randomIndex];
        rest.innerHTML = randomAnswer;
        rest.classList.remove('hidden'); //remove the hidden paramter
        rest.classList.add('animate__animated', 'animate__fadeInUp'); //add animation
    }, 1000);

    setTimeout(function(){
        
        again.classList.remove('hidden');
        again.classList.add('animate__animated', 'animate__fadeInUp');

    }, 1800 );

}
