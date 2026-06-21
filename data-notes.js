// data-notes.js
// iPAS AI 應用規劃師 - 16 章節全真考點大腦資料庫

const chapterNotes = {
    // ==========================================
    // 第一篇：AI 的定義與分類及治理
    // ==========================================
    "p1_c1": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 AI 基本定義與分類</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>弱 AI (Narrow AI) vs 強 AI (AGI)</strong>：弱 AI 專精於特定任務（如語音辨識、下棋）；強 AI 則具備等同或超越人類的全面認知能力與適應性（目前尚未實現）。</li>
            <li><strong>通用智慧的定義</strong>：指學習和獲取知識並廣泛應用於多種領域的能力，而非侷限於單一特定領域的預設規則。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 核心技術架構</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>機器學習 (Machine Learning)</strong>：不依賴明確指令，而是讓模型從資料中找出規律與特徵來進行預測。</li>
            <li><strong>深度學習 (Deep Learning)</strong>：機器學習的子領域，使用多層人工神經網路，特別適合處理龐大的非結構化資料（如圖像、語音）。</li>
        </ul>
    `,
    "p1_c2": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 AI 治理與核心目標</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>治理核心目標</strong>：確保 AI 的可信度（安全、公平、可解釋、透明地運行），並符合人類價值觀和社會期望。</li>
            <li><strong>可信賴 AI 六大元素</strong>：包含人類監管、問責制、安全性、公平性、透明度、可解釋性。其中「公平性」強調避免對特定群體產生歧視。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 國際法規與標準框架</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>NIST (美國國家標準與技術研究院)</strong>：提供風險管理和資訊安全的指導標準，幫助組織管理 AI 生命週期。</li>
            <li><strong>GDPR (歐盟一般資料保護法)</strong>：全球最嚴格的隱私法，強調個人資料處理的「透明度」與用戶的「明確同意」。</li>
            <li><strong>CCPA (加州消費者隱私法)</strong>：強調消費者對個人資料的控制權與收集使用過程的透明化。</li>
            <li><strong>歐盟 AI 法案</strong>：世界首次立法嘗試解決 AI 風險，旨在確保技術開發符合社會利益並保障公眾權利。</li>
        </ul>
    `,

    // ==========================================
    // 第二篇：資料基本概念與處理流程
    // ==========================================
    "p2_c1": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 資料型態分類</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>結構化資料</strong>：以行和列固定格式組織的資料（如關聯式資料庫、CSV、試算表），易於搜尋與分析。</li>
            <li><strong>非結構化資料</strong>：無固定格式，如音訊記錄、圖像、影片、自由文本等，通常依賴機器學習或深度學習演算法處理。</li>
            <li><strong>半結構化資料</strong>：包含一些組織元素但不完全遵循表格格式（如 JSON、XML），保有一定靈活性。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 連續與離散資料</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>連續資料</strong>：在特定範圍內可取任意數值的測量資料（如房價 $10.99、$35.5萬、體重 125.3磅）。</li>
            <li><strong>離散資料</strong>：只能取特定間隔值的資料，通常是整數，不能有小數點（如員工數量、孩童數目、產品件數）。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">三、 機器學習資料集劃分</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>訓練集 (Training Set, 70%)</strong>：主要用於訓練模型，讓模型從中學習特徵與輸入輸出的關係。</li>
            <li><strong>驗證集 (Validation Set, 15%)</strong>：用於訓練過程中「調整超參數」，並評估模型性能，防止過擬合。</li>
            <li><strong>測試集 (Test Set, 15%)</strong>：模型從未見過的資料，用於在模型訓練完成後，進行「最終的公平性評估」與泛化能力測試。</li>
        </ul>
    `,
    "p2_c2": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 資料清理與預處理</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>資料清理目的</strong>：確保資料的準確性、一致性及無錯誤。處理缺失值與移除雜訊是建立高準確度模型的基礎。</li>
            <li><strong>異常值處理</strong>：通常利用限制在一個合理範圍內（截斷或限制），降低它們對模型預測的不良影響。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 資料編碼與縮放技術</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>獨熱編碼 (One-Hot Encoding)</strong>：將分類資料轉換為機器學習演算法需要的數字格式（適用於無順序的類別，如顏色、車型）。</li>
            <li><strong>標籤編碼 (Label Encoding)</strong>：將類別轉換為數值，通常適用於「有自然順序」的分類資料。</li>
            <li><strong>資料正規化/標準化</strong>：確保具有不同度量尺度的特徵能被公平比較。例如將特徵轉換到 [0,1] 範圍，或轉換為均值為0、方差為1。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">三、 特徵分解與降維</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>降維目的</strong>：通過限制特徵數量來簡化資料並保留最重要訊息，減少計算負擔並提高模型性能（避免過擬合）。</li>
            <li><strong>主成分分析 (PCA)</strong>：一種常用的降低資料維度的線性技術，通過提取具代表性的特徵來減少維度，同時保留資料集最大變異性。</li>
        </ul>
    `,
    "p2_c3": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 隱私風險與威脅</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>核心風險</strong>：包含推理攻擊（從模型輸出反推敏感資料）、黑箱決策、資料濫用，以及資料集中化儲存帶來的駭客攻擊與洩漏風險。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 三大前沿隱私保護技術 (PPML)</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>差分隱私 (Differential Privacy, DP)</strong>：透過在訓練資料中加入隨機雜訊，平衡資料防護與統計準確性，防止系統準確推斷出個人特定屬性。</li>
            <li><strong>同態加密 (Homomorphic Encryption, HE)</strong>：允許在「不解密」的密文狀態下直接進行機器學習計算，結果解密後與明文計算結果完全相同。</li>
            <li><strong>聯合學習 (Federated Learning, FL)</strong>：資料留在本地設備訓練（不暴露原始資料），各設備僅上傳更新的模型「參數」到中央協調器進行合併。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">三、 公平性與法規遵循</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>去偏見與公平性</strong>：應對訓練集中的歷史偏見，避免 AI 對特定群體（種族/性別）產生歧視性判定。</li>
            <li><strong>隱私設計 (Privacy by Design)</strong>：在產品開發和商業流程的每一個階段都預先融入隱私保護機制，從根本上減少資料洩漏風險。</li>
        </ul>
    `,

    // ==========================================
    // 第三篇：機器學習基本原理與模型
    // ==========================================
    "p3_c1": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 機器學習四大範式</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>監督式學習</strong>：依賴「標記資料」建立輸入與輸出的映射關係（如：郵件分類為垃圾/非垃圾）。</li>
            <li><strong>無監督式學習</strong>：處理「未標記資料」，旨在探索資料的隱藏模式與內在結構（如：K-均值聚類）。</li>
            <li><strong>半監督式學習</strong>：結合少量標記與大量未標記資料，大幅降低標記成本並提升準確性。</li>
            <li><strong>強化學習 (RL)</strong>：透過智慧體與環境互動、利用試錯法與反饋（獎勵/懲罰機制）來優化動態決策。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 經典演算法與模型診斷</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>支持向量機 (SVM)</strong>：尋找最大化不同類別間距離的「超平面」來進行高精確度分類。</li>
            <li><strong>過擬合 (Overfitting)</strong>：模型過度依賴訓練集中的隨機波動與雜訊，導致在新資料上泛化能力極差。</li>
            <li><strong>正則化 (Regularization)</strong>：通過在模型訓練中加入懲罰項（如 L1/L2）來限制模型複雜度，減少過擬合現象。</li>
            <li><strong>長短期記憶網路 (LSTMs)</strong>：循環神經網路 (RNN) 的變體，擅長處理具備「長期依賴關係」的時間序列資料（如語音、文本）。</li>
        </ul>
    `,
    "p3_c2": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 監督與非監督核心模型</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>分類 vs 回歸</strong>：分類預測「離散」類別；回歸預測「連續」數值（如房價）。</li>
            <li><strong>決策樹與隨機森林</strong>：將問題分解為一系列決策節點；隨機森林由多棵決策樹組成，提升準確性與穩定性。</li>
            <li><strong>K-Means 聚類 (非監督)</strong>：將資料點分配到相似的群集中，使群內相似度最大化、群間相似度最小化。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 深度學習神經網路架構</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>卷積神經網路 (CNN)</strong>：專為計算機視覺設計，能自動提取圖像或影片中的空間特徵。</li>
            <li><strong>循環神經網路 (RNN)</strong>：能記住過去的訊息並學習時間序列中依賴性，適合語音識別與時間序列預測。</li>
            <li><strong>多層感知器 (MLP)</strong>：包含多個全連接層，藉由「非線性激活函數」處理複雜的模式識別。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">三、 模型評估關鍵指標</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>回歸指標</strong>：均方誤差 (MSE)、根均方誤差 (RMSE)、平均絕對誤差 (MAE) 和決定係數 (R²)。(注意：準確率 Accuracy 不適用於回歸)。</li>
            <li><strong>分類指標</strong>：準確率 (Accuracy)、精確率 (Precision)、召回率 (Recall)。</li>
            <li><strong>F1-score</strong>：精確率和召回率的「調和平均數」，在類別不平衡的情況下特別有用。</li>
        </ul>
    `,

    // ==========================================
    // 第四篇：鑑別式 AI 與生成式 AI 概論
    // ==========================================
    "p4_c1": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 鑑別式 vs 生成式 AI 基本差異</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>鑑別式 AI (Discriminative)</strong>：專注於區分不同類別，學習特徵來「識別和分類」（如：判斷信件是否為垃圾郵件）。需依賴標記資料 (X與y)。</li>
            <li><strong>生成式 AI (Generative)</strong>：學習現有資料的「機率分布模式」，並創造出類似人類創作的全新內容（如文本、圖像、音樂）。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 生成對抗網路 (GANs)</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>運作機制</strong>：由兩個神經網路組成並相互競爭。</li>
            <li><strong>生成器 (Generator)</strong>：負責生成全新資料樣本以混淆判別器。</li>
            <li><strong>判別器 (Discriminator)</strong>：負責區分輸入樣本是「真實」資料還是生成器製造的「偽造」資料。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">三、 擴散模型與 Transformer 架構</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>擴散模型 (Diffusion Models)</strong>：透過正向過程（加入雜訊）與逆向過程（消除雜訊還原資料）來生成高品質圖像。代表工具如 Midjourney、Stable Diffusion。</li>
            <li><strong>Transformer 架構</strong>：核心為「自注意力機制 (Self-Attention)」，能捕捉序列中長距離的依賴性，不依賴元素間的物理距離，是現代大語言模型 (LLM) 的基石。</li>
            <li><strong>Sora</strong>：結合擴散模型與 Transformer 架構的文本到影片生成模型。</li>
        </ul>
    `,
    "p4_c2": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 大型語言模型 (LLM) 基礎與應用</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>核心技術</strong>：基於 Transformer 架構，透過從網路上抓取海量文本資料進行預訓練，具備強大的語義理解、翻譯、摘要與生成能力。</li>
            <li><strong>多模態整合 (Multimodal)</strong>：現代 AI 模型不僅能處理文本，還能整合圖像、聲音等多種資料來源，提供更豐富的語境理解（如 GPT-4）。</li>
            <li><strong>提示工程 (Prompt Engineering)</strong>：利用結構化的自然語言指令，引導 LLM 產生更準確、符合特定格式的輸出結果。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 模型優化與檢索技術</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>檢索增強生成 (RAG)</strong>：結合外部知識庫檢索與 LLM 生成能力。當模型面臨知識盲區時，先從資料庫檢索相關資訊，再交由 LLM 生成答案，大幅降低「幻覺」現象並保護隱私。</li>
            <li><strong>微調技術 (Fine-Tuning)</strong>：在預訓練模型的基礎上，使用特定領域的專有資料集進行二次訓練，讓模型更精準適應專業業務需求。</li>
        </ul>
    `,

    // ==========================================
    // 第五篇：Low code / No code 基本概念與應用
    // ==========================================
    "p5_c1": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 LCNC (低程式碼/無程式碼) 核心概念</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>民主化編程</strong>：提供視覺化拖放（Drag-and-Drop）介面，讓沒有深厚程式背景的「公民開發者」也能快速構建應用程式。</li>
            <li><strong>加速迭代與原型設計</strong>：大幅減少手寫程式碼的時間，使開發團隊能迅速建立原型 (Prototyping)，收集反饋並快速迭代產品。</li>
            <li><strong>降低技術門檻與負擔</strong>：釋放專業 IT 團隊的資源，讓他們專注於系統架構與更複雜的核心技術難題。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 LCNC 平台的挑戰與限制</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>客製化限制</strong>：由於依賴預先配置的模版與組件，面對高度複雜或特殊業務邏輯時，靈活性與可擴展性容易受限。</li>
            <li><strong>供應商鎖定 (Vendor Lock-in)</strong>：一旦選擇特定平台，未來若需將應用程式遷移到其他平台或環境，技術成本與資料轉移難度極高。</li>
            <li><strong>影子 IT 與資安盲區</strong>：非技術人員開發的應用程式若繞過 IT 部門的正規審核流程，極易產生權限控管與資料洩漏的安全漏洞。</li>
        </ul>
    `,
    "p5_c2": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 生成式 AI 與 LCNC 的完美整合</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>自然語言轉程式碼 (NL2Code)</strong>：使用者只需用自然語言描述需求，生成式 AI 即可在 LCNC 平台中自動生成對應的程式碼邏輯或應用程式框架。</li>
            <li><strong>無縫接軌企業系統</strong>：LCNC 平台允許將生成式 AI 能力直接嵌入現有企業系統（如 CRM、ERP），提升整體業務自動化與智慧化水準。</li>
            <li><strong>減少技術債務</strong>：AI 可協助優化底層程式碼結構與註解，縮小非技術人員與專業開發者之間的溝通鴻溝，降低未來的維護成本。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 生態系與實務應用</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>Create ML 生態系</strong>：專為 Apple 生態系設計，提供友善視覺化介面，讓開發者無需深入資料科學知識也能輕鬆訓練模型並整合入 iOS/macOS 應用。</li>
            <li><strong>黑盒效應挑戰</strong>：生成式 AI 決策過程的不可解釋性（黑盒子），可能阻礙合規性審查，需依賴精確的提示工程（Prompt）來引導並控制輸出品質。</li>
        </ul>
    `,

    // ==========================================
    // 第六篇：生成式 AI 應用領域與常見工具
    // ==========================================
    "p6_c1": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 跨產業實務應用場景</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>媒體與娛樂業</strong>：AI 加速內容創建與個性化推薦，維持競爭力。在遊戲中，生成式 AI 驅動 NPC，提供高度動態與擬真的互動對話體驗。</li>
            <li><strong>醫療保健</strong>：輔助醫學圖像分析、病理切片檢測，甚至生成合成資料以保護患者隱私並進行研究。</li>
            <li><strong>零售與金融業</strong>：優化庫存管理、提供量身定制的金融理財服務，加強風險預測與詐欺偵測。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 主流生成式 AI 工具</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>ChatGPT</strong>：基於 Transformer 且透過人類反饋強化學習 (RLHF) 進行微調，具備強大對話與自然語言理解能力。</li>
            <li><strong>Midjourney / DALL-E</strong>：頂尖的文本到圖像生成工具，廣泛應用於創意設計與藝術領域。</li>
            <li><strong>GitHub Copilot</strong>：提供即時程式碼建議的編程助手，大幅提高開發者效率。</li>
            <li><strong>Brain.fm</strong>：利用 AI 技術生成符合心理學與神經科學的音樂，幫助專注、放鬆與睡眠。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">三、 面臨的挑戰與威脅</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>幻覺 (Hallucination)</strong>：模型在缺乏足夠資訊時，基於機率推斷出看似合理卻完全錯誤或虛構的內容。</li>
            <li><strong>虛假訊息與版權爭議</strong>：容易被惡意使用來創建深偽 (Deepfake) 或誤導性內容，且生成的素材可能面臨智財權的法律挑戰。</li>
        </ul>
    `,
    "p6_c2": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 提示工程 (Prompt Engineering) 框架</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>設定角色 (Role)</strong>：賦予 AI 特定身分可優化回應的語氣與專業度，確保內容符合目標受眾需求。</li>
            <li><strong>RTF 結構</strong>：包含 Role (角色)、Task (任務)、Format (格式)，有助於明確組織輸出結果。</li>
            <li><strong>CTF 結構</strong>：包含 Context (背景)、Task (任務)、Format (格式)，提供豐富上下文以減少 AI 歧義與幻覺。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 高階思維引導技巧</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>思維鏈提示 (CoT)</strong>：引導模型「一步步進行推理」，拆解邏輯步驟，大幅提高解決數學與複雜邏輯問題的準確率。</li>
            <li><strong>思維樹提示 (ToT)</strong>：以樹狀結構將問題分解為多個子話題並探索多重解決路徑，適合複雜決策規劃。</li>
            <li><strong>方向性刺激提示</strong>：提供關鍵字或暗示，幫助模型聚焦意圖，精準對齊使用者的需求。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">三、 大型模型優化技術</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>檢索增強生成 (RAG)</strong>：四步流程「捕捉、處理、格式化、評估」。無需重新訓練模型即可讓 AI 獲取企業內部或最新外部知識。</li>
            <li><strong>LoRA (低秩適應微調)</strong>：一種輕量級微調技術。透過引入低秩矩陣來大幅減少需更新的參數數量，顯著降低 GPU 記憶體消耗與訓練成本。</li>
        </ul>
    `,

    // ==========================================
    // 第七篇：生成式 AI 導入評估與風險管理
    // ==========================================
    "p7_c1": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 導入策略與可行性分析</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>商業目標優先</strong>：在實施生成式 AI 前，首要步驟是明確商業目標，並確保技術選擇能為企業創造實質價值。</li>
            <li><strong>技術可行性評估</strong>：專案初期必須評估現有基礎設施是否能承載所選模型，減少後期風險與資源浪費。</li>
            <li><strong>用例優先級矩陣</strong>：根據技術複雜性、資源需求、預期回報等維度進行評分，優先執行最具價值的概念驗證 (PoC)。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 資料治理與模型選擇</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>資料為基石</strong>：模型的輸出品質直接取決於輸入資料的品質。醫療 (HIPAA) 等特殊行業需嚴格確保資料去識別化與合規性。</li>
            <li><strong>自建 vs 預訓練</strong>：預訓練模型 (如 GPT-4) 可加速開發並降低成本；若處理高度敏感或極度專業的領域資料，自建或深度微調模型會更合適。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">三、 四大風險領域與治理</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>資料風險</strong>：隱私洩露、未經授權存取。</li>
            <li><strong>模型風險</strong>：幻覺問題、輸出不穩定、不可解釋性。</li>
            <li><strong>操作風險</strong>：人為操作錯誤、系統不兼容、流程中斷。</li>
            <li><strong>倫理和法律風險</strong>：侵權、不公正偏見、違反法規合規。確保 AI 生命週期中的資料完整性與安全性是防禦核心。</li>
        </ul>
    `,
    "p7_c2": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 部署基礎設施與整合</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>環境架構匹配</strong>：在設計解決方案時，必須考慮與現有系統（如資料庫、業務流程）的整合能力，確保平穩過渡。</li>
            <li><strong>高風險場景避險</strong>：在涉及重大決策（如醫療診斷、放貸審核）的場景中，應維持「人類在迴圈中 (Human-in-the-loop)」的監管，避免 AI 隨機錯誤造成災難性後果。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 模型監控與參數調校</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>參數優化</strong>：持續監控模型表現並調整學習率、批次大小等超參數，可有效解決過擬合或欠擬合問題。</li>
            <li><strong>獨立測試集驗證</strong>：模型訓練後，必須在「獨立的測試資料集」上評估其泛化能力，確保在真實世界的穩健性。</li>
            <li><strong>持續微調 (Fine-Tuning)</strong>：結合用戶持續的反饋與新資料，幫助模型不斷修正與適應最新的業務領域需求。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">三、 員工培訓與倫理文化</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>安全與合規意識</strong>：企業必須為員工提供 AI 工具操作培訓，強調倫理準則與資料隱私政策，降低人為操作造成的潛在威脅。</li>
            <li><strong>循序漸進的採用策略</strong>：切勿盲目追求 AI 潮流。企業應設立明確里程碑，評估實際成效後再擴大部署範圍。</li>
        </ul>
    `,
    "p7_c3": `
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">一、 風險評估實務與工具</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>首要步驟</strong>：導入 AI 專案的第一步永遠是進行全面的風險評估。</li>
            <li><strong>分級與 SWOT 分析</strong>：利用「高、中、低」影響級別對風險進行優先級排序；使用 SWOT (優勢/劣勢/機會/威脅) 分析識別內外部風險因素。</li>
            <li><strong>風險轉移 (Risk Transfer)</strong>：透過購買保險或外包合約，將高風險業務的潛在損失轉嫁給第三方。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">二、 NIST AI RMF (風險管理框架)</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>自願性與彈性</strong>：這是一套「非強制性」的自願指導方針，適用於 AI 生命週期的各個階段與各種行業。</li>
            <li><strong>四大核心功能</strong>：治理 (Govern)、映射 (Map)、測量 (Measure)、管理 (Manage)。</li>
            <li><strong>自動化審查</strong>：建議企業收集 AI 系統元資料並制定標準緩解措施，實現自動化合規審查。</li>
        </ul>
        <h3 class="text-lg font-bold text-blue-400 mb-2 mt-4">三、 偏見緩解與供應鏈安全</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li><strong>主動去偏見</strong>：必須「定期」測試模型的公平性並清理資料偏見，不可只依賴自動化工具，避免在招聘或信用評估中產生歧視。</li>
            <li><strong>可解釋性與可追溯性</strong>：確保 AI 決策過程透明，保留審計軌跡，以建立公眾與監管機構的信任。</li>
            <li><strong>第三方供應鏈審查</strong>：企業不能完全依賴供應商的安全宣告，必須主動定期審查第三方軟體元件，防範供應鏈駭客攻擊。</li>
        </ul>
    `
};