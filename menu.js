var menuHamburguer = "Imagens/menu_fill.png";
var menuClose = "Imagens/close_fill.png";

function toggleMenu(){
    const links = document.querySelector('.links');
    links.classList.toggle('active');

    document.getElementById("menu_icon").src = menuClose;

    let aux = menuHamburguer;
    menuHamburguer = menuClose;
    menuClose = aux;
}