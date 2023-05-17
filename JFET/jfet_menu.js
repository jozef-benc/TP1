menuList = [
  ['menu_NF', "NF_button_icon"],
  ["menu_sl", "sl_button_icon"],
  ["menu_dif", "dif_button_icon"]]

imgList = [
  ["NF_text", "NF_vztahy", "NF_def", "NF_priklad", "NF_orig_sch", "NF_nachr_sch"],
  ["NF_text", "Sledovac_vztahy", "Sledovac_def", "Sledovac_priklad", "Sledovac_orig_sch", "Sledovac_nachr_sch"],
  ["Dif_text", "Dif_vztahy", "Dif_def",  "Dif_orig_sch","Dif_orig_sch"],
  ["Zadanie"]
]

show_original_sch = true;

function resetMenuButtons() {
  menuList.forEach(element => {
    document.getElementById(element[0]).style.display = 'none';
    document.getElementById(element[1]).innerHTML = "⮞"

  });
  show_original_sch = true;
  document.getElementById("sch_button_0").classList.remove("selected");
  document.getElementById("sch_button_1").classList.remove("selected");
}


function show_subMenu(i) {
  let prevState = document.getElementById(menuList[i][0]).style.display;
  resetMenuButtons();
  if (prevState != 'block') {
    document.getElementById(menuList[i][1]).innerHTML = "⮟"
    document.getElementById(menuList[i][0]).style.display = 'block';
    showImgs(i,0);
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

function hideAllImgs() {
  imgList.forEach(element => {
    element.forEach(e => {
      document.getElementById(e).setAttribute('hidden', 'hidden');
    })

  })
}



function showImgs(category, id) {
  hideAllImgs();
  lastId = imgList[category].length - 1;
  let text = document.getElementById(imgList[category][id])
  if (show_original_sch)
    img = document.getElementById(imgList[category][lastId-1]);
  else img = document.getElementById(imgList[category][lastId]);

  text.removeAttribute('hidden');
  img.removeAttribute('hidden');

}

function changeSchema(category) {
  lastId = imgList[category].length - 1;
  show_original_sch = !show_original_sch
  img1 = document.getElementById(imgList[category][lastId-1])
  img2 = document.getElementById(imgList[category][lastId])

  id = "sch_button_"+category
  if (show_original_sch){
    document.getElementById(id).classList.remove("selected");
    img1.removeAttribute('hidden');
    img2.setAttribute('hidden', 'hidden');
  }
    
  else {
     document.getElementById(id).classList.add("selected");
     img2.removeAttribute('hidden');
     img1.setAttribute('hidden', 'hidden');
  }
 
}

function showTask(){
  hideAllImgs();
  document.getElementById("Zadanie").removeAttribute('hidden');
}