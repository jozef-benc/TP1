window.addEventListener("resize", displayWindowSize);
window.addEventListener("load", displayWindowSize);

function displayWindowSize() {
   
    var width = window.innerWidth;    
    if (width > 840) {
        document.getElementById("content").style.width = "80vw";
        changeMenuSize('10pt','15em');
        changeElementWidth('500px');
    }
    if (width <= 840 && width > 680) {
        document.getElementById("content").style.width = "90vw";
        changeMenuSize('8pt','15em');
        changeElementWidth('400px');
    }

    if (width <= 680 && width > 480) {
        document.getElementById("content").style.width = "95vw";
        changeMenuSize('6pt','15em');
        changeElementWidth('300px');
    }

    if (width <= 480) {
        var c_width = width - 20;
        changeMenuSize('6pt',c_width + 'px');
        changeElementWidth(c_width + 'px');
        document.getElementById("content").style.width = "95vw";
        document.getElementById("content").style.gridTemplateColumns = "1fr";
        document.getElementById('theory').style.marginTop = '10px';

        document.getElementById('menu').style.paddingLeft = '0';
    }
    else {
        document.getElementById("content").style.gridTemplateColumns = "1fr 2fr";
        document.getElementById('menu').style.paddingLeft = '3em';
        document.getElementById('theory').style.marginTop = '0';
    }

    console.log(document.body.scrollHeight > window.innerHeight)
    console.log(window.innerHeight)
    console.log(document.body.scrollHeight)
    if(document.body.scrollHeight > window.innerHeight){
        document.getElementsByClassName('theory_content')[0].style.height='auto';
        document.getElementsByClassName('theory_content')[0].style.overflowY='hidden';
    }
    else{
        document.getElementsByClassName('theory_content')[0].style.height= window.innerHeight*0.6+'px';
        document.getElementsByClassName('theory_content')[0].style.overflowY='auto';
    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function changeMenuSize(fontSize,buttonWidth) {
    //button font size
    var mainButtons = document.getElementsByClassName('mainButton');
    var subButtons = document.getElementsByClassName('subButton');
    for (i = 0; i < mainButtons.length; i++) {
        mainButtons[i].style.fontSize = fontSize;
        mainButtons[i].style.width = buttonWidth;
    }

    for (i = 0; i < subButtons.length; i++) {
        subButtons[i].style.fontSize = fontSize;
        subButtons[i].style.width = buttonWidth;
    }


}

function changeElementWidth(width) {
    //element with the same width
    var videos = document.getElementsByTagName('video');
    var images = [
        document.getElementById('PD_PS_sch'),
        document.getElementById('PD_base'),
        document.getElementById('PD_ZS_sch'),
        document.getElementById('legend_img'),
        document.getElementById('legend'),
        document.getElementById('theory')];

    for (i = 0; i < videos.length; i++)
        videos[i].style.width = width;

    for (i = 0; i < images.length; i++)
        images[i].style.width = width;

}
