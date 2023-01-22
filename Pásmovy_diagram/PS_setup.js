var posX = 0;
var posY = 0;
var baseWidth = 400;
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




}