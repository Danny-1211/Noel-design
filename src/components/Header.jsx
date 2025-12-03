import { Link } from 'react-router-dom';
import logo from "../assets/imgs/logo/logo.png";
function Header() {
  const navItems = [
    { name: "首頁", path: "/" },
    { name: "作品集", path: "/" },
    { name: "服務項目", path: "/" },
    { name: "部落格", path: "/" },
    { name: "聯絡我", path: "/" },
  ];
  return (
    <nav className="w-full mx-auto max-w-[1296px] h-24 flex items-center justify-start">
      <div className="logo mr-[318px]">
        <img className='' src={logo} alt="logo" />
      </div>
      <div className="hidden lg:flex max-w[480px] gap-x-10">
        {
          navItems.map((item,index) => {
            return (
              <Link className="text-[24px] py-1 px-2" to={item.path} key={index}>
                {item.name}
              </Link>
            )
          })
        } 
      </div>
    </nav>
  );
}
export default Header;
