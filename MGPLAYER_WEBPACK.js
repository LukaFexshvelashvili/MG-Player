(() => {
  const e = document.querySelector(".mg_player");
  e.innerHTML = `<div class="mg_player_eps mg_player_eps_hidden">\n        <div class="mg_player_ep_button">ეპიზოდები</div>\n        <div class="mg_player_eps_container">\n          <div class="mg_player_eps_scroll"></div>\n          <div class="mg_player_seasons_scroll">\n            <div class="mg_eps_closer">\n              <svg\n                viewBox="0 0 23 23"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M13.0246 11.5L17.2921 7.2324C17.4947 7.03022 17.6086 6.75586 17.6089 6.46968C17.6091 6.1835 17.4957 5.90894 17.2935 5.7064C17.0913 5.50387 16.817 5.38994 16.5308 5.38969C16.2446 5.38943 15.97 5.50288 15.7675 5.70506L11.4999 9.97263L7.23234 5.70506C7.0298 5.50252 6.7551 5.38873 6.46867 5.38873C6.18223 5.38873 5.90753 5.50252 5.705 5.70506C5.50246 5.90759 5.38867 6.1823 5.38867 6.46873C5.38867 6.75516 5.50246 7.02986 5.705 7.2324L9.97257 11.5L5.705 15.7676C5.50246 15.9701 5.38867 16.2448 5.38867 16.5312C5.38867 16.8177 5.50246 17.0924 5.705 17.2949C5.90753 17.4974 6.18223 17.6112 6.46867 17.6112C6.7551 17.6112 7.0298 17.4974 7.23234 17.2949L11.4999 13.0273L15.7675 17.2949C15.97 17.4974 16.2447 17.6112 16.5312 17.6112C16.8176 17.6112 17.0923 17.4974 17.2948 17.2949C17.4974 17.0924 17.6112 16.8177 17.6112 16.5312C17.6112 16.2448 17.4974 15.9701 17.2948 15.7676L13.0246 11.5Z"\n                  fill="white"\n                  fill-opacity="0.7"\n                />\n              </svg>\n            </div>\n            <div class="mg_player_seasons"></div>\n          </div>\n        </div>\n      </div>\n      <div class="mg_error_block mg_error_hidden">\n        <div class="mg_error">წარმოიშვა შეცდომა სცადეთ სხვა ფლეიერით ან აირჩიეთ სხვა ენა</div>\n      </div>\n      <div class="mg_context_menu">MG PLAYER V3.4</div>\n      <div class="mg_loader mg_gtc mg_loader_hidden">\n        <div class="mg_loader_spinner"></div>\n      </div>\n      <video preload="none" class="mg_video">\n      </video>\n      \n      <div class="mg_main_play">\n        <img class="mg_video_thumbnail"  src="${
    MG_PLAYER.image
  }"  srcset="${MG_PLAYER.image_srcset ? MG_PLAYER.image_srcset : ""}" alt="${
    MG_PLAYER.image_alt ? MG_PLAYER.image_alt : ""
  }" sizes="(max-width: 480px) 480px, 100vw" />\n        <div class="mg_play_icon">\n          <svg\n            viewBox="0 0 14 16"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M13.4014 7.39629C13.5902 7.51463 13.7447 7.68071 13.8497 7.87794C13.9546 8.07517 14.0062 8.29664 13.9994 8.52023C13.9926 8.74381 13.9275 8.96168 13.8108 9.15207C13.694 9.34247 13.5297 9.49871 13.3341 9.6052L1.876 15.8459C1.68243 15.9513 1.46498 16.0043 1.24493 15.9997C1.02488 15.9952 0.809774 15.9333 0.62067 15.82C0.431566 15.7067 0.274948 15.546 0.166149 15.3536C0.0573496 15.1612 9.79929e-05 14.9436 0 14.7223V1.27831C-5.35092e-07 1.05013 0.0607289 0.8261 0.175884 0.629493C0.291038 0.432885 0.45642 0.270862 0.654859 0.160246C0.853298 0.049629 1.07756 -0.0055488 1.30436 0.000440518C1.53116 0.00642984 1.75224 0.0733681 1.94463 0.194306L13.4014 7.39629Z"\n              fill="white"\n              fill-opacity="0.9"\n            />\n          </svg>\n        </div>\n      </div>\n      <div class="mg_skip_left"></div>\n      <div class="mg_skip_right"></div>\n\n      <div class="mg_play_pause_full"></div>\n      <div class="mg_play_pause_full mg_play_pause_full_mobile"></div>\n      <div class="mg_play_pause mg_gtc mg_play_pause_mobile mg_controls_hidden">\n        <svg class="mg_play_" viewBox="0 0 16 16">\n          <path fill="white" opacity="1" d="M2 1v14l12-7z" />\n        </svg>\n        <svg class="mg_pause_" viewBox="0 0 256 384">\n          <path\n            fill="white"\n            opacity="1"\n            d="M0 341V43h85v298H0zM171 43h85v298h-85V43z"\n          />\n        </svg>\n      </div>\n      <div class="mg_controls mg_controls_hidden">\n        <div class="mg_controls_shadow"></div>\n        <div class="mg_controls_bar">\n          <div class="mg_timeline_scaler">\n            <div class="mg_timeline_helper">\n              <p class="mg_timeline_helper_time">00:00</p>\n            </div>\n            <div class="mg_timeline">\n              <div class="mg_time_indicator"></div>\n              <div class="mg_time_indicator_helper"></div>\n            </div>\n          </div>\n          <div class="mg_controls_row">\n            <div class="mg_first_row">\n              <div class="mg_play_pause mg_gtc">\n                <svg class="mg_play_" viewBox="0 0 16 16">\n                  <path fill="white" opacity="1" d="M2 1v14l12-7z" />\n                </svg>\n                <svg class="mg_pause_" viewBox="0 0 256 384">\n                  <path\n                    fill="white"\n                    opacity="0.9"\n                    d="M0 341V43h85v298H0zM171 43h85v298h-85V43z"\n                  />\n                </svg>\n              </div>\n              <div class="mg_sound">\n                <div class="mg_sound_mob"></div>\n                <div class="mg_sound_icon mg_gtc">\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    id="mg_sound_on_"\n                    viewBox="0 0 512 512"\n                  >\n                    <path\n                      fill="white"\n                      opacity="0.9"\n                      fill-rule="evenodd"\n                      d="m403.966 426.944l-33.285-26.63c74.193-81.075 74.193-205.015-.001-286.09l33.285-26.628c86.612 96.712 86.61 242.635.001 339.348M319.58 155.105l-33.324 26.659c39.795 42.568 39.794 108.444.001 151.012l33.324 26.658c52.205-58.22 52.205-146.109-.001-204.329m-85.163-69.772l-110.854 87.23H42.667v170.666h81.02l110.73 85.458z"\n                    />\n                  </svg>\n\n                  <svg id="mg_sound_off_" < viewBox="0 0 512 512">\n                    <path\n                      fill="white"\n                      opacity="0.9"\n                      fill-rule="evenodd"\n                      d="m403.375 257.27l59.584 59.584l-30.167 30.166l-59.583-59.583l-59.584 59.583l-30.166-30.166l59.583-59.584l-59.583-59.583l30.166-30.166l59.584 59.583l59.583-59.583l30.167 30.166zM234.417 85.333l-110.854 87.23H42.667v170.666h81.02l110.73 85.458z"\n                    />\n                  </svg>\n                </div>\n                <input\n                  type="range"\n                  id="mg_sound_slider"\n                  min="0"\n                  value="100"\n                  max="100"\n                />\n              </div>\n              <div class="mg_time">\n                <p class="mg_starttime">00:00</p>\n                /\n                <p class="mg_endtime">00:00</p>\n              </div>\n\n              <div class="mg_skip_left_button mg_mob_off">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n                  <path\n                    fill="white"\n                    opacity="0.9"\n                    d="M4.5 4.252v3.422c2.95-3.16 7.172-4.737 11.518-4.672c5.942.088 10.698 3.268 13.784 8.074a1.25 1.25 0 1 1-2.104 1.35c-2.713-4.225-6.751-6.85-11.717-6.925c-4.013-.06-7.768 1.503-10.192 4.5H9.75a1.25 1.25 0 1 1 0 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25v-7a1.25 1.25 0 0 1 2.5 0Zm7.986 10.847c.463.196.764.65.764 1.152V27.5a1.25 1.25 0 0 1-2.5 0v-8.47a23.25 23.25 0 0 1-1.607 1.043a1.25 1.25 0 0 1-1.286-2.144c1.046-.628 1.633-1.054 2.056-1.411c.31-.262.531-.483.81-.761c.12-.12.251-.252.405-.401a1.25 1.25 0 0 1 1.358-.257Zm4.463 2.2C17.787 15.882 19.18 15 21.1 15c1.923 0 3.314.88 4.152 2.298c.781 1.322 1.035 3.023 1.035 4.701c0 1.68-.254 3.38-1.035 4.702C24.414 28.12 23.022 29 21.1 29c-1.922 0-3.313-.88-4.15-2.298c-.782-1.322-1.036-3.023-1.036-4.702c0-1.678.254-3.38 1.035-4.701Zm2.152 1.272c-.448.759-.687 1.933-.687 3.43c0 1.496.239 2.67.687 3.43c.393.663.97 1.07 2 1.07s1.606-.407 1.999-1.07c.448-.76.687-1.934.687-3.43c0-1.497-.239-2.671-.687-3.43c-.393-.664-.97-1.07-2-1.07s-1.607.406-1.999 1.07Z"\n                  />\n                </svg>\n              </div>\n              <div class="mg_skip_right_button mg_mob_off">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n                  <path\n                    fill="white"\n                    opacity="0.9"\n                    d="M16.019 5.501c4.013-.06 7.768 1.503 10.192 4.5H22.25a1.25 1.25 0 0 0 0 2.5h6.5c.69 0 1.25-.56 1.25-1.25v-7a1.25 1.25 0 0 0-2.5 0v3.423c-2.95-3.16-7.172-4.737-11.518-4.672C10.04 3.09 5.284 6.27 2.197 11.076a1.25 1.25 0 1 0 2.104 1.35c2.713-4.225 6.751-6.85 11.717-6.925Zm5.081 9.5c-1.922 0-3.313.88-4.15 2.298c-.782 1.322-1.036 3.023-1.036 4.701c0 1.68.254 3.38 1.035 4.702C17.787 28.12 19.18 29 21.1 29c1.923 0 3.314-.88 4.152-2.298c.781-1.322 1.035-3.023 1.035-4.702c0-1.678-.254-3.379-1.035-4.701c-.838-1.417-2.23-2.298-4.152-2.298Zm-2.686 7c0-1.497.239-2.671.687-3.43c.393-.664.97-1.07 2-1.07s1.606.406 1.999 1.07c.448.759.687 1.933.687 3.43c0 1.496-.239 2.67-.687 3.43c-.393.663-.97 1.07-2 1.07s-1.607-.407-1.999-1.07c-.448-.76-.687-1.934-.687-3.43Zm-5.164-5.75a1.25 1.25 0 0 0-2.122-.895c-.154.15-.285.28-.405.4c-.279.279-.5.5-.81.762c-.423.357-1.01.783-2.056 1.411a1.25 1.25 0 1 0 1.286 2.144a23.25 23.25 0 0 0 1.607-1.043v8.47a1.25 1.25 0 0 0 2.5 0V16.25Z"\n                  />\n                </svg>\n              </div>\n            </div>\n            <div class="mg_last_row">\n              <div class="mg_download mg_mob_off">\n                <svg\n                  width="16"\n                  height="14"\n                  viewBox="0 0 16 14"\n                  fill="none"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M4.5 5.66667L8 9M8 9L11.5 5.66667M8 9V1M15 9V11.6667C15 12.0203 14.8525 12.3594 14.5899 12.6095C14.3274 12.8595 13.9713 13 13.6 13H2.4C2.0287 13 1.6726 12.8595 1.41005 12.6095C1.1475 12.3594 1 12.0203 1 11.6667V9"\n                    stroke="white"\n                    stroke-opacity="0.9"\n                    stroke-width="2"\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                  />\n                </svg>\n              </div>\n              <div class="mg_frame mg_gtc">\n                <svg\n                  id="mg_frame_icon"\n                  xmlns="http://www.w3.org/2000/svg"\n                  width="20"\n                  height="20"\n                  viewBox="0 0 472 384"\n                >\n                  <path\n                    fill="white"\n                    opacity="0.9"\n                    d="M384 85v128H213V85h171zm43-85q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0h384zm0 342V42H43v300h384z"\n                  />\n                </svg>\n              </div>\n              <div class="mg_settings mg_gtc">\n                <div class="mg_settings_block mg_settings_hidden">\n                  <div class="mg_settings_column mg_settings_starter">\n                    <button class="mg_setting_choose" data-col-index="1">\n                      ენა<span id="active_setting_language">GEO</span></button\n                    ><button class="mg_setting_choose" data-col-index="2">\n                      ხარისხი<span id="active_setting_quality">HD</span></button\n                    ><button class="mg_setting_choose" data-col-index="3">\n                      სისწრაფე<span id="active_setting_speed">1</span>\n                    </button>\n                  </div>\n                  <div\n                    class="mg_settings_column mg_settings_languages mg_settings_column_hide"\n                  >\n                    <button class="mg_settings_back">უკან</button>\n                    <div class="mg_languages"></div>\n                  </div>\n                  <div\n                    class="mg_settings_column mg_settings_qualities mg_settings_column_hide"\n                  >\n                    <button class="mg_settings_back">უკან</button>\n                    <div class="mg_qualities"></div>\n                  </div>\n\n                  <div\n                    class="mg_settings_column mg_settings_speed mg_settings_column_hide"\n                  >\n                    <button class="mg_settings_back">უკან</button>\n                    <div class="mg_speed">\n                      <div class="mg_speed_button">1.5</div>\n                      <div class="mg_speed_button">1.25</div>\n                      <div class="mg_speed_button">1</div>\n                      <div class="mg_speed_button">0.75</div>\n                      <div class="mg_speed_button">0.5</div>\n                    </div>\n                  </div>\n                </div>\n                <svg\n                  id="mg_settings_toggler"\n                  viewBox="0 0 16 16"\n                  fill="none"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M14.0975 8.78873L15.8286 10.1033C16.0082 10.2535 16.0466 10.4288 15.944 10.6291L14.2898 13.4085C14.1872 13.6088 14.0205 13.6588 13.7897 13.5587L11.7508 12.77C11.2892 13.0955 10.8275 13.3584 10.3659 13.5587L10.0581 15.662C10.0325 15.8873 9.89144 16 9.63497 16H6.36503C6.13421 16 5.99315 15.8873 5.94186 15.662L5.6341 13.5587C5.14681 13.3584 4.68517 13.0955 4.24918 12.77L2.21027 13.5587C1.97945 13.6338 1.81275 13.5837 1.71016 13.4085L0.0559563 10.6291C-0.0466302 10.4288 -0.00816028 10.2535 0.171366 10.1033L1.90251 8.78873C1.87687 8.48826 1.86404 8.22535 1.86404 8C1.86404 7.77465 1.87687 7.51174 1.90251 7.21127L0.171366 5.89671C-0.00816028 5.74648 -0.0466302 5.57121 0.0559563 5.37089L1.71016 2.59155C1.8384 2.39124 2.0051 2.34116 2.21027 2.44131L4.24918 3.23005C4.71082 2.90454 5.17246 2.64163 5.6341 2.44131L5.94186 0.338028C5.99315 0.112676 6.13421 0 6.36503 0H9.63497C9.89144 0 10.0325 0.112676 10.0581 0.338028L10.3659 2.44131C10.8532 2.64163 11.3148 2.90454 11.7508 3.23005L13.7897 2.44131C14.0205 2.3662 14.1872 2.41628 14.2898 2.59155L15.944 5.37089C16.0466 5.57121 16.0082 5.74648 15.8286 5.89671L14.0975 7.21127C14.1488 7.51174 14.1744 7.77465 14.1744 8C14.1744 8.22535 14.1488 8.48826 14.0975 8.78873ZM8 10.8169C8.78222 10.8169 9.45545 10.5415 10.0197 9.99061C10.5839 9.43975 10.866 8.77621 10.866 8C10.866 7.22379 10.5839 6.56025 10.0197 6.00939C9.45545 5.45853 8.78222 5.1831 8 5.1831C7.21778 5.1831 6.54455 5.45853 5.98033 6.00939C5.4161 6.56025 5.13399 7.22379 5.13399 8C5.13399 8.77621 5.4161 9.43975 5.98033 9.99061C6.54455 10.5415 7.21778 10.8169 8 10.8169Z"\n                    fill="white"\n                    fill-opacity="0.9"\n                  />\n                </svg>\n              </div>\n              <div class="mg_fullscreen mg_gtc">\n                <svg\n                  id="mg_fullscreen_on_"\n                  viewBox="0 0 17 17"\n                  fill="none"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M12.25 1H16V4.75"\n                    stroke="white"\n                    stroke-opacity="0.9"\n                    stroke-width="2"\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                  />\n                  <path\n                    d="M16 12.25V16H12.25"\n                    stroke="white"\n                    stroke-opacity="0.9"\n                    stroke-width="2"\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                  />\n                  <path\n                    d="M4.75 16H1V12.25"\n                    stroke="white"\n                    stroke-opacity="0.9"\n                    stroke-width="2"\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                  />\n                  <path\n                    d="M1 4.75V1H4.75"\n                    stroke="white"\n                    stroke-opacity="0.9"\n                    stroke-width="2"\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                  />\n                </svg>\n                <svg\n                  id="mg_fullscreen_off_"\n                  viewBox="0 0 17 17"\n                  fill="none"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M5.66667 0.944444C5.66667 0.693962 5.56716 0.453739 5.39004 0.276621C5.21293 0.0995036 4.9727 0 4.72222 0C4.47174 0 4.23152 0.0995036 4.0544 0.276621C3.87728 0.453739 3.77778 0.693962 3.77778 0.944444V3.30556C3.77778 3.4308 3.72803 3.55091 3.63947 3.63947C3.55091 3.72803 3.4308 3.77778 3.30556 3.77778H0.944444C0.693962 3.77778 0.453739 3.87728 0.276621 4.0544C0.0995036 4.23152 0 4.47174 0 4.72222C0 4.9727 0.0995036 5.21293 0.276621 5.39004C0.453739 5.56716 0.693962 5.66667 0.944444 5.66667H3.30556C3.93176 5.66667 4.53232 5.41791 4.97511 4.97511C5.41791 4.53232 5.66667 3.93176 5.66667 3.30556V0.944444ZM5.66667 16.0556C5.66667 16.306 5.56716 16.5463 5.39004 16.7234C5.21293 16.9005 4.9727 17 4.72222 17C4.47174 17 4.23152 16.9005 4.0544 16.7234C3.87728 16.5463 3.77778 16.306 3.77778 16.0556V13.6944C3.77778 13.5692 3.72803 13.4491 3.63947 13.3605C3.55091 13.272 3.4308 13.2222 3.30556 13.2222H0.944444C0.693962 13.2222 0.453739 13.1227 0.276621 12.9456C0.0995036 12.7685 0 12.5283 0 12.2778C0 12.0273 0.0995036 11.7871 0.276621 11.61C0.453739 11.4328 0.693962 11.3333 0.944444 11.3333H3.30556C3.93176 11.3333 4.53232 11.5821 4.97511 12.0249C5.41791 12.4677 5.66667 13.0682 5.66667 13.6944V16.0556ZM12.2778 0C12.0273 0 11.7871 0.0995036 11.61 0.276621C11.4328 0.453739 11.3333 0.693962 11.3333 0.944444V3.30556C11.3333 3.93176 11.5821 4.53232 12.0249 4.97511C12.4677 5.41791 13.0682 5.66667 13.6944 5.66667H16.0556C16.306 5.66667 16.5463 5.56716 16.7234 5.39004C16.9005 5.21293 17 4.9727 17 4.72222C17 4.47174 16.9005 4.23152 16.7234 4.0544C16.5463 3.87728 16.306 3.77778 16.0556 3.77778H13.6944C13.5692 3.77778 13.4491 3.72803 13.3605 3.63947C13.272 3.55091 13.2222 3.4308 13.2222 3.30556V0.944444C13.2222 0.693962 13.1227 0.453739 12.9456 0.276621C12.7685 0.0995036 12.5283 0 12.2778 0ZM11.3333 16.0556C11.3333 16.306 11.4328 16.5463 11.61 16.7234C11.7871 16.9005 12.0273 17 12.2778 17C12.5283 17 12.7685 16.9005 12.9456 16.7234C13.1227 16.5463 13.2222 16.306 13.2222 16.0556V13.6944C13.2222 13.5692 13.272 13.4491 13.3605 13.3605C13.4491 13.272 13.5692 13.2222 13.6944 13.2222H16.0556C16.306 13.2222 16.5463 13.1227 16.7234 12.9456C16.9005 12.7685 17 12.5283 17 12.2778C17 12.0273 16.9005 11.7871 16.7234 11.61C16.5463 11.4328 16.306 11.3333 16.0556 11.3333H13.6944C13.0682 11.3333 12.4677 11.5821 12.0249 12.0249C11.5821 12.4677 11.3333 13.0682 11.3333 13.6944V16.0556Z"\n                    fill="white"\n                  />\n                </svg>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>`;
  const t = document.querySelector(".mg_error_block"),
    n =
      (document.querySelector(".mg_video_thumbnail"),
      document.querySelector(".mg_loader")),
    s = document.querySelector(".mg_video"),
    i = document.querySelector(".mg_main_play"),
    o = document.querySelector(".mg_play_pause_full"),
    l = document.querySelector(".mg_play_pause_full_mobile"),
    a = {
      mg_play_pause_mobile: e.querySelector(".mg_play_pause_mobile"),
      mg_play_pause: e.querySelectorAll(".mg_play_pause"),
      mg_play_: e.querySelectorAll(".mg_play_"),
      mg_pause_: e.querySelectorAll(".mg_pause_"),
    },
    c = document.querySelector(".mg_sound_icon"),
    r = document.querySelector("#mg_sound_slider"),
    d = document.querySelector("#mg_sound_on_"),
    u = document.querySelector("#mg_sound_off_"),
    m = document.querySelector(".mg_timeline_scaler"),
    _ = document.querySelector(".mg_time_indicator"),
    g = document.querySelector(".mg_time_indicator_helper"),
    v = document.querySelector(".mg_timeline_helper"),
    p = document.querySelector(".mg_timeline_helper_time"),
    y = document.querySelector(".mg_starttime"),
    f = document.querySelector(".mg_endtime"),
    h = document.querySelector(".mg_skip_left_button"),
    L = document.querySelector(".mg_skip_right_button"),
    E = document.querySelector(".mg_fullscreen"),
    C = document.querySelector("#mg_fullscreen_on_"),
    w = document.querySelector("#mg_fullscreen_off_"),
    b = document.querySelectorAll(".mg_speed_button"),
    S = document.querySelector(".mg_controls"),
    k = document.querySelector(".mg_download"),
    M = document.querySelector(".mg_frame"),
    q = document.querySelector(".mg_settings_block"),
    x = document.querySelectorAll(".mg_settings_column"),
    T = document.querySelectorAll(".mg_settings_back"),
    A = document.querySelectorAll(".mg_setting_choose"),
    R = document.querySelector("#active_setting_language"),
    P = document.querySelector("#active_setting_quality"),
    H = document.querySelector("#active_setting_speed"),
    G = document.querySelector("#mg_settings_toggler"),
    Y = document.querySelector(".mg_skip_left"),
    O = document.querySelector(".mg_skip_right"),
    $ = document.querySelector(".mg_languages"),
    I = document.querySelector(".mg_qualities"),
    V = document.querySelector(".mg_context_menu"),
    B = document.querySelector(".mg_player_eps_scroll"),
    F = document.querySelector(".mg_player_seasons"),
    j = document.querySelector(".mg_player_eps"),
    Z = document.querySelector(".mg_player_eps_container"),
    z = document.querySelector(".mg_player_ep_button"),
    N = document.querySelector(".mg_eps_closer");
  let D,
    J,
    X,
    W = !1,
    U = MG_PLAYER.seasons ? Object.keys(MG_PLAYER.seasons)[0] : 1,
    K = 1,
    Q = null,
    ee = !1,
    te = !1,
    ne = !0,
    se = !1,
    ie = 0,
    oe = 0;
  function le(e, n) {
    e.includes(".m3u8")
      ? Hls.isSupported()
        ? (Q && Q.destroy(),
          (Q = new Hls({
            maxBufferLength: 16,
            maxMaxBufferLength: 12,
            liveSyncDurationCount: 2,
            enableWorker: !0,
            backBufferLength: 5,
          })),
          Q.loadSource(e),
          Q.attachMedia(s),
          Q.on(Hls.Events.MANIFEST_PARSED, () => {
            null !== n &&
              (n.isPaused
                ? ke("pause")
                : s.play().catch((e) => console.warn("Autoplay blocked:", e)));
          }))
        : s.canPlayType("application/vnd.apple.mpegurl")
        ? ae(e)
        : (t.classList.remove("mg_error_hidden"), re(!1))
      : ae(e),
      (s.playbackRate = D.speed);
  }
  function ae(e) {
    s.src = e;
  }
  function ce(e) {
    e.preventDefault(),
      a.mg_play_pause_mobile.classList.contains("mg_controls_hidden")
        ? (fe(), ue())
        : (a.mg_play_pause_mobile.classList.add("mg_controls_hidden"), ye());
  }
  function re(e) {
    a.mg_play_pause_mobile.classList.toggle("mg_play_pause_mobile_locked", e),
      n.classList.toggle("mg_loader_hidden", !e);
  }
  e.addEventListener("click", () => {
    W = !0;
  }),
    document.addEventListener("click", (t) => {
      e.contains(t.target) || (W = !1);
    }),
    localStorage.getItem("mg_player_controls")
      ? ((D = JSON.parse(localStorage.getItem("mg_player_controls"))),
        (R.textContent = D.lang || "GEO"),
        (P.textContent = D.quality || "HD"),
        (H.textContent = D.speed || "1"))
      : ((D = { lang: "GEO", volume: 1, speed: 1, quality: "HD" }),
        localStorage.setItem("mg_player_controls", JSON.stringify(D))),
    (function () {
      0 === D.volume && Se(),
        "SERIES" === MG_PLAYER.type
          ? j.classList.remove("mg_player_eps_hidden")
          : j.remove(),
        MG_PLAYER.subtitles && Ye(MG_PLAYER.subtitles);
      let e = s.textTracks[0];
      e && (e.mode = "showing"),
        (function () {
          (D.lang = MG_PLAYER.languages[D.lang] ? D.lang : "GEO"),
            (D.quality = MG_PLAYER.languages[D.lang]?.[D.quality]
              ? D.quality
              : "HD");
          const e =
            MG_PLAYER.languages[D.lang]?.[D.quality] ||
            MG_PLAYER.languages.GEO?.[D.quality] ||
            MG_PLAYER.languages.GEO?.HD;
          var t;
          b.forEach((e) => {
            e.innerHTML.trim() == D.speed &&
              (b.forEach((e) => e.classList.remove("mg_button_active")),
              e.classList.add("mg_button_active"));
          }),
            (t = D.volume) < 0 ||
              t > 1 ||
              (qe(0 === t ? "off" : "on"),
              (s.volume = t),
              r.style.setProperty("--progress", 100 * t + "%"),
              (r.value = 100 * t)),
            He({
              lang: D.lang,
              quality: D.quality,
              volume: D.volume,
              speed: D.speed,
            }),
            le(e);
        })(),
        (function () {
          const e = JSON.parse(localStorage.getItem("mg_player")) || [],
            t = e.find((e) => e.id == MG_PLAYER.id);
          t
            ? (function (e, t) {
                (function (e, t) {
                  if (t < 0 || t >= e.length) return e;
                  const n = e.splice(t, 1)[0];
                  e.unshift(n);
                })(e, e.indexOf(t)),
                  "SERIES" == MG_PLAYER.type &&
                    ((U = t.season),
                    (K = t.episode),
                    (function (e) {
                      setTimeout(() => {
                        const t = F.querySelector(
                            `[data-season="${e.season}"]`
                          ),
                          n = B.querySelector(`[data-ep="${e.episode}"]`);
                        t && (F.scrollTop = t.offsetTop - F.offsetTop - 100),
                          n && (B.scrollTop = n.offsetTop - B.offsetTop - 100);
                      }, 0);
                    })(t),
                    le(Oe())),
                  Pe(e, 5),
                  localStorage.setItem("mg_player", JSON.stringify(e));
              })(e, t)
            : (function (e) {
                const t =
                  "SERIES" == MG_PLAYER.type
                    ? { id: MG_PLAYER.id, time: 0, episode: 1, season: U }
                    : { id: MG_PLAYER.id, time: 0 };
                e.unshift(t),
                  Pe(e, 5),
                  localStorage.setItem("mg_player", JSON.stringify(e));
              })(e);
        })(),
        (I.innerHTML = Object.keys(MG_PLAYER.languages[D.lang])
          .map(
            (e) =>
              `<div class='mg_button${
                D.quality === e ? " mg_button_active" : ""
              }'>${e}</div>`
          )
          .join("")),
        ($.innerHTML = Object.keys(MG_PLAYER.languages)
          .map(
            (e) =>
              `<div class='mg_button${
                D.lang === e ? " mg_button_active" : ""
              }'>${e}</div>`
          )
          .join(""));
    })(),
    e.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      const t = e.currentTarget.getBoundingClientRect(),
        n = e.clientX - t.left,
        s = e.clientY - t.top;
      clearTimeout(X),
        (V.style.left = `${n}px`),
        (V.style.top = `${s}px`),
        (V.style.display = "flex"),
        (X = setTimeout(() => {
          V.style.display = "none";
        }, 1500));
    }),
    e.addEventListener("click", function (e) {
      ue(),
        q.classList.contains("mg_settings_hidden") ||
          S.contains(e.target) ||
          he();
    }),
    z.addEventListener("click", function () {
      Z.classList.add("mg_player_eps_container_show"),
        z.classList.add("mg_player_ep_button_hide");
    }),
    N.addEventListener("click", me),
    e.addEventListener("mousemove", ue, { passive: !0 }),
    e.addEventListener("touchmove", ue, { passive: !0 }),
    E.addEventListener("click", Le),
    i.addEventListener("click", xe),
    Y.addEventListener("touchend", function (e) {
      e.preventDefault(),
        Re(
          () => {
            s.currentTime -= 10;
          },
          () => ce(e)
        ),
        (y.innerHTML = Te(s.currentTime)),
        be(s.currentTime);
    }),
    O.addEventListener("touchend", function (e) {
      e.preventDefault(),
        Re(
          () => {
            s.currentTime += 10;
          },
          () => ce(e)
        ),
        (y.innerHTML = Te(s.currentTime)),
        be(s.currentTime);
    }),
    h.addEventListener("click", function () {
      (s.currentTime -= 10),
        (y.innerHTML = Te(s.currentTime)),
        be(s.currentTime);
    }),
    L.addEventListener("click", function () {
      (s.currentTime += 10),
        (y.innerHTML = Te(s.currentTime)),
        be(s.currentTime);
    }),
    o.addEventListener("dblclick", Le),
    o.addEventListener("click", ke),
    l.addEventListener("touchend", ce),
    a.mg_play_pause.forEach((e) => e.addEventListener("click", ke)),
    c.addEventListener("click", Se),
    r.addEventListener("input", function () {
      const e = ((r.value - r.min) / (r.max - r.min)) * 100;
      r.style.setProperty("--progress", e + "%");
      const t = r.value / 100;
      qe(0 === t ? "off" : "on"),
        (D.volume = t),
        (s.volume = t),
        He({ volume: t });
    }),
    G.addEventListener("click", function () {
      q.classList.toggle("mg_settings_hidden");
    }),
    M.addEventListener("click", async function () {
      document.pictureInPictureElement
        ? (await document.exitPictureInPicture(), ke("pause"))
        : await s.requestPictureInPicture();
    }),
    k.addEventListener("click", function () {
      window.open(s.src, "_blank");
    }),
    m.addEventListener("click", function (e) {
      if (!te) return;
      const t = (100 / m.offsetWidth) * e.offsetX;
      (_.style.width = t + "%"), (s.currentTime = (s.duration / 100) * t);
    }),
    m.addEventListener("touchstart", we, { passive: !0 }),
    m.addEventListener("touchmove", we, { passive: !0 }),
    m.addEventListener("touchend", Ce, { passive: !0 }),
    m.addEventListener("pointermove", function (e) {
      if ("touch" === e.pointerType || !te) return;
      const t = (100 / m.offsetWidth) * e.offsetX;
      (v.style.opacity = 1),
        (v.style.transform = `translateX(${e.offsetX - v.offsetWidth / 2}px)`);
      const n = Ae(t);
      n && ((p.innerHTML = Te(n)), (g.style.width = t + "%"));
    }),
    m.addEventListener(
      "touchmove",
      function (e) {
        if (!te) return;
        const t = e.touches[0],
          n =
            (100 / m.offsetWidth) *
            (t.clientX - m.getBoundingClientRect().left);
        (v.style.opacity = 1),
          (v.style.transform = `translateX(${
            t.clientX - m.getBoundingClientRect().left - v.offsetWidth / 2
          }px)`);
        const s = Ae(n);
        (p.innerHTML = Te(s)), (g.style.width = n + "%");
      },
      { passive: !0 }
    ),
    m.addEventListener("mouseout", Ce),
    document.addEventListener("keydown", function (e) {
      if (W)
        switch (e.key) {
          case "ArrowLeft":
            (s.currentTime -= 10), (y.innerHTML = Te(s.currentTime));
            break;
          case "ArrowRight":
            (s.currentTime += 10), (y.innerHTML = Te(s.currentTime));
            break;
          case "ArrowUp":
            !(function () {
              const e = Math.min(s.volume + 0.05, 1);
              qe(1 === e ? "on" : "off"),
                (s.volume = e),
                (r.value = 100 * e),
                r.style.setProperty("--progress", 100 * e + "%"),
                He({ volume: e });
            })();
            break;
          case "ArrowDown":
            !(function () {
              const e = Math.max(s.volume - 0.05, 0);
              qe(0 === e ? "off" : "on"),
                (s.volume = e),
                (r.value = 100 * e),
                r.style.setProperty("--progress", 100 * e + "%"),
                He({ volume: e });
            })();
            break;
          case "f":
          case "F":
            Le();
            break;
          case " ":
            ke(), e.preventDefault();
        }
    }),
    s.addEventListener("pause", () => ke("pause")),
    s.addEventListener("play", () => ke("play")),
    s.addEventListener("waiting", () => re(!0)),
    s.addEventListener("waitingforkey", () => re(!0)),
    s.addEventListener("playing", () => {
      t.classList.add("mg_error_hidden"), re(!1);
    }),
    s.addEventListener("canplaythrough", () => re(!1)),
    s.addEventListener("loadeddata", () => {
      t.classList.add("mg_error_hidden");
      const e = (function () {
        const e = JSON.parse(localStorage.getItem("mg_player")),
          t = e.findIndex((e) => e.id == MG_PLAYER.id);
        return -1 !== t ? e[t].time : 0;
      })();
      (s.currentTime = e.toFixed(6)),
        be(e),
        (te = !0),
        re(!1),
        (y.innerHTML = Te(s.currentTime)),
        (f.innerHTML = Te(s.duration));
    }),
    s.addEventListener("timeupdate", function () {
      (y.innerHTML = Te(s.currentTime)),
        requestAnimationFrame(() => be(s.currentTime)),
        ++ie >= 12 &&
          ((function (e) {
            const t = JSON.parse(localStorage.getItem("mg_player")),
              n = t.findIndex((e) => e.id == MG_PLAYER.id);
            (t[n].time = e),
              localStorage.setItem("mg_player", JSON.stringify(t));
          })(s.currentTime),
          (ie = 0));
    }),
    s.addEventListener("error", () => {
      t.classList.remove("mg_error_hidden"), re(!1);
    });
  const de = (function (e) {
    let t;
    return function (...n) {
      clearTimeout(t), (t = setTimeout(() => e.apply(this, n), 2500));
    };
  })(() => {
    ee &&
      !s.paused &&
      !se &&
      q.classList.contains("mg_settings_hidden") &&
      ye();
  });
  function ue() {
    ee && (fe(), de());
  }
  function me() {
    Z.classList.remove("mg_player_eps_container_show"),
      z.classList.remove("mg_player_ep_button_hide");
  }
  function _e(e) {
    if (se) {
      const t =
        (100 / m.offsetWidth) * (e.clientX - m.getBoundingClientRect().left);
      (_.style.width = `${t}%`), (s.currentTime = Ae(t));
    }
  }
  function ge(e) {
    const t = e.touches[0];
    if (se) {
      const e =
        (100 / m.offsetWidth) * (t.clientX - m.getBoundingClientRect().left);
      _.style.width = `${e}%`;
    }
  }
  MG_PLAYER.seasons || j.remove(),
    m.addEventListener("mousedown", () => {
      (se = !0), (ne = !1);
      const e = (e) => _e(e),
        t = () => {
          (se = !1),
            (ne = !0),
            document.removeEventListener("mousemove", e),
            document.removeEventListener("mouseup", t);
        };
      document.addEventListener("mousemove", e),
        document.addEventListener("mouseup", t);
    }),
    m.addEventListener(
      "touchstart",
      (e) => {
        (se = !0),
          (ne = !1),
          _e(e.touches[0]),
          m.addEventListener("touchmove", ge, { passive: !0 });
      },
      { passive: !0 }
    ),
    document.addEventListener("touchend", () => {
      se &&
        ((se = !1),
        (ne = !0),
        m.removeEventListener("touchmove", ge),
        (v.style.opacity = 0),
        (g.style.width = "0%"));
    }),
    document.addEventListener("click", () => {
      V.style.display = "none";
    });
  const ve = Array.from(I.children),
    pe = Array.from($.children);
  function ye() {
    S.classList.add("mg_controls_hidden"),
      Z.classList.contains("mg_player_eps_container_show") ||
        (j.classList.add("mg_controls_hidden"), me()),
      e.classList.add("mg_hide_cursor"),
      a.mg_play_pause_mobile.classList.add("mg_controls_hidden"),
      he();
  }
  function fe() {
    S.classList.remove("mg_controls_hidden"),
      j.classList.remove("mg_controls_hidden"),
      e.classList.remove("mg_hide_cursor"),
      a.mg_play_pause_mobile.classList.remove("mg_controls_hidden");
  }
  function he() {
    q.classList.add("mg_settings_hidden"),
      setTimeout(() => {
        x.forEach((e) => e.classList.add("mg_settings_column_hide")),
          x[0].classList.remove("mg_settings_column_hide");
      }, 200);
  }
  function Le() {
    const t =
        e.requestFullscreen ||
        e.mozRequestFullScreen ||
        e.webkitRequestFullscreen ||
        e.msRequestFullscreen,
      n =
        document.exitFullscreen ||
        document.mozCancelFullScreen ||
        document.webkitExitFullscreen ||
        document.msExitFullscreen;
    Ee()
      ? (screen.orientation?.unlock(),
        n.call(document),
        (w.style.display = "none"),
        (C.style.display = "block"))
      : (t.call(e),
        screen.orientation?.lock("landscape").then(() => {}),
        (C.style.display = "none"),
        (w.style.display = "block"));
  }
  function Ee() {
    return document.fullscreenElement === e;
  }
  function Ce() {
    (v.style.opacity = 0), (g.style.width = "0%");
  }
  function we(e) {
    if (!te) return;
    const t =
        e instanceof MouseEvent
          ? e.offsetX
          : e.touches[0].clientX - m.getBoundingClientRect().left,
      n = (100 / m.offsetWidth) * t;
    (_.style.width = n + "%"),
      (s.currentTime = ((s.duration / 100) * n).toFixed(6)),
      (y.innerHTML = Te(s.currentTime));
  }
  function be(e) {
    if (te && ne) {
      const t = (100 / s.duration) * e;
      _.style.width = t + "%";
    }
  }
  function Se() {
    const e = s.volume > 0 ? 0 : D.volume > 0.08 ? D.volume : 1;
    qe(0 === e ? "off" : "on"),
      (s.volume = e),
      (r.value = 100 * e),
      r.style.setProperty("--progress", 100 * e + "%"),
      He({ volume: e });
  }
  function ke(e) {
    ("play" === e && !s.paused) || ("pause" === e && s.paused)
      ? Me(e)
      : (ue(), s.paused ? (Me("play"), s.play()) : (Me("pause"), s.pause()));
  }
  function Me(e) {
    const t = "play" === e ? ["none", "block"] : ["block", "none"];
    a.mg_play_.forEach((e) => (e.style.display = t[0])),
      a.mg_pause_.forEach((e) => (e.style.display = t[1]));
  }
  function qe(e) {
    (d.style.display = "off" === e ? "none" : "block"),
      (u.style.display = "off" === e ? "block" : "none");
  }
  function xe() {
    s.play(),
      i.parentNode.removeChild(i),
      (ee = !0),
      setTimeout(() => {
        W = !0;
      }, 50),
      Me("play");
  }
  function Te(e) {
    const t = Math.floor(e / 3600),
      n = Math.floor((e % 3600) / 60),
      s = Math.floor(e % 60);
    return t > 0
      ? `${t}:${String(n).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      : `${n}:${String(s).padStart(2, "0")}`;
  }
  function Ae(e) {
    return s.duration ? (s.duration / 100) * e : s.currentTime;
  }
  function Re(e, t) {
    oe++,
      1 === oe
        ? (J = setTimeout(() => {
            1 === oe && t(), (oe = 0);
          }, 300))
        : 2 === oe && (clearTimeout(J), e(), (oe = 0));
  }
  function Pe(e, t) {
    e.length > t && e.splice(t);
  }
  function He({ lang: e, volume: t, speed: n, quality: s }) {
    const i = JSON.parse(localStorage.getItem("mg_player_controls")) || {};
    (i.volume = t ?? i.volume),
      (i.lang = e ?? i.lang),
      (i.quality = s ?? i.quality),
      (i.speed = n ?? i.speed),
      (R.textContent = e ? i.lang.toString() : "GEO"),
      (P.textContent = s ? i.quality.toString() : "HD"),
      (H.textContent = n ? i.speed.toString() : "1"),
      localStorage.setItem("mg_player_controls", JSON.stringify(i));
  }
  function Ge() {
    const e = $e().season;
    (B.innerHTML = MG_PLAYER.seasons[U].map(
      (t, n) =>
        `\n      <div data-ep="${n + 1}" class="mg_ep_button ${
          K == n + 1 && e == U ? "mg_ep_button_active" : ""
        }">\n        ${n + 1} ეპიზოდი\n      </div>`
    ).join("")),
      Array.from(B.children).forEach((e) => {
        e.addEventListener("click", () => {
          (K = e.getAttribute("data-ep")),
            t.classList.add("mg_error_hidden"),
            (function (e) {
              le(e),
                MG_PLAYER.seasons[U][K - 1].subtitles?.GEO &&
                  Ye(MG_PLAYER.seasons[U][K - 1].subtitles.GEO),
                (s.currentTime = 0);
              const t = JSON.parse(localStorage.getItem("mg_player"));
              var n;
              (t[0].time = 0),
                (t[0].episode = parseInt(K)),
                (t[0].season = U),
                localStorage.setItem("mg_player", JSON.stringify(t)),
                (MG_PLAYER.languages = MG_PLAYER.seasons[U][K - 1].languages),
                ee || xe(),
                Me((n = "play")),
                s[n]();
            })(Oe()),
            Array.from(B.children).forEach((e) =>
              e.classList.remove("mg_ep_button_active")
            ),
            e.classList.add("mg_ep_button_active"),
            me();
        });
      });
  }
  function Ye(e) {
    const t = document.querySelector("#mg_subtitles");
    t && t.remove();
    const n = document.createElement("track");
    (n.id = "mg_subtitles"),
      (n.src = e),
      (n.kind = "subtitles"),
      (n.srclang = "en"),
      (n.label = "English"),
      s.appendChild(n);
    let i = s.textTracks[0];
    i && (i.mode = "showing");
  }
  function Oe() {
    const e = MG_PLAYER.seasons[U][K - 1].languages[D.lang];
    return (
      e?.[D.quality] ||
      Object.values(e || {})[0] ||
      Object.values(Object.values(MG_PLAYER.seasons[U][K - 1].languages)[0])[0]
    );
  }
  function $e() {
    const e = JSON.parse(localStorage.getItem("mg_player"));
    return e?.find((e) => e.id == MG_PLAYER.id) || null;
  }
  ve.forEach((e) => {
    e.addEventListener("click", () => {
      if (!e.classList.contains("mg_button_active")) {
        const t = s.currentTime,
          n = s.paused;
        le(MG_PLAYER.languages[D.lang][e.textContent], { isPaused: n }),
          He({ quality: e.textContent }),
          (P.textContent = e.textContent),
          (s.currentTime = t.toFixed(6)),
          n || s.play(),
          ve.forEach((e) => e.classList.remove("mg_button_active")),
          e.classList.add("mg_button_active");
      }
    });
  }),
    pe.forEach((e) => {
      e.addEventListener("click", () => {
        if (
          (t.classList.add("mg_error_hidden"),
          !e.classList.contains("mg_button_active"))
        ) {
          const t = s.currentTime,
            n = s.paused;
          le(MG_PLAYER.languages[e.textContent][D.quality], { isPaused: n }),
            He({ lang: e.textContent }),
            (R.textContent = e.textContent),
            (s.currentTime = t.toFixed(6)),
            n || s.play(),
            pe.forEach((e) => e.classList.remove("mg_button_active")),
            e.classList.add("mg_button_active");
        }
      });
    }),
    e.addEventListener("click", (e) => {
      if (e.target.classList.contains("mg_speed_button")) {
        const t = e.target;
        t.classList.contains("mg_button_active") ||
          ((s.playbackRate = t.textContent),
          document
            .querySelectorAll(".mg_speed_button")
            .forEach((e) => e.classList.remove("mg_button_active")),
          He({ speed: t.textContent }),
          (H.textContent = t.textContent),
          t.classList.add("mg_button_active"));
      }
    }),
    document.addEventListener("leavepictureinpicture", () => {
      ke("pause");
    }),
    A.forEach((e) => {
      e.addEventListener("click", () => {
        x.forEach((e) => e.classList.add("mg_settings_column_hide")),
          x[parseInt(e.getAttribute("data-col-index"))].classList.remove(
            "mg_settings_column_hide"
          );
      });
    }),
    T.forEach((e) => {
      e.addEventListener("click", () => {
        x.forEach((e) => e.classList.add("mg_settings_column_hide")),
          x[0].classList.remove("mg_settings_column_hide");
      });
    }),
    window
      .matchMedia("(orientation: landscape)")
      .addEventListener("change", (t) => {
        t.matches
          ? ee &&
            (e.requestFullscreen?.(),
            (C.style.display = "none"),
            (w.style.display = "block"))
          : (Ee() &&
              (document.exitFullscreen?.(),
              (w.style.display = "none"),
              (C.style.display = "block")),
            screen.orientation?.unlock());
      }),
    "SERIES" == MG_PLAYER.type &&
      ((U = U ?? 1),
      (K = K ?? 1),
      (F.innerHTML = Object.keys(MG_PLAYER.seasons)
        .map(
          (e) =>
            `\n      <div data-season="${e}" class="mg_se_button ${
              U == e ? "mg_se_button_active" : ""
            }">\n        ${e}\n      </div>`
        )
        .join("")),
      Array.from(F.children).forEach((e) => {
        e.addEventListener("click", () => {
          (U = e.getAttribute("data-season")), Ge();
          const t = B.querySelector(`[data-ep="${K}"]`),
            n = $e().season;
          (B.scrollTop = t && n == U ? t.offsetTop - B.offsetTop - 100 : 0),
            Array.from(F.children).forEach((e) =>
              e.classList.remove("mg_se_button_active")
            ),
            e.classList.add("mg_se_button_active");
        });
      }),
      Ge());
})();
