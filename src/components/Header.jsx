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
    <nav className="w-full mx-auto flex items-center justify-start">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="hidden lg:flex">
        {
          navItems.map((item,index) => {
            return (
              <Link className="" to={item.path} key={index}>
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
