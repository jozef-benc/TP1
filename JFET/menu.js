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
  document.getElementById("pasmovy_diagram_button_icon").innerHTML = "⮞"
  PD_reset();
  document.getElementById("VideoBox_pasmovy_diagram").style.display = 'none';

  document.getElementById("theory").style.display = "none";
  
}

//TODO
function showBaseSite(){
  document.getElementById("VideoBox_vach").style.display = 'block';
}


function show_vach() {
  let prevState = document.getElementById("menu_vach").style.display;
  resetMenuButtons();
  if (prevState != 'block') {
    document.getElementById("vach_button_icon").innerHTML = "⮟"
    document.getElementById("menu_vach").style.display = 'block';
    document.getElementById("VideoBox_vach").style.display = 'block';
  }
  else{
    showBaseSite();
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
  else{
    showBaseSite();
  }
  
}

function show_pasmovy_diagram() {
  let prevState = document.getElementById("menu_pasmovy_diagram").style.display;
  resetMenuButtons();
  if (prevState != 'block') {
    document.getElementById("pasmovy_diagram_button_icon").innerHTML = "⮟"
    document.getElementById("menu_pasmovy_diagram").style.display = 'block';
    document.getElementById("VideoBox_pasmovy_diagram").style.display = 'block';
    document.getElementById("PD_base").removeAttribute('hidden');
  }
  else{
    showBaseSite();
  }
  
}


function show_theory() {
  let theoryIsDisplayed = document.getElementById("theory").style.display;
  resetMenuButtons();
  if (theoryIsDisplayed != 'block')
    document.getElementById("theory").style.display = "block";
  else
    close_theory();
}

function close_theory() {
  document.getElementById("theory").style.display = "none";
 
  showBaseSite();  
  
}

function reset_site() {
  resetMenuButtons();
  showBaseSite();
}


function show_menu() {
  let menuIsDisplayed = document.getElementById("menu").style.display;

  if (menuIsDisplayed != 'block') {
    document.getElementById("menu").classList.add("response_menu");
    document.getElementById("menu").style.display = 'block';
    document.getElementById("menu").style.marginTop = '3em';
  }
  else {
    document.getElementById("menu").classList.remove("response_menu");
    document.getElementById("menu").style.display = 'none';
    document.getElementById("menu").style.marginTop = '0';

  }
}