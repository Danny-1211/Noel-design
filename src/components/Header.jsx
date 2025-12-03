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
    <nav className=" bg-[#fff] w-full mx-auto max-w-[1296px] h-[56px] lg:h-24 flex items-center justify-start px-3">
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

    
    </nav>
  );
}
export default Header;
