import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo/logo.png";
import menu from "../assets/imgs/icon/menu.svg";

function Header() {
  const navItems = [
    { name: "首頁", path: "/" },
    { name: "作品集", path: "/collection" },
    { name: "服務項目", path: "/" },
    { name: "部落格", path: "/" },
    { name: "聯絡我", path: "/" },
  ];
  return (
    <nav className="fixed bg-[#fff] w-full mx-auto max-w-[1296px] h-[56px] lg:h-24 flex items-center justify-start px-3">
      <div className="logo mr-[318px] mr-auto">
        <img className="" src={logo} alt="logo" />
      </div>
      <div className="hidden lg:flex max-w[480px] gap-x-10">
        {navItems.map((item, index) => {
          return (
            <Link
              className="py-1 px-5 font-normal leading-6"
              to={item.path}
              key={index}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="meunBtn lg:hidden">
        <img src={menu} alt="" />
      </div>

      <div className="menuList z-30 lg:hidden  fixed top-[56px] left-0 w-full bg-[#fff] flex flex-col gap-y-[24px] py-[40px]">
        {/* menuList */}
        {navItems.map((item, index) => {
          return (
            <Link
              className="font-normal text-[20px] leading-[30px] text-center py-[4px] px-[8px]"
              to={item.path}
              key={index}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="gray bg-black opacity-70 fixed left-0 bottom-0 -z-20 w-full h-[500px]">
      </div>
    </nav>
  );
}
export default Header;
