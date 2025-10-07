// ========================================
// HTML要素の取得
// ========================================

// メイン表示要素
const cookieCountElement = document.getElementById('cookie-count');
const cpsElement = document.getElementById('cps');
const cookieImage = document.getElementById('cookie');
const cookieArea = document.getElementById('cookie-area');

// コンテナ要素
const shopItemsContainer = document.getElementById('shop-items');
const researchItemsContainer = document.getElementById('research-items');
const achievementsContainer = document.getElementById('achievements');

// ボタン要素
const muteBtn = document.getElementById('mute-btn');
const saveBtn = document.getElementById('save-btn');
const loadBtn = document.getElementById('load-btn');
const resetBtn = document.getElementById('reset-btn');
const exportBtn = document.getElementById('export-btn');
const importBtn = document.getElementById('import-btn');

// 特殊要素
const goldenCookie = document.getElementById('golden-cookie');
const rouletteModal = document.getElementById('roulette-modal');
const rouletteDisplay = document.getElementById('roulette-display');

// 倍率とコンボ表示
const multiplierDisplay = document.getElementById('multiplier-display');
const multiplierValue = document.getElementById('multiplier-value');
const multiplierTime = document.getElementById('multiplier-time');
const comboDisplay = document.getElementById('combo-display');
const comboCount = document.getElementById('combo-count');

// レベルシステム要素
const playerLevelElement = document.getElementById('player-level');
const playerExpElement = document.getElementById('player-exp');
const playerExpMaxElement = document.getElementById('player-exp-max');
const expBarFill = document.getElementById('exp-bar-fill');

// タブ要素
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// 転生要素
const prestigeBtn = document.getElementById('prestige-btn');
const prestigeLevelElement = document.getElementById('prestige-level');
const heavenlyChipsElement = document.getElementById('heavenly-chips');
const heavenlyBonusElement = document.getElementById('heavenly-bonus');
const prestigeRequirementElement = document.getElementById('prestige-requirement');
const heavenlyUpgradesList = document.getElementById('heavenly-upgrades-list');

// ミニゲーム要素
const attackBtn = document.getElementById('attack-btn');
const enemyHpFill = document.getElementById('enemy-hp-fill');
const enemyHpElement = document.getElementById('enemy-hp');
const enemyHpMaxElement = document.getElementById('enemy-hp-max');
const questRewards = document.getElementById('quest-rewards');
const slotSpinBtn = document.getElementById('slot-spin-btn');
const slotBetInput = document.getElementById('slot-bet');
const slotResult = document.getElementById('slot-result');
const gardenGrid = document.getElementById('garden-grid');
const seedBtns = document.querySelectorAll('.seed-btn');

// 統計要素
const totalCookiesEarnedElement = document.getElementById('total-cookies-earned');
const totalClicksStatElement = document.getElementById('total-clicks-stat');
const manualCookiesElement = document.getElementById('manual-cookies');
const autoCookiesElement = document.getElementById('auto-cookies');
const totalPurchasesElement = document.getElementById('total-purchases');
const totalSpentElement = document.getElementById('total-spent');
const researchCompletedElement = document.getElementById('research-completed');
const playTimeElement = document.getElementById('play-time');
const maxCpsElement = document.getElementById('max-cps');
const maxComboElement = document.getElementById('max-combo');
const goldenClicksElement = document.getElementById('golden-clicks');
const prestigeCountElement = document.getElementById('prestige-count');
const achievementsUnlockedElement = document.getElementById('achievements-unlocked');
const achievementsTotalElement = document.getElementById('achievements-total');

// インポートモーダル
const importModal = document.getElementById('import-modal');
const importTextarea = document.getElementById('import-textarea');
const importConfirmBtn = document.getElementById('import-confirm-btn');
const importCancelBtn = document.getElementById('import-cancel-btn');

// ========================================
// ゲーム変数
// ========================================

let cookies = 0;
let cookiesPerSecond = 0;
let clickPower = 1;
let isMuted = true;
let totalClicks = 0;
let currentMultiplier = 1;
let multiplierEndTime = 0;
let combo = 0;
let comboEndTime = 0;
let playerLevel = 1;
let playerExp = 0;
let playerExpMax = 100;

// 転生変数
let prestigeLevel = 0;
let heavenlyChips = 0;
let totalCookiesEarned = 0;

// 統計変数
let manualCookies = 0;
let autoCookies = 0;
let totalPurchases = 0;
let totalSpent = 0;
let playTime = 0;
let maxCps = 0;
let maxCombo = 0;
let goldenClicks = 0;

// クエスト変数
let currentEnemy = {
    name: '🐉 クッキードラゴン',
    hp: 100,
    maxHp: 100,
    reward: 500
};

// ガーデン変数
let gardenPlots = [];
const GARDEN_SIZE = 20;

// スロット変数
const slotSymbols = ['🍪', '🍰', '🎂', '🍩', '🧁', '🍫', '🍬'];

// ========================================
// ショップアイテム定義
// ========================================

const shopItems = [
    {
        id: 'cursor',
        name: '🖱 カーソル',
        baseCost: 15,
        cps: 0.1,
        count: 0,
        desc: '自動でクリック'
    },
    {
        id: 'grandma',
        name: '👵 おばあちゃん',
        baseCost: 100,
        cps: 1,
        count: 0,
        desc: 'クッキーを焼いてくれる'
    },
    {
        id: 'farm',
        name: '🌾 農場',
        baseCost: 500,
        cps: 8,
        count: 0,
        desc: '小麦を生産'
    },
    {
        id: 'factory',
        name: '🏭 工場',
        baseCost: 3000,
        cps: 47,
        count: 0,
        desc: '大量生産体制'
    },
    {
        id: 'mine',
        name: '⛏ 鉱山',
        baseCost: 10000,
        cps: 260,
        count: 0,
        desc: 'チョコチップを採掘'
    },
    {
        id: 'spaceship',
        name: '🚀 宇宙船',
        baseCost: 50000,
        cps: 1400,
        count: 0,
        desc: '宇宙からクッキーを輸送'
    },
    {
        id: 'timemachine',
        name: '⏰ タイムマシン',
        baseCost: 200000,
        cps: 7800,
        count: 0,
        desc: '過去からクッキーを持ってくる'
    },
    {
        id: 'portal',
        name: '🌀 ポータル',
        baseCost: 1000000,
        cps: 44000,
        count: 0,
        desc: '異次元からクッキーを召喚'
    }
];

// ========================================
// 研究アイテム定義
// ========================================

const researchItems = [
    {
        id: 'click_power_1',
        name: '🔨 強化クリック I',
        cost: 100,
        effect: 'clickPower',
        value: 1,
        purchased: false,
        desc: 'クリック力 +1'
    },
    {
        id: 'click_power_2',
        name: '⚡ 強化クリック II',
        cost: 500,
        effect: 'clickPower',
        value: 2,
        purchased: false,
        desc: 'クリック力 +2'
    },
    {
        id: 'click_power_3',
        name: '💪 強化クリック III',
        cost: 2000,
        effect: 'clickPower',
        value: 5,
        purchased: false,
        desc: 'クリック力 +5'
    },
    {
        id: 'click_power_4',
        name: '🔥 強化クリック IV',
        cost: 10000,
        effect: 'clickPower',
        value: 10,
        purchased: false,
        desc: 'クリック力 +10'
    },
    {
        id: 'cps_boost_1',
        name: '⚙ 効率化 I',
        cost: 1000,
        effect: 'cpsMultiplier',
        value: 0.1,
        purchased: false,
        desc: '全生産施設 +10%'
    },
    {
        id: 'cps_boost_2',
        name: '🔧 効率化 II',
        cost: 5000,
        effect: 'cpsMultiplier',
        value: 0.2,
        purchased: false,
        desc: '全生産施設 +20%'
    },
    {
        id: 'cps_boost_3',
        name: '⚡ 効率化 III',
        cost: 25000,
        effect: 'cpsMultiplier',
        value: 0.3,
        purchased: false,
        desc: '全生産施設 +30%'
    },
    {
        id: 'golden_chance',
        name: '🍀 幸運の研究',
        cost: 3000,
        effect: 'goldenChance',
        value: 0.5,
        purchased: false,
        desc: 'ゴールデンクッキー出現率UP'
    },
    {
        id: 'cursor_boost',
        name: '🖱 カーソル特化',
        cost: 800,
        effect: 'itemBoost',
        target: 'cursor',
        value: 2,
        purchased: false,
        desc: 'カーソルの効率 2倍'
    },
    {
        id: 'grandma_boost',
        name: '👵 おばあちゃん特化',
        cost: 2500,
        effect: 'itemBoost',
        target: 'grandma',
        value: 2,
        purchased: false,
        desc: 'おばあちゃんの効率 2倍'
    },
    {
        id: 'combo_master',
        name: '🔥 コンボマスター',
        cost: 5000,
        effect: 'comboBonus',
        value: 1,
        purchased: false,
        desc: 'コンボボーナス強化'
    }
];

// ========================================
// 天国のアップグレード定義
// ========================================

const heavenlyUpgrades = [
    {
        id: 'heavenly_luck',
        name: '🍀 天国の幸運',
        cost: 10,
        effect: 'goldenChance',
        value: 1,
        purchased: false,
        desc: 'ゴールデンクッキー出現率大幅UP'
    },
    {
        id: 'heavenly_cookies',
        name: '🍪 天国のクッキー',
        cost: 20,
        effect: 'clickPower',
        value: 50,
        purchased: false,
        desc: 'クリック力 +50'
    },
    {
        id: 'heavenly_production',
        name: '⚙ 天国の生産',
        cost: 30,
        effect: 'cpsMultiplier',
        value: 0.5,
        purchased: false,
        desc: '全生産施設 +50%'
    },
    {
        id: 'heavenly_time',
        name: '⏰ 天国の時間',
        cost: 50,
        effect: 'multiplierDuration',
        value: 15,
        purchased: false,
        desc: '倍率モード時間 +15秒'
    },
    {
        id: 'heavenly_combo',
        name: '🔥 天国のコンボ',
        cost: 40,
        effect: 'comboBonus',
        value: 2,
        purchased: false,
        desc: 'コンボボーナス2倍'
    }
];

// ========================================
// 実績定義
// ========================================

const achievements = [
    { 
        id: 'first', 
        name: '🎉 初クッキー', 
        condition: () => totalClicks >= 1, 
        unlocked: false 
    },
    { 
        id: 'hundred', 
        name: '💯 100枚達成', 
        condition: () => cookies >= 100, 
        unlocked: false 
    },
    { 
        id: 'thousand', 
        name: '🌟 1000枚達成', 
        condition: () => cookies >= 1000, 
        unlocked: false 
    },
    { 
        id: 'tenthousand', 
        name: '💎 10000枚達成', 
        condition: () => cookies >= 10000, 
        unlocked: false 
    },
    { 
        id: 'million', 
        name: '👑 100万枚達成', 
        condition: () => cookies >= 1000000, 
        unlocked: false 
    },
    { 
        id: 'firstItem', 
        name: '🛒 初購入', 
        condition: () => shopItems.some(item => item.count > 0), 
        unlocked: false 
    },
    { 
        id: 'automate', 
        name: '🤖 自動化開始', 
        condition: () => cookiesPerSecond >= 1, 
        unlocked: false 
    },
    { 
        id: 'clicker', 
        name: '👆 クリック100回', 
        condition: () => totalClicks >= 100, 
        unlocked: false 
    },
    { 
        id: 'clicker1000', 
        name: '👆 クリック1000回', 
        condition: () => totalClicks >= 1000, 
        unlocked: false 
    },
    { 
        id: 'golden', 
        name: '✨ ゴールデン発見', 
        condition: () => false, 
        unlocked: false 
    },
    { 
        id: 'researcher', 
        name: '🔬 研究者', 
        condition: () => researchItems.some(item => item.purchased), 
        unlocked: false 
    },
    { 
        id: 'levelup', 
        name: '📈 レベル10達成', 
        condition: () => playerLevel >= 10, 
        unlocked: false 
    },
    { 
        id: 'combo10', 
        name: '🔥 コンボ10達成', 
        condition: () => maxCombo >= 10, 
        unlocked: false 
    },
    { 
        id: 'prestige1', 
        name: '⭐ 初転生', 
        condition: () => prestigeLevel >= 1, 
        unlocked: false 
    },
    { 
        id: 'quest', 
        name: '⚔ 初クエスト', 
        condition: () => false, 
        unlocked: false 
    }
];
// ========================================
// 初期化関数
// ========================================

function init() {
    loadGame();
    initGarden();
    renderShop();
    renderResearch();
    renderHeavenlyUpgrades();
    updatePrestigeInfo();
    updateStatsDisplay();
    achievementsTotalElement.textContent = achievements.length;
    
    // 定期実行タイマー
    setInterval(autoGenerate, 100);
    setInterval(checkAchievements, 500);
    setInterval(autoSave, 30000);
    setInterval(trySpawnGoldenCookie, 10000);
    setInterval(updateMultiplierTimer, 1000);
    setInterval(updateComboTimer, 100);
    setInterval(updatePlayTime, 1000);
    setInterval(updateGarden, 1000);
}

// ========================================
// タブ切り替え
// ========================================

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(`${targetTab}-tab`).classList.add('active');
    });
});

// ========================================
// クッキークリック処理
// ========================================

cookieImage.addEventListener('click', (e) => {
    const comboBonus = Math.floor(combo / 10) + 1;
    const earnedCookies = clickPower * currentMultiplier * comboBonus;
    cookies += earnedCookies;
    totalClicks++;
    manualCookies += earnedCookies;
    totalCookiesEarned += earnedCookies;
    
    // コンボ更新
    combo++;
    comboEndTime = Date.now() + 2000;
    if (combo > maxCombo) maxCombo = combo;
    
    // 経験値獲得
    addExp(1);
    
    updateDisplay();
    
    createClickEffect(e, earnedCookies);
    createParticles(e);
    playSound('click');
    
    // コンボ表示
    if (combo >= 5) {
        comboDisplay.style.display = 'block';
        comboCount.textContent = combo;
    }
});

// ========================================
// エフェクト生成
// ========================================

function createClickEffect(e, amount) {
    const effect = document.createElement('div');
    effect.className = 'click-effect';
    effect.textContent = `+${Math.floor(amount).toLocaleString()}`;
    
    const rect = cookieArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;
    cookieArea.appendChild(effect);
    
    setTimeout(() => effect.remove(), 1000);
}

function createParticles(e) {
    const rect = cookieArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = '✨';
        
        const angle = (Math.PI * 2 * i) / 5 + Math.random() * 0.5;
        const distance = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        cookieArea.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

// ========================================
// レベルシステム
// ========================================

function addExp(amount) {
    playerExp += amount;
    
    while (playerExp >= playerExpMax) {
        playerExp -= playerExpMax;
        playerLevel++;
        playerExpMax = Math.floor(100 * Math.pow(1.5, playerLevel - 1));
        showNotification(`🎉 レベルアップ！ レベル ${playerLevel} になりました！`);
        
        // レベルアップボーナス
        clickPower += Math.floor(playerLevel / 5);
    }
    
    updateExpBar();
}

function updateExpBar() {
    const percentage = (playerExp / playerExpMax) * 100;
    expBarFill.style.width = `${percentage}%`;
    playerLevelElement.textContent = playerLevel;
    playerExpElement.textContent = playerExp;
    playerExpMaxElement.textContent = playerExpMax;
}

// ========================================
// コンボシステム
// ========================================

function updateComboTimer() {
    if (comboEndTime > Date.now()) {
        // コンボ継続中
    } else if (combo > 0) {
        combo = 0;
        comboDisplay.style.display = 'none';
    }
}

// ========================================
// ゴールデンクッキーシステム
// ========================================

function trySpawnGoldenCookie() {
    if (goldenCookie.style.display === 'none') {
        const baseChance = 0.05;
        const researchBonus = researchItems.find(r => r.id === 'golden_chance' && r.purchased) ? 0.025 : 0;
        const heavenlyBonus = heavenlyUpgrades.find(h => h.id === 'heavenly_luck' && h.purchased) ? 0.05 : 0;
        const totalChance = baseChance + researchBonus + heavenlyBonus;
        
        if (Math.random() < totalChance) {
            spawnGoldenCookie();
        }
    }
}

function spawnGoldenCookie() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    
    goldenCookie.style.left = `${x}px`;
    goldenCookie.style.top = `${y}px`;
    goldenCookie.style.display = 'block';
    
    setTimeout(() => {
        goldenCookie.style.display = 'none';
    }, 10000);
}

goldenCookie.addEventListener('click', () => {
    goldenCookie.style.display = 'none';
    goldenClicks++;
    showRoulette();
    
    const goldenAch = achievements.find(a => a.id === 'golden');
    if (goldenAch && !goldenAch.unlocked) {
        goldenAch.unlocked = true;
        showAchievement(goldenAch);
    }
});

// ========================================
// ルーレットシステム
// ========================================

function showRoulette() {
    rouletteModal.style.display = 'flex';
    const rouletteNumber = rouletteDisplay.querySelector('.roulette-number');
    
    const multipliers = [7, 77, 777];
    let spinCount = 0;
    const maxSpins = 20;
    
    const spinInterval = setInterval(() => {
        const randomMultiplier = multipliers[Math.floor(Math.random() * multipliers.length)];
        rouletteNumber.textContent = `×${randomMultiplier}`;
        spinCount++;
        
        if (spinCount >= maxSpins) {
            clearInterval(spinInterval);
            
            const rand = Math.random();
            let finalMultiplier;
            if (rand < 0.6) {
                finalMultiplier = 7;
            } else if (rand < 0.9) {
                finalMultiplier = 77;
            } else {
                finalMultiplier = 777;
            }
            
            rouletteNumber.textContent = `×${finalMultiplier}`;
            
            setTimeout(() => {
                rouletteModal.style.display = 'none';
                activateMultiplier(finalMultiplier);
            }, 1500);
        }
    }, 100);
}

function activateMultiplier(multiplier) {
    currentMultiplier = multiplier;
    const baseDuration = 30000;
    const heavenlyBonus = heavenlyUpgrades.find(h => h.id === 'heavenly_time' && h.purchased) ? 15000 : 0;
    multiplierEndTime = Date.now() + baseDuration + heavenlyBonus;
    multiplierValue.textContent = multiplier;
    multiplierDisplay.style.display = 'block';
    showNotification(`🌟 ${multiplier}倍モード発動！${(baseDuration + heavenlyBonus) / 1000}秒間！`);
    playSound('achievement');
}

function updateMultiplierTimer() {
    if (multiplierEndTime > Date.now()) {
        const remaining = Math.ceil((multiplierEndTime - Date.now()) / 1000);
        multiplierTime.textContent = remaining;
    } else if (currentMultiplier > 1) {
        currentMultiplier = 1;
        multiplierDisplay.style.display = 'none';
        showNotification('倍率モード終了');
    }
}

// ========================================
// ショップフィルター
// ========================================

let currentFilter = 'all';
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderShop();
    });
});

// ========================================
// ショップ描画
// ========================================

function renderShop() {
    const existingItems = shopItemsContainer.querySelectorAll('.shop-item');
    
    let filteredItems = shopItems;
    if (currentFilter === 'affordable') {
        filteredItems = shopItems.filter(item => {
            const cost = Math.floor(item.baseCost * Math.pow(1.15, item.count));
            return cookies >= cost;
        });
    }
    
    if (existingItems.length === filteredItems.length && currentFilter === 'all') {
        filteredItems.forEach((item, index) => {
            const cost = Math.floor(item.baseCost * Math.pow(1.15, item.count));
            const canAfford = cookies >= cost;
            const itemDiv = existingItems[index];
            
            if (canAfford) {
                itemDiv.classList.remove('disabled');
            } else {
                itemDiv.classList.add('disabled');
            }
            
            const countElement = itemDiv.querySelector('.shop-item-count');
            const costElement = itemDiv.querySelector('.shop-item-cost');
            const buyBtn = itemDiv.querySelector('.buy-btn');
            
            if (countElement) countElement.textContent = item.count;
            if (costElement) costElement.textContent = `💰 ${cost.toLocaleString()}`;
            if (buyBtn) buyBtn.disabled = !canAfford;
        });
    } else {
        shopItemsContainer.innerHTML = '';
        
        filteredItems.forEach(item => {
            const cost = Math.floor(item.baseCost * Math.pow(1.15, item.count));
            const canAfford = cookies >= cost;
            
            const itemDiv = document.createElement('div');
            itemDiv.className = `shop-item ${canAfford ? '' : 'disabled'}`;
            itemDiv.innerHTML = `
                <div class="shop-item-header">
                    <span class="shop-item-name">${item.name}</span>
                    <span class="shop-item-count">${item.count}</span>
                </div>
                <div class="shop-item-desc">${item.desc} (+${item.cps}/秒)</div>
                <div class="shop-item-footer">
                    <div class="shop-item-cost">💰 ${cost.toLocaleString()}</div>
                    <button class="buy-btn" ${!canAfford ? 'disabled' : ''}>購入</button>
                </div>
            `;
            
            const buyBtn = itemDiv.querySelector('.buy-btn');
            buyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                buyItem(item);
            });
            
            shopItemsContainer.appendChild(itemDiv);
        });
    }
}

// ========================================
// アイテム購入
// ========================================

function buyItem(item) {
    const cost = Math.floor(item.baseCost * Math.pow(1.15, item.count));
    
    if (cookies >= cost) {
        cookies -= cost;
        totalSpent += cost;
        totalPurchases++;
        item.count++;
        
        recalculateCPS();
        updateDisplay();
        playSound('buy');
    }
}

// ========================================
// 研究所描画
// ========================================

function renderResearch() {
    researchItemsContainer.innerHTML = '';
    
    researchItems.forEach(item => {
        const canAfford = cookies >= item.cost && !item.purchased;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = `research-item ${item.purchased ? 'purchased' : ''}`;
        itemDiv.innerHTML = `
            <div class="research-item-header">
                <span class="research-item-name">${item.name}</span>
                ${item.purchased ? '<span class="purchased-badge">購入済</span>' : ''}
            </div>
            <div class="research-item-desc">${item.desc}</div>
            ${!item.purchased ? `
                <div class="research-item-footer">
                    <div class="research-item-cost">💰 ${item.cost.toLocaleString()}</div>
                    <button class="upgrade-btn" ${!canAfford ? 'disabled' : ''}>研究</button>
                </div>
            ` : ''}
        `;
        
        if (!item.purchased) {
            const upgradeBtn = itemDiv.querySelector('.upgrade-btn');
            upgradeBtn.addEventListener('click', () => {
                buyResearch(item);
            });
        }
        
        researchItemsContainer.appendChild(itemDiv);
    });
}

// ========================================
// 研究購入
// ========================================

function buyResearch(item) {
    if (cookies >= item.cost && !item.purchased) {
        cookies -= item.cost;
        totalSpent += item.cost;
        item.purchased = true;
        
        applyResearchEffect(item);
        
        updateDisplay();
        playSound('buy');
        showNotification(`🔬 ${item.name} を研究しました！`);
    }
}

// ========================================
// 研究効果適用
// ========================================

function applyResearchEffect(item) {
    if (item.effect === 'clickPower') {
        clickPower += item.value;
    } else if (item.effect === 'cpsMultiplier') {
        recalculateCPS();
    } else if (item.effect === 'itemBoost') {
        recalculateCPS();
    }
}

// ========================================
// CPS再計算
// ========================================

function recalculateCPS() {
    cookiesPerSecond = 0;
    
    shopItems.forEach(item => {
        let itemCPS = item.cps * item.count;
        
        const boost = researchItems.find(r => 
            r.purchased && 
            r.effect === 'itemBoost' && 
            r.target === item.id
        );
        
        if (boost) {
            itemCPS *= boost.value;
        }
        
        cookiesPerSecond += itemCPS;
    });
    
    const cpsBoosts = researchItems.filter(r => 
        r.purchased && r.effect === 'cpsMultiplier'
    );
    
    cpsBoosts.forEach(boost => {
        cookiesPerSecond *= (1 + boost.value);
    });
    
    const heavenlyCpsBoosts = heavenlyUpgrades.filter(h =>
        h.purchased && h.effect === 'cpsMultiplier'
    );
    
    heavenlyCpsBoosts.forEach(boost => {
        cookiesPerSecond *= (1 + boost.value);
    });
    
    // 転生ボーナス
    const heavenlyBonus = prestigeLevel * 0.02;
    cookiesPerSecond *= (1 + heavenlyBonus);
    
    if (cookiesPerSecond > maxCps) maxCps = cookiesPerSecond;
}

// ========================================
// 自動生成
// ========================================

function autoGenerate() {
    if (cookiesPerSecond > 0) {
        const generated = cookiesPerSecond / 10;
        cookies += generated;
        autoCookies += generated;
        totalCookiesEarned += generated;
        updateDisplay();
    }
}

// ========================================
// 表示更新
// ========================================

function updateDisplay() {
    cookieCountElement.textContent = Math.floor(cookies).toLocaleString();
    cpsElement.textContent = cookiesPerSecond.toFixed(1);
    renderShop();
    renderResearch();
}
// ========================================
// 転生システム
// ========================================

function updatePrestigeInfo() {
    prestigeLevelElement.textContent = prestigeLevel;
    
    const potentialChips = Math.floor(Math.sqrt(totalCookiesEarned / 1000000));
    heavenlyChipsElement.textContent = potentialChips;
    
    const heavenlyBonus = prestigeLevel * 2;
    heavenlyBonusElement.textContent = heavenlyBonus;
    
    const canPrestige = totalCookiesEarned >= 1000000;
    prestigeBtn.disabled = !canPrestige;
}

prestigeBtn.addEventListener('click', () => {
    if (totalCookiesEarned >= 1000000) {
        if (confirm('本当に転生しますか？全てのクッキーと施設がリセットされます。')) {
            performPrestige();
        }
    }
});

function performPrestige() {
    const newChips = Math.floor(Math.sqrt(totalCookiesEarned / 1000000));
    heavenlyChips += newChips;
    prestigeLevel++;
    
    // リセット
    cookies = 0;
    cookiesPerSecond = 0;
    clickPower = 1;
    totalClicks = 0;
    currentMultiplier = 1;
    multiplierEndTime = 0;
    combo = 0;
    comboEndTime = 0;
    playerLevel = 1;
    playerExp = 0;
    playerExpMax = 100;
    manualCookies = 0;
    autoCookies = 0;
    totalPurchases = 0;
    totalSpent = 0;
    totalCookiesEarned = 0;
    
    shopItems.forEach(item => item.count = 0);
    researchItems.forEach(item => item.purchased = false);
    
    // 天国のアップグレードの効果を適用
    heavenlyUpgrades.forEach(upgrade => {
        if (upgrade.purchased) {
            applyHeavenlyEffect(upgrade);
        }
    });
    
    recalculateCPS();
    updateDisplay();
    updatePrestigeInfo();
    renderHeavenlyUpgrades();
    
    showNotification(`⭐ 転生しました！天国チップ +${newChips}`);
    playSound('achievement');
}

// ========================================
// 天国のアップグレード
// ========================================

function renderHeavenlyUpgrades() {
    heavenlyUpgradesList.innerHTML = '';
    
    heavenlyUpgrades.forEach(upgrade => {
        const canAfford = heavenlyChips >= upgrade.cost && !upgrade.purchased;
        
        const upgradeDiv = document.createElement('div');
        upgradeDiv.className = `heavenly-upgrade ${upgrade.purchased ? 'purchased' : ''}`;
        upgradeDiv.innerHTML = `
            <div class="heavenly-upgrade-name">${upgrade.name}</div>
            <div class="heavenly-upgrade-desc">${upgrade.desc}</div>
            ${!upgrade.purchased ? `
                <div class="heavenly-upgrade-cost">🌟 ${upgrade.cost}</div>
                <button class="heavenly-buy-btn" ${!canAfford ? 'disabled' : ''}>購入</button>
            ` : '<div class="purchased-badge">購入済</div>'}
        `;
        
        if (!upgrade.purchased) {
            const buyBtn = upgradeDiv.querySelector('.heavenly-buy-btn');
            buyBtn.addEventListener('click', () => {
                buyHeavenlyUpgrade(upgrade);
            });
        }
        
        heavenlyUpgradesList.appendChild(upgradeDiv);
    });
}

function buyHeavenlyUpgrade(upgrade) {
    if (heavenlyChips >= upgrade.cost && !upgrade.purchased) {
        heavenlyChips -= upgrade.cost;
        upgrade.purchased = true;
        
        applyHeavenlyEffect(upgrade);
        
        renderHeavenlyUpgrades();
        updatePrestigeInfo();
        showNotification(`🌟 ${upgrade.name} を購入しました！`);
        playSound('buy');
    }
}

function applyHeavenlyEffect(upgrade) {
    if (upgrade.effect === 'clickPower') {
        clickPower += upgrade.value;
    } else if (upgrade.effect === 'cpsMultiplier') {
        recalculateCPS();
    }
}

// ========================================
// ミニゲーム: クエスト
// ========================================

attackBtn.addEventListener('click', () => {
    const damage = clickPower * 10;
    currentEnemy.hp -= damage;
    
    if (currentEnemy.hp <= 0) {
        cookies += currentEnemy.reward;
        totalCookiesEarned += currentEnemy.reward;
        questRewards.textContent = `🎉 勝利！ +${currentEnemy.reward.toLocaleString()} クッキー`;
        
        const questAch = achievements.find(a => a.id === 'quest');
        if (questAch && !questAch.unlocked) {
            questAch.unlocked = true;
            showAchievement(questAch);
        }
        
        setTimeout(() => {
            spawnNewEnemy();
            questRewards.textContent = '';
        }, 2000);
    }
    
    updateEnemyDisplay();
    updateDisplay();
});

function spawnNewEnemy() {
    const enemies = [
        { name: '🐉 クッキードラゴン', hp: 100, reward: 500 },
        { name: '👹 クッキーオーガ', hp: 250, reward: 1500 },
        { name: '🦖 クッキーザウルス', hp: 500, reward: 3500 },
        { name: '👾 クッキーエイリアン', hp: 1000, reward: 8000 },
        { name: '🤖 クッキーロボ', hp: 2000, reward: 18000 }
    ];
    
    const level = Math.min(Math.floor(playerLevel / 5), enemies.length - 1);
    const enemy = enemies[level];
    
    currentEnemy = {
        name: enemy.name,
        hp: enemy.hp,
        maxHp: enemy.hp,
        reward: enemy.reward
    };
    
    updateEnemyDisplay();
}

function updateEnemyDisplay() {
    document.querySelector('.enemy-name').textContent = currentEnemy.name;
    enemyHpElement.textContent = Math.max(0, Math.floor(currentEnemy.hp));
    enemyHpMaxElement.textContent = currentEnemy.maxHp;
    
    const hpPercentage = (currentEnemy.hp / currentEnemy.maxHp) * 100;
    enemyHpFill.style.width = `${Math.max(0, hpPercentage)}%`;
}

// ========================================
// ミニゲーム: スロットマシン
// ========================================

let isSpinning = false;

slotSpinBtn.addEventListener('click', () => {
    if (isSpinning) return;
    
    const bet = parseInt(slotBetInput.value);
    
    if (bet < 10) {
        slotResult.textContent = '最低ベット額は10クッキーです';
        slotResult.style.color = '#FF6347';
        return;
    }
    
    if (cookies < bet) {
        slotResult.textContent = 'クッキーが足りません';
        slotResult.style.color = '#FF6347';
        return;
    }
    
    cookies -= bet;
    totalSpent += bet;
    updateDisplay();
    
    isSpinning = true;
    slotResult.textContent = '';
    
    const reels = [
        document.getElementById('slot-1'),
        document.getElementById('slot-2'),
        document.getElementById('slot-3')
    ];
    
    reels.forEach(reel => reel.classList.add('spinning'));
    
    setTimeout(() => {
        const results = [
            slotSymbols[Math.floor(Math.random() * slotSymbols.length)],
            slotSymbols[Math.floor(Math.random() * slotSymbols.length)],
            slotSymbols[Math.floor(Math.random() * slotSymbols.length)]
        ];
        
        reels.forEach((reel, index) => {
            reel.textContent = results[index];
            reel.classList.remove('spinning');
        });
        
        checkSlotResult(results, bet);
        isSpinning = false;
    }, 2000);
});

function checkSlotResult(results, bet) {
    if (results[0] === results[1] && results[1] === results[2]) {
        const winAmount = bet * 10;
        cookies += winAmount;
        totalCookiesEarned += winAmount;
        slotResult.textContent = `🎉 大当たり！ +${winAmount.toLocaleString()} クッキー`;
        slotResult.style.color = '#4CAF50';
        playSound('achievement');
    } else if (results[0] === results[1] || results[1] === results[2] || results[0] === results[2]) {
        const winAmount = bet * 2;
        cookies += winAmount;
        totalCookiesEarned += winAmount;
        slotResult.textContent = `✨ 当たり！ +${winAmount.toLocaleString()} クッキー`;
        slotResult.style.color = '#FFD700';
    } else {
        slotResult.textContent = '残念...';
        slotResult.style.color = '#FF6347';
    }
    
    updateDisplay();
}

// ========================================
// ミニゲーム: ガーデン
// ========================================

function initGarden() {
    gardenPlots = [];
    gardenGrid.innerHTML = '';
    
    for (let i = 0; i < GARDEN_SIZE; i++) {
        const plot = {
            id: i,
            seed: null,
            plantTime: 0,
            growTime: 0
        };
        
        gardenPlots.push(plot);
        
        const plotDiv = document.createElement('div');
        plotDiv.className = 'garden-plot';
        plotDiv.dataset.id = i;
        plotDiv.textContent = '🟫';
        
        plotDiv.addEventListener('click', () => {
            harvestPlot(plot, plotDiv);
        });
        
        gardenGrid.appendChild(plotDiv);
    }
}

let selectedSeed = null;

seedBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const seedType = btn.dataset.seed;
        const costs = { cookie: 50, golden: 500, rainbow: 2000 };
        
        if (cookies >= costs[seedType]) {
            cookies -= costs[seedType];
            totalSpent += costs[seedType];
            selectedSeed = seedType;
            updateDisplay();
            showNotification(`🌱 ${seedType}の種を選択しました。空いている土地をクリックして植えてください。`);
        } else {
            showNotification('クッキーが足りません');
        }
    });
});

function harvestPlot(plot, plotDiv) {
    if (plot.seed && Date.now() >= plot.plantTime + plot.growTime) {
        const rewards = {
            cookie: 500,
            golden: 5000,
            rainbow: 25000
        };
        
        const reward = rewards[plot.seed];
        cookies += reward;
        totalCookiesEarned += reward;
        
        showNotification(`🌾 収穫！ +${reward.toLocaleString()} クッキー`);
        
        plot.seed = null;
        plot.plantTime = 0;
        plot.growTime = 0;
        plotDiv.textContent = '🟫';
        plotDiv.classList.remove('growing', 'ready');
        
        updateDisplay();
    } else if (!plot.seed && selectedSeed) {
        plantSeed(plot, plotDiv, selectedSeed);
        selectedSeed = null;
    }
}

function plantSeed(plot, plotDiv, seedType) {
    const growTimes = {
        cookie: 30000,
        golden: 60000,
        rainbow: 120000
    };
    
    const emojis = {
        cookie: '🌱',
        golden: '✨',
        rainbow: '🌈'
    };
    
    plot.seed = seedType;
    plot.plantTime = Date.now();
    plot.growTime = growTimes[seedType];
    
    plotDiv.textContent = emojis[seedType];
    plotDiv.classList.add('growing');
}

function updateGarden() {
    gardenPlots.forEach((plot, index) => {
        if (plot.seed) {
            const plotDiv = gardenGrid.children[index];
            
            if (Date.now() >= plot.plantTime + plot.growTime) {
                plotDiv.classList.remove('growing');
                plotDiv.classList.add('ready');
                
                const readyEmojis = {
                    cookie: '🍪',
                    golden: '⭐',
                    rainbow: '🌟'
                };
                
                plotDiv.textContent = readyEmojis[plot.seed];
            }
        }
    });
}

// ========================================
// 実績チェック
// ========================================

function checkAchievements() {
    achievements.forEach(achievement => {
        if (!achievement.unlocked && achievement.condition()) {
            achievement.unlocked = true;
            showAchievement(achievement);
        }
    });
}

function showAchievement(achievement) {
    const achievementDiv = document.createElement('div');
    achievementDiv.className = 'achievement';
    achievementDiv.textContent = achievement.name;
    achievementsContainer.appendChild(achievementDiv);
    
    showNotification(`🏆 実績解除: ${achievement.name}`);
    playSound('achievement');
    
    updateStatsDisplay();
}

// ========================================
// 統計表示更新
// ========================================

function updateStatsDisplay() {
    totalCookiesEarnedElement.textContent = Math.floor(totalCookiesEarned).toLocaleString();
    totalClicksStatElement.textContent = totalClicks.toLocaleString();
    manualCookiesElement.textContent = Math.floor(manualCookies).toLocaleString();
    autoCookiesElement.textContent = Math.floor(autoCookies).toLocaleString();
    totalPurchasesElement.textContent = totalPurchases.toLocaleString();
    totalSpentElement.textContent = Math.floor(totalSpent).toLocaleString();
    
    const researchCount = researchItems.filter(r => r.purchased).length;
    researchCompletedElement.textContent = researchCount;
    
    playTimeElement.textContent = playTime;
    maxCpsElement.textContent = maxCps.toFixed(1);
    maxComboElement.textContent = maxCombo;
    goldenClicksElement.textContent = goldenClicks;
    prestigeCountElement.textContent = prestigeLevel;
    
    const unlockedCount = achievements.filter(a => a.unlocked).length;
    achievementsUnlockedElement.textContent = unlockedCount;
}

function updatePlayTime() {
    playTime++;
    updateStatsDisplay();
}

// ========================================
// 通知表示
// ========================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ========================================
// サウンド再生
// ========================================

function playSound(type) {
    if (isMuted) return;
    
    // サウンド実装は省略（Web Audio APIを使用する場合）
}

muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    muteBtn.textContent = isMuted ? '🔇 音楽OFF' : '🔊 音楽ON';
});
// ========================================
// セーブ/ロード機能
// ========================================

function saveGame() {
    const saveData = {
        cookies,
        cookiesPerSecond,
        clickPower,
        totalClicks,
        playerLevel,
        playerExp,
        playerExpMax,
        prestigeLevel,
        heavenlyChips,
        totalCookiesEarned,
        manualCookies,
        autoCookies,
        totalPurchases,
        totalSpent,
        playTime,
        maxCps,
        maxCombo,
        goldenClicks,
        shopItems: shopItems.map(item => ({ id: item.id, count: item.count })),
        researchItems: researchItems.map(item => ({ id: item.id, purchased: item.purchased })),
        heavenlyUpgrades: heavenlyUpgrades.map(item => ({ id: item.id, purchased: item.purchased })),
        achievements: achievements.map(ach => ({ id: ach.id, unlocked: ach.unlocked })),
        gardenPlots: gardenPlots.map(plot => ({
            id: plot.id,
            seed: plot.seed,
            plantTime: plot.plantTime,
            growTime: plot.growTime
        })),
        currentEnemy: currentEnemy,
        version: '1.0'
    };
    
    localStorage.setItem('cookieClickerSave', JSON.stringify(saveData));
    showNotification('💾 ゲームをセーブしました');
}

function loadGame() {
    const savedData = localStorage.getItem('cookieClickerSave');
    
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            
            cookies = data.cookies || 0;
            cookiesPerSecond = data.cookiesPerSecond || 0;
            clickPower = data.clickPower || 1;
            totalClicks = data.totalClicks || 0;
            playerLevel = data.playerLevel || 1;
            playerExp = data.playerExp || 0;
            playerExpMax = data.playerExpMax || 100;
            prestigeLevel = data.prestigeLevel || 0;
            heavenlyChips = data.heavenlyChips || 0;
            totalCookiesEarned = data.totalCookiesEarned || 0;
            manualCookies = data.manualCookies || 0;
            autoCookies = data.autoCookies || 0;
            totalPurchases = data.totalPurchases || 0;
            totalSpent = data.totalSpent || 0;
            playTime = data.playTime || 0;
            maxCps = data.maxCps || 0;
            maxCombo = data.maxCombo || 0;
            goldenClicks = data.goldenClicks || 0;
            
            if (data.shopItems) {
                data.shopItems.forEach(savedItem => {
                    const item = shopItems.find(i => i.id === savedItem.id);
                    if (item) item.count = savedItem.count;
                });
            }
            
            if (data.researchItems) {
                data.researchItems.forEach(savedItem => {
                    const item = researchItems.find(i => i.id === savedItem.id);
                    if (item) item.purchased = savedItem.purchased;
                });
            }
            
            if (data.heavenlyUpgrades) {
                data.heavenlyUpgrades.forEach(savedItem => {
                    const item = heavenlyUpgrades.find(i => i.id === savedItem.id);
                    if (item) item.purchased = savedItem.purchased;
                });
            }
            
            if (data.achievements) {
                data.achievements.forEach(savedAch => {
                    const ach = achievements.find(a => a.id === savedAch.id);
                    if (ach) {
                        ach.unlocked = savedAch.unlocked;
                        if (ach.unlocked) {
                            const achievementDiv = document.createElement('div');
                            achievementDiv.className = 'achievement';
                            achievementDiv.textContent = ach.name;
                            achievementsContainer.appendChild(achievementDiv);
                        }
                    }
                });
            }
            
            if (data.gardenPlots) {
                data.gardenPlots.forEach((savedPlot, index) => {
                    if (gardenPlots[index]) {
                        gardenPlots[index].seed = savedPlot.seed;
                        gardenPlots[index].plantTime = savedPlot.plantTime;
                        gardenPlots[index].growTime = savedPlot.growTime;
                        
                        const plotDiv = gardenGrid.children[index];
                        if (savedPlot.seed) {
                            const emojis = { cookie: '🌱', golden: '✨', rainbow: '🌈' };
                            plotDiv.textContent = emojis[savedPlot.seed];
                            plotDiv.classList.add('growing');
                        }
                    }
                });
            }
            
            if (data.currentEnemy) {
                currentEnemy = data.currentEnemy;
                updateEnemyDisplay();
            }
            
            recalculateCPS();
            updateDisplay();
            updateExpBar();
            updatePrestigeInfo();
            updateStatsDisplay();
            
            showNotification('📂 セーブデータをロードしました');
        } catch (error) {
            console.error('セーブデータの読み込みに失敗しました:', error);
            showNotification('⚠ セーブデータの読み込みに失敗しました');
        }
    }
}

function autoSave() {
    saveGame();
}

function resetGame() {
    if (confirm('本当にゲームをリセットしますか？全てのデータが削除されます。')) {
        if (confirm('本当によろしいですか？この操作は取り消せません。')) {
            localStorage.removeItem('cookieClickerSave');
            location.reload();
        }
    }
}

function exportSave() {
    const saveData = localStorage.getItem('cookieClickerSave');
    if (saveData) {
        navigator.clipboard.writeText(saveData).then(() => {
            showNotification('📤 セーブデータをクリップボードにコピーしました');
        }).catch(() => {
            showNotification('⚠ コピーに失敗しました');
        });
    } else {
        showNotification('⚠ セーブデータがありません');
    }
}

function importSave() {
    importModal.style.display = 'flex';
}

importConfirmBtn.addEventListener('click', () => {
    const importData = importTextarea.value.trim();
    
    if (importData) {
        try {
            JSON.parse(importData);
            localStorage.setItem('cookieClickerSave', importData);
            importModal.style.display = 'none';
            importTextarea.value = '';
            location.reload();
        } catch (error) {
            showNotification('⚠ 無効なセーブデータです');
        }
    } else {
        showNotification('⚠ セーブデータを入力してください');
    }
});

importCancelBtn.addEventListener('click', () => {
    importModal.style.display = 'none';
    importTextarea.value = '';
});

// ========================================
// イベントリスナー
// ========================================

saveBtn.addEventListener('click', saveGame);
loadBtn.addEventListener('click', () => {
    if (confirm('セーブデータをロードしますか？現在のデータは失われます。')) {
        location.reload();
    }
});
resetBtn.addEventListener('click', resetGame);
exportBtn.addEventListener('click', exportSave);
importBtn.addEventListener('click', importSave);

// ========================================
// ゲーム開始
// ========================================

init();