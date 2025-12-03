import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/imgs/logo/logo.png";
import menu from "../assets/imgs/icon/menu.svg";
import close from "../assets/imgs/icon/close.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "首頁", path: "/" },
    { name: "作品集", path: "/collection" },
    { name: "服務項目", path: "/" },
    { name: "部落格", path: "/" },
    { name: "聯絡我", path: "/" },
  ];
  return (
    <nav className="bg-white border-b border-[rgba(241,241,241,1)] w-full mx-auto max-w-[1296px] h-[56px] lg:h-24 flex items-center justify-start px-3 relative">
      <div className="logo mr-auto lg:mr-[318px]">
        <img src={logo} alt="logo" />
      </div>

      {/* 桌機選單 */}
      <div className="hidden lg:flex max-w[480px] gap-x-10">
        {navItems.map((item, index) => (
          <Link
            className="py-1 px-5 font-normal leading-6"
            to={item.path}
            key={index}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* 手機 menu 按鈕 */}
      <div className="meunBtn lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? close : menu} alt="menu" />
      </div>

      {/* 手機選單 */}
      {isOpen && (
        <div className="menuList z-30 lg:hidden absolute top-[56px] left-0 w-full bg-white flex flex-col gap-y-6 py-10">
          {navItems.map((item, index) => (
            <Link
              className="font-normal text-[20px] leading-[30px] text-center py-[4px] px-[8px]"
              to={item.path}
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* 灰色背景 menuList */}
      {isOpen && (
        <div className="gray bg-black opacity-30 lg:hidden fixed left-0 top-14 w-screen h-screen z-10"
        onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}
export default Header;
