// TFT Set 13 Data - Traits, Champions, and Compositions

const TFT_DATA = {
    // Traits with icons and descriptions
    traits: {
        // Origins
        "Arcana": { icon: "🌙", type: "origin", description: "Magiczne wzmocnienie zdolności" },
        "Automata": { icon: "🤖", type: "origin", description: "Mechaniczne jednostki" },
        "Black Rose": { icon: "🥀", type: "origin", description: "Podstępne zagrania" },
        "Chem-Baron": { icon: "⚗️", type: "origin", description: "Chemiczne wzmocnienia" },
        "Conqueror": { icon: "⚔️", type: "origin", description: "Siła z pokonanych wrogów" },
        "Emissary": { icon: "👑", type: "origin", description: "Wysłannik mocy" },
        "Experiment": { icon: "🧪", type: "origin", description: "Eksperymentalne ulepszenia" },
        "Family": { icon: "👨‍👩‍👧", type: "origin", description: "Rodzinna synergia" },
        "Firelight": { icon: "🔥", type: "origin", description: "Ogniste światło" },
        "Hextech": { icon: "⚡", type: "origin", description: "Hextechowe ulepszenia" },
        "Junker King": { icon: "👑", type: "origin", description: "Król złomu" },
        "Piltover": { icon: "🏛️", type: "origin", description: "Technologia Piltover" },
        "Rebel": { icon: "✊", type: "origin", description: "Rebeliancka siła" },
        "Scrap": { icon: "🔩", type: "origin", description: "Tworzenie z odpadów" },
        "Zaun": { icon: "☣️", type: "origin", description: "Chemia Zaun" },
        
        // Classes
        "Ambusher": { icon: "🗡️", type: "class", description: "Skrytobójcze ataki" },
        "Artillerist": { icon: "💥", type: "class", description: "Artyleria długodystansowa" },
        "Bruiser": { icon: "💪", type: "class", description: "Wytrzymali wojownicy" },
        "Dominator": { icon: "👊", type: "class", description: "Dominacja pola bitwy" },
        "Enforcer": { icon: "🛡️", type: "class", description: "Egzekutorzy prawa" },
        "Form Swapper": { icon: "🔄", type: "class", description: "Zmiana formy" },
        "Pit Fighter": { icon: "🥊", type: "class", description: "Walczący na arenie" },
        "Quickstriker": { icon: "⚡", type: "class", description: "Szybkie ataki" },
        "Sentinel": { icon: "🛡️", type: "class", description: "Obrońcy" },
        "Sniper": { icon: "🎯", type: "class", description: "Precyzyjne strzały" },
        "Sorcerer": { icon: "🔮", type: "class", description: "Magowie" },
        "Visionary": { icon: "👁️", type: "class", description: "Wizjonerzy" },
        "Watcher": { icon: "👀", type: "class", description: "Obserwatorzy" }
    },

    // Champions with their traits and costs
    champions: {
        // 1-cost
        "Amumu": { cost: 1, traits: ["Emissary", "Watcher"], damage: "AP" },
        "Darius": { cost: 1, traits: ["Conqueror", "Watcher"], damage: "AD" },
        "Draven": { cost: 1, traits: ["Conqueror", "Pit Fighter"], damage: "AD" },
        "Irelia": { cost: 1, traits: ["Rebel", "Sentinel"], damage: "AD" },
        "Lux": { cost: 1, traits: ["Arcana", "Sorcerer"], damage: "AP" },
        "Maddie": { cost: 1, traits: ["Enforcer", "Sniper"], damage: "AD" },
        "Morgana": { cost: 1, traits: ["Black Rose", "Visionary"], damage: "AP" },
        "Powder": { cost: 1, traits: ["Family", "Ambusher"], damage: "AD" },
        "Singed": { cost: 1, traits: ["Chem-Baron", "Sentinel"], damage: "AP" },
        "Steb": { cost: 1, traits: ["Scrap", "Bruiser"], damage: "AD" },
        "Trundle": { cost: 1, traits: ["Scrap", "Bruiser"], damage: "AD" },
        "Vex": { cost: 1, traits: ["Rebel", "Visionary"], damage: "AP" },
        "Violet": { cost: 1, traits: ["Family", "Pit Fighter"], damage: "AD" },
        "Zyra": { cost: 1, traits: ["Experiment", "Sorcerer"], damage: "AP" },

        // 2-cost
        "Akali": { cost: 2, traits: ["Rebel", "Ambusher"], damage: "AP" },
        "Camille": { cost: 2, traits: ["Enforcer", "Ambusher"], damage: "AD" },
        "Leona": { cost: 2, traits: ["Piltover", "Sentinel"], damage: "Tank" },
        "Nocturne": { cost: 2, traits: ["Hextech", "Quickstriker"], damage: "AD" },
        "Rell": { cost: 2, traits: ["Conqueror", "Sentinel"], damage: "Tank" },
        "Renata Glasc": { cost: 2, traits: ["Chem-Baron", "Visionary"], damage: "AP" },
        "Sett": { cost: 2, traits: ["Rebel", "Bruiser"], damage: "AD" },
        "Tristana": { cost: 2, traits: ["Emissary", "Artillerist"], damage: "AD" },
        "Urgot": { cost: 2, traits: ["Experiment", "Artillerist"], damage: "AD" },
        "Vladimir": { cost: 2, traits: ["Black Rose", "Sorcerer"], damage: "AP" },
        "Zeri": { cost: 2, traits: ["Firelight", "Sniper"], damage: "AD" },
        "Kog'Maw": { cost: 2, traits: ["Automata", "Sniper"], damage: "AD" },

        // 3-cost
        "Cassiopeia": { cost: 3, traits: ["Black Rose", "Dominator"], damage: "AP" },
        "Ezreal": { cost: 3, traits: ["Rebel", "Artillerist"], damage: "AD" },
        "Gangplank": { cost: 3, traits: ["Scrap", "Pit Fighter", "Form Swapper"], damage: "AD" },
        "Loris": { cost: 3, traits: ["Chem-Baron", "Sentinel"], damage: "Tank" },
        "Nami": { cost: 3, traits: ["Emissary", "Sorcerer"], damage: "AP" },
        "Nunu": { cost: 3, traits: ["Bruiser", "Visionary"], damage: "AP" },
        "Renni": { cost: 3, traits: ["Chem-Baron", "Bruiser"], damage: "AD" },
        "Scar": { cost: 3, traits: ["Experiment", "Pit Fighter"], damage: "AD" },
        "Swain": { cost: 3, traits: ["Conqueror", "Form Swapper", "Sorcerer"], damage: "AP" },
        "Twisted Fate": { cost: 3, traits: ["Arcana", "Quickstriker"], damage: "AP" },
        "Blitzcrank": { cost: 3, traits: ["Automata", "Enforcer"], damage: "Tank" },
        "Vi": { cost: 3, traits: ["Enforcer", "Pit Fighter"], damage: "AD" },
        "Ziggs": { cost: 3, traits: ["Firelight", "Dominator"], damage: "AP" },

        // 4-cost
        "Ambessa": { cost: 4, traits: ["Conqueror", "Emissary"], damage: "AD" },
        "Corki": { cost: 4, traits: ["Scrap", "Artillerist"], damage: "AD" },
        "Dr. Mundo": { cost: 4, traits: ["Experiment", "Dominator"], damage: "Tank" },
        "Ekko": { cost: 4, traits: ["Firelight", "Scrap", "Ambusher"], damage: "AP" },
        "Elise": { cost: 4, traits: ["Black Rose", "Form Swapper", "Bruiser"], damage: "AP" },
        "Garen": { cost: 4, traits: ["Emissary", "Watcher"], damage: "AD" },
        "Heimerdinger": { cost: 4, traits: ["Piltover", "Visionary"], damage: "AP" },
        "Illaoi": { cost: 4, traits: ["Rebel", "Sentinel"], damage: "Tank" },
        "Silco": { cost: 4, traits: ["Chem-Baron", "Dominator"], damage: "AP" },
        "Twitch": { cost: 4, traits: ["Experiment", "Sniper"], damage: "AD" },
        "Zoe": { cost: 4, traits: ["Rebel", "Sorcerer"], damage: "AP" },

        // 5-cost
        "Caitlyn": { cost: 5, traits: ["Enforcer", "Sniper"], damage: "AD" },
        "Jayce": { cost: 5, traits: ["Piltover", "Form Swapper"], damage: "AD" },
        "Jinx": { cost: 5, traits: ["Rebel", "Ambusher"], damage: "AD" },
        "LeBlanc": { cost: 5, traits: ["Black Rose", "Sorcerer"], damage: "AP" },
        "Mel": { cost: 5, traits: ["Black Rose", "Visionary"], damage: "AP" },
        "Mordekaiser": { cost: 5, traits: ["Conqueror", "Dominator"], damage: "AP" },
        "Sevika": { cost: 5, traits: ["Chem-Baron", "Pit Fighter"], damage: "AD" },
        "Viktor": { cost: 5, traits: ["Automata", "Visionary"], damage: "AP" },
        "Warwick": { cost: 5, traits: ["Experiment", "Ambusher"], damage: "AD" }
    },

    // Meta compositions
    compositions: [
        {
            name: "Rebel Carry",
            tier: "S",
            traits: ["Rebel", "Sorcerer", "Ambusher"],
            champions: ["Jinx", "Zoe", "Illaoi", "Sett", "Akali", "Vex", "Irelia", "Ekko"],
            carry: ["Jinx", "Zoe"],
            items: {
                "Jinx": ["Infinity Edge", "Last Whisper", "Giant Slayer"],
                "Zoe": ["Jeweled Gauntlet", "Rabadon's Deathcap", "Blue Buff"]
            },
            positioning: "Jinx w rogu, tanki z przodu",
            tips: "Rolluj na 8 dla Jinx. Ekonomizuj do 50 złota. Jinx potrzebuje itemów AD carry.",
            counters: ["Sniper", "Ambusher"],
            strongAgainst: ["Bruiser", "Sentinel"]
        },
        {
            name: "Conqueror Swain",
            tier: "S",
            traits: ["Conqueror", "Form Swapper", "Sorcerer"],
            champions: ["Mordekaiser", "Ambessa", "Swain", "Rell", "Darius", "Draven", "Cassiopeia"],
            carry: ["Swain", "Mordekaiser"],
            items: {
                "Swain": ["Hextech Gunblade", "Rabadon's Deathcap", "Dragon's Claw"],
                "Mordekaiser": ["Warmog's Armor", "Titan's Resolve", "Gargoyle Stoneplate"]
            },
            positioning: "Swain centralnie z przodu, Mordekaiser jako główny tank",
            tips: "Swain 2* wystarczy do top 4. Silny mid-game. Leveluj agresywnie.",
            counters: ["Sniper", "Dominator"],
            strongAgainst: ["Bruiser", "Sentinel", "Pit Fighter"]
        },
        {
            name: "Black Rose Control",
            tier: "S",
            traits: ["Black Rose", "Sorcerer", "Dominator"],
            champions: ["LeBlanc", "Mel", "Elise", "Cassiopeia", "Vladimir", "Morgana", "Silco"],
            carry: ["LeBlanc", "Cassiopeia"],
            items: {
                "LeBlanc": ["Jeweled Gauntlet", "Infinity Edge", "Blue Buff"],
                "Cassiopeia": ["Morellonomicon", "Rabadon's Deathcap", "Giant Slayer"]
            },
            positioning: "LeBlanc bezpiecznie w rogu, tanki z przodu",
            tips: "Potrzebujesz przynajmniej 4 Black Rose. Silny late game.",
            counters: ["Quickstriker", "Ambusher"],
            strongAgainst: ["Tank comps", "Bruiser"]
        },
        {
            name: "Chem-Baron Silco",
            tier: "A",
            traits: ["Chem-Baron", "Dominator", "Sentinel"],
            champions: ["Sevika", "Silco", "Renni", "Loris", "Singed", "Renata Glasc", "Dr. Mundo"],
            carry: ["Silco", "Sevika"],
            items: {
                "Silco": ["Spear of Shojin", "Rabadon's Deathcap", "Jeweled Gauntlet"],
                "Sevika": ["Titan's Resolve", "Bloodthirster", "Sterak's Gage"]
            },
            positioning: "Sevika frontline, Silco bezpiecznie z tyłu",
            tips: "6 Chem-Baron jest celem. Silco potrzebuje many itemów.",
            counters: ["Sniper", "Anti-heal"],
            strongAgainst: ["Melee comps", "Bruiser"]
        },
        {
            name: "Experiment Warwick",
            tier: "A",
            traits: ["Experiment", "Ambusher", "Dominator"],
            champions: ["Warwick", "Twitch", "Dr. Mundo", "Scar", "Urgot", "Zyra", "Ekko"],
            carry: ["Warwick", "Twitch"],
            items: {
                "Warwick": ["Bloodthirster", "Titan's Resolve", "Quicksilver"],
                "Twitch": ["Guinsoo's Rageblade", "Last Whisper", "Giant Slayer"]
            },
            positioning: "Warwick sam, skacze do backline. Twitch w rogu.",
            tips: "Warwick 3* jest win condition. Rolluj na 7-8.",
            counters: ["CC heavy", "Burst damage"],
            strongAgainst: ["Squishy carries", "Sorcerer"]
        },
        {
            name: "Sniper Caitlyn",
            tier: "A",
            traits: ["Sniper", "Enforcer", "Piltover"],
            champions: ["Caitlyn", "Jayce", "Heimerdinger", "Maddie", "Zeri", "Camille", "Blitzcrank", "Vi"],
            carry: ["Caitlyn", "Heimerdinger"],
            items: {
                "Caitlyn": ["Infinity Edge", "Last Whisper", "Giant Slayer"],
                "Heimerdinger": ["Rabadon's Deathcap", "Blue Buff", "Jeweled Gauntlet"]
            },
            positioning: "Caitlyn maksymalnie daleko, tanki z przodu",
            tips: "Potrzebujesz 4 Sniper dla synergii. Caitlyn niszczy tanki.",
            counters: ["Ambusher", "Rebel (Jinx)"],
            strongAgainst: ["Tank comps", "Sentinel", "Bruiser"]
        },
        {
            name: "Firelight Ekko",
            tier: "A",
            traits: ["Firelight", "Scrap", "Ambusher"],
            champions: ["Ekko", "Ziggs", "Zeri", "Corki", "Gangplank", "Trundle", "Steb"],
            carry: ["Ekko", "Corki"],
            items: {
                "Ekko": ["Jeweled Gauntlet", "Blue Buff", "Infinity Edge"],
                "Corki": ["Guinsoo's Rageblade", "Giant Slayer", "Last Whisper"]
            },
            positioning: "Ekko w środku, Corki w rogu",
            tips: "Scrap daje darmowe itemy! Ekko potrzebuje AP itemów.",
            counters: ["Tank heavy", "High HP comps"],
            strongAgainst: ["Squishy comps", "Sorcerer"]
        },
        {
            name: "Piltover Tech",
            tier: "A",
            traits: ["Piltover", "Enforcer", "Visionary"],
            champions: ["Jayce", "Heimerdinger", "Caitlyn", "Leona", "Maddie", "Vi", "Blitzcrank", "Camille"],
            carry: ["Jayce", "Heimerdinger"],
            items: {
                "Jayce": ["Titan's Resolve", "Bloodthirster", "Edge of Night"],
                "Heimerdinger": ["Rabadon's Deathcap", "Spear of Shojin", "Jeweled Gauntlet"]
            },
            positioning: "Jayce frontline, Heimerdinger backline chroniony",
            tips: "Piltover potrzebuje strat HP żeby aktywować. Nie leveluj zbyt wcześnie.",
            counters: ["Burst damage", "Ambusher"],
            strongAgainst: ["Sustained damage", "Slow comps"]
        },
        {
            name: "Automata Viktor",
            tier: "S",
            traits: ["Automata", "Visionary", "Sniper"],
            champions: ["Viktor", "Kog'Maw", "Blitzcrank", "Heimerdinger", "Renata Glasc", "Morgana", "Mel"],
            carry: ["Viktor", "Kog'Maw"],
            items: {
                "Viktor": ["Rabadon's Deathcap", "Blue Buff", "Jeweled Gauntlet"],
                "Kog'Maw": ["Guinsoo's Rageblade", "Titan's Resolve", "Runaan's Hurricane"]
            },
            positioning: "Viktor centralnie chroniony, Kog'Maw w rogu",
            tips: "Viktor 2* jest bardzo silny. Visionary zapewnia sustain many.",
            counters: ["Ambusher", "Dive comps"],
            strongAgainst: ["Frontline heavy", "Tank comps"]
        },
        {
            name: "Arcana Magic",
            tier: "A",
            traits: ["Arcana", "Sorcerer", "Quickstriker"],
            champions: ["Twisted Fate", "Lux", "Nami", "Zoe", "Vladimir", "Nocturne", "Swain"],
            carry: ["Twisted Fate", "Zoe"],
            items: {
                "Twisted Fate": ["Rabadon's Deathcap", "Blue Buff", "Jeweled Gauntlet"],
                "Zoe": ["Spear of Shojin", "Rabadon's Deathcap", "Morellonomicon"]
            },
            positioning: "TF może być flexowany, Zoe bezpiecznie",
            tips: "Arcana daje losowe wzmocnienia. High variance comp.",
            counters: ["Dragon's Claw stackers", "MR heavy"],
            strongAgainst: ["Low MR comps", "AD focused"]
        }
    ],

    // Counter relationships
    counters: {
        // Damage type counters
        "AP_heavy": {
            build: "Dragon's Claw, MR items",
            comps: ["Conqueror", "Experiment"],
            tips: "Stawiaj na MR i Sustain"
        },
        "AD_heavy": {
            build: "Bramble Vest, Armor items",
            comps: ["Sentinel heavy", "Bruiser"],
            tips: "Armor i Thornmail są kluczowe"
        },
        "Tank_heavy": {
            build: "Giant Slayer, Last Whisper",
            comps: ["Sniper", "Dominator"],
            tips: "% HP damage i Armor Pen"
        },
        
        // Trait counters
        "Ambusher": {
            counter: "Sentinel, pozycjonowanie w rogu",
            items: ["Edge of Night", "Quicksilver"]
        },
        "Sniper": {
            counter: "Ambusher, dive comps",
            items: ["Shroud of Stillness", "Zephyr"]
        },
        "Sorcerer": {
            counter: "Dragon's Claw, MR stacking",
            items: ["Dragon's Claw", "Hextech Gunblade"]
        },
        "Bruiser": {
            counter: "Giant Slayer, % HP damage",
            items: ["Giant Slayer", "Morellonomicon"]
        }
    },

    // Economy guidelines by stage
    economyGuide: {
        "2-1": {
            gold: "0-10",
            level: 3,
            action: "Natural level, nie wydawaj złota",
            priority: "Zbieraj jednostki, nie rolluj"
        },
        "2-5": {
            gold: "10-30",
            level: 4,
            action: "Możesz levelować do 4 jeśli masz silne jednostki",
            priority: "Ekonomia > Siła"
        },
        "3-1": {
            gold: "30-50",
            level: 5,
            action: "Level do 5 jeśli streak lub silna plansza",
            priority: "Utrzymuj 50 złota jeśli możesz"
        },
        "3-2": {
            gold: "40-50",
            level: 5-6,
            action: "Standard level do 6",
            priority: "Stabilizuj planszę, szukaj par"
        },
        "3-5": {
            gold: "50",
            level: 6,
            action: "Trzymaj 50 złota, lekkie rolowanie",
            priority: "Utrzymuj ekonomię"
        },
        "4-1": {
            gold: "50+",
            level: 7,
            action: "Level do 7, możesz rollować",
            priority: "Szukaj 4-costów"
        },
        "4-2": {
            gold: "30-50",
            level: 7,
            action: "Rolluj jeśli słaby, trzymaj econ jeśli silny",
            priority: "Stabilizacja lub ekonomia"
        },
        "4-5": {
            gold: "50",
            level: 7-8,
            action: "Level do 8 lub rolluj na 7",
            priority: "Zależy od HP"
        },
        "5-1": {
            gold: "30-50",
            level: 8,
            action: "Level 8, rolluj za carry",
            priority: "Znajdź 2* carry"
        },
        "5-2": {
            gold: "varies",
            level: 8,
            action: "Rolluj za upgrades",
            priority: "All-in jeśli low HP"
        },
        "5-5": {
            gold: "varies",
            level: 8-9,
            action: "Level 9 jeśli mega econ, inaczej rolluj",
            priority: "Znajdź 5-costy lub 3*"
        },
        "6-1": {
            gold: "varies",
            level: 9,
            action: "Level 9 lub all-in rolls",
            priority: "Maksymalizuj siłę"
        }
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TFT_DATA;
}
