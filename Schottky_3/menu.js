function resetMenuButtons() {


  document.getElementById("menu_vach").style.display = 'none';
  document.getElementById("VideoBox_vach").style.display = 'none';
  document.getElementById("vach_button_icon").innerHTML = "⮞"
  reset_vach();

  document.getElementById("menu_struktura").style.display = 'none';
  document.getElementById("structure_button_icon").innerHTML = "⮞"
  reset_struktura();
  document.getElementById("VideoBox_structura").style.display = 'none';


  document.getElementById("menu_pasmovy_diagram").style.display = 'none';
  document.getElementById("VideoBox_pasmovy_diagram").style.display = 'none';
  document.getElementById("pasmovy_diagram_button_icon").innerHTML = "⮞"
  close_theory();

}


function show_vach() {
  let prevState = document.getElementById("menu_vach").style.display;
  resetMenuButtons();
  if (prevState != 'block') {
    document.getElementById("vach_button_icon").innerHTML = "⮟"
    document.getElementById("menu_vach").style.display = 'block';
    document.getElementById("VideoBox_vach").style.display = 'block';
  }


}

function show_struktura() {
  let prevState = document.getElementById("menu_struktura").style.display;
  resetMenuButtons();
  if (prevState != 'block') {
    document.getElementById("structure_button_icon").innerHTML = "⮟"
    document.getElementById("menu_struktura").style.display = 'block';
    document.getElementById("VideoBox_structura").style.display = 'block';
  }
}

function show_pasmovy_diagram() {
  let prevState = document.getElementById("menu_pasmovy_diagram").style.display;
  resetMenuButtons();
  if (prevState != 'block') {
    document.getElementById("pasmovy_diagram_button_icon").innerHTML = "⮟"
    document.getElementById("menu_pasmovy_diagram").style.display = 'block';
    document.getElementById("VideoBox_pasmovy_diagram").style.display = 'block';
  }
}

function reset_site(){
  location.reload();
}


function show_theory(){
  document.getElementById("theory").style.display="block";
  document.getElementById("theory_button").disabled=true;
}
function close_theory(){
  document.getElementById("theory").style.display="none";
  document.getElementById("theory_button").disabled=false;
}


function show_menu(){
  let menuIsDisplayed=document.getElementById("menu").style.display;
 
  if(menuIsDisplayed!='block'){
    document.getElementById("menu").classList.add("response_menu");
    document.getElementById("menu").style.display = 'block';
    document.getElementById("menu").style.marginTop = '3em';
  }
  else{
    document.getElementById("menu").classList.remove("response_menu");
    document.getElementById("menu").style.display = 'none';
    document.getElementById("menu").style.marginTop = '0';

  }
}