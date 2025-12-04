import titleLeftLg from "../../assets/imgs/icon/title deco-left-lg.svg";
import titleRightLg from "../../assets/imgs/icon/title deco-right-lg.svg";
import titleLeftSm from "../../assets/imgs/icon/title deco-left-sm.svg";
import titleRightSm from "../../assets/imgs/icon/title deco-right-sm.svg";
import serviceItem from "../../assets/imgs/service-bg/service-item-bg.png";

function ServicesSection() {
  return (
    <section>
      <div className="max-lg:hidden">
        <h2 className="collection-title mb-20 mx-auto flex justify-center items-center gap-x-[16px] font-[600] text-[32px] leading-[38.4px] tracking-[35.84px]">
          <img src={titleLeftLg} alt="" />
          服務項目
          <img src={titleRightLg} alt="" />
        </h2>
      </div>

      <div className="lg:hidden py-[80px]" style={{ backgroundImage: `url(${serviceItem})` }}>
        <h2 className="collection-title mb-[40px] mx-auto flex justify-center gap-x-[16px] font-[700] text-[24px] leading-[28px] tracking-[1.12px]">
          <img src={titleLeftSm} alt="" />
          服務項目
          <img src={titleRightSm} alt="" />
        </h2>
        <div className="flex flex-col items-center text-[#fff] gap-y-[24px]">
          <div
            className="flex justify-center items-center w-[306px] h-[306px] rounded-2xl"
            style={{ backgroundImage: `url(${serviceItem})` }}
          >
            <div className="object-cover"></div>
            <div>平面設計</div>
          </div>

          <div
            className="flex justify-center items-center w-[306px] h-[306px] rounded-2xl"
            style={{ backgroundImage: `url(${serviceItem})` }}
          >
            <div className="object-cover"></div>
            <div>UI 設計</div>
          </div>

          <div
            className="flex justify-center items-center w-[306px] h-[306px] rounded-2xl"
            style={{ backgroundImage: `url(${serviceItem})` }}
          >
            <div className="object-cover"></div>
            <div>切版服務</div>
          </div>

          <div
            className="flex justify-center items-center w-[306px] h-[306px] rounded-2xl"
            style={{ backgroundImage: `url(${serviceItem})` }}
          >
            <div className="object-cover"></div>
            <div>前端開發</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
