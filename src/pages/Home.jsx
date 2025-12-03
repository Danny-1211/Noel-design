import fb from "../assets/imgs/icon/facebook.svg";
import ig from "../assets/imgs/icon/instagram.svg";
import yt from "../assets/imgs/icon/youtube.svg";
import mark from "../assets/imgs/icon/mark.svg";
import heroLg from "../assets/imgs/hero-image/hero-lg.png";
import heroSm from "../assets/imgs/hero-image/hero-sm.png";
function Home() {
  return (
    <>
      <div className="banner max-lg:hidden flex justify-end items-center gap-x-6 pl-[312px] max-lg:pl-0 py-10">
        <div className="banner-content max-w-[435px] flex flex-col gap-y-[60px] ">
          <div className="banner-textblock flex flex-col gap-y-6">
            <div className="banner-heading font-semibold text-[40px] leading-12">
              Hi！我是 Noel
            </div>
            <div>
              <div className="banner-subtext font-normal text-[20px] leading-[30px] tracking-[0px] text-[#3B3B3B] mb-4">
                <div className="banner-highlight-group flex flex-wrap mb-2">
                  <span>具有 10 年經驗的</span>
                  <span className="highlight relative px-2 -z-20">
                    資深 UI 設計師
                    <img
                      src={mark}
                      alt="highlight"
                      className="absolute bottom-0 w-full left-0 h-2.5 -z-10"
                    />
                  </span>
                  <span>兼</span>
                  <span className="highlight relative px-2 -z-20">
                    前端工程師
                    <img
                      src={mark}
                      alt="highlight"
                      className="absolute bottom-0 w-full left-0 h-2.5 -z-10"
                    />
                  </span>
                </div>
                <div>技術雙修並行，熱衷於優化使用者的網頁體驗</div>
              </div>
              <div className="banner-tags font-normal leading-6 text-[#C1C1C1]">
                WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN
              </div>
            </div>
          </div>
          <div className="social-icons flex gap-x-4">
            <div>
              <img src={fb} alt="fb_icon" />
            </div>
            <div>
              <img src={ig} alt="ig_icon" />
            </div>
            <div>
              <img src={yt} alt="yt_icon" />
            </div>
          </div>
        </div>
        <div className="hero-desktop">
          <img className="max-lg:hidden" src={heroLg} alt="hero_img" />
        </div>
      </div>

      <div className="bannerMobile lg:hidden ">
        <div className="w-full">
          <img className="hero-mobile lg:hidden w-full" src={heroSm} alt="hero_sm_img" />
        </div>

        {/*  */}
        <div className="bannerMobile-content flex flex-col gap-y-6 py-[40px]">
          <div className="bannerMobile-textblock flex flex-col items-center justify-center gao-y-[16px] ">
            <div className="bannerMobile-heading font-bold text-[32px] leading-[38px] mb-6">
              Hi！我是 Noel
            </div>
            <div className="bannerMobile-subtext text-center font-normal text-[20px] leading-[30px] text-[#5B5B5B] mb-4">
              <div>具有 10 年經驗的</div>
              <div className="banner-highlight-group mb-2">
                <span className="highlight relative px-2">
                  資深 UI 設計師
                  <img
                    src={mark}
                    alt="highlight"
                    className="absolute bottom-0 w-full left-0 h-2.5 -z-10"
                  />
                </span>
                <span>兼</span>
                <span className="highlight relative px-2">
                  前端工程師
                  <img
                    src={mark}
                    alt="highlight"
                    className="absolute bottom-0 w-full left-0 h-2.5 -z-10"
                  />
                </span>
              </div>
              <div>
                技術雙修並行，
                <br />
                熱衷於優化使用者的網頁體驗
              </div>
            </div>
            <div className="bannerMobile-tags font-normal leading-6 text-[#C1C1C1] text-center">
              <p>WEB DEVELOPMENT / BRANDING /<br /> UI / UX / APP DESIGN</p>
            </div>
          </div>
          {/* fb */}
          <div className="social-icons flex justify-center gap-x-4">
            <div>
              <img src={fb} alt="fb_icon" />
            </div>
            <div>
              <img src={ig} alt="ig_icon" />
            </div>
            <div>
              <img src={yt} alt="yt_icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
