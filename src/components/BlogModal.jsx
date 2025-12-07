import icon_close from "../assets/imgs/icon/close.svg";
function BlogModal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal  fixed inset-0 z-50 bg-black/60 flex justify-center py-10"
      onClick={onClose}
    >
      <div
        className=" w-full max-w-[351px] bg-[#FAFAFA] flex flex-col  items-center my-auto max-h-full border-[#FAFAFA] rounded-2xl   overflow-y-auto  lg:max-w-[1076px] "
        onClick={(e) => e.stopPropagation()}
      >
        <section className="close  w-full flex justify-end items-center pt-8 px-8 gap-2.5  lg:pt-8 lg:px-10 ">
          <button type="button" onClick={onClose}>
            <img src={icon_close} alt="icon_close" />
          </button>
        </section>
        <section className="intro w-full flex flex-col  items-center justify-center py-6 gap-6 lg:gap-10 lg:py-10">
          <div className="intro-title flex flex-col gap-2 items-center justify-center px-8 ">
            <h1 className="text-[28px] font-bold leading-[33px] text-[#3B3B3B]">
              {project.title}
            </h1>
            <h3 className="text-base font-normal leading-6 text-[#919191]">
              {project.subtitle}
            </h3>
          </div>
          <div className="intro-content flex flex-col gap-6 px-8 lg:flex-row lg:justify-center lg:items-center">
            <div className="content-desc text-base leading-6 font-normal text-[#1E1E1E] ">
              {project.desc}
            </div>
            <div className="content-prcinple flex flex-col gap-6 pt-6 border-t border-[#E1E1E1] lg:w-full lg:border-l lg:border-t-0  lg:pl-6 lg:gap-2 lg:justify-start lg:items-start">
              <span className="flex flex-col items-center justify-center gap-1 lg:flex-row">
                <span className="hidden lg:flex lg:text-base  lg:font-normal  lg:leading-6  lg:text-[#5B5B5B]">
                  <p>設計原則</p>:
                </span>
                <span className="lg:hidden  text-base  font-normal  leading-6 text-[#5B5B5B]">
                  <p>設計原則</p>
                </span>
                <div className="flex ">
                  {project.principle.map((item, index) => {
                    return (
                      <span
                        key={index}
                        className="text-base font-normal leading-6 text-[#5B5B5B]"
                      >
                        {item}
                        {index !== project.principle.length - 1
                          ? "、"
                          : ""}{" "}
                      </span>
                    );
                  })}
                </div>
              </span>
              <span className="flex flex-col items-center justify-center  gap-1 lg:flex-row">
                <span className="hidden lg:flex lg:text-base  lg:font-normal  lg:leading-6  lg:text-[#5B5B5B]">
                  <p>開發方式</p>:
                </span>
                <span className="lg:hidden text-base font-normal leading-6 text-[#5B5B5B]">
                  <p>開發方式</p>
                </span>
                <div className="flex">
                  {project.development.map((item, index) => {
                    return (
                      <span
                        key={index}
                        className="text-base font-normal leading-6 text-[#5B5B5B]"
                      >
                        {item}
                        {index !== project.principle.length - 1
                          ? "、"
                          : ""}{" "}
                      </span>
                    );
                  })}
                </div>
              </span>
            </div>
          </div>
        </section>
        <section className="main bg-[#FAFAFA] py-10 gap-14 flex flex-col justify-center items-center lg:py-20 ">
          {project.detail.map((item, index) => {
            return (
              <div
                key={index}
                className="card flex flex-col items-center justify-center gap-2 max-w-[319px] lg:max-w-[720px]"
              >
                <div className="card-img ">
                  <img
                    className="object-cover  border border-[#000000] rounded-lg"
                    src={item.image_path}
                    alt={item.title}
                  />
                </div>
                <div className="card-intro flex flex-col items-center justify-center gap-2">
                  <p className="text-[20px] text-[#1E1E1E] leading-6 font-bold">
                    {item.title}
                  </p>
                  <p className="text-base font-normal leading-6 text-[#5B5B5B]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default BlogModal;
