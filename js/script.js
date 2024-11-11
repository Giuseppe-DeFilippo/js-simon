/**Descrizione:*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce. (Per favorire il lavoro tutor mettete inizialmente un timer di 5-10 sec e non 30)
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*NOTA*: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.*/


//Math.floor(Math.random() * 99);
const numbertoguess = [];
const numerorandom = document.getElementById('numbers-list').innerHTML

setTimeout (random, 5000000);
function random(){
    numbertoguess.length = 0;
    for(let i = 0; i<5; i++){
        let numero = Math.floor(Math.random() * 99); // Numero tra 0 e 98
        numbertoguess.push(numero);
        
    }
    document.getElementById('numbers-list').innerHTML = numbertoguess.join(", ");
}
random();