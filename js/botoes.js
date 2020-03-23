var botoes = $(".btn");
var linkMaterias = $(".materia");

$(function(){
    inativaBotoes();

    linkMaterias.click(function(event){
        event.preventDefault();
    });
});


function inativaBotoes(){

    botoes.each(function(botao){
        if($(this).text() == "Em Breve"){
            $(this).addClass("inativo");
        }
    });
}

