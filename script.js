// Bhagavad Gita data structure
const bhagavadGita = {
    preliminarySections: [
        {
            id: "prolog",
            title: "Prolog",
            content: "Treść prologu będzie załadowana z Vedabase..."
        },
        {
            id: "dedication",
            title: "Dedykacja",
            content: "Treść dedykacji będzie załadowana z Vedabase..."
        },
        {
            id: "preface",
            title: "Wstęp",
            content: "Treść wstępu będzie załadowana z Vedabase..."
        },
        {
            id: "introduction",
            title: "Wprowadzenie",
            content: "Treść wprowadzenia będzie załadowana z Vedabase..."
        }
    ],
    chapters: [
        {
            number: 1,
            title: "Przyjmowanie pozycji ucznia",
            sanskrit: "arjuna-viṣāda-yoga",
            description: "Arjuna widzi armie na polu bitwy Kurukṣetry i pogrąża się w głębokim smutku z powodu perspektywy walki ze swoimi krewnymi i nauczycielami.",
            verseCount: 47,
            readingTime: "15 min"
        },
        {
            number: 2,
            title: "Treść Bhagavad-gīty",
            sanskrit: "sāṅkhya-yoga",
            description: "Kṛṣṇa wyjaśnia Arjunie naturę duszy, różnicę między duszą a ciałem oraz ścieżkę wiedzy.",
            verseCount: 72,
            readingTime: "22 min"
        },
        {
            number: 3,
            title: "Karma-yoga",
            sanskrit: "karma-yoga",
            description: "Ścieżka działania bez przywiązania do owoców pracy.",
            verseCount: 43,
            readingTime: "18 min"
        },
        {
            number: 4,
            title: "Transcendentalna wiedza",
            sanskrit: "jñāna-karma-sannyāsa-yoga",
            description: "Kṛṣṇa wyjaśnia wieczną naturę swojej wiedzy i awatarów.",
            verseCount: 42,
            readingTime: "17 min"
        },
        {
            number: 5,
            title: "Karma-yoga - działanie w świadomości Kṛṣṇy",
            sanskrit: "karma-sannyāsa-yoga",
            description: "Porównanie ścieżki wyrzeczenia z ścieżką działania w oddaniu.",
            verseCount: 29,
            readingTime: "12 min"
        },
        {
            number: 6,
            title: "Dhyāna-yoga",
            sanskrit: "dhyāna-yoga",
            description: "Ścieżka medytacji i kontroli umysłu.",
            verseCount: 47,
            readingTime: "19 min"
        },
        {
            number: 7,
            title: "Wiedza o Absolucie",
            sanskrit: "jñāna-vijñāna-yoga",
            description: "Kṛṣṇa wyjaśnia swoją boską naturę i różne aspekty swojej energii.",
            verseCount: 30,
            readingTime: "13 min"
        },
        {
            number: 8,
            title: "Osiągnięcie Najwyższego",
            sanskrit: "akṣara-brahma-yoga",
            description: "Wyjaśnienie natury Brahmana, adhyātmy i karmy.",
            verseCount: 28,
            readingTime: "11 min"
        },
        {
            number: 9,
            title: "Najpoufniejsza wiedza",
            sanskrit: "rāja-vidyā-rāja-guhya-yoga",
            description: "Kṛṣṇa ujawnia najbardziej poufną wiedzę o bhakti-yodze.",
            verseCount: 34,
            readingTime: "14 min"
        },
        {
            number: 10,
            title: "Przepych Absolutu",
            sanskrit: "vibhūti-yoga",
            description: "Kṛṣṇa opisuje swoje boskie manifestacje i przepych.",
            verseCount: 42,
            readingTime: "17 min"
        },
        {
            number: 11,
            title: "Uniwersalna forma",
            sanskrit: "viśvarūpa-darśana-yoga",
            description: "Arjuna widzi uniwersalną formę Kṛṣṇy.",
            verseCount: 55,
            readingTime: "23 min"
        },
        {
            number: 12,
            title: "Bhakti-yoga",
            sanskrit: "bhakti-yoga",
            description: "Ścieżka oddania i miłości do Boga.",
            verseCount: 20,
            readingTime: "8 min"
        },
        {
            number: 13,
            title: "Natura, ciesząca się i świadomość",
            sanskrit: "kṣetra-kṣetrajña-vibhāga-yoga",
            description: "Różnica między ciałem, duszą i Naduszą.",
            verseCount: 35,
            readingTime: "15 min"
        },
        {
            number: 14,
            title: "Trzy guna natury materialnej",
            sanskrit: "guṇa-traya-vibhāga-yoga",
            description: "Wyjaśnienie trzech guna i ich wpływu na żywą istotę.",
            verseCount: 27,
            readingTime: "11 min"
        },
        {
            number: 15,
            title: "Yoga Najwyższej Osoby",
            sanskrit: "puruṣottama-yoga",
            description: "Kṛṣṇa jako Najwyższa Osoba Boga.",
            verseCount: 20,
            readingTime: "8 min"
        },
        {
            number: 16,
            title: "Boska i demoniczna natura",
            sanskrit: "daivāsura-sampad-vibhāga-yoga",
            description: "Różnica między boską i demoniczną naturą.",
            verseCount: 24,
            readingTime: "10 min"
        },
        {
            number: 17,
            title: "Podziały wiary",
            sanskrit: "śraddhā-traya-vibhāga-yoga",
            description: "Trzy rodzaje wiary odpowiadające trzem gunom.",
            verseCount: 28,
            readingTime: "12 min"
        },
        {
            number: 18,
            title: "Doskonałość wyrzeczenia",
            sanskrit: "mokṣa-sannyāsa-yoga",
            description: "Ostateczne podsumowanie nauk Bhagavad-gīty.",
            verseCount: 78,
            readingTime: "32 min"
        }
    ]
};

// Sample verse data for demonstration
const sampleVerses = {
    1: {
        1: {
            sanskrit: "dhṛtarāṣṭra uvāca\ndharma-kṣetre kuru-kṣetre\nsamavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāś caiva\nkim akurvata sañjaya",
            transliteration: "dhṛtarāṣṭra uvāca\ndharma-kṣetre kuru-kṣetre\nsamavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāś caiva\nkim akurvata sañjaya",
            wordForWord: "dhṛtarāṣṭraḥ uvāca — Dhṛtarāṣṭra powiedział; dharma-kṣetre — na miejscu pielgrzymek; kuru-kṣetre — w krainie zwanej Kurukṣetra; samavetāḥ — zebrani; yuyutsavaḥ — pragnący walczyć; māmakāḥ — moi synowie; pāṇḍavāḥ — synowie Pāṇḍu; ca — i; eva — z pewnością; kim — co; akurvata — czynili; sañjaya — o Sañjayo.",
            translation: "Dhṛtarāṣṭra powiedział: O Sañjayo, po zebraniu się na świętym miejscu pielgrzymek w Kurukṣetrze, czego pragnęli moi synowie i synowie Pāṇḍu? Czy rzeczywiście chcieli walczyć?",
            commentary: "Bhagavad-gītā jest powszechnie uznawana za sedno wszystkich védskich tekstów. Jej istotę stanowi wiedza o świadomości Kṛṣṇy i można ją zrozumieć dzięki pięciu podstawowym punktom..."
        }
    }
};

// Application state
let currentChapter = 1;
let currentVerse = 1;
let currentSection = null; // null for chapters, or section id for preliminary sections
let expandedChapters = new Set();

// DOM elements
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeBtn = document.getElementById('closeBtn');
const chaptersList = document.getElementById('chaptersList');
const verseSelect = document.getElementById('verseSelect');

// Chapter and verse display elements
const currentChapterSpan = document.getElementById('currentChapter');
const chapterSanskrit = document.getElementById('chapterSanskrit');
const chapterTitle = document.getElementById('chapterTitle');
const chapterDescription = document.getElementById('chapterDescription');
const readingTime = document.getElementById('readingTime');
const verseCount = document.getElementById('verseCount');

// Verse content elements
const currentVerseNumber = document.getElementById('currentVerseNumber');
const sanskritText = document.getElementById('sanskritText');
const transliterationText = document.getElementById('transliterationText');
const translationText = document.getElementById('translationText');

// Navigation elements
const prevChapterBtn = document.getElementById('prevChapterBtn');
const nextChapterBtn = document.getElementById('nextChapterBtn');
const prevVerseBtn = document.getElementById('prevVerseBtn');
const nextVerseBtn = document.getElementById('nextVerseBtn');
const navCurrentVerse = document.getElementById('navCurrentVerse');
const navTotalVerses = document.getElementById('navTotalVerses');

// Display options
const showTransliteration = document.getElementById('showTransliteration');
const showWordForWord = document.getElementById('showWordForWord');
const transliterationSection = document.getElementById('transliterationSection');
const wordForWordSection = document.getElementById('wordForWordSection');

// Initialize application
function init() {
    setupEventListeners();
    populateChaptersList();
    populateVerseSelector();
    updateDisplay();
}

// Event listeners
function setupEventListeners() {
    // Menu toggle
    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Navigation buttons
    prevChapterBtn.addEventListener('click', () => navigateChapter(-1));
    nextChapterBtn.addEventListener('click', () => navigateChapter(1));
    prevVerseBtn.addEventListener('click', () => navigateVerse(-1));
    nextVerseBtn.addEventListener('click', () => navigateVerse(1));

    // Verse selector
    verseSelect.addEventListener('change', (e) => {
        currentVerse = parseInt(e.target.value);
        updateDisplay();
    });

    // Display options
    showTransliteration.addEventListener('change', toggleTransliteration);
    showWordForWord.addEventListener('change', toggleWordForWord);

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

// Sidebar functions
function toggleSidebar() {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('active');
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
}

// Populate chapters list
function populateChaptersList() {
    chaptersList.innerHTML = '';
    
    // Add preliminary sections
    bhagavadGita.preliminarySections.forEach(section => {
        const sectionItem = document.createElement('div');
        sectionItem.className = 'chapter-item';
        
        const sectionBtn = document.createElement('button');
        sectionBtn.className = `chapter-btn ${currentSection === section.id ? 'active' : ''}`;
        sectionBtn.innerHTML = `
            <div class="chapter-content">
                <div class="chapter-meta">
                    <span class="chapter-number">${section.title}</span>
                </div>
                <div class="chapter-name">Tekst wstępny</div>
            </div>
        `;
        
        sectionBtn.addEventListener('click', () => {
            selectPreliminarySection(section.id);
        });
        
        sectionItem.appendChild(sectionBtn);
        chaptersList.appendChild(sectionItem);
    });
    
    // Add separator
    const separator = document.createElement('div');
    separator.style.cssText = 'height: 1px; background: #fed7aa; margin: 0.5rem 0.75rem;';
    chaptersList.appendChild(separator);
    
    bhagavadGita.chapters.forEach(chapter => {
        const chapterItem = document.createElement('div');
        chapterItem.className = 'chapter-item';
        
        const chapterBtn = document.createElement('button');
        chapterBtn.className = `chapter-btn ${chapter.number === currentChapter ? 'active' : ''}`;
        // Update active state logic
        if (currentSection === null && chapter.number === currentChapter) {
            chapterBtn.className = 'chapter-btn active';
        } else {
            chapterBtn.className = 'chapter-btn';
        }
        chapterBtn.innerHTML = `
            <div class="chapter-content">
                <div class="chapter-meta">
                    <span class="chapter-number">Rozdział ${chapter.number}</span>
                    <span class="verse-count">${chapter.verseCount} wersów</span>
                </div>
                <div class="chapter-name">${chapter.title}</div>
                <div class="chapter-sanskrit">${chapter.sanskrit}</div>
            </div>
            <svg class="chapter-chevron ${expandedChapters.has(chapter.number) ? 'expanded' : ''}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
        `;
        
        chapterBtn.addEventListener('click', () => {
            if (chapter.number === currentChapter) {
                toggleChapterExpansion(chapter.number);
            } else {
                selectChapter(chapter.number);
            }
        });
        
        chapterItem.appendChild(chapterBtn);
        
        // Add verses list
        const versesList = document.createElement('div');
        versesList.className = `verses-list ${expandedChapters.has(chapter.number) ? 'expanded' : ''}`;
        versesList.id = `verses-${chapter.number}`;
        
        // Add first 10 verses
        for (let i = 1; i <= Math.min(10, chapter.verseCount); i++) {
            const verseBtn = document.createElement('button');
            verseBtn.className = `verse-btn ${chapter.number === currentChapter && i === currentVerse ? 'active' : ''}`;
            verseBtn.textContent = `Wers ${i}`;
            verseBtn.addEventListener('click', () => {
                selectChapterAndVerse(chapter.number, i);
            });
            versesList.appendChild(verseBtn);
        }
        
        // Add "more verses" if there are more than 10
        if (chapter.verseCount > 10) {
            const moreVerses = document.createElement('div');
            moreVerses.className = 'more-verses';
            moreVerses.textContent = `... i ${chapter.verseCount - 10} więcej`;
            versesList.appendChild(moreVerses);
        }
        
        chapterItem.appendChild(versesList);
        chaptersList.appendChild(chapterItem);
    });
}

// Chapter navigation
function toggleChapterExpansion(chapterNumber) {
    if (expandedChapters.has(chapterNumber)) {
        expandedChapters.delete(chapterNumber);
    } else {
        expandedChapters.add(chapterNumber);
    }
    populateChaptersList();
}

function selectChapter(chapterNumber) {
    currentChapter = chapterNumber;
    currentVerse = 1;
    currentSection = null; // Clear section when selecting chapter
    updateDisplay();
    populateChaptersList();
    populateVerseSelector();
    closeSidebar();
}

function selectChapterAndVerse(chapterNumber, verseNumber) {
    currentChapter = chapterNumber;
    currentVerse = verseNumber;
    currentSection = null; // Clear section when selecting chapter and verse
    updateDisplay();
    populateChaptersList();
    populateVerseSelector();
    closeSidebar();
}

// Preliminary section selection
function selectPreliminarySection(sectionId) {
    currentSection = sectionId;
    currentChapter = 1; // Keep chapter 1 as fallback
    currentVerse = 1;
    updateDisplay();
    populateChaptersList();
    populateVerseSelector();
    closeSidebar();
}

// Verse selector
function populateVerseSelector() {
    const chapter = bhagavadGita.chapters.find(ch => ch.number === currentChapter);
    if (!chapter) return;
    
    verseSelect.innerHTML = '';
    for (let i = 1; i <= chapter.verseCount; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Wers ${i}`;
        if (i === currentVerse) {
            option.selected = true;
        }
        verseSelect.appendChild(option);
    }
}

// Navigation functions
function navigateChapter(direction) {
    // Handle preliminary sections navigation
    if (currentSection) {
        const currentSectionIndex = bhagavadGita.preliminarySections.findIndex(s => s.id === currentSection);
        
        if (direction === -1) {
            // Go to previous section
            if (currentSectionIndex > 0) {
                selectPreliminarySection(bhagavadGita.preliminarySections[currentSectionIndex - 1].id);
            }
        } else {
            // Go to next section or chapter 1
            if (currentSectionIndex < bhagavadGita.preliminarySections.length - 1) {
                selectPreliminarySection(bhagavadGita.preliminarySections[currentSectionIndex + 1].id);
            } else {
                selectChapter(1); // Go to chapter 1
            }
        }
        return;
    }
    
    // Handle chapter navigation
    const newChapter = currentChapter + direction;
    if (direction === -1 && newChapter === 0) {
        // Go to last preliminary section
        const lastSection = bhagavadGita.preliminarySections[bhagavadGita.preliminarySections.length - 1];
        selectPreliminarySection(lastSection.id);
    } else if (newChapter >= 1 && newChapter <= bhagavadGita.chapters.length) {
        currentChapter = newChapter;
        currentVerse = 1;
        currentSection = null;
        updateDisplay();
        populateChaptersList();
        populateVerseSelector();
    }
}

function navigateVerse(direction) {
    // Don't navigate verses in preliminary sections
    if (currentSection) {
        return;
    }
    
    const chapter = bhagavadGita.chapters.find(ch => ch.number === currentChapter);
    if (!chapter) return;
    
    const newVerse = currentVerse + direction;
    if (newVerse >= 1 && newVerse <= chapter.verseCount) {
        currentVerse = newVerse;
        updateDisplay();
        populateChaptersList();
        populateVerseSelector();
    }
}

// Display functions
function updateDisplay() {
    // If we're viewing a preliminary section
    if (currentSection) {
        const section = bhagavadGita.preliminarySections.find(s => s.id === currentSection);
        if (section) {
            updatePreliminaryDisplay(section);
            return;
        }
    }
    
    const chapter = bhagavadGita.chapters.find(ch => ch.number === currentChapter);
    if (!chapter) return;
    
    // Update chapter info
    currentChapterSpan.textContent = chapter.number;
    chapterSanskrit.textContent = chapter.sanskrit;
    chapterTitle.textContent = chapter.title;
    chapterDescription.textContent = chapter.description;
    readingTime.textContent = chapter.readingTime;
    verseCount.textContent = chapter.verseCount;
    
    // Update verse info
    currentVerseNumber.textContent = currentVerse;
    navCurrentVerse.textContent = currentVerse;
    navTotalVerses.textContent = chapter.verseCount;
    
    // Update verse content (using sample data for now)
    const verseData = sampleVerses[currentChapter]?.[currentVerse];
    if (verseData) {
        sanskritText.innerHTML = verseData.sanskrit.replace(/\n/g, '<br>');
        transliterationText.innerHTML = verseData.transliteration.replace(/\n/g, '<br>');
        translationText.textContent = verseData.translation;
        
        // Update word for word
        const wordForWordText = document.querySelector('.word-for-word-text');
        if (wordForWordText) {
            const words = verseData.wordForWord.split('; ');
            wordForWordText.innerHTML = words.map(word => 
                `<span class="word-item">${word}${word.endsWith('.') ? '' : ';'}</span>`
            ).join(' ');
        }
        
        // Update commentary
        const commentaryText = document.querySelector('.commentary-text');
        if (commentaryText) {
            commentaryText.textContent = verseData.commentary;
        }
    }
    
    // Update navigation button states
    updateNavigationButtons();
}

function updatePreliminaryDisplay(section) {
    // Update chapter info to show preliminary section
    currentChapterSpan.textContent = section.title;
    chapterSanskrit.textContent = "";
    chapterTitle.textContent = section.title;
    chapterDescription.textContent = "Tekst wstępny do Bhagavad-gīty";
    readingTime.textContent = "5 min";
    verseCount.textContent = "1";
    
    // Update verse info
    currentVerseNumber.textContent = "1";
    navCurrentVerse.textContent = "1";
    navTotalVerses.textContent = "1";
    
    // Hide Sanskrit and transliteration for preliminary sections
    sanskritText.innerHTML = "";
    transliterationText.innerHTML = "";
    translationText.textContent = section.content;
    
    // Hide word for word section
    const wordForWordText = document.querySelector('.word-for-word-text');
    if (wordForWordText) {
        wordForWordText.innerHTML = "";
    }
    
    // Update commentary with note about source
    const commentaryText = document.querySelector('.commentary-text');
    if (commentaryText) {
        commentaryText.innerHTML = `<p>Treść ${section.title.toLowerCase()} została pobrana z oficjalnej strony Vedabase: <a href="https://vedabase.io/pl/library/bg/" target="_blank" style="color: #ea580c; text-decoration: underline;">https://vedabase.io/pl/library/bg/</a></p><p>Pełna treść zostanie załadowana w przyszłych aktualizacjach aplikacji.</p>`;
    }
    
    // Update navigation button states for preliminary sections
    updatePreliminaryNavigationButtons();
}

function updatePreliminaryNavigationButtons() {
    const currentSectionIndex = bhagavadGita.preliminarySections.findIndex(s => s.id === currentSection);
    
    // Chapter navigation
    prevChapterBtn.disabled = currentSectionIndex === 0;
    nextChapterBtn.disabled = false; // Can always go to next (either next section or chapter 1)
    
    // Verse navigation (disabled for preliminary sections)
    prevVerseBtn.disabled = true;
    nextVerseBtn.disabled = true;
    
    // Update button opacity
    prevChapterBtn.style.opacity = prevChapterBtn.disabled ? '0.5' : '1';
    nextChapterBtn.style.opacity = '1';
    prevVerseBtn.style.opacity = '0.5';
    nextVerseBtn.style.opacity = '0.5';
}

function updateNavigationButtons() {
    const chapter = bhagavadGita.chapters.find(ch => ch.number === currentChapter);
    if (!chapter) return;
    
    // Chapter navigation
    prevChapterBtn.disabled = currentChapter === 1;
    nextChapterBtn.disabled = currentChapter === bhagavadGita.chapters.length;
    
    // Verse navigation
    prevVerseBtn.disabled = currentVerse === 1;
    nextVerseBtn.disabled = currentVerse === chapter.verseCount;
    
    // Update button opacity based on disabled state
    prevChapterBtn.style.opacity = prevChapterBtn.disabled ? '0.5' : '1';
    nextChapterBtn.style.opacity = nextChapterBtn.disabled ? '0.5' : '1';
    prevVerseBtn.style.opacity = prevVerseBtn.disabled ? '0.5' : '1';
    nextVerseBtn.style.opacity = nextVerseBtn.disabled ? '0.5' : '1';
}

// Display options
function toggleTransliteration() {
    if (showTransliteration.checked) {
        transliterationSection.style.display = 'block';
    } else {
        transliterationSection.style.display = 'none';
    }
}

function toggleWordForWord() {
    if (showWordForWord.checked) {
        wordForWordSection.style.display = 'block';
    } else {
        wordForWordSection.style.display = 'none';
    }
}

// Keyboard navigation
function handleKeyboardNavigation(e) {
    // Don't handle keyboard events if user is typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }
    
    switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            navigateVerse(-1);
            break;
        case 'ArrowRight':
            e.preventDefault();
            navigateVerse(1);
            break;
        case 'ArrowUp':
            e.preventDefault();
            navigateChapter(-1);
            break;
        case 'ArrowDown':
            e.preventDefault();
            navigateChapter(1);
            break;
        case 'Escape':
            closeSidebar();
            break;
    }
}

// Close sidebar when clicking outside on desktop
document.addEventListener('click', (e) => {
    if (window.innerWidth >= 1024) return; // Only for mobile
    
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target) && sidebar.classList.contains('open')) {
        closeSidebar();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        closeSidebar();
    }
});

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);