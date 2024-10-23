/*      Icone de menu      */
var menuHamburguer = "Imagens/menu_fill.png";
var menuClose = "Imagens/close_fill.png";

function toggleMenu(){
    /*Aparecer o menu sobreposto*/
    const links = document.querySelector('.links');
    links.classList.toggle('active');

    /*Trocar a imagem*/
    document.getElementById("menu_icon").src = menuClose;
    let aux = menuHamburguer;
    menuHamburguer = menuClose;
    menuClose = aux;
}
