const mg_player = document.querySelector(".mg_player"),
  mg_error_block = document.querySelector(".mg_error_block"),
  mg_video_thumbnail = document.querySelector(".mg_video_thumbnail"),
  mg_loader = document.querySelector(".mg_loader"),
  mg_video = document.querySelector(".mg_video"),
  mg_main_play = document.querySelector(".mg_main_play"),
  mg_play_pause_full = document.querySelector(".mg_play_pause_full"),
  mg_play_pause = document.querySelector(".mg_play_pause"),
  mg_play_ = document.querySelector("#mg_play_"),
  mg_pause_ = document.querySelector("#mg_pause_"),
  mg_sound_icon = document.querySelector(".mg_sound_icon"),
  mg_sound_slider = document.querySelector("#mg_sound_slider"),
  mg_sound_on_ = document.querySelector("#mg_sound_on_"),
  mg_sound_off_ = document.querySelector("#mg_sound_off_"),
  mg_timeline_scaler = document.querySelector(".mg_timeline_scaler"),
  mg_time_indicator = document.querySelector(".mg_time_indicator"),
  mg_time_indicator_helper = document.querySelector(
    ".mg_time_indicator_helper"
  ),
  mg_timeline_helper = document.querySelector(".mg_timeline_helper"),
  mg_helper_video = document.querySelector(".mg_helper_video"),
  mg_timeline_helper_time = document.querySelector(".mg_timeline_helper_time"),
  mg_starttime = document.querySelector(".mg_starttime"),
  mg_endtime = document.querySelector(".mg_endtime"),
  mg_skip_left_button = document.querySelector(".mg_skip_left_button"),
  mg_skip_right_button = document.querySelector(".mg_skip_right_button"),
  mg_fullscreen = document.querySelector(".mg_fullscreen"),
  mg_fullscreen_on_ = document.querySelector("#mg_fullscreen_on_"),
  mg_fullscreen_off_ = document.querySelector("#mg_fullscreen_off_"),
  mg_speed_button = document.querySelectorAll(".mg_speed_button"),
  mg_controls = document.querySelector(".mg_controls"),
  mg_download = document.querySelector(".mg_download"),
  mg_frame = document.querySelector(".mg_frame"),
  mg_settings_block = document.querySelector(".mg_settings_block"),
  mg_settings_toggler = document.querySelector("#mg_settings_toggler"),
  mg_skip_left = document.querySelector(".mg_skip_left"),
  mg_skip_right = document.querySelector(".mg_skip_right"),
  mg_languages = document.querySelector(".mg_languages"),
  mg_qualities = document.querySelector(".mg_qualities"),
  mg_context_menu = document.querySelector(".mg_context_menu"),
  mg_player_eps_scroll = document.querySelector(".mg_player_eps_scroll"),
  mg_player_seasons = document.querySelector(".mg_player_seasons"),
  mg_player_eps = document.querySelector(".mg_player_eps"),
  mg_player_eps_container = document.querySelector(".mg_player_eps_container"),
  mg_player_ep_button = document.querySelector(".mg_player_ep_button"),
  mg_eps_closer = document.querySelector(".mg_eps_closer");
let mg_main_controls,
  active_season = null,
  active_episode = null;
function InitializeVideo(e) {
  if (e.includes(".m3u8"))
    if (Hls.isSupported()) {
      var t = new Hls();
      t.loadSource(e),
        t.attachMedia(mg_video),
        t.on(Hls.Events.MANIFEST_PARSED, function () {}),
        t.on(Hls.Events.ERROR, function () {
          mg_error_block.classList.remove("mg_error_block_hidden");
        });
    } else
      mg_video.canPlayType("application/vnd.apple.mpegurl")
        ? (mg_video.src = e)
        : mg_error_block.classList.remove("mg_error_block_hidden");
  else mg_video.src = e;
}
localStorage.getItem("mg_player_controls")
  ? (mg_main_controls = JSON.parse(localStorage.getItem("mg_player_controls")))
  : ((mg_main_controls = { lang: "GEO", volume: 1, speed: 1, quality: "HD" }),
    localStorage.setItem(
      "mg_player_controls",
      JSON.stringify(mg_main_controls)
    ));
let stoppedmove = !1,
  is_started = !1,
  is_loaded = !1,
  time_measuring = !0;
function initializePlayer() {
  if (
    (0 == mg_main_controls.volume && soundOnOff("off"),
    MG_PLAYER.seasons && mg_player_eps.classList.remove("mg_player_eps_hidden"),
    getCheckOfControls(),
    (mg_video_thumbnail.src = MG_PLAYER.image),
    localStorage.getItem("mg_player"))
  ) {
    let e = localStorage.getItem("mg_player"),
      t = JSON.parse(e),
      i = t.filter((e) => e.id == MG_PLAYER.id);
    0 !== i.length
      ? (movetoFirstItem(
          t,
          t.findIndex((e) => e.id == i[0].id)
        ),
        MG_PLAYER.seasons &&
          (i[0].season <= Object.keys(MG_PLAYER.seasons).length &&
          i[0].episode <= MG_PLAYER.seasons[i[0].season].length
            ? ((active_season = i[0].season),
              (active_episode = i[0].episode),
              setTimeout(() => {
                const e = mg_player_seasons.querySelector(
                    `[data-season="${i[0]?.season}"]`
                  ),
                  t = mg_player_eps_scroll.querySelector(
                    `[data-ep="${i[0]?.episode}"]`
                  );
                e &&
                  mg_player_seasons &&
                  (mg_player_seasons.scrollTop =
                    e.offsetTop - mg_player_seasons.offsetTop - 100),
                  t &&
                    mg_player_eps_scroll &&
                    (mg_player_eps_scroll.scrollTop =
                      t.offsetTop - mg_player_eps_scroll.offsetTop - 100);
              }, 0),
              changeInitialEpisode(getEpisodeRequest()))
            : ((active_season = 1),
              (active_episode = 1),
              (t[0].id = MG_PLAYER.id),
              (t[0].time = 0),
              (t[0].episode = 1),
              (t[0].season = 1),
              localStorage.setItem("mg_player", JSON.stringify(t)))),
        cutIfTooLarge(t, 5),
        localStorage.setItem("mg_player", JSON.stringify(t)))
      : (MG_PLAYER.seasons,
        t.unshift({ id: MG_PLAYER.id, time: 0, episode: 1, season: 1 }),
        cutIfTooLarge(t, 5),
        localStorage.setItem("mg_player", JSON.stringify(t)));
  } else
    MG_PLAYER.seasons,
      localStorage.setItem(
        "mg_player",
        JSON.stringify([{ id: MG_PLAYER.id, time: 0, episode: 1, season: 1 }])
      );
  for (const [e] of Object.entries(MG_PLAYER.languages[mg_main_controls.lang]))
    mg_qualities.innerHTML += `<div class='mg_button${
      mg_main_controls.quality == e ? " mg_button_active" : ""
    }'>${e}</div>`;
  for (const [e] of Object.entries(MG_PLAYER.languages))
    mg_languages.innerHTML += `<div class='mg_button${
      mg_main_controls.lang == e ? " mg_button_active" : ""
    }'>${e}</div>`;
}
initializePlayer(),
  mg_player.addEventListener("contextmenu", contextClick),
  mg_player.addEventListener("click", playerClick),
  mg_player_ep_button.addEventListener("click", openEpisodes),
  mg_eps_closer.addEventListener("click", closeEpisodes),
  mg_player.addEventListener("mousemove", mouseMoving),
  mg_player.addEventListener("touchmove", mouseMoving),
  mg_fullscreen.addEventListener("click", fullscreenOnOff),
  mg_main_play.addEventListener("click", firstStart),
  mg_skip_left.addEventListener("click", skipLeftDbl),
  mg_skip_right.addEventListener("click", skipRightDbl),
  mg_skip_left_button.addEventListener("click", skipLeft),
  mg_skip_right_button.addEventListener("click", skipRight),
  mg_play_pause_full.addEventListener("dblclick", fullscreenOnOff),
  mg_play_pause_full.addEventListener("click", playPause),
  mg_play_pause.addEventListener("click", playPause),
  mg_sound_icon.addEventListener("click", soundOnOff),
  mg_sound_slider.addEventListener("input", measureSound),
  mg_settings_toggler.addEventListener("click", toggleSettings),
  mg_frame.addEventListener("click", togglePIP),
  mg_download.addEventListener("click", downloadMovie),
  mg_timeline_scaler.addEventListener("click", measureTimeMouse),
  mg_timeline_scaler.addEventListener("touchstart", measureTimeTouch),
  mg_timeline_scaler.addEventListener("touchmove", measureTimeTouch),
  mg_timeline_scaler.addEventListener("touchend", removeSeeTime),
  mg_timeline_scaler.addEventListener("mousemove", seeTime),
  mg_timeline_scaler.addEventListener("touchmove", seeTimeTouch),
  mg_timeline_scaler.addEventListener("mouseout", removeSeeTime),
  document.addEventListener("keydown", handleKeyPress),
  mg_video.addEventListener("waiting", function () {
    mg_loader.classList.remove("mg_loader_hidden");
  }),
  mg_video.addEventListener("waitingforkey", () => {
    mg_loader.classList.remove("mg_loader_hidden");
  }),
  mg_video.addEventListener("playing", () => {
    mg_error_block.classList.add("mg_error_block_hidden"),
      mg_loader.classList.add("mg_loader_hidden");
  }),
  mg_video.addEventListener("canplaythrough", () => {
    mg_loader.classList.add("mg_loader_hidden");
  }),
  mg_video.addEventListener("loadeddata", function () {
    mg_error_block.classList.add("mg_error_block_hidden");
    let e = getSavedTime();
    (mg_video.currentTime = e.toFixed(6)),
      measureTime(e),
      (is_loaded = !0),
      mg_loader.classList.add("mg_loader_hidden"),
      (mg_starttime.innerHTML = formatTime(mg_video.currentTime)),
      (mg_endtime.innerHTML = formatTime(mg_video.duration));
  });
let moveTimeout,
  lastUpdate = 0;
function mouseMoving() {
  is_started &&
    (startedMoving(),
    moveTimeout && clearTimeout(moveTimeout),
    (moveTimeout = setTimeout(() => {
      (stoppedmove = !0), mg_video.paused || stoppedMoving();
    }, 2e3)));
}
function openEpisodes() {
  mg_player_eps_container.classList.add("mg_player_eps_container_show"),
    mg_player_ep_button.classList.add("mg_player_ep_button_hide");
}
function closeEpisodes() {
  mg_player_eps_container.classList.remove("mg_player_eps_container_show"),
    mg_player_ep_button.classList.remove("mg_player_ep_button_hide");
}
mg_video.addEventListener("timeupdate", function () {
  (mg_starttime.innerHTML = formatTime(mg_video.currentTime)),
    measureTime(mg_video.currentTime),
    lastUpdate++,
    lastUpdate >= 12 &&
      (replaceTimeline(mg_video.currentTime), (lastUpdate = 0));
}),
  mg_video.addEventListener("error", function () {
    mg_error_block.classList.remove("mg_error_block_hidden");
  }),
  mg_video.addEventListener("stalled", function () {
    mg_error_block.classList.remove("mg_error_block_hidden");
  }),
  MG_PLAYER.seasons || mg_player_eps.remove();
let sTimer,
  isDragging = !1;
function onDraging(e) {
  if (isDragging) {
    var t = (100 / mg_timeline_scaler.offsetWidth) * e.offsetX;
    mg_time_indicator.style.width = t + "%";
  }
}
function onDragingTouch(e) {
  const t = e.touches[0];
  if (isDragging) {
    var i =
      (100 / mg_timeline_scaler.offsetWidth) *
      (t.clientX - mg_timeline_scaler.getBoundingClientRect().left);
    mg_time_indicator.style.width = i + "%";
  }
}
function contextClick(e) {
  e.preventDefault();
  const t = e.offsetX,
    i = e.offsetY;
  clearTimeout(sTimer),
    (mg_context_menu.style.left = `${t}px`),
    (mg_context_menu.style.top = `${i}px`),
    (mg_context_menu.style.display = "flex"),
    (sTimer = setTimeout(() => {
      mg_context_menu.style.display = "none";
    }, 1500));
}
mouseTouchDragger(),
  document.addEventListener("click", function () {
    mg_context_menu.style.display = "none";
  });
const mg_qualitiesChildrens = Array.from(mg_qualities.children),
  mg_languagesChildrens = Array.from(mg_languages.children);
function handleKeyPress(e) {
  switch (e.key) {
    case "ArrowLeft":
      (mg_video.currentTime -= 10),
        (mg_starttime.innerHTML = formatTime(mg_video.currentTime));
      break;
    case "ArrowRight":
      (mg_video.currentTime += 10),
        (mg_starttime.innerHTML = formatTime(mg_video.currentTime));
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
      playPause(), e.preventDefault();
  }
}
function playerClick(e) {
  mouseMoving(),
    mg_settings_block.classList.contains("mg_settings_hidden") ||
      mg_controls.contains(e.target) ||
      closeSettings();
}
function skipLeft() {
  (mg_video.currentTime -= 10),
    (mg_starttime.innerHTML = formatTime(mg_video.currentTime)),
    measureTime(mg_video.currentTime);
}
function skipRight() {
  (mg_video.currentTime += 10),
    (mg_starttime.innerHTML = formatTime(mg_video.currentTime)),
    measureTime(mg_video.currentTime);
}
function skipLeftDbl() {
  dbClick(() => (mg_video.currentTime -= 10)),
    (mg_starttime.innerHTML = formatTime(mg_video.currentTime)),
    measureTime(mg_video.currentTime);
}
function skipRightDbl() {
  dbClick(() => (mg_video.currentTime += 10)),
    (mg_starttime.innerHTML = formatTime(mg_video.currentTime)),
    measureTime(mg_video.currentTime);
}
function stoppedMoving() {
  mg_controls.classList.add("mg_controls_hidden"),
    mg_player_eps.classList.add("mg_controls_hidden"),
    mg_player.classList.add("mg_hide_cursor"),
    closeEpisodes(),
    closeSettings();
}
function startedMoving() {
  mg_controls.classList.remove("mg_controls_hidden"),
    mg_player_eps.classList.remove("mg_controls_hidden"),
    mg_player.classList.remove("mg_hide_cursor");
}
function downloadMovie() {
  window.open(mg_video.src, "_blank");
}
async function togglePIP() {
  document.pictureInPictureElement
    ? await document.exitPictureInPicture()
    : await mg_video.requestPictureInPicture();
}
function toggleSettings() {
  mg_settings_block.classList.toggle("mg_settings_hidden");
}
function closeSettings() {
  mg_settings_block.classList.add("mg_settings_hidden");
}
function fullscreenOnOff() {
  isFullscreen()
    ? (document.exitFullscreen
        ? document.exitFullscreen()
        : document.mozCancelFullScreen
        ? document.mozCancelFullScreen()
        : document.webkitExitFullscreen
        ? document.webkitExitFullscreen()
        : document.msExitFullscreen && document.msExitFullscreen(),
      (mg_fullscreen_off_.style.display = "none"),
      (mg_fullscreen_on_.style.display = "block"))
    : (mg_player.requestFullscreen
        ? mg_player.requestFullscreen()
        : mg_player.mozRequestFullScreen
        ? mg_player.mozRequestFullScreen()
        : mg_player.webkitRequestFullscreen
        ? mg_player.webkitRequestFullscreen()
        : mg_player.msRequestFullscreen && mg_player.msRequestFullscreen(),
      (mg_fullscreen_on_.style.display = "none"),
      (mg_fullscreen_off_.style.display = "block"));
}
function isFullscreen() {
  return document.fullscreenElement === mg_player;
}
function removeSeeTime() {
  (mg_timeline_helper.style.opacity = 0),
    (mg_time_indicator_helper.style.width = "0%");
}
function seeTime(e) {
  if (is_loaded) {
    var t = (100 / mg_timeline_scaler.offsetWidth) * e.offsetX;
    (mg_timeline_helper.style.opacity = 1),
      (mg_timeline_helper.style.transform = `translateX(${
        e.offsetX - mg_timeline_helper.offsetWidth / 2
      }px)`);
    var i = percentageToTime(t);
    i &&
      ((mg_timeline_helper_time.innerHTML = formatTime(i)),
      (mg_helper_video.currentTime = i.toFixed(6)),
      (mg_time_indicator_helper.style.width = t + "%"));
  }
}
function seeTimeTouch(e) {
  const t = e.touches[0];
  if (is_loaded) {
    const e =
      (100 / mg_timeline_scaler.offsetWidth) *
      (t.clientX - mg_timeline_scaler.getBoundingClientRect().left);
    (mg_timeline_helper.style.opacity = 1),
      (mg_timeline_helper.style.transform = `translateX(${
        t.clientX -
        mg_timeline_scaler.getBoundingClientRect().left -
        mg_timeline_helper.offsetWidth / 2
      }px)`);
    const i = percentageToTime(e);
    (mg_timeline_helper_time.innerHTML = formatTime(i)),
      (mg_helper_video.currentTime = i.toFixed(6)),
      (mg_time_indicator_helper.style.width = e + "%");
  }
}
function measureTimeMouse(e) {
  if (is_loaded) {
    var t = (100 / mg_timeline_scaler.offsetWidth) * e.offsetX;
    (mg_time_indicator.style.width = t + "%"),
      (mg_video.currentTime = (mg_video.duration / 100) * t);
  }
}
function measureTimeTouch(e) {
  const t =
    e instanceof MouseEvent
      ? e.offsetX
      : e.touches[0].clientX - mg_timeline_scaler.getBoundingClientRect().left;
  if (is_loaded) {
    const e = (100 / mg_timeline_scaler.offsetWidth) * t;
    (mg_time_indicator.style.width = e + "%"),
      (mg_video.currentTime = ((mg_video.duration / 100) * e).toFixed(6)),
      (mg_starttime.innerHTML = formatTime(mg_video.currentTime));
  }
}
function measureTime(e) {
  if (is_loaded && time_measuring) {
    var t = (100 / mg_video.duration) * e;
    mg_time_indicator.style.width = t + "%";
  }
}
function measureSound() {
  0 == mg_sound_slider.value ? changeSounds("off") : changeSounds("on"),
    (mg_main_controls.volume = mg_sound_slider.value / 100),
    saveControls({ volume: mg_sound_slider.value / 100 }),
    (mg_video.volume = mg_sound_slider.value / 100);
}
function measureSoundHand(e) {
  e >= 0 &&
    e <= 1 &&
    (0 == mg_sound_slider.value ? changeSounds("off") : changeSounds("on"),
    (mg_video.volume = e),
    (mg_sound_slider.value = 100 * e));
}
function soundOnOff() {
  mg_video.volume > 0
    ? (changeSounds("off"),
      (mg_video.volume = 0),
      (mg_sound_slider.value = 0),
      saveControls({ volume: 0 }))
    : (changeSounds("on"),
      mg_main_controls.volume > 0.08
        ? ((mg_video.volume = mg_main_controls.volume),
          (mg_sound_slider.value = 100 * mg_main_controls.volume),
          saveControls({ volume: mg_main_controls.volume }))
        : ((mg_video.volume = 1),
          (mg_sound_slider.value = 100),
          saveControls({ volume: 1 })));
}
function soundDown() {
  mg_video.volume >= 0.05
    ? ((mg_video.volume -= 0.05),
      (mg_sound_slider.value = 100 * mg_video.volume),
      0 == mg_video.volume && changeSounds("off"))
    : ((mg_video.volume = 0), (mg_sound_slider.value = 0), changeSounds("off")),
    saveControls({ volume: mg_video.volume });
}
function soundUp() {
  mg_video.volume <= 0.95
    ? (changeSounds("on"),
      (mg_video.volume += 0.05),
      (mg_sound_slider.value = 100 * mg_video.volume))
    : ((mg_video.volume = 1), (mg_sound_slider.value = 100)),
    saveControls({ volume: mg_video.volume });
}
function playPause(e) {
  mouseMoving(),
    mg_video.paused
      ? (changeControls("play"), mg_video.play())
      : (changeControls("pause"), mg_video.pause());
}
function playPauseHand(e) {
  "play" == e
    ? (changeControls("play"), mg_video.play())
    : "pause" == e && (changeControls("pause"), mg_video.pause());
}
function changeControls(e) {
  "play" == e
    ? ((mg_play_.style.display = "none"), (mg_pause_.style.display = "block"))
    : "pause" == e &&
      ((mg_play_.style.display = "block"), (mg_pause_.style.display = "none"));
}
function changeSounds(e) {
  "off" == e
    ? ((mg_sound_on_.style.display = "none"),
      (mg_sound_off_.style.display = "block"))
    : "on" == e &&
      ((mg_sound_on_.style.display = "block"),
      (mg_sound_off_.style.display = "none"));
}
function firstStart() {
  mg_video.play(),
    mg_main_play.parentNode.removeChild(mg_main_play),
    (is_started = !0),
    changeControls("play");
}
function formatTime(e) {
  const t = Math.floor(e / 3600),
    i = Math.floor((e % 3600) / 60),
    n = Math.floor(e % 60);
  return t > 0
    ? `${t}:${String(i).padStart(2, "0")}:${String(n).padStart(2, "0")}`
    : `${i}:${String(n).padStart(2, "0")}`;
}
function percentageToTime(e) {
  return mg_video.duration ? (mg_video.duration / 100) * e : null;
}
mg_qualitiesChildrens.forEach((e) => {
  e.addEventListener("click", () => {
    var t = mg_video.currentTime,
      i = mg_video.paused;
    (mg_video.src = InitializeVideo(
      MG_PLAYER.languages[mg_main_controls.lang][e.innerText]
    )),
      saveControls({ quality: e.innerText }),
      (mg_video.currentTime = t.toFixed(6)),
      0 == i && mg_video.play(),
      mg_qualitiesChildrens.forEach((e) =>
        e.classList.remove("mg_button_active")
      ),
      e.classList.add("mg_button_active");
  });
}),
  mg_languagesChildrens.forEach((e) => {
    e.addEventListener("click", () => {
      var t = mg_video.currentTime,
        i = mg_video.isPaused;
      (mg_video.src = InitializeVideo(
        MG_PLAYER.languages[e.innerText][mg_main_controls.quality]
      )),
        saveControls({ lang: e.innerText }),
        (mg_video.currentTime = t.toFixed(6)),
        0 == i && mg_video.play(),
        mg_languagesChildrens.forEach((e) =>
          e.classList.remove("mg_button_active")
        ),
        e.classList.add("mg_button_active");
    });
  }),
  mg_speed_button.forEach((e) => {
    e.addEventListener("click", () => {
      (mg_video.playbackRate = e.innerText),
        mg_speed_button.forEach((e) => e.classList.remove("mg_button_active")),
        saveControls({ speed: e.innerText }),
        e.classList.add("mg_button_active");
    });
  });
let clickCount = 0;
function dbClick(e) {
  let t;
  clickCount++,
    1 === clickCount
      ? (t = setTimeout(() => {
          clickCount = 0;
        }, 300))
      : 2 === clickCount && (clearTimeout(t), (clickCount = 0), e());
}
function movetoFirstItem(e, t) {
  if (t < 0 || t >= e.length) return e;
  const i = e.splice(t, 1)[0];
  return e.splice(0, 0, i), e;
}
function cutIfTooLarge(e, t) {
  e.length > t && e.splice(t);
}
function replaceTimeline(e) {
  let t = localStorage.getItem("mg_player"),
    i = JSON.parse(t),
    n = i.findIndex((e) => e.id == MG_PLAYER.id);
  (i[n].time = e), localStorage.setItem("mg_player", JSON.stringify(i));
}
function getSavedTime() {
  let e = localStorage.getItem("mg_player"),
    t = JSON.parse(e),
    i = t.findIndex((e) => e.id == MG_PLAYER.id);
  return -1 !== i ? t[i].time : 0;
}
function getCheckOfControls() {
  let e = "ENG" == mg_main_controls.lang ? "ENG" : "GEO",
    t = "SD" == mg_main_controls.quality ? "SD" : "HD";
  "GEO" == mg_main_controls.lang && MG_PLAYER.languages.GEO[t]
    ? ((mg_video.src = InitializeVideo(MG_PLAYER.languages.GEO[t])),
      (mg_helper_video.src = InitializeVideo(MG_PLAYER.languages.GEO[t])))
    : "ENG" == mg_main_controls.lang && MG_PLAYER.languages.ENG[t]
    ? ((e = "ENG"),
      (mg_video.src = InitializeVideo(MG_PLAYER.languages.ENG[t])),
      (mg_helper_video.src = InitializeVideo(MG_PLAYER.languages.ENG[t])))
    : ((mg_video.src = InitializeVideo(MG_PLAYER.languages.GEO[t])),
      (mg_helper_video.src = InitializeVideo(MG_PLAYER.languages.GEO[t]))),
    "HD" == mg_main_controls.quality && MG_PLAYER.languages[e].HD
      ? ((mg_video.src = InitializeVideo(MG_PLAYER.languages[e].HD)),
        (mg_helper_video.src = InitializeVideo(MG_PLAYER.languages[e].HD)))
      : "SD" == mg_main_controls.lang && MG_PLAYER.languages[e].SD
      ? ((mg_video.src = InitializeVideo(MG_PLAYER.languages[e].SD)),
        (mg_helper_video.src = InitializeVideo(MG_PLAYER.languages[e].SD)))
      : ((mg_video.src = InitializeVideo(MG_PLAYER.languages[e].HD)),
        (mg_helper_video.src = InitializeVideo(MG_PLAYER.languages[e].HD))),
    mg_speed_button.forEach((e) => {
      e.innerHTML.trim() == mg_main_controls.speed &&
        ((mg_video.playbackRate = e.innerHTML.trim()),
        mg_speed_button.forEach((e) => e.classList.remove("mg_button_active")),
        e.classList.add("mg_button_active"));
    }),
    measureSoundHand(mg_main_controls.volume);
}
function saveControls({ lang: e, volume: t, speed: i, quality: n }) {
  if (localStorage.getItem("mg_player_controls")) {
    let o = localStorage.getItem("mg_player_controls"),
      s = JSON.parse(o);
    (s.lang = e ?? s.lang),
      (s.volume = t ?? s.volume),
      (s.speed = i ?? s.speed),
      (s.quality = n ?? s.quality),
      localStorage.setItem("mg_player_controls", JSON.stringify(s));
  }
}
function mouseTouchDragger() {
  mg_timeline_scaler.addEventListener("mousedown", function () {
    (isDragging = !0),
      (time_measuring = !1),
      mg_timeline_scaler.addEventListener("mousemove", onDraging);
  }),
    mg_timeline_scaler.addEventListener("mouseup", function () {
      isDragging &&
        ((isDragging = !1),
        (time_measuring = !0),
        mg_timeline_scaler.removeEventListener("mousemove", onDraging));
    }),
    mg_timeline_scaler.addEventListener("mouseleave", function () {
      isDragging &&
        ((isDragging = !1),
        (time_measuring = !0),
        mg_timeline_scaler.removeEventListener("mousemove", onDraging));
    }),
    mg_timeline_scaler.addEventListener("touchstart", function (e) {
      e.preventDefault(),
        (isDragging = !0),
        (time_measuring = !1),
        onDraging(e.touches[0]),
        mg_timeline_scaler.addEventListener("touchmove", onDragingTouch);
    }),
    mg_timeline_scaler.addEventListener("touchend", function () {
      isDragging &&
        ((isDragging = !1),
        (time_measuring = !0),
        mg_timeline_scaler.removeEventListener("touchmove", onDragingTouch));
    }),
    mg_timeline_scaler.addEventListener("touchcancel", function () {
      isDragging &&
        ((isDragging = !1),
        (time_measuring = !0),
        mg_timeline_scaler.removeEventListener("touchmove", onDragingTouch));
    });
}
function initialiseEpisodes() {
  MG_PLAYER.seasons &&
    (null == active_season &&
      null == active_episode &&
      ((active_season = 1), (active_episode = 1)),
    printSeasons(),
    printEpisodes());
}
function printSeasons() {
  mg_player_seasons.innerHTML = "";
  for (const [e] of Object.entries(MG_PLAYER.seasons))
    mg_player_seasons.innerHTML += `<div data-season="${e}" class="mg_se_button ${
      active_season == e ? "mg_se_button_active" : ""
    } ">\n    ${e}\n  </div>`;
  let e = Array.from(mg_player_seasons.children);
  e.forEach((t) => {
    t.addEventListener("click", () => {
      (active_season = t.getAttribute("data-season")),
        printEpisodes(),
        e.forEach((e) => e.classList.remove("mg_se_button_active")),
        t.classList.add("mg_se_button_active");
    });
  });
}
function printEpisodes() {
  const e = getCurStorage().season;
  (mg_player_eps_scroll.innerHTML = ""),
    MG_PLAYER.seasons[active_season].forEach((t, i) => {
      (i += 1),
        (mg_player_eps_scroll.innerHTML += `<div data-ep="${i}" class="mg_ep_button ${
          active_episode == i && e == active_season ? "mg_ep_button_active" : ""
        } ">\n      ${i} ეპიზოდი\n      </div>`);
    });
  let t = Array.from(mg_player_eps_scroll.children);
  t.forEach((e) => {
    e.addEventListener("click", () => {
      (active_episode = e.getAttribute("data-ep")),
        mg_error_block.classList.add("mg_error_block_hidden"),
        changeEpisode(getEpisodeRequest()),
        t.forEach((e) => e.classList.remove("mg_ep_button_active")),
        e.classList.add("mg_ep_button_active"),
        closeEpisodes();
    });
  });
}
function initializePlayerSeries() {
  for (const [e] of Object.entries(MG_PLAYER.languages[mg_main_controls.lang]))
    mg_qualities.innerHTML += `<div class='mg_button${
      mg_main_controls.quality == e ? " mg_button_active" : ""
    }'>${e}</div>`;
  for (const [e] of Object.entries(MG_PLAYER.languages))
    mg_languages.innerHTML += `<div class='mg_button${
      mg_main_controls.lang == e ? " mg_button_active" : ""
    }'>${e}</div>`;
}
function changeInitialEpisode(e) {
  (mg_video.src = InitializeVideo(e)),
    (mg_helper_video.src = InitializeVideo(e));
}
function changeEpisode(e) {
  if (
    ((mg_video.src = InitializeVideo(e)),
    (mg_helper_video.src = InitializeVideo(e)),
    (mg_video.currentTime = 0),
    (mg_helper_video.currentTime = 0),
    localStorage.getItem("mg_player"))
  ) {
    let e = localStorage.getItem("mg_player"),
      t = JSON.parse(e);
    (t[0].time = 0),
      (t[0].episode = parseInt(active_episode)),
      (t[0].season = active_season),
      localStorage.setItem("mg_player", JSON.stringify(t));
  }
  (MG_PLAYER.languages = getEpisodesObjectRequest()),
    0 == is_started && firstStart(),
    playPauseHand("play");
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
  return MG_PLAYER.seasons[active_season][active_episode - 1].languages;
}
function getCurStorage() {
  if (localStorage.getItem("mg_player")) {
    let e = localStorage.getItem("mg_player");
    return JSON.parse(e).filter((e) => e.id == MG_PLAYER.id)[0];
  }
  return null;
}
initialiseEpisodes();
