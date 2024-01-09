let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
let icon = menu.querySelector(".fa-bars");
menu.onclick = () => {
    // menu.classList.toggle('x');
   
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-square-xmark");
    }
    else {
        icon.classList.replace("fa-square-xmark","fa-bars");
    }
     navlist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('open');
    navlist.classList.remove('open');
};

