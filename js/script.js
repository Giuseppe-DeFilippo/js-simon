"use strict"
console.clear()

/**Descrizione:*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce. (Per favorire il lavoro tutor mettete inizialmente un timer di 5-10 sec e non 30)
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*NOTA*: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.*/


//Math.floor(Math.random() * 99);
const numbersList = document.getElementById('numbers-list');
const countDown = document.getElementById('countdown');
const answersForm = document.getElementById('answers-form');



//function countdown(){

    let seconds = 6;

    let tempo = setInterval( function () {
        
        // count.innerText = seconds; // Aggiorna il display

        // Quando il tempo arriva a zero, ferma il timer
        if (seconds > 0) {
            seconds--;
            countDown.innerText = seconds;
        
            
        } else{
            countDown.remove();
            numbersList.remove();
            answersForm.classList.remove('d-none');
            ;
        }
    }, 1000);
    
//}
//countdown();

function random(){
    const randomNumbers = [];
    
    for(let i = 0; i<5; i++){
        let numero = Math.floor(Math.random() * 101); // Numero tra 0 e 98
        randomNumbers.push(numero);
        
    }
    return randomNumbers;
}
const numbertoguess = random();

for (let i = 0; i < numbertoguess.length; i++) {
    numbersList.innerHTML += '<li>' + numbertoguess[i] + '</li>';
}
 
// bottone

const bottone = document.querySelector('button.btn');
bottone.addEventListener('click' , function(event){
    event.preventDefault();

    let valoriInseriti = [];
    const valori = document.querySelectorAll('#input-group input');
    
    for(let i=0; i < valori.length; i++){
        valoriInseriti.push(valori[i].value);
    }
    console.log(valoriInseriti);

    console.log(numbertoguess);

    //valoriInseriti = ['12', '2', '45', '6', '9']
                      // 0     1    2     3    4

    let numeriIndovinati=[];

    for(let i=0; i< valoriInseriti.length; i++){
        let valore = parseInt(valoriInseriti[i])

        if(numbertoguess.includes(valore)){
            numeriIndovinati.push(valore);
        }
        
    }   
    //console.log("Numeri indovinati: " + numeriIndovinati);
})
let message= document.getElementById('message');
