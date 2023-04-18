menuList=[
  ['menu_NF',"NF_button_icon"],
  ["menu_sl","sl_button_icon"],
  ["menu_dif","dif_button_icon"]]


function resetMenuButtons() {
  menuList.forEach(element => {
    document.getElementById(element[0]).style.display = 'none';
    document.getElementById(element[1]).innerHTML = "⮞"
    
  });  
}


function show_subMenu(i) {  
  let prevState = document.getElementById(menuList[i][0]).style.display;
  if (prevState != 'block') {
    document.getElementById(menuList[i][1]).innerHTML = "⮟"
    document.getElementById(menuList[i][0]).style.display = 'block';
    //TODO:show image and text for selected button 
  }
  else{
    resetMenuButtons();
  }
  
}

function reset_site() {
  resetMenuButtons();
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