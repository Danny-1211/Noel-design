import { useParams } from "react-router-dom";
import {
  getBlogById,
  getBlogCategorires,
  getRecommendBlog,
} from "../services/blogService.js";
import RECOMMENDCard from "../components/RecommendCard.jsx";
function BlogDetail() {
  // 抓取網址上的參數
  const { id } = useParams();
  const BLOGS_ITEM = getBlogById(id);
  const CATEGORY_SET = getBlogCategorires();
  const RECOMMEND_BLOGS = getRecommendBlog();
  return (
    <>
      <div className="detail w-full flex flex-col-reverse items-center justify-center gap-8 lg:flex-row  lg:items-stretch lg:py-[120px]">
        <main className="detail-main w-full max-w-[351px] flex flex-col gap-10  items-center justify-center lg:max-w-[856px]">
          <div className="main-article   flex flex-col  gap-6 lg:item-center lg:justify-start lg:gap-10">
            <section className="article-path w-full flex justify-between items-center ">
              <p className="hidden lg:block text-[#919191] font-normal leading-6 text-base">
                {BLOGS_ITEM.category + " / " + BLOGS_ITEM.date + " 發佈"}
              </p>
              <p className="text-[#919191] font-normal leading-6 text-base lg:hidden">
                {BLOGS_ITEM.category}
              </p>
              <p className="text-[#919191] font-normal leading-6 text-base lg:hidden">
                {BLOGS_ITEM.date + " 發佈"}
              </p>
            </section>
            <section className="article-intro flex flex-col justify-center items-center gap-4 text-center">
              <h2 className="text-[##3B3B3B] font-bold leading-7 text-[24px] lg:text-[32px] lg:leading-[38px]">
                {BLOGS_ITEM.title}
              </h2>
              <h3 className="text-[#3B3B3B] font-normal leading-[19px] text-base lg:text-[24px] lg:leading-[28px]">
                {BLOGS_ITEM.detail.subTitle}
              </h3>
            </section>
            <section className="article-content flex flex-col gap-8">
              <article>
                <p className="text-[20px] leading-[30px] font-normal text-[#3B3B3B] whitespace-normal">
                  {BLOGS_ITEM.desription}
                </p>
              </article>
              <article className="flex flex-col gap-4">
                <h5 className="text-[20px] leading-6 font-bold text-[#3B3B3B] lg:text-[24px] lg:leading-7">
                  大眾看法
                </h5>
                <p className="text-[20px] leading-[30px] font-normal text-[#3B3B3B] whitespace-normal">
                  {BLOGS_ITEM.detail.publicOpinion}
                </p>
              </article>
              <article className="flex flex-col gap-4">
                <h5 className="text-[20px] leading-6 font-bold text-[#3B3B3B] lg:text-[24px] lg:leading-7">
                  現行產品
                </h5>
                <p className="text-[20px] leading-[30px] font-normal text-[#3B3B3B] whitespace-normal">
                  {BLOGS_ITEM.detail.currentProduct}
                </p>
              </article>
              <article className="flex flex-col gap-8 lg:flex-row lg:gap-6 lg:flex-wrap">
                {BLOGS_ITEM.detail.picSet.map((pic, index) => {
                  return (
                    <div
                      className="pic-info flex flex-col justify-center items-center max-w-[351px] lg:max-w-[416px]"
                      key={index}
                    >
                      <img src={pic.imgUrl} alt={pic.imgTitle} />
                      <p className="text-[#919191] font-normal leading-6 text-base ">
                        {pic.imgTitle}
                      </p>
                    </div>
                  );
                })}
              </article>
              <article className="flex flex-col gap-4">
                <h5 className="text-[20px] leading-6 font-bold text-[#3B3B3B] lg:text-[24px] lg:leading-7">
                  技術創新
                </h5>
                <p className="text-[20px] leading-[30px] font-normal text-[#3B3B3B] ">
                  {BLOGS_ITEM.detail.technologicalInnovation}
                </p>
              </article>
              <article className="flex flex-col gap-4">
                <h5 className="text-[20px] leading-6 font-bold text-[#3B3B3B] lg:text-[24px] lg:leading-7">
                  技術瓶頸
                </h5>
                <p className="text-[20px] leading-[30px] font-normal text-[#3B3B3B]">
                  {BLOGS_ITEM.detail.techologicalDiff}
                </p>
              </article>
              <article className="flex flex-col gap-4">
                <h5 className="text-[20px] leading-6 font-bold text-[#3B3B3B] lg:text-[24px] lg:leading-7">
                  未來展望
                </h5>
                <p className="text-[20px] leading-[30px] font-normal text-[#3B3B3B]">
                  {BLOGS_ITEM.detail.future}
                </p>
              </article>
              <article>
                <p className="text-base leading-6 font-normal text-[#3B3B3B]">
                  {BLOGS_ITEM.detail.author} 主筆
                </p>
              </article>
            </section>
            <section className="main-recommend flex flex-col w-full  items-center justify-center border-t border-[#C1C1C1] pt-6 pb-20 gap-10 lg:hidden">
              <h2 className="recommend-title text-[24px] font-bold leading-6 text-[#3B3B3B]">
                相關文章
              </h2>
              <div className="recommend-list flex flex-col gap-10">
                {RECOMMEND_BLOGS.map((item, index) => {
                  return <RECOMMENDCard articleInfo={item} key={index} />;
                })}
              </div>
            </section>
          </div>
        </main>
        <aside className="detail-category  max-w-[100vw] bg-[#FAFAFA]  px-3 py-5 flex flex-row  items-center gap-8  overflow-x-auto whitespace-nowrap  lg:flex-col lg:p-20 lg:gap-8 lg:overflow-visible lg:whitespace-normal lg:w-auto lg:max-w-none">
          <div className="flex shrink-0 gap-1 hover:border-b hover:border-[#1E1E1E] text-[#5B5B5B] hover:text-[#1E1E1E]">
            <p className=" text-base lg:text-[20px] font-normal leading-[30px] ">
              全部文章
            </p>
          </div>
          {CATEGORY_SET.map((item, index) => {
            return (
              <div
                className="flex shrink-0 gap-1 hover:border-b hover:border-[#1E1E1E] text-[#5B5B5B] hover:text-[#1E1E1E]"
                key={index}
              >
                <p className="text-base lg:text-[20px] font-normal leading-[30px] ">
                  {item}
                </p>
              </div>
            );
          })}
        </aside>
      </div>
      <div className="dash-desktop hidden lg:block lg:mx-auto lg:w-full lg:max-w-[1296px] lg:border-t lg:border-[#C1C1C1] lg:mt-[80px]"></div>
      <div className="recommend-desktop hidden lg:w-full lg:flex lg:items-center lg:px-[312px] lg:py-[120px]  ">
        <section className="main-recommend-desktop  lg:w-full  lg:flex lg:flex-col lg:items-center lg:justify-end  lg:gap-10">
          <h2 className="recommend-desktop-title text-[24px] font-bold leading-6 text-[#3B3B3B]">
            相關文章
          </h2>
          <div className="recommend-desktop-list flex flex-col gap-10 lg:flex-row lg:gap-6">
            {RECOMMEND_BLOGS.map((item, index) => {
              return <RECOMMENDCard articleInfo={item} key={index} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
}
export default BlogDetail;
