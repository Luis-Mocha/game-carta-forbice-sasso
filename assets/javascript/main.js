let myCarta = document.querySelector('#myCarta')
let myForbice = document.querySelector('#myForbice')
let mySasso = document.querySelector('#mySasso')

let greenEye = document.querySelector('#green-eye')
let redEye = document.querySelector('#red-eye')

function setEye () {
    greenEye.classList.toggle('d-none');
    redEye.classList.toggle('d-none');
}

// setEye in hover sulle mie scelte
myCarta.addEventListener('mouseover', setEye);
myCarta.addEventListener('mouseout', setEye);
myForbice.addEventListener('mouseover', setEye);
myForbice.addEventListener('mouseout', setEye);
mySasso.addEventListener('mouseover', setEye);
mySasso.addEventListener('mouseout', setEye);


// "icone" Usate
let hisMoveDiv = document.querySelector('#hisMove');
let myMoveDiv = document.querySelector('#myMove');
// scritte nella modale
let hePLayed = document.querySelector('#he-played');
let youPLayed = document.querySelector('#you-played');
// Clicco CARTA
myCarta.addEventListener('click', function() {
    myMove = 'carta'
    console.log(myMove);
    // evilMove();

    hisMoveDiv.innerHTML =
    `<img src="./assets/img/scissors-scary.png" alt="Scary Scissors" class="img-fluid">`;
    myMoveDiv.innerHTML =
    `<i class="fa-regular fa-hand"></i>`;
    //-
    hePLayed.innerHTML =
    `Lui ha giocato Forbici`
    youPLayed.innerHTML = 
    `Tu hai giocato ${myMove}`
}
);
// Clicco FORBICE
myForbice.addEventListener('click', function() {
    let myMove = 'forbici'
    console.log(myMove);
    // evilMove();

    hisMoveDiv.innerHTML =
    `<img src="./assets/img/the-rock.png" alt="The Rock" class="img-fluid the-rock">`;
    myMoveDiv.innerHTML =
    `<i class="fa-regular fa-hand-scissors"></i>`;
    //-
    hePLayed.innerHTML =
    `Lui ha giocato Sasso`;
    youPLayed.innerHTML = 
    `Tu hai giocato ${myMove}`;     
}
);
// Clicco SASSO
mySasso.addEventListener('click', function() {
    let myMove = 'sasso'
    console.log(myMove);
    // evilMove();

    hisMoveDiv.innerHTML =
    `<img src="./assets/img/toilet-paper.png" alt="Toilet Paper" class="img-fluid">`;
    myMoveDiv.innerHTML =
    `<i class="fa-regular fa-hand-back-fist"></i>`;
    //-
    hePLayed.innerHTML =
    `Lui ha giocato Carta`
    youPLayed.innerHTML = 
    `Tu hai giocato ${myMove}`
}
);

let closeModal = document.querySelector('.close-modal-button');

function refreshWindow() {
    window.location.reload();
};



