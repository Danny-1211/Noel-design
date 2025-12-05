專案檔案結構: 
├── public/                # 靜態資源 (不會被 Vite 處理，直接複製到 dist)
├── src/
│   ├── assets/            # 專案資源
│   │   ├── imgs/          # 專門存放專案圖片
│   │   └── styles/        # 專門放專案所需的 CSS 檔案 (例如：Tailwind base, custom CSS)
│   ├── components/        # 可重複使用的 UI 元件 (如 Button, Card, Header)
│   ├── pages/             # 專案的各種頁面 (如 Home, About, Dashboard)
│   ├── routers/           # 路由控管：存放每個頁面的路由配置
│   └── data/              # 專門存放資料
│   ├── App.jsx            # 主要應用程式元件
│   └── main.jsx           # 應用程式入口點
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js     # Tailwind CSS 配置檔
└── vite.config.js         # Vite 配置檔
