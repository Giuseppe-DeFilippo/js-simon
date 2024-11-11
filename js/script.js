/**Descrizione:*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce. (Per favorire il lavoro tutor mettete inizialmente un timer di 5-10 sec e non 30)
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*NOTA*: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.*/


//Math.floor(Math.random() * 99);
const numbertoguess = [];
const numerorandom = document.getElementById('numbers-list').innerHTML
function random(numerorandom){
    for(let i = 0; i<6; i++){
        numerorandom = Math.floor(Math.random() * 99);
    }
    console.log(numerorandom);
}
random(numerorandom);