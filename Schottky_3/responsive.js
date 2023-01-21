window.addEventListener("resize", displayWindowSize);
window.addEventListener("load",displayWindowSize);

function displayWindowSize() {

    var width = window.innerWidth;
   

    if (width > 840) {
        //normal
        document.getElementById("hiddenMenu").style.display="none";
        document.getElementById("content").style.gridTemplateColumns="1fr 2fr";
        document.getElementById("menu").classList.remove("response_menu");
        document.getElementById("menu").style.display = 'block';
        document.getElementById("menu").style.marginTop = '0';
    }
    if (width <= 840 && width > 500 ){
        //grid 1fr
        //menu as overlay
        document.getElementById("hiddenMenu").style.display="block";
        document.getElementById("menu").style.display = 'none';
        document.getElementById("content").style.gridTemplateColumns="1fr";
        document.getElementById("content").style.width="90vw";
    }

    if (width <= 500) {
        //resize everything where size is 500
    }
}
