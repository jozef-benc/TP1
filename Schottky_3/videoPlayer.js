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

//PD videos + images
var PD_PS = document.getElementById("video3_1");
var PD_PS_electrons = document.getElementById("video3_2");
var PD_PS_electrons_sch = document.getElementById("video3_3");
var PD_PS_sch = document.getElementById("PD_PS_sch");
var PD_ZS = document.getElementById("video3_4");
var PD_ZS_electrons = document.getElementById("video3_5");
var PD_ZS_electrons_sch = document.getElementById("video3_6");
var PD_ZS_sch = document.getElementById("PD_ZS_sch");

var zoom_on = false;
var ps_on = false;
var zs_on = false;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VACH
function playVideoPS_vach() {
  resetButtons();
  document.getElementById("button_vPS").classList.add("selected");

  videoZS.setAttribute('hidden', 'hidden');
  videoVysle.setAttribute('hidden', 'hidden');
  videoPorov.setAttribute('hidden', 'hidden');
  videoPS.removeAttribute('hidden');
  videoPS.play();
}

function playVideoZS_vach() {
  resetButtons();
  document.getElementById("button_vZS").classList.add("selected");
  videoPS.setAttribute('hidden', 'hidden');
  videoVysle.setAttribute('hidden', 'hidden');
  videoPorov.setAttribute('hidden', 'hidden');
  videoZS.removeAttribute('hidden');
  videoZS.play();
}

function playVideoVysle() {
  resetButtons();
  document.getElementById("button_vV").classList.add("selected");
  videoPS.setAttribute('hidden', 'hidden');
  videoZS.setAttribute('hidden', 'hidden');
  videoPorov.setAttribute('hidden', 'hidden');
  videoVysle.removeAttribute('hidden');
  videoVysle.play();
}

function playVideoPorov() {
  resetButtons();
  document.getElementById("button_vP").classList.add("selected");
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
  document.getElementById("s_zs").classList.add("selected");

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
  document.getElementById("s_ps").classList.add("selected");

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
  document.getElementById("zoom_button").classList.remove("selected");
  zoom_on = false;
  zs_on = false;
  ps_on = false;
  close_legend();
}

function show_legend() {
  document.getElementById("legend").style.display = "block";
  document.getElementById("legend_button").classList.add("selected");
}
function close_legend() {
  document.getElementById("legend").style.display = "none";
  document.getElementById("legend_button").classList.remove("selected");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ZOOM

function zoom_struktura() {
  zoom_on = !zoom_on;
  ps_part_2_played = !PS_part2.hidden;
  zs_part_2_played = !ZS_part2.hidden;

  resetButtons();
  resetAllVideos();

  //turn off zoom
  if (!zoom_on) {
    document.getElementById("zoom_button").classList.remove("selected");
    document.getElementById("VideoBox_structura").style.display = 'block';
    ZS_part1.removeAttribute('hidden');
    document.getElementById("VideoBox_zoom").style.display = 'none';
    return;
  }

  //turn on zoom
  document.getElementById("zoom_button").classList.add("selected");
  document.getElementById("VideoBox_structura").style.display = 'none';
  document.getElementById("VideoBox_zoom").style.display = 'block';

  //base zoom
  if (!zs_on && !ps_on) {
    Zoom_base.removeAttribute('hidden');
    Zoom_base.play();
  }
  if (zs_on) {
    document.getElementById("s_zs").classList.add("selected");
    if (zs_part_2_played) {
      Zoom_zs2.removeAttribute('hidden');
      Zoom_zs2.play();
    }
    else {
      Zoom_zs1.removeAttribute('hidden');
      Zoom_zs1.play();
    }
  }
  if (ps_on) {
    document.getElementById("s_ps").classList.add("selected");
    if (ps_part_2_played) {
      Zoom_ps2.removeAttribute('hidden');
      Zoom_ps2.play();
    }
    else {
      Zoom_ps1.removeAttribute('hidden');
      Zoom_ps1.play();
    }
  }


}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PÁSMOVÉ DIAGRAMY
var PD_direction = '';
var schottky = false;
var electrons = false;

//Priepustny smer
function playVideoPdPs() {
  PD_reset();
  document.getElementById('PD_PS_button').classList.add('selected');
  PD_direction = 'PS'
  document.getElementById("PD_base").setAttribute('hidden', 'hidden');
  PD_PS.removeAttribute('hidden');
  PD_PS.play();
}
PD_PS.onended = (event) => {
  document.getElementById('PD_schottky_button').disabled = false;
  document.getElementById('PD_electrons_button').disabled = false;
};

//Záverny smer
function playVideoPdZs() {
  PD_reset();
  document.getElementById('PD_ZS_button').classList.add('selected');
  PD_direction = 'ZS'
  document.getElementById("PD_base").setAttribute('hidden', 'hidden');
  PD_ZS.removeAttribute('hidden');
  PD_ZS.play();
}
PD_ZS.onended = (event) => {
  document.getElementById('PD_schottky_button').disabled = false;
  document.getElementById('PD_electrons_button').disabled = false;
};

//Schottky effect
function show_Schottky() {
  schottky = !schottky;
  if (electrons)
    show_electrons(true);
  else {
    if (schottky) {
      document.getElementById('PD_schottky_button').classList.add('selected');
      if (PD_direction == 'PS') {
        PD_PS.setAttribute('hidden', 'hidden');
        PD_PS_sch.removeAttribute('hidden');
      }
      if (PD_direction == 'ZS') {
        PD_ZS.setAttribute('hidden', 'hidden');
        PD_ZS_sch.removeAttribute('hidden');
      }
    }
    else {
      document.getElementById('PD_schottky_button').classList.remove('selected');
      if (PD_direction == 'PS') {
        PD_PS.removeAttribute('hidden');
        PD_PS_sch.setAttribute('hidden', 'hidden');
      }
      if (PD_direction == 'ZS') {
        PD_ZS.removeAttribute('hidden');
        PD_ZS_sch.setAttribute('hidden', 'hidden');
      }
    }
  }



}

//Zobraziť častice
function show_electrons(notTurnOff) {
  //reset videos
  resetVideo(PD_PS_electrons);
  resetVideo(PD_PS_electrons_sch);
  resetVideo(PD_ZS_electrons);
  resetVideo(PD_ZS_electrons_sch);
  if (!notTurnOff)
    electrons = !electrons;

  //show video
  if (electrons) {
    document.getElementById('PD_electrons_button').classList.add('selected');

    if (PD_direction == 'PS') {
      if (schottky) {
        PD_PS_sch.setAttribute('hidden', 'hidden');
        PD_PS_electrons_sch.removeAttribute('hidden');
        PD_PS_electrons_sch.play();
      }
      else {
        PD_PS.setAttribute('hidden', 'hidden');
        PD_PS_electrons.removeAttribute('hidden');
        PD_PS_electrons.play();
      }
    }
    if (PD_direction == 'ZS') {
      if (schottky) {
        PD_ZS_sch.setAttribute('hidden', 'hidden');
        PD_ZS_electrons_sch.removeAttribute('hidden');
        PD_ZS_electrons_sch.play();
      }
      else {
        PD_ZS.setAttribute('hidden', 'hidden');
        PD_ZS_electrons.removeAttribute('hidden');
        PD_ZS_electrons.play();
      }
    }

  }
  //hide video
  else {
    document.getElementById('PD_electrons_button').classList.remove('selected');

    if (PD_direction == 'PS') {
      if (schottky)
        PD_PS_sch.removeAttribute('hidden');
      else
        PD_PS.removeAttribute('hidden');
    }
    if (PD_direction == 'ZS') {
      if (schottky)
        PD_ZS_sch.removeAttribute('hidden');
      else
        PD_ZS.removeAttribute('hidden');
    }
  }
}

function PD_reset() {
  PD_direction = '';
  schottky = false;
  electrons = false;
  document.getElementById("PD_base").removeAttribute('hidden');

  resetButtons();
  document.getElementById("PD_electrons_button").disabled = true;
  document.getElementById("PD_schottky_button").disabled = true;

  resetVideo(PD_PS);
  resetVideo(PD_PS_electrons);
  resetVideo(PD_PS_electrons_sch);
  resetVideo(PD_ZS);
  resetVideo(PD_ZS_electrons);
  resetVideo(PD_ZS_electrons_sch);


  PD_PS_sch.setAttribute('hidden', 'hidden');
  PD_ZS_sch.setAttribute('hidden', 'hidden');
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function resetButtons() {

  document.getElementById("button_vPS").classList.remove("selected");
  document.getElementById("button_vZS").classList.remove("selected");
  document.getElementById("button_vV").classList.remove("selected");
  document.getElementById("button_vP").classList.remove("selected");

  document.getElementById("s_zs").classList.remove("selected");
  document.getElementById("s_ps").classList.remove("selected");

  document.getElementById("PD_PS_button").classList.remove("selected");
  document.getElementById("PD_ZS_button").classList.remove("selected");
  document.getElementById("PD_electrons_button").classList.remove("selected");
  document.getElementById("PD_schottky_button").classList.remove("selected");

}

