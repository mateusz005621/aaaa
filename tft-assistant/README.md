# ⚔️ TFT Assistant - Asystent Kompozycji i Ekonomii

Kompleksowy asystent do **Teamfight Tactics (TFT)** który pomaga w:
- 🎯 Analizie kompozycji przeciwników i sugerowaniu counter-picków
- 💰 Zarządzaniu ekonomią i podejmowaniu decyzji
- 📋 Przeglądaniu meta kompozycji

## 🚀 Jak uruchomić

### Metoda 1: Bezpośrednie otwarcie
Po prostu otwórz plik `index.html` w przeglądarce:
```bash
# Linux/Mac
xdg-open index.html
# lub
open index.html

# Windows
start index.html
```

### Metoda 2: Lokalny serwer (zalecane)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# Potem otwórz http://localhost:8000
```

## 📱 Funkcje

### 🎯 Counter Pick - Analiza Przeciwników

1. **Wybór traitów przeciwników** - Kliknij traity które widzisz u przeciwników w lobby
2. **Automatyczne rekomendacje** - System zasugeruje:
   - Jakie itemy budować
   - Które kompozycje są dobre przeciwko lobby
   - Na co uważać

3. **Szybka analiza lobby** - Podaj ile osób gra AP/AD/Tanki i dostań spersonalizowaną poradę

### 💰 Ekonomia - Zarządzanie Złotem

1. **Wprowadź swój stan** - Złoto, poziom, rundę, HP
2. **Otrzymaj porady**:
   - Czy trzymać ekonomię
   - Kiedy levelować
   - Kiedy rollować
   - Jak zareagować na niskie HP

3. **Tabele referencyjne**:
   - Odsetki (interest)
   - Koszty levelowania
   - Szanse na championów

### 📋 Kompozycje - Meta Teams

1. **Przeglądaj meta compy** - S-Tier i A-Tier kompozycje
2. **Dla każdego compa**:
   - Lista championów (z oznaczonymi carry)
   - Zalecane itemy
   - Wskazówki i pozycjonowanie
   - Co counteruje i przed czym się bronić

## 🎮 Jak używać w grze

### Przed grą:
1. Sprawdź zakładkę **Kompozycje** żeby poznać meta
2. Zdecyduj na 2-3 compy które możesz grać flexowo

### W grze:
1. **Wczesna gra (Stage 2-3)**:
   - Używaj zakładki **Ekonomia** do śledzenia czy masz dobrą ekonomię
   - Zbieraj jednostki i itemy

2. **Mid game (Stage 3-4)**:
   - Otwórz zakładkę **Counter Pick**
   - Zaznacz traity które widzisz u przeciwników
   - Dostosuj swój team i itemy

3. **Late game (Stage 5+)**:
   - Sprawdzaj **Ekonomię** czy to czas na all-in
   - Aktualizuj traity przeciwników w **Counter Pick**

## 📊 Dane

Aplikacja zawiera dane dla **TFT Set 13** w tym:
- 40+ championów z traitami i kosztami
- 15+ traitów (Origins + Classes)
- 10 meta kompozycji z detalami
- Kompletny przewodnik ekonomii

## 🔧 Struktura plików

```
tft-assistant/
├── index.html      # Główny plik HTML
├── styles.css      # Style CSS
├── data.js         # Dane TFT (championsi, traity, compy)
├── app.js          # Logika aplikacji
└── README.md       # Ten plik
```

## 🎨 Technologie

- **HTML5** - Struktura
- **CSS3** - Stylizacja (dark mode, gradienty, animacje)
- **Vanilla JavaScript** - Logika bez frameworków
- **Responsive Design** - Działa na desktop i mobile

## 📝 Aktualizacje

Dane są aktualne dla **Set 13**. Aby zaktualizować dla nowego patcha:
1. Edytuj `data.js`
2. Zaktualizuj championów, traity i kompozycje

## ⚡ Tips & Tricks

1. **Skróty klawiszowe**: Używaj Tab do nawigacji między polami
2. **Na telefonie**: Strona jest responsywna - możesz używać podczas gry
3. **Pozycjonowanie**: Zawsze sprawdzaj "silne przeciwko" dla twojego compa

## 🤝 Wkład

Masz sugestie lub znalazłeś błąd? Śmiało edytuj pliki!

---

**Good luck w ranked! 🏆**

*Pamiętaj: Ten asystent to pomoc, ale ostateczne decyzje zależą od sytuacji w grze!*
