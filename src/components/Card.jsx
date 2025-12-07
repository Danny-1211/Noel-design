import { useState } from "react";
import Modal from "../components/BlogModal.jsx";
function Card({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="card w-full max-w-[351px] lg:max-w-[636px] flex flex-col gap-4" onClick={() => setIsOpen(true)}>
        <div className="card-img ">
          <img className="border border-[#F1F1F1] rounded-sm lg:rounded-lg" src={project.image_path} alt={project.title}/>
        </div>
        <div className="card-desc flex flex-col lg:px-4 gap-2 lg:gap-6 ">
          <div className="desc-title flex flex-col  items-start justify-start lg:gap-2 ">
            <p className="text-[#3B3B3B] font-normal leading-6 text-xl lg:text-base lg:text-[28px]">
              {project.title}
            </p>
            <p className="text-[#919191] font-normal  leading-6 lg:text-base">
              {project.subtitle}
            </p>
          </div>
          <div className="desc-tags flex gap-2 lg:gap-4 ">
            {project.tags.map((item, index) => { 
              return (
                <div
                  className="tag flex border-[#F1F1F1] bg-[#F1F1F1] rounded-2xl   py-1 px-3  lg:gap-2.5"
                  key={index}
                >
                  <p className="text-[#3B3B3B] font-normal text-base leading-6">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} project={project}></Modal>
    </>
  );
}

export default Card;
