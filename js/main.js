// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9. Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato.

$(document).ready(function() {
    $('.square').click(function() {
        var self = this
        $.ajax({
            url : 'https://flynn.boolean.careers/exercises/api/random/int',
            method : 'GET',
            success : function(data) {
                var randomNumber = data.response;
                console.log(randomNumber);
                test(randomNumber,self);
            } ,
            error : function() {
                console.log('Non funziona!');
            }
        });
    })



    function test(randN,selector) {
        $(selector).text(randN);
        $(selector).removeClass('yellow green');
        if (randN <= 5) {
            $(selector).toggleClass('yellow');
        } else {
            $(selector).toggleClass('green');
        }
    }



});
