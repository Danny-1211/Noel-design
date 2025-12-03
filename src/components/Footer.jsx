import footerBg from "../assets/imgs/footer/footer-bg-lg.png";
import footerBgSm from "../assets/imgs/footer/footer-bg-sm.png";
import fb from "../assets/imgs/icon/facebook.svg";
import ig from "../assets/imgs/icon/instagram.svg";
import list from "../assets/imgs/icon/list.svg";

function Footer() {
  return (
    <footer>
      <div className="max-lg:hidden w-full" style={{ backgroundImage: `url(${footerBg})` }}>
        <div className="px-5 max-w-[1062px] h-[424px] mx-auto">
          <div className="flex items-center h-full ">
            <div className="w-[686px] flex flex-col gap-y-6">
              <div className="text-[34px] font-bold">Noel</div>
              <div className="text-[#3B3B3B] text-[20px] font-normal leading-[30px]">
                <p>若有數位產品設計和開發相關問題</p>
                <p>歡迎填寫表單，或直接與我聯絡！</p>
              </div>
              <div className="text-[#919191] text-[20px] font-normal leading-6">
                service@hexschool.com
              </div>
            </div>
            <div className="min-w-[306px] ml-auto flex flex-col gap-y-6">
              <div className="flex items-center border-black border rounded-lg py-2 pl-6 bg-black text-white">
                <div className="w-14 h-14 mr-2">
                  <img src={list} alt="list icon" />
                </div>
                填寫表單
              </div>
              <div className="flex items-center border-[#C1C1C1] border rounded-lg py-2 pl-6 pr-6">
                <div className="w-14 h-14 mr-2">
                  <img src={ig} alt="ig_icon" />
                </div>
                hexschool_demo
              </div>
              <div className="flex items-center border-[#C1C1C1] border rounded-lg py-2 pl-6 pr-6">
                <div className="w-14 h-14 mr-2">
                  <img src={fb} alt="fb_icon" />
                </div>
                hexschoolTW
              </div>
            </div>
          </div>
        </div>
      </div>

        <div
          className="lg:hidden flex w-full items-center flex-col gap-y-10 py-10"
          style={{ backgroundImage: `url(${footerBgSm})` }}
        >
          <div className=" flex flex-col gap-y-6">
            <div className="text-[34px] font-bold">Noel</div>
            <div className="font-normal leading-6 text-[#3B3B3B]">
              <p>若有數位產品設計和開發相關問題</p>
              <p>歡迎填寫表單，或直接與我聯絡！</p>
            </div>
            <div className="font-normal leading-6 text-[#919191]">
              service@hexschool.com
            </div>
          </div>

          <div className="min-w-[306px] flex flex-col gap-y-6">
            <div className="flex items-center border-black border rounded-lg py-2 pl-6 bg-black text-white">
              <div className="w-14 h-14 mr-2">
                <img src={list} alt="list_icon" />
              </div>
              填寫表單
            </div>
            <div className="flex items-center border-[#C1C1C1] border rounded-lg py-2 pl-6 pr-6">
              <div className="w-14 h-14 mr-2">
                <img src={ig} alt="ig_icon" />
              </div>
              hexschool_demo
            </div>
            <div className="flex items-center border-[#C1C1C1] border rounded-lg py-2 pl-6 pr-6">
              <div className="w-14 h-14 mr-2">
                <img src={fb} alt="fb_icon" />
              </div>
              hexschoolTW
            </div>
          </div>
        </div>
    </footer>
  );
}
export default Footer;
