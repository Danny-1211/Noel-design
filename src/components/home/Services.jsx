import titleLeftLg from "../../assets/imgs/icon/title deco-left-lg.svg";
import titleRightLg from "../../assets/imgs/icon/title deco-right-lg.svg";
import titleLeftSm from "../../assets/imgs/icon/title deco-left-sm.svg";
import titleRightSm from "../../assets/imgs/icon/title deco-right-sm.svg";
import serviceItem from "../../assets/imgs/service-bg/service-item-bg.png";

import serviceItemFrontEnd from "../../assets/imgs/icon/service-item-front-end.svg";
import serviceItemUi from "../../assets/imgs/icon/service-item-ui.svg";
import serviceItemVisual from "../../assets/imgs/icon/service-item-visual.svg";
import serviceItemHtmlCss from "../../assets/imgs/icon/service-item-html&css.svg";

import arrorRight from "../../assets/imgs/icon/arror-right.svg";
function ServicesSection() {
  const services = [
    { title: "平面設計", icon: serviceItemVisual },
    { title: "UI 設計", icon: serviceItemUi },
    { title: "切版服務", icon: serviceItemHtmlCss },
    { title: "前端開發", icon: serviceItemFrontEnd },
  ];
  return (
    <section className="py-[120px]">
      <div className="max-lg:hidden px-5">
        <h2 className="collection-title mb-20 mx-auto flex justify-center items-center gap-x-[16px] font-[600] text-[32px] leading-[38.4px] tracking-[35.84px]">
          <img src={titleLeftLg} alt="" />
          服務項目
          <img src={titleRightLg} alt="" />
        </h2>

        <div className="flex items-center justify-center text-[#fff] gap-[24px] mb-[80px]">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center aspect-square min-w-0 basis-[306px] rounded-2xl bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${serviceItem})` }}
            >
              <img src={service.icon} alt="" className="w-16 h-16 mb-3" />
              <div>{service.title}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-y-[40px]">
          <div className="font-[600] text-[28px] leading-[33px.6] text-[rgba(59,59,59,1)]">
            想要合作或瞭解更多？
          </div>
          <div className="gap-x-[8px] py-[16px] px-[32px] bg-[#000] text-[#fff] rounded-[5px]">
            <button className="flex gap-x-[12px]">
              詳細內容與合作流程
              <img className="textt-[#fff]" src={arrorRight} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden py-[80px]">
        <h2 className="collection-title mb-[40px] mx-auto flex justify-center gap-x-[16px] font-[700] text-[24px] leading-[28px] tracking-[1.12px]">
          <img src={titleLeftSm} alt="" />
          服務項目
          <img src={titleRightSm} alt="" />
        </h2>
        <div className="flex flex-col items-center text-[#fff] gap-y-[24px] mb-[40px]">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center w-[306px] h-[306px] rounded-2xl bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${serviceItem})` }}
            >
              <img src={s.icon} alt="" className="w-16 h-16 mb-3" />
              <div>{s.title}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-y-[40px]">
          <div className="font-[600] text-[28px] leading-[33px.6] text-[rgba(59,59,59,1)]">
            想要合作或瞭解更多？
          </div>
          <div className="gap-x-[8px] py-[16px] px-[32px] bg-[#000] text-[#fff] rounded-[5px]">
            <button className="flex gap-x-[12px]">
              詳細內容與合作流程
              <img className="textt-[#fff]" src={arrorRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
