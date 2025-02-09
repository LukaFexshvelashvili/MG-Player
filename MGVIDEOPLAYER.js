// * MAIN

const mg_player = document.querySelector(".mg_player");
const mg_video_thumbnail = document.querySelector(".mg_video_thumbnail");
const mg_loader = document.querySelector(".mg_loader");
const mg_video = document.querySelector(".mg_video");
const mg_main_play = document.querySelector(".mg_main_play");
const mg_play_pause_full = document.querySelector(".mg_play_pause_full");

// * PLAY PAUSE
const mg_play_pause = document.querySelector(".mg_play_pause");
const mg_play_ = document.querySelector("#mg_play_");
const mg_pause_ = document.querySelector("#mg_pause_");

// * SOUNDS
const mg_sound_icon = document.querySelector(".mg_sound_icon");
const mg_sound_slider = document.querySelector("#mg_sound_slider");

const mg_sound_on_ = document.querySelector("#mg_sound_on_");
const mg_sound_off_ = document.querySelector("#mg_sound_off_");

// * TIMELINE
const mg_timeline_scaler = document.querySelector(".mg_timeline_scaler");
const mg_time_indicator = document.querySelector(".mg_time_indicator");
const mg_time_indicator_helper = document.querySelector(
  ".mg_time_indicator_helper"
);
const mg_timeline_helper = document.querySelector(".mg_timeline_helper");
const mg_helper_video = document.querySelector(".mg_helper_video");
const mg_timeline_helper_time = document.querySelector(
  ".mg_timeline_helper_time"
);

// * TIME
const mg_starttime = document.querySelector(".mg_starttime");
const mg_endtime = document.querySelector(".mg_endtime");
const mg_skip_left_button = document.querySelector(".mg_skip_left_button");
const mg_skip_right_button = document.querySelector(".mg_skip_right_button");

// * FULLSCREEN
const mg_fullscreen = document.querySelector(".mg_fullscreen");
const mg_fullscreen_on_ = document.querySelector("#mg_fullscreen_on_");
const mg_fullscreen_off_ = document.querySelector("#mg_fullscreen_off_");

// * CONTROLS
const mg_speed_button = document.querySelectorAll(".mg_speed_button");
const mg_controls = document.querySelector(".mg_controls");
const mg_download = document.querySelector(".mg_download");
const mg_frame = document.querySelector(".mg_frame");
const mg_settings_block = document.querySelector(".mg_settings_block");
const mg_settings_toggler = document.querySelector("#mg_settings_toggler");

// * TIMESKIPS
const mg_skip_left = document.querySelector(".mg_skip_left");
const mg_skip_right = document.querySelector(".mg_skip_right");

// * LANGUAGES
const mg_languages = document.querySelector(".mg_languages");

// * QUALITIES
const mg_qualities = document.querySelector(".mg_qualities");

let stoppedmove = false;
let is_started = false;
let is_loaded = false;

function initializePlayer() {
  mg_video.src = MG_PLAYER.src;
  mg_helper_video.src = MG_PLAYER.src;
  mg_video_thumbnail.src = MG_PLAYER.image;

  for (const [quality, item] of Object.entries(MG_PLAYER.quality)) {
    mg_qualities.innerHTML += `<div class='mg_button${
      item.def ? " mg_button_active" : ""
    }'>${quality}</div>`;
  }

  for (const [language, item] of Object.entries(MG_PLAYER.languages)) {
    mg_languages.innerHTML += `<div class='mg_button${
      item.def ? " mg_button_active" : ""
    }'>${language}</div>`;
  }
}
initializePlayer();

mg_player.addEventListener("click", playerClick);
mg_player.addEventListener("mousemove", mouseMoving);
mg_fullscreen.addEventListener("click", fullscreenOnOff);
mg_main_play.addEventListener("click", firstStart);
mg_skip_left.addEventListener("click", skipLeftDbl);
mg_skip_right.addEventListener("click", skipRightDbl);
mg_skip_left_button.addEventListener("click", skipLeft);
mg_skip_right_button.addEventListener("click", skipRight);
mg_play_pause_full.addEventListener("dblclick", fullscreenOnOff);
mg_play_pause_full.addEventListener("click", playPause);
mg_play_pause.addEventListener("click", playPause);
mg_sound_icon.addEventListener("click", soundOnOff);
mg_sound_slider.addEventListener("input", measureSound);
mg_settings_toggler.addEventListener("click", toggleSettings);
mg_frame.addEventListener("click", togglePIP);
mg_download.addEventListener("click", downloadMovie);
mg_timeline_scaler.addEventListener("click", measureTimeMouse);
mg_timeline_scaler.addEventListener("mousemove", seeTime);
mg_timeline_scaler.addEventListener("mouseout", removeSeeTime);
document.addEventListener("keydown", handleKeyPress);

// ! MAIN FUNCTIONS

// * WAITING
mg_video.addEventListener("waiting", function () {
  mg_loader.classList.remove("mg_loader_hidden");
});
addEventListener("waitingforkey", (event) => {
  mg_loader.classList.remove("mg_loader_hidden");
});

// * START
mg_video.addEventListener("playing", () => {
  mg_loader.classList.add("mg_loader_hidden");
});

mg_video.addEventListener("canplaythrough", () => {
  mg_loader.classList.add("mg_loader_hidden");
});
mg_video.addEventListener("loadeddata", function () {
  is_loaded = true;
  mg_loader.classList.add("mg_loader_hidden");
  mg_starttime.innerHTML = formatTime(mg_video.currentTime);
  mg_endtime.innerHTML = formatTime(mg_video.duration);
});
// * ONGOING
mg_video.addEventListener("timeupdate", function () {
  mg_starttime.innerHTML = formatTime(mg_video.currentTime);
  measureTime(mg_video.currentTime);
});
// * ERROR
mg_video.addEventListener("error", function () {});

let moveTimeout;
function mouseMoving() {
  if (is_started) {
    startedMoving();
    if (moveTimeout) {
      clearTimeout(moveTimeout);
    }
    moveTimeout = setTimeout(() => {
      stoppedmove = true;
      if (!mg_video.paused) {
        stoppedMoving();
      }
    }, 2000);
  }
}

// ! FUNCTIONS
const mg_qualitiesChildrens = Array.from(mg_qualities.children);
const mg_languagesChildrens = Array.from(mg_languages.children);

mg_qualitiesChildrens.forEach((item) => {
  item.addEventListener("click", () => {
    var saveTime = mg_video.currentTime;
    var saveState = mg_video.paused;
    mg_video.src = MG_PLAYER.quality[item.innerText].src;

    mg_video.currentTime = saveTime;
    if (saveState == false) {
      mg_video.play();
    }
    mg_qualitiesChildrens.forEach((k) =>
      k.classList.remove("mg_button_active")
    );
    item.classList.add("mg_button_active");
  });
});
mg_languagesChildrens.forEach((item) => {
  item.addEventListener("click", () => {
    var saveTime = mg_video.currentTime;
    var saveState = mg_video.isPaused;
    mg_video.src = MG_PLAYER.languages[item.innerText].src;

    mg_video.currentTime = saveTime;
    if (saveState == false) {
      mg_video.play();
    }
    mg_languagesChildrens.forEach((k) =>
      k.classList.remove("mg_button_active")
    );
    item.classList.add("mg_button_active");
  });
});
mg_speed_button.forEach((item) => {
  item.addEventListener("click", () => {
    mg_video.playbackRate = item.innerText;
    mg_speed_button.forEach((k) => k.classList.remove("mg_button_active"));
    item.classList.add("mg_button_active");
  });
});
function handleKeyPress(event) {
  switch (event.key) {
    case "ArrowLeft":
      mg_video.currentTime -= 10;
      mg_starttime.innerHTML = formatTime(mg_video.currentTime);

      break;
    case "ArrowRight":
      mg_video.currentTime += 10;
      mg_starttime.innerHTML = formatTime(mg_video.currentTime);

      break;
    case "ArrowUp":
      soundUp();
      break;
    case "ArrowDown":
      soundDown();
      break;
    case "f":
    case "F":
      fullscreenOnOff();
      break;
    case " ":
      playPause();
      event.preventDefault(); // Prevents scrolling
      break;
  }
}

function playerClick(event) {
  mouseMoving();
  if (
    !mg_settings_block.classList.contains("mg_settings_hidden") &&
    !mg_controls.contains(event.target)
  ) {
    closeSettings();
  }
}
function skipLeft() {
  mg_video.currentTime -= 10;
  mg_starttime.innerHTML = formatTime(mg_video.currentTime);
  measureTime(mg_video.currentTime);
}

function skipRight() {
  mg_video.currentTime += 10;
  mg_starttime.innerHTML = formatTime(mg_video.currentTime);
  measureTime(mg_video.currentTime);
}
function skipLeftDbl() {
  dbClick(() => (mg_video.currentTime -= 10));
  mg_starttime.innerHTML = formatTime(mg_video.currentTime);
  measureTime(mg_video.currentTime);
}

function skipRightDbl() {
  dbClick(() => (mg_video.currentTime += 10));
  mg_starttime.innerHTML = formatTime(mg_video.currentTime);
  measureTime(mg_video.currentTime);
}

function stoppedMoving() {
  mg_controls.classList.add("mg_controls_hidden");
  mg_player.classList.add("mg_hide_cursor");
  closeSettings();
}

function startedMoving() {
  mg_controls.classList.remove("mg_controls_hidden");
  mg_player.classList.remove("mg_hide_cursor");
}
function downloadMovie() {
  window.open(mg_video.src, "_blank");
}

async function togglePIP() {
  if (document.pictureInPictureElement) {
    await document.exitPictureInPicture();
  } else {
    await mg_video.requestPictureInPicture();
  }
}

function toggleSettings() {
  mg_settings_block.classList.toggle("mg_settings_hidden");
}
function closeSettings() {
  mg_settings_block.classList.add("mg_settings_hidden");
}
function fullscreenOnOff() {
  if (!isFullscreen()) {
    if (mg_player.requestFullscreen) {
      mg_player.requestFullscreen();
    } else if (mg_player.mozRequestFullScreen) {
      mg_player.mozRequestFullScreen();
    } else if (mg_player.webkitRequestFullscreen) {
      mg_player.webkitRequestFullscreen();
    } else if (mg_player.msRequestFullscreen) {
      mg_player.msRequestFullscreen();
    }
    mg_fullscreen_on_.style.display = "none";
    mg_fullscreen_off_.style.display = "block";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    mg_fullscreen_off_.style.display = "none";
    mg_fullscreen_on_.style.display = "block";
  }
}
function isFullscreen() {
  return document.fullscreenElement === mg_player;
}
function removeSeeTime() {
  mg_timeline_helper.style.opacity = 0;
  mg_time_indicator_helper.style.width = "0%";
}

function seeTime(mouse) {
  if (is_loaded) {
    var getPer = (100 / mg_timeline_scaler.offsetWidth) * mouse.offsetX;
    mg_timeline_helper.style.opacity = 1;
    mg_timeline_helper.style.transform = `translateX(${
      mouse.offsetX - mg_timeline_helper.offsetWidth / 2
    }px)`;
    var vidTime = percentageToTime(getPer);
    mg_timeline_helper_time.innerHTML = formatTime(vidTime);
    mg_helper_video.currentTime = vidTime;
    mg_time_indicator_helper.style.width = getPer + "%";
  }
}

function measureTimeMouse(mouse) {
  if (is_loaded) {
    var getPer = (100 / mg_timeline_scaler.offsetWidth) * mouse.offsetX;
    mg_time_indicator.style.width = getPer + "%";
    mg_video.currentTime = (mg_video.duration / 100) * getPer;
  }
}
function measureTime(time) {
  var getPer = (100 / mg_video.duration) * time;
  mg_time_indicator.style.width = getPer + "%";
}
function measureSound() {
  if (mg_sound_slider.value == 0) {
    changeSounds("off");
  } else {
    changeSounds("on");
  }

  mg_video.volume = mg_sound_slider.value / 100;
}

function soundOnOff() {
  if (mg_video.volume > 0) {
    changeSounds("off");
    mg_video.volume = 0;
    mg_sound_slider.value = 0;
  } else {
    changeSounds("on");
    mg_video.volume = 1;
    mg_sound_slider.value = 100;
  }
}
function soundDown() {
  if (mg_video.volume >= 0.05) {
    mg_video.volume -= 0.05;
    mg_sound_slider.value = mg_video.volume * 100;
    if (mg_video.volume == 0) {
      changeSounds("off");
    }
  } else {
    mg_video.volume = 0;
    mg_sound_slider.value = 0;
    changeSounds("off");
  }
}
function soundUp() {
  if (mg_video.volume <= 0.95) {
    changeSounds("on");
    mg_video.volume += 0.05;
    mg_sound_slider.value = mg_video.volume * 100;
  } else {
    mg_video.volume = 1;
    mg_sound_slider.value = 100;
  }
}
function playPause() {
  mouseMoving();
  if (mg_video.paused) {
    changeControls("play");
    mg_video.play();
  } else {
    changeControls("pause");
    mg_video.pause();
  }
}

function changeControls(string) {
  if (string == "play") {
    mg_play_.style.display = "none";
    mg_pause_.style.display = "block";
  } else if (string == "pause") {
    mg_play_.style.display = "block";
    mg_pause_.style.display = "none";
  }
}
function changeSounds(string) {
  if (string == "off") {
    mg_sound_on_.style.display = "none";
    mg_sound_off_.style.display = "block";
  } else if (string == "on") {
    mg_sound_on_.style.display = "block";
    mg_sound_off_.style.display = "none";
  }
}
function firstStart() {
  mg_video.play();
  mg_main_play.parentNode.removeChild(mg_main_play);
  is_started = true;
  changeControls("play");
}

// ! ADDON FUNCTIONS

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  return hrs > 0
    ? `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
    : `${mins}:${String(secs).padStart(2, "0")}`;
}
function percentageToTime(percentage) {
  return (mg_video.duration / 100) * percentage;
}
let clickCount = 0;
function dbClick(callback) {
  let timer;

  clickCount++;
  if (clickCount === 1) {
    timer = setTimeout(() => {
      clickCount = 0;
    }, 300);
  } else if (clickCount === 2) {
    clearTimeout(timer);
    clickCount = 0;
    callback();
  }
}
