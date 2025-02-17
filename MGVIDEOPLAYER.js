// * MAIN
const mg_player = document.querySelector(".mg_player");
mg_player.innerHTML = `      <div class="mg_player_eps mg_player_eps_hidden">
        <div class="mg_player_ep_button">ეპიზოდები</div>
        <div class="mg_player_eps_container">
          <div class="mg_player_eps_scroll"></div>
          <div class="mg_player_seasons_scroll">
            <div class="mg_eps_closer">
              <svg
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0246 11.5L17.2921 7.2324C17.4947 7.03022 17.6086 6.75586 17.6089 6.46968C17.6091 6.1835 17.4957 5.90894 17.2935 5.7064C17.0913 5.50387 16.817 5.38994 16.5308 5.38969C16.2446 5.38943 15.97 5.50288 15.7675 5.70506L11.4999 9.97263L7.23234 5.70506C7.0298 5.50252 6.7551 5.38873 6.46867 5.38873C6.18223 5.38873 5.90753 5.50252 5.705 5.70506C5.50246 5.90759 5.38867 6.1823 5.38867 6.46873C5.38867 6.75516 5.50246 7.02986 5.705 7.2324L9.97257 11.5L5.705 15.7676C5.50246 15.9701 5.38867 16.2448 5.38867 16.5312C5.38867 16.8177 5.50246 17.0924 5.705 17.2949C5.90753 17.4974 6.18223 17.6112 6.46867 17.6112C6.7551 17.6112 7.0298 17.4974 7.23234 17.2949L11.4999 13.0273L15.7675 17.2949C15.97 17.4974 16.2447 17.6112 16.5312 17.6112C16.8176 17.6112 17.0923 17.4974 17.2948 17.2949C17.4974 17.0924 17.6112 16.8177 17.6112 16.5312C17.6112 16.2448 17.4974 15.9701 17.2948 15.7676L13.0246 11.5Z"
                  fill="white"
                  fill-opacity="0.7"
                />
              </svg>
            </div>
            <div class="mg_player_seasons"></div>
          </div>
        </div>
      </div>
      <div class="mg_error_block mg_error_hidden">
        <div class="mg_error">წარმოიშვა შეცდომა სცადეთ სხვა ფლეერით</div>
      </div>
      <div class="mg_context_menu">MG PLAYER V3.2</div>
      <div class="mg_loader mg_gtc mg_loader_hidden">
        <div class="mg_loader_spinner"></div>
      </div>
      <video class="mg_video"></video>
      <div class="mg_main_play">
        <img class="mg_video_thumbnail" />
        <div class="mg_play_icon">
          <svg
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4014 7.39629C13.5902 7.51463 13.7447 7.68071 13.8497 7.87794C13.9546 8.07517 14.0062 8.29664 13.9994 8.52023C13.9926 8.74381 13.9275 8.96168 13.8108 9.15207C13.694 9.34247 13.5297 9.49871 13.3341 9.6052L1.876 15.8459C1.68243 15.9513 1.46498 16.0043 1.24493 15.9997C1.02488 15.9952 0.809774 15.9333 0.62067 15.82C0.431566 15.7067 0.274948 15.546 0.166149 15.3536C0.0573496 15.1612 9.79929e-05 14.9436 0 14.7223V1.27831C-5.35092e-07 1.05013 0.0607289 0.8261 0.175884 0.629493C0.291038 0.432885 0.45642 0.270862 0.654859 0.160246C0.853298 0.049629 1.07756 -0.0055488 1.30436 0.000440518C1.53116 0.00642984 1.75224 0.0733681 1.94463 0.194306L13.4014 7.39629Z"
              fill="white"
              fill-opacity="0.9"
            />
          </svg>
        </div>
      </div>
      <div class="mg_skip_left"></div>
      <div class="mg_skip_right"></div>

      <div class="mg_play_pause_full"></div>
      <div class="mg_play_pause_full mg_play_pause_full_mobile"></div>
      <div class="mg_play_pause mg_gtc mg_play_pause_mobile mg_controls_hidden">
        <svg class="mg_play_" viewBox="0 0 16 16">
          <path fill="white" opacity="0.9" d="M2 1v14l12-7z" />
        </svg>
        <svg class="mg_pause_" viewBox="0 0 256 384">
          <path
            fill="white"
            opacity="0.9"
            d="M0 341V43h85v298H0zM171 43h85v298h-85V43z"
          />
        </svg>
      </div>
      <div class="mg_controls mg_controls_hidden">
        <div class="mg_controls_shadow"></div>
        <div class="mg_controls_bar">
          <div class="mg_timeline_scaler">
            <div class="mg_timeline_helper">
              <video class="mg_helper_video" muted></video>
              <p class="mg_timeline_helper_time">00:00</p>
            </div>
            <div class="mg_timeline">
              <div class="mg_time_indicator"></div>
              <div class="mg_time_indicator_helper"></div>
            </div>
          </div>
          <div class="mg_controls_row">
            <div class="mg_first_row">
              <div class="mg_play_pause mg_gtc">
                <svg class="mg_play_" viewBox="0 0 16 16">
                  <path fill="white" opacity="0.9" d="M2 1v14l12-7z" />
                </svg>
                <svg class="mg_pause_" viewBox="0 0 256 384">
                  <path
                    fill="white"
                    opacity="0.9"
                    d="M0 341V43h85v298H0zM171 43h85v298h-85V43z"
                  />
                </svg>
              </div>
              <div class="mg_sound">
                <div class="mg_sound_mob"></div>
                <div class="mg_sound_icon mg_gtc">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="mg_sound_on_"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="white"
                      opacity="0.9"
                      fill-rule="evenodd"
                      d="m403.966 426.944l-33.285-26.63c74.193-81.075 74.193-205.015-.001-286.09l33.285-26.628c86.612 96.712 86.61 242.635.001 339.348M319.58 155.105l-33.324 26.659c39.795 42.568 39.794 108.444.001 151.012l33.324 26.658c52.205-58.22 52.205-146.109-.001-204.329m-85.163-69.772l-110.854 87.23H42.667v170.666h81.02l110.73 85.458z"
                    />
                  </svg>

                  <svg id="mg_sound_off_" < viewBox="0 0 512 512">
                    <path
                      fill="white"
                      opacity="0.9"
                      fill-rule="evenodd"
                      d="m403.375 257.27l59.584 59.584l-30.167 30.166l-59.583-59.583l-59.584 59.583l-30.166-30.166l59.583-59.584l-59.583-59.583l30.166-30.166l59.584 59.583l59.583-59.583l30.167 30.166zM234.417 85.333l-110.854 87.23H42.667v170.666h81.02l110.73 85.458z"
                    />
                  </svg>
                </div>
                <input
                  type="range"
                  id="mg_sound_slider"
                  min="0"
                  value="100"
                  max="100"
                />
              </div>
              <div class="mg_time">
                <p class="mg_starttime">00:00</p>
                /
                <p class="mg_endtime">00:00</p>
              </div>

              <div class="mg_skip_left_button mg_mob_off">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    fill="white"
                    opacity="0.9"
                    d="M4.5 4.252v3.422c2.95-3.16 7.172-4.737 11.518-4.672c5.942.088 10.698 3.268 13.784 8.074a1.25 1.25 0 1 1-2.104 1.35c-2.713-4.225-6.751-6.85-11.717-6.925c-4.013-.06-7.768 1.503-10.192 4.5H9.75a1.25 1.25 0 1 1 0 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25v-7a1.25 1.25 0 0 1 2.5 0Zm7.986 10.847c.463.196.764.65.764 1.152V27.5a1.25 1.25 0 0 1-2.5 0v-8.47a23.25 23.25 0 0 1-1.607 1.043a1.25 1.25 0 0 1-1.286-2.144c1.046-.628 1.633-1.054 2.056-1.411c.31-.262.531-.483.81-.761c.12-.12.251-.252.405-.401a1.25 1.25 0 0 1 1.358-.257Zm4.463 2.2C17.787 15.882 19.18 15 21.1 15c1.923 0 3.314.88 4.152 2.298c.781 1.322 1.035 3.023 1.035 4.701c0 1.68-.254 3.38-1.035 4.702C24.414 28.12 23.022 29 21.1 29c-1.922 0-3.313-.88-4.15-2.298c-.782-1.322-1.036-3.023-1.036-4.702c0-1.678.254-3.38 1.035-4.701Zm2.152 1.272c-.448.759-.687 1.933-.687 3.43c0 1.496.239 2.67.687 3.43c.393.663.97 1.07 2 1.07s1.606-.407 1.999-1.07c.448-.76.687-1.934.687-3.43c0-1.497-.239-2.671-.687-3.43c-.393-.664-.97-1.07-2-1.07s-1.607.406-1.999 1.07Z"
                  />
                </svg>
              </div>
              <div class="mg_skip_right_button mg_mob_off">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    fill="white"
                    opacity="0.9"
                    d="M16.019 5.501c4.013-.06 7.768 1.503 10.192 4.5H22.25a1.25 1.25 0 0 0 0 2.5h6.5c.69 0 1.25-.56 1.25-1.25v-7a1.25 1.25 0 0 0-2.5 0v3.423c-2.95-3.16-7.172-4.737-11.518-4.672C10.04 3.09 5.284 6.27 2.197 11.076a1.25 1.25 0 1 0 2.104 1.35c2.713-4.225 6.751-6.85 11.717-6.925Zm5.081 9.5c-1.922 0-3.313.88-4.15 2.298c-.782 1.322-1.036 3.023-1.036 4.701c0 1.68.254 3.38 1.035 4.702C17.787 28.12 19.18 29 21.1 29c1.923 0 3.314-.88 4.152-2.298c.781-1.322 1.035-3.023 1.035-4.702c0-1.678-.254-3.379-1.035-4.701c-.838-1.417-2.23-2.298-4.152-2.298Zm-2.686 7c0-1.497.239-2.671.687-3.43c.393-.664.97-1.07 2-1.07s1.606.406 1.999 1.07c.448.759.687 1.933.687 3.43c0 1.496-.239 2.67-.687 3.43c-.393.663-.97 1.07-2 1.07s-1.607-.407-1.999-1.07c-.448-.76-.687-1.934-.687-3.43Zm-5.164-5.75a1.25 1.25 0 0 0-2.122-.895c-.154.15-.285.28-.405.4c-.279.279-.5.5-.81.762c-.423.357-1.01.783-2.056 1.411a1.25 1.25 0 1 0 1.286 2.144a23.25 23.25 0 0 0 1.607-1.043v8.47a1.25 1.25 0 0 0 2.5 0V16.25Z"
                  />
                </svg>
              </div>
            </div>
            <div class="mg_last_row">
              <div class="mg_download mg_mob_off">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 5.66667L8 9M8 9L11.5 5.66667M8 9V1M15 9V11.6667C15 12.0203 14.8525 12.3594 14.5899 12.6095C14.3274 12.8595 13.9713 13 13.6 13H2.4C2.0287 13 1.6726 12.8595 1.41005 12.6095C1.1475 12.3594 1 12.0203 1 11.6667V9"
                    stroke="white"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="mg_frame mg_gtc">
                <svg
                  id="mg_frame_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 472 384"
                >
                  <path
                    fill="white"
                    opacity="0.9"
                    d="M384 85v128H213V85h171zm43-85q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0h384zm0 342V42H43v300h384z"
                  />
                </svg>
              </div>
              <div class="mg_settings mg_gtc">
                <div class="mg_settings_block mg_settings_hidden">
                  <div class="mg_cols">
                    <p>ხარისხი</p>
                    <div class="mg_qualities"></div>
                  </div>
                  <div class="mg_cols">
                    <p>ენა</p>
                    <div class="mg_languages"></div>
                  </div>
                  <div class="mg_cols">
                    <p>სისწრაფე</p>
                    <div class="mg_button mg_speed_button">1.5</div>
                    <div class="mg_button mg_speed_button">1.25</div>
                    <div class="mg_button mg_speed_button mg_button_active">
                      1
                    </div>
                    <div class="mg_button mg_speed_button">0.75</div>
                    <div class="mg_button mg_speed_button">0.5</div>
                  </div>
                </div>
                <svg
                  id="mg_settings_toggler"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0975 8.78873L15.8286 10.1033C16.0082 10.2535 16.0466 10.4288 15.944 10.6291L14.2898 13.4085C14.1872 13.6088 14.0205 13.6588 13.7897 13.5587L11.7508 12.77C11.2892 13.0955 10.8275 13.3584 10.3659 13.5587L10.0581 15.662C10.0325 15.8873 9.89144 16 9.63497 16H6.36503C6.13421 16 5.99315 15.8873 5.94186 15.662L5.6341 13.5587C5.14681 13.3584 4.68517 13.0955 4.24918 12.77L2.21027 13.5587C1.97945 13.6338 1.81275 13.5837 1.71016 13.4085L0.0559563 10.6291C-0.0466302 10.4288 -0.00816028 10.2535 0.171366 10.1033L1.90251 8.78873C1.87687 8.48826 1.86404 8.22535 1.86404 8C1.86404 7.77465 1.87687 7.51174 1.90251 7.21127L0.171366 5.89671C-0.00816028 5.74648 -0.0466302 5.57121 0.0559563 5.37089L1.71016 2.59155C1.8384 2.39124 2.0051 2.34116 2.21027 2.44131L4.24918 3.23005C4.71082 2.90454 5.17246 2.64163 5.6341 2.44131L5.94186 0.338028C5.99315 0.112676 6.13421 0 6.36503 0H9.63497C9.89144 0 10.0325 0.112676 10.0581 0.338028L10.3659 2.44131C10.8532 2.64163 11.3148 2.90454 11.7508 3.23005L13.7897 2.44131C14.0205 2.3662 14.1872 2.41628 14.2898 2.59155L15.944 5.37089C16.0466 5.57121 16.0082 5.74648 15.8286 5.89671L14.0975 7.21127C14.1488 7.51174 14.1744 7.77465 14.1744 8C14.1744 8.22535 14.1488 8.48826 14.0975 8.78873ZM8 10.8169C8.78222 10.8169 9.45545 10.5415 10.0197 9.99061C10.5839 9.43975 10.866 8.77621 10.866 8C10.866 7.22379 10.5839 6.56025 10.0197 6.00939C9.45545 5.45853 8.78222 5.1831 8 5.1831C7.21778 5.1831 6.54455 5.45853 5.98033 6.00939C5.4161 6.56025 5.13399 7.22379 5.13399 8C5.13399 8.77621 5.4161 9.43975 5.98033 9.99061C6.54455 10.5415 7.21778 10.8169 8 10.8169Z"
                    fill="white"
                    fill-opacity="0.9"
                  />
                </svg>
              </div>
              <div class="mg_fullscreen mg_gtc">
                <svg
                  id="mg_fullscreen_on_"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.25 1H16V4.75"
                    stroke="white"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 12.25V16H12.25"
                    stroke="white"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.75 16H1V12.25"
                    stroke="white"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 4.75V1H4.75"
                    stroke="white"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  id="mg_fullscreen_off_"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.66667 0.944444C5.66667 0.693962 5.56716 0.453739 5.39004 0.276621C5.21293 0.0995036 4.9727 0 4.72222 0C4.47174 0 4.23152 0.0995036 4.0544 0.276621C3.87728 0.453739 3.77778 0.693962 3.77778 0.944444V3.30556C3.77778 3.4308 3.72803 3.55091 3.63947 3.63947C3.55091 3.72803 3.4308 3.77778 3.30556 3.77778H0.944444C0.693962 3.77778 0.453739 3.87728 0.276621 4.0544C0.0995036 4.23152 0 4.47174 0 4.72222C0 4.9727 0.0995036 5.21293 0.276621 5.39004C0.453739 5.56716 0.693962 5.66667 0.944444 5.66667H3.30556C3.93176 5.66667 4.53232 5.41791 4.97511 4.97511C5.41791 4.53232 5.66667 3.93176 5.66667 3.30556V0.944444ZM5.66667 16.0556C5.66667 16.306 5.56716 16.5463 5.39004 16.7234C5.21293 16.9005 4.9727 17 4.72222 17C4.47174 17 4.23152 16.9005 4.0544 16.7234C3.87728 16.5463 3.77778 16.306 3.77778 16.0556V13.6944C3.77778 13.5692 3.72803 13.4491 3.63947 13.3605C3.55091 13.272 3.4308 13.2222 3.30556 13.2222H0.944444C0.693962 13.2222 0.453739 13.1227 0.276621 12.9456C0.0995036 12.7685 0 12.5283 0 12.2778C0 12.0273 0.0995036 11.7871 0.276621 11.61C0.453739 11.4328 0.693962 11.3333 0.944444 11.3333H3.30556C3.93176 11.3333 4.53232 11.5821 4.97511 12.0249C5.41791 12.4677 5.66667 13.0682 5.66667 13.6944V16.0556ZM12.2778 0C12.0273 0 11.7871 0.0995036 11.61 0.276621C11.4328 0.453739 11.3333 0.693962 11.3333 0.944444V3.30556C11.3333 3.93176 11.5821 4.53232 12.0249 4.97511C12.4677 5.41791 13.0682 5.66667 13.6944 5.66667H16.0556C16.306 5.66667 16.5463 5.56716 16.7234 5.39004C16.9005 5.21293 17 4.9727 17 4.72222C17 4.47174 16.9005 4.23152 16.7234 4.0544C16.5463 3.87728 16.306 3.77778 16.0556 3.77778H13.6944C13.5692 3.77778 13.4491 3.72803 13.3605 3.63947C13.272 3.55091 13.2222 3.4308 13.2222 3.30556V0.944444C13.2222 0.693962 13.1227 0.453739 12.9456 0.276621C12.7685 0.0995036 12.5283 0 12.2778 0ZM11.3333 16.0556C11.3333 16.306 11.4328 16.5463 11.61 16.7234C11.7871 16.9005 12.0273 17 12.2778 17C12.5283 17 12.7685 16.9005 12.9456 16.7234C13.1227 16.5463 13.2222 16.306 13.2222 16.0556V13.6944C13.2222 13.5692 13.272 13.4491 13.3605 13.3605C13.4491 13.272 13.5692 13.2222 13.6944 13.2222H16.0556C16.306 13.2222 16.5463 13.1227 16.7234 12.9456C16.9005 12.7685 17 12.5283 17 12.2778C17 12.0273 16.9005 11.7871 16.7234 11.61C16.5463 11.4328 16.306 11.3333 16.0556 11.3333H13.6944C13.0682 11.3333 12.4677 11.5821 12.0249 12.0249C11.5821 12.4677 11.3333 13.0682 11.3333 13.6944V16.0556Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>`;

const mg_error_block = document.querySelector(".mg_error_block");
const mg_video_thumbnail = document.querySelector(".mg_video_thumbnail");
const mg_loader = document.querySelector(".mg_loader");
const mg_video = document.querySelector(".mg_video");
const mg_main_play = document.querySelector(".mg_main_play");
const mg_play_pause_full = document.querySelector(".mg_play_pause_full");
const mg_play_pause_full_mobile = document.querySelector(
  ".mg_play_pause_full_mobile"
);

// * PLAY PAUSE
const mg_play_pause_mobile = document.querySelector(".mg_play_pause_mobile");
const mg_play_pause = document.querySelectorAll(".mg_play_pause");
const mg_play_ = document.querySelectorAll(".mg_play_");
const mg_pause_ = document.querySelectorAll(".mg_pause_");

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
const mg_player_eps = document.querySelector(".mg_player_eps");
const mg_player_eps_container = document.querySelector(
  ".mg_player_eps_container"
);
const mg_player_ep_button = document.querySelector(".mg_player_ep_button");
const mg_eps_closer = document.querySelector(".mg_eps_closer");
let active_season = null;
let active_episode = null;

function InitializeVideo(videoUrl) {
  if (videoUrl.includes(".m3u8")) {
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(mg_video);

      hls.on(Hls.Events.MANIFEST_PARSED, function () {});
      hls.on(Hls.Events.ERROR, function () {
        mg_error_block.classList.remove("mg_error_block_hidden");
      });
    } else if (mg_video.canPlayType("application/vnd.apple.mpegurl")) {
      changeVideoUrl(videoUrl);
    } else {
      mg_error_block.classList.remove("mg_error_block_hidden");
    }
  } else {
    changeVideoUrl(videoUrl);
  }
}

let mg_main_controls;

function changeVideoUrl(url) {
  mg_video.src = url;
  mg_helper_video.src = url;
}

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
  if (MG_PLAYER.type == "SERIES") {
    mg_player_eps.classList.remove("mg_player_eps_hidden");
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
      if (MG_PLAYER.type == "SERIES") {
        if (
          get_cur[0].season <= Object.keys(MG_PLAYER.seasons).length &&
          get_cur[0].episode <= MG_PLAYER.seasons[get_cur[0].season].length
        ) {
          active_season = get_cur[0].season;
          active_episode = get_cur[0].episode;

          // SCROLL ON ACTIVE EP AND SEASON
          setTimeout(() => {
            const seasonElement = mg_player_seasons.querySelector(
              `[data-season="${get_cur[0]?.season}"]`
            );
            const episodeElement = mg_player_eps_scroll.querySelector(
              `[data-ep="${get_cur[0]?.episode}"]`
            );

            if (seasonElement && mg_player_seasons) {
              mg_player_seasons.scrollTop =
                seasonElement.offsetTop - mg_player_seasons.offsetTop - 100;
            }

            if (episodeElement && mg_player_eps_scroll) {
              mg_player_eps_scroll.scrollTop =
                episodeElement.offsetTop - mg_player_eps_scroll.offsetTop - 100;
            }
          }, 0);

          changeInitialEpisode(getEpisodeRequest());
        } else {
          active_season = 1;
          active_episode = 1;

          mg_save[0].id = MG_PLAYER.id;
          mg_save[0].time = 0;
          mg_save[0].episode = 1;
          mg_save[0].season = 1;
          localStorage.setItem("mg_player", JSON.stringify(mg_save));
        }
      }
      cutIfTooLarge(mg_save, 5);
      localStorage.setItem("mg_player", JSON.stringify(mg_save));
    } else {
      if (MG_PLAYER.type == "SERIES") {
        mg_save.unshift({ id: MG_PLAYER.id, time: 0, episode: 1, season: 1 });
      } else {
        mg_save.unshift({ id: MG_PLAYER.id, time: 0, episode: 1, season: 1 });
      }
      cutIfTooLarge(mg_save, 5);
      localStorage.setItem("mg_player", JSON.stringify(mg_save));
    }
  } else {
    if (MG_PLAYER.type == "SERIES") {
      localStorage.setItem(
        "mg_player",
        JSON.stringify([{ id: MG_PLAYER.id, time: 0, episode: 1, season: 1 }])
      );
    } else {
      localStorage.setItem(
        "mg_player",
        JSON.stringify([{ id: MG_PLAYER.id, time: 0, episode: 1, season: 1 }])
      );
    }
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
mg_player_ep_button.addEventListener("click", openEpisodes);
mg_eps_closer.addEventListener("click", closeEpisodes);
mg_player.addEventListener("mousemove", mouseMoving);
mg_player.addEventListener("touchmove", mouseMoving);
mg_fullscreen.addEventListener("click", fullscreenOnOff);
mg_main_play.addEventListener("click", firstStart);
mg_skip_left.addEventListener("touchend", skipLeftDbl);
mg_skip_right.addEventListener("touchend", skipRightDbl);
mg_skip_left_button.addEventListener("click", skipLeft);
mg_skip_right_button.addEventListener("click", skipRight);
mg_play_pause_full.addEventListener("dblclick", fullscreenOnOff);
mg_play_pause_full.addEventListener("click", playPause);
mg_play_pause_full_mobile.addEventListener("touchend", showhideControls);
mg_play_pause.forEach((element) => {
  element.addEventListener("click", playPause);
});
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
mg_timeline_scaler.addEventListener("touchmove", seeTimeTouch);
mg_timeline_scaler.addEventListener("mouseout", removeSeeTime);
document.addEventListener("keydown", handleKeyPress);

// ! MAIN FUNCTIONS

function showhideControls(e) {
  e.preventDefault();
  if (mg_play_pause_mobile.classList.contains("mg_controls_hidden")) {
    showControls();
    mouseMoving();
  } else {
    mg_play_pause_mobile.classList.add("mg_controls_hidden");
    hideControls();
  }
}
function setLoading(state) {
  if (state == true) {
    mg_play_pause_mobile.classList.add("mg_play_pause_mobile_locked");
    mg_loader.classList.remove("mg_loader_hidden");
  } else {
    mg_play_pause_mobile.classList.remove("mg_play_pause_mobile_locked");
    mg_loader.classList.add("mg_loader_hidden");
  }
}
// * WAITING
mg_video.addEventListener("waiting", function () {
  setLoading(true);
});
mg_video.addEventListener("waitingforkey", () => {
  setLoading(true);
});

// * START
mg_video.addEventListener("playing", () => {
  mg_error_block.classList.add("mg_error_block_hidden");
  setLoading(false);
});

mg_video.addEventListener("canplaythrough", () => {
  setLoading(false);
});
mg_video.addEventListener("loadeddata", function () {
  mg_error_block.classList.add("mg_error_block_hidden");
  let getLocaledTime = getSavedTime();
  mg_video.currentTime = getLocaledTime.toFixed(6);
  measureTime(getLocaledTime);
  is_loaded = true;
  setLoading(false);
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
mg_video.addEventListener("stalled", function () {
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
function openEpisodes() {
  mg_player_eps_container.classList.add("mg_player_eps_container_show");
  mg_player_ep_button.classList.add("mg_player_ep_button_hide");
}
function closeEpisodes() {
  mg_player_eps_container.classList.remove("mg_player_eps_container_show");
  mg_player_ep_button.classList.remove("mg_player_ep_button_hide");
}
if (!MG_PLAYER.seasons) {
  mg_player_eps.remove();
}

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
  const parentElement = e.currentTarget;
  const rect = parentElement.getBoundingClientRect();
  const xPos = e.clientX - rect.left;
  const yPos = e.clientY - rect.top;
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
    InitializeVideo(MG_PLAYER.languages[mg_main_controls.lang][item.innerText]);

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
    var saveState = mg_video.paused;
    InitializeVideo(
      MG_PLAYER.languages[item.innerText][mg_main_controls.quality]
    );
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
function skipLeftDbl(e) {
  e.preventDefault();
  dbClick(
    () => {
      mg_video.currentTime -= 10;
    },
    () => showhideControls(e)
  );
  mg_starttime.innerHTML = formatTime(mg_video.currentTime);
  measureTime(mg_video.currentTime);
}

function skipRightDbl(e) {
  e.preventDefault();
  dbClick(
    () => {
      mg_video.currentTime += 10;
    },
    () => showhideControls(e)
  );
  mg_starttime.innerHTML = formatTime(mg_video.currentTime);
  measureTime(mg_video.currentTime);
}

function hideControls() {
  mg_controls.classList.add("mg_controls_hidden");
  mg_player_eps.classList.add("mg_controls_hidden");
  mg_player.classList.add("mg_hide_cursor");
  mg_play_pause_mobile.classList.add("mg_controls_hidden");

  closeEpisodes();
  closeSettings();
}

function showControls() {
  mg_controls.classList.remove("mg_controls_hidden");
  mg_player_eps.classList.remove("mg_controls_hidden");
  mg_player.classList.remove("mg_hide_cursor");
  mg_play_pause_mobile.classList.remove("mg_controls_hidden");
}

function stoppedMoving() {
  hideControls();
}

function startedMoving() {
  showControls();
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
function playPause(command) {
  mouseMoving();
  if (mg_video.paused) {
    changeControls("play");
    mg_video.play();
  } else {
    changeControls("pause");
    mg_video.pause();
  }
}
function playPauseHand(command) {
  if (command == "play") {
    changeControls("play");
    mg_video.play();
  } else if (command == "pause") {
    changeControls("pause");
    mg_video.pause();
  }
}

function changeControls(string) {
  if (string === "play") {
    mg_play_.forEach((element) => {
      element.style.display = "none";
    });
    mg_pause_.forEach((element) => {
      element.style.display = "block";
    });
  } else if (string === "pause") {
    mg_play_.forEach((element) => {
      element.style.display = "block";
    });
    mg_pause_.forEach((element) => {
      element.style.display = "none";
    });
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
let dbtimer;
function dbClick(callback, callback2) {
  clickCount++;

  if (clickCount === 1) {
    dbtimer = setTimeout(() => {
      if (clickCount === 1) {
        callback2();
      }
      clickCount = 0;
    }, 300);
  } else if (clickCount === 2) {
    clearTimeout(dbtimer);
    callback();
    clickCount = 0;
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
    InitializeVideo(MG_PLAYER.languages.GEO[chosedQuality]);
  } else if (
    mg_main_controls.lang == "ENG" &&
    MG_PLAYER.languages.ENG[chosedQuality]
  ) {
    chosedLang = "ENG";
    InitializeVideo(MG_PLAYER.languages.ENG[chosedQuality]);
  } else {
    InitializeVideo(MG_PLAYER.languages.GEO[chosedQuality]);
  }
  if (mg_main_controls.quality == "HD" && MG_PLAYER.languages[chosedLang].HD) {
    InitializeVideo(MG_PLAYER.languages[chosedLang].HD);
  } else if (
    mg_main_controls.lang == "SD" &&
    MG_PLAYER.languages[chosedLang].SD
  ) {
    InitializeVideo(MG_PLAYER.languages[chosedLang].SD);
  } else {
    InitializeVideo(MG_PLAYER.languages[chosedLang].HD);
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
  if (MG_PLAYER.type == "SERIES") {
    if (active_season == null && active_episode == null) {
      active_season = 1;
      active_episode = 1;
    }
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
    mg_player_seasons.innerHTML += `<div data-season="${season}" class="mg_se_button ${
      active_season == season ? "mg_se_button_active" : ""
    } ">
    ${season}
  </div>`;
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
    mg_player_eps_scroll.innerHTML += `<div data-ep="${index}" class="mg_ep_button ${
      active_episode == index && curSE == active_season
        ? "mg_ep_button_active"
        : ""
    } ">
      ${index} ეპიზოდი
      </div>`;
  });
  let mg_eps_childrens = Array.from(mg_player_eps_scroll.children);
  mg_eps_childrens.forEach((item) => {
    item.addEventListener("click", () => {
      active_episode = item.getAttribute("data-ep");
      mg_error_block.classList.add("mg_error_block_hidden");
      changeEpisode(getEpisodeRequest());
      mg_eps_childrens.forEach((k) =>
        k.classList.remove("mg_ep_button_active")
      );
      item.classList.add("mg_ep_button_active");
      closeEpisodes();
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
  InitializeVideo(episode);
}

function changeEpisode(episode) {
  InitializeVideo(episode);
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
