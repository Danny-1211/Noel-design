import React from 'react';
import decoLeft_sm from "../assets/imgs/icon/Line_left_sm.svg";
import decoRight_sm from "../assets/imgs/icon/Line_right_sm.svg";
import decoLeft_sm_dark from "../assets/imgs/icon/Line_left_sm_dark.svg";
import decoRight_sm_dark from "../assets/imgs/icon/Line_right_sm_dark.svg";
import decoLeft_lg from "../assets/imgs/icon/Line_left_lg.svg";
import decoRight_lg from "../assets/imgs/icon/Line_right_lg.svg";
import decoLeft_lg_dark from "../assets/imgs/icon/Line_left_lg_dark.svg";
import decoRight_lg_dark from "../assets/imgs/icon/Line_right_lg_dark.svg";
import arrow_down_icon from "../assets/imgs/icon/arrow-downward.svg";
import services_bg from "../assets/imgs/service-bg/service-item-bg.png";
import process_bg from "../assets/imgs/service-bg/process-bg.png";
import {
  PROCESS_STEP,
  PRICE_SET,
  CUSTOMER_CASE,
  COMMON_QUESTION,
  SERVICES_SET,
} from "../data/services_set.js";
const Services = () => {
  return (
    <>
      <div className="w-full mx-auto pt-10">
        <section className="w-full flex flex-col gap-10 items-center justify-center pb-20 bg-[#FAFAFA]">
          <div className="w-full flex justify-center items-center gap-4">
            <img
              src={decoLeft_sm}
              alt="services"
              className="w-14 h-1.5 object-cover block md:hidden lg:hidden"
            />
            <img
              src={decoLeft_lg_dark}
              alt="services"
              className="w-25 h-1.5 object-cover hidden md:block lg:block"
            />
            <h2 className="text-[24px] font-bold leading-[28.8px] tracking-[12%] text-[#3B3B3B] md:text-[32px] md:font-semibold md:leading-[38.4px] md:tracking-[12%] lg:text-[32px] lg:font-semibold lg:leading-[38.4px] lg:tracking-[12%]">
              服務項目
            </h2>
            <img
              src={decoRight_sm}
              alt="services"
              className="w-14 h-1.5 object-cover block md:hidden lg:hidden"
            />
            <img
              src={decoRight_lg_dark}
              alt="services"
              className="w-25 h-1.5 object-cover hidden md:block lg:block"
            />
          </div>
          <div className="w-full grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-2 lg:max-w-[1296px] xl:px-4 xl:grid-cols-4">
            {SERVICES_SET.map((service, index) => (
              <div
                style={{ backgroundImage: `url(${services_bg})` }}
                className={` bg-cover bg-no-repeat w-[306px] py-21 flex flex-col justify-center items-center gap-6 rounded-2xl`}
                key={service.id + index}
              >
                <img
                  src={service.iconUrl}
                  alt={service.title}
                  className="w-20 h-auto aspect-square"
                />
                <h3 className="text-[24px] font-bold leading-9 text-[#FFFFFF]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
        <section
          style={{ backgroundImage: `url(${process_bg})` }}
          className={`bg-cover bg-no-repeat w-full flex flex-col gap-10 items-center justify-center py-20`}
        >
          {/* 標題旁兩個icon要改白色 */}
          <div className="w-full flex justify-center items-center gap-4">
            <img
              src={decoLeft_sm_dark}
              alt="services"
              className="w-14 h-1.5 object-cover block md:hidden lg:hidden"
            />
            <img
              src={decoLeft_lg}
              alt="services"
              className="w-25 h-1.5 object-cover hidden md:block lg:block"
            />
            <h2 className="text-[24px] font-bold leading-[28.8px] tracking-[12%] text-[#ffffff] md:text-[32px] md:font-semibold md:leading-[38.4px] md:tracking-[12%] lg:text-[32px] lg:font-semibold lg:leading-[38.4px] lg:tracking-[12%]">
              服務流程
            </h2>
            <img
              src={decoRight_sm_dark}
              alt="services"
              className="w-14 h-1.5 object-cover block md:hidden lg:hidden"
            />
            <img
              src={decoRight_lg}
              alt="services"
              className="w-25 h-1.5 object-cover hidden md:block lg:block"
            />
          </div>
          <div className="w-full grid grid-cols-1 place-items-center gap-4 px-3 md:max-w-[655px] lg:max-w-[655px]">
            {PROCESS_STEP.map((process, index) => (
              <React.Fragment key={`process-${process.id + index}`}>
                <div
                  className="w-full flex flex-col items-center justify-center bg-[#3B3B3B] border border-[#919191] pt-6 pb-12 px-6 gap-2 rounded-sm lg:flex-row lg:gap-8 lg:py-6 lg:px-8"
                  key={process.id + index}
                >
                  <h2 className="number-font text-[48px] font-normal leading-[120%] text-[#919191] lg:text-[72px]">
                    {process.id}
                  </h2>
                  <div className="w-full flex flex-col items-center justify-center gap-2 lg:items-start">
                    <h3 className="text-[24px] leading-[28.8px] font-bold text-[#ffffff] lg:text-[28px] lg:leading-[33.6px]">
                      {process.title}
                    </h3>
                    <p className="text-[20px] leading-[30px] text-[#E9E9E9] font-normal">
                      {process.content}
                    </p>
                  </div>
                </div>
                {process.id !== PROCESS_STEP.length && (
                  <img
                    src={arrow_down_icon}
                    alt="arrow_down_icon"
                    className="w-8 h-auto aspect-square"
                    key={`arrow-${index}`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
        <section className="w-full flex flex-col gap-10 items-center justify-center py-20 lg:py-30">
          <div className="w-full flex justify-center items-center gap-4">
            <img
              src={decoLeft_sm}
              alt="services"
              className="w-14 h-1.5 object-cover block md:hidden lg:hidden"
            />
            <img
              src={decoLeft_lg}
              alt="services"
              className="w-25 h-1.5 object-cover hidden md:block lg:block"
            />
            <h2 className="font-sans text-[24px] font-bold leading-[28.8px] tracking-[12%] text-[#3B3B3B] md:text-[32px] md:font-semibold md:leading-[38.4px] md:tracking-[12%] lg:text-[32px] lg:font-semibold lg:leading-[38.4px] lg:tracking-[12%]">
              價格表
            </h2>
            <img
              src={decoRight_sm}
              alt="services"
              className="w-14 h-1.5 object-cover block md:hidden lg:hidden"
            />
            <img
              src={decoRight_lg}
              alt="services"
              className="w-25 h-1.5 object-cover hidden md:block lg:block"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-6 place-items-center px-[27px] lg:grid-cols-3 lg:max-w-[1296px]">
            {PRICE_SET.map((priceItem, index) => (
              <div
                key={priceItem.id + index}
                className="w-full py-6 px-6 flex justify-between items-center bg-Primary-100 shadow-[0_4px_8px_rgba(0,0,0,0.08)] rounded-lg max-w-[416px]"
              >
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={priceItem.iconUrl}
                    alt={priceItem.title}
                    className="w-10 h-10"
                  />
                  <h3 className="text-[20px] font-bold leading-[30px] text-[#5B5B5B]">
                    {priceItem.title}
                  </h3>
                </div>
                <div className="max-w-[41px] w-full border-[0.5px] border-[#C1C1C1]"></div>
                <div className="flex items-baseline gap-1">
                  <h3 className="text-[20px] font-bold leading-[30px] text-[#1E1E1E]">
                    {priceItem.price}
                  </h3>
                  <p className="text-base font-normal leading-6 text-[#5B5B5B]">
                    起
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full flex flex-col gap-10 items-center justify-center py-20 bg-[#FAFAFA] lg:py-30">
          <div className="w-full flex justify-center items-center gap-4">
            <img
              src={decoLeft_sm}
              alt="services"
              className="w-14 h-1.5 object-cover block md:hidden lg:hidden"
            />
            <img
              src={decoLeft_lg}
              alt="services"
              className="w-25 h-1.5 object-cover hidden md:block lg:block"
            />
            <h2 className="text-[24px] font-bold leading-[28.8px] tracking-[12%] text-[#3B3B3B] md:text-[32px] md:font-semibold md:leading-[38.4px] md:tracking-[12%] lg:text-[32px] lg:font-semibold lg:leading-[38.4px] lg:tracking-[12%]">
              客戶案例
            </h2>
            <img
              src={decoRight_sm}
              alt="services"
              className="w-14 h-1.5 object-cover block md:hidden lg:hidden"
            />
            <img
              src={decoRight_lg}
              alt="services"
              className="w-25 h-1.5 object-cover hidden md:block lg:block"
            />
          </div>
          <div className="w-full grid grid-cols-1 place-items-center gap-12 px-3 lg:grid-cols-2 lg:max-w-[1296px] lg:gap-x-6 lg:gap-y-20">
            {CUSTOMER_CASE.map((customercase, index) => (
              <div
                className="w-full flex flex-col gap-4 max-w-[636px]"
                key={customercase.id + index}
              >
                <img
                  src={customercase.imgUrl}
                  alt={customercase.title}
                  className="max-w-[636px] max-h-[400px] w-full h-auto object-cover rounded-md"
                />
                <div className="w-full flex flex-col items-center justify-center gap-4 px-4">
                  <div className="w-full flex flex-col justify-center gap-2">
                    <h4 className="text-[20px] leading-6 font-bold text-[#3B3B3B] whitespace-nowrap">
                      {customercase.title}
                    </h4>
                    <p className="text-base font-normal leading-6 text-[#919191]">
                      {customercase.description}
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    {customercase.categories.map((category, index) => (
                      <div
                        className="flex items-center justify-center bg-[#F1F1F1] rounded-2xl px-3 py-1"
                        key={index}
                      >
                        <p className="text-base font-normal leading-6 text-[#3B3B3B]">
                          {category}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full flex flex-col gap-10 items-center justify-center py-20 lg:py-30">
          <div className="w-full flex justify-center items-center gap-4">
            <img
              src={decoLeft_sm}
              alt="services"
              className="w-14 h-1.5 object-cover block md:hidden lg:hidden"
            />
            <img
              src={decoLeft_lg}
              alt="services"
              className="w-25 h-1.5 object-cover hidden md:block lg:block"
            />
            <h2 className="text-[24px] font-bold leading-[28.8px] tracking-[12%] text-[#3B3B3B] md:text-[32px] md:font-semibold md:leading-[38.4px] md:tracking-[12%] lg:text-[32px] lg:font-semibold lg:leading-[38.4px] lg:tracking-[12%]">
              常見問題
            </h2>
            <img
              src={decoRight_sm}
              alt="services"
              className="w-14 h-1.5 object-cover block md:hidden lg:hidden"
            />
            <img
              src={decoRight_lg}
              alt="services"
              className="w-25 h-1.5 object-cover hidden md:block lg:block"
            />
          </div>
          <div className="w-full grid grid-cols-1 place-items-center gap-6 px-5 lg:grid-cols-2 lg:max-w-[1076px]">
            {COMMON_QUESTION.map((faq, index) => (
              <div
                className="w-full h-full flex flex-col justify-center gap-4 border border-[#E9E9E9] rounded-lg p-6 max-w-[526px] max-h-[141px]"
                key={faq.id + index}
              >
                <h4 className="text-[20px] font-bold leading-6 text-[#3B3B3B]">
                  {faq.title}
                </h4>
                <p className="text-base leading-6 text-[#5B5B5B] font-normal">
                  {faq.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
export default Services;
