import mark from "../assets/imgs/icon/mark.svg";
import quoteLeft from "../assets/imgs/icon/quote-left.svg";
import quoteRight from "../assets/imgs/icon/quote-right.svg";
import COLLECTION_LIST from "../data/collection_list";
import Card from "../components/Card";
function Collection() {
  const pagesCount = 3; // 先當作總共有幾頁缺版用, 之後套功能
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center lg:max-w-[1920px] ">
        <div className=" banner w-full bg-[#FAFAFA] lg:flex lg:items-center lg:justify-center lg:py-20 lg:gap-6">
          <div className="banner-content flex flex-col items-center justify-center gap-10 px-6 py-10 lg:p-0 lg:w-full lg:max-w-[670px]">
            <div className="content-title lg:flex lg:flex-col  lg:justify-center lg:w-full ">
              <div className="title-left-quote flex items-center justify-center lg:w-full lg:justify-start">
                <img src={quoteLeft} alt="quoteLeft" />
              </div>
              <div className="title-text flex flex-col items-center justify-center gap-2 lg:gap-4 ">
                <div className="text-item flex flex-col items-center justify-center gap-2 lg:flex-row">
                  <p className="font-normal leading-[30px] text-xl text-[#1E1E1E]">
                    讓使用者在觀賞與使用的旅程中，
                  </p>
                  <div className="text-point relative">
                    <p className="relative font-normal leading-[30px] text-xl text-[#1E1E1E] z-10">
                      發現設計的價值
                    </p>
                    <img
                      className="absolute left-8 bottom-1 z-0"
                      src={mark}
                      alt="mark"
                    />
                  </div>
                </div>
                <div className="text-item flex flex-col items-center justify-center gap-2 lg:flex-row">
                  <p className="font-normal leading-[30px] text-xl text-[#1E1E1E]">
                    而我在設計與開發的過程中，
                  </p>
                  <div className="text-point relative">
                    <p className="relative font-normal leading-[30px] text-xl text-[#1E1E1E] z-10">
                      看見自己的價值
                    </p>
                    <img
                      className="absolute left-8 bottom-1 z-0 "
                      src={mark}
                      alt="mark"
                    />
                  </div>
                </div>
              </div>
              <div className="title-right-quote hidden lg:flex lg:items-center lg:w-full lg:justify-end">
                <img src={quoteRight} alt="quoteRight" />
              </div>
            </div>
            <div className="content-subTitle flex flex-col items-center justify-center gap-5 lg:w-full lg:flex-row lg:justify-between lg:gap-8">
              <div className="subTitle-item w-full max-w-[235px] flex flex-col items-center justify-center gap-2 lg:max-w-[298px]">
                <div className="item-title flex flex-col items-center justify-center">
                  <p className="font-normal leading-6 text-base text-[#5B5B5B]">
                    2B經驗
                  </p>
                  <div className="bar border-b border-2 border-[#C1C1C1] w-6"></div>
                </div>
                <p className="font-normal leading-6 text-base text-[#3B3B3B] text-center">
                  內部監控系統、庫存系統、採購系統、行銷整合系統
                </p>
              </div>
              <div className="subTitle-item w-full max-w-[235px] flex flex-col items-center justify-center gap-2 lg:max-w-[298px]">
                <div className="item-title flex flex-col items-center justify-center">
                  <p className="font-normal leading-6 text-base text-[#5B5B5B]">
                    2C經驗
                  </p>
                  <div className="bar border-b border-2 border-[#C1C1C1] w-6"></div>
                </div>
                <p className="font-normal leading-6 text-base text-[#3B3B3B] text-center">
                  跨國美妝保養電商、個人品牌網站、醫美網站、電子商務
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="collect flex flex-col items-center justify-center py-20 gap-12 lg:py-[120px] lg:gap-[72px]">
          <div className="collect-list w-full flex items-center justify-center flex-wrap  py-80px  gap-12 lg:max-w-[1296px] lg:gap-6">
            {COLLECTION_LIST.map((item, index) => {
              return <Card project={item} key={index} />;
            })}
          </div>
          <div className="collect-paganation">
            <div className="paganation-container flex ">
              {Array.from({length:pagesCount }).map((item, index) => (
                <div key={index} className="flex gap-4 px-[13px] py-0.5 lg:gap-2.5   border border-[#FFFFFF] rounded-sm
                hover:border-[#1E1E1E] hover:bg-[#1E1E1E]">
                  <p className="hover:text-[#FFFFFF] leading-6 font-normal text-[24px]"> {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
