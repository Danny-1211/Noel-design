import footerBg from "../assets/imgs/footer/footer-bg-lg.png";

function Footer() {
  return (
    <footer style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="max-w-[1296px] h-[424px] mx-auto">
        <div className="flex items-center h-full gap-x-[324px]">
          <div className="w-[686px]">left</div>
          <div className="w-[72px]">right</div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
