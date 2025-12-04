import titleLeftLg from "../../assets/imgs/icon/title deco-left-lg.svg";
import titleRightLg from "../../assets/imgs/icon/title deco-right-lg.svg";
import titleLeftSm from "../../assets/imgs/icon/title deco-left-sm.svg";
import titleRightSm from "../../assets/imgs/icon/title deco-right-sm.svg";
import arrorRight from "../../assets/imgs/icon/arror-right.svg";
import homepageWork1BgLg from "../../assets/imgs/homepage-work1/homepage-work1-bg.png";
import homepageWork1Lg from "../../assets/imgs/homepage-work1/homepage-work1.png";
import homepageWork1BgSm from "../../assets/imgs/homepage-work1/homepage-work1-bg.png";
import homepageWork1Sm from "../../assets/imgs/homepage-work1/homepage-work1.png";

function CollectionSection() {
  return (
    <section className="collection section-container w-screen pt-[120px]">
      <div className="max-lg:hidden">
        <h2 className="collection-title mb-20 mx-auto flex justify-center items-center gap-x-[16px] font-[600] text-[32px] leading-[38.4px] tracking-[35.84px]">
          <img src={titleLeftLg} alt="" />
          作品介紹
          <img src={titleRightLg} alt="" />
        </h2>

        <div
          className="collection-hero bg-no-repeat bg-cover bg-center w-full h-[800px] flex justify-center items-center gap-x-[55px]"
          style={{ backgroundImage: `url(${homepageWork1BgLg})` }}
        >
          <img
            className="collection-hero-image mt-20"
            src={homepageWork1Lg}
            alt=""
          />
          <div className="collection-card w-[526px] relative h-[400px] rounded-[24px] overflow-hidden px-10 pt-[80px] pb-[56px]">
            <div
              className="collection-card-overlay absolute inset-0 bg-white/10 px-10 pt-[80px] pb-[40px]"
              style={{
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <div className="collection-card-header mb-[40px] pb-[40px] border-b border-[#fff]">
                <h3 className="collection-card-title text-[#fff] font-[700] text-[28px] leading-[33.6px] mb-[8px]">
                  星際旅行訂票平台
                </h3>
                <p className="collection-card-desc text-[#fff] leading-[24px] mb-[24px]">
                  悠遊宇宙的夢想，從這裡開始實現
                </p>

                <div className="tag tag-list flex gap-x-[16px]">
                  <a
                    className="tag-item py-[4px] px-[12px] bg-[#fff] rounded-[16px]"
                    href="#"
                  >
                    網頁設計
                  </a>
                  <a
                    className="tag-item py-[4px] px-[12px] bg-[#fff] rounded-[16px]"
                    href="#"
                  >
                    響應式設計
                  </a>
                  <a
                    className="tag-item py-[4px] px-[12px] bg-[#fff] rounded-[16px]"
                    href="#"
                  >
                    Bootstrap
                  </a>
                </div>
              </div>

              <div className="collection-card-actions flex justify-center">
                <button className="btn btn-primary bg-[#000] text-[#fff] py-[16px] px-[32px]">
                  <span className="btn-label mr-[8px]">完整介紹</span>
                  <img className="btn-icon inline-block relative top-[-2px]" src={arrorRight} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <h2 className="collection-title mb-20 mx-auto flex justify-center gap-x-[16px] font-[700] text-[24px] leading-[28px] tracking-[26.88px]">
          <img src={titleLeftSm} alt="" />
          作品介紹
          <img src={titleRightSm} alt="" />
        </h2>
        <div className="">
          {/* 背景 圖片 */}
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;
