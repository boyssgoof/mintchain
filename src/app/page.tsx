"use client";

import "./globals.css";
import "./styles/style.css";

import "./styles/fonts.css";
import "./styles/css2.css";
import "./styles/index.css";

import "./styles/modal-16.css";

export default function Home() {
  return (
    <div id="root">
      <div className="alert">
        <div className="alert_window">
          <div className="alert_label">
            <div className="alert_text">Approve purchase</div>
            <button className="alert_btn connectButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <rect
                  x="7.77808"
                  y="6.36396"
                  width="20"
                  height="2"
                  transform="rotate(45 7.77808 6.36396)"
                  fill="#A4A4A4"
                />
                <rect
                  x="21.9202"
                  y="7.77818"
                  width="20"
                  height="2"
                  transform="rotate(135 21.9202 7.77818)"
                  fill="#A4A4A4"
                />
              </svg>
            </button>
          </div>
          <div className="alert_items">
            <div className="alert_item">
              <div className="item_img">
                <img
                  src="/images/load2.gif"
                  alt="Loading"
                  className="alert_loader"
                />
                <img src="/images/1.jpg" alt="Item 1" className="alert_logo" />
              </div>
              <div className="item_desc">
                <div className="item_label">1 item</div>
                <div className="item_chain">Chain: Ethereum</div>
              </div>
            </div>
            <div className="alert_item">
              <div className="item_img">
                <img
                  src="/images/load2.gif"
                  alt="Loading"
                  className="alert_loader"
                />
                <img src="/images/2.jpg" alt="Item 2" className="alert_logo" />
              </div>
              <div className="item_desc">
                <div className="item_label">1 item</div>
                <div className="item_chain">Chain: Ethereum</div>
              </div>
            </div>
            <div className="alert_item">
              <div className="item_img">
                <img
                  src="/images/load2.gif"
                  alt="Loading"
                  className="alert_loader"
                />
                {/* <img src="/images/13.jpg" alt="Item 3" className="alert_logo" /> */}
              </div>
              <div className="item_desc">
                <div className="item_label">1 item</div>
                <div className="item_chain">Chain: Ethereum</div>
              </div>
            </div>
          </div>
          <div className="alert_line"></div>
          <div className="alert_comment">
            <div className="alert_comment_label">Go to your wallet</div>
            <div className="alert_comment_desc">
              You will be asked to approve this purchase from your wallet
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="logo_head">
          <div className="logo_img">
            <img src="/images/img1.svg" alt="" />
          </div>
        </div>

        <div className="inputs_head">
          <div className="searche">
            <div className="magnifying">
              <img src="/images/img2.svg" alt="" />
            </div>
            <div className="inputs_head_inner">
              <input
                type="text"
                placeholder="Search items, collections, and accounts"
              />
            </div>
            <div className="slash">
              <span>/</span>
            </div>
          </div>
          <div className="connect">
            <button className="interact-button connect_btn connectButton">
              <img src="/images/img3.svg" alt="" />
              <span>Claim Now</span>
            </button>
            <a className="user connectButton">
              <img src="/images/img4.svg" alt="" />
            </a>
            <button className="interact-button basket connectButton">
              <img src="/images/img5.svg" alt="" />
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="main_screen">
          <div className="screen_lable">
            <div className="video">
              <div className="color_tone"></div>
              <video autoPlay loop playsInline muted>
                <source src="media/high.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="screen_lable_content">
              <div className="lable_content_left">
                <div className="lable_screen_logo">
                  <img
                    src="/images/389-9bec97c22fa2e411.gif"
                    alt="Mystery Box Logo"
                  />
                </div>
                <div className="lable_screen_username">
                  <span>Mystery Box</span>
                  <span className="vefify">
                    {/* <img src="/images/img6.svg" alt="Verified Icon" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#1D7FDF"
                      className="bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg>
                  </span>
                </div>
                <div className="lable_owner">
                  <span>By</span>
                  <span className="hover">OpenSeaPro</span>
                  <span className="vefify">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#1D7FDF"
                      className="bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg>
                    {/* <img src="/images/img7.svg" alt="Verified Badge" /> */}
                  </span>
                </div>
                <div className="lable_miting">
                  <div className="lable_dot">
                    <div className="amin"></div>
                    <div className="statick"></div>
                  </div>
                  <div className="interact-button lable_btn">MINTING NOW</div>
                </div>
              </div>
              <div className="lable_content_right"></div>
            </div>
          </div>
        </div>
        <div className="main_content">
          <div className="tabs">
            <div className="tab1">FREE MINT</div>
          </div>
          <div className="row"></div>
          <div className="about_content">
            <div className="main_user">
              <div className="about">
                <div className="about_lable">
                  <h2>About this collection</h2>
                </div>
                <div className="about_user">
                  <div className="lable_content_logo">
                    <img src="images/389-9bec97c22fa2e411.gif" alt="logo" />
                  </div>
                  <div className="lable_content_author">
                    <div className="content_author_username">
                      <span>Mystery Box</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#1D7FDF"
                        className="bi bi-patch-check-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                      </svg>
                    </div>
                    <div className="content_author_coin">
                      <span>Ethereum</span>
                    </div>
                  </div>
                </div>
                <div className="about_description">
                  We started new AIRDROP only 150 mystery box.
                  <br />
                  Opensea owned NFTs worth between $3000 and $2,530,000.
                  <br />
                  🎁 Only one box can be claimed per address 🎁<p></p>
                </div>
              </div>
              <div className="stat">
                <div className="stat_row">
                  <div className="stat_nums">
                    <div className="stat_nums_left">
                      <span>49.5% minted</span>
                    </div>
                    <div className="stat_nums_right">
                      <span>73 / 150</span>
                    </div>
                  </div>
                  <div className="stat_line">
                    <div className="stat_line_left"></div>
                    <div className="stat_line_right"></div>
                  </div>
                </div>
                <div className="counter">
                  <div className="counter_lable">Community</div>
                  <div className="counter_amount">0 ETH</div>
                  <div className="counter_input">
                    <div className="counter_input_count">
                      <div className="minus">
                        <span>-</span>
                      </div>
                      <div className="int">1</div>
                      <div className="plus">
                        <span>+</span>
                      </div>
                    </div>
                    <div
                      className="interact-button connectButton mint"
                      id="messageButton"
                      style={{ cursor: "pointer" }}
                    >
                      <a className="connectButton">Mint</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="first_row">
          <div className="first_row_left">
            <div className="row_left_lable">Stay in the loop</div>
            <div className="row_left_desc">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </div>
            <div className="row_left_input">
              <div className="left_input">
                <input type="text" placeholder="Your email address" />
              </div>
              <div className="left_btn">Sign up</div>
            </div>
          </div>
          <div className="first_row_right">
            <div className="row_left_lable">Join the community</div>
            <div className="row_links">
              <div className="content_right">
                <div className="links">
                  <div className="icon">
                    <img src="/images/img9.svg" alt="" />
                  </div>

                  <div className="icon">
                    <svg
                      className=""
                      fill="#FFFFFF"
                      viewBox="0 0 22 16"
                      style={{
                        width: "22px",
                        height: "16px",
                      }}
                    >
                      <path d="M8.11.5c-.28.002-2.574.067-4.996 1.873 0 0-2.584 4.665-2.584 10.408 0 0 1.507 2.593 5.473 2.719 0 0 .664-.792 1.202-1.477-2.278-.685-3.14-2.108-3.14-2.108s.18.126.502.307c.018 0 .035.019.07.036.055.035.108.054.162.09.448.252.896.45 1.31.611.736.307 1.615.576 2.639.774 1.346.252 2.925.342 4.646.019a12.954 12.954 0 002.603-.774 10.118 10.118 0 002.062-1.063s-.896 1.458-3.247 2.125c.538.666 1.185 1.439 1.185 1.439 3.965-.126 5.473-2.72 5.473-2.7 0-5.746-2.584-10.409-2.584-10.409C16.32.446 13.861.5 13.861.5l-.251.288c3.05.918 4.468 2.27 4.468 2.27a14.856 14.856 0 00-5.4-1.711 15.048 15.048 0 00-3.626.036c-.107 0-.197.019-.306.035-.628.072-2.153.288-4.073 1.135-.663.288-1.059.505-1.059.505S5.088 1.635 8.317.717L8.137.5h-.028zm-.457 6.645c1.022 0 1.849.882 1.83 1.981 0 1.1-.808 1.982-1.83 1.982-1.005 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981zm6.55 0c1.004 0 1.83.882 1.83 1.981 0 1.1-.809 1.982-1.83 1.982-1.006 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981z"></path>
                    </svg>
                  </div>
                  <div className="icon">
                    <svg
                      className=""
                      fill="#FFFFFF"
                      viewBox="0 0 18 16"
                      style={{
                        width: "18px",
                        height: "16px",
                      }}
                    >
                      <path d="M.09 13.791c1.992.14 3.728-.344 5.327-1.571-.816-.098-1.527-.311-2.127-.786-.584-.466-1.032-1.047-1.272-1.841h1.48c.008-.033.016-.066.024-.107-.816-.237-1.512-.663-2.032-1.342-.52-.67-.775-1.448-.8-2.3.52.148 1.016.295 1.52.434.016-.033.04-.065.056-.098-.72-.606-1.24-1.334-1.431-2.275a3.92 3.92 0 01.391-2.7c2 2.389 4.511 3.715 7.598 3.936-.096-.778-.104-1.498.16-2.202.912-2.463 3.983-3.249 5.894-1.481.216.196.4.229.632.147.632-.229 1.255-.474 1.903-.72-.248.81-.784 1.408-1.415 1.989.615-.164 1.231-.336 1.839-.5.024.025.048.041.072.066-.464.491-.912 1.007-1.415 1.449-.272.237-.36.458-.376.818-.144 4.01-1.752 7.25-5.175 9.289-3.487 2.07-7.077 1.947-10.612-.025-.064-.04-.12-.09-.24-.18z"></path>
                    </svg>
                  </div>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="28"
                      viewBox="0 0 24 28"
                      fill="none"
                    >
                      <path
                        d="M18.8571 11.9879C21.6964 11.9879 24 9.68671 24 6.8503C24 4.01389 21.6964 1.71265 18.8571 1.71265C16.0179 1.71265 13.7143 4.01389 13.7143 6.8503C13.7143 7.06437 13.725 7.27844 13.7518 7.48715L8.71071 10.0025C7.78929 9.10872 6.53036 8.56285 5.14286 8.56285C2.30357 8.56285 0 10.8641 0 13.7005C0 16.5369 2.30357 18.8382 5.14286 18.8382C6.53036 18.8382 7.78929 18.2923 8.71071 17.3985L13.7518 19.9138C13.725 20.1226 13.7143 20.3313 13.7143 20.5507C13.7143 23.3871 16.0179 25.6884 18.8571 25.6884C21.6964 25.6884 24 23.3871 24 20.5507C24 17.7143 21.6964 15.4131 18.8571 15.4131C17.4696 15.4131 16.2107 15.9589 15.2893 16.8527L10.2482 14.3374C10.275 14.1286 10.2857 13.9199 10.2857 13.7005C10.2857 13.4811 10.275 13.2724 10.2482 13.0636L15.2893 10.5483C16.2107 11.4421 17.4696 11.9879 18.8571 11.9879Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="28"
                      viewBox="0 0 24 28"
                      fill="none"
                    >
                      <path
                        d="M0.428467 13.7144C0.428467 12.9187 0.744537 12.1556 1.30715 11.593C1.86976 11.0304 2.63282 10.7144 3.42847 10.7144C4.22412 10.7144 4.98718 11.0304 5.54979 11.593C6.1124 12.1556 6.42847 12.9187 6.42847 13.7144C6.42847 14.51 6.1124 15.2731 5.54979 15.8357C4.98718 16.3983 4.22412 16.7144 3.42847 16.7144C2.63282 16.7144 1.86976 16.3983 1.30715 15.8357C0.744537 15.2731 0.428467 14.51 0.428467 13.7144ZM8.9999 13.7144C8.9999 12.9187 9.31597 12.1556 9.87858 11.593C10.4412 11.0304 11.2042 10.7144 11.9999 10.7144C12.7955 10.7144 13.5586 11.0304 14.1212 11.593C14.6838 12.1556 14.9999 12.9187 14.9999 13.7144C14.9999 14.51 14.6838 15.2731 14.1212 15.8357C13.5586 16.3983 12.7955 16.7144 11.9999 16.7144C11.2042 16.7144 10.4412 16.3983 9.87858 15.8357C9.31597 15.2731 8.9999 14.51 8.9999 13.7144ZM20.5713 10.7144C21.367 10.7144 22.13 11.0304 22.6926 11.593C23.2553 12.1556 23.5713 12.9187 23.5713 13.7144C23.5713 14.51 23.2553 15.2731 22.6926 15.8357C22.13 16.3983 21.367 16.7144 20.5713 16.7144C19.7757 16.7144 19.0126 16.3983 18.45 15.8357C17.8874 15.2731 17.5713 14.51 17.5713 13.7144C17.5713 12.9187 17.8874 12.1556 18.45 11.593C19.0126 11.0304 19.7757 10.7144 20.5713 10.7144Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <DrPopup /> */}
    </div>
  );
}
