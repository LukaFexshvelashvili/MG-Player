// * MAIN
const mg_player = document.querySelector(".mg_player");
const mg_error_block = document.querySelector(".mg_error_block");
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

// * CONTEXTMENU
const mg_context_menu = document.querySelector(".mg_context_menu");

// * EPISODES
const mg_player_eps_scroll = document.querySelector(".mg_player_eps_scroll");
const mg_player_seasons = document.querySelector(".mg_player_seasons");
let active_season = null;
let active_episode = null;

let mg_main_controls;

if (localStorage.getItem("mg_player_controls")) {
  mg_main_controls = JSON.parse(localStorage.getItem("mg_player_controls"));
} else {
  mg_main_controls = { lang: "GEO", volume: 1, speed: 1, quality: "HD" };
  localStorage.setItem("mg_player_controls", JSON.stringify(mg_main_controls));
}

let stoppedmove = false;
let is_started = false;
let is_loaded = false;
let time_measuring = true;

function initializePlayer() {
  if (mg_main_controls.volume == 0) {
    soundOnOff("off");
  }
  getCheckOfControls();
  mg_video_thumbnail.src = MG_PLAYER.image;

  // TODO TIMESAVES / GETTIMES
  if (localStorage.getItem("mg_player")) {
    let mg_save_ = localStorage.getItem("mg_player");
    let mg_save = JSON.parse(mg_save_);
    let get_cur = mg_save.filter((item) => {
      return item.id == MG_PLAYER.id;
    });
    if (get_cur.length !== 0) {
      movetoFirstItem(
        mg_save,
        mg_save.findIndex((item) => item.id == get_cur[0].id)
      );
      if (MG_PLAYER.seasons) {
        active_season = get_cur[0].season;
        active_episode = get_cur[0].episode;
        changeInitialEpisode(getEpisodeRequest());
      }
      cutIfTooLarge(mg_save, 2);
      localStorage.setItem("mg_player", JSON.stringify(mg_save));
    } else {
      mg_save.unshift({ id: MG_PLAYER.id, time: 0, episode: 0, season: 0 });
      cutIfTooLarge(mg_save, 2);
      localStorage.setItem("mg_player", JSON.stringify(mg_save));
    }
  } else {
    localStorage.setItem(
      "mg_player",
      JSON.stringify([{ id: MG_PLAYER.id, time: 0, episode: 0, season: 0 }])
    );
  }

  for (const [quality] of Object.entries(
    MG_PLAYER.languages[mg_main_controls.lang]
  )) {
    mg_qualities.innerHTML += `<div class='mg_button${
      mg_main_controls.quality == quality ? " mg_button_active" : ""
    }'>${quality}</div>`;
  }

  for (const [language] of Object.entries(MG_PLAYER.languages)) {
    mg_languages.innerHTML += `<div class='mg_button${
      mg_main_controls.lang == language ? " mg_button_active" : ""
    }'>${language}</div>`;
  }
}
initializePlayer();

mg_player.addEventListener("contextmenu", contextClick);
mg_player.addEventListener("click", playerClick);
mg_player.addEventListener("mousemove", mouseMoving);
mg_player.addEventListener("touchmove", mouseMoving);
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
mg_timeline_scaler.addEventListener("touchstart", measureTimeTouch);
mg_timeline_scaler.addEventListener("touchmove", measureTimeTouch);
mg_timeline_scaler.addEventListener("touchend", removeSeeTime);

mg_timeline_scaler.addEventListener("mousemove", seeTime);
mg_player.addEventListener("touchmove", seeTimeTouch);
mg_timeline_scaler.addEventListener("mouseout", removeSeeTime);
document.addEventListener("keydown", handleKeyPress);

// ! MAIN FUNCTIONS

// * WAITING
mg_video.addEventListener("waiting", function () {
  mg_loader.classList.remove("mg_loader_hidden");
});
addEventListener("waitingforkey", () => {
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
  let getLocaledTime = getSavedTime();
  mg_video.currentTime = getLocaledTime.toFixed(6);
  measureTime(getLocaledTime);
  is_loaded = true;
  mg_loader.classList.add("mg_loader_hidden");
  mg_starttime.innerHTML = formatTime(mg_video.currentTime);
  mg_endtime.innerHTML = formatTime(mg_video.duration);
});
// * ONGOING
let lastUpdate = 0;
mg_video.addEventListener("timeupdate", function () {
  mg_starttime.innerHTML = formatTime(mg_video.currentTime);
  measureTime(mg_video.currentTime);
  lastUpdate++;
  if (lastUpdate >= 12) {
    replaceTimeline(mg_video.currentTime);
    lastUpdate = 0;
  }
});
// * ERROR
mg_video.addEventListener("error", function () {
  mg_error_block.classList.remove("mg_error_block_hidden");
});

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

let isDragging = false;

function onDraging(mouse) {
  if (isDragging) {
    var getPer = (100 / mg_timeline_scaler.offsetWidth) * mouse.offsetX;
    mg_time_indicator.style.width = getPer + "%";
  }
}
function onDragingTouch(event) {
  const touch = event.touches[0];
  if (isDragging) {
    var getPer =
      (100 / mg_timeline_scaler.offsetWidth) *
      (touch.clientX - mg_timeline_scaler.getBoundingClientRect().left);
    mg_time_indicator.style.width = getPer + "%";
  }
}

mouseTouchDragger();

let sTimer;
function contextClick(e) {
  e.preventDefault();
  const xPos = e.offsetX;
  const yPos = e.offsetY;
  clearTimeout(sTimer);
  mg_context_menu.style.left = `${xPos}px`;
  mg_context_menu.style.top = `${yPos}px`;
  mg_context_menu.style.display = "flex";
  sTimer = setTimeout(() => {
    mg_context_menu.style.display = "none";
  }, 1500);
}
document.addEventListener("click", function () {
  mg_context_menu.style.display = "none";
});
const mg_qualitiesChildrens = Array.from(mg_qualities.children);
const mg_languagesChildrens = Array.from(mg_languages.children);

mg_qualitiesChildrens.forEach((item) => {
  item.addEventListener("click", () => {
    var saveTime = mg_video.currentTime;
    var saveState = mg_video.paused;
    mg_video.src = MG_PLAYER.languages[mg_main_controls.lang][item.innerText];
    saveControls({ quality: item.innerText });

    mg_video.currentTime = saveTime.toFixed(6);
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
    mg_video.src =
      MG_PLAYER.languages[item.innerText][mg_main_controls.quality];
    saveControls({ lang: item.innerText });
    mg_video.currentTime = saveTime.toFixed(6);
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
    saveControls({ speed: item.innerText });
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
    if (vidTime) {
      mg_timeline_helper_time.innerHTML = formatTime(vidTime);
      mg_helper_video.currentTime = vidTime.toFixed(6);
      mg_time_indicator_helper.style.width = getPer + "%";
    }
  }
}
function seeTimeTouch(event) {
  const touch = event.touches[0];
  if (is_loaded) {
    const getPer =
      (100 / mg_timeline_scaler.offsetWidth) *
      (touch.clientX - mg_timeline_scaler.getBoundingClientRect().left);
    mg_timeline_helper.style.opacity = 1;
    mg_timeline_helper.style.transform = `translateX(${
      touch.clientX -
      mg_timeline_scaler.getBoundingClientRect().left -
      mg_timeline_helper.offsetWidth / 2
    }px)`;
    const vidTime = percentageToTime(getPer);
    mg_timeline_helper_time.innerHTML = formatTime(vidTime);
    mg_helper_video.currentTime = vidTime.toFixed(6);
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
function measureTimeTouch(event) {
  const position =
    event instanceof MouseEvent
      ? event.offsetX
      : event.touches[0].clientX -
        mg_timeline_scaler.getBoundingClientRect().left;

  if (is_loaded) {
    const getPer = (100 / mg_timeline_scaler.offsetWidth) * position;
    mg_time_indicator.style.width = getPer + "%";
    mg_video.currentTime = ((mg_video.duration / 100) * getPer).toFixed(6);
    mg_starttime.innerHTML = formatTime(mg_video.currentTime);
  }
}

function measureTime(time) {
  if (is_loaded && time_measuring) {
    var getPer = (100 / mg_video.duration) * time;
    mg_time_indicator.style.width = getPer + "%";
  }
}
function measureSound() {
  if (mg_sound_slider.value == 0) {
    changeSounds("off");
  } else {
    changeSounds("on");
  }
  mg_main_controls.volume = mg_sound_slider.value / 100;
  saveControls({ volume: mg_sound_slider.value / 100 });
  mg_video.volume = mg_sound_slider.value / 100;
}
function measureSoundHand(volume) {
  if (volume >= 0 && volume <= 1) {
    if (mg_sound_slider.value == 0) {
      changeSounds("off");
    } else {
      changeSounds("on");
    }

    mg_video.volume = volume;
    mg_sound_slider.value = volume * 100;
  }
}
function soundOnOff() {
  if (mg_video.volume > 0) {
    changeSounds("off");
    mg_video.volume = 0;
    mg_sound_slider.value = 0;
    saveControls({ volume: 0 });
  } else {
    changeSounds("on");
    if (mg_main_controls.volume > 0.08) {
      mg_video.volume = mg_main_controls.volume;
      mg_sound_slider.value = mg_main_controls.volume * 100;
      saveControls({ volume: mg_main_controls.volume });
    } else {
      mg_video.volume = 1;
      mg_sound_slider.value = 100;
      saveControls({ volume: 1 });
    }
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
  saveControls({ volume: mg_video.volume });
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
  saveControls({ volume: mg_video.volume });
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
  if (mg_video.duration) {
    return (mg_video.duration / 100) * percentage;
  } else {
    return null;
  }
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
function movetoFirstItem(array, fromIndex) {
  if (fromIndex < 0 || fromIndex >= array.length) {
    return array;
  }

  const item = array.splice(fromIndex, 1)[0];
  array.splice(0, 0, item);
  return array;
}
function cutIfTooLarge(list, number) {
  if (list.length > number) {
    list.splice(number);
  }
}
function replaceTimeline(time) {
  let mg_save_ = localStorage.getItem("mg_player");
  let mg_save = JSON.parse(mg_save_);
  let get_index = mg_save.findIndex((item) => item.id == MG_PLAYER.id);
  mg_save[get_index].time = time;
  localStorage.setItem("mg_player", JSON.stringify(mg_save));
}
function getSavedTime() {
  let mg_save_ = localStorage.getItem("mg_player");
  let mg_save = JSON.parse(mg_save_);
  let get_index = mg_save.findIndex((item) => item.id == MG_PLAYER.id);

  if (get_index !== -1) {
    return mg_save[get_index].time;
  } else {
    return 0;
  }
}

function getCheckOfControls() {
  let chosedLang = mg_main_controls.lang == "ENG" ? "ENG" : "GEO";
  let chosedQuality = mg_main_controls.quality == "SD" ? "SD" : "HD";
  if (
    mg_main_controls.lang == "GEO" &&
    MG_PLAYER.languages.GEO[chosedQuality]
  ) {
    mg_video.src = MG_PLAYER.languages.GEO[chosedQuality];
    mg_helper_video.src = MG_PLAYER.languages.GEO[chosedQuality];
  } else if (
    mg_main_controls.lang == "ENG" &&
    MG_PLAYER.languages.ENG[chosedQuality]
  ) {
    chosedLang = "ENG";
    mg_video.src = MG_PLAYER.languages.ENG[chosedQuality];
    mg_helper_video.src = MG_PLAYER.languages.ENG[chosedQuality];
  } else {
    mg_video.src = MG_PLAYER.languages.GEO[chosedQuality];
    mg_helper_video.src = MG_PLAYER.languages.GEO[chosedQuality];
  }
  if (mg_main_controls.quality == "HD" && MG_PLAYER.languages[chosedLang].HD) {
    mg_video.src = MG_PLAYER.languages[chosedLang].HD;
    mg_helper_video.src = MG_PLAYER.languages[chosedLang].HD;
  } else if (
    mg_main_controls.lang == "SD" &&
    MG_PLAYER.languages[chosedLang].SD
  ) {
    mg_video.src = MG_PLAYER.languages[chosedLang].SD;
    mg_helper_video.src = MG_PLAYER.languages[chosedLang].SD;
  } else {
    mg_video.src = MG_PLAYER.languages[chosedLang].HD;
    mg_helper_video.src = MG_PLAYER.languages[chosedLang].HD;
  }

  mg_speed_button.forEach((item) => {
    if (item.innerHTML.trim() == mg_main_controls.speed) {
      mg_video.playbackRate = item.innerHTML.trim();
      mg_speed_button.forEach((k) => k.classList.remove("mg_button_active"));
      item.classList.add("mg_button_active");
    }
  });
  measureSoundHand(mg_main_controls.volume);
}
function saveControls({ lang, volume, speed, quality }) {
  if (localStorage.getItem("mg_player_controls")) {
    let mg_save_ = localStorage.getItem("mg_player_controls");
    let mg_player_controls = JSON.parse(mg_save_);

    mg_player_controls.lang = lang ?? mg_player_controls.lang;
    mg_player_controls.volume = volume ?? mg_player_controls.volume;
    mg_player_controls.speed = speed ?? mg_player_controls.speed;
    mg_player_controls.quality = quality ?? mg_player_controls.quality;
    localStorage.setItem(
      "mg_player_controls",
      JSON.stringify(mg_player_controls)
    );
  }
}

// ! DRAG FUNCTIONS

function mouseTouchDragger() {
  mg_timeline_scaler.addEventListener("mousedown", function () {
    isDragging = true;
    time_measuring = false;
    mg_timeline_scaler.addEventListener("mousemove", onDraging);
  });
  mg_timeline_scaler.addEventListener("mouseup", function () {
    if (isDragging) {
      isDragging = false;
      time_measuring = true;

      mg_timeline_scaler.removeEventListener("mousemove", onDraging);
    }
  });
  mg_timeline_scaler.addEventListener("mouseleave", function () {
    if (isDragging) {
      isDragging = false;
      time_measuring = true;

      mg_timeline_scaler.removeEventListener("mousemove", onDraging);
    }
  });

  // TOUCH (MOBILE)
  mg_timeline_scaler.addEventListener("touchstart", function (event) {
    event.preventDefault();

    isDragging = true;
    time_measuring = false;

    let touch = event.touches[0];
    onDraging(touch);

    mg_timeline_scaler.addEventListener("touchmove", onDragingTouch);
  });

  mg_timeline_scaler.addEventListener("touchend", function () {
    if (isDragging) {
      isDragging = false;
      time_measuring = true;
      mg_timeline_scaler.removeEventListener("touchmove", onDragingTouch);
    }
  });

  mg_timeline_scaler.addEventListener("touchcancel", function () {
    if (isDragging) {
      isDragging = false;
      time_measuring = true;
      mg_timeline_scaler.removeEventListener("touchmove", onDragingTouch);
    }
  });
}

// * FOR EPISODES
function initialiseEpisodes() {
  if (active_season == null && active_episode == null) {
    active_season = 0;
    active_episode = 0;
  }
  if (MG_PLAYER.seasons) {
    // ! SEASONS
    printSeasons();

    // ! EPISODES
    printEpisodes();
  }
}
initialiseEpisodes();

function printSeasons() {
  mg_player_seasons.innerHTML = "";
  for (const [season] of Object.entries(MG_PLAYER.seasons)) {
    mg_player_seasons.innerHTML += `<button data-season="${season}" class="mg_se_button ${
      active_season == season ? "mg_se_button_active" : ""
    } ">
    ${season}
  </button>`;
  }
  let mg_ses_childrens = Array.from(mg_player_seasons.children);
  mg_ses_childrens.forEach((item) => {
    item.addEventListener("click", () => {
      active_season = item.getAttribute("data-season");
      printEpisodes();
      mg_ses_childrens.forEach((k) =>
        k.classList.remove("mg_se_button_active")
      );
      item.classList.add("mg_se_button_active");
    });
  });
}
function printEpisodes() {
  const curSE = getCurStorage().season;
  mg_player_eps_scroll.innerHTML = "";
  MG_PLAYER.seasons[active_season].forEach((item, index) => {
    index += 1;
    mg_player_eps_scroll.innerHTML += `<button data-ep="${index}" class="mg_ep_button ${
      active_episode == index && curSE == active_season
        ? "mg_ep_button_active"
        : ""
    } ">
      ${index} ეპიზოდი
      </button>`;
  });
  let mg_eps_childrens = Array.from(mg_player_eps_scroll.children);
  mg_eps_childrens.forEach((item) => {
    item.addEventListener("click", () => {
      active_episode = item.getAttribute("data-ep");

      changeEpisode(getEpisodeRequest());
      mg_eps_childrens.forEach((k) =>
        k.classList.remove("mg_ep_button_active")
      );
      item.classList.add("mg_ep_button_active");
    });
  });
}

function initializePlayerSeries() {
  for (const [quality] of Object.entries(
    MG_PLAYER.languages[mg_main_controls.lang]
  )) {
    mg_qualities.innerHTML += `<div class='mg_button${
      mg_main_controls.quality == quality ? " mg_button_active" : ""
    }'>${quality}</div>`;
  }

  for (const [language] of Object.entries(MG_PLAYER.languages)) {
    mg_languages.innerHTML += `<div class='mg_button${
      mg_main_controls.lang == language ? " mg_button_active" : ""
    }'>${language}</div>`;
  }
}
function changeInitialEpisode(episode) {
  mg_video.src = episode;
  mg_helper_video.src = episode;
}

function changeEpisode(episode) {
  mg_video.src = episode;
  mg_helper_video.src = episode;
  mg_video.currentTime = 0;
  mg_helper_video.currentTime = 0;
  if (localStorage.getItem("mg_player")) {
    let mg_save_ = localStorage.getItem("mg_player");
    let mg_save = JSON.parse(mg_save_);
    mg_save[0].time = 0;
    mg_save[0].episode = parseInt(active_episode);
    mg_save[0].season = active_season;
    localStorage.setItem("mg_player", JSON.stringify(mg_save));
  }
  MG_PLAYER.languages = getEpisodesObjectRequest();
  if (is_started == false) {
    firstStart();
  }
  playPause("play");
}

function getEpisodeRequest() {
  return MG_PLAYER.seasons[active_season][active_episode - 1].languages[
    mg_main_controls.lang
  ]
    ? MG_PLAYER.seasons[active_season][active_episode - 1].languages[
        mg_main_controls.lang
      ][mg_main_controls.quality]
      ? MG_PLAYER.seasons[active_season][active_episode - 1].languages[
          mg_main_controls.lang
        ][mg_main_controls.quality]
      : Object.values(
          MG_PLAYER.seasons[active_season][active_episode - 1].languages[
            mg_main_controls.lang
          ]
        )[0]
    : Object.values(
        Object.values(
          MG_PLAYER.seasons[active_season][active_episode - 1].languages
        )[0]
      )[0];
}
function getEpisodesObjectRequest() {
  return MG_PLAYER.seasons[active_season][active_episode - 1].languages
    ? MG_PLAYER.seasons[active_season][active_episode - 1].languages
      ? MG_PLAYER.seasons[active_season][active_episode - 1].languages
      : MG_PLAYER.seasons[active_season][active_episode - 1].languages
    : MG_PLAYER.seasons[active_season][active_episode - 1].languages;
}

function getCurStorage() {
  if (localStorage.getItem("mg_player")) {
    let mg_save_ = localStorage.getItem("mg_player");
    let mg_save = JSON.parse(mg_save_);
    let get_cur = mg_save.filter((item) => {
      return item.id == MG_PLAYER.id;
    });
    return get_cur[0];
  } else {
    return null;
  }
}
