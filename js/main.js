// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9. Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato.

$(document).ready(function() {

    //handlebars template
    var source = $('#square-template').html();
    var template = Handlebars.compile(source);
    var html = template();
    //end

    // build box by creating 36 squares in '.box' div
    boxCreator('.box',36,html);


    $('.square').click(function() {
        var self = this
        $.ajax({
            url : 'https://flynn.boolean.careers/exercises/api/random/int',
            method : 'GET',
            success : function(data) {
                var randomNumber = data.response;
                console.log(randomNumber);
                randomSq(randomNumber,self);
            } ,
            error : function() {
                console.log('Non funziona!');
            }
        });
    })
});


function randomSq(randN,selector) {
    $(selector).text(randN);
    $(selector).removeClass('yellow green');
    if (randN <= 5) {
        $(selector).toggleClass('yellow');
    } else {
        $(selector).toggleClass('green');
    }
};

function boxCreator(selector,sqNumbers,template) {
    for (var i = 0; i < sqNumbers; i++) {
        $(selector).append(template);
    };
}
