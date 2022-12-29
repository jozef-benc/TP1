var posX=0;
var posY=0;
var baseWidth = 350;
var baseHeight = 160;
var SiO2_Width = baseWidth*0.3;
var SiO2_Height = baseHeight*0.1;
var OPN_Width = baseWidth*0.5;
var OPN_Height = baseHeight*0.24;
var kov_Width = baseWidth-2*SiO2_Width;
var text_left_margin=5;
var electron_r=5;
var border_Width = 2;

window.onload = setBasic();

function setBasic(){
  document.getElementById('base').setAttribute('x',posX);
  document.getElementById('base').setAttribute('y',posY);
  document.getElementById('base').setAttribute('width',baseWidth);
  document.getElementById('base').setAttribute('height',baseHeight);

  document.getElementById('SiO2_1').setAttribute('x',posX);
  document.getElementById('SiO2_1').setAttribute('y',posY);
  document.getElementById('SiO2_1').setAttribute('width',SiO2_Width);
  document.getElementById('SiO2_1').setAttribute('height',SiO2_Height);

  document.getElementById('SiO2_2').setAttribute('x',posX+SiO2_Width+kov_Width);
  document.getElementById('SiO2_2').setAttribute('y',posY);
  document.getElementById('SiO2_2').setAttribute('width',SiO2_Width);
  document.getElementById('SiO2_2').setAttribute('height',SiO2_Height);

  document.getElementById('kov').setAttribute('x',posX+SiO2_Width);
  document.getElementById('kov').setAttribute('y',posY);
  document.getElementById('kov').setAttribute('width',kov_Width);
  document.getElementById('kov').setAttribute('height',SiO2_Height);

  document.getElementById('N').setAttribute('x',posX);
  document.getElementById('N').setAttribute('y',posY+SiO2_Height+border_Width);
  document.getElementById('N').setAttribute('width',baseWidth);
  document.getElementById('N').setAttribute('height',baseHeight-SiO2_Height);

  document.getElementById('N_plus').setAttribute('x',posX);
  document.getElementById('N_plus').setAttribute('y',(baseHeight)-(baseHeight-SiO2_Height)*0.4+border_Width);
  document.getElementById('N_plus').setAttribute('width',baseWidth);
  document.getElementById('N_plus').setAttribute('height',(baseHeight-SiO2_Height)*0.4);

   //___________OPN___________
  document.getElementById('OPN').setAttribute('x',posX+(baseWidth-OPN_Width)/2);
  document.getElementById('OPN').setAttribute('y',posY);
  document.getElementById('OPN').setAttribute('width',OPN_Width);
  document.getElementById('OPN').setAttribute('height',OPN_Height);

  document.getElementById('OPN_height_anim').setAttribute('from',OPN_Height);
  document.getElementById('OPN_height_anim').setAttribute('to',OPN_Height*1.7);

  document.getElementById('OPN_width_anim').setAttribute('from',OPN_Width);
  document.getElementById('OPN_width_anim').setAttribute('to',OPN_Width*1.3);

  document.getElementById('OPN_pos_anim').setAttribute('from',posX+(baseWidth-OPN_Width)/2);
  document.getElementById('OPN_pos_anim').setAttribute('to',posX+(baseWidth-OPN_Width*1.3)/2);


  //___________Text___________

  document.getElementById('text1').setAttribute('x',posX+text_left_margin);
  document.getElementById('text1').setAttribute('y',SiO2_Height*0.7);

  document.getElementById('text2').setAttribute('x',posX+SiO2_Width+kov_Width+text_left_margin);
  document.getElementById('text2').setAttribute('y',SiO2_Height*0.7);

  document.getElementById('text3').setAttribute('x',posX+SiO2_Width+text_left_margin);
  document.getElementById('text3').setAttribute('y',SiO2_Height*0.7);

  document.getElementById('text4').setAttribute('x',posX+text_left_margin);
  document.getElementById('text4').setAttribute('y',baseHeight*0.2+SiO2_Height);

  document.getElementById('text5').setAttribute('x',posX+text_left_margin);
  document.getElementById('text5').setAttribute('y',baseHeight*0.7+SiO2_Height);



//___________Path___________
document.getElementById('N_top_border').setAttribute('d',
"M"+(posX+1)+","+(posY+SiO2_Height+border_Width)  +
"L"+baseWidth+","+(posY+SiO2_Height+border_Width));

document.getElementById('kov_bottom_border').setAttribute('d',
"M"+(posX+SiO2_Width)+","+(posY+SiO2_Height+border_Width)  +
"L"+(posX+SiO2_Width+kov_Width)+","+(posY+SiO2_Height+border_Width));

  document.getElementById('dash_path').setAttribute('d',
  "M"+(posX+1)+","+((baseHeight)-(baseHeight-SiO2_Height)*0.4+border_Width)  +
  "L"+baseWidth+","+((baseHeight)-(baseHeight-SiO2_Height)*0.4 +border_Width));
 
  var curse_Height=(baseHeight)*0.9 +border_Width

  document.getElementById('curve_path').setAttribute('d',
  "M"+(posX-1)+","+(curse_Height)  +
  "Q"+(baseWidth*0.4)+","+(curse_Height+baseHeight*0.09)+
  " "+(baseWidth*0.6)+","+(curse_Height)+
  "T"+(baseWidth+1)+","+(curse_Height));

  document.getElementById('curve_path_border').setAttribute('d',
  "M"+(posX)+","+(curse_Height)  +
  "Q"+(baseWidth*0.4)+","+(curse_Height+baseHeight*0.09)+
  " "+(baseWidth*0.6)+","+(curse_Height)+
  "T"+(baseWidth)+","+(curse_Height));


  //electron circle radius
  document.getElementById('electron_circle2').setAttribute('r',electron_r);
  document.getElementById('electron_circle').setAttribute('r',electron_r);
  document.getElementById('electron_circle3').setAttribute('r',electron_r);
  //set path of animation
  var electron_startX=posX+SiO2_Width+kov_Width/2;
  var electron_startY= posY+electron_r;
  document.getElementById('electron_animation1').setAttribute
  ('path',"M"+(electron_startX)+","+(electron_startY)+
  "C"+(electron_startX+10)+","+(baseHeight*0.2)+","+
  (electron_startX+50)+","+(baseHeight*0.2)+","+
  (electron_startX+50)+","+(baseHeight-electron_r));

  for(let i=2;i<4;i++){
    var num=2;
  document.getElementById('electron_animation'+i+'').setAttribute
  ('path',"M"+(electron_startX+(i*10))+","+(electron_startY)+
  "C"+(electron_startX)+","+(baseHeight*0.2)+","+
  (electron_startX+20)+","+(baseHeight*0.2)+","+
  (electron_startX+20)+","+(baseHeight-electron_r));
  }
  

 
  
}


function startAnimation(){
  for (let index = 1; index < 3; index++) {
    var animation = document.getElementById("electron_animation"+index.toString());
    var electron = document.getElementById("e"+index.toString());
    animation.beginElement();
    electron.setAttribute('visibility','visible')
  }
 
  

  document.getElementById("OPN_height_anim").beginElement();
  document.getElementById("OPN_width_anim").beginElement();
  document.getElementById("OPN_pos_anim").beginElement();
}

function endAnimation(){
  for (let index = 1; index < 3; index++) {
    var animation = document.getElementById("electron_animation"+index.toString());
    var electron = document.getElementById("e"+index.toString());
    animation.endElement();

  }  
  

}