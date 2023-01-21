//vach videos
let videoPS = document.getElementById("video0_1");
let videoZS = document.getElementById("video0_2");
let videoVysle = document.getElementById("video0_3");
let videoPorov = document.getElementById("video0_4");

//structure videos
var ZS_part1 = document.getElementById("video1_1");
var ZS_part2 = document.getElementById("video1_2");
var PS_part1 = document.getElementById("video1_3");
var PS_part2 = document.getElementById("video1_4");

//zoom videos
var Zoom_base = document.getElementById("video2_0");
var Zoom_ps1 = document.getElementById("video2_1");
var Zoom_ps2 = document.getElementById("video2_2");
var Zoom_zs1 = document.getElementById("video2_3");
var Zoom_zs2 = document.getElementById("video2_4");

var zoom_on = false;
var ps_on = false;
var zs_on = false;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VACH
function playVideoPS_vach() {
  resetButtons();
  document.getElementById("button_vPS").disabled = true;

  videoZS.setAttribute('hidden', 'hidden');
  videoVysle.setAttribute('hidden', 'hidden');
  videoPorov.setAttribute('hidden', 'hidden');
  videoPS.removeAttribute('hidden');
  videoPS.play();
}

function playVideoZS_vach() {
  resetButtons();
  document.getElementById("button_vZS").disabled = true;
  videoPS.setAttribute('hidden', 'hidden');
  videoVysle.setAttribute('hidden', 'hidden');
  videoPorov.setAttribute('hidden', 'hidden');
  videoZS.removeAttribute('hidden');
  videoZS.play();
}

function playVideoVysle() {
  resetButtons();
  document.getElementById("button_vV").disabled = true;
  videoPS.setAttribute('hidden', 'hidden');
  videoZS.setAttribute('hidden', 'hidden');
  videoPorov.setAttribute('hidden', 'hidden');
  videoVysle.removeAttribute('hidden');
  videoVysle.play();
}

function playVideoPorov() {
  resetButtons();
  document.getElementById("button_vP").disabled = true;
  videoPS.setAttribute('hidden', 'hidden');
  videoZS.setAttribute('hidden', 'hidden');
  videoVysle.setAttribute('hidden', 'hidden');
  videoPorov.removeAttribute('hidden');
  videoPorov.play();
}

function reset_vach() {
  resetVideo(videoPS)
  resetVideo(videoZS);
  resetVideo(videoVysle);
  resetVideo(videoPorov);
  videoPS.removeAttribute('hidden');
  resetButtons();

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ŠTRUKTÚRA

function playVideoZS() {
  zs_on = true;
  ps_on = false;
  resetButtons();
  resetAllVideos();
  document.getElementById("s_zs").disabled = true;

  if (zoom_on) {
    if (Zoom_zs1.paused) {
      Zoom_zs1.removeAttribute('hidden');
      Zoom_zs1.play();
    }
  }
  else {
    document.getElementById("VideoBox_structura").style.display = 'block';
    document.getElementById("VideoBox_zoom").style.display = 'none';
    if (ZS_part1.paused) {
      ZS_part1.removeAttribute('hidden');
      ZS_part1.play();
    }
  }

}

function playVideoPS() {
  ps_on = true;
  zs_on = false;
  resetButtons();
  resetAllVideos();
  document.getElementById("s_ps").disabled = true;

  if (zoom_on) {
    if (Zoom_ps1.paused) {
      Zoom_ps1.removeAttribute('hidden');
      Zoom_ps1.play();
    }
  }
  else {
    document.getElementById("VideoBox_structura").style.display = 'block';
    document.getElementById("VideoBox_zoom").style.display = 'none';
    if (PS_part1.paused) {
      PS_part1.removeAttribute('hidden');
      PS_part1.play();
    }
  }


}

//hide, stop video and reset time 
function resetVideo(video) {
  video.setAttribute('hidden', 'hidden');
  video.pause();
  video.currentTime = 0;
}

function resetAllVideos() {
  resetVideo(PS_part1);
  resetVideo(PS_part2);
  resetVideo(ZS_part1);
  resetVideo(ZS_part2);

  resetVideo(Zoom_base);
  resetVideo(Zoom_zs1);
  resetVideo(Zoom_zs2);
  resetVideo(Zoom_ps1);
  resetVideo(Zoom_ps2);
}

// at the end of video start part2
ZS_part1.onended = (event) => {
  resetVideo(ZS_part1)
  ZS_part2.removeAttribute('hidden');
  ZS_part2.play();
};

PS_part1.onended = (event) => {
  resetVideo(PS_part1)
  PS_part2.removeAttribute('hidden');
  PS_part2.play();
};

Zoom_zs1.onended = (event) => {
  resetVideo(Zoom_zs1)
  Zoom_zs2.removeAttribute('hidden');
  Zoom_zs2.play();
};

Zoom_ps1.onended = (event) => {
  resetVideo(Zoom_ps1)
  Zoom_ps2.removeAttribute('hidden');
  Zoom_ps2.play();
};

function reset_struktura() {
  resetAllVideos()
  ZS_part1.removeAttribute('hidden');
  resetButtons();
  document.getElementById("VideoBox_structura").style.display = 'block';
  document.getElementById("VideoBox_zoom").style.display = 'none';
  document.getElementById("zoom_button").classList.remove("disalbledStyle");
  zoom_on = false;
  zs_on = false;
  ps_on = false;
  close_legend();
}

function show_legend(){
  document.getElementById("legend").style.display="block";
  document.getElementById("legend_button").disabled=true;
}
function close_legend(){
  document.getElementById("legend").style.display="none";
  document.getElementById("legend_button").disabled=false;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ZOOM

function zoom_struktura() {
  zoom_on = !zoom_on;
  ps_part_2_played=!PS_part2.hidden;
  zs_part_2_played=!ZS_part2.hidden;

  resetButtons();  
  resetAllVideos();

  //turn off zoom
  if (!zoom_on) {
    document.getElementById("zoom_button").classList.remove("disalbledStyle");
    document.getElementById("VideoBox_structura").style.display = 'block';
    ZS_part1.removeAttribute('hidden');
    document.getElementById("VideoBox_zoom").style.display = 'none';
    return;
  }

  //turn on zoom
  document.getElementById("zoom_button").classList.add("disalbledStyle");
  document.getElementById("VideoBox_structura").style.display = 'none';
  document.getElementById("VideoBox_zoom").style.display = 'block';

  //base zoom
  if (!zs_on && !ps_on) {
    Zoom_base.removeAttribute('hidden');
    Zoom_base.play();
  }
  if(zs_on){
    document.getElementById("s_zs").disabled = true;
    if(zs_part_2_played){
      Zoom_zs2.removeAttribute('hidden');
      Zoom_zs2.play();
    }
    else{
      Zoom_zs1.removeAttribute('hidden');
      Zoom_zs1.play();
    }
  }
  if(ps_on){
    document.getElementById("s_ps").disabled = true;
    if(ps_part_2_played){
      Zoom_ps2.removeAttribute('hidden');
      Zoom_ps2.play();
    }
    else{
      Zoom_ps1.removeAttribute('hidden');
      Zoom_ps1.play();
    }
  }


}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function resetButtons() {

  document.getElementById("button_vPS").disabled = false;
  document.getElementById("button_vZS").disabled = false;
  document.getElementById("button_vV").disabled = false;
  document.getElementById("button_vP").disabled = false;

  document.getElementById("s_zs").disabled = false;
  document.getElementById("s_ps").disabled = false;

}

