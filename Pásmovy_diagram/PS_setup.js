var posX = 0;
var posY = 0;
var baseWidth = 600;
var baseHeight = 350;

var halfHeight = baseHeight / 4 * 2
var kov_height = baseHeight / 3;
var pv_height = baseHeight / 2.6;

var b = 2; //half of path border
var e = -10; // floating of electron

var gap = 50; // normal=50
var c = (pv_height / 2) * 0.5; // normal = (pv_height/2)*0.5

//POSITIONS forward direction
var gap_p = 25;
var c_p = (pv_height / 2) * 0.2;

//POSITIONS backward direction
var gap_z = 75;
var c_z = (pv_height / 2) * 0.8;

console.log(c)
console.log(c_p)
var electron_r = 5;


window.onload = setBasic();

function setBasic() {
  document.getElementById('border').setAttribute('x', posX);
  document.getElementById('border').setAttribute('y', posY);
  document.getElementById('border').setAttribute('width', baseWidth);
  document.getElementById('border').setAttribute('height', baseHeight);


  document.getElementById('whiteRec').setAttribute('x', posX);
  document.getElementById('whiteRec').setAttribute('y', posY);
  document.getElementById('whiteRec').setAttribute('width', baseWidth / 5);
  document.getElementById('whiteRec').setAttribute('height', baseHeight);

  document.getElementById('greenRec').setAttribute('x', posX + baseWidth / 5);
  document.getElementById('greenRec').setAttribute('y', posY);
  document.getElementById('greenRec').setAttribute('width', baseWidth / 5 * 4);
  document.getElementById('greenRec').setAttribute('height', baseHeight);

  document.getElementById('kov').setAttribute('x', posX);
  document.getElementById('kov').setAttribute('y', posY + halfHeight);
  document.getElementById('kov').setAttribute('width', baseWidth / 5);
  document.getElementById('kov').setAttribute('height', halfHeight);

  document.getElementById('inner_border').setAttribute('d',
    "M" + (posX + baseWidth / 5) + "," + (posY) +
    "L" + (posX + baseWidth / 5) + "," + (baseHeight));

  document.getElementById('base_line').setAttribute('d',
    "M" + (posX) + "," + (posY + halfHeight) +
    "L" + (baseWidth) + "," + (posY + halfHeight));


  document.getElementById('dash_line').setAttribute('d',
    "M" + (posX + baseWidth / 5 + gap) + "," + (posY) +
    "L" + (posX + baseWidth / 5 + gap) + "," + (baseHeight));




  document.getElementById('blue_vertical').setAttribute('d',
    "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2) +
    "L" + (posX + baseWidth / 5) + "," + (posY + halfHeight + pv_height / 2));

  document.getElementById('blue_horizontal1').setAttribute('d',
    "M" + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight - pv_height / 2 + c) +
    "L" + (baseWidth) + "," + (posY + halfHeight - pv_height / 2 + c));

  document.getElementById('blue_horizontal2').setAttribute('d',
    "M" + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight + pv_height / 2 + c) +
    "L" + (baseWidth) + "," + (posY + halfHeight + pv_height / 2 + c));


  document.getElementById('curve1').setAttribute('d',
    "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2) +
    "Q" + (posX + baseWidth / 5 + gap / 2) + "," + (posY + halfHeight - pv_height / 2 + c) +
    " " + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight - pv_height / 2 + c));

  document.getElementById('curve2').setAttribute('d',
    "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight + pv_height / 2) +
    "Q" + (posX + baseWidth / 5 + gap / 2) + "," + (posY + halfHeight + pv_height / 2 + c) +
    " " + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight + pv_height / 2 + c));


  document.getElementById('white_filling').setAttribute('d',
    "M" + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight - pv_height / 2 + c) +
    "L" + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight + pv_height / 2 + c) +
    "L" + (baseWidth) + "," + (posY + halfHeight + pv_height / 2 + c) +
    "L" + (baseWidth) + "," + (posY + halfHeight - pv_height / 2 + c) + " Z");

  document.getElementById('green_filling').setAttribute('d',
    "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2) +
    " L" + (posX + baseWidth / 5) + "," + (posY + halfHeight + pv_height / 2) +
    "Q" + (posX + baseWidth / 5 + gap / 2) + "," + (posY + halfHeight + pv_height / 2 + c) +
    " " + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight + pv_height / 2 + c) +
    " L" + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight - pv_height / 2 + c) +
    "Q" + (posX + baseWidth / 5 + gap / 2) + "," + (posY + halfHeight - pv_height / 2 + c) + " " + (posX + baseWidth / 5 + gap) + "," + (posY + halfHeight - pv_height / 2 + c));



  //ELECTRON_PATH_PS
  document.getElementById('electron_path_ps').setAttribute('d',
    " M" + (posX + electron_r) + "," + (posY + halfHeight + e) +
    " L" + ((baseWidth / 5) * 0.6) + "," + (posY + halfHeight + e) +
    " Q" + ((baseWidth / 5) * 0.75) + "," + (posY + halfHeight - pv_height / 2 + e) + "," + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2 + e) +
    " Q" + (posX + baseWidth / 5 + gap_p / 2) + "," + (posY + halfHeight - pv_height / 2 + c_p + e) + "," + (posX + baseWidth / 5 + gap_p) + "," + (posY + halfHeight - pv_height / 2 + c_p + e) +
    " L" + (baseWidth - electron_r) + "," + (posY + halfHeight - pv_height / 2 + c_p + e));



  //SHOTTKY_EFFECT_PS
  var sch = c_p / 2;
  document.getElementById('sch_curve_ps').setAttribute('d',
    "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2 + b + sch) +
    "Q" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2 + b) + "," + (posX + baseWidth / 5 + gap_p * 0.3) + "," + (posY + halfHeight - pv_height / 2 + sch) +
    "Q" + (posX + baseWidth / 5 + gap_p * 0.6) + "," + (posY + halfHeight - pv_height / 2 + c_p) + "," + (posX + baseWidth / 5 + gap_p + 1) + "," + (posY + halfHeight - pv_height / 2 + c_p)
  );

  document.getElementById('sch_line_ps').setAttribute('d',
    "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2 + b + sch) +
    "L" + (posX + baseWidth / 5) + "," + (posY + halfHeight + pv_height / 2));



  //ELECTRON_PATH_ZS
  document.getElementById('electron_path_zs').setAttribute('d',
    " M" + (posX + electron_r) + "," + (posY + halfHeight + e) +
    " L" + ((baseWidth / 5) * 0.6) + "," + (posY + halfHeight + e) +
    " Q" + ((baseWidth / 5) * 0.75) + "," + (posY + halfHeight - pv_height / 2 + e) + "," + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2 + e) +
    " Q" + (posX + baseWidth / 5 + gap_z / 2) + "," + (posY + halfHeight - pv_height / 2 + c_z + e) + "," + (posX + baseWidth / 5 + gap_z) + "," + (posY + halfHeight - pv_height / 2 + c_z + e) +
    " L" + (baseWidth - electron_r) + "," + (posY + halfHeight - pv_height / 2 + c_z + e));


  //SHOTTKY_EFFECT_ZS
  var sch = c_z / 3;
  document.getElementById('sch_curve_zs').setAttribute('d',
    "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2 + b + sch) +
    "Q" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2 + b) + "," + (posX + baseWidth / 5 + gap_z * 0.3) + "," + (posY + halfHeight - pv_height / 2 + c_z / 2) +
    "Q" + (posX + baseWidth / 5 + gap_z * 0.6) + "," + (posY + halfHeight - pv_height / 2 + c_z) + "," + (posX + baseWidth / 5 + gap_z + 1) + "," + (posY + halfHeight - pv_height / 2 + c_z)
  );

  document.getElementById('sch_line_zs').setAttribute('d',
    "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2 + b + sch) +
    "L" + (posX + baseWidth / 5) + "," + (posY + halfHeight + pv_height / 2));





  document.getElementById('test_filling').setAttribute('d',
    "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2 + b + sch) +
    " L" + (posX + baseWidth / 5) + "," + (posY + halfHeight + pv_height / 2) +
    "Q" + (posX + baseWidth / 5 + gap_z / 2) + "," + (posY + halfHeight + pv_height / 2 + c_z) +
    " " + (posX + baseWidth / 5 + gap_z) + "," + (posY + halfHeight + pv_height / 2 + c_z) +
    " L" + (posX + baseWidth / 5 + gap_z) + "," + (posY + halfHeight - pv_height / 2 + c_z) +
    "M" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2 + b + sch) +
    "Q" + (posX + baseWidth / 5) + "," + (posY + halfHeight - pv_height / 2 + b) + "," + (posX + baseWidth / 5 + gap_z * 0.3) + "," + (posY + halfHeight - pv_height / 2 + c_z / 2) +
    "Q" + (posX + baseWidth / 5 + gap_z * 0.6) + "," + (posY + halfHeight - pv_height / 2 + c_z) + "," + (posX + baseWidth / 5 + gap_z + 1) + "," + (posY + halfHeight - pv_height / 2 + c_z)
  );

  /*document.getElementById('test_filling2').setAttribute('d',
  "M"+(posX+baseWidth/5+gap_z*0.3)+","+(posY+halfHeight-pv_height/2+c_z/2)+
  "Q"+(posX+baseWidth/5+gap_z*0.6)+","+(posY+ halfHeight -pv_height/2 +c_z)+"," +  (posX+baseWidth/5+gap_z+1)+","+(posY+ halfHeight -pv_height/2 +c_z)  
  );*/


  var top_line = 117;//schottky ps +2 zs +
  var left_bottom_line = 175
  var right_bottom_line = 140
  var left_arrow_x = 55; //x position of the arrow
  var right_arrow_x = 180; //x position of the arrow
  var bottom_line_ZS = 161;
  var bottom_line_PS = 122;

  var a_width = 5;
  var a_height = 11;

  // left arrow
  document.getElementById("line1").setAttribute('x1', left_arrow_x - a_width);
  document.getElementById("line1").setAttribute('y1', top_line + a_height);
  document.getElementById("line1").setAttribute('x2', left_arrow_x);
  document.getElementById("line1").setAttribute('y2', top_line);

  document.getElementById("line2").setAttribute('x1', left_arrow_x);
  document.getElementById("line2").setAttribute('y1', top_line);
  document.getElementById("line2").setAttribute('x2', left_arrow_x + a_width);
  document.getElementById("line2").setAttribute('y2', top_line + a_height);

  document.getElementById("line3").setAttribute('x1', left_arrow_x);
  document.getElementById("line3").setAttribute('y1', top_line);
  document.getElementById("line3").setAttribute('x2', left_arrow_x);
  document.getElementById("line3").setAttribute('y2', left_bottom_line);

  document.getElementById("line4").setAttribute('x1', left_arrow_x - a_width);
  document.getElementById("line4").setAttribute('y1', left_bottom_line - a_height);
  document.getElementById("line4").setAttribute('x2', left_arrow_x);
  document.getElementById("line4").setAttribute('y2', left_bottom_line);

  document.getElementById("line5").setAttribute('x1', left_arrow_x);
  document.getElementById("line5").setAttribute('y1', left_bottom_line);
  document.getElementById("line5").setAttribute('x2', left_arrow_x + a_width);
  document.getElementById("line5").setAttribute('y2', left_bottom_line - a_height);


  document.getElementById("horizontalLine").setAttribute('x1', left_arrow_x - 10);
  document.getElementById("horizontalLine").setAttribute('y1', top_line);
  document.getElementById("horizontalLine").setAttribute('x2', right_arrow_x + 10);
  document.getElementById("horizontalLine").setAttribute('y2', top_line);


  //right arrow base
  /*document.getElementById("line6").setAttribute('x1', right_arrow_x - a_width);
  document.getElementById("line6").setAttribute('y1', top_line + a_height);
  document.getElementById("line6").setAttribute('x2', right_arrow_x);
  document.getElementById("line6").setAttribute('y2', top_line);

  document.getElementById("line7").setAttribute('x1', right_arrow_x);
  document.getElementById("line7").setAttribute('y1', top_line);
  document.getElementById("line7").setAttribute('x2', right_arrow_x + a_width);
  document.getElementById("line7").setAttribute('y2', top_line + a_height);

  document.getElementById("line8").setAttribute('x1', right_arrow_x);
  document.getElementById("line8").setAttribute('y1', top_line);
  document.getElementById("line8").setAttribute('x2', right_arrow_x);
  document.getElementById("line8").setAttribute('y2', right_bottom_line);

  document.getElementById("line9").setAttribute('x1', right_arrow_x - a_width);
  document.getElementById("line9").setAttribute('y1', right_bottom_line - a_height);
  document.getElementById("line9").setAttribute('x2', right_arrow_x);
  document.getElementById("line9").setAttribute('y2', right_bottom_line);

  document.getElementById("line10").setAttribute('x1', right_arrow_x);
  document.getElementById("line10").setAttribute('y1', right_bottom_line);
  document.getElementById("line10").setAttribute('x2', right_arrow_x + a_width);
  document.getElementById("line10").setAttribute('y2', right_bottom_line - a_height);*/

  //right arrow ZS  
  document.getElementById("line6").setAttribute('x1', right_arrow_x - a_width);
  document.getElementById("line6").setAttribute('y1', top_line + a_height);
  document.getElementById("line6").setAttribute('x2', right_arrow_x);
  document.getElementById("line6").setAttribute('y2', top_line);

  document.getElementById("line7").setAttribute('x1', right_arrow_x);
  document.getElementById("line7").setAttribute('y1', top_line);
  document.getElementById("line7").setAttribute('x2', right_arrow_x + a_width);
  document.getElementById("line7").setAttribute('y2', top_line + a_height);

  document.getElementById("line8").setAttribute('x1', right_arrow_x);
  document.getElementById("line8").setAttribute('y1', top_line);
  document.getElementById("line8").setAttribute('x2', right_arrow_x);
  document.getElementById("line8").setAttribute('y2', bottom_line_ZS);

  document.getElementById("line9").setAttribute('x1', right_arrow_x - a_width);
  document.getElementById("line9").setAttribute('y1', bottom_line_ZS - a_height);
  document.getElementById("line9").setAttribute('x2', right_arrow_x);
  document.getElementById("line9").setAttribute('y2', bottom_line_ZS);

  document.getElementById("line10").setAttribute('x1', right_arrow_x);
  document.getElementById("line10").setAttribute('y1', bottom_line_ZS);
  document.getElementById("line10").setAttribute('x2', right_arrow_x + a_width);
  document.getElementById("line10").setAttribute('y2', bottom_line_ZS - a_height);


  //right arrow PS  
  /*document.getElementById("line6").setAttribute('x1', right_arrow_x - a_width);
  document.getElementById("line6").setAttribute('y1', bottom_line_PS + a_height);
  document.getElementById("line6").setAttribute('x2', right_arrow_x);
  document.getElementById("line6").setAttribute('y2', bottom_line_PS);

  document.getElementById("line7").setAttribute('x1', right_arrow_x);
  document.getElementById("line7").setAttribute('y1', bottom_line_PS);
  document.getElementById("line7").setAttribute('x2', right_arrow_x + a_width);
  document.getElementById("line7").setAttribute('y2', bottom_line_PS + a_height);

  document.getElementById("line8").setAttribute('x1', right_arrow_x);
  document.getElementById("line8").setAttribute('y1', bottom_line_PS);
  document.getElementById("line8").setAttribute('x2', right_arrow_x);
  document.getElementById("line8").setAttribute('y2', bottom_line_PS+30);

  document.getElementById("line9").setAttribute('x1', right_arrow_x - a_width);
  document.getElementById("line9").setAttribute('y1', top_line - a_height);
  document.getElementById("line9").setAttribute('x2', right_arrow_x);
  document.getElementById("line9").setAttribute('y2', top_line);

  document.getElementById("line10").setAttribute('x1', right_arrow_x);
  document.getElementById("line10").setAttribute('y1', top_line);
  document.getElementById("line10").setAttribute('x2', right_arrow_x + a_width);
  document.getElementById("line10").setAttribute('y2', top_line - a_height);

  document.getElementById("line11").setAttribute('x1', right_arrow_x);
  document.getElementById("line11").setAttribute('y1', top_line);
  document.getElementById("line11").setAttribute('x2', right_arrow_x);
  document.getElementById("line11").setAttribute('y2', top_line - 30);*/
} 
