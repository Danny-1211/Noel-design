import price_visual_icon from "../assets/imgs/icon/price-item-visual.svg";
import pirce_ui_icon from "../assets/imgs/icon/price-item-ui.svg";
import price_frontend_icon from "../assets/imgs/icon/price-item-front-end.svg";
import visual_design_icon from "../assets/imgs/icon/service-item-visual.svg";
import ui_icon from "../assets/imgs/icon/service-item-ui.svg";
import html_css_icon from "../assets/imgs/icon/service-item-html&css.svg";
import front_end_icon from "../assets/imgs/icon/service-item-front-end.svg";
import case_pos from "../assets/imgs/work-image/work-image4.png";
import case_brandSite from "../assets/imgs/work-image/work-image5.png";
import case_movie from "../assets/imgs/work-image/work-image6.png";
import case_orange from "../assets/imgs/work-image/work-image7.png";
const PROCESS_STEP = [
  {
    id: 1,
    title: "初步接洽",
    content:
      "透過表單或其他社群軟體與我聯絡根據難易度與複雜度，後續可能需要電話/線上討論",
  },
  {
    id: 2,
    title: "需求釐清",
    content: "透過訪談與問卷，解析客戶需求，並針對痛點給予實際建議",
  },
  {
    id: 3,
    title: "委託簽約",
    content:
      "合約雙方用印後，即正式開始合作可提供發票或勞務報酬單，須支付 20% 訂金",
  },
  { id: 4, title: "版本呈現", content: "根據合約內容進行設計或開發" },
  {
    id: 5,
    title: "來回修正",
    content: "依據合約規定之修正次數進行，次數計算以 mail 為準",
  },
  { id: 6, title: "終版確認", content: "雙方同意後即為最終版" },
  { id: 7, title: "結案", content: "客戶簽署驗收單，並於約定日期支付尾款" },
];
const PRICE_SET = [
  { id: 1, iconUrl: price_visual_icon, title: "平面設計", price: "6,000" },
  { id: 2, iconUrl: pirce_ui_icon, title: "UI設計", price: "15,000" },
  { id: 3, iconUrl: price_frontend_icon, title: "前端開發", price: "22,000" },
];
const CUSTOMER_CASE = [
  {
    id: 1,
    imgUrl: case_pos,
    title: "美美美早餐店 POS 機 UI Design",
    description: "訂單送單一目瞭然，自動報表分析好輕鬆",
    categories: ["UI 設計", "前端開發", "Wix"],
  },
  {
    id: 2,
    imgUrl: case_brandSite,
    title: "巧克巧克形象官網設計",
    description: "三步驟完成訂票，電腦手機都支援",
    categories: ["UI 設計", "設計系統", "網路電商"],
  },
  {
    id: 3,
    imgUrl: case_movie,
    title: "電影院訂票系統",
    description: "三步驟完成訂票，電腦手機都支援",
    categories: ["前端開發", "後端支援", "Vue"],
  },
  {
    id: 4,
    imgUrl: case_orange,
    title: "2023 餉茶坊飲料旗艦店活動官網設計",
    description: "主打水果主題，冰鎮夏天暑氣",
    categories: ["網頁設計", "切版服務", "Javascript"],
  },
];
const COMMON_QUESTION = [
  {
    id: 1,
    title: "時程很趕的話可以加快作業嗎？",
    content: "每提早一天，只要支付總報價的 5%，我們即會視為急件為您趕工！",
  },
  {
    id: 2,
    title: "白天可以開會討論嗎？",
    content: "每週一三五的白天，可以約定開會時間！",
  },
  {
    id: 3,
    title: "有實際開發的網站可以參考嗎？",
    content: "請填寫表單或來信索取，部分合作有簽保密協定，無法於網路上公開喔。",
  },
  {
    id: 4,
    title: "提供比稿服務嗎？",
    content:
      "只要支付費用，設計提供比稿服務，但切版與前端開發恕不提供該服務內容。",
  },
];

const SERVICES_SET = [
  { id: 1, title: "平面設計", iconUrl: visual_design_icon },
  { id: 2, title: "UI 設計", iconUrl: ui_icon },
  { id: 3, title: "切版服務", iconUrl: html_css_icon },
  { id: 4, title: "前端開發", iconUrl: front_end_icon },
];

export {
  PROCESS_STEP,
  PRICE_SET,
  CUSTOMER_CASE,
  COMMON_QUESTION,
  SERVICES_SET
};