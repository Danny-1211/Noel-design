import titleLeftLg from "../../assets/imgs/icon/title deco-left-lg.svg";
import titleRightLg from "../../assets/imgs/icon/title deco-right-lg.svg";
import titleLeftSm from "../../assets/imgs/icon/title deco-left-sm.svg";
import titleRightSm from "../../assets/imgs/icon/title deco-right-sm.svg";

import articleIamge1 from "../../assets/imgs/article-image/article-image1.png";
import articleIamge2 from "../../assets/imgs/article-image/article-image2.png";
import articleIamge3 from "../../assets/imgs/article-image/article-image3.png";
function ArticlesSection() {
  return (
    <section className="py-[120px]">
      <div className="max-lg:hidden px-5">
        <h2 className="collection-title mb-20 mx-auto flex justify-center items-center gap-x-[16px] font-[600] text-[32px] leading-[38.4px] tracking-[35.84px]">
          <img src={titleLeftLg} alt="" />
          精選文章
          <img src={titleRightLg} alt="" />
        </h2>

        <div className="flex max-w-[1296px] w-[100%] mx-auto gap-x-[24px]">
          <div className="">
            <div
                className="mb-[16px] w-[416px] h-[234px] bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${articleIamge1})` }}
            ></div>
            <div className="mb-[16px] font-[700] text-[20px] leading-[24px]">
              Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)
            </div>
            <div className="flex justify-between font-[400] leading-[24px] text-[rgba(59,59,59,1)]">
              <a
                className="block py-[4px] px-[12px] bg-[rgba(241,241,241,1)] rounded-2xl"
                href=""
              >
                UI/UX 新知
              </a>
              <span className="block ">2023/11/20</span>
            </div>
          </div>

          <div className="">
            <div
                className="mb-[16px] w-[416px] h-[234px] bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${articleIamge2})` }}
            ></div>
            <div className="mb-[16px] font-[700] text-[20px] leading-[24px]">
              給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)
            </div>
            <div className="flex justify-between font-[400] leading-[24px] text-[rgba(59,59,59,1)]">
              <a
                className="block py-[4px] px-[12px] bg-[rgba(241,241,241,1)] rounded-2xl"
                href=""
              >
                UI/UX 新知
              </a>
              <span className="block ">2024/02/10</span>
            </div>
          </div>

          <div className="">
            <div
                className="mb-[16px] w-[416px] h-[234px] bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${articleIamge3})` }}
            ></div>
            <div className="mb-[16px] font-[700] text-[20px] leading-[24px]">
              給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)
            </div>
            <div className="flex justify-between font-[400] leading-[24px] text-[rgba(59,59,59,1)]">
              <a
                className="block py-[4px] px-[12px] bg-[rgba(241,241,241,1)] rounded-2xl"
                href=""
              >
                UI/UX 新知
              </a>
              <span className="block ">2023/10/18</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden px-5">
        <h2 className="collection-title mb-[40px] mx-auto flex justify-center gap-x-[16px] font-[700] text-[24px] leading-[28px] tracking-[1.12px]">
          <img src={titleLeftSm} alt="" />
          精選文章
          <img src={titleRightSm} alt="" />
        </h2>

        <div className="flex flex-col gap-y-[48px]">
          <div className="">
            <div
              className="mb-[16px] basis-[416px] aspect-[416/234] bg-cover"
              style={{ backgroundImage: `url(${articleIamge1})` }}
            ></div>
            <div className="mb-[16px] font-[700] text-[20px] leading-[24px]">
              Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)
            </div>
            <div className="flex justify-between font-[400] leading-[24px] text-[rgba(59,59,59,1)]">
              <a
                className="block py-[4px] px-[12px] bg-[rgba(241,241,241,1)] rounded-2xl"
                href=""
              >
                UI/UX 新知
              </a>
              <span className="block ">2024/02/10</span>
            </div>
          </div>

          <div className="">
            <div
              className="mb-[16px] basis-[416px] aspect-[416/234] bg-cover"
              style={{ backgroundImage: `url(${articleIamge2})` }}
            ></div>
            <div className="mb-[16px] font-[700] text-[20px] leading-[24px]">
              給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)
            </div>
            <div className="flex justify-between font-[400] leading-[24px] text-[rgba(59,59,59,1)]">
              <a
                className="block py-[4px] px-[12px] bg-[rgba(241,241,241,1)] rounded-2xl"
                href=""
              >
                UI/UX 新知
              </a>
              <span className="block ">2023/11/20</span>
            </div>
          </div>

          <div className="">
            <div
              className="mb-[16px] basis-[416px] aspect-[416/234] bg-cover"
              style={{ backgroundImage: `url(${articleIamge3})` }}
            ></div>
            <div className="mb-[16px] font-[700] text-[20px] leading-[24px]">
              給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)
            </div>
            <div className="flex justify-between font-[400] leading-[24px] text-[rgba(59,59,59,1)]">
              <a
                className="block py-[4px] px-[12px] bg-[rgba(241,241,241,1)] rounded-2xl"
                href=""
              >
                UI/UX 新知
              </a>
              <span className="block ">2023/10/18</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;
