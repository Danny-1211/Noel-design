import titleLeftLg from "../../assets/imgs/icon/title deco-left-lg.svg";
import titleRightLg from "../../assets/imgs/icon/title deco-right-lg.svg";
import titleLeftSm from "../../assets/imgs/icon/title deco-left-sm.svg";
import titleRightSm from "../../assets/imgs/icon/title deco-right-sm.svg";

import homepageWork1Bg from "../../assets/imgs/homepage-work1/homepage-work1-bg.png";

import homepageWork1 from "../../assets/imgs/homepage-work1/homepage-work1.png";
// homepage-work1-bg
function CollectionSection() {
  return (
    <section className="collection w-screen pt-[120px]">
      <h2 className="mb-20 mx-auto flex justify-center items-center gap-x-[16px] font-[600] text-[32px] leading-[38.4px] tracking-[35.84px]">
        <img src={titleLeftLg} alt="" />
        作品介紹
        <img src={titleRightLg} alt="" />
      </h2>

      <div
        className="bg-no-repeat bg-cover bg-center w-full h-[800px] flex justify-center items-center gap-x-[55px]"
        style={{ backgroundImage: `url(${homepageWork1Bg})` }}
      >
        <img className="mt-[80px]" src={homepageWork1} alt="" />
        <div className="w-[526px] relative h-[500px] rounded-[24px] overflow-hidden px-10 pt-[80px] pb-[56px]">
          <div
            className="absolute inset-0 bg-white/10 px-[40px] pt-[80px] pb-[56px]"
            style={{
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <h3 className="text-[#fff] font-[700] text-[28px] leading-[33.6px]">
              星際旅行訂票平台
            </h3>
            <p className="text-[#fff] leading-[24px]">悠遊宇宙的夢想，從這裡開始實現</p>
            <div className="tag flex gap-x-[16px]">
              <a className="py-[4px] px-[12px] bg-[#fff] rounded-[16px]" href="#">網頁設計</a>
              <a className="py-[4px] px-[12px] bg-[#fff] rounded-[16px]" href="#">響應式設計</a>
              <a className="py-[4px] px-[12px] bg-[#fff] rounded-[16px]" href="#">Bootstrap</a>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-20 mx-auto flex justify-center gap-x-[16px] font-[700] text-[24px] leading-[28px] tracking-[26.88px]">
        <img src={titleLeftSm} alt="" />
        作品介紹
        <img src={titleRightSm} alt="" />
      </h2>
    </section>
  );
}

export default CollectionSection;
