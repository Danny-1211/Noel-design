import article_vr_pre_pic from "../assets/imgs/article-image/article-image1.png";
import article_figma_dev_next_pic from "../assets/imgs/article-image/article-image2.png";
import article_figma_dev_pre_pic from "../assets/imgs/article-image/article-image3.png";
import article_vr_research_pic from "../assets/imgs/article-image/article-image4.png";
import article_team_meeting_pic from "../assets/imgs/article-image/article-image5.png";
import article_coffee_pic from "../assets/imgs/article-image/article-image6.png";
import detail_htc from "../assets/imgs/article-content-image/HTCVive.png";
import detail_oculus from "../assets/imgs/article-content-image/OculusRift.png";
import detail_vr from "../assets/imgs/article-content-image/PlayStationVR.png";
import detail_vp from "../assets/imgs/article-content-image/VisionPro.png";
const BLOG_LIST = [
  {
    id: 1,
    imgUrl: article_vr_pre_pic,
    date: "2024/02/10",
    category: "UI/UX 新知",
    title: "Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)",
    desription: "Vision Pro 終於在 2024 年 2 月正式開賣，距離正式發表的 2023 年 6 月，已有半年時間。這半年間，各種質疑聲不斷冒出，例如「太貴了，這是做給投資家看的產品，不能真的大量生產」、「續航力明顯不足，電池太重，不利於隨身攜帶使用」、「隔絕現實世界，會更加深世代或人際關係的隔閡」。",
    detail: {
      subTitle: "- 探索虛擬實境技術的現狀與前景 -",
      publicOpinion: "虛擬實境技術近年來受到越來越多人的關注和接受。人們對VR技術的潛力持樂觀態度，認為它能夠提供全新的體驗和娛樂方式，並在教育、訓練等領域中有著廣泛的應用前景。然而，也有一些人擔心虛擬實境技術的成熟度和可靠性，對其潛在風險抱有顧慮。",
      currentProduct: "目前市面上有許多虛擬實境產品，如Vision Pro、Oculus Rift、HTC Vive、PlayStation VR等。這些產品在硬件性能、軟件支持和使用者體驗等方面存在差異，而介面設計是影響使用者體驗的重要因素之一。不同的介面設計可以影響使用者的操作方式、感知真實度以及沈浸感。",
      technologicalInnovation: "隨著硬件技術的不斷進步，VR設備的性能和功能也在不斷提升。高解析度的顯示器、感應器、追蹤技術等創新技術的應用，使得虛擬實境的感知和互動性能夠更加真實和流暢。然而，技術創新也帶來了一些挑戰，例如圖像質量、感知延遲等問題仍然存在，需要進一步解決。",
      techologicalDiff: "隨著硬件技術的不斷進步，VR設備的性能和功能也在不斷提升。高解析度的顯示器、感應器、追蹤技術等創新技術的應用，使得虛擬實境的感知和互動性能夠更加真實和流暢。然而，技術創新也帶來了一些挑戰，例如圖像質量、感知延遲等問題仍然存在，需要進一步解決。技術瓶頸：儘管虛擬實境技術取得了巨大進步，但仍然存在一些技術瓶頸需要克服。例如，許多使用者報告在使用VR設備時出現眩暈和不適感，這與感知延遲和畫面模糊等問題有關。此外，虛擬實境的內容和應用也需要更多的創新和豐富，以滿足不同使用者的需求。",
      future: "未來，虛擬實境技術將繼續向前發展。我們可以期待更加先進的硬件設備和更加豐富多彩的虛擬內容。同時，介面設計也將繼續演進，以提供更加直觀和便捷的操作方式，進一步增強使用者的沈浸感和參與感。總的來說，虛擬實境技術的未來是充滿希望和潛力的，我們期待著看到它在各個領域中的廣泛應用和發展。",
      picSet: [{ imgUrl: detail_vp, imgTitle: "Vision Pro" },
      { imgUrl: detail_oculus, imgTitle: "Oculus Rift" },
      { imgUrl: detail_htc, imgTitle: "HTC Vive" },
      { imgUrl: detail_vr, imgTitle: "PlayStation VR" },
      ],
      author: "Noel",
    }
  },
  {
    id: 2,
    imgUrl: article_figma_dev_next_pic,
    date: "2023/11/20",
    category: "UI/UX 新知",
    title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)",
    desription: "延續上一篇針對 Dev Mode 介紹這一篇要說的就是最複雜的「右側面板」啦！右側面板預設有兩個分頁：Inspect（偵測）, Plugins（外掛），預設開啟 Inspect。 右側面板也可以顯示 Comment，但需要先在左側面板上方點擊 對話 icon，才可以在右側面板看到所有留言紀錄。",
    detail: {
      subTitle: "- 深入解析 Dev Mode 右側面板的協作精髓 -",
      publicOpinion: "Figma Dev Mode 推出後在設計與工程社群引起廣泛討論。多數工程師對其提供的檢視、測量、複製程式碼片段的能力給予高度評價，認為大幅縮短了設計交付的流程。部分設計師則認為這改變了他們交付規格文件的方式，提高了工作的標準化。",
      currentProduct: "Dev Mode 的右側面板分為 Inspect 和 Plugins。Inspect 專注於將設計圖元素轉化為可供開發者直接使用的規格，包括尺寸、間距、色彩、字體樣式和程式碼片段。Plugins 則允許開發者使用客製化的外掛來處理或匯出特定的資產或資料。",
      technologicalInnovation: "Dev Mode 的創新在於其即時同步性。當設計師在設計稿上做出任何修改，開發者在 Dev Mode 中就能立刻看到更新的規格，這消除了一般設計交付流程中常見的檔案版本和規格錯誤問題，實現了設計和開發的無縫銜接。",
      techologicalDiff: "儘管 Dev Mode 功能強大，但它的程式碼片段（如 CSS 或 Swift）並不總是 100% 貼合開發框架（如 React, Vue）的要求，開發者仍需手動調整。此外，對於大型或複雜的設計系統，如何確保 Dev Mode 導出的變數命名與實際程式碼庫一致，仍是一個挑戰。",
      future: "未來 Dev Mode 將會更深入地整合進各大前端框架，提供更精準、更具環境感知能力的程式碼建議，例如自動生成特定組件框架的程式碼結構。這將進一步模糊設計與開發的界線，讓設計系統的管理更有效率。",
      picSet: [{ imgUrl: detail_vp, imgTitle: "Vision Pro" },
      { imgUrl: detail_oculus, imgTitle: "Oculus Rift" },
      { imgUrl: detail_htc, imgTitle: "HTC Vive" },
      { imgUrl: detail_vr, imgTitle: "PlayStation VR" },
      ],
      author: "Neol",
    }
  },
  {
    id: 3,
    imgUrl: article_figma_dev_pre_pic,
    date: "2023/10/18",
    category: "平面設計",
    title: "Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)",
    desription: "身為工程師，除了精進開發技術、學習新框架、看更多的範例、刷更多的題，為了與其他團隊成員有效合作，也需要學習使用其他協作軟體，例如 Trello, Notion。 而如果是要跟設計師合作，目前最主要的就是使用 Figma了！Figma 是現在最主流的 UIUX 設計軟體，自從開創了「協作功能」之後，幾乎就是把 Adobe XD 和 Sketch 遠遠甩在後頭！",
    detail: {
      subTitle: "- 工程師如何高效使用 Figma Dev Mode -",
      publicOpinion: "Figma 已經成為設計協作的代名詞。對於工程師而言，學習使用 Figma 不再是加分項，而是必備技能。這波趨勢反映了業界對設計與開發協作效率的高度重視，希望工程師能夠直接在設計文件中獲取所需的規格和資產，減少來回溝通的時間。",
      currentProduct: "Figma 的核心優勢是雲端協作和即時同步。它的 Auto Layout（自動佈局）和 Variants（變體）等功能幫助設計師建立了設計系統。而工程師主要透過點擊元素來檢視屬性、複製 CSS 程式碼或匯出圖片資源，大幅簡化了傳統的標註流程。",
      technologicalInnovation: "Figma 協作功能的創新在於多人在同一畫布上工作的能力，以及強大的版本控制。這使得設計師和工程師可以在同一個檔案中進行審核和留言，確保所有人看到的都是最新且正確的設計版本。",
      techologicalDiff: "初次使用 Figma 的工程師可能會覺得介面功能眾多且複雜，需要花時間適應其設計邏輯。特別是對於元件的命名和結構，如果設計師沒有規範化，會增加工程師理解和轉換設計稿的難度。",
      future: "Figma 未來的發展方向是進一步與程式碼倉庫（Code Repositories）深度連結，例如透過外掛實現雙向同步，即程式碼的變動也能反映到設計系統中。這將使設計系統成為開發流程中更具權威性的單一事實來源。",
      picSet: [{ imgUrl: detail_vp, imgTitle: "Vision Pro" },
      { imgUrl: detail_oculus, imgTitle: "Oculus Rift" },
      { imgUrl: detail_htc, imgTitle: "HTC Vive" },
      { imgUrl: detail_vr, imgTitle: "PlayStation VR" },
      ],
      author: "Neol",
    }
  },
  {
    id: 4,
    imgUrl: article_vr_research_pic,
    date: "2023/09/20",
    category: "數位產品設計",
    title: "虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究",
    desription: "在當今數位科技的快速發展下，虛擬實境（VR）技術日益受到關注。VR技術為使用者提供了身臨其境的體驗，並在多個領域中得到應用，如遊戲、教育、醫療等。然而，要實現真正的沈浸感需要考慮多個因素，其中介面設計是至關重要的一環。本研究旨在探討不同介面設計對使用者在虛擬環境中的沈浸感的影響，以期為優化VR技術的使用者體驗提供參考。",
    detail: {
      subTitle: "- 剖析 UI/UX 如何決定 VR 體驗的成敗 -",
      publicOpinion: "業界普遍認為 VR 的未來不僅取決於硬體性能，更依賴於優化的介面設計。糟糕的介面設計會迅速打破使用者的沈浸感，導致暈眩和疲勞。因此，關於 VR 介面（如 HUDs、空間 UI）的研究受到了學術界和商業公司的重視。",
      currentProduct: "目前 VR 介面設計主要分為三類：**世界內介面**（In-World UI）、**空間化介面**（Spatial UI）和**穿戴式介面**（HUDs）。成功產品如《Half-Life: Alyx》和 Meta Quest 的 Home 環境都展示了如何將介面無縫整合到三維空間中，減少突兀感。",
      technologicalInnovation: "VR 介面設計的創新點在於**自然互動**的發展，例如手部追蹤（Hand Tracking）和語音命令。這使得使用者可以透過直覺的物理動作而非傳統的按鈕點擊來與介面互動，大大增強了沈浸感和操作的真實性。",
      techologicalDiff: "VR 介面設計最大的技術挑戰是**避免視覺疲勞和運動病 (Motion Sickness)**。介面元素的擺放位置、大小、深度，以及動畫的延遲都必須經過精確計算，以確保與使用者的前庭系統（Vestibular System）感知一致，這比傳統 2D 介面複雜得多。",
      future: "VR 介面設計的未來將走向**適應性 UI**，即介面會根據使用者的當前情境、視線焦點和行為模式自動調整其透明度、位置和資訊密度。此外，觸覺回饋（Haptic Feedback）將在 VR 介面中扮演更重要的角色。",
      picSet: [{ imgUrl: detail_vp, imgTitle: "Vision Pro" },
      { imgUrl: detail_oculus, imgTitle: "Oculus Rift" },
      { imgUrl: detail_htc, imgTitle: "HTC Vive" },
      { imgUrl: detail_vr, imgTitle: "PlayStation VR" },
      ],
      author: "Alex",
    }
  },
  {
    id: 5,
    imgUrl: article_team_meeting_pic,
    date: "2023/08/10",
    category: "數位產品設計",
    title: "想打到目標受眾？先讓設計師跟你都瞭解他們痛在哪！",
    desription: "一個準備完整的案主，會在發案之前，先準備好這個設計案的目標、受眾、主要功能、參考資料，然後交給設計師參考、發想、研究、使用。有些產品的目標受眾很明確，譬如一個比價 App，受眾目標的特徵可能有：年齡層廣、會使用線上購物、手機使用時間長。 但可以比價的東西實在太多了，若五花八門的商品都要拉進去，設計上需要建立非常多的目錄階層、制定非常多種的產品詳細頁面版型等等。...",
    detail: {
      subTitle: "- 掌握使用者痛點，設計才能真正有解 -",
      publicOpinion: "產品開發中最大的風險來源於對目標受眾的錯誤假設。業界普遍認為，專注於解決使用者真正的痛點（Pain Points）是產品成功的前提。因此，從案主到設計師，都必須在專案初期進行深入的用戶研究和情境分析。",
      currentProduct: "常見的用戶研究方法包括：**使用者訪談**、**問卷調查**、**情境模擬**、**Persona（人物誌）建立**和**使用者旅程地圖（User Journey Map）**。這些工具能夠幫助團隊從抽象的概念轉移到具體的用戶需求和行為模式上。",
      technologicalInnovation: "現今透過數據分析工具（如 Google Analytics, Hotjar）和 AI 驅動的語義分析，可以更快速、更量化地捕捉大量用戶的反饋和行為數據。這使得設計師和產品經理能夠在產品發布後，持續且高效地發現新的痛點。",
      techologicalDiff: "在用戶研究中，最大的挑戰是如何區分使用者「說的」需求和他們「真正需要」的解決方案。單純的問卷調查可能導致表面化或誤導性的結果；這要求設計師和研究者必須具備深厚的洞察力，並設計出能觀察真實行為的研究方法。",
      future: "未來的產品設計將更依賴於**預測性設計**。透過機器學習模型分析歷史數據，可以在用戶表達需求之前就預測他們的痛點和行為，從而在產品介面中提前提供解決方案或指引。",
      picSet: [{ imgUrl: detail_vp, imgTitle: "Vision Pro" },
      { imgUrl: detail_oculus, imgTitle: "Oculus Rift" },
      { imgUrl: detail_htc, imgTitle: "HTC Vive" },
      { imgUrl: detail_vr, imgTitle: "PlayStation VR" },
      ],
      author: "Mia",
    }
  },
  {
    id: 6,
    imgUrl: article_coffee_pic,
    date: "2023/07/03",
    category: "前端開發",
    title: "React vs. Vue，哪種前端框架比較好用？從三大面向談起",
    desription: "在當今快速發展的前端開發領域中，React和Vue被廣泛認為是兩個最受歡迎和強大的前端框架之一。然而，對於開發人員來說，選擇適合自己的框架可能是一個具有挑戰性的決定。本文將從三個主要面向探討React和Vue：開發效率、性能和生態系統。通過深入比較和分析這些方面，我們將試圖回答一個關鍵問題：React和Vue中哪種前端框架更加適用？這將有助於開發人員更好地理解兩者之間的優勢和劣勢，並在實際應用中做出明智...",
    detail: {
      subTitle: "- 深入比較兩大主流框架的優勢與劣勢 -",
      publicOpinion: "在前端社群中，關於 React 和 Vue 孰優孰劣的爭論一直持續。React 憑藉 Facebook 的支持和龐大的生態系統保持領先，而 Vue 則以其友善的學習曲線和簡潔的語法吸引了大量開發者。兩者都被認為是構建現代單頁應用程式（SPA）的最佳選擇。",
      currentProduct: "React 採用 JSX 語法和單向數據流，強調元件化和函數式編程。Vue 則使用單文件組件（SFC）和選項式/組合式 API，提供了更低的學習門檻和更直觀的範本語法。兩者都使用虛擬 DOM（Virtual DOM）來優化性能。",
      technologicalInnovation: "React 的創新集中在其 hooks（鉤子）系統，解決了類別組件的複雜性並提高了狀態管理的靈活性。Vue 3 的創新在於其 Composition API，這使其在大型項目中具備與 React hooks 相當的邏輯複用和代碼組織能力。",
      techologicalDiff: "React 的學習曲線相對陡峭，特別是對於狀態管理（需依賴 Redux, Zustand 等）。Vue 的生態系統雖然正在快速成長，但在某些特定的、非主流的應用場景中，其外掛和工具可能不如 React 豐富。",
      future: "前端框架的未來趨勢是向**伺服器元件（Server Components）**和更優化的打包體積發展。React 的 Next.js 和 Vue 的 Nuxt.js 都在積極探索 Full-Stack 解決方案，目標是提供更快的頁面載入速度和更佳的開發者體驗。",
      picSet: [{ imgUrl: detail_vp, imgTitle: "Vision Pro" },
      { imgUrl: detail_oculus, imgTitle: "Oculus Rift" },
      { imgUrl: detail_htc, imgTitle: "HTC Vive" },
      { imgUrl: detail_vr, imgTitle: "PlayStation VR" },
      ],
      author: "Leo",
    }
  },
];

export default BLOG_LIST;