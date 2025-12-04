import titleLeftLg from "../../assets/imgs/icon/title deco-left-lg.svg";
import titleRightLg from "../../assets/imgs/icon/title deco-right-lg.svg";
import titleLeftSm from "../../assets/imgs/icon/title deco-left-sm.svg";
import titleRightSm from "../../assets/imgs/icon/title deco-right-sm.svg";

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

      <div className="lg:hidden">
        <h2 className="collection-title mb-[40px] mx-auto flex justify-center gap-x-[16px] font-[700] text-[24px] leading-[28px] tracking-[1.12px]">
          <img src={titleLeftSm} alt="" />
          服務項目
          <img src={titleRightSm} alt="" />
        </h2>
      </div>
    </section>
  );
}

export default ServicesSection;
