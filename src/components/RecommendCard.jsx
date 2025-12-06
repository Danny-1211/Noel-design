function RECOMMENDCard({ articleInfo }) {
  return (
    <>
      <article className=" info flex flex-col gap-4 max-w-[306px] lg:max-w-[416xpx]">
        <div className="info-img">
          <img
            className="border border-[#F1F1F1] rounded-sm lg:rounded-lg"
            src={articleInfo.imgUrl}
            alt={articleInfo.title}
          />
        </div>
        <div className="info-set flex flex-col lg:flex-col-reverse lg:px-2 lg:gap-4">
          <div className="info-tags flex justify-between items-center lg:flex-row-reverse">
            <div className="tags-date">  
              <p className="text-[#5B5B5B] font-normal leading-6 text-base"> {articleInfo.date}</p>
            </div>
            <div className="tags-category flex border-[#F1F1F1] bg-[#F1F1F1] rounded-2xl  py-1 px-3 ">
              <p className="text-[#3B3B3B] font-normal leading-6 text-base"> {articleInfo.category}</p>
            </div>
          </div>
          <div className="info-title">
            <p className="text-[#3B3B3B] font-semibold leading-6 text-xl ">
              {articleInfo.title}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
export default RECOMMENDCard;
