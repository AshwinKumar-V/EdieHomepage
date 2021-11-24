
const links = document.getElementById("links")
const menu_icon = document.getElementById("menu_icon")
const close_icon = document.getElementById("close_icon")
const menu = document.getElementById("menu")
const menu_links = document.getElementById("menu_links")

/*------------Drop menu-------------*/
menu_icon.addEventListener('click', function(){
    menu.style.width = "60%"
    menu_icon.style.display = "none"
    close_icon.style.display = "block"
    menu_links.style.display = "flex"
});

/*------------Close menu-------------*/
close_icon.addEventListener('click', function(){
    menu.style.width = "0"
    close_icon.style.display = "none"
    menu_icon.style.display = "block"
    menu_links.style.display = "none"
});