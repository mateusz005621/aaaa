// TFT Assistant - Main Application Logic

// State management
const state = {
    selectedEnemyTraits: new Set(),
    currentTab: 'counter'
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    initializeTraitSelector();
    initializeCompositions();
    initializeFilters();
});

// Tab navigation
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            // Update buttons
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
            
            state.currentTab = tabId;
        });
    });
}

// Initialize trait selector
function initializeTraitSelector() {
    const container = document.getElementById('enemy-traits');
    if (!container) return;

    // Group traits by type
    const origins = [];
    const classes = [];

    Object.entries(TFT_DATA.traits).forEach(([name, data]) => {
        if (data.type === 'origin') {
            origins.push({ name, ...data });
        } else {
            classes.push({ name, ...data });
        }
    });

    // Create trait buttons
    const createTraitButtons = (traits) => {
        return traits.map(trait => `
            <button class="trait-btn" data-trait="${trait.name}" title="${trait.description}">
                <span class="trait-icon">${trait.icon}</span>
                ${trait.name}
            </button>
        `).join('');
    };

    container.innerHTML = `
        <div class="trait-group">
            <h4 style="width: 100%; margin-bottom: 8px; color: var(--text-secondary);">Origins:</h4>
            ${createTraitButtons(origins)}
        </div>
        <div class="trait-group" style="margin-top: 12px;">
            <h4 style="width: 100%; margin-bottom: 8px; color: var(--text-secondary);">Classes:</h4>
            ${createTraitButtons(classes)}
        </div>
    `;

    // Add click listeners
    container.querySelectorAll('.trait-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const trait = btn.dataset.trait;
            
            if (state.selectedEnemyTraits.has(trait)) {
                state.selectedEnemyTraits.delete(trait);
                btn.classList.remove('selected');
            } else {
                state.selectedEnemyTraits.add(trait);
                btn.classList.add('selected');
            }
            
            updateSelectedTraits();
            updateRecommendations();
        });
    });
}

// Update selected traits display
function updateSelectedTraits() {
    const container = document.getElementById('selected-enemy-traits');
    if (!container) return;

    if (state.selectedEnemyTraits.size === 0) {
        container.innerHTML = '<span style="color: var(--text-secondary);">Brak wybranych traitów</span>';
        return;
    }

    container.innerHTML = Array.from(state.selectedEnemyTraits).map(trait => {
        const traitData = TFT_DATA.traits[trait];
        return `
            <span class="trait-tag">
                ${traitData?.icon || '📌'} ${trait}
                <button class="remove-btn" onclick="removeTrait('${trait}')">×</button>
            </span>
        `;
    }).join('');
}

// Remove trait
function removeTrait(trait) {
    state.selectedEnemyTraits.delete(trait);
    
    // Update button state
    const btn = document.querySelector(`.trait-btn[data-trait="${trait}"]`);
    if (btn) btn.classList.remove('selected');
    
    updateSelectedTraits();
    updateRecommendations();
}

// Update recommendations based on selected enemy traits
function updateRecommendations() {
    const container = document.getElementById('recommendations');
    if (!container) return;

    if (state.selectedEnemyTraits.size === 0) {
        container.innerHTML = `
            <div class="placeholder">
                <span>👈</span>
                <p>Wybierz traity przeciwników, aby zobaczyć rekomendacje</p>
            </div>
        `;
        return;
    }

    const recommendations = analyzeEnemyTraits(state.selectedEnemyTraits);
    
    container.innerHTML = recommendations.map(rec => `
        <div class="recommendation-card ${rec.type}">
            <h4>${rec.icon} ${rec.title}</h4>
            <p>${rec.description}</p>
            ${rec.champions ? `
                <div class="champions">
                    ${rec.champions.map(champ => `
                        <span class="champion-badge ${rec.carry?.includes(champ) ? 'carry' : ''}">${champ}</span>
                    `).join('')}
                </div>
            ` : ''}
            ${rec.items ? `<p style="margin-top: 8px;"><strong>Itemy:</strong> ${rec.items.join(', ')}</p>` : ''}
        </div>
    `).join('');
}

// Analyze enemy traits and generate recommendations
function analyzeEnemyTraits(enemyTraits) {
    const recommendations = [];
    const traits = Array.from(enemyTraits);
    
    // Check for damage type patterns
    let apCount = 0;
    let adCount = 0;
    let tankCount = 0;

    traits.forEach(trait => {
        const sorcererTraits = ['Sorcerer', 'Visionary', 'Dominator', 'Arcana'];
        const adTraits = ['Sniper', 'Ambusher', 'Quickstriker', 'Pit Fighter', 'Artillerist'];
        const tankTraits = ['Sentinel', 'Bruiser', 'Watcher'];

        if (sorcererTraits.includes(trait)) apCount++;
        if (adTraits.includes(trait)) adCount++;
        if (tankTraits.includes(trait)) tankCount++;
    });

    // Damage type recommendations
    if (apCount >= 2) {
        recommendations.push({
            type: '',
            icon: '🛡️',
            title: 'Dużo AP u przeciwników!',
            description: 'Buduj Dragon\'s Claw i MR itemy. Rozważ kompozycje z wysokim MR lub sustain.',
            items: ['Dragon\'s Claw', 'Quicksilver', 'Hextech Gunblade']
        });
    }

    if (adCount >= 2) {
        recommendations.push({
            type: '',
            icon: '🛡️',
            title: 'Dużo AD u przeciwników!',
            description: 'Buduj Bramble Vest i Armor itemy. Thornmail jest świetny.',
            items: ['Bramble Vest', 'Thornmail', 'Frozen Heart']
        });
    }

    if (tankCount >= 2) {
        recommendations.push({
            type: 'warning',
            icon: '⚔️',
            title: 'Dużo tanków w lobby!',
            description: 'Potrzebujesz Giant Slayer i % HP damage. Sniper compy są dobre.',
            items: ['Giant Slayer', 'Last Whisper', 'Morellonomicon']
        });
    }

    // Find counter compositions
    const counterComps = findCounterComps(traits);
    counterComps.forEach(comp => {
        recommendations.push({
            type: '',
            icon: '✅',
            title: `Rekomendacja: ${comp.name}`,
            description: `${comp.tier}-Tier kompozycja. ${comp.tips}`,
            champions: comp.champions,
            carry: comp.carry
        });
    });

    // Trait-specific counters
    if (traits.includes('Ambusher')) {
        recommendations.push({
            type: 'warning',
            icon: '⚠️',
            title: 'Uwaga na Ambusher!',
            description: 'Pozycjonuj carry w rogu z tankami obok. Edge of Night chroni przed skokiem.',
            items: ['Edge of Night', 'Quicksilver', 'Guardian Angel']
        });
    }

    if (traits.includes('Sniper')) {
        recommendations.push({
            type: 'warning',
            icon: '⚠️',
            title: 'Uwaga na Sniper!',
            description: 'Sniperzy celują w najdalszą jednostkę. Nie stawiaj carry w rogu!',
            items: ['Shroud of Stillness', 'Zephyr']
        });
    }

    if (traits.includes('Sorcerer') || traits.includes('Dominator')) {
        recommendations.push({
            type: '',
            icon: '🔮',
            title: 'Magiczne obrażenia dominują',
            description: 'Priorytetem jest MR. Dragon\'s Claw na głównym carry.',
            items: ['Dragon\'s Claw', 'Hextech Gunblade', 'Quicksilver']
        });
    }

    // If no specific recommendations, give general advice
    if (recommendations.length === 0) {
        recommendations.push({
            type: '',
            icon: '💡',
            title: 'Ogólna porada',
            description: 'Monitoruj lobby i dostosowuj się. Szukaj niepopularnych kompozycji dla łatwiejszych 3*.',
            champions: []
        });
    }

    return recommendations;
}

// Find compositions that counter enemy traits
function findCounterComps(enemyTraits) {
    const comps = TFT_DATA.compositions;
    const scoredComps = [];

    comps.forEach(comp => {
        let score = 0;
        
        // Check if comp is strong against any enemy traits
        enemyTraits.forEach(trait => {
            if (comp.strongAgainst?.some(strong => 
                trait.toLowerCase().includes(strong.toLowerCase()) ||
                strong.toLowerCase().includes(trait.toLowerCase())
            )) {
                score += 2;
            }
        });

        // Check if comp is countered by enemy traits (negative)
        enemyTraits.forEach(trait => {
            if (comp.counters?.some(counter => 
                trait.toLowerCase().includes(counter.toLowerCase()) ||
                counter.toLowerCase().includes(trait.toLowerCase())
            )) {
                score -= 1;
            }
        });

        // Tier bonus
        if (comp.tier === 'S') score += 1;

        if (score > 0) {
            scoredComps.push({ ...comp, score });
        }
    });

    // Sort by score and return top 3
    return scoredComps
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
}

// Lobby analysis
function analyzeLobby() {
    const apPlayers = parseInt(document.getElementById('ap-players').value) || 0;
    const adPlayers = parseInt(document.getElementById('ad-players').value) || 0;
    const tankPlayers = parseInt(document.getElementById('tank-players').value) || 0;

    const resultContainer = document.getElementById('lobby-result');
    resultContainer.classList.add('active');

    let advice = [];

    if (apPlayers >= 4) {
        advice.push({
            icon: '🛡️',
            text: 'Lobby jest AP heavy! Priorytetem są MR itemy (Dragon\'s Claw, QSS).',
            type: 'warning'
        });
    }

    if (adPlayers >= 4) {
        advice.push({
            icon: '🛡️',
            text: 'Lobby jest AD heavy! Priorytetem są Armor itemy (Bramble, Thornmail).',
            type: 'warning'
        });
    }

    if (tankPlayers >= 4) {
        advice.push({
            icon: '⚔️',
            text: 'Dużo tanków! Buduj Giant Slayer i Last Whisper. Sniper compy są dobre.',
            type: 'info'
        });
    }

    if (apPlayers <= 2 && adPlayers <= 2) {
        advice.push({
            icon: '🎯',
            text: 'Lobby jest zbalansowane. Graj swoją kompozycję i dostosowuj itemy sytuacyjnie.',
            type: 'success'
        });
    }

    // Comp suggestions
    if (apPlayers >= adPlayers && tankPlayers < 3) {
        advice.push({
            icon: '✅',
            text: 'Polecane compy: Rebel (Jinx), Experiment (Warwick), Sniper (Caitlyn)',
            type: 'success'
        });
    } else if (adPlayers > apPlayers) {
        advice.push({
            icon: '✅',
            text: 'Polecane compy: Conqueror (Swain), Chem-Baron (Silco), Black Rose',
            type: 'success'
        });
    }

    resultContainer.innerHTML = advice.map(a => `
        <div class="advice-box ${a.type === 'warning' ? 'danger' : a.type === 'success' ? 'econ' : 'level'}">
            <h4>${a.icon} ${a.type === 'warning' ? 'Uwaga' : a.type === 'success' ? 'Porada' : 'Info'}</h4>
            <p>${a.text}</p>
        </div>
    `).join('');
}

// Economy calculator
function calculateEconomy() {
    const gold = parseInt(document.getElementById('current-gold').value) || 0;
    const level = parseInt(document.getElementById('current-level').value) || 6;
    const stage = document.getElementById('current-stage').value;
    const hp = parseInt(document.getElementById('current-hp').value) || 100;
    const streak = parseInt(document.getElementById('streak').value) || 0;

    const adviceContainer = document.getElementById('economy-advice');
    const advice = [];

    // Interest calculation
    const interest = Math.min(5, Math.floor(gold / 10));
    
    advice.push({
        type: 'econ',
        icon: '💰',
        title: `Odsetki: +${interest} złota/rundę`,
        text: gold >= 50 
            ? 'Masz maksymalne odsetki! Świetna ekonomia.' 
            : `Potrzebujesz ${Math.ceil((50 - gold) / 10) * 10} więcej złota do max odsetek.`
    });

    // Stage-specific advice
    const stageGuide = TFT_DATA.economyGuide[stage];
    if (stageGuide) {
        advice.push({
            type: 'level',
            icon: '📈',
            title: `Runda ${stage} - Zalecany poziom: ${stageGuide.level}`,
            text: stageGuide.action
        });
    }

    // HP-based urgency
    if (hp <= 30) {
        advice.push({
            type: 'danger',
            icon: '🚨',
            title: 'NISKIE HP! Czas na all-in!',
            text: 'Wydaj całe złoto na roll i level. Musisz wygrywać rundy natychmiast!'
        });
    } else if (hp <= 50) {
        advice.push({
            type: 'roll',
            icon: '⚠️',
            title: 'HP jest niskie',
            text: 'Rozważ rollowanie za upgrades. Nie trzymaj więcej niż 30 złota.'
        });
    } else if (hp >= 80) {
        advice.push({
            type: 'econ',
            icon: '✨',
            title: 'Zdrowe HP!',
            text: 'Możesz grać na ekonomię. Trzymaj 50 złota i leveluj naturalnie.'
        });
    }

    // Level vs Gold balance
    const expectedLevelByStage = {
        '2-1': 3, '2-5': 4, '3-1': 5, '3-2': 5, '3-5': 6,
        '4-1': 7, '4-2': 7, '4-5': 7, '5-1': 8, '5-2': 8, '5-5': 8, '6-1': 9, '6-2': 9
    };

    const expectedLevel = expectedLevelByStage[stage] || 6;
    
    if (level < expectedLevel) {
        advice.push({
            type: 'level',
            icon: '📊',
            title: 'Jesteś za niskim poziomem!',
            text: `Na rundę ${stage} powinieneś być poziom ${expectedLevel}. Rozważ levelowanie.`
        });
    } else if (level > expectedLevel) {
        advice.push({
            type: 'econ',
            icon: '🎯',
            title: 'Jesteś ahead w levelach!',
            text: 'Świetnie! Teraz rolluj za silne jednostki lub trzymaj ekonomię.'
        });
    }

    // Streak advice
    if (streak >= 3) {
        advice.push({
            type: 'econ',
            icon: '🔥',
            title: `Streak +${streak}!`,
            text: `Dostajesz +${streak >= 5 ? 3 : streak >= 4 ? 2 : 1} dodatkowego złota za passę!`
        });
    }

    // Roll odds reminder
    const rollAdvice = getRollAdvice(level, stage);
    if (rollAdvice) {
        advice.push({
            type: 'roll',
            icon: '🎲',
            title: rollAdvice.title,
            text: rollAdvice.text
        });
    }

    // Render advice
    adviceContainer.innerHTML = advice.map(a => `
        <div class="advice-box ${a.type}">
            <h4>${a.icon} ${a.title}</h4>
            <p>${a.text}</p>
        </div>
    `).join('');
}

// Get roll advice based on level
function getRollAdvice(level, stage) {
    if (level <= 5) {
        return {
            title: 'Nie rolluj na tym poziomie!',
            text: 'Szanse na 4-5 costy są minimalne. Leveluj do 7-8 przed rolowaniem.'
        };
    }
    
    if (level === 6) {
        return {
            title: 'Level 6 - Rollowanie',
            text: 'Możesz rollować za 3-costy. 4-costy mają tylko 5% szans.'
        };
    }
    
    if (level === 7) {
        return {
            title: 'Level 7 - Dobry do rollowania',
            text: '4-costy mają 10% szans. Świetny poziom do stabilizacji z 4-costami.'
        };
    }
    
    if (level === 8) {
        return {
            title: 'Level 8 - Optymalny do rollowania',
            text: '4-costy: 22%, 5-costy: 3%. Główny poziom do szukania carry.'
        };
    }
    
    if (level >= 9) {
        return {
            title: 'Level 9 - Polowanie na legendy!',
            text: '5-costy mają 10% szans! Szukaj 5-costów i 2* upgrades.'
        };
    }

    return null;
}

// Initialize compositions display
function initializeCompositions() {
    const container = document.getElementById('compositions');
    if (!container) return;

    renderCompositions(TFT_DATA.compositions);
}

// Render compositions
function renderCompositions(comps) {
    const container = document.getElementById('compositions');
    
    container.innerHTML = comps.map(comp => `
        <div class="comp-card" data-tier="${comp.tier.toLowerCase()}-tier">
            <span class="tier-badge ${comp.tier.toLowerCase()}-tier">${comp.tier}-Tier</span>
            <h4>${comp.name}</h4>
            
            <div class="comp-traits">
                ${comp.traits.map(trait => {
                    const traitData = TFT_DATA.traits[trait];
                    return `<span class="comp-trait">${traitData?.icon || '📌'} ${trait}</span>`;
                }).join('')}
            </div>
            
            <div class="comp-champions">
                ${comp.champions.map(champ => {
                    const champData = TFT_DATA.champions[champ];
                    const isCarry = comp.carry?.includes(champ);
                    return `<span class="champion-badge ${isCarry ? 'carry' : ''}" title="${champData?.cost || '?'}💰">${champ}</span>`;
                }).join('')}
            </div>
            
            <div class="comp-tips">
                <h5>💡 Wskazówki:</h5>
                <p>${comp.tips}</p>
                <p style="margin-top: 6px;"><strong>📍 Pozycjonowanie:</strong> ${comp.positioning}</p>
            </div>
        </div>
    `).join('');
}

// Initialize filter buttons
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter compositions
            let filteredComps;
            if (filter === 'all') {
                filteredComps = TFT_DATA.compositions;
            } else if (filter === 's-tier') {
                filteredComps = TFT_DATA.compositions.filter(c => c.tier === 'S');
            } else if (filter === 'a-tier') {
                filteredComps = TFT_DATA.compositions.filter(c => c.tier === 'A');
            } else if (filter === 'flex') {
                // Flex comps that can be played from various starts
                filteredComps = TFT_DATA.compositions.filter(c => 
                    c.name.includes('Rebel') || c.name.includes('Conqueror') || c.name.includes('Arcana')
                );
            } else {
                filteredComps = TFT_DATA.compositions;
            }
            
            renderCompositions(filteredComps);
        });
    });
}

// Utility function to get champion cost color
function getCostColor(cost) {
    const colors = {
        1: '#808080',
        2: '#11b288',
        3: '#207ac7',
        4: '#c440da',
        5: '#ffb93b'
    };
    return colors[cost] || '#ffffff';
}

// Make functions globally available
window.analyzeLobby = analyzeLobby;
window.calculateEconomy = calculateEconomy;
window.removeTrait = removeTrait;
