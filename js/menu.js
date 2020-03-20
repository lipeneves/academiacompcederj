var menu = $(".menuPrincipal");
var btnMenu = $(".btn-menu");
var btnAreaAlunos = $(".alunoArea");

$(function(){
  btnMenu.click(exibirMenu);
  redimensionaMenu();

  $(window).resize(redimensionaMenu);

  btnAreaAlunos.hover(function(){
    $(this).find("a").addClass("alunoHover");
  });
});

function exibirMenu() {
  menu.stop().slideToggle(500);
}

function redimensionaMenu(){
  var tam = $(window).width();

  if (tam >=768){
    $(".btn-menu").hide();
    menu.show();
    menu.appendTo(".cabecalho > .container");
  }else{
    $(".btn-menu").show();
    menu.appendTo(".topo");
    menu.hide();
  }
}