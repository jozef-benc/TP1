const xmlns = "http://www.w3.org/2000/svg";
const svg = document.getElementById("svg");

var end_of_anim = false;
var sch_effect = false;
var duration = 3;

//Elements to animate
var item0 = document.getElementById('dash_line');
var item1 = document.getElementById('curve1');
var item2 = document.getElementById('curve2');
var item3 = document.getElementById('blue_horizontal1');
var item4 = document.getElementById('blue_horizontal2');
var item5 = document.getElementById('white_filling');
var item6 = document.getElementById('green_filling');


var element_list = [item0, item1, item2, item3, item4, item5, item6];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createAnimation(id, start, end) {
    var animation = document.createElementNS(xmlns, "animate");
    animation.setAttribute('id', 'anim_' + id);
    animation.setAttribute('fill', 'freeze');
    animation.setAttribute('begin', 'indefinite');
    animation.setAttribute('dur', duration + 's');
    animation.setAttribute('repeatCount', '1');
    animation.setAttribute('attributeName', 'd');
    animation.setAttribute('from', start);
    animation.setAttribute('to', end);

    return animation;
}


function createElectron(id, path, dur, direction) {

    var electron_text = document.createElementNS(xmlns, "text");
    electron_text.setAttribute('class', 'minus');
    electron_text.textContent = '-';
    electron_text.setAttribute('x', '0');
    electron_text.setAttribute('y', '0');

    electron_text.setAttribute('font-size', '16px');
    electron_text.setAttribute('font-family', 'monospace');
    electron_text.setAttribute('fill', 'black');
    electron_text.setAttribute('text-anchor', 'middle');
    electron_text.setAttribute('dominant-baseline', 'middle');

    var electron_circle = document.createElementNS(xmlns, "circle");
    electron_circle.setAttribute('class', 'electron');
    electron_circle.setAttribute('r', electron_r);
    electron_circle.setAttribute('rx', '0');
    electron_circle.setAttribute('cy', '0');
    electron_circle.setAttribute('fill', 'aliceblue');
    electron_circle.setAttribute('stroke', 'rgb(36, 74, 143)');
    electron_circle.setAttribute('stroke-width', ' 2px');


    var animation = document.createElementNS(xmlns, "animateMotion");
    animation.setAttribute('id', 'anim_' + id);
    animation.setAttribute('begin', 'indefinite');
    animation.setAttribute('dur', dur);
    animation.setAttribute('repeatCount', 'indefinite');
    animation.setAttribute('keyPoints', direction);
    animation.setAttribute('keyTimes', '0;1');
    animation.setAttribute('calcMode', 'linear');
    animation.setAttribute('path', path);

    var electron = document.createElementNS(xmlns, "g");
    electron.setAttribute('id', id);
    electron.setAttribute('visibility', 'hidden');
    electron.appendChild(electron_circle);
    electron.appendChild(electron_text);
    electron.appendChild(animation);

    return electron;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CREATE_ELECTRONS
var e_array_ps = []
var e_array_zs = []
var electron_path_ps = document.getElementById('electron_path_ps').getAttribute('d');
var electron_path_zs = document.getElementById('electron_path_zs').getAttribute('d');
var number_of_electrons = 26;

for (let i = 0; i < number_of_electrons; i++) {
    let e1 = createElectron('e_ps_' + i, electron_path_ps, '4s', '1;0');

    e_array_ps.push(e1);

    svg.appendChild(e1);

    if (i % 4 == 0) {
        let e2 = createElectron('e_zs_' + i, electron_path_zs, '4s', '0;1');
        e_array_zs.push(e2);
        svg.appendChild(e2);

    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addAnimation(gap, c, direction) {
    //DASH LINE   
    var start_c = item0.getAttribute('d');
    var end_c =
        "M" + (posX + baseWidth / 5 + gap) + "," + (posY) +
        "L" + (posX + baseWidth / 5 + gap) + "," + (baseHeight);

    item0.appendChild(createAnimation(0 + '_' + direction, start_c, end_c));


    //CURVE_1    
    var start_c = item1.getAttribute('d');
    var end_c =
        "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2) +
        "Q" + (posX + baseWidth / 5 + gap / 2) + "," + (posY + halfHeight - pv_height / 2 + c) +
        " " + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight - pv_height / 2 + c)


    item1.appendChild(createAnimation(1 + '_' + direction, start_c, end_c));


    //CURVE_2   
    var start_c = item2.getAttribute('d');
    var end_c =
        "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight + pv_height / 2) +
        "Q" + (posX + baseWidth / 5 + gap / 2) + "," + (posY + halfHeight + pv_height / 2 + c) +
        " " + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight + pv_height / 2 + c)

    item2.appendChild(createAnimation(2 + '_' + direction, start_c, end_c));


    //HORIZONTAL_LINE_1    
    var start_c = item3.getAttribute('d');
    var end_c =
        "M" + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight - pv_height / 2 + c) +
        "L" + (baseWidth) + "," + (posY + halfHeight - pv_height / 2 + c)

    item3.appendChild(createAnimation(3 + '_' + direction, start_c, end_c));


    //HORIZONTAL_LINE_2    
    var start_c = item4.getAttribute('d');
    var end_c =
        "M" + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight + pv_height / 2 + c) +
        "L" + (baseWidth) + "," + (posY + halfHeight + pv_height / 2 + c)

    item4.appendChild(createAnimation(4 + '_' + direction, start_c, end_c));


    //WHITE_FILLING   
    var start_c = item5.getAttribute('d');
    var end_c =
        "M" + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight - pv_height / 2 + c) +
        "L" + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight + pv_height / 2 + c) +
        "L" + (baseWidth) + "," + (posY + halfHeight + pv_height / 2 + c) +
        "L" + (baseWidth) + "," + (posY + halfHeight - pv_height / 2 + c) + " Z";

    item5.appendChild(createAnimation(5 + '_' + direction, start_c, end_c));

    //GREEN_FILLING   
    var start_c = item6.getAttribute('d');
    var end_c =
        "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2) +
        " L" + (posX + baseWidth / 5) + "," + (posY + halfHeight + pv_height / 2) +
        " Q" + (posX + baseWidth / 5 + gap / 2) + "," + (posY + halfHeight + pv_height / 2 + c) +
        " ," + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight + pv_height / 2 + c) +
        " L" + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight - pv_height / 2 + c) +
        " Q" + (posX + baseWidth / 5 + gap / 2) + "," + (posY + halfHeight - pv_height / 2 + c) + " " + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight - pv_height / 2 + c);

    item6.appendChild(createAnimation(6 + '_' + direction, start_c, end_c));
}

addAnimation(gap_p, c_p, 'p');
addAnimation(gap_z, c_z, 'z');

function PS_anim() {
    startAnimation('p');
}

function ZS_anim() {
    startAnimation('z');
}



function startAnimation(direction) {
    //START ANIMATIONS
    for (let index = 0; index < 7; index++) {
        document.getElementById("anim_" + index + '_' + direction).beginElement();
    }

    if (direction == 'p') {
        showButtons('button4', 'button5', 'none');
        setTimeout(showButtons, 1000 * duration, 'button2', 'button3', 'inline')
    }
    else {
        showButtons('button2', 'button3', 'none');
        setTimeout(showButtons, 1000 * duration, 'button4', 'button5', 'inline');
    }


}

function showButtons(b1, b2, v) {
    document.getElementById(b1).style.display = v;
    document.getElementById(b2).style.display = v;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ELECTRON_ANIMATION
function electron_anim(e_array, mills) {
    end_of_anim = false;
    var time = 0;
    e_array.forEach(item => {
        t = setTimeout(releaseElectron, time, item)
        time += mills;
    })

}

function releaseElectron(element) {
    if (end_of_anim) return;
    element.setAttribute('visibility', 'visible');
    element.children[2].beginElement();
}

function PS_electron_anim() { electron_anim(e_array_ps, 160); }
function ZS_electron_anim() { electron_anim(e_array_zs, 590); }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function schottky_effect(curve, line) {

    document.getElementById('green_filling').setAttribute('fill', 'rgb(148, 254, 112)');

    if (sch_effect) {
        item1.setAttribute('stroke', 'rgb(0, 0, 255)');
        document.getElementById('blue_vertical').setAttribute('stroke', 'rgb(0, 0, 255)');
        document.getElementById(curve).setAttribute('stroke', 'none');
        document.getElementById(curve).setAttribute('fill', 'none');
        document.getElementById(line).setAttribute('stroke', 'none');



    }
    else {
        item1.setAttribute('stroke', 'none');
        document.getElementById('blue_vertical').setAttribute('stroke', 'none');
        document.getElementById(curve).setAttribute('stroke', 'rgb(0,0,255)');
        document.getElementById(curve).setAttribute('fill', 'rgb(148, 254, 112)');
        document.getElementById(line).setAttribute('stroke', 'rgb(0,0,255)');
        //document.getElementById('green_filling').setAttribute('fill', 'none');


    }
    sch_effect = !sch_effect;

}

function PS_schottky_effect() {
    schottky_effect('sch_curve_ps', 'sch_line_ps');
}
function ZS_schottky_effect() {
    schottky_effect('sch_curve_zs', 'sch_line_zs');
    if (!sch_effect) {
        //ZS case
        document.getElementById('test_filling').setAttribute('fill', 'none');
        //document.getElementById('test_filling2').setAttribute('fill', 'none');
    }
    else {
        //ZS case
        document.getElementById('test_filling').setAttribute('fill', 'rgb(148, 254, 112)');
        //document.getElementById('test_filling2').setAttribute('fill', ' rgb(0, 0, 0)');
        document.getElementById('sch_curve_zs').setAttribute('fill', 'none');
        document.getElementById('green_filling').setAttribute('fill', 'none');
    }
}

function Reset_anim() {
    if (typeof t !== 'undefined')
        clearTimeout(t);
    //END ANIMATIONS
    end_of_anim = true;


    e_array_ps.forEach(element => {
        element.children[2].endElement()
        element.setAttribute('visibility', 'hidden');
    })

    e_array_zs.forEach(element => {
        element.children[2].endElement()
        element.setAttribute('visibility', 'hidden');
    })


    //SET BUTTONS INVISIBLE
    showButtons('button2', 'button3', 'none');
    showButtons('button4', 'button5', 'none');
    sch_effect = false;


    location.reload();
}


