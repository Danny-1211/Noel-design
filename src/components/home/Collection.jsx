import titleLeftLg from "../../assets/imgs/icon/title deco-left-lg.svg";
import titleRightLg from "../../assets/imgs/icon/title deco-right-lg.svg";
import titleLeftSm from "../../assets/imgs/icon/title deco-left-sm.svg";
import titleRightSm from "../../assets/imgs/icon/title deco-right-sm.svg";
import arrorRight from "../../assets/imgs/icon/arror-right.svg";
import homepageWork1BgLg from "../../assets/imgs/homepage-work1/homepage-work1-bg.png";
import homepageWork1Lg from "../../assets/imgs/homepage-work1/homepage-work1.png";
import homepageWork1BgSm from "../../assets/imgs/homepage-work1/homepage-work1-bg.png";
import homepageWork1Sm from "../../assets/imgs/homepage-work1/homepage-work1.png";

import homepageWork2BgLg from "../../assets/imgs/homepage-work2/homepage-work2-lg.png";
import homepageWork2Lg from "../../assets/imgs/homepage-work1/homepage-work1.png";
import homepageWork2BgSm from "../../assets/imgs/homepage-work2/homepage-work2-sm.png";
import homepageWork2Sm from "../../assets/imgs/homepage-work1/homepage-work1.png";

import homepageWork3BgLg from "../../assets/imgs/homepage-work3/homepage-work3-bg.png";
import homepageWork3Lg from "../../assets/imgs/homepage-work3/homepage-work3.png";
import homepageWork3BgSm from "../../assets/imgs/homepage-work1/homepage-work1-bg.png";
import homepageWork3Sm from "../../assets/imgs/homepage-work1/homepage-work1.png";


function CollectionSection() {
  const collection = [
    {
      homepageWorkBgLg:homepageWork1BgLg,
      homepageWorkLg:homepageWork1Lg,
      homepageWorkBgSm:homepageWork1BgSm,
      homepageWorkSm:homepageWork1Sm,
      title: "星際旅行訂票平台",
      desc: "悠遊宇宙的夢想，從這裡開始實現",
      tags: ["網頁設計", "響應式設計", "Bootstrap"],
    },
    {
      homepageWorkBgLg:homepageWork2BgLg,
      homepageWorkLg:homepageWork2Lg,
      homepageWorkBgSm:homepageWork2BgSm,
      homepageWorkSm:homepageWork2Sm,
      title: "理財APP",
      desc: "連動帳戶與行動支付，讓 AI 提供您最好的理財建議",
      tags: ["APP設計", "iOS", "React"],
    },
    {
      homepageWorkBgLg:homepageWork3BgLg,
      homepageWorkLg:homepageWork3Lg,
      homepageWorkBgSm:homepageWork3BgSm,
      homepageWorkSm:homepageWork3Sm,
      title: "醫美診所官網",
      desc: "永保青春的秘密，從粹究開始",
      tags: ["網頁設計", "響應式設計", "ＷordPress"],
    },
  ];
  return (
    <section className="collection section-container w-screen pt-[120px]">
      <div className="max-lg:hidden">
        <h2 className="collection-title mb-20 mx-auto flex justify-center items-center gap-x-[16px] font-[600] text-[32px] leading-[38.4px] tracking-[35.84px]">
          <img src={titleLeftLg} alt="" />
          作品介紹
          <img src={titleRightLg} alt="" />
        </h2>

        <div
          className="collection-hero px-5 bg-no-repeat bg-cover bg-center w-full h-[800px] flex justify-center items-center gap-x-[55px]"
          style={{ backgroundImage: `url(${homepageWork1BgLg})` }}
        >
          <div className="collection-hero-image mt-20">
            <img className="object-cover" src={homepageWork1Lg} alt="" />
          </div>
          {/*  */}
          <div className="collection-card w-[526px] relative h-[400px] max-xl:h-[500px] rounded-[24px] overflow-hidden px-10 pt-[80px] pb-[56px]">
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

                <div className="tag tag-list flex gap-x-[16px] ">
                  <a
                    className=" tag-item py-[4px] px-[12px] bg-[#fff] rounded-[16px]"
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
                <button className="w-[152px] btn btn-primary rounded-[5px] bg-[#000] text-[#fff] py-[16px] px-[32px]">
                  <span className=" btn-label mr-[8px]">完整介紹</span>
                  <img
                    className="btn-icon inline-block relative top-[-2px]"
                    src={arrorRight}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden ">
        <h2 className="collection-title mb-[40px] mx-auto flex justify-center gap-x-[16px] font-[700] text-[24px] leading-[28px] tracking-[1.12px]">
          <img src={titleLeftSm} alt="" />
          作品介紹
          <img src={titleRightSm} alt="" />
        </h2>
        {/* <div className=""> */}
        {/* 背景 圖片 */}

        {collection.map((c) => {
          return (
            <div>
              <div
                className="collection-hero px-[40px] mb-[24px] bg-no-repeat bg-cover bg-center w-full  flex justify-center items-center pt-[93px]"
                style={{ backgroundImage: `url(${c.homepageWorkBgSm})` }}
              >
                <div className="collection-hero-image">
                  <img className="object-cover" src={c.homepageWorkSm} alt="" />
                </div>
              </div>

              <div className="text-center mb-[20px]">
                <div className="mb-[16px]">
                  <h3 className="mb-[8px] font-[700] text-[20px] leading-[24px] text-[#1E1E1E]">
                    {c.title}
                  </h3>
                  <p className="font-[400] leading-[24px] text-[#5B5B5B]">
                    {c.desc}
                  </p>
                </div>
                <div className="tag flex justify-center gap-x-[8px] font-[400] leading-[24px] text-[rgba(59,59,59,1)]">
                  {c.tags.map((tag) => {
                    return (
                      <span className="bg-[rgba(241,241,241,1)] rounded-2xl py-[4px] px-[12px]">
                        {tag}
                      </span>
                    );
                  })}
                  
                </div>
              </div>

              <div className="collection-card-actions flex justify-center mb-[48px]">
                <button className="btn btn-primary rounded-[5px] bg-[#000] text-[#fff] py-[8px] px-[16px]">
                  <span className=" btn-label mr-2">完整介紹</span>
                  <img
                    className="btn-icon inline-block relative -top-0.5"
                    src={arrorRight}
                    alt=""
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CollectionSection;
