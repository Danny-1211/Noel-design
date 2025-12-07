import { Link } from "react-router-dom";
import lineLeft_lg from "../assets/imgs/icon/line_left_lg.svg";
import lineRight_lg from "../assets/imgs/icon/line_right_lg.svg";
import lineLeft_sm from "../assets/imgs/icon/Line_left_sm.svg";
import lineRight_sm from "../assets/imgs/icon/Line_right_sm.svg";
import { getAllBlogs, getBlogCategorires } from "../services/blogService.js";
function Blog() {
  const BLOGS = getAllBlogs();
  const CATEGORY_SET = getBlogCategorires();
  return (
    <>
      <div className="blog w-full  flex flex-col items-center justify-center py-10 lg:max-w-[1920px] lg:py-[120px] lg:gap-20">
        <div className="blog-intro flex flex-col justify-between items-center ">
          <div className="intro-title flex gap-4 items-center justify-center">
            <img className="hidden lg:block" src={lineLeft_lg} alt="line" />
            <img className=" lg:hidden" src={lineLeft_sm} alt="line" />
            <p className="text-[#3B3B3B] font-semibold lg:text-[32px]">
              部落格
            </p>
            <img className="hidden lg:block" src={lineRight_lg} alt="line" />
            <img className=" lg:hidden" src={lineRight_sm} alt="line" />
          </div>
          <div className="intro-subTitle">
            <p className="text-[#919191] font-normal lg:text-base">
              不定期分享技術文章
            </p>
          </div>
        </div>
        <main className="blog-main flex flex-col-reverse gap-10 items-center lg:flex-row lg:gap-6  lg:items-stretch lg:justify-start ">
          <section className="main-ariticle flex flex-col items-center justify-center gap-4 max-w-[306px] lg:gap-16 lg:max-w-[966px]">
            {BLOGS.map((item, index) => {
              return (
                <Link
                  className="ariticle-item flex flex-col items-start justify-start lg:flex-row gap-4"
                  key={index + "" + item.id}
                  to={`/blogdetail/${item.id}`}
                >
                  <div className="item-img w-full">
                    <img
                      className=" border border-[#F1F1F1] rounded-lg object-cover lg:max-w-[306px] lg:h-[220px]"
                      src={item.imgUrl}
                      alt="imgUrl"
                    />
                  </div>
                  <div className="item-content flex flex-col items-start justify-start gap-4">
                    <div className="content-tags w-full flex justify-between items-center lg:justify-start lg:gap-4">
                      <div className="tags-date flex justify-center items-center">
                        <p className="text-[#3B3B3B] text-base leading-6 font-normal  lg:text-base">
                          {item.date}
                        </p>
                      </div>
                      <div className="tag bg-[#F1F1F1] border border-[#F1F1F1] rounded-2xl px-3 py-1">
                        <p className="text-[#3B3B3B] leading-6">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <div className="content-title">
                      <p className="font-semibold lg:text-[#3B3B3B] lg:text-[20px] lg:leading-6">
                        {item.title}
                      </p>
                    </div>
                    <div className="content-desc">
                      <p className="text-[#3B3B3B] text-base leading-6 font-normal">
                        {item.desription}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
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
        </main>
      </div>
    </>
  );
}
export default Blog;
