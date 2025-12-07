import workImage1 from '../assets/imgs/work-image/work-image1.png';
import workImage2 from '../assets/imgs/work-image/work-image2.png';
import workImage3 from '../assets/imgs/work-image/work-image3.png';
import workImage4 from '../assets/imgs/work-image/work-image4.png';
import workImage5 from '../assets/imgs/work-image/work-image5.png';
import workImage6 from '../assets/imgs/work-image/work-image6.png';
import modalImage1 from '../assets/imgs/modal-image/modal-image1.png';
import modalImage2 from '../assets/imgs/modal-image/modal-image2.png';
const COLLECTION_LIST = [
  {
    id: 1,
    "image_path": workImage1,
    "title": "星際旅行訂票平台",
    "subtitle": "悠遊宇宙的夢想，從這裡開始實現",
    "desc": "STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。此專案專注於優化訂票流程，提供多樣化的艙位選擇與即時的航線狀態更新。",
    "tags": ["網頁設計", "響應式設計", "Bootstrap"],
    "principle": ["宇宙旅行", "深色背景", "強烈視覺效果"],
    "development": ["Bootstrap", "Javascript", "RWD"],
    "detail": [
      {
        title: "主視覺",
        image_path: modalImage1,
        desc: "可直接設定日期、起迄星球、張數，快速查詢可購買的票券。"
      },
      {
        title: "推薦查詢",
        image_path: modalImage2,
        desc: "給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。"
      },
    ]
  },
  {
    id: 2,
    "image_path": workImage2,
    "title": "理財App",
    "subtitle": "連動帳戶與行動支付，讓 AI 提供您最好的理財建議",
    "desc": "這是一款專為現代人設計的智能理財應用程式。它能夠安全地連動多個銀行帳戶和主流行動支付平台，即時追蹤您的消費習慣，並利用 AI 演算法生成個人化的財務報表與儲蓄建議。目標是讓複雜的理財變得簡單直觀。",
    "tags": ["APP設計", "IOS", "React Native"],
    "principle": ["極簡主義", "數據視覺化", "用戶信任"],
    "development": ["Swift", "React Native", "API Integration"],
    "detail": [
      {
        title: "主視覺",
        image_path: modalImage1,
        desc: "可直接設定日期、起迄星球、張數，快速查詢可購買的票券。"
      },
      {
        title: "推薦查詢",
        image_path: modalImage2,
        desc: "給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。"
      },
    ]
  },
  {
    id: 3,
    "image_path": workImage3,
    "title": "醫美診所官網",
    "subtitle": "永保青春的秘密，從粹究開始，展現精緻專業形象",
    "desc": "為頂級醫美診所「粹究」設計的官方網站，旨在建立專業、高端且值得信賴的品牌形象。網站提供完整的療程介紹、醫師團隊資歷、線上預約系統以及客戶見證。設計強調優雅的排版與柔和的色彩。",
    "tags": ["網頁設計", "響應式設計", "WordPress"],
    "principle": ["優雅奢華", "專業信賴", "照片質感"],
    "development": ["WordPress", "PHP", "客製化佈景"],
    "detail": [
      {
        title: "主視覺",
        image_path: modalImage1,
        desc: "可直接設定日期、起迄星球、張數，快速查詢可購買的票券。"
      },
      {
        title: "推薦查詢",
        image_path: modalImage2,
        desc: "給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。"
      },
    ]
  },
  {
    id: 4,
    "image_path": workImage4,
    "title": "美美美早餐店 POS 機 UI Design",
    "subtitle": "訂單送單一目瞭然，自動報表分析好輕鬆",
    "desc": "專為早餐店量身打造的點餐系統 (POS) UI/UX 設計。核心目標是提升尖峰時段的點餐效率與降低錯誤率。介面採用高對比色彩和直覺式拖曳操作，並內建庫存管理及銷售趨勢自動報表功能。",
    "tags": ["UI 設計", "前端開發", "Figma"],
    "principle": ["高效率", "直覺操作", "色彩區分"],
    "development": ["Vue.js", "Electron", "SQLite"],
    "detail": [
      {
        title: "主視覺",
        image_path: modalImage1,
        desc: "可直接設定日期、起迄星球、張數，快速查詢可購買的票券。"
      },
      {
        title: "推薦查詢",
        image_path: modalImage2,
        desc: "給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。"
      },
    ]
  },
  {
    id: 5,
    "image_path": workImage5,
    "title": "電影院訂票系統",
    "subtitle": "三步驟完成訂票，電腦手機都支援，享受極致觀影體驗",
    "desc": "這是一套跨平台的電影訂票系統，從選片、選場次到劃位付款，全程只需三個簡單步驟。系統整合了即時座位圖與多種行動支付方式，確保使用者無論在電腦或手機上都能擁有流暢且愉快的購票體驗。",
    "tags": ["前端開發", "後端支援", "Vue"],
    "principle": ["快速結帳", "友善介面", "全平台支援"],
    "development": ["Vue", "Node.js", "API 設計"],
    "detail": [
      {
        title: "主視覺",
        image_path: modalImage1,
        desc: "可直接設定日期、起迄星球、張數，快速查詢可購買的票券。"
      },
      {
        title: "推薦查詢",
        image_path: modalImage2,
        desc: "給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。"
      },
    ]
  },
  {
    id: 6,
    "image_path": workImage6,
    "title": "巧克巧克形象官網設計",
    "subtitle": "打造精品巧克力品牌，展現工藝與風味的完美結合",
    "desc": "為精品手工巧克力品牌「巧克巧克」設計的官方網站與網路電商平台。網站重點呈現巧克力的製作工藝、原料來源以及產品線。設計風格著重於溫暖、高品質的視覺感受，提升品牌價值並刺激線上銷售。",
    "tags": ["UI設計", "設計系統", "網路電商"],
    "principle": ["溫暖質感", "故事行銷", "簡潔購物車"],
    "development": ["Shopify", "Liquid", "Sass"],
    "detail": [
      {
        title: "主視覺",
        image_path: modalImage1,
        desc: "可直接設定日期、起迄星球、張數，快速查詢可購買的票券。"
      },
      {
        title: "推薦查詢",
        image_path: modalImage2,
        desc: "給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。"
      },
    ]
  }
];

export default COLLECTION_LIST;