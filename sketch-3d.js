// Semantic Biome (3D Version)
let threeScene, threeCamera, threeRenderer, threeFont, wordCountEl, totalScoreEl, avgDepthEl, fpsEl, cameraModeEl, targetFpsEl, wordListTitle, wordListContent;

// Enhanced Word Generation System
// ============================================

// Comprehensive English word dictionary - consolidated from all sources
const COMPREHENSIVE_WORD_DICTIONARY = [
  // 2-letter words
  "am", "an", "as", "at", "be", "by", "do", "go", "he", "if", "in", "is", "it", "me", "my", "no", "of", "on", "or", "so", "to", "up", "us", "we",
  
  // 3-letter words
  "all", "and", "any", "are", "art", "bad", "big", "boy", "but", "can", "car", "cat", "day", "did", "dog", "eat", "end", "eye", "far", "few", "for", "fun", "get", "god", "got", "had", "has", "hat", "her", "him", "his", "hot", "how", "ice", "job", "key", "law", "let", "low", "man", "may", "new", "not", "now", "old", "one", "our", "out", "own", "pen", "put", "ran", "red", "run", "saw", "say", "sea", "see", "she", "sit", "sky", "sun", "ten", "the", "too", "top", "try", "two", "use", "war", "was", "way", "who", "why", "win", "yes", "yet", "you",
  
  // 4-letter words
  "able", "back", "ball", "base", "bear", "beat", "been", "best", "blue", "boat", "body", "book", "both", "came", "call", "care", "case", "city", "come", "cool", "dark", "data", "date", "dear", "deep", "does", "done", "door", "down", "draw", "drop", "each", "easy", "even", "ever", "face", "fact", "fall", "fast", "feel", "feet", "file", "fill", "find", "fine", "fire", "fish", "five", "food", "foot", "form", "four", "free", "from", "full", "game", "give", "glad", "gold", "gone", "good", "gray", "grew", "grow", "hair", "half", "hand", "hard", "have", "head", "hear", "heat", "help", "here", "high", "hold", "home", "hope", "hour", "idea", "into", "join", "jump", "just", "keep", "kind", "know", "land", "last", "late", "left", "life", "line", "live", "long", "look", "lose", "love", "made", "make", "many", "mark", "mean", "meet", "mind", "miss", "moon", "more", "most", "move", "much", "must", "name", "near", "need", "next", "nice", "nine", "open", "over", "page", "part", "plan", "play", "poor", "push", "read", "real", "rest", "rich", "ride", "road", "rock", "room", "said", "same", "seat", "seem", "self", "send", "ship", "show", "side", "size", "snow", "some", "song", "soon", "stop", "such", "sure", "take", "talk", "tell", "than", "that", "them", "then", "they", "this", "thus", "time", "told", "took", "tree", "true", "turn", "very", "walk", "want", "warm", "wave", "ways", "week", "well", "went", "were", "what", "when", "will", "wind", "wish", "with", "wood", "word", "work", "year", "your",
  
  // 5-letter words
  "about", "above", "after", "again", "among", "anger", "angry", "apple", "asked", "basic", "beach", "began", "begin", "being", "below", "birth", "black", "blood", "board", "bring", "broad", "brown", "build", "built", "carry", "catch", "cause", "chair", "chart", "check", "child", "china", "chose", "civil", "class", "clean", "clear", "click", "clock", "close", "cloud", "color", "could", "count", "court", "cover", "craft", "crazy", "cream", "cross", "crowd", "cycle", "daily", "dance", "death", "depth", "doing", "doubt", "dozen", "drama", "drawn", "dream", "dress", "drink", "drive", "drove", "dying", "eager", "early", "earth", "eight", "empty", "enemy", "enjoy", "enter", "entry", "equal", "error", "event", "every", "exact", "exist", "extra", "faith", "false", "fault", "field", "fifth", "fifty", "fight", "final", "first", "fixed", "flash", "floor", "focus", "force", "forth", "forty", "found", "frame", "frank", "fresh", "front", "fruit", "fully", "funny", "glass", "grace", "grade", "grand", "grant", "grass", "great", "green", "gross", "group", "grown", "guard", "guess", "guide", "happy", "heart", "heavy", "horse", "hotel", "house", "human", "hurry", "image", "index", "inner", "input", "issue", "japan", "joint", "judge", "known", "label", "large", "laser", "later", "laugh", "layer", "learn", "least", "leave", "legal", "level", "light", "limit", "links", "lived", "local", "loose", "lower", "lucky", "lunch", "lying", "magic", "major", "maker", "march", "match", "maybe", "mayor", "meant", "media", "metal", "might", "minor", "minus", "mixed", "model", "money", "month", "moral", "motor", "mount", "mouse", "mouth", "moved", "movie", "music", "needs", "never", "newer", "night", "noise", "north", "noted", "novel", "nurse", "occur", "ocean", "offer", "often", "order", "other", "ought", "owner", "paint", "panel", "paper", "party", "peace", "phase", "phone", "photo", "piano", "piece", "pilot", "pitch", "place", "plain", "plane", "plant", "plate", "point", "pound", "power", "press", "price", "pride", "prime", "print", "prior", "prize", "proof", "proud", "prove", "queen", "quick", "quiet", "quite", "radio", "raise", "range", "rapid", "ratio", "reach", "ready", "realm", "rebel", "refer", "relax", "repay", "reply", "right", "rigid", "river", "robot", "roger", "roman", "rough", "round", "route", "royal", "rural", "scale", "scene", "scope", "score", "sense", "serve", "setup", "seven", "shade", "shake", "shall", "shame", "shape", "share", "sharp", "sheet", "shelf", "shell", "shift", "shine", "shirt", "shock", "shoot", "short", "shown", "sides", "sight", "silly", "since", "sixth", "sixty", "sized", "skill", "sleep", "slide", "small", "smart", "smile", "smith", "smoke", "snake", "solid", "solve", "sorry", "sound", "south", "space", "spare", "speak", "speed", "spend", "spent", "split", "spoke", "sport", "staff", "stage", "stake", "stand", "start", "state", "steam", "steel", "steep", "steer", "stick", "still", "stock", "stone", "stood", "store", "storm", "story", "strip", "stuck", "study", "stuff", "style", "sugar", "suite", "super", "sweet", "swift", "swing", "sword", "table", "taken", "taste", "taxes", "teach", "teeth", "texas", "thank", "theft", "their", "theme", "there", "these", "thick", "thing", "think", "third", "those", "three", "threw", "throw", "thumb", "tight", "timer", "title", "today", "topic", "total", "touch", "tough", "tower", "track", "trade", "train", "treat", "trend", "trial", "tribe", "trick", "tried", "tries", "truck", "truly", "trust", "truth", "twice", "twist", "uncle", "under", "undue", "union", "unity", "until", "upper", "upset", "urban", "usage", "usual", "valid", "value", "video", "virus", "visit", "vital", "vocal", "voice", "waste", "watch", "water", "wheel", "where", "which", "while", "white", "whole", "whose", "woman", "women", "world", "worry", "worse", "worst", "worth", "would", "write", "wrong", "wrote", "young", "youth",
  
  // Poetry and creative words
  "creative", "design", "poem", "poetry", "verse", "rhyme", "rhythm", "metaphor", "image", 
  "life", "dream", "flow", "nature", "mind", "idea", "form", "light", "dark", "space", "echo", 
  "voice", "sound", "color", "shape", "move", "pulse", "wave", "energy", "being", "soul", 
  "earth", "water", "fire", "void", "chaos", "order", "beauty", "grace", "harmony", "melody",
  
  // Additional anagram words for better formation
  "stale", "steal", "tales", "least", "paste", "pates", "spate", "tapes", "rates", "stare", 
  "tears", "tares", "stair", "reign", "stole", "shot", "host", "pots", "spot", "stop", "tops", 
  "cart", "date", "hear", "hare", "heart", "leap", "pale", "peal", "plea", "mean", "name", 
  "mane", "earn", "near", "east", "eats", "seat", "teas", "heat", "hate", "hart", "mail", 
  "vail", "vial", "pain", "alto", "mast", "snap", "span", "pant", "rant", "tarn", "ants", 
  "like", "evil", "live", "veil", "vile", "lime", "mile", "mine", "mire", "site", "ties", 
  "tide", "tied", "love", "vole", "more", "rome", "rent", "tern", "poets", "fire", "fowl", 
  "wolf", "taped", "pated", "adept", "great", "grate", "hats", "shat", "saint", "stain", 
  "satin", "born", "lord", "wire", "rose", "sore", "lapse", "pales", "leaps", "range", 
  "anger", "soft", "thing", "will", "limp", "walk", "work", "time", "item", "mite", "must", 
  "word", "push", "this", "hits", "that", "tight", "might", "right", "light", "night"
];

// Advanced letter permutation and combination generator
class EnhancedWordGenerator {
  constructor() {
    this.dictionary = new Set(COMPREHENSIVE_WORD_DICTIONARY.map(word => word.toLowerCase()));
    this.cache = new Map(); // Cache for performance
    console.log(`📚 Initialized word dictionary with ${this.dictionary.size} words`);
  }

  // Generate all possible words from a set of letters
  generatePossibleWords(letters, minLength = 2, maxLength = 5) {
    if (!letters || letters.length < minLength) return [];
    
    const cacheKey = `${letters}-${minLength}-${maxLength}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const letterArray = letters.toLowerCase().split('');
    const foundWords = new Set();
    
    // Generate all permutations and check against dictionary
    this.generatePermutations(letterArray, minLength, maxLength, foundWords);
    
    // Generate all combinations (subsets) and check their permutations
    this.generateCombinations(letterArray, minLength, maxLength, foundWords);
    
    // Convert to sorted array (longer words first)
    const result = Array.from(foundWords).sort((a, b) => b.length - a.length);
    
    // Cache the result
    this.cache.set(cacheKey, result);
    
    return result;
  }

  // Generate all permutations of given length from letters
  generatePermutations(letters, minLength, maxLength, foundWords) {
    const used = new Array(letters.length).fill(false);
    const currentWord = [];
    
    const backtrack = () => {
      if (currentWord.length >= minLength && currentWord.length <= maxLength) {
        const word = currentWord.join('');
        if (this.dictionary.has(word)) {
          foundWords.add(word);
        }
      }
      
      if (currentWord.length >= maxLength) return;
      
      for (let i = 0; i < letters.length; i++) {
        if (!used[i]) {
          used[i] = true;
          currentWord.push(letters[i]);
          backtrack();
          currentWord.pop();
          used[i] = false;
        }
      }
    };
    
    backtrack();
  }

  // Generate combinations (subsets) and check their permutations
  generateCombinations(letters, minLength, maxLength, foundWords) {
    const n = letters.length;
    
    // Generate all possible subsets using bit manipulation
    for (let mask = 1; mask < (1 << n); mask++) {
      const subset = [];
      for (let i = 0; i < n; i++) {
        if (mask & (1 << i)) {
          subset.push(letters[i]);
        }
      }
      
      if (subset.length >= minLength && subset.length <= maxLength) {
        // Generate all permutations of this subset
        this.generatePermutationsOfArray(subset, foundWords);
      }
    }
  }

  // Generate all permutations of a specific array
  generatePermutationsOfArray(array, foundWords) {
    if (array.length === 0) return;
    
    const permute = (arr, start = 0) => {
      if (start === arr.length) {
        const word = arr.join('');
        if (this.dictionary.has(word)) {
          foundWords.add(word);
        }
        return;
      }
      
      for (let i = start; i < arr.length; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap
        permute(arr, start + 1);
        [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap back
      }
    };
    
    permute([...array]); // Create a copy to avoid modifying the original
  }

  // Special method to force 5-letter word generation
  generate5LetterWords(letters) {
    return this.generatePossibleWords(letters, 5, 5);
  }

  // Method to generate words prioritizing longer lengths
  generateLongestWords(letters, priorityLength = 5) {
    const allWords = this.generatePossibleWords(letters, 2, 8);
    
    // Prioritize words of the desired length
    const priorityWords = allWords.filter(word => word.length === priorityLength);
    const otherWords = allWords.filter(word => word.length !== priorityLength);
    
    return [...priorityWords, ...otherWords];
  }

  // Check if a word exists in our dictionary
  isValidWord(word) {
    return this.dictionary.has(word.toLowerCase());
  }

  // Get word suggestions based on partial letters
  getSuggestions(partialLetters, targetLength = null) {
    const letters = partialLetters.toLowerCase();
    const suggestions = [];
    
    for (const word of this.dictionary) {
      if (targetLength && word.length !== targetLength) continue;
      
      // Check if the word can be formed with available letters
      if (this.canFormWord(word, letters)) {
        suggestions.push(word);
      }
    }
    
    return suggestions.sort((a, b) => b.length - a.length).slice(0, 20);
  }

  // Check if a word can be formed from available letters
  canFormWord(word, availableLetters) {
    const wordLetters = {};
    const available = {};
    
    // Count letters in the word
    for (const letter of word) {
      wordLetters[letter] = (wordLetters[letter] || 0) + 1;
    }
    
    // Count available letters
    for (const letter of availableLetters) {
      available[letter] = (available[letter] || 0) + 1;
    }
    
    // Check if we have enough of each letter
    for (const [letter, count] of Object.entries(wordLetters)) {
      if (!available[letter] || available[letter] < count) {
        return false;
      }
    }
    
    return true;
  }
}

// Global enhanced word generator instance
const enhancedWordGenerator = new EnhancedWordGenerator();

// Test the word generator to make sure it works
console.log("Testing enhanced word generator...");
console.log("Testing 'cat':", enhancedWordGenerator.isValidWord("cat"));
console.log("Testing 'dog':", enhancedWordGenerator.isValidWord("dog"));
console.log("Testing 'art':", enhancedWordGenerator.isValidWord("art"));
console.log("Generating words from 'cat':", enhancedWordGenerator.generatePossibleWords("cat"));
console.log("Generating words from 'art':", enhancedWordGenerator.generatePossibleWords("art"));

// NEW: Variables for letter flow visualization
let letterOrgData = []; // Array to store letter organism data
let maxLetters = 400;   // Maximum number of letters to display
let letterIndex = 0;    // Index for cycling through CONFIG.types
let lastDictionaryCheckTime = {};
let wordNet = null; // Added to track cooldowns for dictionary checks per script
// Configuration parameters for the system
const CONFIG = {
  maxOrganisms: 100, // Increased from 80 for more populate feeling in larger space
  initialOrganisms: 25, // Increased from 20 for more initial activity
  connectionDistance: 300, // Increased from 250 for easier word formation across larger space
  audioEnabled: true, // Enable audio
  postFx: true, // Post-processing effects (performance intensive)

  // Physical parameters - Enhanced for maximum spatial freedom
  baseSize: { min: 8, max: 35 },
  baseSpeed: { min: 2.0, max: 6.0 }, // Further increased speed range for more energetic movement
  baseMass: { min: 1, max: 9 },
  baseLifespan: { min: 600, max: 1200 }, // Increased lifespan for more time in expanded space
  cohesionDistance: 250, // Further increased for more spacious grouping
  separationDistance: 120, // Further increased for more personal space
  alignmentDistance: 150, // Further increased for wider influence area
  maxForce: 0.3, // Further increased for more dynamic movement
  
  // Word and Poetry Settings
  wordSettings: {
    minClusterSize: 2, // Allow just 2 characters to form a word
    maxClusterSize: 8, // Increased to allow longer words like "about", "world", etc.
    clusterFormationRadiusFactor: 50.0, // Drastically increased to force clusters to form
    clusterStabilityTime: 100,    // Reduced to 100ms for faster word detection
    apiCooldownDictionary: 50, // Greatly reduced for more frequent checks
    apiCooldownTranslation: 50, // Greatly reduced for more frequent checks
    maxCollectedWords: 100,        // Max words in Poet's Palette
    wordDisplayTime3D: 15000,     // ms to display a confirmed word in 3D
    forceClusterFormation: true,  // Force clusters to form even if far apart
    ignoreAPI: true,              // Skip API calls and use only local dictionary
    
    // Focus/Resonance Tool Settings
    focusResonanceRadius: 300,    // Further increased radius for even wider influence
    focusResonanceStrength: 0.03, // Further reduced for even gentler, more free-willed movement
    focusResonanceDamping: 0.99,  // Even less damping for maximum freedom
    focusResonanceParticles: 20,  // More particles for richer visual effect in larger space
    focusResonancePulseSpeed: 0.04, // Slightly slower pulsing for more meditative feel
    clusterGlowColor: 0xFFFF00,    // Hex color for cluster glow
    clusterBreathingRate: 0.05,    // Rate of breathing for cluster glow
  },
  // END NEW

  // Font configuration for different scripts
  fontMappings: {
    default: { family: "helvetiker_regular, Arial, 'Noto Sans'", weight: "normal", style: "normal" }, // For English, Spanish, French, Portuguese, German, Indonesian/Malay
    arabic: { family: "'Noto Sans Arabic', 'Vazirmatn', 'Arabic Typesetting', Times New Roman", weight: "normal", style: "normal" }, // For Arabic, Persian
    eastAsian: { family: "'Noto Sans CJK SC', 'SimSun', 'MS Gothic'", weight: "normal", style: "normal" }, // For Mandarin Chinese (SC for Simplified)
    indic: { family: "'Noto Sans Devanagari', Arial", weight: "normal", style: "normal" }, // For Hindi
    cyrillic: { family: "'Noto Sans', Arial, Times New Roman", weight: "normal", style: "normal" } // For Russian
    // All other entries like greek, armenian, georgian, hebrew, southeastAsian should be removed or commented out.
  },
  
  // Script to font mapping
  scriptMap: {
    // Explicitly map all English letters to "default" to ensure proper categorization
    "A": "default", "B": "default", "C": "default", "D": "default", "E": "default", "F": "default", "G": "default", "H": "default", "I": "default", "J": "default", "K": "default", "L": "default", "M": "default", "N": "default", "O": "default", "P": "default", "Q": "default", "R": "default", "S": "default", "T": "default", "U": "default", "V": "default", "W": "default", "X": "default", "Y": "default", "Z": "default",
    "a": "default", "b": "default", "c": "default", "d": "default", "e": "default", "f": "default", "g": "default", "h": "default", "i": "default", "j": "default", "k": "default", "l": "default", "m": "default", "n": "default", "o": "default", "p": "default", "q": "default", "r": "default", "s": "default", "t": "default", "u": "default", "v": "default", "w": "default", "x": "default", "y": "default", "z": "default",
    
    // Latin-based characters for English, Spanish, French, Portuguese, German, Indonesian/Malay
    // (Many will be caught by the default Unicode block checks in getScriptCategory,
    // but explicit mapping for common accented chars can be helpful)
    "À": "default", "Á": "default", "Â": "default", "Ã": "default", "Ä": "default", "Å": "default", "Æ": "default", "Ç": "default",
    "È": "default", "É": "default", "Ê": "default", "Ë": "default", "Ì": "default", "Í": "default", "Î": "default", "Ï": "default",
    "Ð": "default", "Ñ": "default", "Ò": "default", "Ó": "default", "Ô": "default", "Õ": "default", "Ö": "default", "Ø": "default",
    "Ù": "default", "Ú": "default", "Û": "default", "Ü": "default", "Ý": "default", "Þ": "default", "ß": "default",
    "à": "default", "á": "default", "â": "default", "ã": "default", "ä": "default", "å": "default", "æ": "default", "ç": "default",
    "è": "default", "é": "default", "ê": "default", "ë": "default", "ì": "default", "í": "default", "î": "default", "ï": "default",
    "ð": "default", "ñ": "default", "ò": "default", "ó": "default", "ô": "default", "õ": "default", "ö": "default", "ø": "default",
    "ù": "default", "ú": "default", "û": "default", "ü": "default", "ý": "default", "þ": "default", "ÿ": "default",
    "Œ": "default", "œ": "default", "Š": "default", "š": "default", "Ÿ": "default",

    // Arabic / Persian
    "ا": "arabic", "ب": "arabic", "ت": "arabic", "ث": "arabic", "ج": "arabic", "ح": "arabic", "خ": "arabic",
    "د": "arabic", "ذ": "arabic", "ر": "arabic", "ز": "arabic", "س": "arabic", "ش": "arabic", "ص": "arabic",
    "ض": "arabic", "ط": "arabic", "ظ": "arabic", "ع": "arabic", "غ": "arabic", "ف": "arabic", "ق": "arabic",
    "ك": "arabic", "ل": "arabic", "م": "arabic", "ن": "arabic", "ه": "arabic", "و": "arabic", "ي": "arabic",
    "ء": "arabic", "آ": "arabic", "أ": "arabic", "ؤ": "arabic", "إ": "arabic", "ئ": "arabic", "ة": "arabic", "ى": "arabic",
    "پ": "arabic", "چ": "arabic", "ژ": "arabic", "گ": "arabic", // Persian specific

    // Mandarin Chinese (Simplified) - Add more common characters as needed from the types array later
    "你": "eastAsian", "好": "eastAsian", "谢": "eastAsian", "不": "eastAsian", "我": "eastAsian", "他": "eastAsian", "她": "eastAsian",
    "们": "eastAsian", "是": "eastAsian", "的": "eastAsian", "中": "eastAsian", "国": "eastAsian", "人": "eastAsian",
    "日": "eastAsian", "月": "eastAsian", "水": "eastAsian", "火": "eastAsian", "木": "eastAsian", "金": "eastAsian", "土": "eastAsian",
    "爱": "eastAsian", "家": "eastAsian", "学": "eastAsian", "生": "eastAsian", "老": "eastAsian", "师": "eastAsian",

    // Hindi (Devanagari)
    "अ": "indic", "आ": "indic", "इ": "indic", "ई": "indic", "उ": "indic", "ऊ": "indic", "ऋ": "indic",
    "ए": "indic", "ऐ": "indic", "ओ": "indic", "औ": "indic", "अं": "indic", "अः": "indic",
    "क": "indic", "ख": "indic", "ग": "indic", "घ": "indic", "ङ": "indic", "च": "indic", "छ": "indic",
    "ज": "indic", "झ": "indic", "ञ": "indic", "ट": "indic", "ठ": "indic", "ड": "indic", "ढ": "indic",
    "ण": "indic", "त": "indic", "थ": "indic", "द": "indic", "ध": "indic", "न": "indic", "प": "indic",
    "फ": "indic", "ब": "indic", "भ": "indic", "म": "indic", "य": "indic", "र": "indic", "ल": "indic",
    "व": "indic", "श": "indic", "ष": "indic", "स": "indic", "ह": "indic",

    // Russian (Cyrillic)
    "А": "cyrillic", "Б": "cyrillic", "В": "cyrillic", "Г": "cyrillic", "Д": "cyrillic", "Е": "cyrillic", "Ё": "cyrillic",
    "Ж": "cyrillic", "З": "cyrillic", "И": "cyrillic", "Й": "cyrillic", "К": "cyrillic", "Л": "cyrillic", "М": "cyrillic",
    "Н": "cyrillic", "О": "cyrillic", "П": "cyrillic", "Р": "cyrillic", "С": "cyrillic", "Т": "cyrillic", "У": "cyrillic",
    "Ф": "cyrillic", "Х": "cyrillic", "Ц": "cyrillic", "Ч": "cyrillic", "Ш": "cyrillic", "Щ": "cyrillic", "Ъ": "cyrillic",
    "Ы": "cyrillic", "Ь": "cyrillic", "Э": "cyrillic", "Ю": "cyrillic", "Я": "cyrillic",
    "а": "cyrillic", "б": "cyrillic", "в": "cyrillic", "г": "cyrillic", "д": "cyrillic", "е": "cyrillic", "ё": "cyrillic",
    "ж": "cyrillic", "з": "cyrillic", "и": "cyrillic", "й": "cyrillic", "к": "cyrillic", "л": "cyrillic", "м": "cyrillic",
    "н": "cyrillic", "о": "cyrillic", "п": "cyrillic", "р": "cyrillic", "с": "cyrillic", "т": "cyrillic", "у": "cyrillic",
    "ф": "cyrillic", "х": "cyrillic", "ц": "cyrillic", "ч": "cyrillic", "ш": "cyrillic", "щ": "cyrillic", "ъ": "cyrillic",
    "ы": "cyrillic", "ь": "cyrillic", "э": "cyrillic", "ю": "cyrillic", "я": "cyrillic"
    // Ensure other script mappings (Greek, Armenian, Georgian, Hebrew, other East Asian, other Indic, Southeast Asian) are removed or commented out.
  },

  types: [
    // Latin-based: English, Spanish, French, Portuguese, German, Indonesian/Malay
    // Basic Latin (A-Z, a-z, 0-9)
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    // Common Punctuation
    "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",
    // Common Latin Extended characters for Spanish, French, Portuguese, German
    "À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ð", "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "Ù", "Ú", "Û", "Ü", "Ý", "Þ", "ß",
    "à", "á", "â", "ã", "ä", "å", "æ", "ç", "è", "é", "ê", "ë", "ì", "í", "î", "ï", "ð", "ñ", "ò", "ó", "ô", "õ", "ö", "ø", "ù", "ú", "û", "ü", "ý", "þ", "ÿ",
    "Œ", "œ", "Š", "š", "Ÿ", "¿", "¡", "€", "£", "¥",

    // Mandarin Chinese (Simplified - a selection of common characters)
    // For a richer experience, this list should be expanded or dynamically sourced if possible.
    "你", "好", "谢", "不", "客", "气", "我", "他", "她", "们", "是", "的", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "百", "千", "万",
    "人", "日", "月", "水", "火", "木", "金", "土", "中", "国", "爱", "家", "学", "生", "老", "师", "再", "见", "明", "天", "风", "雨", "雪",
    "山", "河", "海", "天", "地", "春", "夏", "秋", "冬", "东", "西", "南", "北", "前", "后", "左", "右", "上", "下", "大", "小", "多", "少",
    "新", "旧", "好", "坏", "美", "丽", "高", "兴", "快", "乐", "时", "间", "世", "界", "梦", "想", "诗", "歌", "书", "画", "字", "文", "语",
    "红", "黄", "蓝", "绿", "白", "黑", "色", "光", "影", "音", "心", "情", "思", "意", "道", "理", "力", "量", "和", "平", "真", "善",
    // Punctuation for Chinese
    "，", "。", "？", "！", "：", "；", "“", "”", "‘", "’", "（", "）", "《", "》", "、",

    // Hindi (Devanagari - Vowels, Consonants, Common Matras, Numerals, Punctuation)
    "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "अं", "अः",
    "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण",
    "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व",
    "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ",
    "०", "१", "२", "३", "४", "५", "६", "७", "८", "९", // Devanagari digits
    "ा", "ि", "ी", "ु", "ू", "ृ", "े", "ै", "ो", "ौ", "्", "ं", "ः", // Common Matras (vowel signs) and Halant
    "।", "॥", "ॐ", // Danda, Double Danda, Om

    // Standard Arabic & Persian (Arabic Alphabet, Perso-Arabic specific, common diacritics, numerals, punctuation)
    "ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", // Standard Arabic
    "ء", "آ", "أ", "ؤ", "إ", "ئ", "ة", "ى", "ٱ", // Variants and Hamzas
    "پ", "چ", "ژ", "گ", // Persian specific letters
    "ک", "ی", // Arabic/Persian common variants for KAF and YEH
    "َ", "ً", "ُ", "ٌ", "ِ", "ٍ", "ْ", "ّ", // Arabic Diacritics
    "ٰ", // Superscript Alef
    "٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", // Eastern Arabic Numerals
    "۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", // Persian Numerals
    "،", "؛", "؟", "۔", // Arabic/Persian Punctuation

    // Russian (Cyrillic Alphabet)
    "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я",
    "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я",

    /* --- All other language blocks below are COMMENTED OUT --- */
    /*
    // Greek - Full Alphabet + Accented
    "Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω",
    "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "ς", "σ", "τ", "υ", "φ", "χ", "ψ", "ω",
    "Ά", "Έ", "Ή", "Ί", "Ό", "Ύ", "Ώ", "ά", "έ", "ή", "ί", "ό", "ύ", "ώ", "ϊ", "ϋ", "ΐ", "ΰ",
    */
    /*
    // Armenian - Full Alphabet + Punctuation
    "Ա", "Բ", "Գ", "Դ", "Ե", "Զ", "Է", "Ը", "Թ", "Ժ", "Ի", "Լ", "Խ", "Ծ", "Կ", "Հ", "Ձ", "Ղ", "Ճ", "Մ", "Յ", "Ն", "Շ", "Ո", "Չ", "Պ", "Ջ", "Ռ", "Ս", "Վ", "Տ", "Ր", "Ց", "Ւ", "Փ", "Ք", "Օ", "Ֆ",
    "ա", "բ", "գ", "դ", "ե", "զ", "է", "ը", "թ", "ժ", "ի", "լ", "խ", "ծ", "կ", "հ", "ձ", "ղ", "ճ", "մ", "յ", "ն", "շ", "ո", "չ", "պ", "ջ", "ռ", "ս", "վ", "տ", "ր", "ց", "ւ", "փ", "ք", "օ", "ֆ",
    "և", "ՙ", "՛", "՜", "՝", "՞", "՟", "՚",
    */
    /*
    // Georgian (Mkhedruli)
    "ა", "ბ", "გ", "დ", "ე", "ვ", "ზ", "თ", "ი", "კ", "ლ", "მ", "ნ", "ო", "პ", "ჟ", "რ", "ს", "ტ", "უ", "ფ", "ქ", "ღ", "ყ", "შ", "ჩ", "ც", "ძ", "წ", "ჭ", "ხ", "ჯ", "ჰ",
    */
    /*
    // Hebrew - Full Alphabet (including final forms)
    "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "ך", "כ", "ל", "ם", "מ", "ן", "נ", "ס", "ע", "ף", "פ", "ץ", "צ", "ק", "ר", "ש", "ת",
    */
    /*
    // Indic scripts (other than Devanagari for Hindi) - e.g. Bengali, Gurmukhi, Gujarati, Odia, Tamil, Telugu, Kannada, Malayalam, Sinhala
    // All these extensive blocks should be commented out.
    */
    /*
    // Other scripts like Syriac, Coptic, Ethiopic, Cherokee, Canadian Aboriginal Syllabics, Tibetan, Burmese, Thai, Lao, Khmer, Mongolian, Tifinagh, Bamum
    // All these extensive blocks should be commented out.
    */
  ],


  // 3D specific configuration
  cameraControl: true, // Allow camera movement
  numLights: 3, // Number of point lights
  depthRange: { min: -2000, max: 2000 }, // Further expanded Z-axis range for maximum spacious movement
  ambientLightLevel: 80, // Base light level
  pointLightIntensity: 120, // Intensity of point lights
  defaultCameraZoom: 1000, // Further increased default zoom for wider view
  minCameraZoom: 100, // Minimum zoom distance
  maxCameraZoom: 3000, // Further increased max zoom for enormous space
  renderDistance: 6000, // Further increased render distance for larger space

  // Existing parameters for audio, colors, etc.
  audioAnalysis: {
    enabled: false,
    smoothing: 0.8,
    minFrequency: 20,
    maxFrequency: 200,
    threshold: 0.01,
    influence: 0.5,
  },

  noiseDetail: {
    octaves: 4,
    falloff: 0.5,
  },

  // Color palettes
  selectedPaletteIndex: 0,
  palettes: [
    // Nocturnal Depths - Refined with precise Swiss color theory
    [
      [10, 10, 22], // Dark background
      [25, 25, 45], // Mid background
      [40, 50, 90], // Highlight
      [100, 110, 200], // Accent
      [180, 200, 255], // Foreground
    ],

    // Neo-Swiss Minimalism
    [
      [10, 10, 12],
      [30, 30, 34],
      [80, 80, 84],
      [180, 180, 184],
      [245, 245, 250],
    ],

    // Bioluminescence
    [
      [5, 15, 25],
      [0, 50, 55],
      [0, 100, 80],
      [10, 200, 120],
      [120, 255, 170],
    ],

    // Neural Network
    [
      [30, 10, 40],
      [70, 15, 80],
      [160, 20, 110],
      [220, 40, 120],
      [255, 90, 140],
    ],

    // Precision Red - Swiss Design Classic
    [
      [20, 8, 8],
      [40, 12, 12],
      [90, 18, 18],
      [180, 30, 30],
      [240, 80, 80],
    ],

    // Parsa Azari Inspired
    [
      [5, 10, 20],
      [10, 25, 50],
      [20, 50, 100],
      [40, 100, 200],
      [180, 220, 255],
    ],

    // Carbon Structure
    [
      [10, 10, 10],
      [30, 30, 30],
      [60, 60, 60],
      [120, 120, 120],
      [210, 210, 210],
    ],

    // Artificial Nature
    [
      [10, 30, 15],
      [20, 60, 30],
      [40, 120, 60],
      [80, 200, 100],
      [140, 255, 160],
    ],
  ], // Close palettes array
}; // Close CONFIG object

// Core system variables
let organisms = []; // All active organisms
let ecosystem; // The ecosystem manager
let selectedPalette; // Current color scheme
let paletteIndex = 0; // Index of active palette
let grid = []; // Spatial partitioning grid for performance
let cellSize = 60; // Size of each grid cell
let cols, rows; // Grid dimensions

// System state tracking
let metadata = {
  generationCount: 0, // Number of generations passed
  interactionCount: 0, // Number of meaningful interactions
  totalCreated: 0, // Total organisms created
  dominantType: "", // Most common organism type
  avgLifespan: 0, // Average creature lifespan
  systemComplexity: 0, // Emergent complexity metric
  timeSinceStart: 0, // Time the system has been running
};

// Camera interaction for exhibition mode
const cameraInteraction = {
  enabled: false,
  video: null,
  previousPixels: [],
  detectionPoints: [],
  motionThreshold: 30,
  lastMotionTime: 0,
  debugView: false,
};

// Audio system
let audioEnabled = false; // Start with sound off
let oscillators = []; // Sound generators
let audioContext; // Web Audio API context
let reverb; // Reverb effect
let noiseOsc; // Noise generator for ambience
let analyzer; // For visualizing audio

// Fix for p5.sound initialization issues
// This prevents "Cannot read properties of undefined (reading 'addModule')" error
if (typeof p5 !== 'undefined') {
  try {
    // Make sure p5 sound can initialize properly
    if (!p5.prototype.getAudioContext) {
      p5.prototype.getAudioContext = function() {
        return audioContext || new (window.AudioContext || window.webkitAudioContext)();
      };
    }
  } catch (e) {
    console.warn("Error setting up p5 audio compatibility:", e);
  }
}

// UI elements
let fontMono, fontInter; // Typography
let noiseTexture; // For artistic grain texture
let fadeInAlpha = 0; // For fade-in animation

// Camera and 3D specific variables
let cam; // 3D camera
let rotationY = 0; // Camera rotation
let rotationX = 0; // Camera tilt
let cameraZ = 1000; // Camera distance - updated to match new default
let lights = []; // Array of point lights

// Word formation variables
let potentialClusters = new Map(); // Map cluster ID -> {organisms: [], startTime: timestamp, string: "chars"}
let confirmedWords = []; // Array of {word: string, organisms: [], displayUntil: timestamp}
let collectedWords = []; // Array of {word: string, definition: string, translations: {}}
let lastDictionaryCheck = 0; // Timestamp of last dictionary API call

// Verse creation mode variables
let isVerseMode = false; // Toggle between letter mode and verse mode
let verseWords = []; // Array of {word: string, position: {x, y, z}, rotation: {x, y, z}, scale: number, id: number}
let verses = []; // Array of saved verses: {title: string, words: [], createdAt: timestamp}
let selectedWordForPlacement = null; // Word selected from palette to place in 3D space
let nextVerseWordId = 0; // Unique ID counter for verse words
let currentVerse = { title: "Untitled Verse", words: [] }; // Current verse being worked on

// Sophisticated color palettes curated for the exhibition
const PALETTES = [
  // Nocturnal Depths - Refined with precise Swiss color theory
  [
    [10, 10, 22], // Dark background
    [25, 25, 45], // Mid background
    [40, 50, 90], // Highlight
    [100, 110, 200], // Accent
    [180, 200, 255], // Foreground
  ],

  // Neo-Swiss Minimalism
  [
    [10, 10, 12],
    [30, 30, 34],
    [80, 80, 84],
    [180, 180, 184],
    [245, 245, 250],
  ],

  // Bioluminescence
  [
    [5, 15, 25],
    [0, 50, 55],
    [0, 100, 80],
    [10, 200, 120],
    [120, 255, 170],
  ],

  // Neural Network
  [
    [30, 10, 40],
    [70, 15, 80],
    [160, 20, 110],
    [220, 40, 120],
    [255, 90, 140],
  ],

  // Precision Red - Swiss Design Classic
  [
    [20, 8, 8],
    [40, 12, 12],
    [90, 18, 18],
    [180, 30, 30],
    [240, 80, 80],
  ],

  // Parsa Azari Inspired
  [
    [5, 10, 20],
    [10, 25, 50],
    [20, 50, 100],
    [40, 100, 200],
    [180, 220, 255],
  ],

  // Carbon Structure
  [
    [10, 10, 10],
    [30, 30, 30],
    [60, 60, 60],
    [120, 120, 120],
    [210, 210, 210],
  ],

  // Artificial Nature
  [
    [10, 30, 15],
    [20, 60, 30],
    [40, 120, 60],
    [80, 200, 100],
    [140, 255, 160],
  ],
];

// NEW: Constants and variables for script-based highlighting
const WHITE_COLOR_RGB = [255, 255, 255];
const SCRIPT_HIGHLIGHT_COLORS = {
  // Define colors for each script category.
  // These are examples; adjust as needed for aesthetics and clarity.
  default: [0, 100, 255], // Blue for English/Latin
  greek: [0, 150, 255],   // Blue
  armenian: [255, 100, 0], // Orange
  georgian: [100, 200, 50], // Light Green
  hebrew: [150, 100, 255], // Purple
  arabic: [255, 200, 0],   // Yellow for Persian/Arabic
  eastAsian: [255, 0, 0], // Red for Asian languages
  indic: [0, 200, 150],   // Teal
  southeastAsian: [180, 220, 0], // Lime Green
  syriac: [200, 150, 100], // Brownish
  coptic: [100, 100, 100], // Dark Grey
  ethiopic: [50, 150, 100], // Dark Green/Blue
  cherokee: [255, 150, 150], // Light Pink
  canadianAboriginal: [150, 200, 200], // Light Cyan
  tibetan: [200, 100, 100], // Desaturated Red
  burmese: [100, 150, 200], // Light Blue
  khmer: [220, 180, 100],  // Beige
  sinhala: [180, 150, 220], // Light Purple
  mongolian: [150, 180, 150], // Desaturated Green
  tifinagh: [200, 200, 150], // Pale Yellow
  nko: [100, 200, 200],     // Cyan
  vai: [220, 150, 200],     // Mauve
  osmanya: [150, 150, 100], // Olive
  adlam: [100, 100, 200],   // Indigo
  ogham: [50, 100, 50],     // Dark Green
  runic: [150, 120, 80],    // Tan
  glagolitic: [120, 80, 150], // Plum
  bamum: [80, 150, 120],     // Greenish-blue
  primordial: [120, 120, 120], // Neutral grey for primordial forms
  // Add more script categories and their colors as needed
};

let highlightedScriptCategory = "all_white"; // Initial state: all organisms are white
let availableScriptCategories = ["all_white"]; // Will be populated in setup
let currentHighlightIndex = 0; // Index for cycling through availableScriptCategories

// Variables for Focus/Resonance Tool
let focusResonanceActive = false;
let focusResonancePosition = null; // p5.Vector in 3D space
let focusResonanceRadius = CONFIG.wordSettings.focusResonanceRadius || 100; // Radius from config or default

// Camera control variables
let cameraRotation = { x: 0, y: 0 };
let cameraZoom = 800; // Initial camera distance (increased for wider view)

// Expose these for testing
window.cameraRotation = cameraRotation;
window.cameraZoom = cameraZoom;

// Fade-in animation for smooth startup

// Add these variables after the PALETTES constant but before the preload function
let loadedFonts = {}; // Cache for loaded fonts
let defaultFont; // Default font to use as fallback
let isDefaultFontReady = false; // Flag to signal when the essential 3D font is loaded

// ADDED: Create a global empty font as ultimate fallback
const createEmptyFont = () => {
  return {
    glyphs: {},
    generateShapes: function() { return []; }
  };
};

// Keep reference to an empty fallback font
let emptyFallbackFont = createEmptyFont();

// Ensure THREE.BufferGeometryUtils exists
if (!THREE.BufferGeometryUtils) {
  THREE.BufferGeometryUtils = {
    // Simplified implementation if the proper library fails to load
    mergeBufferGeometries: function(geometries) {
      // Just return the first geometry if proper merging isn't available
      console.warn("Using fallback mergeBufferGeometries - proper THREE.BufferGeometryUtils not loaded");
      return geometries[0];
    }
  };
}

function preload() {
  // Load necessary assets and prepare shaders
  fontMono = loadFont(
    "https://cdn.jsdelivr.net/npm/@fontsource/space-mono/files/space-mono-latin-400-normal.woff"
  );
  fontInter = loadFont(
    "https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-300-normal.woff"
  );
  
  const loader = new THREE.FontLoader();
  
  // ADDED: Safe font loading function with error handling
  const safeLoadFont = (fontUrl, fontKey, fontName) => {
    try {
      loader.load(
        fontUrl, 
        function(font) {
          loadedFonts[fontKey] = font;
          console.log(`${fontName} loaded successfully.`);
          if (fontKey === 'default') {
            defaultFont = font;
            isDefaultFontReady = true;
          }
        },
        // onProgress callback
        undefined, 
        // onError callback
        function(error) {
          console.error(`Failed to load ${fontName}:`, error);
          if (fontKey === 'default') {
            console.warn(`Setting default font to empty fallback`);
            defaultFont = emptyFallbackFont;
            isDefaultFontReady = true; 
          }
        }
      );
    } catch (e) {
      console.error(`Exception when trying to load ${fontName}:`, e);
      if (fontKey === 'default') {
        defaultFont = emptyFallbackFont;
        isDefaultFontReady = true;
      }
    }
  };

  // Load the default Helvetiker font
  safeLoadFont('helvetiker_regular.typeface.json', 'default', 'Default 3D font (helvetiker_regular)');

  // Load Vazirmatn_Regular.json
  safeLoadFont('Vazirmatn_Regular.typeface.json', 'vazir', 'Vazirmatn_Regular.json');

  // Load Noto Sans_Regular.typeface.json
  safeLoadFont('Noto Sans_Regular.typeface.json', 'notosans', 'Noto Sans_Regular.typeface.json');

  // Load Noto Sans Armenian_Regular.typeface.json
  safeLoadFont('Noto Sans Armenian_Regular.typeface.json', 'notoArmenian', 'Noto Sans Armenian_Regular.typeface.json');

  // Load Noto Sans Bengali_Regular.typeface.json
  safeLoadFont('Noto Sans Bengali_Regular.typeface.json', 'notoBengali', 'Noto Sans Bengali_Regular.typeface.json');

  // Load Noto Sans Devanagari_Regular.typeface.json
  safeLoadFont('Noto Sans Devanagari_Regular.typeface.json', 'notoDevanagari', 'Noto Sans Devanagari_Regular.typeface.json');

  // Load Noto Sans Ethiopic_Regular.typeface.json
  safeLoadFont('Noto Sans Ethiopic_Regular.typeface.json', 'notoEthiopic', 'Noto Sans Ethiopic_Regular.typeface.json');

  // Load Noto Sans Georgian_Regular.typeface.json
  safeLoadFont('Noto Sans Georgian_Regular.typeface.json', 'notoGeorgian', 'Noto Sans Georgian_Regular.typeface.json');

  // Load Noto Sans Malayalam_Regular.typeface.json
  safeLoadFont('Noto Sans Malayalam_Regular.typeface.json', 'notoMalayalam', 'Noto Sans Malayalam_Regular.typeface.json');

  // Load Noto Sans Thai_Regular.typeface.json
  safeLoadFont('Noto Sans Thai_Regular.typeface.json', 'notoThai', 'Noto Sans Thai_Regular.typeface.json');
  
  // Load Noto Sans Hebrew Thin_Regular.typeface.json
  safeLoadFont('Noto Sans Hebrew Thin_Regular.typeface.json', 'notoHebrewThin', 'Noto Sans Hebrew Thin_Regular.typeface.json');

  // Load Noto Sans JP_Regular.typeface.json
  safeLoadFont('Noto Sans JP_Regular.typeface.json', 'notoJP', 'Noto Sans JP_Regular.typeface.json');

  // Load Noto Serif Tibetan_Regular.typeface.json
  safeLoadFont('Noto Serif Tibetan_Regular.typeface.json', 'notoTibetan', 'Noto Serif Tibetan_Regular.typeface.json');
}

// Function to load additional fonts for different scripts (primarily for CSS/2D Canvas)
function loadAdditionalWebFonts() {
  console.log("Loading essential web fonts via Google Fonts CSS API.");
  
  // Load a smaller set of most important fonts to ensure they load correctly
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&family=Noto+Sans+JP&family=Noto+Sans+KR&family=Noto+Sans+Arabic&family=Noto+Sans+Hebrew&display=swap';
  
  // Add link element to document head
  document.head.appendChild(fontLink);
  
  // Create a test element to verify font loading
  const testElement = document.createElement('div');
  testElement.style.fontFamily = "'Noto Sans', sans-serif";
  testElement.style.position = 'absolute';
  testElement.style.visibility = 'hidden';
  testElement.textContent = 'Font Test';
  document.body.appendChild(testElement);
  
  console.log("Web font links added to document head. Loading essential fonts first.");
  
  // Add event listener to reload organisms once fonts are loaded
  document.fonts.ready.then(() => {
    console.log("System fonts have loaded!");
    
    // If no organisms yet and the default font is ready, initialize
    if (organisms.length === 0 && isDefaultFontReady) {
      console.log("Initializing organisms now that fonts are ready");
      initializeOrganisms();
    } else if (organisms.length > 0) {
      console.log("Rebuilding organism visuals with loaded fonts");
      // Refresh existing organism visuals
      for (let org of organisms) {
        if (org.mesh) {
          org.removeMesh();
          org.createVisualRepresentation();
        }
      }
    }
  }).catch(err => {
    console.warn("Font loading encountered an issue:", err);
    // Initialize anyway as fallback
    if (organisms.length === 0 && isDefaultFontReady) {
      initializeOrganisms();
    }
  });
}

function setup() {
  // --- Three.js setup FIRST ---
  const canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.elt.oncontextmenu = () => false;
  pixelDensity(1);

  threeScene = new THREE.Scene();
  threeCamera = new THREE.PerspectiveCamera(60, windowWidth / windowHeight, 1, 5000);
  threeCamera.position.set(0, 0, 800);
  threeRenderer = new THREE.WebGLRenderer({ canvas: canvas.elt, antialias: true, alpha: true });
  threeRenderer.setSize(windowWidth, windowHeight);
  threeRenderer.setClearColor(0x000000, 0);

  // Now you can add lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  threeScene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
  dirLight.position.set(0, 0, 1);
  threeScene.add(dirLight);

  // Configure 3D settings
  perspective(PI / 3.0, width / height, 10, CONFIG.renderDistance);

  // Initialize camera control
  if (CONFIG.cameraControl) {
    rotationY = 0;
    rotationX = 0;
    cameraZ = 800; // Increased for wider initial view
  }

  // Setup lighting for 3D (p5.js, can be kept for legacy visuals)
  ambientLight(CONFIG.ambientLightLevel);

  // Create dynamic point lights (p5.js, can be kept for legacy visuals)
  for (let i = 0; i < 3; i++) {
    lights.push({
      x: random(-width / 2, width / 2),
      y: random(-height / 2, height / 2),
      z: random(-200, 200),
      color: selectedPalette
        ? selectedPalette[floor(random(selectedPalette.length))]
        : [255, 255, 255],
    });
  }

  // Ensure script mapping is complete for all character types
  completeScriptMapping();

  // Initialize spatial partitioning grid (adapted for 3D)
  cols = ceil(width / cellSize);
  rows = ceil(height / cellSize);
  let depthCells = ceil(
    (CONFIG.depthRange.max - CONFIG.depthRange.min) / cellSize
  );
  grid = new Array(cols * rows * depthCells);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = [];
  }

  // Initialize camera interaction if supported
  setupCameraInteraction();

  // Initialize audio system
  setupAudio();

  // Select initial color palette
  paletteIndex = constrain(paletteIndex, 0, PALETTES.length - 1);
  selectedPalette = PALETTES[paletteIndex];

  // NEW: Populate availableScriptCategories for highlighting
  const uniqueScriptCategories = new Set();
  CONFIG.types.forEach(charType => {
    // Use a simplified getScriptCategory logic for setup, similar to Organism.getScriptCategory
    // This is to ensure all potential scripts from CONFIG.types are considered.
    let script = "default"; // Default value
    const code = charType.charCodeAt(0);

    // This is a simplified version of getScriptCategory for setup purposes.
    // It's important that this logic aligns with how Organism.getScriptCategory determines scripts.
    if (CONFIG.scriptMap[charType]) {
      script = CONFIG.scriptMap[charType];
    } else {
      // A condensed version of the Unicode block checks from Organism.getScriptCategory
      if (code >= 0x0370 && code <= 0x03FF) script = "greek";
      else if (code >= 0x0400 && code <= 0x04FF) script = "cyrillic"; // Ensure cyrillic is handled if present
      else if (code >= 0x0530 && code <= 0x058F) script = "armenian";
      else if (code >= 0x10A0 && code <= 0x10FF) script = "georgian";
      else if (code >= 0x0590 && code <= 0x05FF) script = "hebrew";
      else if (code >= 0x0600 && code <= 0x06FF) script = "arabic";
      else if (code >= 0x0700 && code <= 0x074F) script = "syriac";
      else if (code >= 0x2C80 && code <= 0x2CFF) script = "coptic";
      else if (code >= 0x1200 && code <= 0x137F) script = "ethiopic";
      else if (code >= 0x13A0 && code <= 0x13FF) script = "cherokee";
      else if (code >= 0x1400 && code <= 0x167F) script = "canadianAboriginal";
      else if (code >= 0x0F00 && code <= 0x0FFF) script = "tibetan";
      else if (code >= 0x1000 && code <= 0x109F) script = "burmese";
      else if (code >= 0x0E00 && code <= 0x0E7F) script = "southeastAsian"; // Thai
      else if (code >= 0x0E80 && code <= 0x0EFF) script = "southeastAsian"; // Lao
      else if (code >= 0x1780 && code <= 0x17FF) script = "khmer"; // Explicitly khmer
      else if (code >= 0x0D80 && code <= 0x0DFF) script = "sinhala";
      else if (code >= 0x0D00 && code <= 0x0D7F) script = "indic"; // Malayalam
      else if (code >= 0x0B80 && code <= 0x0BFF) script = "indic"; // Tamil
      else if (code >= 0x0C00 && code <= 0x0C7F) script = "indic"; // Telugu
      else if (code >= 0x0C80 && code <= 0x0CFF) script = "indic"; // Kannada
      else if (code >= 0x0980 && code <= 0x09FF) script = "indic"; // Bengali
      else if (code >= 0x0A80 && code <= 0x0AFF) script = "indic"; // Gujarati
      else if (code >= 0x0B00 && code <= 0x0B7F) script = "indic"; // Odia
      else if (code >= 0x0A00 && code <= 0x0A7F) script = "indic"; // Gurmukhi
      else if (code >= 0x0900 && code <= 0x097F) script = "indic"; // Devanagari
      else if (code >= 0x1800 && code <= 0x18AF) script = "mongolian";
      else if (code >= 0x2D30 && code <= 0x2D7F) script = "tifinagh";
      else if ((code >= 0x1100 && code <= 0x11FF) || (code >= 0xAC00 && code <= 0xD7AF) || (code >= 0x3040 && code <= 0x309F) || (code >= 0x30A0 && code <= 0x30FF) || (code >= 0x4E00 && code <= 0x9FFF)) script = "eastAsian";
      else if (code >= 0x07C0 && code <= 0x07FF) script = "nko";
      else if (code >= 0xA500 && code <= 0xA63F) script = "vai";
      else if (code >= 0x10480 && code <= 0x104AF) script = "osmanya";
      else if (code >= 0x1E900 && code <= 0x1E95F) script = "adlam";
      else if (code >= 0x1680 && code <= 0x169F) script = "ogham";
      else if (code >= 0x16A0 && code <= 0x16FF) script = "runic";
      else if ((code >= 0x2C00 && code <= 0x2C5F) || (code >= 0x1E000 && code <= 0x1E02F)) script = "glagolitic";
      else if (code >= 0x16800 && code <= 0x16A3F) script = "bamum";
    }
    uniqueScriptCategories.add(script);
  });

  availableScriptCategories = ["all_white", ...Array.from(uniqueScriptCategories).sort()];
  highlightedScriptCategory = availableScriptCategories[0]; // Start with "all_white"
  currentHighlightIndex = 0;

  // Ensure all detected script categories have a color in SCRIPT_HIGHLIGHT_COLORS
  availableScriptCategories.forEach(scriptCat => {
    if (scriptCat !== "all_white" && !SCRIPT_HIGHLIGHT_COLORS[scriptCat]) {
      console.warn(`Script category "${scriptCat}" is missing a defined highlight color. Assigning a random color.`);
      SCRIPT_HIGHLIGHT_COLORS[scriptCat] = [
        floor(random(50, 255)),
        floor(random(50, 255)),
        floor(random(50, 255)),
      ];
    }
  });
  console.log("Available script categories for highlighting:", availableScriptCategories);
  // END NEW

  // Initialize ecosystem
  ecosystem = new Ecosystem();
  
  // Load non-critical web fonts (for CSS/2D canvas)
  loadAdditionalWebFonts();

  // Create organisms only if the default 3D font is ready and they haven't been created yet
  if (isDefaultFontReady && !organisms.length) {
    initializeOrganisms();
  }

  // Setup UI elements and event listeners
  setupUI();

  // Track metadata
  metadata.timeSinceStart = millis();

  // For consistent typography
  if (fontMono) textFont(fontMono);

  // Enable smooth fading in
  fadeInAlpha = 0;

  console.log(
    "Semantic Biome 3D setup complete - grid size:",
    cols,
    "x",
    rows
  );

  // Create noise texture for artistic grain effect
  createNoiseTexture();

  // Initialize letter flow system
  letterIndex = CONFIG.types.length - 1;
  
  // Set up letter destination regions based on scripts
  setupLetterFlowDestinations();

    // Initialize the Word List display immediately
  updateWordList();
  
  console.log("Setup complete - UI initialized");
  console.log("Word collection system ready");
  
  // Add a test function to verify word collection works
  window.testWordCollection = function() {
    console.log("🧪 Testing word collection system...");
    
    // Add a test word to demonstrate the system works
    const testWord = {
      word: "test",
      definition: "A test word to verify the collection system",
      translations: {},
      timestamp: millis(),
      source: "manual-test"
    };
    
    collectedWords.push(testWord);
    console.log("✅ Test word added to collection");
    updateWordList();
    console.log("🔄 Word list updated");
  };
  
  // Add a function to manually create words for testing
  window.createTestWord = function(word = "hello") {
    console.log(`🎯 Creating test word: "${word}"`);
    
    // Simulate the confirmWord process
    const currentTime = millis();
    const definition = `Test word: ${word}`;
    
    // Create fake organisms for the word
    const fakeOrganisms = [];
    for (let i = 0; i < word.length; i++) {
      fakeOrganisms.push({
        id: Date.now() + i,
        textType: word[i],
        pos: { x: i * 50, y: 0, z: 0 }
      });
    }
    
    // Call confirmWord directly
    confirmWord(`test-${Date.now()}`, word, fakeOrganisms, currentTime, definition, 'default', 'english');
  };
  
  // Test the system after 2 seconds
  setTimeout(() => {
    console.log("🔍 Checking if word collection UI exists...");
    const wordListBox = document.getElementById('wordListBox');
    const wordListContent = document.getElementById('wordListContent');
    
    if (wordListBox) {
      console.log("✅ Word collection box found");
    } else {
      console.error("❌ Word collection box NOT found");
    }
    
    if (wordListContent) {
      console.log("✅ Word list content area found");
    } else {
      console.error("❌ Word list content area NOT found");
    }
    
    console.log("💡 You can manually test word collection by typing:");
    console.log("   - testWordCollection() - adds a simple test word");
    console.log("   - createTestWord('hello') - creates a specific word");
    console.log("   - clearWordCollection() - clears all collected words");
    console.log("   - restartWithEnglish() - restart with English-prioritized organisms");
  }, 2000);
  
  // Add a function to clear the word collection
  window.clearWordCollection = function() {
    console.log("🗑️ Clearing word collection...");
    collectedWords.length = 0; // Clear the array
    updateWordList();
    console.log("✅ Word collection cleared");
  };
  
  // Add a function to restart with English-prioritized organisms
  window.restartWithEnglish = function() {
    console.log("🔄 Restarting with English-prioritized organisms...");
    
    // Clear existing organisms
    while (organisms.length > 0) {
      const org = organisms.pop();
      if (org.mesh) {
        org.removeMesh();
      }
    }
    
    // Clear confirmed words and potential clusters
    confirmedWords = [];
    potentialClusters.clear();
    
    // Re-initialize with English priority
    initializeOrganisms();
    
    console.log("✅ Restarted with English-prioritized organisms");
  };
}

// NEW: Function to set up letter flow destinations
function setupLetterFlowDestinations() {
    // Create a truly 3D arrangement of destinations for letters to flow toward
    
    // Extract unique script categories from CONFIG.scriptMap
    const scriptCategories = new Set();
    Object.values(CONFIG.scriptMap).forEach(script => {
        scriptCategories.add(script);
    });
    
    // Add fallback categories not already in scriptMap
    ["latin", "numbers", "punctuation", "default"].forEach(cat => {
        scriptCategories.add(cat);
    });
    
    // Initialize the destinations object
    window.letterFlowDestinations3D = {};
    
    // First set up the default region which serves as fallback
    window.letterFlowDestinations3D["default"] = {
        x: [-width/6, width/6],       // Central region
        y: [-height/6, height/6],
        z: [-100, 100]
    };
    
    // Create spatial distribution for each script category
    // Map positions clockwise in a 3D sphere around the center
    const categories = Array.from(scriptCategories);
    const numCategories = categories.length;
    
    categories.forEach((category, index) => {
        // Skip default as we already defined it
        if (category === "default") return;
        
        // Calculate position based on index
        // Place different script categories in different regions of 3D space
        const angle = (index / numCategories) * TWO_PI;
        const radiusX = width/3;
        const radiusY = height/3;
        const depthZ = 200;
        
        // Calculate region center point
        const centerX = radiusX * cos(angle);
        const centerY = radiusY * sin(angle);
        // Alternate depth based on even/odd index
        const centerZ = index % 2 === 0 ? depthZ : -depthZ;
        
        // Create rectangular region around center point
        window.letterFlowDestinations3D[category] = {
            x: [centerX - width/6, centerX + width/6],
            y: [centerY - height/6, centerY + height/6],
            z: [centerZ - 100, centerZ + 100]
        };
    });
    
    console.log("Letter flow destinations set up for all script categories:", Object.keys(window.letterFlowDestinations3D));
    
    // Check if we have a font we can use - if not, try to load it
    if (!loadedFonts['default'] && !window.fontLoadAttempted) {
        window.fontLoadAttempted = true;
        
        console.log("No default font detected, attempting to load helvetiker_regular.typeface.json");
        
        try {
            const loader = new THREE.FontLoader();
            loader.load(
                'helvetiker_regular.typeface.json',
                function(font) {
                    console.log("Successfully loaded helvetiker_regular.typeface.json");
                    loadedFonts['default'] = font;
                    defaultFont = font;
                    isDefaultFontReady = true;
                },
                undefined,
                function(error) {
                    console.error("Error loading font:", error);
                }
            );
        } catch (error) {
            console.error("Exception loading font:", error);
        }
    }
}

// NEW: Add mouse moved function to create letters while moving mouse
function mouseMoved() {
   // SAFETY CHECK: Ensure letterFlowDestinations3D exists and has all required categories
    if (!window.letterFlowDestinations3D) {
        // console.warn("letterFlowDestinations3D not initialized yet. Skipping mouseMoved.");
        return;
    }

    // Ensure all necessary script categories exist
    const requiredCategories = ["default", "latin", "greek", "numbers", "punctuation"];
    for (const cat of requiredCategories) {
        if (!window.letterFlowDestinations3D[cat]) {
            // Create a fallback if category is missing
            window.letterFlowDestinations3D[cat] = window.letterFlowDestinations3D["default"] || {
                x: [-width/6, width/6],
                y: [-height/6, height/6],
                z: [-100, 100]
            };
        }
    }

  if (isMouseOverUI()) return;
  
  // Don't generate letters in verse mode - verse mode is for placing complete words only
  if (isVerseMode) return;
    
    // Create a new letter organism at the mouse position
    if (letterIndex >= 0) {
        // Use a simplified set of characters that are more likely to work with default fonts
        const safeCharacters = [
            // Latin alphabet - most fonts support these
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            
            // Greek - Basic set often available
            'Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν',
            'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν',
            
            // Arabic/Persian characters (basic set that should be in most Arabic fonts)
            'ا', 'ب', 'ت', 'ج', 'د', 'ر', 'س', 'ع', 'ف', 'ل', 'م', 'ن', 'ه', 'و', 'ي',
            // Persian specific (that are commonly supported)
            'پ', 'چ', 'گ',
            
            // East Asian characters (Chinese/Japanese)
            '你', '好', '谢', '不', '我', '他', '她', '们', '是', '的', '中', '国', '人',
            '日', '月', '水', '火', '木', '金', '土', '爱', '家', '学', '生',
            
            // Punctuation and numbers
            '.', ',', '?', '!', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        ];
        
        // Get a character from our safe set
        let charIndex = Math.floor(random(0, safeCharacters.length));
        let letter = safeCharacters[charIndex];
        
        // Determine script category for this character
        let scriptCategory = "default";
        if (/[Α-Ωα-ω]/.test(letter)) {
            scriptCategory = "greek";
        } else if (/[A-Za-z]/.test(letter)) {
            scriptCategory = "default"; // Use "default" for Latin/English letters to match SCRIPT_HIGHLIGHT_COLORS
        } else if (/[ا-ي]|[پچژگ]/.test(letter)) {
            scriptCategory = "arabic"; // Arabic and Persian characters
        } else if (/[\u4e00-\u9fff]/.test(letter)) {
            scriptCategory = "eastAsian"; // CJK characters
        } else if (/[0-9]/.test(letter)) {
            scriptCategory = "numbers";
        } else {
            scriptCategory = "punctuation";
        }
        
        // Get 3D destination region for this script category
        // Map categories to letterFlowDestinations3D compatibility
        let destinationCategory = scriptCategory;
        if (scriptCategory === "default") {
            destinationCategory = "latin";
        } else if (scriptCategory === "arabic") {
            destinationCategory = "arabic";
        } else if (scriptCategory === "eastAsian") {
            destinationCategory = "eastAsian";
        }
        
        const region = window.letterFlowDestinations3D[destinationCategory] || 
                       window.letterFlowDestinations3D["latin"] ||
                       window.letterFlowDestinations3D["default"];
        
        // Get a 3D position from the mouse
        const mousePos3D = mousePositionTo3D();
        
        // Generate random destination within the 3D region for this category
        const destX = random(region.x[0], region.x[1]);
        const destY = random(region.y[0], region.y[1]);
        const destZ = random(region.z[0], region.z[1]);
        
        // Create letter flow data with true 3D positioning
        letterOrgData.push({
            letter: letter,
            // Start at the 3D mouse position
            x: mousePos3D.x,
            y: mousePos3D.y,
            z: mousePos3D.z,
            // 3D destination within the appropriate volumetric region
            destX: destX,
            destY: destY,
            destZ: destZ,
            scriptCategory: scriptCategory,
            // 3D velocities
            xVel: 0,
            yVel: 0,
            zVel: 0,
            // Size based on distance from camera for better depth perception
            size: map(mousePos3D.z, -300, 300, 30, 15),
            // Add rotation for 3D effect
            rotationX: random(-0.01, 0.01),
            rotationY: random(-0.01, 0.01),
            rotationZ: random(-0.01, 0.01)
        });
        
        // Limit the number of letters
        if (letterOrgData.length > maxLetters) {
            letterOrgData.splice(0, 1);
        }
    }
}

// Function to ensure all character types have script mappings
function completeScriptMapping() {
  // Add script mappings for any characters not explicitly defined
  CONFIG.types.forEach(charType => {
    if (!CONFIG.scriptMap[charType]) {
      // Use unicode detection to assign script
      const code = charType.charCodeAt(0);
      
      // Detect script ranges
      if (code >= 0x0370 && code <= 0x03FF) 
        CONFIG.scriptMap[charType] = "greek";
      else if (code >= 0x0530 && code <= 0x058F) 
        CONFIG.scriptMap[charType] = "armenian";
      else if (code >= 0x10A0 && code <= 0x10FF) 
        CONFIG.scriptMap[charType] = "georgian";
      else if (code >= 0x0590 && code <= 0x05FF)
        CONFIG.scriptMap[charType] = "hebrew";
      else if (code >= 0x0600 && code <= 0x06FF)
        CONFIG.scriptMap[charType] = "arabic";
      else if (code >= 0x0700 && code <= 0x074F)
        CONFIG.scriptMap[charType] = "syriac";
      else if (code >= 0x2C80 && code <= 0x2CFF)
        CONFIG.scriptMap[charType] = "coptic";
      else if (code >= 0x1200 && code <= 0x137F)
        CONFIG.scriptMap[charType] = "ethiopic";
      else if (code >= 0x13A0 && code <= 0x13FF)
        CONFIG.scriptMap[charType] = "cherokee";
      else if (code >= 0x1400 && code <= 0x167F)
        CONFIG.scriptMap[charType] = "canadianAboriginal";
      else if (code >= 0x0F00 && code <= 0x0FFF)
        CONFIG.scriptMap[charType] = "tibetan";
      else if (code >= 0x1000 && code <= 0x109F)
        CONFIG.scriptMap[charType] = "burmese";
      else if (code >= 0x0E00 && code <= 0x0E7F)
        CONFIG.scriptMap[charType] = "southeastAsian"; // Thai
      else if (code >= 0x0E80 && code <= 0x0EFF)
        CONFIG.scriptMap[charType] = "southeastAsian"; // Lao
      else if (code >= 0x1780 && code <= 0x17FF)
        CONFIG.scriptMap[charType] = "khmer";
      else if (code >= 0x0D80 && code <= 0x0DFF)
        CONFIG.scriptMap[charType] = "sinhala";
      else if (code >= 0x0D00 && code <= 0x0D7F)
        CONFIG.scriptMap[charType] = "indic"; // Malayalam
      else if (code >= 0x0B80 && code <= 0x0BFF)
        CONFIG.scriptMap[charType] = "indic"; // Tamil
      else if (code >= 0x0C00 && code <= 0x0C7F)
        CONFIG.scriptMap[charType] = "indic"; // Telugu
      else if (code >= 0x0C80 && code <= 0x0CFF)
        CONFIG.scriptMap[charType] = "indic"; // Kannada
      else if (code >= 0x0980 && code <= 0x09FF)
        CONFIG.scriptMap[charType] = "indic"; // Bengali
      else if (code >= 0x0A80 && code <= 0x0AFF)
        CONFIG.scriptMap[charType] = "indic"; // Gujarati
      else if (code >= 0x0B00 && code <= 0x0B7F)
        CONFIG.scriptMap[charType] = "indic"; // Odia
      else if (code >= 0x0A00 && code <= 0x0A7F)
        CONFIG.scriptMap[charType] = "indic"; // Gurmukhi
      else if (code >= 0x0900 && code <= 0x097F)
        CONFIG.scriptMap[charType] = "indic"; // Devanagari
      else if (code >= 0x1800 && code <= 0x18AF)
        CONFIG.scriptMap[charType] = "mongolian";
      else if (code >= 0x2D30 && code <= 0x2D7F)
        CONFIG.scriptMap[charType] = "tifinagh";
      else if (code >= 0x1100 && code <= 0x11FF) // Hangul Jamo
        CONFIG.scriptMap[charType] = "eastAsian";
      else if (code >= 0xAC00 && code <= 0xD7AF) // Hangul Syllables
        CONFIG.scriptMap[charType] = "eastAsian";
      else if (code >= 0x3040 && code <= 0x309F)
        CONFIG.scriptMap[charType] = "eastAsian"; // Hiragana
      else if (code >= 0x30A0 && code <= 0x30FF)
        CONFIG.scriptMap[charType] = "eastAsian"; // Katakana
      else if (code >= 0x4E00 && code <= 0x9FFF)
        CONFIG.scriptMap[charType] = "eastAsian"; // CJK
      else if (code >= 0x07C0 && code <= 0x07FF)
        CONFIG.scriptMap[charType] = "nko";
      else if (code >= 0xA500 && code <= 0xA63F)
        CONFIG.scriptMap[charType] = "vai";
      else if (code >= 0x10480 && code <= 0x104AF)
        CONFIG.scriptMap[charType] = "osmanya";
      else if (code >= 0x1E900 && code <= 0x1E95F)
        CONFIG.scriptMap[charType] = "adlam";
      else if (code >= 0x1680 && code <= 0x169F)
        CONFIG.scriptMap[charType] = "ogham";
      else if (code >= 0x16A0 && code <= 0x16FF)
        CONFIG.scriptMap[charType] = "runic";
      else if (code >= 0x2C00 && code <= 0x2C5F) // Glagolitic (main block)
        CONFIG.scriptMap[charType] = "glagolitic";
      else if (code >= 0x1E000 && code <= 0x1E02F) // Glagolitic Supplement
        CONFIG.scriptMap[charType] = "glagolitic";
      else if (code >= 0x16800 && code <= 0x16A3F)
        CONFIG.scriptMap[charType] = "bamum";
      else
        CONFIG.scriptMap[charType] = "default";
    }
  });
  
  console.log("Script mapping completed for all character types");
} // This closes completeScriptMapping

// This was duplicated, removing the one here. The original is later in the file.
// // In windowResized, comment out the call if not needed
// function windowResized() {
// resizeCanvas(windowWidth, windowHeight);
// // ecosystem.generateFieldLines(); // Commented out if not needed
// }

// Add setupCameraInteraction function before the setup function
function setupCameraInteraction() {
  // Check if we're running in an exhibition setting with a URL parameter
  if (window.location.search.includes("exhibition=true")) {
    try {
      cameraInteraction.enabled = true;
      cameraInteraction.video = createCapture(VIDEO);
      cameraInteraction.video.size(320, 240);
      cameraInteraction.video.hide();

      // Initialize previous pixels array
      cameraInteraction.previousPixels = new Array(320 * 240 * 4).fill(0);

      console.log("Camera interaction enabled for exhibition mode");
    } catch (e) {
      console.warn("Could not initialize camera:", e);
      cameraInteraction.enabled = false;
    }
  }
}

class Organism {
  constructor(x, y) {
    // Physical properties - now in 3D
    this.pos = createVector(
      x,
      y,
      random(CONFIG.depthRange.min, CONFIG.depthRange.max)
    );
    this.vel = p5.Vector.random3D().mult(random(0.5, 1.5)); // Random 3D velocity
    this.acc = createVector(0, 0, 0);

    // Unique identifier
    this.id = floor(random(100000));

    // Genetic properties - the "DNA" of the organism
    this.dna = {
      // Core physical properties
      size: random(CONFIG.baseSize.min, CONFIG.baseSize.max),
      speed: random(CONFIG.baseSpeed.min, CONFIG.baseSpeed.max),
      mass: random(CONFIG.baseMass.min, CONFIG.baseMass.max),

      // Visual properties
      colorIndex: floor(random(selectedPalette.length)),
      opacity: random(0.7, 1),

      // Behavioral properties
      attraction: random() > 0.5,
      socialFactor: random(0.2, 1), // How much it's influenced by others
      explorationFactor: random(0.1, 0.9), // How much it explores

      // 3D specific properties
      depthPreference: random(-1, 1), // Preference for depth positioning
      rotationSpeed: random(-0.02, 0.02), // 3D rotation speed

      // Advanced properties
      specialization: random([
        "gatherer",
        "explorer",
        "defender",
        "communicator",
      ]),
      adaptability: random(0.2, 1), // How quickly it adapts to environment
      energyEfficiency: random(0.4, 0.9), // Efficiency metabolism
      mutationRate: random(0.01, 0.1), // Chance of mutation
      lifespan: random(CONFIG.baseLifespan.min, CONFIG.baseLifespan.max),
      signalStrength: random(0.2, 1), // How strongly it influences others
    };

    // Current state
    this.age = 0;
    this.energy = 100;
    this.reproduction = 0;
    this.trail = [];
    this.maxTrail = floor(map(this.dna.speed, 0.5, 3, 5, 15));
    this.hasInteracted = false;
    this.interactionPartners = new Set();
    this.lastSound = 0;

    // 3D rotation state
    this.rotation = {
      x: random(TWO_PI),
      y: random(TWO_PI),
      z: random(TWO_PI),
    };

    // For emergent behaviors
    this.state = "exploring";
    this.stateCounter = 0;
    this.target = null;
    this.memories = []; // Simple memory system
    
    // Mesh for THREE.js rendering
    this.mesh = null;
    
    // Determine text type - ENHANCED character selection logic for multilingual character generation
    // Almost exclusively use text characters for better generation
    const useTextCharacter = random() < 0.98; // 98% chance to use text characters
    
    if (useTextCharacter) {
      // Create a diverse multilingual character pool including Arabic/Persian
      const multilingualCharacterPool = [];
      
      // Common English letters (40% weight)
      const commonEnglishLetters = [
        // High-frequency vowels
        "a", "a", "a", "e", "e", "e", "e", "i", "i", "o", "o", "u",
        // High-frequency consonants
        "t", "t", "n", "n", "s", "s", "r", "r", "h", "l", "d", "c", "m", "p", "b", "f", "g", "w", "v", "k", "j", "x", "q", "z"
      ];
      
      // Common Arabic letters (40% weight)
      const commonArabicLetters = [
        "ا", "ا", "ا", // Alif - very common
        "ب", "ب", "ت", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ر", "ز", "س", "س", "ش", "ص", "ض", "ط", "ظ",
        "ع", "ع", "غ", "ف", "ق", "ک", "ک", "ل", "ل", "م", "م", "ن", "ن", "ه", "ه", "و", "و", "ی", "ی",
        // Persian-specific letters
        "پ", "چ", "ژ", "گ",
        // Common Arabic variants
        "آ", "أ", "إ", "ة", "ى"
      ];
      
      // Other script letters (20% weight)
      const otherScriptLetters = [
        // Chinese
        "你", "好", "我", "是", "的", "人", "中", "国", "爱", "学",
        // Hindi
        "अ", "आ", "इ", "क", "ख", "ग", "म", "न", "र", "स",
        // Russian
        "а", "б", "в", "г", "д", "е", "и", "к", "л", "м", "н", "о", "п", "р", "с", "т"
      ];
      
      // Build the multilingual pool with proper weights
      // 40% English
      for (let i = 0; i < 4; i++) {
        multilingualCharacterPool.push(...commonEnglishLetters);
      }
      
      // 40% Arabic/Persian
      for (let i = 0; i < 4; i++) {
        multilingualCharacterPool.push(...commonArabicLetters);
      }
      
      // 20% Other scripts
      for (let i = 0; i < 2; i++) {
        multilingualCharacterPool.push(...otherScriptLetters);
      }
      
      // Select character from the multilingual pool
      this.dna.type = random(multilingualCharacterPool);
      
      // Determine script category for the selected character
      this.scriptCategory = this.getScriptCategory(this.dna.type);
    } else {
      // Rarely use geometric shapes
      this.dna.type = random(["circle", "triangle", "square", "spiral", "asterisk", "cross"]);
    }
    
    this.textType = this.dna.type;
    
    // Only set scriptCategory if not already set
    if (!this.scriptCategory) {
      this.scriptCategory = this.getScriptCategory(this.textType);
    }
    
    // Create the appropriate visual representation
    this.createVisualRepresentation();
  }
  
  // Helper method to determine the script category for a character
  getScriptCategory(character) {
    // First check if the character is in our script map
    if (CONFIG.scriptMap[character]) {
      return CONFIG.scriptMap[character];
    }
    
    // If not found in map, try to detect by Unicode ranges
    const code = character.charCodeAt(0);
    
    // Greek: U+0370 to U+03FF
    if (code >= 0x0370 && code <= 0x03FF) return "greek";
    
    // Cyrillic: U+0400 to U+04FF
    if (code >= 0x0400 && code <= 0x04FF) return "cyrillic";
    
    // Hebrew: U+0590 to U+05FF
    if (code >= 0x0590 && code <= 0x05FF) return "hebrew";
    
    // Arabic: U+0600 to U+06FF
    if (code >= 0x0600 && code <= 0x06FF) return "arabic";
    
    // Devanagari: U+0900 to U+097F
    if (code >= 0x0900 && code <= 0x097F) return "indic";
    
    // Thai: U+0E00 to U+0E7F
    if (code >= 0x0E00 && code <= 0x0E7F) return "southeastAsian";
    
    // CJK Unified Ideographs: U+4E00 to U+9FFF
    if (code >= 0x4E00 && code <= 0x9FFF) return "eastAsian";
    
    // Default to Latin-based
    return "default";
  }
  
  // Create the visual representation based on the character and script
  createVisualRepresentation() {
    // Get color from palette - THIS WILL BE OVERRIDDEN BY HIGHLIGHTING LOGIC
    // const color = selectedPalette ? selectedPalette[this.dna.colorIndex] : [255,255,255];
    
    // Determine color based on script category and highlighting
    let organismColorRGB;
    
    // Check if we're in all-white mode (default)
    if (highlightedScriptCategory === "all_white") {
      // In all-white mode, everything is white
      organismColorRGB = WHITE_COLOR_RGB;
    } 
    else {
      // We're in a specific language highlight mode
      if (this.scriptCategory === highlightedScriptCategory) {
        // This is the specifically highlighted script category
        organismColorRGB = SCRIPT_HIGHLIGHT_COLORS[this.scriptCategory] || WHITE_COLOR_RGB;
      } 
      else {
        // All other script categories should be white when a specific one is highlighted
        organismColorRGB = WHITE_COLOR_RGB;
      }
    }
    
    // Safely create THREE.Color with proper error handling
    let threeColor;
    try {
      threeColor = new THREE.Color(`rgb(${organismColorRGB[0]},${organismColorRGB[1]},${organismColorRGB[2]})`);
    } catch (e) {
      console.warn("Error creating THREE.Color, using default white:", e);
      threeColor = new THREE.Color(0xffffff);
    }
    
    let geometry;
    let material;

    // First check if this is a geometric shape character
    if (["circle", "triangle", "square", "spiral", "asterisk", "cross"].includes(this.textType)) {
      // ... (geometric shape logic remains the same) ...
      try {
        switch(this.textType) {
          case "circle":
            geometry = new THREE.CircleGeometry(this.dna.size / 2, 32);
            break;
          case "triangle":
            geometry = new THREE.ConeGeometry(this.dna.size / 2, this.dna.size, 3);
            break;
          case "square":
            geometry = new THREE.BoxGeometry(this.dna.size, this.dna.size, this.dna.size / 4);
            break;
          case "spiral":
            geometry = new THREE.TorusKnotGeometry(this.dna.size / 3, this.dna.size / 9, 64, 8, 2, 3);
            break;
          case "asterisk":
            geometry = new THREE.CircleGeometry(this.dna.size / 2, 5);
            break;
          case "cross":
            const crossBar1 = new THREE.BoxGeometry(this.dna.size, this.dna.size / 3, this.dna.size / 4);
            const crossBar2 = new THREE.BoxGeometry(this.dna.size / 3, this.dna.size, this.dna.size / 4);
            if (THREE.BufferGeometryUtils && THREE.BufferGeometryUtils.mergeBufferGeometries) {
              geometry = THREE.BufferGeometryUtils.mergeBufferGeometries([crossBar1, crossBar2]);
            } else {
              console.warn("THREE.BufferGeometryUtils.mergeBufferGeometries not available. Cross shape will be simpler.");
              geometry = crossBar1; // Fallback to one bar
            }
            break;
          default:
            geometry = new THREE.CircleGeometry(this.dna.size / 2, 32);
        }
      } catch (e) {
        console.warn("Error creating geometry for shape, using fallback circle:", e);
        geometry = new THREE.CircleGeometry(this.dna.size / 2, 16); // Simpler circle as fallback
      }
      
      try {
        material = new THREE.MeshPhongMaterial({ 
          color: threeColor, 
          shininess: 80,
          transparent: true,
          opacity: this.dna.opacity
        });
      } catch (e) {
        console.warn("Error creating material, using fallback basic material:", e);
        material = new THREE.MeshBasicMaterial({ 
          color: 0xffffff, 
          transparent: true,
          opacity: this.dna.opacity
        });
      }
      
      try {
        this.mesh = new THREE.Mesh(geometry, material);
      } catch (e) {
        console.error("Failed to create mesh for geometric shape:", e);
        // Create an extremely simple fallback mesh
        const fallbackGeom = new THREE.BoxGeometry(this.dna.size, this.dna.size, this.dna.size);
        const fallbackMat = new THREE.MeshBasicMaterial({color: 0xffffff});
        this.mesh = new THREE.Mesh(fallbackGeom, fallbackMat);
      }
      
    } else {
      // Attempt to render as 3D text
      let fontForText = null;
      let fontNameForLog = "";
      const originalTextType = this.textType; // Store the original character for logging

      // ADDED: Wrap font selection in try-catch
      try {
        if (this.scriptCategory === 'arabic' && loadedFonts.vazir) {
          fontForText = loadedFonts.vazir;
          fontNameForLog = "Vazirmatn";
        } else if (this.scriptCategory === 'armenian' && loadedFonts.notoArmenian) {
          fontForText = loadedFonts.notoArmenian;
          fontNameForLog = "Noto Sans Armenian";
        } else if (this.scriptCategory === 'georgian' && loadedFonts.notoGeorgian) {
          fontForText = loadedFonts.notoGeorgian;
          fontNameForLog = "Noto Sans Georgian";
        } else if (this.scriptCategory === 'hebrew' && loadedFonts.notoHebrewThin) {
          fontForText = loadedFonts.notoHebrewThin;
          fontNameForLog = "Noto Sans Hebrew Thin";
        } else if (this.scriptCategory === 'ethiopic' && loadedFonts.notoEthiopic) {
          fontForText = loadedFonts.notoEthiopic;
          fontNameForLog = "Noto Sans Ethiopic";
        } 
        // Greek characters covered by Noto Sans Regular
        else if (this.scriptCategory === 'greek' && loadedFonts.notosans) {
          fontForText = loadedFonts.notosans;
          fontNameForLog = "Noto Sans Regular (for Greek)";
        }
        // Tibetan
        else if (this.scriptCategory === 'tibetan' && loadedFonts.notoTibetan) {
          fontForText = loadedFonts.notoTibetan;
          fontNameForLog = "Noto Serif Tibetan";
        }
        // East Asian - specifically checking for Japanese characters first
        else if (this.scriptCategory === 'eastAsian') {
          const charCode = this.textType.charCodeAt(0);
          // Check if it's a Japanese character (Hiragana, Katakana) and notoJP is loaded
          if (((charCode >= 0x3040 && charCode <= 0x309F) || (charCode >= 0x30A0 && charCode <= 0x30FF)) && loadedFonts.notoJP) {
            fontForText = loadedFonts.notoJP;
            fontNameForLog = "Noto Sans JP";
          } else if (loadedFonts.notosans) { // Fallback for other East Asian or if Noto JP not specific enough/loaded
            fontForText = loadedFonts.notosans;
            fontNameForLog = "Noto Sans Regular (East Asian Fallback)";
          } else if (defaultFont) { // Further fallback
            fontForText = defaultFont;
            fontNameForLog = "Helvetiker (East Asian Fallback)";
          }
        }
        // Specific checks for Indic scripts
        else if (this.scriptCategory === 'indic') {
          const charCode = this.textType.charCodeAt(0);
          if (charCode >= 0x0980 && charCode <= 0x09FF && loadedFonts.notoBengali) { // Bengali
            fontForText = loadedFonts.notoBengali;
            fontNameForLog = "Noto Sans Bengali";
          } else if (charCode >= 0x0900 && charCode <= 0x097F && loadedFonts.notoDevanagari) { // Devanagari
            fontForText = loadedFonts.notoDevanagari;
            fontNameForLog = "Noto Sans Devanagari";
          } else if (charCode >= 0x0D00 && charCode <= 0x0D7F && loadedFonts.notoMalayalam) { // Malayalam
            fontForText = loadedFonts.notoMalayalam;
            fontNameForLog = "Noto Sans Malayalam";
          } else if (loadedFonts.notoDevanagari) { // Fallback to Devanagari for other Indic
              fontForText = loadedFonts.notoDevanagari;
              fontNameForLog = "Noto Sans Devanagari (Indic Fallback)";
          } else if (loadedFonts.notosans) { // Further fallback for Indic
              fontForText = loadedFonts.notosans;
              fontNameForLog = "Noto Sans Regular (Indic Fallback)";
          }
        } 
        // Specific checks for Southeast Asian scripts
        else if (this.scriptCategory === 'southeastAsian') {
          const charCode = this.textType.charCodeAt(0);
          if (charCode >= 0x0E00 && charCode <= 0x0E7F && loadedFonts.notoThai) { // Thai
            fontForText = loadedFonts.notoThai;
            fontNameForLog = "Noto Sans Thai";
          } else if (loadedFonts.notoThai) { // Fallback for other SEA to Thai if available
              fontForText = loadedFonts.notoThai;
              fontNameForLog = "Noto Sans Thai (SEA Fallback)";
          } else if (loadedFonts.notosans) { // Further fallback for SEA
              fontForText = loadedFonts.notosans;
              fontNameForLog = "Noto Sans Regular (SEA Fallback)";
          }
        }
      } catch (e) {
        console.warn("Error during font mapping selection, using default font:", e);
        fontForText = null; // Will be handled by the fallback logic below
      }
      
      // NEW: If no specific font was found by the above checks for the script category,
      // then fontForText is still null. In this case, decide to use a digit or sign.
      if (!fontForText) {
        try {
          const useDigit = Math.random() < 0.5; // 50% chance to use a digit
          const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
          const signs = ['*', '+', '-', '=', '?', '!', '@', '#', '$', '%', '^', '&', '<', '>', '~', '/', '\\\\', '|'];

          if (useDigit && defaultFont) { // Use Helvetiker for digits
              this.textType = digits[Math.floor(Math.random() * digits.length)];
              fontForText = defaultFont; // Helvetiker
              fontNameForLog = "Helvetiker (digit fallback)";
          } else { // Use a sign. Try Noto Sans, then Helvetiker.
              this.textType = signs[Math.floor(Math.random() * signs.length)];
              if (loadedFonts.notosans) {
                  fontForText = loadedFonts.notosans;
                  fontNameForLog = "Noto Sans Regular (sign fallback)";
              } else if (defaultFont) {
                  fontForText = defaultFont;
                  fontNameForLog = "Helvetiker (sign fallback)";
              } else {
                  // Ultimate fallback - use empty font and a simple shape
                  fontForText = emptyFallbackFont;
                  fontNameForLog = "Empty fallback font";
              }
          }
        } catch (e) {
          console.warn("Error in fallback character selection:", e);
          // Set ultimate fallback to use a box instead
          fontForText = null;
        }
      }

      // ADDED: Ensure fontForText is valid, otherwise use a box
      if (!fontForText || typeof fontForText.generateShapes !== 'function') {
        console.warn(`No valid font available. Using box geometry fallback.`);
        
        try {
          // Use box geometry instead of text
          geometry = new THREE.BoxGeometry(this.dna.size * 0.7, this.dna.size * 0.7, this.dna.size * 0.2);
          material = new THREE.MeshPhongMaterial({ 
            color: threeColor, 
            transparent: true, 
            opacity: this.dna.opacity 
          });
          this.mesh = new THREE.Mesh(geometry, material);
        } catch (e) {
          console.error("Failed to create fallback mesh:", e);
          // Create an extremely simple fallback mesh that should work in any case
          const fallbackGeom = new THREE.BoxGeometry(this.dna.size, this.dna.size, this.dna.size);
          const fallbackMat = new THREE.MeshBasicMaterial({color: 0xffffff});
          this.mesh = new THREE.Mesh(fallbackGeom, fallbackMat);
        }
      } else {
          try {
              const charSize = this.dna.size * 1.0; 
              geometry = new THREE.TextGeometry(this.textType, { // this.textType might be a digit/sign now
                  font: fontForText,
                  size: charSize,
                  height: charSize / 10, 
                  curveSegments: 3, 
                  bevelEnabled: true,
                  bevelThickness: charSize / 50,
                  bevelSize: charSize / 100, 
                  bevelOffset: 0,
                  bevelSegments: 1 
              });

              geometry.computeBoundingBox();
              const textBoundingBox = geometry.boundingBox;
              const centerOffset = new THREE.Vector3(
                  -0.5 * (textBoundingBox.max.x - textBoundingBox.min.x),
                  -0.5 * (textBoundingBox.max.y - textBoundingBox.min.y),
                  -0.5 * (textBoundingBox.max.z - textBoundingBox.min.z) 
              );
              geometry.translate(centerOffset.x, centerOffset.y, centerOffset.z);
              
              material = new THREE.MeshPhongMaterial({
                  color: threeColor, // Use the new threeColor based on highlighting
                  shininess: 50,
                  transparent: true,
                  opacity: this.dna.opacity,
              });

              this.mesh = new THREE.Mesh(geometry, material);

          } catch (e) {
              console.warn(`Error creating 3D text geometry for type '${this.textType}' (original '${originalTextType}') with ${fontNameForLog}:`, e);
              
              // Fallback to a simple box
              try {
                geometry = new THREE.BoxGeometry(this.dna.size * 0.7, this.dna.size * 0.7, this.dna.size * 0.2);
                material = new THREE.MeshPhongMaterial({
                    color: threeColor,
                    transparent: true,
                    opacity: this.dna.opacity
                });
                this.mesh = new THREE.Mesh(geometry, material);
              } catch(e2) {
                console.error("Failed to create even fallback mesh, using minimal fallback:", e2);
                // Minimal possible fallback that should never fail
                const fallbackGeom = new THREE.BoxGeometry(this.dna.size, this.dna.size, this.dna.size);
                const fallbackMat = new THREE.MeshBasicMaterial({color: 0xffffff});
                this.mesh = new THREE.Mesh(fallbackGeom, fallbackMat);
              }
          }
      }
    }
    
    // ADDED: Final safety check to ensure this.mesh is defined
    if (!this.mesh) {
      console.error("Mesh creation totally failed, creating minimal mesh");
      const fallbackGeom = new THREE.BoxGeometry(this.dna.size, this.dna.size, this.dna.size);
      const fallbackMat = new THREE.MeshBasicMaterial({color: 0xffffff});
      this.mesh = new THREE.Mesh(fallbackGeom, fallbackMat);
    }

    // Mark this mesh as a letter organism for identification during cleanup
    if (this.mesh) {
      this.mesh.userData = { isLetterOrganism: true, organismId: this.id };
    }
    
    // Add the mesh to the THREE.js scene
    try {
      if (threeScene) threeScene.add(this.mesh);
    } catch (e) {
      console.error("Failed to add mesh to scene:", e);
    }
  }

  update(localDensity = 0) {
    // Word formation bias - organisms are attracted to others that would form common words
    this.applyWordFormationBias();
    // 3D movement and update
    this.vel.add(this.acc);
    this.vel.limit(this.dna.speed);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // Apply Focus/Resonance Tool Influence
    if (focusResonanceActive && focusResonancePosition) {
      let distToFocus = p5.Vector.dist(this.pos, focusResonancePosition);
      // Check if the organism is within the spherical radius of the focus tool
      if (distToFocus < focusResonanceRadius) {
        let forceToFocus = p5.Vector.sub(focusResonancePosition, this.pos);
        forceToFocus.normalize();
        
        // Apply a gentle force towards the center of the focus area
        // Use configuration value for strength
        let focusStrength = CONFIG.maxForce * CONFIG.wordSettings.focusResonanceStrength;
        forceToFocus.mult(focusStrength);
        this.applyForce(forceToFocus);

        // Apply velocity damping to encourage stabilization within the zone
        this.vel.mult(CONFIG.wordSettings.focusResonanceDamping);
      }
    }

    // Update 3D rotation
    this.rotation.x += this.dna.rotationSpeed * 0.5;
    this.rotation.y += this.dna.rotationSpeed;
    this.rotation.z += this.dna.rotationSpeed * 0.3;

    // Track position history for trail
    if (frameCount % 3 === 0) {
      this.trail.push(createVector(this.pos.x, this.pos.y, this.pos.z));
      if (this.trail.length > this.maxTrail) {
        this.trail.shift();
      }
    }

    // Age and energy management
    this.age++;
    this.energy -= map(
      this.dna.size,
      CONFIG.baseSize.min,
      CONFIG.baseSize.max,
      0.01,
      0.04
    );
    this.energy = constrain(this.energy, 0, 100);

    // Reproduction chance increases with age and energy
    if (this.age > 100 && this.energy > 60) {
      this.reproduction += this.dna.adaptability * 0.01;
    }

    // Try to reproduce
    if (this.reproduction > 1 && organisms.length < CONFIG.maxOrganisms) {
      this.reproduction = 0;

      // Create child with possible mutation
      let childX = this.pos.x + random(-20, 20);
      let childY = this.pos.y + random(-20, 20);
      let childZ = this.pos.z + random(-20, 20);

      // Stay within canvas and depth bounds
      childX = constrain(childX, -width / 2, width / 2);
      childY = constrain(childY, -height / 2, height / 2);
      childZ = constrain(childZ, CONFIG.depthRange.min, CONFIG.depthRange.max);

      let child = createOrganism(childX, childY, true);

      // Inherit traits from parent
      if (child) {
        child.pos.z = childZ;
        child.inheritFrom(this);
        metadata.generationCount++;
      }
    }

    // Depth preference behavior
    let depthForce = createVector(0, 0, this.dna.depthPreference * 0.05);
    this.applyForce(depthForce);

    // Boundary behavior (3D boundaries)
    this.checkEdges();

    // Metabolic sounds when energy changes significantly
    if (
      audioEnabled &&
      frameCount % 30 === 0 &&
      random() < 0.1 &&
      millis() - this.lastSound > 2000
    ) {
      this.playSound();
      this.lastSound = millis();
    }

    // Update state machine for complex behaviors
    this.stateCounter++;

    // State transitions based on environment and internal conditions
    if (this.stateCounter > 100) {
      this.stateCounter = 0;

      // Environmental response (density affects behavior)
      if (localDensity > 3) {
        // When crowded
        if (this.dna.specialization === "explorer") {
          this.state = "exploring"; // Explorers move away from crowds
        } else if (random() < 0.3) {
          this.state = random() < 0.5 ? "searching" : "grouping";
        }
      } else {
        // When isolated
        if (this.dna.specialization === "communicator") {
          this.state = "grouping"; // Communicators seek others
        } else {
          this.state =
            random() < this.dna.explorationFactor ? "exploring" : "searching";
        }
      }

      // Energy affects behavior
      if (this.energy < 30) {
        this.state = "searching"; // Low energy increases search behavior
      }

      // Store memory of current state and position
      if (this.memories.length > 5) this.memories.shift();
      this.memories.push({
        position: createVector(this.pos.x, this.pos.y, this.pos.z),
        state: this.state,
        frame: frameCount,
      });
    }

    // NEW: Add a slight dampening force to reduce chaotic movement
    const dampening = this.vel.copy();
    dampening.mult(-0.002); // Further reduced dampening for maximum freedom of movement
    this.applyForce(dampening);
  }

  // 3D display method
  display() {
    try {
      if (this.mesh) {
        try {
          // Update mesh position and rotation
          this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
          
          // Apply script-specific animation styles
          try {
            switch(this.scriptCategory) {
              case "greek":
                this.mesh.rotation.x = this.rotation.x;
                this.mesh.rotation.y = this.rotation.y + sin(frameCount * 0.01 + this.id) * 0.1;
                this.mesh.rotation.z = this.rotation.z; 
                break;
              case "arabic":
                this.mesh.rotation.x = this.rotation.x + sin(frameCount * 0.02 + this.id) * 0.15;
                this.mesh.rotation.y = this.rotation.y + cos(frameCount * 0.015) * 0.2;
                this.mesh.rotation.z = this.rotation.z + sin(frameCount * 0.01) * 0.1;
                break;
              case "hebrew":
                this.mesh.rotation.x = this.rotation.x;
                this.mesh.rotation.y = this.rotation.y - sin(frameCount * 0.015) * 0.2; 
                this.mesh.rotation.z = this.rotation.z + cos(frameCount * 0.02 + this.id) * 0.1;
                break;
              case "eastAsian":
                this.mesh.rotation.x = this.rotation.x + sin(frameCount * 0.025) * 0.2;
                this.mesh.rotation.y = this.rotation.y;
                this.mesh.rotation.z = this.rotation.z + cos(frameCount * 0.01 + this.id) * 0.05;
                break;
              case "indic":
                this.mesh.rotation.x = this.rotation.x + sin(frameCount * 0.02) * 0.1;
                this.mesh.rotation.y = this.rotation.y + cos(frameCount * 0.025 + this.id) * 0.2;
                this.mesh.rotation.z = this.rotation.z;
                break;
              case "southeastAsian":
                this.mesh.rotation.x = this.rotation.x + cos(frameCount * 0.015) * 0.15;
                this.mesh.rotation.y = this.rotation.y + sin(frameCount * 0.01 + this.id) * 0.1;
                this.mesh.rotation.z = this.rotation.z;
                break;
              default:
                this.mesh.rotation.x = this.rotation.x;
                this.mesh.rotation.y = this.rotation.y;
                this.mesh.rotation.z = this.rotation.z;
            }
          } catch (e) {
            console.warn("Error setting rotation:", e);
            // Set simple rotation if the complex one fails
            try {
              this.mesh.rotation.set(0, 0, 0);
            } catch (e2) {
              console.error("Failed to set even basic rotation:", e2);
            }
          }

          // Determine color based on script category and highlighting for dynamic updates
          try {
            let currentOrganismColorRGB;
            
            // Check if we're in all-white mode (default)
            if (highlightedScriptCategory === "all_white") {
              // In all-white mode, everything is white
              currentOrganismColorRGB = WHITE_COLOR_RGB;
            } 
            else {
              // We're in a specific language highlight mode
              if (this.scriptCategory === highlightedScriptCategory) {
                // This is the specifically highlighted script category
                currentOrganismColorRGB = SCRIPT_HIGHLIGHT_COLORS[this.scriptCategory] || WHITE_COLOR_RGB;
              } 
              else {
                // All other script categories should be white when a specific one is highlighted
                currentOrganismColorRGB = WHITE_COLOR_RGB;
              }
            }
            
            // Safely check if material exists and is writable
            if (this.mesh.material && this.mesh.material.color && typeof this.mesh.material.color.setRGB === 'function') {
              if (Array.isArray(currentOrganismColorRGB) && currentOrganismColorRGB.length >= 3) {
                const r = currentOrganismColorRGB[0]/255;
                const g = currentOrganismColorRGB[1]/255;
                const b = currentOrganismColorRGB[2]/255;
                
                // Check for valid RGB values
                if (isFinite(r) && isFinite(g) && isFinite(b)) {
                  this.mesh.material.color.setRGB(r, g, b);
                }
              }
            }
          } catch (e) {
            console.warn("Error setting color:", e);
            // Try to set a default color if the dynamic one fails
            try {
              if (this.mesh.material && this.mesh.material.color) {
                this.mesh.material.color.set(0xffffff);
              }
            } catch (e2) {
              console.error("Failed to set even default color:", e2);
            }
          }

          // Apply opacity with safety checks
          try {
            if (this.mesh.material) {
              let baseOpacity = this.dna.opacity; // Assumed to be in 0-1 range
              let currentOpacity = baseOpacity;

              // Fade in when young
              if (this.age < 30) {
                currentOpacity = map(this.age, 0, 30, 0, baseOpacity);
              }
              // Fade out when near death
              if (this.age > this.dna.lifespan * 0.85) {
                currentOpacity = map(
                  this.age,
                  this.dna.lifespan * 0.85,
                  this.dna.lifespan,
                  currentOpacity, // Start from current Opacity before fading
                  0
                );
              }
              
              // Ensure opacity is a valid value
              if (isFinite(currentOpacity)) {
                this.mesh.material.opacity = constrain(currentOpacity, 0, 1);
                this.mesh.material.transparent = true;
              }
            }
          } catch (e) {
            console.warn("Error setting opacity:", e);
          }

          // Apply dynamic scale based on energy and script
          try {
            if (this.mesh.scale && typeof this.mesh.scale.set === 'function') {
              let energyFactor = map(this.energy, 0, 100, 0.7, 1.1);
              
              // Script-specific scaling behaviors
              if (this.scriptCategory === "arabic" || this.scriptCategory === "southeastAsian") {
                energyFactor *= (1 + sin(frameCount * 0.05 + this.id) * 0.1);
              } else if (this.scriptCategory === "eastAsian") {
                energyFactor *= (1 + sin(frameCount * 0.02 + this.id) * 0.05);
              }
              
              // Ensure scale factor is valid
              if (isFinite(energyFactor) && energyFactor > 0) {
                this.mesh.scale.set(energyFactor, energyFactor, energyFactor);
              } else {
                // Fallback to default scale
                this.mesh.scale.set(1, 1, 1);
              }
            }
          } catch (e) {
            console.warn("Error setting scale:", e);
            // Try to set a default scale
            try {
              this.mesh.scale.set(1, 1, 1);
            } catch (e2) {
              console.error("Failed to set even default scale:", e2);
            }
          }
          
          // Apply emissive effect with safety checks
          try {
            if (this.mesh.material && this.mesh.material.emissive) {
              if (this.inCluster && this.clusterId) {
                // Organism is in a cluster - apply cluster glow
                const clusterColorHex = CONFIG.wordSettings.clusterGlowColor || 0xFFFF00;
                this.mesh.material.emissive.setHex(clusterColorHex);
                this.mesh.material.emissiveIntensity = this.clusterGlowIntensity;

                // Optional: Subtle size pulsing for clustered organisms
                const breathFactor = 1 + sin(frameCount * CONFIG.wordSettings.clusterBreathingRate + this.id) * 0.05;
                // Apply breathFactor based on current scale to avoid issues if scale is non-uniform or animated elsewhere
                let baseScale = this.mesh.scale.x; // Assuming uniform scale or using x as reference
                // This direct multiplication might be an issue if this.mesh.scale is already being animated by script-specific logic.
                // For KISS, we'll keep it simple but be aware of potential conflict.
                // A safer way might be to store an original scale and apply breathFactor to that.
                // this.mesh.scale.set(baseScale * breathFactor, baseScale * breathFactor, baseScale * breathFactor);
                // Simpler: this.mesh.scale.multiplyScalar(breathFactor); // if baseScale is always 1 or relative pulsing is OK

              } else if (this.clusterGlowIntensity < 0.01) {
                // Organism is NOT in a cluster, AND any previous cluster glow has faded out.
                // Now, apply regular script-specific emissive effects or reset.
                let regularEmissiveSet = false;
                if (frameCount % 3 === 0) { // Keep frameCount modulation
                  switch (this.scriptCategory) {
                    case "arabic":
                    case "indic":
                      const pulseValue = (sin(frameCount * 0.05 + this.id) * 0.1) + 0.15;
                      if (isFinite(pulseValue)) {
                        // For simplicity, let these scripts glow with their default material color or a predefined bright emissive
                        // this.mesh.material.emissive.copy(this.mesh.material.color); // Example: glow with base color
                        // Or use a specific color for these scripts' pulse if defined
                        this.mesh.material.emissiveIntensity = pulseValue;
                        regularEmissiveSet = true;
                      }
                      break;
                    // Add other script-specific emissive cases here if needed
                  }
                }

                if (!regularEmissiveSet) {
                  // If no specific script emissive was set, reset to black
                  this.mesh.material.emissive.setRGB(0, 0, 0);
                  this.mesh.material.emissiveIntensity = 0;
                }
              } 
              // If this.clusterGlowIntensity >= 0.01 and not inCluster, it means the glow is still fading out.
              // In this case, we do nothing, allowing the lerp in update() to continue fading it.
            }
          } catch (e) {
            console.warn("Error setting emissive properties:", e);
          }
        } catch (e) {
          console.error("Error in mesh properties update:", e);
          // Try to recreate the mesh if serious issues occur
          try {
            if (threeScene && this.mesh) {
              threeScene.remove(this.mesh);
              this.mesh = null;
              this.createVisualRepresentation();
            }
          } catch (e2) {
            console.error("Failed to recreate mesh:", e2);
          }
        }
      } else {
        // If no mesh exists, try to create it
        this.createVisualRepresentation();
      }

      // Calculate trail with safety checks
      try {
        // Calculate color and alpha for the trail (p5.js context)
        let trailColorRGB_p5;
        
        // Use same coloring logic as for the 3D objects to be consistent
        if (highlightedScriptCategory === "all_white") {
          // In all-white mode, everything is white
          trailColorRGB_p5 = WHITE_COLOR_RGB;
        } 
        else {
          // We're in a specific language highlight mode
          if (this.scriptCategory === highlightedScriptCategory) {
            // This is the specifically highlighted script category
            trailColorRGB_p5 = SCRIPT_HIGHLIGHT_COLORS[this.scriptCategory] || WHITE_COLOR_RGB;
          } 
          else {
            // All other script categories should be white when a specific one is highlighted
            trailColorRGB_p5 = WHITE_COLOR_RGB;
          }
        }
        
        // Ensure trail color array is valid
        if (!Array.isArray(trailColorRGB_p5) || trailColorRGB_p5.length < 3) {
          trailColorRGB_p5 = [255, 255, 255]; // White fallback
        }

        let trailAlpha_p5 = 200 * this.dna.opacity; // p5 alpha is 0-255

        if (this.age < 30) {
          trailAlpha_p5 = map(this.age, 0, 30, 0, trailAlpha_p5);
        }
        if (this.age > this.dna.lifespan * 0.85) {
          trailAlpha_p5 = map(
            this.age,
            this.dna.lifespan * 0.85,
            this.dna.lifespan,
            trailAlpha_p5,
            0
          );
        }
        
        // Ensure alpha is valid
        if (!isFinite(trailAlpha_p5)) {
          trailAlpha_p5 = 100; // Default alpha
        }

        let trailStyle = "default";
        switch(this.scriptCategory) {
          case "greek": trailStyle = "classical"; break;
          case "arabic": case "hebrew": trailStyle = "flowing"; break;
          case "eastAsian": trailStyle = "structured"; break;
          case "indic": case "southeastAsian": trailStyle = "ornate"; break;
        }

        if (this.trail.length > 2) {
          push(); 
          noFill();
          if (trailStyle === "flowing") {
            stroke(trailColorRGB_p5[0], trailColorRGB_p5[1], trailColorRGB_p5[2], trailAlpha_p5 * 0.4);
            strokeWeight(1.2);
            curveTightness(0.5);
            beginShape();
            for (let i = 0; i < this.trail.length; i++) {
              curveVertex(this.trail[i].x, this.trail[i].y, this.trail[i].z);
            }
            endShape();
          } else if (trailStyle === "structured") {
            stroke(trailColorRGB_p5[0], trailColorRGB_p5[1], trailColorRGB_p5[2], trailAlpha_p5 * 0.3);
            strokeWeight(1);
            beginShape(LINES);
            for (let i = 1; i < this.trail.length; i++) {
              vertex(this.trail[i-1].x, this.trail[i-1].y, this.trail[i-1].z);
              vertex(this.trail[i].x, this.trail[i].y, this.trail[i].z);
            }
            endShape();
          } else if (trailStyle === "ornate") {
            stroke(trailColorRGB_p5[0], trailColorRGB_p5[1], trailColorRGB_p5[2], trailAlpha_p5 * 0.35);
            strokeWeight(0.9);
            beginShape();
            for (let i = 0; i < this.trail.length; i++) {
              vertex(this.trail[i].x, this.trail[i].y, this.trail[i].z);
            }
            endShape();
            if (frameCount % 3 === 0 && this.trail.length > 3) {
              for (let i = 2; i < this.trail.length-1; i += 3) {
                push();
                translate(this.trail[i].x, this.trail[i].y, this.trail[i].z);
                rotateX(frameCount * 0.01);
                rotateY(frameCount * 0.02);
                stroke(trailColorRGB_p5[0], trailColorRGB_p5[1], trailColorRGB_p5[2], trailAlpha_p5 * 0.2);
                noFill();
                circle(0, 0, 3);
                pop();
              }
            }
          } else if (trailStyle === "classical") {
            stroke(trailColorRGB_p5[0], trailColorRGB_p5[1], trailColorRGB_p5[2], trailAlpha_p5 * 0.3);
            strokeWeight(1);
            beginShape();
            for (let i = 0; i < this.trail.length; i++) {
              vertex(this.trail[i].x, this.trail[i].y, this.trail[i].z);
            }
            endShape();
          } else {
            stroke(trailColorRGB_p5[0], trailColorRGB_p5[1], trailColorRGB_p5[2], trailAlpha_p5 * 0.25);
            strokeWeight(0.8);
            beginShape();
            for (let i = 0; i < this.trail.length; i++) {
              vertex(this.trail[i].x, this.trail[i].y, this.trail[i].z);
            }
            endShape();
          }
          pop(); 
        }
      } catch (e) {
        console.warn("Error rendering trail:", e);
      }
    } catch (e) {
      console.error("Critical error in display method:", e);
    }
  }

  // Add the rest of the organism methods
  // ...

  // Method to check 3D boundaries
  checkEdges() {
    // Bounce off x edges
    if (this.pos.x > width / 2 || this.pos.x < -width / 2) {
      this.vel.x *= -0.8;
      this.pos.x = constrain(this.pos.x, -width / 2, width / 2);
    }

    // Bounce off y edges
    if (this.pos.y > height / 2 || this.pos.y < -height / 2) {
      this.vel.y *= -0.8;
      this.pos.y = constrain(this.pos.y, -height / 2, height / 2);
    }

    // Bounce off z edges (depth)
    if (
      this.pos.z > CONFIG.depthRange.max ||
      this.pos.z < CONFIG.depthRange.min
    ) {
      this.vel.z *= -0.8;
      this.pos.z = constrain(
        this.pos.z,
        CONFIG.depthRange.min,
        CONFIG.depthRange.max
      );
    }
  }

  // Apply a force to the organism
  applyForce(force) {
    // F = ma, so divide by mass
    let f = p5.Vector.div(force, this.dna.mass);
    this.acc.add(f);
  }

  // Word formation bias - attract organisms toward others that would form common words
  applyWordFormationBias() {
    if (!this.textType) return;
    
    const searchRadius = CONFIG.connectionDistance * 2; // Use a larger radius for word formation
    const wordFormationForce = 0.02; // Gentle attraction force
    
    // Common word patterns that this organism could help complete
    const commonStartingWords = {
      't': ['the', 'to', 'that', 'this', 'then', 'they', 'time', 'take', 'tell', 'talk', 'turn', 'try', 'top', 'two', 'ten'],
      'a': ['and', 'all', 'are', 'an', 'as', 'at', 'any', 'ask', 'art', 'add', 'act', 'age', 'air', 'arm'],
      'w': ['with', 'will', 'was', 'were', 'what', 'when', 'who', 'why', 'way', 'we', 'well', 'went', 'want', 'work', 'word', 'world', 'water', 'war', 'win'],
      'f': ['for', 'from', 'first', 'find', 'feel', 'far', 'fast', 'full', 'fun', 'fire', 'fish', 'five', 'four', 'fly', 'face'],
      'h': ['his', 'her', 'he', 'have', 'had', 'has', 'how', 'here', 'help', 'hand', 'home', 'house', 'hope', 'head', 'heart', 'high', 'hot'],
      'i': ['is', 'it', 'in', 'if', 'into', 'its', 'idea', 'ice'],
      's': ['she', 'say', 'see', 'so', 'some', 'such', 'said', 'same', 'still', 'show', 'small', 'sun', 'sea', 'sit', 'set', 'six'],
      'b': ['but', 'be', 'been', 'by', 'big', 'boy', 'back', 'best', 'book', 'both', 'box', 'bad', 'buy', 'ball'],
      'c': ['can', 'come', 'could', 'call', 'came', 'car', 'cat', 'cut', 'city', 'close', 'cold', 'color'],
      'n': ['not', 'now', 'new', 'no', 'name', 'need', 'next', 'near', 'never', 'nine', 'night'],
      'o': ['one', 'of', 'on', 'or', 'out', 'our', 'over', 'old', 'only', 'open', 'other', 'own'],
      'l': ['like', 'look', 'long', 'last', 'let', 'love', 'life', 'live', 'left', 'light', 'line', 'little', 'low'],
      'g': ['get', 'go', 'give', 'got', 'good', 'great', 'girl', 'game', 'green', 'ground', 'group'],
      'm': ['make', 'may', 'me', 'my', 'man', 'much', 'more', 'most', 'made', 'many', 'must', 'move', 'mind', 'money', 'mother', 'moon'],
      'y': ['you', 'your', 'yes', 'yet', 'year', 'young'],
      'd': ['do', 'day', 'did', 'down', 'does', 'door', 'dog', 'draw', 'dream', 'drive', 'drop', 'dry', 'dark'],
      'p': ['play', 'put', 'part', 'people', 'place', 'point', 'power', 'paper', 'page', 'pay', 'poor', 'push'],
      'r': ['run', 'right', 'read', 'real', 'room', 'red', 'road', 'rock', 'rain', 'rise', 'rich', 'round'],
      'k': ['know', 'keep', 'kind', 'key', 'king', 'kill'],
      'j': ['just', 'job', 'jump', 'join', 'joy'],
      'v': ['very', 'voice', 'visit', 'view', 'value'],
      'u': ['up', 'us', 'use', 'under', 'until', 'upon', 'usual'],
      'e': ['end', 'even', 'ever', 'every', 'each', 'early', 'earth', 'eat', 'eye', 'easy']
    };
    
    const myChar = this.textType.toLowerCase();
    const targetWords = commonStartingWords[myChar] || [];
    
    if (targetWords.length === 0) return;
    
    // Look for nearby organisms that could help form these words
    for (let other of organisms) {
      if (other === this || !other.textType) continue;
      
      const d = dist(this.pos.x, this.pos.y, this.pos.z, other.pos.x, other.pos.y, other.pos.z);
      if (d > searchRadius) continue;
      
      // Check if this organism could help complete any target words
      for (let targetWord of targetWords) {
        if (targetWord.length > 1 && targetWord[1] === other.textType.toLowerCase()) {
          // Found a potential word completion, apply attractive force
          let force = p5.Vector.sub(other.pos, this.pos);
          force.normalize();
          force.mult(wordFormationForce);
          this.applyForce(force);
          break; // Only apply one word formation force per organism
        }
      }
    }
  }

  // Check if organism has died
  isDead() {
    return this.age > this.dna.lifespan || this.energy <= 0;
  }

  // React to external stimulus (like mouse)
  react(mx, my) {
    // Calculate distance to stimulus in 2D (x, y)
    let d = dist(this.pos.x, this.pos.y, mx, my);

    // If within reaction distance
    if (d < 150) {
      // Vector pointing away from stimulus
      let away = createVector(this.pos.x - mx, this.pos.y - my, 0);
      away.normalize();
      away.mult(0.5); // Reaction strength

      // Apply force
      this.applyForce(away);

      // Change state in response
      if (random() < 0.2) {
        this.state = "exploring";
        this.stateCounter = 0;
      }
    }
  }

  // Make sound based on organism properties
  playSound() {
    if (!audioEnabled) return;

    try {
      // Calculate pitch based on size and energy
      let sizeVal = map(
        this.dna.size,
        CONFIG.baseSize.min,
        CONFIG.baseSize.max,
        200,
        100
      );
      let freq = sizeVal + this.energy * 0.5;

      // Calculate pan based on x position (3D stereo effect)
      let pan = map(this.pos.x, -width / 2, width / 2, -1, 1);

      // Play sound
      playSound(freq, pan);
    } catch (e) {
      console.warn("Error playing sound:", e);
    }
  }

  // Mutate organism properties for evolution
  mutate() {
    // Only mutate if random() < mutation rate
    if (random() < this.dna.mutationRate) {
      // Choose a property to mutate
      let choices = [
        "size",
        "speed",
        "colorIndex",
        "type",
        "opacity",
        "attraction",
      ];
      let prop = random(choices);

      // Apply mutation
      switch (prop) {
        case "size":
          this.dna.size = constrain(
            this.dna.size + random(-5, 5),
            CONFIG.baseSize.min,
            CONFIG.baseSize.max
          );
          break;
        case "speed":
          this.dna.speed = constrain(
            this.dna.speed + random(-0.3, 0.3),
            CONFIG.baseSpeed.min,
            CONFIG.baseSpeed.max
          );
          break;
        case "colorIndex":
          this.dna.colorIndex = floor(random(selectedPalette.length));
          break;
        case "type":
          // For type mutation, use the same multilingual character pool as constructor
          const currentScript = this.scriptCategory;
          
          // 60% chance to stay within the same script family
          if (random() < 0.6) {
            // Find all characters from the same script
            const sameScriptChars = CONFIG.types.filter(char => 
              this.getScriptCategory(char) === currentScript
            );
            
            if (sameScriptChars.length > 0) {
              this.dna.type = random(sameScriptChars);
              this.textType = this.dna.type;
            } else {
              // Fallback to random character from CONFIG.types
              this.dna.type = random(CONFIG.types);
              this.textType = this.dna.type;
              this.scriptCategory = this.getScriptCategory(this.textType);
            }
          } else {
            // 80% chance to use English letters (increased from 40% for better word formation)
            const multilingualCharacterPool = [];
            
            // Common English letters - heavily weighted toward most frequent letters
            const commonEnglishLetters = [
              // Vowels - very high frequency for word formation
              "a", "a", "a", "a", "a", "a", "e", "e", "e", "e", "e", "e", "e", "e", "i", "i", "i", "i", "o", "o", "o", "o", "u", "u", "u",
              // Most common consonants for popular words
              "t", "t", "t", "t", "t", "n", "n", "n", "n", "s", "s", "s", "s", "r", "r", "r", "r", "h", "h", "h", "l", "l", "l", "d", "d", "d", 
              // Common word starters and connectors
              "c", "c", "c", "m", "m", "m", "p", "p", "b", "b", "f", "f", "g", "g", "w", "w", "w", "y", "y",
              // Less common but still important
              "v", "k", "j", "x", "q", "z"
            ];
            
            // Common Arabic/Persian letters
            const commonArabicLetters = [
              "ا", "ا", "ا", "ب", "ب", "ت", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ر", "ز", "س", "س", "ش", "ص", "ض", "ط", "ظ",
              "ع", "ع", "غ", "ف", "ق", "ک", "ک", "ل", "ل", "م", "م", "ن", "ن", "ه", "ه", "و", "و", "ی", "ی",
              "پ", "چ", "ژ", "گ", "آ", "أ", "إ", "ة", "ى"
            ];
            
            // Other script letters
            const otherScriptLetters = [
              "你", "好", "我", "是", "的", "人", "中", "国", "爱", "学",
              "अ", "आ", "इ", "क", "ख", "ग", "म", "न", "र", "स",
              "а", "б", "в", "г", "д", "е", "и", "к", "л", "м", "н", "о", "п", "р", "с", "т"
            ];
            
            // Build the multilingual pool - heavily favor English
            multilingualCharacterPool.push(...commonEnglishLetters);
            multilingualCharacterPool.push(...commonEnglishLetters); // Add English twice for higher probability
            multilingualCharacterPool.push(...commonArabicLetters.slice(0, 5)); // Reduced Arabic
            multilingualCharacterPool.push(...otherScriptLetters.slice(0, 3)); // Reduced other scripts
            
            // Select character from the multilingual pool
            this.dna.type = random(multilingualCharacterPool);
            this.textType = this.dna.type;
            this.scriptCategory = this.getScriptCategory(this.textType);
          }
          
          // Recreate visual with new character
          if (this.mesh) {
            this.removeMesh();
          }
          this.createVisualRepresentation();
          break;
        case "opacity":
          this.dna.opacity = constrain(
            this.dna.opacity + random(-0.1, 0.1),
            0.5,
            1
          );
          break;
        case "attraction":
          this.dna.attraction = !this.dna.attraction;
          break;
        case "rotationSpeed": // 3D specific mutation
          this.dna.rotationSpeed = constrain(
            this.dna.rotationSpeed + random(-0.01, 0.01),
            -0.03,
            0.03
          );
          break;
        case "depthPreference": // 3D specific mutation
          this.dna.depthPreference = constrain(
            this.dna.depthPreference + random(-0.5, 0.5),
            -1,
            1
          );
          break;
      }

      // 3D specific mutations - additional chance to mutate 3D properties
      if (random() < 0.3) {
        if (random() < 0.5) {
          this.dna.rotationSpeed = constrain(
            this.dna.rotationSpeed + random(-0.01, 0.01),
            -0.03,
            0.03
          );
        } else {
          this.dna.depthPreference = constrain(
            this.dna.depthPreference + random(-0.5, 0.5),
            -1,
            1
          );
        }
      }
    }
  }

  // Inherit traits from parent organism
  inheritFrom(parent) {
    // Copy most DNA from parent with small variations
    this.dna.size = constrain(
      parent.dna.size + random(-2, 2),
      CONFIG.baseSize.min,
      CONFIG.baseSize.max
    );

    this.dna.speed = constrain(
      parent.dna.speed + random(-0.1, 0.1),
      CONFIG.baseSpeed.min,
      CONFIG.baseSpeed.max
    );

    this.dna.mass = constrain(
      parent.dna.mass + random(-0.5, 0.5),
      CONFIG.baseMass.min,
      CONFIG.baseMass.max
    );

    // Visual traits
    this.dna.colorIndex = parent.dna.colorIndex; // Inherit color
    if (random() < 0.1)
      this.dna.colorIndex = floor(random(selectedPalette.length)); // Small chance to change

    // Handle text character inheritance
    if (random() < 0.8) {
      // 80% chance to inherit parent's character
      this.dna.type = parent.dna.type;
      this.textType = parent.dna.type;
    } else {
      // 20% chance to mutate, but try to preserve script family
      const parentScript = this.getScriptCategory(parent.dna.type);
      
      // Find all characters from the same script
      const sameScriptChars = CONFIG.types.filter(char => 
        this.getScriptCategory(char) === parentScript
      );
      
      // If we found characters in the same script, choose one
      if (sameScriptChars.length > 0) {
        this.dna.type = random(sameScriptChars);
      } else {
        // Otherwise just pick a random character
        this.dna.type = random(CONFIG.types);
      }
      
      this.textType = this.dna.type;
    }
    
    // Update script category
    this.scriptCategory = this.getScriptCategory(this.textType);
    
    // If the mesh already exists, remove it and create a new one
    if (this.mesh) {
      this.removeMesh();
    }
    
    // Create new visual representation
    this.createVisualRepresentation();

    this.dna.opacity = constrain(
      parent.dna.opacity + random(-0.05, 0.05),
      0.5,
      1
    );

    // Behavioral traits
    this.dna.attraction = parent.dna.attraction;
    if (random() < 0.1) this.dna.attraction = !parent.dna.attraction; // Small chance to flip

    this.dna.socialFactor = constrain(
      parent.dna.socialFactor + random(-0.1, 0.1),
      0.1,
      1
    );
    this.dna.explorationFactor = constrain(
      parent.dna.explorationFactor + random(-0.1, 0.1),
      0.1,
      1
    );

    // 3D specific traits
    this.dna.depthPreference = constrain(
      parent.dna.depthPreference + random(-0.2, 0.2),
      -1,
      1
    );

    this.dna.rotationSpeed = constrain(
      parent.dna.rotationSpeed + random(-0.005, 0.005),
      -0.03,
      0.03
    );

    // Advanced traits
    this.dna.specialization = parent.dna.specialization;
    if (random() < 0.05) {
      this.dna.specialization = random([
        "gatherer",
        "explorer",
        "defender",
        "communicator",
      ]);
    }

    this.dna.adaptability = constrain(
      parent.dna.adaptability + random(-0.05, 0.05),
      0.1,
      1
    );
    this.dna.energyEfficiency = constrain(
      parent.dna.energyEfficiency + random(-0.05, 0.05),
      0.3,
      1
    );
    this.dna.mutationRate = constrain(
      parent.dna.mutationRate + random(-0.01, 0.01),
      0.01,
      0.2
    );

    this.dna.lifespan = constrain(
      parent.dna.lifespan + random(-50, 50),
      CONFIG.baseLifespan.min,
      CONFIG.baseLifespan.max
    );

    this.dna.signalStrength = constrain(
      parent.dna.signalStrength + random(-0.1, 0.1),
      0.1,
      1
    );

    // Apply random mutation
    if (random() < this.dna.mutationRate * 2) {
      this.mutate();
    }
  }

  // When organism dies, remove mesh from scene
  removeMesh() {
    try {
      if (this.mesh) {
        if (threeScene) {
          threeScene.remove(this.mesh);
        }
        
        // Safely dispose of geometry
        if (this.mesh.geometry && typeof this.mesh.geometry.dispose === 'function') {
          this.mesh.geometry.dispose();
        }
        
        // Safely dispose of material (handle both single and array materials)
        if (this.mesh.material) {
          if (Array.isArray(this.mesh.material)) {
            this.mesh.material.forEach(mat => {
              if (mat && typeof mat.dispose === 'function') {
                mat.dispose();
              }
            });
          } else if (typeof this.mesh.material.dispose === 'function') {
            this.mesh.material.dispose();
          }
        }
        
        this.mesh = null;
      }
    } catch (e) {
      console.error("Error in removeMesh:", e);
      // Ensure mesh reference is cleared even if disposal fails
      this.mesh = null;
    }
  }
} // Correctly closing the Organism class here

function draw() {
  // Clear and set background first
  setGradientBackground();

  // Update and draw Focus/Resonance tool visuals if active
  if (focusResonanceActive) {
    // Update position continuously if active (might be redundant if only updated on drag, but good for key-based activation later)
    // For now, position is updated in mousePressed/mouseDragged
  }
  drawFocusResonanceVisual(); // Draw the visual if active
  
  // Display any confirmed words (with error handling) - only in letter mode
  if (!isVerseMode) {
    try {
      displayConfirmedWords();
    } catch (error) {
      console.warn("Error displaying confirmed words:", error);
    }
  } else {
    // In verse mode, display verse words and their interaction hints
    displayVerseWords();
  }

  // Camera position for both p5.js and Three.js
  let finalEyeX, finalEyeY, finalEyeZ;
  const centerX = 0;
  const centerY = 0;
  const centerZ = 0;

  // Calculate camera position using spherical coordinates
  // cameraRotation.x is the elevation angle (pitch)
  // cameraRotation.y is the azimuth angle (yaw)
  // cameraZoom is the distance from the origin (0,0,0)
  finalEyeY = cameraZoom * sin(cameraRotation.x); // Using p5.js sin/cos
  const radiusOnXZPlane = cameraZoom * cos(cameraRotation.x);
  finalEyeX = radiusOnXZPlane * sin(cameraRotation.y);
  finalEyeZ = radiusOnXZPlane * cos(cameraRotation.y);

  // Update p5.js camera (for p5-drawn elements like trails, environment grid)
  camera(finalEyeX, finalEyeY, finalEyeZ, centerX, centerY, centerZ, 0, 1, 0);

  // Update Three.js camera (for Three.js meshes)
  threeCamera.position.set(finalEyeX, finalEyeY, finalEyeZ);
  threeCamera.lookAt(new THREE.Vector3(centerX, centerY, centerZ)); // Look at the scene origin

  // Process camera for exhibition mode if enabled
  if (cameraInteraction.enabled) {
    processCamera();

    // Show camera debug view if enabled
    if (cameraInteraction.debugView) {
      displayCameraDebug();
    }
  }

  // Update and display the ecosystem - only in letter mode
  if (!isVerseMode) {
    ecosystem.display();

    // Update the organisms
    updateOrganisms();

    // Draw connections between organisms
    drawConnections();
  }

  // Draw 3D environment elements
  drawEnvironment();

  // Apply post-processing effects
  if (CONFIG.postFx) {
    applyPostProcessing();
  }

  // Update statistics display
  if (frameCount % 30 === 0) {
    updateStats();
  }

  // Render the Three.js scene
  try {
    // Check if all required components are ready for rendering
    if (threeRenderer && threeScene && threeCamera) {
      threeRenderer.resetState(); // Reset WebGL state before Three.js renders
      threeRenderer.render(threeScene, threeCamera);
    } else {
      console.warn("THREE.js renderer, scene or camera not ready for rendering");
    }
  } catch (e) {
    console.error("Error rendering THREE.js scene:", e);
  }

  // Call drawFocusResonanceVisual LAST to try and avoid being overwritten
  // and ensure p5.js context is active for it.
  if (focusResonanceActive) {
      drawFocusResonanceVisual(); // Draw the visual if active
  }

  // After all existing objects are drawn, add our letter flow visualization - only in letter mode
  if (!isVerseMode) {
    drawLetterFlow();
  }
}

// Draw 3D environment elements
function drawEnvironment() {
  push();
  noFill();
  stroke(
    selectedPalette[1][0],
    selectedPalette[1][1],
    selectedPalette[1][2],
    40
  );
  strokeWeight(0.5);

  // Draw a grid on the "floor" (bottom of the world)
  let gridSize = 80;
  let gridExtent = 1000;

  // Horizontal grid lines
  for (let x = -gridExtent; x <= gridExtent; x += gridSize) {
    beginShape();
    vertex(x, -gridExtent, CONFIG.depthRange.min);
    vertex(x, gridExtent, CONFIG.depthRange.min);
    endShape();
  }

  // Vertical grid lines
  for (let y = -gridExtent; y <= gridExtent; y += gridSize) {
    beginShape();
    vertex(-gridExtent, y, CONFIG.depthRange.min);
    vertex(gridExtent, y, CONFIG.depthRange.min);
    endShape();
  }

  // Draw depth markers
  let depthStep = 100;
  for (
    let z = CONFIG.depthRange.min;
    z <= CONFIG.depthRange.max;
    z += depthStep
  ) {
    push();
    translate(0, 0, z);
    stroke(
      selectedPalette[1][0],
      selectedPalette[1][1],
      selectedPalette[1][2],
      map(z, CONFIG.depthRange.min, CONFIG.depthRange.max, 30, 10)
    );

    // Draw a subtle plane at each depth level
    if (frameCount % 2 === 0) {
      // Only render every other frame for performance
      beginShape(LINES);
      for (let i = 0; i < 10; i++) {
        let x1 = random(-width / 2, width / 2);
        let y1 = random(-height / 2, height / 2);
        let x2 = x1 + random(-100, 100);
        let y2 = y1 + random(-100, 100);
        vertex(x1, y1, 0);
        vertex(x2, y2, 0);
      }
      endShape();
    }
    pop();
  }

  // Add some depth markers/axis indicators
  stroke(
    selectedPalette[3][0],
    selectedPalette[3][1],
    selectedPalette[3][2],
    120
  );
  strokeWeight(2);

  // Z-axis indicator is removed to create a cleaner visual space

  // Removing elliptical markers as well for a cleaner composition

  pop();
}

// Modified gradient background for 3D (simpler version)
function setGradientBackground() {
  // Clear the background first
  clear();

  // Set basic ambient lighting
  ambientLight(
    CONFIG.ambientLightLevel,
    CONFIG.ambientLightLevel,
    CONFIG.ambientLightLevel
  );

  // Add gradient background using a background plane
  // We'll draw a large plane at the back of our scene with a gradient shader
  push();
  noStroke();

  // Move far back in the Z dimension
  translate(0, 0, CONFIG.depthRange.min - 500);

  // Create gradient plane large enough to cover viewport
  let planeWidth = width * 2;
  let planeHeight = height * 2;

  // Create gradient colors from the palette
  let bgColor = selectedPalette[0];
  let accentColor = selectedPalette[1];

  // Draw using custom shader or use a simplified version
  if (drawingContext.createLinearGradient) {
    // WebGL context - use standard gradient
    let grd = drawingContext.createLinearGradient(
      -planeWidth / 2,
      -planeHeight / 2,
      planeWidth / 2,
      planeHeight / 2
    );

    grd.addColorStop(0, `rgba(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, 1)`);
    grd.addColorStop(
      1,
      `rgba(${accentColor[0]}, ${accentColor[1]}, ${accentColor[2]}, 0.4)`
    );

    drawingContext.fillStyle = grd;
    plane(planeWidth, planeHeight);
  } else {
    // Fallback with solid color
    fill(bgColor[0], bgColor[1], bgColor[2]);
    plane(planeWidth, planeHeight);
  }

  pop();

  // Update dynamic point lights
  for (let i = 0; i < lights.length; i++) {
    let light = lights[i];

    // Animate light position with some subtle motion
    light.x += sin(frameCount * 0.01 + i) * 0.5;
    light.y += cos(frameCount * 0.008 + i * 2) * 0.3;
    light.z += sin(frameCount * 0.005 + i * 0.5) * 0.2;

    // Add some randomness occasionally
    if (frameCount % 60 === 0) {
      light.x += random(-3, 3);
      light.y += random(-3, 3);
      light.z += random(-3, 3);
    }

    // Keep within bounds
    light.x = constrain(light.x, -width / 2, width / 2);
    light.y = constrain(light.y, -height / 2, height / 2);
    light.z = constrain(light.z, CONFIG.depthRange.min, CONFIG.depthRange.max);

    // Apply point light
    let c = light.color;
    pointLight(
      c[0],
      c[1],
      c[2],
      light.x,
      light.y,
      light.z,
      CONFIG.pointLightIntensity
    );
  }

  // Fade-in effect during startup
  if (fadeInAlpha < 255) {
    fadeInAlpha += 3;

    push();
    noStroke();
    fill(0, 255 - fadeInAlpha);
    translate(0, 0, 1000); // In front of everything
    plane(width, height);
    pop();
  }
}

// Add mouse drag for camera control
function mouseDragged() {
  // If Focus/Resonance tool is active (right mouse button held), update its position
  if (mouseButton === RIGHT && focusResonanceActive) { // Check for RIGHT button specifically
    if (!isMouseOverUI()) { // Only update if not over UI
      // Use proper 3D position instead of Z=0 plane
      focusResonancePosition = mousePositionTo3D();
      
      // NEW: Handle letter attraction for word formation when right-clicking
      handleRightClickWordAttraction();
    }
    return false; // Prevent other default actions for right-drag
  }
  // Else, if LEFT mouse button is dragged and not over UI, handle camera rotation
  else if (mouseButton === LEFT && !isMouseOverUI()) {
    // Calculate rotation amount based on mouse movement
    let rotateAmountX = (mouseY - pmouseY) * 0.01;
    let rotateAmountY = (mouseX - pmouseX) * 0.01;

    // Update camera rotation, applying some constraints to prevent awkward angles
    cameraRotation.x = constrain(
      cameraRotation.x + rotateAmountX,
      -PI / 2 + 0.1,
      PI / 2 - 0.1
    );
    cameraRotation.y += rotateAmountY;
    
    // Update window object for testing
    window.cameraRotation = cameraRotation;

    return false; // Prevent default behavior to avoid page scrolling while rotating
  }
}

// NEW: Handle attraction between letters when right-clicking
function handleRightClickWordAttraction() {
  if (!focusResonancePosition) return;
  
  // Use the current focus position as the center of attraction
  const attractionCenter = focusResonancePosition;
  
  // Find all organisms near the focus point
  const nearbyOrganisms = organisms.filter(org => {
    // Calculate 3D distance from organism to focus point
    const distance = p5.Vector.dist(org.pos, attractionCenter);
    return distance < focusResonanceRadius;
  });
  
  // Early exit if not enough organisms to potentially form a word
  if (nearbyOrganisms.length < 2) return;
  
  // Filter organisms based on the currently highlighted script category
  const filteredOrganisms = nearbyOrganisms.filter(org => {
    if (highlightedScriptCategory === "all_white") return true; // All organisms if no specific script highlighted
    return org.scriptCategory === highlightedScriptCategory; // Only organisms of the highlighted script
  });
  
  // Apply attraction forces to filtered organisms
  filteredOrganisms.forEach(org => {
    // Vector pointing from organism to attraction center (now in true 3D)
    const attractionForce = p5.Vector.sub(attractionCenter, org.pos);
    
    // Scale force based on 3D distance (closer = less force to prevent overshooting)
    const distance = attractionForce.mag();
    // Adjust max force based on depth difference to make 3D movement more natural
    const depthDifference = Math.abs(attractionCenter.z - org.pos.z);
    const maxForce = map(depthDifference, 0, 100, 0.5, 0.3); // Reduce force for organisms far in depth
    
    // Apply force only if organism is not too close to center
    if (distance > 5) {
      attractionForce.normalize();
      attractionForce.mult(maxForce);
      org.applyForce(attractionForce);
      
      // Set organism state to indicate attraction
      org.state = "attracted";
    }
    
    // If organisms are very close together, immediately check for word formation
    if (filteredOrganisms.length >= 2 && frameCount % 10 === 0) {
      checkForImmediateWordFormation(filteredOrganisms);
    }
  });
}

// NEW: Check if the currently attracted organisms form a valid word
function checkForImmediateWordFormation(attractedOrganisms) {
  // Skip if too few organisms
  if (attractedOrganisms.length < 2) return;
  
  // Filter out organisms with non-letter characters (numbers, symbols, etc.)
  const letterOnlyOrganisms = attractedOrganisms.filter(org => 
    org.textType && 
    /^[a-zA-Z\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1E00-\u1EFF\u1F00-\u1FFF\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2E80-\u2EFF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31A0-\u31BF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA720-\uA7FF\uA800-\uA82F\uA840-\uA87F\uA880-\uA8DF\uA900-\uA92F\uA930-\uA95F\uA960-\uA97F\uA980-\uA9DF\uAA00-\uAA5F\uAA60-\uAA7F\uAA80-\uAADF\uAB00-\uAB2F\uAB30-\uAB6F\uAB70-\uABBF\uABC0-\uABFF\uAC00-\uD7AF\uD7B0-\uD7FF\uF900-\uFAFF\uFB00-\uFB4F\uFB50-\uFDFF\uFE00-\uFE0F\uFE20-\uFE2F\uFE30-\uFE4F\uFE50-\uFE6F\uFE70-\uFEFF\uFF00-\uFFEF]$/u.test(org.textType)
  );
  
  // Skip if too few letter organisms after filtering
  if (letterOnlyOrganisms.length < 2) return;
  
  // Group organisms by script category
  const organismsByScript = {};
  letterOnlyOrganisms.forEach(org => {
    const script = org.scriptCategory || 'default';
    if (!organismsByScript[script]) {
      organismsByScript[script] = [];
    }
    organismsByScript[script].push(org);
  });
  
  // Get current time for API cooldown checks
  const currentTime = millis();
  
  // Process each script category separately
  for (const scriptCategory in organismsByScript) {
    const scriptOrganisms = organismsByScript[scriptCategory];
    
    // Only process script categories with enough organisms
    if (scriptOrganisms.length < CONFIG.wordSettings.minClusterSize) continue;
    
    // Sort organisms by X position (left-to-right for most scripts, right-to-left for RTL scripts)
    const sortedOrganisms = [...scriptOrganisms];
    if (scriptCategory === 'arabic' || scriptCategory === 'hebrew') {
      sortedOrganisms.sort((a, b) => b.pos.x - a.pos.x); // Right-to-left
    } else {
      sortedOrganisms.sort((a, b) => a.pos.x - b.pos.x); // Left-to-right
    }
    
    // Create a unique identifier and string for this potential word
    const clusterIds = sortedOrganisms.map(org => org.id).sort().join(',');
    const wordString = sortedOrganisms.map(org => org.textType).join('');
    
    // Check if this is already a confirmed word
    if (confirmedWords.some(word => word.id === clusterIds)) {
      continue; // Already confirmed, no need to check again
    }
    
    // If we already have a potential word, update its timestamp to keep it alive
    if (potentialClusters.has(clusterIds)) {
      const existingCluster = potentialClusters.get(clusterIds);
      
      // If it's been stable long enough, validate it
      if (currentTime - existingCluster.startTime >= CONFIG.wordSettings.clusterStabilityTime) {
        // This cluster has been stable long enough - check if it's a valid word
        checkWordValidity(clusterIds, wordString, sortedOrganisms, currentTime, true, scriptCategory);
      }
    } else {
      // New potential word discovered through right-click attraction
      potentialClusters.set(clusterIds, {
        organisms: sortedOrganisms,
        startTime: currentTime,
        string: wordString,
        script: scriptCategory,
        checked: false
      });
      
      // Provide immediate feedback that letters are forming a potential word
      sortedOrganisms.forEach(org => {
        // Visual effect to show these organisms are part of a potential word
        if (org.mesh) {
          // Scale up slightly
          org.mesh.scale.set(1.2, 1.2, 1.2);
          
          // Highlight color (temporary effect)
          if (org.material && org.material.color) {
            // Store original color if not already stored
            if (!org._originalColor) {
              org._originalColor = {
                r: org.material.color.r,
                g: org.material.color.g,
                b: org.material.color.b
              };
            }
            
            // Change to highlight color
            const highlightColor = new THREE.Color(1.0, 0.8, 0.2); // Yellowish glow
            org.material.color.lerp(highlightColor, 0.3);
            
            // Schedule restoration of original color
            setTimeout(() => {
              if (org.material && org.material.color && org._originalColor) {
                org.material.color.setRGB(
                  org._originalColor.r,
                  org._originalColor.g,
                  org._originalColor.b
                );
              }
            }, 300);
          }
        }
      });
    }
  }
}

// Handle mouse release to deactivate the Focus/Resonance tool
function mouseReleased() {
  try {
    // If RIGHT mouse button was released, deactivate Focus/Resonance tool
    if (mouseButton === RIGHT) {
      focusResonanceActive = false;
      focusResonancePosition = null;
      return false; // Prevent default browser behavior
    }
    return true; // Allow default browser behavior for other mouse buttons
  } catch (error) {
    console.warn("Error in mouseReleased:", error);
    // Safety cleanup
    focusResonanceActive = false;
    focusResonancePosition = null;
    return true;
  }
}

// Add mouse wheel for zoom
function mouseWheel(event) {
  // Check if mouse is over scrollable content areas first
  if (isMouseOverScrollableArea()) {
    // Allow default scrolling behavior for UI content
    console.log("📜 Scrolling in UI area, allowing native scroll");
    return true; // Allow default scrolling
  }
  
  // Only zoom if we're not over any UI elements
  if (!isMouseOverUI()) {
    // Zoom in or out based on wheel direction
    window.zoomCamera(event.delta * 0.5);
    
    // Prevent default behavior to avoid page scrolling while zooming
    return false;
  }
  
  // Mouse is over UI but not in scrollable area - prevent camera zoom
  return false;
}

// Add keyboard shortcuts for testing English word detection
function keyPressed() {
  if (key === 't' || key === 'T') {
    // Create test English word
    createTestEnglishWord();
    console.log("🧪 Test English word created! Press 'T' key to create a test word.");
  } else if (key === 'c' || key === 'C') {
    // Clear space and create new organisms
    clearSpace();
    initializeOrganisms();
    console.log("🔄 Space cleared and reinitialized! Press 'C' key to reset.");
  } else if (key === 'd' || key === 'D') {
    // Debug: print current organism info
    console.log("=== CURRENT ORGANISM DEBUG INFO ===");
    const englishOrgs = organisms.filter(org => org.scriptCategory === 'default');
    console.log(`English organisms: ${englishOrgs.length}`);
    if (englishOrgs.length > 0) {
      console.log("English organism sample:", englishOrgs.slice(0, 10).map(org => ({
        char: org.textType,
        script: org.scriptCategory,
        id: org.id,
        pos: `(${Math.round(org.pos.x)}, ${Math.round(org.pos.y)})`
      })));
    }
    
    const allScripts = {};
    organisms.forEach(org => {
      const script = org.scriptCategory || 'unknown';
      allScripts[script] = (allScripts[script] || 0) + 1;
    });
    console.log("All script distribution:", allScripts);
  } else if (key === 'e' || key === 'E') {
    // Force English letter creation
    for (let i = 0; i < 10; i++) {
      const englishLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      const randomLetter = englishLetters[Math.floor(Math.random() * englishLetters.length)];
      
      let organism = createOrganism(
        random(-width/2, width/2), 
        random(-height/2, height/2)
      );
      organism.textType = randomLetter;
      organism.dna.type = randomLetter;
      organism.scriptCategory = "default";
      
      console.log(`Created English organism: "${randomLetter}" with script: ${organism.scriptCategory}`);
    }
    console.log("🔤 Added 10 English letters! Press 'E' key to add more English letters.");
  }
}

// Draw connections between organisms in 3D space
function drawConnections() {
  // Pre-calculate distance-based relationships
  let connections = [];

  // Each organism checks others for connections
  for (let i = 0; i < organisms.length; i++) {
    let org1 = organisms[i];

    // We'll use a spatial hash approach for better performance in 3D
    let nearby = getNeighbors(
      org1.pos.x,
      org1.pos.y,
      org1.pos.z,
      CONFIG.cohesionDistance
    );

    for (let j = 0; j < nearby.length; j++) {
      let org2 = nearby[j];

      // Don't connect to self
      if (org1 === org2) continue;

      // Calculate actual 3D distance
      let d = p5.Vector.dist(org1.pos, org2.pos);

      // Only connect if within cohesion distance
      if (d < CONFIG.cohesionDistance) {
        // Calculate thickness based on distance and mass
        let thickness = map(d, 0, CONFIG.cohesionDistance, 2, 0.1);

        // Calculate alpha based on distance
        let alpha = map(d, 0, CONFIG.cohesionDistance, 120, 10);

        // Adjust for depth - connections in foreground should be more visible
        let depthFactor = map(
          (org1.pos.z + org2.pos.z) / 2,
          CONFIG.depthRange.min,
          CONFIG.depthRange.max,
          1.2,
          0.7
        );

        alpha *= depthFactor;
        thickness *= depthFactor;

        // Different line styles based on organism types and states
        let lineStyle = "";

        // Communication type organisms have special connections
        if (
          org1.dna.specialization === "communicator" ||
          org2.dna.specialization === "communicator"
        ) {
          lineStyle = "dotted";
          alpha *= 1.5; // More visible
        }
        // Shared specialization creates stronger bonds
        else if (org1.dna.specialization === org2.dna.specialization) {
          lineStyle = "solid";
          thickness *= 1.2;
        }
        // Different states create different connection styles
        else if (org1.state === "grouping" && org2.state === "grouping") {
          lineStyle = "dashed";
        } else {
          lineStyle = "thin";
        }

        // Store all valid connections for rendering
        connections.push({
          org1: org1,
          org2: org2,
          thickness: thickness,
          alpha: alpha,
          style: lineStyle,
          distance: d,
        });

        // If they're interacting for the first time, record it
        if (!org1.interactionPartners.has(org2.id)) {
          org1.interactionPartners.add(org2.id);
          org2.interactionPartners.add(org1.id);

          org1.hasInteracted = true;
          org2.hasInteracted = true;

          // Count meaningful interactions
          metadata.interactionCount++;

          // Audio response to connection
          if (audioEnabled && random() < 0.1) {
            let panValue = map(org1.pos.x, -width / 2, width / 2, -1, 1);
            let noteSize = (org1.dna.size + org2.dna.size) / 2;
            playSound(noteSize, panValue);
          }

          // Exchange some energy between organisms
          let energyTransfer = random(5, 10);
          if (org1.energy > energyTransfer) {
            org1.energy -= energyTransfer;
            org2.energy += energyTransfer * 0.8; // Some loss in transfer
          }
        }
      }
    }
  }

  // Render all connections
  push();
  for (let i = 0; i < connections.length; i++) {
    let c = connections[i];

    // Get color based on organism type (blend the two colors)
    // let org1Color = selectedPalette[c.org1.dna.colorIndex]; // OLD
    // let org2Color = selectedPalette[c.org2.dna.colorIndex]; // OLD

    // NEW: Determine colors based on highlighted script category
    let color1_rgb, color2_rgb;

    if (highlightedScriptCategory === "all_white" || !c.org1.scriptCategory) {
      color1_rgb = WHITE_COLOR_RGB;
    } else if (c.org1.scriptCategory === highlightedScriptCategory) {
      color1_rgb = SCRIPT_HIGHLIGHT_COLORS[c.org1.scriptCategory] || WHITE_COLOR_RGB;
    } else {
      color1_rgb = WHITE_COLOR_RGB;
    }

    if (highlightedScriptCategory === "all_white" || !c.org2.scriptCategory) {
      color2_rgb = WHITE_COLOR_RGB;
    } else if (c.org2.scriptCategory === highlightedScriptCategory) {
      color2_rgb = SCRIPT_HIGHLIGHT_COLORS[c.org2.scriptCategory] || WHITE_COLOR_RGB;
    } else {
      color2_rgb = WHITE_COLOR_RGB;
    }
    // END NEW

    let r = (color1_rgb[0] + color2_rgb[0]) / 2;
    let g = (color1_rgb[1] + color2_rgb[1]) / 2;
    let b = (color1_rgb[2] + color2_rgb[2]) / 2;

    // Render based on style
    if (c.style === "dotted") {
      noFill();
      stroke(r, g, b, c.alpha);
      strokeWeight(c.thickness);
      drawDottedLine3D(
        c.org1.pos.x,
        c.org1.pos.y,
        c.org1.pos.z,
        c.org2.pos.x,
        c.org2.pos.y,
        c.org2.pos.z,
        c.thickness * 2,
        c.distance / 10,
        r,
        g,
        b,
        c.alpha
      );
    } else if (c.style === "dashed") {
      noFill();
      stroke(r, g, b, c.alpha);
      strokeWeight(c.thickness);
      drawDashedLine3D(
        c.org1.pos.x,
        c.org1.pos.y,
        c.org1.pos.z,
        c.org2.pos.x,
        c.org2.pos.y,
        c.org2.pos.z,
        c.distance / 8,
        c.distance / 15,
        r,
        g,
        b,
        c.alpha
      );
    } else {
      stroke(r, g, b, c.alpha);
      strokeWeight(c.thickness);
      line(
        c.org1.pos.x,
        c.org1.pos.y,
        c.org1.pos.z,
        c.org2.pos.x,
        c.org2.pos.y,
        c.org2.pos.z
      );
    }
  }
  pop();
}

// Helper for 3D dotted lines
function drawDottedLine3D(
  x1,
  y1,
  z1,
  x2,
  y2,
  z2,
  dotSize,
  spacing,
  r,
  g,
  b,
  a
) {
  // Calculate direction vector
  let dir = createVector(x2 - x1, y2 - y1, z2 - z1);
  let len = dir.mag();
  dir.normalize();

  // Draw dots along line
  push();
  noStroke();
  fill(r, g, b, a);

  let steps = floor(len / spacing);
  for (let i = 0; i <= steps; i++) {
    let pos = createVector(
      x1 + dir.x * i * spacing,
      y1 + dir.y * i * spacing,
      z1 + dir.z * i * spacing
    );

    push();
    translate(pos.x, pos.y, pos.z);
    sphere(dotSize);
    pop();
  }
  pop();
}

// Helper for 3D dashed lines
function drawDashedLine3D(
  x1,
  y1,
  z1,
  x2,
  y2,
  z2,
  dashLength,
  gapLength,
  r,
  g,
  b,
  a
) {
  // Calculate direction vector
  let dir = createVector(x2 - x1, y2 - y1, z2 - z1);
  let len = dir.mag();
  dir.normalize();

  // Calculate segments
  let totalLength = len;
  let segmentLength = dashLength + gapLength;
  let segmentCount = ceil(totalLength / segmentLength);

  // Draw segments
  stroke(r, g, b, a);
  beginShape(LINES);
  for (let i = 0; i < segmentCount; i++) {
    let startFraction = (i * segmentLength) / totalLength;
    let endFraction = min((i * segmentLength + dashLength) / totalLength, 1);

    if (startFraction >= 1) break;

    let x1Dash = x1 + dir.x * totalLength * startFraction;
    let y1Dash = y1 + dir.y * totalLength * startFraction;
    let z1Dash = z1 + dir.z * totalLength * startFraction;

    let x2Dash = x1 + dir.x * totalLength * endFraction;
    let y2Dash = y1 + dir.y * totalLength * endFraction;
    let z2Dash = z1 + dir.z * totalLength * endFraction;

    vertex(x1Dash, y1Dash, z1Dash);
    vertex(x2Dash, y2Dash, z2Dash);
  }
  endShape();
}

// Helper function to get nearby organisms efficiently using 3D spatial partitioning
function getNeighbors(x, y, z, radius) {
  let neighbors = [];

  // Convert to grid coordinates
  let col = floor((x + width / 2) / cellSize);
  let row = floor((y + height / 2) / cellSize);
  let depth = floor((z - CONFIG.depthRange.min) / cellSize);

  // Check bounds
  col = constrain(col, 0, cols - 1);
  row = constrain(row, 0, rows - 1);

  // Get depth cells
  let depthCells = ceil(
    (CONFIG.depthRange.max - CONFIG.depthRange.min) / cellSize
  );
  depth = constrain(depth, 0, depthCells - 1);

  // Calculate radius in grid cells
  let cellRadius = ceil(radius / cellSize);

  // Check all cells in radius
  for (let i = -cellRadius; i <= cellRadius; i++) {
    for (let j = -cellRadius; j <= cellRadius; j++) {
      for (let k = -cellRadius; k <= cellRadius; k++) {
        let ci = col + i;
        let rj = row + j;
        let dk = depth + k;

        // Skip if out of bounds
        if (
          ci < 0 ||
          ci >= cols ||
          rj < 0 ||
          rj >= rows ||
          dk < 0 ||
          dk >= depthCells
        ) {
          continue;
        }

        // Get cell index
        let cellIndex = dk * cols * rows + rj * cols + ci;

        // Add all organisms in this cell
        for (let org of grid[cellIndex]) {
          neighbors.push(org);
        }
      }
    }
  }

  return neighbors;
}

// 3D Ecosystem class
class Ecosystem {
  constructor() {
    this.organisms = [];
    // You can add more properties for field lines, events, etc.
  }

  // Add an organism to the ecosystem
  addOrganism(org) {
    this.organisms.push(org);
  }

  // Display or update all organisms (expand as needed)
  display() {
    for (let org of this.organisms) {
      if (org.display) org.display();
    }
  }

  // Evolve or update the ecosystem (expand as needed)
  evolve() {
    // Placeholder for evolutionary logic
  }

  // Add a stub for generateFieldLines
  generateFieldLines() {
    // Stub for compatibility
  }
}

// Functions for external camera controls
window.resetCamera = function () {
  // Clear space and remove words/organisms
  clearSpace();
  
  // Also reset the camera position
  cameraRotation.x = 0;
  cameraRotation.y = 0;
  cameraZoom = CONFIG.defaultCameraZoom; // Now uses the updated default of 800
  
  console.log("Space cleared and camera reset to default position");
};

// Add a function to restart with English priority
window.restartWithEnglish = function () {
  // Clear everything first
  clearSpace();
  
  // Initialize with new English-heavy distribution
  initializeOrganisms();
  
  console.log("Restarted with English-prioritized organisms");
};

// Function to clear the space and remove all organisms and words
function clearSpace() {
  // Clear confirmed words
  confirmedWords = [];
  
  // Remove any existing organisms
  while (organisms.length > 0) {
    const org = organisms.pop();
    if (org.mesh) {
      org.removeMesh();
    }
  }
  
  // Clear letter flow visualization data
  letterOrgData = [];
  
  // Update word list UI
  updateWordList();
  
  // Do NOT re-initialize organisms - keep the space empty
  console.log("Space completely cleared - all letters removed");
}

// Enhanced clearing function specifically for verse mode entry
function clearSpaceForVerseMode() {
  console.log("🧹 Thoroughly clearing space for verse mode...");
  
  // Clear confirmed words that are part of letter mode
  confirmedWords = [];
  
  // Remove ALL organisms and their meshes
  while (organisms.length > 0) {
    const org = organisms.pop();
    if (org.mesh) {
      org.removeMesh();
    }
  }
  
  // Clear the ecosystem completely
  ecosystem = new Ecosystem();
  
  // Clear letter flow visualization data
  letterOrgData = [];
  
  // Clear any Three.js objects that might be letter-related (be selective to preserve verse words)
  const objectsToRemove = [];
  threeScene.traverse((child) => {
    // Only remove objects that are NOT verse words
    if (child.isMesh && child.userData && child.userData.isLetterOrganism) {
      objectsToRemove.push(child);
    }
  });
  
  objectsToRemove.forEach(obj => {
    threeScene.remove(obj);
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      if (Array.isArray(obj.material)) {
        obj.material.forEach(mat => mat.dispose());
      } else {
        obj.material.dispose();
      }
    }
  });
  
  // Clear any remaining visual effects or temporary objects
  // Reset focus/resonance state if active
  if (focusResonanceActive) {
    focusResonanceActive = false;
  }
  
  // Update UI to reflect the cleared state
  updateWordList();
  
  console.log("✨ Space completely cleared for verse mode - only collected words remain available");
}

window.zoomCamera = function (amount) {
  cameraZoom = constrain(cameraZoom + amount, CONFIG.minCameraZoom, CONFIG.maxCameraZoom);
  // Update the window object for testing
  window.cameraZoom = cameraZoom;
};

// Create initial organisms for the 3D environment - ENHANCED for better word formation
function initializeOrganisms() {
  // Use a larger initial set as specified in CONFIG
  let initialCount = CONFIG.initialOrganisms;

  // Extract different script categories from CONFIG.types
  const arabicChars = CONFIG.types.filter(char => {
    const script = getScriptCategoryForChar(char);
    return script === 'arabic';
  });
  
  const englishChars = CONFIG.types.filter(char => {
    return /[a-zA-Z]/.test(char); // Just check if it's a Latin letter
  });
  
  const otherScriptChars = CONFIG.types.filter(char => {
    const script = getScriptCategoryForChar(char);
    return script !== 'arabic' && script !== 'default';
  });

  // Create a diverse mix of characters from different scripts
  // Prioritize English for better word formation: 70% English, 15% Arabic, 15% other scripts
  const coreCharacters = [];
  
  // Define common English letters directly (not relying on CONFIG.types filtering)
  const commonEnglishLetters = [
    // Vowels - very high frequency for word formation
    'a', 'a', 'a', 'a', 'a', 'e', 'e', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'o', 'o', 'o', 'u', 'u',
    // Most common consonants for word formation
    't', 't', 't', 't', 'n', 'n', 'n', 's', 's', 's', 'r', 'r', 'r', 'h', 'h', 'l', 'l', 'd', 'd',
    // Common word starters and connectors  
    'c', 'c', 'm', 'm', 'p', 'p', 'b', 'b', 'f', 'f', 'g', 'g', 'w', 'w', 'y', 'y',
    // Less frequent but important for variety
    'v', 'k', 'j', 'x', 'q', 'z'
  ];
  
  // Add common Arabic/Persian letters (reduced proportion)
  const commonArabicLetters = ['ا', 'ب', 'ت', 'ن', 'س', 'ر', 'ل', 'م', 'ع', 'د', 'ه', 'و', 'ی'];
  const availableArabic = arabicChars.filter(char => commonArabicLetters.includes(char));
  if (availableArabic.length === 0) {
    // Fallback to any Arabic characters available
    availableArabic.push(...arabicChars.slice(0, 10));
  }
  
  // Mix characters with English priority
  const englishCount = Math.floor(initialCount * 0.70); // 70% English
  const arabicCount = Math.floor(initialCount * 0.15);  // 15% Arabic
  const otherCount = initialCount - englishCount - arabicCount; // 15% other scripts
  
  // Add characters to core pool - English first for priority
  console.log(`Adding ${englishCount} English letters, ${arabicCount} Arabic letters, ${otherCount} other letters`);
  
  // Add English letters first - ensure we always have English letters
  for (let i = 0; i < englishCount; i++) {
    coreCharacters.push(commonEnglishLetters[i % commonEnglishLetters.length]);
  }
  
  console.log(`Added ${englishCount} English letters to core characters`);
  console.log(`English letters sample:`, coreCharacters.slice(0, 10));
  
  // Add Arabic letters
  for (let i = 0; i < arabicCount && availableArabic.length > 0; i++) {
    coreCharacters.push(availableArabic[i % availableArabic.length]);
  }
  
  // Add other script letters
  for (let i = 0; i < otherCount && otherScriptChars.length > 0; i++) {
    coreCharacters.push(otherScriptChars[i % otherScriptChars.length]);
  }
  
  // Fill remaining slots with random characters from CONFIG.types
  while (coreCharacters.length < initialCount) {
    const randomChar = random(CONFIG.types);
    if (typeof randomChar === 'string') {
      coreCharacters.push(randomChar);
    }
  }
  
  // Shuffle the characters
  for (let i = coreCharacters.length - 1; i > 0; i--) {
    const j = floor(random(i + 1));
    [coreCharacters[i], coreCharacters[j]] = [coreCharacters[j], coreCharacters[i]];
  }
  
  // Create organisms with diverse positioning
  for (let i = 0; i < coreCharacters.length; i++) {
    // More varied positioning for better distribution
    let x = random(-width / 2, width / 2) * 2.0;
    let y = random(-height / 2, height / 2) * 2.0;
    let z = random(CONFIG.depthRange.min, CONFIG.depthRange.max);

    let organism = createOrganism(x, y);
    organism.pos.z = z;

    // Assign the character
    const char = coreCharacters[i];
    organism.textType = char;
    organism.dna.type = char;
    organism.scriptCategory = getScriptCategoryForChar(char);
    
    console.log(`Initialized organism with character: "${char}" (script: ${organism.scriptCategory}, textType: ${organism.textType})`);
  }

  console.log(`Created ${organisms.length} initial organisms with English-prioritized distribution`);
  console.log(`English: ${englishCount}, Arabic: ${arabicCount}, Other: ${otherCount}`);
  
  // Debug: Count actual script categories created
  const actualScriptCounts = {};
  organisms.forEach(org => {
    const script = org.scriptCategory || 'unknown';
    actualScriptCounts[script] = (actualScriptCounts[script] || 0) + 1;
  });
  console.log('Actual script distribution:', actualScriptCounts);
  
  // Show debugging instructions
  console.log(`
🔍 ENGLISH WORD DETECTION DEBUGGING ENABLED:
   Press 'T' to create a test English word cluster
   Press 'E' to add 10 random English letters
   Press 'D' to print current organism debug info  
   Press 'C' to clear and reinitialize space
   
✅ English letters are now explicitly mapped to 'default' script category
✅ Enhanced debugging for English word cluster detection
✅ Improved clustering distances for English words
  `);
  
  // Create a test English word cluster to verify the system works
  setTimeout(() => {
    createTestEnglishWord();
  }, 2000); // Wait 2 seconds then create a test word
}

// Test function to create a simple English word for verification
function createTestEnglishWord() {
  console.log("🧪 Creating test English word 'HELLO' to verify system...");
  
  const testWord = "HELLO";
  const testPositions = [
    { x: -100, y: 0 },
    { x: -50, y: 0 },
    { x: 0, y: 0 },
    { x: 50, y: 0 },
    { x: 100, y: 0 }
  ];
  
  // Remove any existing organisms close to these positions
  for (let i = organisms.length - 1; i >= 0; i--) {
    const org = organisms[i];
    for (const pos of testPositions) {
      const d = dist(org.pos.x, org.pos.y, pos.x, pos.y);
      if (d < 150) {
        org.removeMesh();
        organisms.splice(i, 1);
        break;
      }
    }
  }
  
  // Create the test word organisms
  for (let i = 0; i < testWord.length; i++) {
    const char = testWord[i];
    const pos = testPositions[i];
    
    let organism = createOrganism(pos.x, pos.y);
    organism.pos.z = 0; // Place in front
    organism.textType = char;
    organism.dna.type = char;
    organism.scriptCategory = "default"; // Explicitly set as English
    
    // Make them stationary to form a cluster
    organism.vel.mult(0);
    organism.acc.mult(0);
    
    console.log(`Created test organism: "${char}" at (${pos.x}, ${pos.y}) with script: ${organism.scriptCategory}`);
  }
  
  console.log(`✅ Test word "${testWord}" created! It should be detected as an English word cluster.`);
}

// Helper function to get script category for a character (used in initialization)
function getScriptCategoryForChar(character) {
  // First check if the character is in our script map
  if (CONFIG.scriptMap[character]) {
    return CONFIG.scriptMap[character];
  }
  
  // If not found in map, try to detect by Unicode ranges
  const code = character.charCodeAt(0);
  
  // Greek: U+0370 to U+03FF
  if (code >= 0x0370 && code <= 0x03FF) return "greek";
  
  // Cyrillic: U+0400 to U+04FF
  if (code >= 0x0400 && code <= 0x04FF) return "cyrillic";
  
  // Hebrew: U+0590 to U+05FF
  if (code >= 0x0590 && code <= 0x05FF) return "hebrew";
  
  // Arabic: U+0600 to U+06FF
  if (code >= 0x0600 && code <= 0x06FF) return "arabic";
  
  // Devanagari: U+0900 to U+097F
  if (code >= 0x0900 && code <= 0x097F) return "indic";
  
  // Thai: U+0E00 to U+0E7F
  if (code >= 0x0E00 && code <= 0x0E7F) return "southeastAsian";
  
  // CJK Unified Ideographs: U+4E00 to U+9FFF
  if (code >= 0x4E00 && code <= 0x9FFF) return "eastAsian";
  
  // Default to Latin-based
  return "default";
}

// Create a new organism
function createOrganism(x, y, isMutation = false) {
  if (organisms.length >= CONFIG.maxOrganisms) {
    // Find oldest organism to replace
    let oldestIndex = 0;
    let oldestAge = 0;

    for (let i = 0; i < organisms.length; i++) {
      if (organisms[i].age > oldestAge) {
        oldestAge = organisms[i].age;
        oldestIndex = i;
      }
    }

    // Remove oldest
    organisms.splice(oldestIndex, 1);
  }

  let organism = new Organism(x, y);
  organisms.push(organism);
  metadata.totalCreated++;

  return organism;
}

// Update organisms for 3D space
function updateOrganisms() {
  // Clear spatial partitioning grid
  for (let i = 0; i < grid.length; i++) {
    grid[i] = [];
  }

  // Calculate z-depth cells
  const depthCells = ceil(
    (CONFIG.depthRange.max - CONFIG.depthRange.min) / cellSize
  );

  // Add organisms to grid for spatial partitioning
  for (let i = 0; i < organisms.length; i++) {
    let organism = organisms[i];

    // Convert to grid coordinates
    let col = floor((organism.pos.x + width / 2) / cellSize);
    let row = floor((organism.pos.y + height / 2) / cellSize);
    let depth = floor((organism.pos.z - CONFIG.depthRange.min) / cellSize);

    // Check bounds
    col = constrain(col, 0, cols - 1);
    row = constrain(row, 0, rows - 1);
    depth = constrain(depth, 0, depthCells - 1);

    // Get cell index (3D grid)
    let cellIndex = depth * cols * rows + row * cols + col;

    // Add to grid
    if (cellIndex >= 0 && cellIndex < grid.length) {
      grid[cellIndex].push(organism);
    }
  }

  // Update all organisms
  for (let i = organisms.length - 1; i >= 0; i--) {
    let organism = organisms[i];

    // Get cell index for local density calculation
    let col = floor((organism.pos.x + width / 2) / cellSize);
    let row = floor((organism.pos.y + height / 2) / cellSize);
    let depth = floor((organism.pos.z - CONFIG.depthRange.min) / cellSize);

    // Check bounds
    col = constrain(col, 0, cols - 1);
    row = constrain(row, 0, rows - 1);
    depth = constrain(depth, 0, depthCells - 1);

    // Get local density (counts neighbors in same cell)
    let cellIndex = depth * cols * rows + row * cols + col;
    let localDensity =
      cellIndex >= 0 && cellIndex < grid.length ? grid[cellIndex].length : 0;

    // Apply flocking behaviors in 3D
    applyFlockingBehaviors(organism);

    // Update organism state
    organism.update(localDensity);

    // Check if organism should die
    if (organism.isDead()) {
      organism.removeMesh();
      organisms.splice(i, 1);
      continue;
    }

    // React to mouse or camera position
    if (mouseIsPressed) {
      // Calculate mouse position in 3D space
      // This is a simplification - accurate 3D picking would require raycasting
      let mouseVector = createVector(
        mouseX - width / 2,
        mouseY - height / 2,
        0
      );
      organism.react(mouseVector.x, mouseVector.y);
    }

    // Display the organism
    organism.display();
  }
  
  // Detect and process word clusters (with error handling)
  try {
    detectWordClusters();
  } catch (error) {
    console.warn("Error detecting word clusters:", error);
  }
}

// Detect and track potential word clusters
function detectWordClusters() {
  // Add debugging
  if (frameCount % 60 === 0) {  // Only log once per second (assuming 60fps)
    console.log("==== Running word cluster detection ====");
    console.log(`Active organisms: ${organisms.length}, Confirmed words: ${confirmedWords.length}, Potential clusters: ${potentialClusters.size}`);
  }
  
  const currentTime = millis();
  const allClustersFoundThisFrameIds = new Set(); // To store IDs of all valid clusters found this frame

  // Step 0: Filter for active organisms (not part of already confirmed words and are text types)
  const confirmedOrganismIds = new Set();
  confirmedWords.forEach(cw => {
    if (cw.organisms && Array.isArray(cw.organisms)) {
        cw.organisms.forEach(org => confirmedOrganismIds.add(org.id));
    }
  });

  // Filter for organisms with text that aren't part of a confirmed word AND are letters (not numbers or special characters)
  const activeOrganisms = organisms.filter(org =>
    !confirmedOrganismIds.has(org.id) && 
    org.textType &&
    // Only include letter characters (exclude numbers and special characters)
    /^[a-zA-Z\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1E00-\u1EFF\u1F00-\u1FFF\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2E80-\u2EFF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31A0-\u31BF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA720-\uA7FF\uA800-\uA82F\uA840-\uA87F\uA880-\uA8DF\uA900-\uA92F\uA930-\uA95F\uA960-\uA97F\uA980-\uA9DF\uAA00-\uAA5F\uAA60-\uAA7F\uAA80-\uAADF\uAB00-\uAB2F\uAB30-\uAB6F\uAB70-\uABBF\uABC0-\uABFF\uAC00-\uD7AF\uD7B0-\uD7FF\uF900-\uFAFF\uFB00-\uFB4F\uFB50-\uFDFF\uFE00-\uFE0F\uFE20-\uFE2F\uFE30-\uFE4F\uFE50-\uFE6F\uFE70-\uFEFF\uFF00-\uFFEF]$/u.test(org.textType)
  );
  
  // Debug: Log ALL organisms to see what's actually being generated
  if (frameCount % 180 === 0) {  // Every 3 seconds
    console.log("=== DEBUGGING ALL ORGANISMS ===");
    console.log(`Total organisms: ${organisms.length}`);
    console.log(`Confirmed word organism IDs: ${Array.from(confirmedOrganismIds)}`);
    console.log(`Active organisms after filtering: ${activeOrganisms.length}`);
    
    // Sample of all organisms regardless of filtering
    const allOrganismsSample = organisms.slice(0, 10).map(org => ({
      char: org.textType,
      script: org.scriptCategory,
      id: org.id,
      confirmed: confirmedOrganismIds.has(org.id),
      regex_pass: org.textType && /^[a-zA-Z\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1E00-\u1EFF\u1F00-\u1FFF\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2E80-\u2EFF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31A0-\u31BF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA720-\uA7FF\uA800-\uA82F\uA840-\uA87F\uA880-\uA8DF\uA900-\uA92F\uA930-\uA95F\uA960-\uA97F\uA980-\uA9DF\uAA00-\uAA5F\uAA60-\uAA7F\uAA80-\uAADF\uAB00-\uAB2F\uAB30-\uAB6F\uAB70-\uABBF\uABC0-\uABFF\uAC00-\uD7AF\uD7B0-\uD7FF\uF900-\uFAFF\uFB00-\uFB4F\uFB50-\uFDFF\uFE00-\uFE0F\uFE20-\uFE2F\uFE30-\uFE4F\uFE50-\uFE6F\uFE70-\uFEFF\uFF00-\uFFEF]$/u.test(org.textType)
    }));
    console.log("Sample of all organisms:", allOrganismsSample);
    
    // Count English letters specifically
    const englishLetters = organisms.filter(org => 
      org.textType && /^[a-zA-Z]$/.test(org.textType)
    );
    console.log(`English letters found: ${englishLetters.length}`);
    if (englishLetters.length > 0) {
      console.log("English letter sample:", englishLetters.slice(0, 5).map(org => ({
        char: org.textType,
        script: org.scriptCategory,
        id: org.id
      })));
    }
  }
  
  // Group active organisms by script category for better debugging
  const organismsByScriptDebug = activeOrganisms.reduce((acc, org) => {
    const script = org.scriptCategory || "default";
    if (!acc[script]) {
      acc[script] = [];
    }
    acc[script].push(org.textType);
    return acc;
  }, {});

  // Log organisms grouped by script instead of all mixed together
  console.log("ACTIVE ORGANISMS BY SCRIPT:");
  for (const [script, letters] of Object.entries(organismsByScriptDebug)) {
    const scriptName = script === 'default' ? 'Latin/English' : 
                      script === 'arabic' ? 'Arabic' :
                      script === 'eastAsian' ? 'East Asian' :
                      script === 'indic' ? 'Indic' :
                      script === 'cyrillic' ? 'Cyrillic' : script;
    console.log(`  ${scriptName}: "${letters.join('')}" (${letters.length} letters)`);
    
    // Special highlighting for English letters to make them more visible
    if (script === 'default') {
      const englishOnlyLetters = letters.filter(letter => /^[a-zA-Z]$/.test(letter));
      if (englishOnlyLetters.length > 0) {
        console.log(`    ✓ ENGLISH LETTERS DETECTED: "${englishOnlyLetters.join('')}" (${englishOnlyLetters.length} letters)`);
      }
    }
  }
  
  // Extra debugging
  if (frameCount % 180 === 0) {  // Log every 3 seconds
    console.log(`Active text organisms: ${activeOrganisms.length}`);
    
    // Count letters by script category for debugging
    const scriptCounts = activeOrganisms.reduce((acc, org) => {
      const script = org.scriptCategory || 'default';
      acc[script] = (acc[script] || 0) + 1;
      return acc;
    }, {});
    
    console.log('Letters by script category:', scriptCounts);
    
    // Log a sample for each script category
    for (const [script, count] of Object.entries(scriptCounts)) {
      if (count > 0) {
        const scriptLetters = activeOrganisms
          .filter(org => (org.scriptCategory || 'default') === script)
          .map(org => org.textType)
          .slice(0, 10) // Show first 10 letters as sample
          .join('');
        const scriptName = script === 'default' ? 'Latin/English' : 
                          script === 'arabic' ? 'Arabic' :
                          script === 'eastAsian' ? 'East Asian' :
                          script === 'indic' ? 'Indic' :
                          script === 'cyrillic' ? 'Cyrillic' : script;
        console.log(`${scriptName} sample letters: "${scriptLetters}"`);
      }
    }
  }

  // Group active organisms by script category
  const organismsByScript = activeOrganisms.reduce((acc, org) => {
    const script = org.scriptCategory || "default"; // Fallback if scriptCategory is missing
    if (!acc[script]) {
      acc[script] = [];
    }
    acc[script].push(org);
    return acc;
  }, {});

  // Process each script group independently
  for (const scriptCategory in organismsByScript) {
    const scriptOrganisms = organismsByScript[scriptCategory];
    if (scriptOrganisms.length < CONFIG.wordSettings.minClusterSize) {
      continue; // Not enough organisms in this script group
    }

    // Special logging for English (default) script processing
    if (scriptCategory === 'default') {
      console.log(`🔍 PROCESSING ENGLISH WORD CLUSTERS: ${scriptOrganisms.length} English letters available`);
      const englishLettersPreview = scriptOrganisms.map(org => org.textType).filter(letter => /^[a-zA-Z]$/.test(letter)).slice(0, 10).join('');
      console.log(`   English letters for clustering: "${englishLettersPreview}..."`);
    }

    // Step 1: Build proximity map for the current script group
    const proximityMap = new Map();
    for (let i = 0; i < scriptOrganisms.length; i++) {
      for (let j = i + 1; j < scriptOrganisms.length; j++) {
        const org1 = scriptOrganisms[i];
        const org2 = scriptOrganisms[j];

        // Distance check (already same script category)
        const d = dist(org1.pos.x, org1.pos.y, org1.pos.z, org2.pos.x, org2.pos.y, org2.pos.z);
        
        // Enhanced word formation - increased formation distances to ensure clusters form
        // Connect organisms that are reasonably close to each other with increased distance
        // Special consideration for English letters (default script) - use more lenient distance
        const maxDistance = scriptCategory === 'default' ? CONFIG.connectionDistance * 4 : CONFIG.connectionDistance * 3;
        if (d < maxDistance) {
          if (!proximityMap.has(org1.id)) proximityMap.set(org1.id, []);
          if (!proximityMap.has(org2.id)) proximityMap.set(org2.id, []);
          proximityMap.get(org1.id).push(org2);
          proximityMap.get(org2.id).push(org1);
        }
      }
    }

    // Step 2: Find connected components (clusters) within this script group
    const visitedInScript = new Set();
    const clustersInScript = [];

    function dfs(orgId, currentCluster) {
      if (visitedInScript.has(orgId)) return;
      visitedInScript.add(orgId);

      const org = scriptOrganisms.find(o => o.id === orgId);
      if (!org) return;

      currentCluster.push(org);
      const neighbors = proximityMap.get(orgId);
      if (neighbors) {
        for (const neighbor of neighbors) {
          // Ensure neighbor is also in the current scriptOrganisms list and not visited
          if (scriptOrganisms.find(o => o.id === neighbor.id) && !visitedInScript.has(neighbor.id)) {
             dfs(neighbor.id, currentCluster);
          }
        }
      }
    }

    for (let org of scriptOrganisms) {
      if (!visitedInScript.has(org.id) && proximityMap.has(org.id)) {
        const currentCluster = [];
        dfs(org.id, currentCluster);
        if (currentCluster.length >= CONFIG.wordSettings.minClusterSize &&
            currentCluster.length <= CONFIG.wordSettings.maxClusterSize) {
          clustersInScript.push(currentCluster);
        }
      }
    }

    // Step 3: Process clusters for this script group
    if (scriptCategory === 'default' && clustersInScript.length > 0) {
      console.log(`📝 ENGLISH CLUSTERS FOUND: ${clustersInScript.length} clusters detected for processing`);
      clustersInScript.forEach((cluster, index) => {
        const previewText = cluster.map(org => org.textType).join('');
        console.log(`   Cluster ${index + 1}: "${previewText}" (${cluster.length} letters)`);
      });
    }
    
    for (let cluster of clustersInScript) {
      // Sort organisms for consistent ID and string generation.
      // For LTR scripts (default, cyrillic, indic, eastAsian): sort by X-position.
      // For RTL scripts (arabic): sort by X-position descending.
      if (scriptCategory === 'arabic' || scriptCategory === 'hebrew') { // Added hebrew just in case, though not in current target list
        cluster.sort((a, b) => b.pos.x - a.pos.x); // Right-to-Left
      } else {
        cluster.sort((a, b) => a.pos.x - b.pos.x); // Left-to-Right
      }

      const clusterOrgIdsSorted = cluster.map(org => org.id).sort((a,b) => a-b); // Sort IDs numerically for a stable clusterId
      const clusterId = clusterOrgIdsSorted.join(',');
      allClustersFoundThisFrameIds.add(clusterId); // Track this valid cluster

      const clusterString = cluster.map(org => org.textType).join('');

      if (potentialClusters.has(clusterId)) {
        const existingCluster = potentialClusters.get(clusterId);
        if (!existingCluster.checked && (currentTime - existingCluster.startTime >= CONFIG.wordSettings.clusterStabilityTime)) {
          console.log(`Checking stable cluster: "${clusterString}" (ID: ${clusterId}, Script: ${scriptCategory})`);
          // Additional debugging for English clusters
          if (scriptCategory === 'default') {
            console.log(`ENGLISH CLUSTER DETECTED: "${clusterString}". Checking validity...`);
          }
          checkWordValidity(clusterId, clusterString, cluster, currentTime, false, scriptCategory);
          existingCluster.checked = true; // Mark as checked to prevent re-checking
        }
      } else {
        console.log(`New potential cluster found: "${clusterString}" (ID: ${clusterId}, Script: ${scriptCategory})`);
        
        // Log details about English clusters
        if (scriptCategory === 'default') {
          console.log(`ENGLISH POTENTIAL CLUSTER: "${clusterString}" - Will check in ${CONFIG.wordSettings.clusterStabilityTime}ms`);
          // Log the positions of these organisms to debug proximity
          const positions = cluster.map(org => ({
            x: Math.round(org.pos.x), 
            y: Math.round(org.pos.y), 
            z: Math.round(org.pos.z)
          }));
          console.log(`Cluster organism positions:`, positions);
        }
        
        potentialClusters.set(clusterId, {
          organisms: cluster,
          startTime: currentTime,
          string: clusterString,
          script: scriptCategory,
          checked: false // Flag to ensure it's checked for validity only once after stable
        });
      }
    }
  }

  // Step 4: Remove from potentialClusters those that no longer exist
  for (let [id, clusterData] of potentialClusters.entries()) {
    if (!allClustersFoundThisFrameIds.has(id)) {
      potentialClusters.delete(id);
    }
  }

  // Step 5: Clean up expired confirmed words (no change needed here)
  confirmedWords = confirmedWords.filter(word => word.displayUntil > currentTime);
}

// Dictionary API endpoints and cache
const dictionaryAPIs = {
  english: {
    url: "https://api.dictionaryapi.dev/api/v2/entries/en/", // HTTPS
    headers: {}
  },
  multilingual: { // For translation and validation of non-English words
    url: "https://api.mymemory.translated.net/get?q=", // HTTPS
    headers: {}
  }
};

// Cache for validated words to reduce API calls
const validatedWordsCache = new Map();

// Detect the probable language of a word based on character script (primarily for API lang codes)
// This function becomes less critical for internal logic if scriptCategory is passed reliably.
function detectWordLanguage(wordString, scriptHint = 'default') {
  if (!wordString || wordString.length === 0) return scriptToLang(scriptHint);

  // Prefer scriptHint if available and valid
  const hintedLang = scriptToLang(scriptHint);
  if (hintedLang !== 'english' || scriptHint !== 'default') { // if hint is specific
      // Test if first char matches the hinted script. If not, then try to autodetect.
      const firstChar = wordString.charAt(0);
      const code = firstChar.charCodeAt(0);
      let matchesHint = false;
      if (scriptHint === 'arabic' && (code >= 0x0600 && code <= 0x06FF || code >= 0x0750 && code <= 0x077F || code >= 0x08A0 && code <= 0x08FF)) matchesHint = true;
      else if (scriptHint === 'indic' && (code >= 0x0900 && code <= 0x097F)) matchesHint = true; // Devanagari for Hindi
      else if (scriptHint === 'eastAsian' && ((code >= 0x4E00 && code <= 0x9FFF) || (code >= 0x3400 && code <= 0x4DBF))) matchesHint = true; // Common Chinese
      else if (scriptHint === 'cyrillic' && (code >= 0x0400 && code <= 0x04FF)) matchesHint = true;
      else if (scriptHint === 'default') matchesHint = true; // Assume Latin characters are fine for default

      if (matchesHint) return hintedLang;
  }

  // Fallback to character-based detection if hint is not strong or doesn't match
  const firstChar = wordString.charAt(0);
  const code = firstChar.charCodeAt(0);

  if (code >= 0x0600 && code <= 0x06FF || code >= 0x0750 && code <= 0x077F || code >= 0x08A0 && code <= 0x08FF) return "arabic"; // Arabic, Persian
  if (code >= 0x0900 && code <= 0x097F) return "hindi";    // Devanagari
  if ((code >= 0x4E00 && code <= 0x9FFF) || (code >= 0x3400 && code <= 0x4DBF)) return "chinese"; // Common CJK
  if (code >= 0x0400 && code <= 0x04FF) return "russian";  // Cyrillic
  // Latin script based languages (English, Spanish, French, etc.) will fall through to 'english'
  return "english"; // Default for Latin script and others
}

function scriptToLang(scriptCategory) {
  switch (scriptCategory) {
    case 'default': return 'english'; // Covers Latin-based: Eng, Spa, Fre, Por, Ger, Ind/Mal
    case 'arabic': return 'arabic';   // Arabic, Persian
    case 'eastAsian': return 'chinese'; // Mandarin
    case 'indic': return 'hindi';     // Hindi
    case 'cyrillic': return 'russian';   // Russian
    default: return 'english';
  }
}

// Function to convert language names to ISO language codes for API usage
function targetLanguageToCode(language) {
  switch (language.toLowerCase()) {
    case 'english': return 'en';
    case 'arabic': return 'ar';
    case 'chinese': return 'zh';
    case 'hindi': return 'hi';
    case 'russian': return 'ru';
    default: return 'en'; // Default to English if unknown
  }
}

  // Function to check if a string is a valid word
async function checkWordValidity(clusterId, wordString, organisms, currentTime, isRightClickFormed = false, scriptCategory = 'default') {
  // Add debug info
  console.log(`===== CHECKING WORD: "${wordString}" (Script: ${scriptCategory}, Length: ${wordString.length}) =====`);
  console.log(`Organisms in cluster: ${organisms.length}, Characters: ${organisms.map(o => o.textType).join('')}`);
  
  if (currentTime - (lastDictionaryCheckTime[scriptCategory] || 0) < CONFIG.wordSettings.apiCooldownDictionary) {
    console.log(`Cooldown active for ${scriptCategory}, word: ${wordString}`);
    return;
  }
  lastDictionaryCheckTime[scriptCategory] = currentTime;

  if (!wordString || wordString.length < 1) {
    return;
  }

  // UPDATED: Limit word length to a reasonable size - now more permissive
  const maxLength = 8; // Increased to allow longer common words like "beautiful", "wonderful"
  if (wordString.length > maxLength) {
    // If too long, we'll try to find words within this string
    console.log(`Word "${wordString}" is too long (${wordString.length} chars), checking for words within it`);
    findWordsWithinString(clusterId, wordString, organisms, currentTime, scriptCategory);
    return;
  }
  
  // Check if the word is valid using our dictionary
  console.log(`Checking word validity for: "${wordString}"`);
  
  const wordLower = wordString.toLowerCase();
  
  // Check against our comprehensive dictionary of common words - GREATLY EXPANDED
  const commonWords = [
      // Single letters that might be meaningful
      "a", "i",
      
      // 2-letter words - Essential building blocks
      "am", "an", "as", "at", "be", "by", "do", "go", "he", "if", "in", "is", "it", "me", "my", 
      "no", "of", "on", "or", "so", "to", "up", "us", "we", "hi", "ok", "ah", "oh", "ex", "ad",
      
      // 3-letter words - Very common short words
      "the", "and", "for", "not", "but", "his", "her", "you", "all", "was", "one", "our", "out", 
      "had", "has", "can", "who", "oil", "sit", "set", "run", "may", "way", "day", "say", "any", 
      "new", "now", "two", "how", "its", "why", "let", "put", "end", "get", "old", "see", "him", 
      "use", "man", "men", "boy", "too", "car", "far", "sea", "eye", "try", "big", "yes", "job", 
      "cut", "law", "war", "win", "buy", "pay", "lay", "key", "way", "may", "say", "day", "play",
      "cat", "dog", "pig", "cow", "bat", "rat", "hat", "mat", "sat", "fat", "eat", "tea", "sea",
      "red", "bed", "fed", "led", "wed", "net", "bet", "get", "set", "wet", "pet", "let", "met",
      "top", "hop", "pop", "cop", "mop", "hot", "got", "not", "pot", "lot", "rot", "dot", "cot",
      "sun", "fun", "run", "gun", "bun", "nut", "but", "cut", "hut", "gut", "put", "shut", 
      "fly", "sky", "try", "cry", "dry", "fry", "spy", "buy", "guy", "lay", "pay", "hay", "ray",
      "art", "arm", "ask", "add", "act", "age", "air", "bag", "bad", "ban", "bar", "bat", "box",
      "bus", "cap", "cup", "did", "dig", "ear", "egg", "fix", "fox", "gas", "ice", "joy", "kid",
      "leg", "map", "mix", "mud", "pan", "pen", "raw", "row", "sad", "tag", "van", "wax", "zoo",

      // 4-letter words - Building toward complexity
      "that", "with", "have", "this", "will", "your", "from", "they", "know", "want", "been", 
      "good", "much", "some", "time", "very", "when", "come", "here", "just", "like", "long", 
      "make", "many", "over", "such", "take", "than", "them", "well", "were", "what", "call", 
      "came", "each", "find", "first", "give", "hand", "high", "keep", "last", "left", "life", 
      "live", "look", "made", "most", "move", "must", "name", "need", "next", "only", "open", 
      "part", "play", "read", "real", "right", "said", "same", "seem", "show", "side", "tell", 
      "turn", "used", "want", "ways", "week", "went", "word", "work", "year", "also", "back", 
      "best", "both", "down", "even", "face", "feel", "form", "game", "girl", "help", "home", 
      "hour", "into", "kind", "line", "mind", "near", "once", "page", "pass", "place", "room", 
      "seen", "ship", "soon", "talk", "team", "told", "took", "turn", "walk", "week", "went",
      "able", "book", "care", "case", "city", "cool", "dark", "data", "date", "dear", "does", 
      "done", "door", "draw", "drop", "easy", "ever", "face", "fact", "fall", "fast", "feet", 
      "file", "fill", "fine", "fire", "fish", "five", "food", "foot", "four", "free", "full", 
      "glad", "gold", "gone", "gray", "grew", "grow", "hair", "half", "hard", "head", "hear", 
      "heat", "held", "hide", "hill", "hold", "hope", "huge", "idea", "inch", "iron", "join", 
      "jump", "kept", "kill", "knew", "laid", "land", "late", "lead", "lean", "left", "less", 
      "list", "load", "loan", "lock", "lose", "loss", "lost", "love", "male", "mark", "mass", 
      "meal", "mean", "meat", "meet", "mike", "milk", "mine", "miss", "mode", "moon", "more", 
      "note", "paid", "pain", "pair", "park", "path", "pick", "plan", "poor", "push", "race", 
      "rain", "rate", "rest", "rich", "rise", "risk", "road", "rock", "role", "roll", "roof", 
      "root", "rule", "safe", "sale", "save", "seat", "self", "sell", "send", "ship", "shop", 
      "shot", "sick", "sign", "size", "skin", "slip", "slow", "snow", "soft", "soil", "sold", 
      "song", "sort", "spot", "star", "stay", "step", "stop", "sure", "tall", "tank", "task", 
      "team", "term", "test", "text", "thin", "thus", "tile", "tiny", "tool", "tour", "town", 
      "tree", "trip", "true", "tune", "unit", "upon", "vary", "vast", "view", "vote", "wage", 
      "wait", "wake", "warm", "wash", "wave", "weak", "wear", "wide", "wife", "wild", "wind", 
      "wine", "wing", "wise", "wish", "wood", "wool", "wore", "yard", "yeah", "zero", "zone",

      // 5-letter words - Common longer words
      "about", "above", "after", "again", "among", "anger", "angry", "apple", "asked", "basic", 
      "beach", "began", "begin", "being", "below", "birth", "black", "blood", "board", "bring", 
      "broad", "brown", "build", "built", "carry", "catch", "cause", "chair", "chart", "check", 
      "child", "china", "chose", "civil", "class", "clean", "clear", "click", "clock", "close", 
      "cloud", "color", "could", "count", "court", "cover", "craft", "crazy", "cream", "cross", 
      "crowd", "cycle", "daily", "dance", "death", "depth", "doing", "doubt", "dozen", "drama", 
      "drawn", "dream", "dress", "drink", "drive", "drove", "dying", "eager", "early", "earth", 
      "eight", "empty", "enemy", "enjoy", "enter", "entry", "equal", "error", "event", "every", 
      "exact", "exist", "extra", "faith", "false", "fault", "field", "fifth", "fifty", "fight", 
      "final", "first", "fixed", "flash", "floor", "focus", "force", "forth", "forty", "found", 
      "frame", "frank", "fresh", "front", "fruit", "fully", "funny", "glass", "grace", "grade", 
      "grand", "grant", "grass", "great", "green", "gross", "group", "grown", "guard", "guess", 
      "guide", "happy", "heart", "heavy", "horse", "hotel", "house", "human", "hurry", "image", 
      "index", "inner", "input", "issue", "japan", "joint", "judge", "known", "label", "large", 
      "laser", "later", "laugh", "layer", "learn", "least", "leave", "legal", "level", "light", 
      "limit", "links", "lived", "local", "loose", "lower", "lucky", "lunch", "lying", "magic", 
      "major", "maker", "march", "match", "maybe", "mayor", "meant", "media", "metal", "might", 
      "minor", "minus", "mixed", "model", "money", "month", "moral", "motor", "mount", "mouse", 
      "mouth", "moved", "movie", "music", "needs", "never", "newer", "night", "noise", "north", 
      "noted", "novel", "nurse", "occur", "ocean", "offer", "often", "order", "other", "ought", 
      "owner", "paint", "panel", "paper", "party", "peace", "phase", "phone", "photo", "piano", 
      "piece", "pilot", "pitch", "place", "plain", "plane", "plant", "plate", "point", "pound", 
      "power", "press", "price", "pride", "prime", "print", "prior", "prize", "proof", "proud", 
      "prove", "queen", "quick", "quiet", "quite", "radio", "raise", "range", "rapid", "ratio", 
      "reach", "ready", "realm", "rebel", "refer", "relax", "repay", "reply", "right", "rigid", 
      "river", "robot", "roger", "roman", "rough", "round", "route", "royal", "rural", "scale", 
      "scene", "scope", "score", "sense", "serve", "setup", "seven", "shade", "shake", "shall", 
      "shame", "shape", "share", "sharp", "sheet", "shelf", "shell", "shift", "shine", "shirt", 
      "shock", "shoot", "short", "shown", "sides", "sight", "silly", "since", "sixth", "sixty", 
      "sized", "skill", "sleep", "slide", "small", "smart", "smile", "smith", "smoke", "snake", 
      "solid", "solve", "sorry", "sound", "south", "space", "spare", "speak", "speed", "spend", 
      "spent", "split", "spoke", "sport", "staff", "stage", "stake", "stand", "start", "state", 
      "steam", "steel", "steep", "steer", "stick", "still", "stock", "stone", "stood", "store", 
      "storm", "story", "strip", "stuck", "study", "stuff", "style", "sugar", "suite", "super", 
      "sweet", "swift", "swing", "sword", "table", "taken", "taste", "taxes", "teach", "teeth", 
      "texas", "thank", "theft", "their", "theme", "there", "these", "thick", "thing", "think", 
      "third", "those", "three", "threw", "throw", "thumb", "tight", "timer", "title", "today", 
      "topic", "total", "touch", "tough", "tower", "track", "trade", "train", "treat", "trend", 
      "trial", "tribe", "trick", "tried", "tries", "truck", "truly", "trust", "truth", "twice", 
      "twist", "uncle", "under", "undue", "union", "unity", "until", "upper", "upset", "urban", 
      "usage", "usual", "valid", "value", "video", "virus", "visit", "vital", "vocal", "voice", 
      "waste", "watch", "water", "wheel", "where", "which", "while", "white", "whole", "whose", 
      "woman", "women", "world", "worry", "worse", "worst", "worth", "would", "write", "wrong", 
      "wrote", "young", "youth",

      // Common word patterns for better formation
      "able", "like", "love", "hope", "word", "work", "play", "game", "life", "live", "time", 
      "best", "each", "help", "need", "feel", "know", "take", "give", "keep", "tell", "mean", 
      "talk", "tell", "ten", "than", "that", "the", "their", "them", "then", "there", "these", 
      "they", "thing", "think", "this", "those", "though", "thought", "thousand", "three", "through", 
      "thus", "time", "to", "today", "together", "told", "too", "took", "top", "toward", "town", 
      "tree", "true", "try", "turn", "two", "under", "until", "up", "upon", "us", "use", "usual", 
      "very", "voice", "wait", "walk", "want", "war", "warm", "was", "watch", "water", "way", "we", 
      "well", "went", "were", "west", "what", "wheel", "when", "where", "which", "while", "white", 
      "who", "whole", "why", "will", "wind", "window", "wish", "with", "within", "without", "woman", 
      "wonder", "word", "work", "world", "would", "write", "year", "yes", "yet", "you", "young", "your"
  ];
  
  if (commonWords.includes(wordLower)) {
      const definition = `A common English word: ${wordString}`;
      confirmWord(clusterId, wordString, organisms, currentTime, definition, scriptCategory, "english");
      console.log(`✅ SUCCESS: Accepted common English word: "${wordString}"`);
      return;
  }
  
  // Check for common Arabic words
  const commonArabicWords = ["ان", "من", "في", "الا", "هو", "هي", "ما", "لا", "نا", "با", "تا", "است", "به", "را"];
  if (commonArabicWords.includes(wordString) && scriptCategory === 'arabic') {
      const definition = `A common Arabic/Persian word: ${wordString}`;
      confirmWord(clusterId, wordString, organisms, currentTime, definition, scriptCategory, "arabic");
      console.log(`✅ SUCCESS: Accepted common Arabic word: "${wordString}"`);
      return;
  }
  
  // Check for common Chinese words
  const commonChineseWords = ["你好", "谢谢", "不客", "客气", "再见", "是的", "好的", "我们", "他们", "什么", "怎么", "为什么"];
  if (commonChineseWords.includes(wordString) && scriptCategory === 'eastAsian') {
      const definition = `A common Chinese word: ${wordString}`;
      confirmWord(clusterId, wordString, organisms, currentTime, definition, scriptCategory, "chinese");
      console.log(`✅ SUCCESS: Accepted common Chinese word: "${wordString}"`);
      return;
  }
  
  // Additional check for 2-letter words that might be missing from the main dictionary
  const common2LetterWords = ["am", "an", "as", "at", "be", "by", "do", "go", "he", "if", "in", "is", "it", "me", "my", "no", "of", "on", "or", "so", "to", "up", "us", "we"];
  if (wordString.length === 2 && common2LetterWords.includes(wordLower)) {
      const definition = `A common 2-letter English word: ${wordString}`;
      confirmWord(clusterId, wordString, organisms, currentTime, definition, scriptCategory, "english");
      console.log(`✅ SUCCESS: Accepted 2-letter English word: "${wordString}"`);
      return;
  }
    
    // Also check if it's in our predefined dictionary using the enhanced word generator
    if (enhancedWordGenerator.isValidWord(wordLower)) {
      const definition = `A word discovered in the biome: ${wordLower}`;
      confirmWord(clusterId, wordString, organisms, currentTime, definition, scriptCategory, "english");
      console.log(`Dictionary validation SUCCESS for "${wordString}"`);
      return;
  }

  const wordStringLower = wordString.toLowerCase();
  console.log(`Checking word: "${wordString}" (Script: ${scriptCategory})`);

  if (validatedWordsCache.has(wordStringLower)) {
    const cachedResult = validatedWordsCache.get(wordStringLower);
    if (cachedResult.isValid) {
      console.log(`Cache hit for "${wordString}": Valid`);
      confirmWord(clusterId, wordString, organisms, currentTime, cachedResult.definition, scriptCategory, cachedResult.language);
    } else {
      // console.log(`Cache hit for "${wordString}": Invalid`);
    }
    return;
  }

  // Initialize variables for word validation
  let isValidWord = false;
  let definition = "";
  let apiUsed = "none";
  let language = scriptToLang(scriptCategory); // Use mapping from scriptCategory
    
     // Offline Fallback (if not validated by WordNet for English or API for others)
  if (!isValidWord) {
    apiUsed = apiUsed === "none" ? "offline_fallback" : apiUsed + "+offline_fallback";
    // console.log(`Using offline fallback for "${wordString}" (Script: ${scriptCategory}, Lang: ${language})`);
    if (scriptCategory === 'default' || language === 'english') { // Primarily for English and other Latin scripts
      const commonWords = [
        // Original list
        "art", "the", "and", "you", "for", "not", "with", "this", "but", "his", "from", "they",
        "say", "she", "will", "one", "all", "would", "there", "their", "what", "out", "about",
        "who", "get", "which", "when", "make", "can", "like", "time", "just", "him", "know",
        "take", "into", "year", "your", "good", "some", "could", "these", "give", "day", "most",
        "creative", "design", "poem", "word", "life", "dream", "flow", "nature", "mind", "idea",
        "form", "light", "dark", "space", "echo", "voice", "sound", "image", "color", "shape",
        "move", "pulse", "wave", "rhythm", "energy", "being", "soul", "earth", "water", "fire",
        "air", "void", "chaos", "order",
        
        // Additional common English words
        "about", "above", "across", "act", "active", "add", "afraid", "after", "again", "age",
        "ago", "agree", "air", "allow", "alone", "along", "already", "always", "am", "amount",
        "an", "ancient", "anger", "angry", "animal", "answer", "any", "anyone", "anything",
        "appear", "apple", "are", "area", "arm", "army", "around", "arrive", "art", "as", "ask",
        "at", "away", "baby", "back", "bad", "bag", "ball", "bank", "base", "basket", "bath", "be",
        "beautiful", "bed", "bee", "been", "before", "begin", "behind", "bell", "belong", "below",
        "beside", "best", "better", "between", "big", "bird", "birth", "birthday", "bit", "bite",
        "black", "blame", "blank", "blind", "block", "blood", "blow", "blue", "board", "boat",
        "body", "book", "border", "born", "both", "bottle", "bottom", "bowl", "box", "boy",
        "branch", "brave", "bread", "break", "breath", "bridge", "bright", "bring", "brother",
        "brown", "brush", "build", "burn", "bus", "busy", "but", "buy", "by", "cake", "call",
        "can", "candle", "cap", "car", "card", "care", "carry", "case", "cat", "catch", "cause",
        "center", "certain", "chain", "chair", "chance", "change", "chase", "cheap", "cheese",
        "chicken", "chief", "child", "choose", "circle", "city", "class", "clean", "clear",
        "climb", "clock", "close", "cloth", "cloud", "coffee", "cold", "color", "come", "common",
        "complete", "contain", "continue", "control", "cook", "cool", "copper", "copy", "corn",
        "corner", "correct", "cost", "count", "country", "cover", "cow", "crack", "crash",
        "create", "cross", "crowd", "cry", "cup", "cut", "dance", "dark", "date", "day", "dead",
        "deaf", "dear", "death", "decide", "deep", "deer", "depend", "desk", "destroy", "die",
        "different", "difficult", "dig", "dinner", "direct", "dirt", "discover", "dish", "do",
        "dog", "door", "down", "drag", "draw", "dream", "dress", "drink", "drive", "drop", "dry",
        "duck", "dust", "duty", "each", "ear", "early", "earn", "earth", "east", "easy", "eat",
        "edge", "egg", "eight", "either", "else", "empty", "end", "enemy", "enjoy", "enough",
        "enter", "equal", "even", "event", "ever", "every", "exact", "except", "excite", "expect",
        "explain", "eye", "face", "fact", "fail", "fall", "false", "family", "famous", "far",
        "farm", "fast", "fat", "father", "fault", "fear", "feed", "feel", "fever", "few", "field",
        "fight", "fill", "film", "final", "find", "fine", "finger", "finish", "fire", "first",
        "fish", "fit", "five", "fix", "flag", "flat", "float", "floor", "flow", "flower", "fly",
        "fold", "food", "fool", "foot", "force", "forest", "forget", "fork", "form", "four",
        "free", "fresh", "friend", "from", "front", "fruit", "full", "fun", "funny", "future",
        "game", "garden", "gate", "gentle", "get", "gift", "girl", "give", "glad", "glass", "go",
        "goat", "gold", "good", "grass", "gray", "great", "green", "group", "grow", "guess",
        "guide", "gun", "hair", "half", "hall", "hand", "hang", "happen", "happy", "hard", "hat",
        "hate", "have", "head", "hear", "heart", "heat", "heavy", "hello", "help", "hen", "here",
        "hide", "high", "hill", "hit", "hold", "hole", "home", "hope", "horse", "hot", "hour",
        "house", "how", "huge", "human", "humor", "hunt", "hurry", "hurt", "ice", "idea", "if",
        "imagine", "in", "indeed", "inside", "instead", "into", "invite", "iron", "is", "island",
        "it", "its", "join", "joke", "joy", "jump", "just", "keep", "key", "kill", "kind", "king",
        "kitchen", "knee", "knife", "knock", "know", "lady", "lake", "land", "large", "last",
        "late", "laugh", "law", "lay", "lazy", "lead", "leaf", "learn", "least", "leave", "leg",
        "lend", "less", "let", "letter", "level", "lie", "life", "lift", "light", "like", "line",
        "lion", "lip", "list", "listen", "little", "live", "lock", "lonely", "long", "look",
        "lose", "lot", "loud", "love", "low", "luck", "lunch", "main", "make", "male", "man",
        "many", "map", "mark", "market", "matter", "may", "me", "meal", "mean", "meat", "meet",
        "member", "men", "mend", "milk", "mind", "mine", "miss", "mix", "moment", "money", "month",
        "moon", "more", "morning", "most", "mother", "mountain", "mouth", "move", "much", "music",
        "must", "name", "narrow", "nation", "nature", "near", "neat", "neck", "need", "needle",
        "neighbor", "neither", "net", "never", "new", "news", "next", "nice", "night", "nine", "no",
        "noble", "noise", "none", "nor", "north", "nose", "not", "note", "nothing", "notice", "now",
        "number", "obey", "object", "ocean", "of", "off", "offer", "office", "often", "oh", "oil",
        "old", "on", "once", "one", "only", "open", "or", "orange", "order", "other", "our", "out",
        "over", "own", "page", "pain", "paint", "pair", "pan", "paper", "parent", "park", "part",
        "party", "pass", "past", "path", "pay", "peace", "pen", "people", "person", "pick",
        "picture", "piece", "pig", "pin", "pink", "place", "plan", "plant", "plate", "play",
        "please", "plenty", "plow", "point", "police", "pool", "poor", "power", "press", "pretty",
        "price", "prince", "prison", "prize", "pull", "pure", "purple", "push", "put", "queen",
        "quick", "quiet", "quite", "race", "radio", "rain", "raise", "reach", "read", "ready",
        "real", "red", "rest", "rice", "rich", "ride", "right", "ring", "rise", "river", "road",
        "roar", "rock", "room", "root", "rope", "rose", "round", "rub", "rule", "run", "rush",
        "sad", "safe", "sail", "salt", "same", "sand", "save", "say", "school", "science",
        "scissors", "search", "seat", "second", "see", "seed", "seem", "sell", "send", "sense",
        "serve", "seven", "several", "shade", "shadow", "shake", "shall", "shape", "share", "sharp",
        "she", "sheep", "sheet", "shelf", "shine", "ship", "shirt", "shoe", "shoot", "shop",
        "short", "should", "shoulder", "shout", "show", "sick", "side", "sign", "signal", "silent",
        "silver", "simple", "since", "sing", "single", "sink", "sister", "sit", "six", "size",
        "skill", "skin", "skirt", "sky", "sleep", "slide", "slow", "small", "smell", "smile",
        "smoke", "smooth", "snake", "snow", "so", "soap", "sock", "soft", "some", "son", "song",
        "soon", "sorry", "sound", "soup", "south", "space", "speak", "special", "speed", "spell",
        "spend", "spill", "spin", "spirit", "spit", "split", "sport", "spread", "spring", "square",
        "staff", "stage", "star", "start", "state", "stay", "steal", "steam", "step",
        "stick", "stiff", "still", "stone", "stop", "store", "storm", "story", "stove", "strange",
        "street", "stretch", "string", "strong", "student", "study", "stupid", "such", "sudden",
        "sugar", "suit", "summer", "sun", "supper", "sure", "sweet", "swim", "sword", "table",
        "take", "talk", "tall", "teach", "team", "tear", "tell", "ten", "tennis", "test", "than",
        "that", "the", "their", "then", "there", "these", "thick", "thin", "thing", "think",
        "third", "this", "those", "though", "threat", "three", "throat", "through", "throw",
        "thumb", "thunder", "thus", "tie", "tiger", "tight", "till", "time", "tin", "tiny", "tip",
        "tire", "to", "today", "toe", "together", "tomorrow", "tongue", "tonight", "too", "tool",
        "tooth", "top", "total", "touch", "town", "train", "tram", "travel", "tree", "trouble",
        "true", "trust", "try", "turn", "twice", "two", "ugly", "uncle", "under", "understand",
        "unit", "until", "up", "use", "usual", "valley", "value", "various", "very", "village",
        "visit", "voice", "wait", "wake", "walk", "wall", "want", "war", "warm", "wash", "waste",
        "watch", "water", "wave", "way", "we", "weak", "wear", "weather", "week", "weight",
        "welcome", "well", "west", "wet", "what", "wheel", "when", "where", "which", "while",
        "white", "who", "why", "wide", "wife", "wild", "will", "win", "wind", "window", "wine",
        "wing", "winter", "wire", "wise", "wish", "with", "without", "woman", "wonder", "word",
        "work", "world", "worry", "yard", "yell", "yesterday", "yet", "you", "young", "your", "zero"
      ];
      if (commonWords.includes(wordStringLower)) {
        isValidWord = true;
        definition = definition || "A common word."; // Keep API/WordNet definition if it existed
      }
    }

    // Generic fallback rules (apply if still not valid, for any language)
    if (!isValidWord) {
        // Check against our more comprehensive word system using enhanced word generator
        if (enhancedWordGenerator.isValidWord(wordStringLower)) {
            isValidWord = true;
            definition = definition || `A word detected in the biome.`;
            console.log(`Local dictionary validation FALLBACK for "${wordString}"`);
        }
        
        // Enhanced word detection - accept if the word is at least 2 characters
        // and starts with a letter (a more lenient approach to word formation)
        if (!isValidWord && wordStringLower.length >= 2 && /^[a-z]/.test(wordStringLower)) {
            console.log(`Accepting potential word: "${wordString}"`);
            isValidWord = true;
            definition = definition || `A possible word formation: ${wordString}`;
        }
        
        // Do not force acceptance of invalid words
        if (!isValidWord) {
            console.log(`Word "${wordString}" is not valid - not in any dictionary`);
            return; // Exit without confirming the word
        }
    }
  }
    
    // Add to cache
    validatedWordsCache.set(wordStringLower, {
      isValid: isValidWord,
      definition: definition,
      timestamp: currentTime,
      language: language, // Store the detected language
      api: apiUsed
    });
  
    if (isValidWord) {
      console.log(`Word VALIDATED: "${wordString}" (Lang: ${language}, Def: ${definition}, API: ${apiUsed})`);
      console.log(`✅ WORD VALIDATED: "${wordString}" - Adding to confirmed words list!`);
      if (isRightClickFormed && wordString.length >= 3 && language === 'english') { // generatePossibleWords is likely English-centric
        const possibleWords = generatePossibleWords(wordString); // This needs to be WordNet-aware if possible
        if (possibleWords && possibleWords.length > 0) {
          // If we have word options to show, display them
          if (possibleWords.length > 1) {
            showWordSelectionUI(clusterId, possibleWords, organisms, currentTime);
            return;
          }
          // If only one word option (which is validated), continue with that word
        } else {
          // If no valid words found at all, log and reject
          console.log(`No valid word possibilities found for "${wordString}"`);
          isValidWord = false;
          return;
        }
      }
      confirmWord(clusterId, wordString, organisms, currentTime, definition, scriptCategory, language);
      metadata.validWordCount = (metadata.validWordCount || 0) + 1;
  
      let notificationElement = document.getElementById("notification");
      if (notificationElement) {
        notificationElement.innerHTML = `Word Found: <strong>${wordString}</strong> (${language})`;
        notificationElement.classList.add("visible");
        setTimeout(() => { notificationElement.classList.remove("visible"); }, 3000);
      }
      // Play success sound for valid word
      if (CONFIG.audioEnabled) {
        try {
          // Play successively higher notes as a "success" sequence
          let baseNote = 300;
          for (let i = 0; i < 3; i++) {
            setTimeout(() => {
              playSound(baseNote + (i * 100), 0); // Center pan
            }, i * 150);
          }
        } catch (e) {
          console.warn("Error playing success sound:", e);
        }
      }
    } else {
      console.log(`Word INVALIDATED: "${wordString}" (Lang: ${language}, API: ${apiUsed})`);
      console.log(`❌ Word not valid: "${wordString}" - Not recognized as a real word`); 
      
      // Debug: Check against common words list directly for English
      if (scriptCategory === 'default') {
        const debugCommonWords = [
          "the", "and", "for", "not", "with", "but", "his", "from", "they", "say", "she", "will", 
          "one", "all", "you", "was", "were", "that", "this", "what", "when", "who", "how", "which",
          "now", "get", "got", "see", "saw", "look", "put", "take", "took", "made", "make", "come", 
          "came", "give", "gave", "find", "time", "day", "year", "way", "home", "life", "work",
          "air", "boy", "car", "dog", "eye", "far", "hat", "ice", "joy", "key", "leg", "man", "new",
          "old", "pen", "red", "sun", "two", "use", "war", "yes", "art", "cat", "eat", "fat", "god",
          "hit", "job", "law", "mix", "pay", "run", "sit", "top", "win", "add", "age", "bad", "box",
          "cry", "cut", "did", "dry", "end", "few", "fix", "fly", "fun", "gas", "guy", "hot", "let",
          "lie", "low", "map", "may", "odd", "oil", "own", "per", "pop", "raw", "sea", "set", "sky",
          "tax", "ten", "try", "use", "via", "war", "wax", "yet", "zoo", "bait"
        ];
        
        if (debugCommonWords.includes(wordStringLower)) {
          console.log(`⚠️ WARNING: "${wordString}" is in debug common words list but was NOT validated!`);
        }
      }
    }
  }

// Function to find valid words within a longer string
function findWordsWithinString(clusterId, wordString, organisms, currentTime, scriptCategory = 'default') {
  const wordLower = wordString.toLowerCase();
  let foundWords = false;
  
  // Get a list of common words to check against
  const commonWords = [
      // Common short words
      "the", "and", "for", "not", "with", "but", "his", "from", "they", "say", "she", "will", 
      "one", "all", "you", "was", "were", "that", "this", "what", "when", "who", "how", "which",
      "now", "get", "got", "see", "saw", "look", "put", "take", "took", "made", "make", "come", 
      "came", "give", "gave", "find", "time", "day", "year", "way", "home", "life", "work",
      "air", "boy", "car", "dog", "eye", "far", "hat", "ice", "joy", "key", "leg", "man", "new",
      "old", "pen", "red", "sun", "two", "use", "war", "yes", "art", "cat", "eat", "fat", "god",
      "hit", "job", "law", "mix", "pay", "run", "sit", "top", "win", "add", "age", "bad", "box",
      "cry", "cut", "did", "dry", "end", "few", "fix", "fly", "fun", "gas", "guy", "hot", "let",
      "lie", "low", "map", "may", "odd", "oil", "own", "per", "pop", "raw", "sea", "set", "sky",
      "tax", "ten", "try", "use", "via", "war", "wax", "yet", "zoo", "bait"
  ];

  // Look for each common word in the string
  for (const word of commonWords) {
    if (word.length >= CONFIG.wordSettings.minClusterSize && wordLower.includes(word)) {
      console.log(`Found word "${word}" inside "${wordLower}"`);
      const definition = `A word found within "${wordString}": ${word}`;
      
      // We need to find the organisms that correspond to this substring
      const startIndex = wordLower.indexOf(word);
      const endIndex = startIndex + word.length;
      
      // Create a subset of organisms that match the found word
      // This is an approximation - we're assuming the organisms are in the same order as the characters
      const relevantOrganisms = organisms.slice(startIndex, endIndex);
      
      if (relevantOrganisms.length === word.length) {
        confirmWord(clusterId, word, relevantOrganisms, currentTime, definition, scriptCategory, "english");
        foundWords = true;
      }
    }
  }

  // Also check for words from our predefined dictionary
  const possibleWords = generatePossibleWords(wordLower);
  for (const word of possibleWords) {
    if (word.length >= CONFIG.wordSettings.minClusterSize && wordLower.includes(word)) {
      console.log(`Found dictionary word "${word}" inside "${wordLower}"`);
      const definition = `A word found within "${wordString}": ${word}`;
      
      // Find the organisms corresponding to this substring
      const startIndex = wordLower.indexOf(word);
      const endIndex = startIndex + word.length;
      const relevantOrganisms = organisms.slice(startIndex, endIndex);
      
      if (relevantOrganisms.length === word.length) {
        confirmWord(clusterId, word, relevantOrganisms, currentTime, definition, scriptCategory, "english");
        foundWords = true;
      }
    }
  }
  
  return foundWords;
}

// Enhanced generatePossibleWords function using the new system
function generatePossibleWords(letters) {
  if (!letters || letters.length < 2) return [];
  
  // Use the enhanced word generator
  const possibleWords = enhancedWordGenerator.generatePossibleWords(letters, 2, 5);
  
  // Special handling for 5-letter combinations
  if (letters.length >= 5) {
    const fiveLetterWords = enhancedWordGenerator.generate5LetterWords(letters);
    console.log(`🎯 Found ${fiveLetterWords.length} five-letter words:`, fiveLetterWords);
  }
  
  // Enhanced word detection: also try to generate longer words if we have enough letters
  if (letters.length >= 6) {
    const longerWords = enhancedWordGenerator.generateLongestWords(letters, 6);
    console.log(`📏 Found ${longerWords.length} words prioritizing 6-letter combinations:`, longerWords.slice(0, 5));
  }
  
  // Log for debugging
  if (possibleWords.length > 0) {
    console.log(`✅ FOUND ${possibleWords.length} POSSIBLE WORDS from letters: ${letters}`);
    console.log("Words:", possibleWords.slice(0, 10)); // Show first 10
  } else {
    console.log(`❌ No words found from letters: ${letters}`);
    
    // Try suggestions if no direct words found
    const suggestions = enhancedWordGenerator.getSuggestions(letters, 5);
    if (suggestions.length > 0) {
      console.log(`💡 Word suggestions based on available letters:`, suggestions.slice(0, 5));
    }
  }
  
  return possibleWords;
}

// NEW: Show UI for selecting between multiple possible words
function showWordSelectionUI(clusterId, possibleWords, organisms, currentTime) {
  console.log("Showing word selection UI for:", possibleWords);
  
  // Create UI element for word selection
  const container = document.createElement('div');
  container.id = 'word-selection-container';
  container.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 20px;
    z-index: 100;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
    max-width: 80%;
  `;
  
  // Create title
  const title = document.createElement('h3');
  title.textContent = 'Multiple Words Possible';
  title.style.cssText = `
    margin-top: 0;
    color: #fff;
    font-size: 18px;
  `;
  container.appendChild(title);
  
  // Create subtitle
  const subtitle = document.createElement('p');
  subtitle.textContent = 'Select a word to form:';
  subtitle.style.cssText = `
    margin-bottom: 15px;
    color: #ccc;
    font-size: 14px;
  `;
  container.appendChild(subtitle);
  
  // Create buttons for each word
  const buttonContainer = document.createElement('div');
  buttonContainer.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  `;
  
  possibleWords.forEach(word => {
    const button = document.createElement('button');
    button.textContent = word;
    button.style.cssText = `
      background-color: #444;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 15px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.2s;
    `;
    
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = '#666';
    });
    
    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = '#444';
    });
    
    button.addEventListener('click', () => {
      // Remove the selection UI
      document.body.removeChild(container);
      
      // Process the selected word
      console.log("Selected word:", word);
      confirmWord(clusterId, word, organisms, currentTime, "A word discovered in the biome.");
      
      // Provide feedback for selection
      let notificationElement = document.getElementById("notification");
      if (notificationElement) {
        notificationElement.innerHTML = `Word Selected: <strong>${word}</strong>`;
        notificationElement.classList.add("visible");
        
        setTimeout(() => {
          notificationElement.classList.remove("visible");
        }, 3000);
      }
      
      // Play success sound
      if (audioEnabled) {
        try {
          let baseNote = 300;
          for (let i = 0; i < 3; i++) {
            setTimeout(() => {
              playSound(baseNote + (i * 100), 0);
            }, i * 150);
          }
        } catch (e) {
          console.warn("Error playing success sound:", e);
        }
      }
    });
    
    buttonContainer.appendChild(button);
  });
  container.appendChild(buttonContainer);
  
  // Add cancel button
  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancel';
  cancelButton.style.cssText = `
    background-color: #222;
    color: #ccc;
    border: none;
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 14px;
    cursor: pointer;
    margin-top: 15px;
  `;
  
  cancelButton.addEventListener('click', () => {
    document.body.removeChild(container);
  });
  container.appendChild(cancelButton);
  
  // Add to the document
  document.body.appendChild(container);
}

// Helper function to confirm a valid word
function confirmWord(clusterId, wordString, organisms, currentTime, definition, scriptCategory = 'default', language = 'english') {
  // Create the word object
  const wordObj = {
    word: wordString,
    organisms: organisms,
    displayUntil: currentTime + CONFIG.wordSettings.wordDisplayTime3D,
    definition: definition || "A word discovered in the biome.",
    scriptCategory: scriptCategory,
    language: language
  };
  
  // Add to confirmed words
  confirmedWords.push(wordObj);
  
  console.log(`Word confirmed: ${wordString} - ${definition}`);
  
  // Show notification
  let notificationElement = document.getElementById("notification");
  if (notificationElement) {
    notificationElement.textContent = `WORD FOUND: "${wordString.toUpperCase()}"`;
    notificationElement.classList.add("active");
    setTimeout(() => {
      notificationElement.classList.remove("active");
    }, 3000);
  }
  
  // Remove from potential clusters to avoid duplicate confirmations
  potentialClusters.delete(clusterId);
  
  // Automatically collect the word - ENHANCED VERSION
  // Don't exceed max collected words
  if (collectedWords.length < CONFIG.wordSettings.maxCollectedWords) {
    // Check if word already exists in collection to avoid duplicates
    const wordExists = collectedWords.some(w => w.word.toLowerCase() === wordString.toLowerCase());
    
    if (!wordExists) {
      collectedWords.push({
        word: wordString,
        definition: definition || "A word discovered in the biome.",
        translations: {}, // Placeholder for translations
        timestamp: currentTime,
        source: "auto-detection"
      });
      
      console.log(`✅ WORD SUCCESSFULLY COLLECTED: ${wordString}`);
      console.log(`📝 Total words collected: ${collectedWords.length}`);
      console.log("🔤 Current collection:", collectedWords.map(w => w.word).join(", "));
      
      // Play a more distinctive sound for word collection
      if (CONFIG.audioEnabled) {
        try {
          // Play successively higher notes as a "success" sequence
          let baseNote = 400;
          for (let i = 0; i < 4; i++) {
            setTimeout(() => {
              playSound(baseNote + (i * 100), 0); // Center pan
            }, i * 120);
          }
        } catch (e) {
          console.warn("Error playing word collection sound:", e);
        }
      }
      
      // Enhanced notification system
      let notificationElement = document.getElementById("notification");
      if (notificationElement) {
        notificationElement.innerHTML = `<strong>✨ WORD COLLECTED:</strong> ${wordString.toUpperCase()}`;
        notificationElement.classList.add("visible");
        notificationElement.classList.add("word-collected");
        setTimeout(() => { 
          notificationElement.classList.remove("visible"); 
          notificationElement.classList.remove("word-collected");
        }, 3500);
      }
      
      // Immediately update the word list UI after collection
      console.log("🔄 Updating word list UI...");
      updateWordList();
      
      // Verify the update worked
      setTimeout(() => {
        const wordListContent = document.getElementById('wordListContent');
        if (wordListContent) {
          console.log(`✅ Word list UI updated. Content: ${wordListContent.children.length} items`);
        } else {
          console.error("❌ Word list content element not found!");
        }
      }, 100);
      
    } else {
      console.log(`⚠️ Word "${wordString}" already in collection.`);
    }
  } else {
    console.log("❌ Word collection full! Cannot collect more words.");
  }
}

// Function to display confirmed words in the 3D environment
function displayConfirmedWords() {
  if (confirmedWords.length === 0) return;
  
  const currentTime = millis();
  
      push();
  
  // Use p5's text functions to display the words over the clusters
        textAlign(CENTER, CENTER);
  textSize(24);
  
  for (const word of confirmedWords) {
    // Calculate center position of all organisms in this word's cluster
    let centerX = 0, centerY = 0, centerZ = 0;
    for (const org of word.organisms) {
      centerX += org.pos.x;
      centerY += org.pos.y;
      centerZ += org.pos.z;
    }
    centerX /= word.organisms.length;
    centerY /= word.organisms.length;
    centerZ /= word.organisms.length;
    
    // Add slight offset above the cluster
    centerY -= 30;
    
    // Calculate fade based on remaining display time
    const remainingTime = word.displayUntil - currentTime;
    let opacity = 1;
    
    // Fade in first 500ms, fade out last 1000ms
    if (remainingTime < 1000) {
      opacity = map(remainingTime, 0, 1000, 0, 1);
    } else if (word.displayUntil - currentTime > CONFIG.wordSettings.wordDisplayTime3D - 500) {
      const elapsed = CONFIG.wordSettings.wordDisplayTime3D - (word.displayUntil - currentTime);
      opacity = map(elapsed, 0, 500, 0, 1);
    }
    
    // Draw a subtle glow behind the text
    push();
    translate(centerX, centerY, centerZ);
    
    // Always face camera (use billboard technique)
    // This is a simplified solution that works with p5.js 3D
    rotateY(-cameraRotation.y);
    rotateX(-cameraRotation.x);
    
    // Draw enhanced glow behind text
    noStroke();
    
    // Stronger outer glow
    fill(255, 255, 255, 25 * opacity);
    ellipse(0, 0, word.word.length * 16 + 30, 60);
    
    // Medium glow
    fill(255, 255, 255, 40 * opacity);
    ellipse(0, 0, word.word.length * 15 + 25, 55);
    
    // Inner glow (more visible)
    fill(255, 255, 255, 60 * opacity);
    ellipse(0, 0, word.word.length * 14 + 20, 50);
    
    // Draw text with stronger contrast
    fill(255, 255, 255, 230 * opacity);
    
    // Draw slight shadow for better readability
    push();
    translate(1, 1, -0.5);
    fill(0, 0, 0, 100 * opacity);
    text(word.word, 0, 0);
    pop();
    
    // Main text
    fill(255, 255, 255, 230 * opacity);
    text(word.word, 0, 0);
    
    // Draw subtle particles around confirmed word
    for (let i = 0; i < 8; i++) {
      push();
      const angle = i * (TWO_PI / 8) + frameCount * 0.02;
      const radius = 30 + sin(frameCount * 0.05 + i) * 5;
      translate(cos(angle) * radius, sin(angle) * radius, 0);
      fill(255, 255, 255, 70 * opacity);
      noStroke();
      // Use a smaller sphere for particles
      sphere(2);
      pop();
    }
    
    // Also highlight the organisms that form this word
    for (const org of word.organisms) {
      // Draw a connection line from word to organism
      stroke(255, 255, 255, 100 * opacity);
      strokeWeight(1);
      line(0, 0, 0, org.pos.x - centerX, org.pos.y - centerY, org.pos.z - centerZ);
      
      // If organism has a mesh, temporarily highlight it
      if (org.mesh && org.mesh.material) {
        org.mesh.material.emissive = new THREE.Color(0.3, 0.3, 0.5);
        org.mesh.material.emissiveIntensity = 0.7 * opacity;
        
        // Reset emissive after a short delay (in next frame)
        setTimeout(() => {
          if (org.mesh && org.mesh.material) {
            org.mesh.material.emissive = new THREE.Color(0, 0, 0);
            org.mesh.material.emissiveIntensity = 0;
          }
        }, 100);
      }
    }
    
    pop();
  }
  
  pop();
   // Update stats for HTML display (if elements exist)
  if (wordCountEl) {
    wordCountEl.textContent = `WORDS: ${collectedWords.length}`;
  }
  if (totalScoreEl) {
    let score = 0;
    collectedWords.forEach(w => score += w.word.length);
    totalScoreEl.textContent = `SCORE: ${score}`;
  }
  
  // Update the word list box UI
  updateWordList();
} // End of displayConfirmedWords

// Display verse words and provide interactive hints
function displayVerseWords() {
  if (verseWords.length === 0) {
    // Display instruction text when no words are placed yet
    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255, 255, 255, 150);
    translate(0, 0, 0);
    
    // Billboard text to always face camera
    rotateY(-cameraRotation.y);
    rotateX(-cameraRotation.x);
    
    text("Select words from your palette", 0, -50);
    text("Click in 3D space to place them", 0, 0);
    text("Create your verse", 0, 50);
    pop();
    return;
  }
  
  // Display verse statistics and information
  push();
  textAlign(LEFT, TOP);
  textSize(20);
  fill(255, 255, 255, 200);
  translate(-width/2 + 50, -height/2 + 100, 100);
  
  // Billboard text to always face camera
  rotateY(-cameraRotation.y);
  rotateX(-cameraRotation.x);
  
  text(`Verse: ${currentVerse.title}`, 0, 0);
  text(`Words placed: ${verseWords.length}`, 0, 30);
  
  if (selectedWordForPlacement) {
    text(`Selected: "${selectedWordForPlacement}"`, 0, 60);
    text("Click in space to place", 0, 90);
  } else {
    text("Select a word to place", 0, 60);
  }
  
  pop();
  
  // The Three.js meshes are already being rendered by the Three.js renderer
  // We just need to add some interactive elements here if needed
  
  // Draw selection indicators around verse words when hovering
  for (let i = 0; i < verseWords.length; i++) {
    const vw = verseWords[i];
    if (vw.mesh) {
      // Add subtle glow effect around placed words
      push();
      translate(vw.position.x, vw.position.y, vw.position.z);
      
      // Billboard effect
      rotateY(-cameraRotation.y);
      rotateX(-cameraRotation.x);
      
      // Draw subtle glow
      noStroke();
      fill(255, 100, 100, 30 + sin(frameCount * 0.05 + i) * 15);
      ellipse(0, 0, vw.word.length * 20 + 40, 80);
      
      // Draw word number/index
      fill(255, 255, 255, 100);
      textAlign(CENTER, CENTER);
      textSize(12);
      text(`${i + 1}`, 0, -40);
      
      pop();
    }
  }
}


// Apply flocking behaviors (separation, alignment, cohesion) in 3D space
function applyFlockingBehaviors(organism) {
  // Get neighbors efficiently using spatial partitioning
  let neighbors = getNeighbors(
    organism.pos.x,
    organism.pos.y,
    organism.pos.z,
    CONFIG.cohesionDistance
  );

  // Initialize steering forces
  let separation = createVector(0, 0, 0);
  let alignment = createVector(0, 0, 0);
  let cohesion = createVector(0, 0, 0);
  let scriptCohesion = createVector(0, 0, 0); // NEW: Special force for same-script attraction

  // Count valid neighbors for each behavior
  let sepCount = 0;
  let aliCount = 0;
  let cohCount = 0;
  let scriptCount = 0; // NEW: Count for same-script neighbors

  // Check each neighbor
  for (let i = 0; i < neighbors.length; i++) {
    let other = neighbors[i];

    // Skip self
    if (other === organism) continue;

    // Calculate 3D distance
    let d = p5.Vector.dist(organism.pos, other.pos);

    // Separation (avoid crowding)
    if (d < CONFIG.separationDistance) {
      // Calculate vector pointing away from neighbor
      let diff = p5.Vector.sub(organism.pos, other.pos);
      diff.normalize();
      diff.div(d * d); // NEW: Weight by inverse square distance for more natural spacing
      separation.add(diff);
      sepCount++;
    }

    // Alignment (steer towards average heading)
    if (d < CONFIG.alignmentDistance) {
      alignment.add(other.vel);
      aliCount++;
    }

    // Cohesion (steer towards center of neighbors)
    if (d < CONFIG.cohesionDistance) {
      cohesion.add(other.pos);
      cohCount++;
      
      // NEW: Special script-based cohesion
      // If this organism shares the same script category with neighbor, create stronger attraction
      if (organism.scriptCategory === other.scriptCategory && 
          organism.scriptCategory !== "default" && 
          !["circle", "triangle", "square", "spiral", "asterisk", "cross"].includes(organism.textType)) {
        // Create vector pointing toward the same-script neighbor
        let sameScriptDiff = p5.Vector.sub(other.pos, organism.pos);
        sameScriptDiff.normalize();
        // Closer neighbors have stronger effect
        sameScriptDiff.mult(map(d, 0, CONFIG.cohesionDistance, 1.5, 0.5));
        scriptCohesion.add(sameScriptDiff);
        scriptCount++;
      }
    }
  }

  // Calculate average and apply steering
  if (sepCount > 0) {
    separation.div(sepCount);
    separation.normalize();
    separation.mult(organism.dna.speed);
    separation.sub(organism.vel);
    separation.limit(CONFIG.maxForce * 1.3); // Slightly reduced from 1.5 to allow closer clustering
  }

  if (aliCount > 0) {
    alignment.div(aliCount);
    alignment.normalize();
    alignment.mult(organism.dna.speed);
    alignment.sub(organism.vel);
    alignment.limit(CONFIG.maxForce * 0.9); // Increased from 0.8 for better group movement
  }

  if (cohCount > 0) {
    cohesion.div(cohCount);
    cohesion.sub(organism.pos);
    cohesion.normalize();
    cohesion.mult(organism.dna.speed);
    cohesion.sub(organism.vel);
    cohesion.limit(CONFIG.maxForce * 0.7); // Increased from 0.6 for stronger grouping
  }
  
  // NEW: Process script cohesion force if it exists
  if (scriptCount > 0) {
    scriptCohesion.normalize();
    scriptCohesion.mult(organism.dna.speed * 0.7); // Apply a strong attractive force
    scriptCohesion.limit(CONFIG.maxForce * 1.0); // Allow full strength for script cohesion
  }

  // Apply steering forces with weights based on DNA (further reduced for maximum free movement)
  let sepWeight = map(organism.dna.socialFactor, 0, 1, 1.0, 0.2); // Further reduced separation weight
  let aliWeight = organism.dna.socialFactor * 0.5; // Further reduced alignment for more individual movement
  let cohWeight =
    organism.dna.socialFactor * 0.4 * (organism.dna.attraction ? 1 : -0.5); // Further reduced cohesion
    
  // NEW: Script cohesion weight - always positive to encourage word formation
  let scriptWeight = organism.dna.socialFactor * 1.0; // Slightly reduced script cohesion for freer movement

  // Apply forces to organism
  separation.mult(sepWeight);
  alignment.mult(aliWeight);
  cohesion.mult(cohWeight);
  if (scriptCount > 0) {
    scriptCohesion.mult(scriptWeight);
  }

  organism.applyForce(separation);
  organism.applyForce(alignment);
  organism.applyForce(cohesion);
  
  // NEW: Apply script cohesion force if applicable
  if (scriptCount > 0) {
    organism.applyForce(scriptCohesion);
  }
  
  // NEW: Add a slight dampening force to reduce chaotic movement
  const dampening = organism.vel.copy();
  dampening.mult(-0.002); // Further reduced dampening for maximum freedom of movement
  organism.applyForce(dampening);
  
  // NEW: If focus resonance is active, enhance its effect to encourage word formation
  if (focusResonanceActive && focusResonancePosition) {
    const distToFocus = p5.Vector.dist(organism.pos, focusResonancePosition);
    
    if (distToFocus < focusResonanceRadius) {
      // Calculate force strength based on distance (stronger closer to center)
      const forceMag = map(
        distToFocus,
        0,
        focusResonanceRadius,
        CONFIG.wordSettings.focusResonanceStrength,
        0
      );
      
      // Create force vector toward focus point
      const focusForce = p5.Vector.sub(focusResonancePosition, organism.pos);
      focusForce.normalize();
      focusForce.mult(forceMag * CONFIG.maxForce);
      
      // Apply force to organism
      organism.applyForce(focusForce);
      
      // Apply damping to slow organisms in the focus area
      organism.vel.mult(CONFIG.wordSettings.focusResonanceDamping);
      
      // If an organism is in focus area and has same-script neighbors, make it more likely to form words
      if (scriptCount > 0) {
        // Subtle rotation adjustment to face similar organisms
        organism.rotation.y += 0.01 * (random() - 0.5);
        organism.rotation.x += 0.01 * (random() - 0.5);
      }
    }
  }
}

// Setup UI elements for 3D version
function setupUI() {
  // Create enhanced notification element for word validation and other messages
  const notification = document.createElement("div");
  notification.id = "notification";
  notification.style.cssText = `
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    z-index: 2000;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    pointer-events: none;
    border: 2px solid #888;
    box-shadow: 0 0 15px rgba(255,255,255,0.3);
    letter-spacing: 1px;
  `;
  // Start with the notification hidden (opacity: 0)
  document.body.appendChild(notification);
  
  // Add a class for showing the notification
  const style = document.createElement('style');
  style.textContent = `
    #notification.active {
      opacity: 1 !important;
      transform: translate(-50%, -50%) scale(1.05);
    }
  `;
  document.head.appendChild(style);

  // Info panel toggle
  const infoToggle = document.getElementById("info-toggle");
  const infoPanel = document.getElementById("info-panel");

  if (infoToggle && infoPanel) {
    infoToggle.addEventListener("click", () => {
      infoPanel.classList.toggle("hidden");
      infoToggle.classList.toggle("active");
    });
  }

  // Verse mode toggle
  const verseModeToggle = document.getElementById("verse-mode-toggle");
  if (verseModeToggle) {
    verseModeToggle.addEventListener("click", () => {
      toggleVerseMode();
    });
  }

  // Palette toggle
  const paletteToggle = document.getElementById("palette-toggle");

  if (paletteToggle) {
    paletteToggle.addEventListener("click", () => {
      cycleHighlightScript(); // Cycles script highlight modes
    });
    // Initialize icon state by calling the cycle function once without advancing
    let initialHighlightIndex = currentHighlightIndex;
    cycleHighlightScript();
    // Restore the original index
    currentHighlightIndex = initialHighlightIndex;
    highlightedScriptCategory = availableScriptCategories[currentHighlightIndex];
  }

  // Sound toggle
  const soundToggle = document.getElementById("sound-toggle");

  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      toggleSound();
      soundToggle.classList.toggle("active", audioEnabled);
    });
  }

  // Add QR code click behavior
  const qrCode = document.getElementById("qr-code");

  if (qrCode) {
    qrCode.addEventListener("click", () => {
      window.open("https://timrodenbroeker.de", "_blank");
    });
  }

    // Verse panel controls
  const saveVerseBtn = document.getElementById("save-verse-btn");
  const exportTextBtn = document.getElementById("export-text-btn");
  const exportJsonBtn = document.getElementById("export-json-btn");
  const exportScreenshotBtn = document.getElementById("export-screenshot-btn");
  const clearVerseBtn = document.getElementById("clear-verse-btn");
  const verseTitleInput = document.getElementById("verse-title");
  
  if (saveVerseBtn) {
    saveVerseBtn.addEventListener("click", () => {
      saveCurrentVerse();
    });
  }
  
  if (exportTextBtn) {
    exportTextBtn.addEventListener("click", () => {
      exportVerseAsText();
    });
  }
  
  if (exportJsonBtn) {
    exportJsonBtn.addEventListener("click", () => {
      exportVerseAsJSON();
    });
  }
  
  if (exportScreenshotBtn) {
    exportScreenshotBtn.addEventListener("click", () => {
      exportVerseAsScreenshot();
    });
  }
  
  if (clearVerseBtn) {
    clearVerseBtn.addEventListener("click", () => {
      clearCurrentVerse();
    });
  }

  if (verseTitleInput) {
    verseTitleInput.addEventListener("input", (e) => {
      currentVerse.title = e.target.value;
    });
  }

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // Check if user is typing in an input field
    const activeElement = document.activeElement;
    const isTyping = activeElement && (
      activeElement.tagName === 'INPUT' || 
      activeElement.tagName === 'TEXTAREA' || 
      activeElement.contentEditable === 'true'
    );
    
    // If user is typing, only allow specific shortcuts
    if (isTyping) {
      console.log("🔤 User is typing, ignoring most shortcuts");
      // Only allow escape to unfocus
      if (e.key === 'Escape') {
        activeElement.blur();
        console.log("👋 Unfocused input via Escape key");
      }
      return; // Don't process other shortcuts when typing
    }
    
    switch (e.key.toLowerCase()) {
      case "v":
        toggleVerseMode();
        break;
      case "c":
        cycleHighlightScript(); // NEW: Now cycles script highlight modes
        break;
      case "s":
        toggleSound();
        if (soundToggle) soundToggle.classList.toggle("active", audioEnabled);
        break;
      case "i":
        if (infoPanel) infoPanel.classList.toggle("hidden");
        if (infoToggle) infoToggle.classList.toggle("active");
        break;
      case "r":
        window.resetCamera();
        break;
      case "t":
        // Test the word input functionality
        if (window.testWordInput) {
          window.testWordInput();
        }
        break;
      case "w":
        // Focus the word input for typing
        const wordInput = document.getElementById('wordInput');
        if (wordInput) {
          wordInput.focus();
          console.log("🎯 Word input focused via keyboard shortcut");
        }
        break;
    }
  });

  // Update stats initially
  updateStats();
  
  // Then create the wordListBox with MAXIMUM visibility
  const wordListBox = document.createElement('div');
  wordListBox.id = 'wordListBox';
  wordListBox.className = 'collected-words-panel';
  document.body.appendChild(wordListBox);
  
  console.log("📦 Word collection box created and styled");

  // Using the global variable declared at the top
  wordListTitle = document.createElement('div');
  wordListTitle.className = 'collected-words-header';
  wordListTitle.innerHTML = `
    <h3 class="collected-words-title">POET'S PALETTE</h3>
    <div class="collected-words-count" id="collected-count">0 WORDS</div>
  `;
  wordListBox.appendChild(wordListTitle);
  
  console.log("📝 Word collection title created");

  // Create word input area for the poet's palette
  const wordInputArea = document.createElement('div');
  wordInputArea.className = 'word-input-area';
  wordInputArea.innerHTML = `
    <textarea 
      id="wordInput" 
      class="word-input-field" 
      placeholder="Type words to add to your palette...

• Enter: Add words to palette
• Ctrl+Enter: Create 3D poetry directly
• Escape: Exit typing mode

Keyboard shortcuts are disabled while typing."
      rows="3"
    ></textarea>
    <div class="word-input-controls">
      <button id="addWordsBtn" class="word-input-btn primary">Add Words</button>
      <button id="create3DPoetryBtn" class="word-input-btn secondary">Create 3D Poetry</button>
      <button id="clearInputBtn" class="word-input-btn tertiary">Clear</button>
    </div>
  `;
  wordListBox.appendChild(wordInputArea);

  // Create word list content container using the global variable
  wordListContent = document.createElement('div');
  wordListContent.id = 'wordListContent';
  wordListContent.className = 'collected-words-content';
  wordListBox.appendChild(wordListContent);

  // Setup word input functionality after elements are created
  // Add a small delay to ensure DOM elements are properly attached
  setTimeout(() => {
    setupWordInputHandlers();
  }, 100);
}

// Setup word input handlers for the poet's palette
function setupWordInputHandlers() {
  console.log("🔧 Setting up word input handlers...");
  
  const wordInput = document.getElementById('wordInput');
  const addWordsBtn = document.getElementById('addWordsBtn');
  const create3DPoetryBtn = document.getElementById('create3DPoetryBtn');
  const clearInputBtn = document.getElementById('clearInputBtn');

  console.log("Elements found:", {
    wordInput: !!wordInput,
    addWordsBtn: !!addWordsBtn,
    create3DPoetryBtn: !!create3DPoetryBtn,
    clearInputBtn: !!clearInputBtn
  });

  if (!wordInput || !addWordsBtn || !create3DPoetryBtn || !clearInputBtn) {
    console.warn("❌ Word input elements not found, retrying in 500ms...");
    setTimeout(setupWordInputHandlers, 500);
    return;
  }

  console.log("✅ All word input elements found, setting up event listeners...");

  // Add click event listener for debugging
  wordInput.addEventListener('click', (e) => {
    console.log("🎯 Text input clicked directly!");
    console.log("Event target:", e.target);
    console.log("Active element before focus:", document.activeElement);
    // Force focus if not already focused
    if (document.activeElement !== wordInput) {
      console.log("💫 Forcing focus on text input");
      wordInput.focus();
    }
  });

  // Add mousedown event for more debugging
  wordInput.addEventListener('mousedown', (e) => {
    console.log("⬇️ Mouse down on text input");
    e.stopPropagation(); // Prevent p5.js from handling this event
  });

  // Handle textarea keyboard shortcuts
  wordInput.addEventListener('keydown', (e) => {
    console.log("🎹 Key pressed in word input:", e.key);
    if (e.key === 'Enter') {
      if (e.ctrlKey || e.metaKey) {
        // Ctrl+Enter: Create 3D poetry directly
        console.log("🎨 Creating 3D poetry from Ctrl+Enter");
        e.preventDefault();
        handleCreate3DPoetry();
      } else {
        // Enter: Add words to palette
        console.log("📝 Adding words from Enter key");
        e.preventDefault();
        handleAddWords();
      }
    }
  });

  // Add input event to check if typing works
  wordInput.addEventListener('input', (e) => {
    console.log("✏️ Input detected:", e.target.value);
  });

  // Add focus/blur events for debugging
  wordInput.addEventListener('focus', () => {
    console.log("🎯 Word input focused");
    // Add visual indicator that input is focused
    wordInput.style.outline = '2px solid #ff3333';
  });

  wordInput.addEventListener('blur', () => {
    console.log("💨 Word input blurred");
    // Remove visual indicator
    wordInput.style.outline = '';
  });

  // Button event listeners
  addWordsBtn.addEventListener('click', (e) => {
    console.log("🔘 Add Words button clicked");
    handleAddWords();
  });
  
  create3DPoetryBtn.addEventListener('click', (e) => {
    console.log("🔘 Create 3D Poetry button clicked");
    handleCreate3DPoetry();
  });
  
  clearInputBtn.addEventListener('click', (e) => {
    console.log("🔘 Clear button clicked");
    wordInput.value = '';
    wordInput.focus();
  });

  // Make sure the input is focusable
  wordInput.setAttribute('tabindex', '0');
  
  console.log("🎉 Word input handlers setup complete!");
  
  // Test the input by trying to focus it
  setTimeout(() => {
    console.log("🧪 Testing word input focus...");
    wordInput.focus();
    console.log("📍 Input focused. Active element:", document.activeElement === wordInput ? "CORRECT" : "FAILED");
  }, 1000);
}

// TEST function - can be called from console to test the input
window.testWordInput = function() {
  const wordInput = document.getElementById('wordInput');
  if (wordInput) {
    console.log("🧪 Testing word input...");
    wordInput.focus();
    wordInput.value = "hello world test";
    console.log("✅ Test input set, value:", wordInput.value);
    return true;
  } else {
    console.log("❌ Word input not found");
    return false;
  }
};

// Handle adding words to the palette
function handleAddWords() {
  const wordInput = document.getElementById('wordInput');
  if (!wordInput) return;

  const text = wordInput.value.trim();
  if (!text) {
    showNotification("Please enter some words first.");
    return;
  }

  // Parse words from input (split by spaces, commas, newlines)
  const words = text.split(/[,\s\n]+/)
    .map(word => word.trim().toLowerCase())
    .filter(word => word.length > 0 && /^[a-zA-Z]+$/.test(word)); // Only alphabetic words

  if (words.length === 0) {
    showNotification("No valid words found. Please enter alphabetic words.");
    return;
  }

  // Check capacity
  const availableSlots = CONFIG.wordSettings.maxCollectedWords - collectedWords.length;
  if (availableSlots <= 0) {
    showNotification("Poet's palette is full! Clear some words first.");
    return;
  }

  // Add words to collection (up to available slots)
  const wordsToAdd = words.slice(0, availableSlots);
  let addedCount = 0;

  wordsToAdd.forEach(word => {
    // Check if word already exists
    if (!collectedWords.some(w => w.word === word)) {
      // Add word to collection
      collectedWords.push({
        word: word,
        definition: "A word from your creative input.",
        translations: {},
        source: 'user_input'
      });
      addedCount++;
    }
  });

  // Clear input and update UI
  wordInput.value = '';
  updateWordList();

  // Show notification
  if (addedCount > 0) {
    showNotification(`Added ${addedCount} word${addedCount !== 1 ? 's' : ''} to your palette: ${wordsToAdd.slice(0, addedCount).join(', ')}`);
    
    // Play sound for word addition
    if (audioEnabled) {
      try {
        playSound(350 + (addedCount * 25), 0);
      } catch (e) {
        console.warn("Could not play word addition sound:", e);
      }
    }
  } else {
    showNotification("All words were already in your palette.");
  }

  console.log(`📝 Added ${addedCount} words to palette:`, wordsToAdd.slice(0, addedCount));
}

// Handle creating 3D poetry directly in space
function handleCreate3DPoetry() {
  const wordInput = document.getElementById('wordInput');
  if (!wordInput) return;

  const text = wordInput.value.trim();
  if (!text) {
    showNotification("Please enter some text first.");
    return;
  }

  // Parse words from input
  const words = text.split(/[,\s\n]+/)
    .map(word => word.trim().toLowerCase())
    .filter(word => word.length > 0 && /^[a-zA-Z]+$/.test(word));

  if (words.length === 0) {
    showNotification("No valid words found for 3D poetry.");
    return;
  }

  // Create 3D words in a poetic arrangement
  createPoetryFromWords(words);

  // Clear input
  wordInput.value = '';

  showNotification(`Created 3D poetry with ${words.length} words!`);
  console.log("🎨 Created 3D poetry from words:", words);
}

// Create 3D poetry arrangement from words
function createPoetryFromWords(words) {
  if (!defaultFont || !isDefaultFontReady) {
    showNotification("3D font not ready. Please try again in a moment.");
    return;
  }

  const centerX = 0;
  const centerY = 0;
  const centerZ = 0;
  const spacing = 150; // Distance between words

  words.forEach((word, index) => {
    // Create spiral or flowing arrangement
    const angle = (index / words.length) * Math.PI * 4; // Multiple spirals
    const radius = 100 + (index * 30); // Expanding spiral
    const height = Math.sin(angle * 2) * 100; // Vertical wave

    const position = {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + height,
      z: centerZ + Math.sin(angle) * radius
    };

    // Create the 3D word mesh
    const mesh = createPoetryWordMesh(word, position, index);
    if (mesh) {
      threeScene.add(mesh);
      
      // Store in verseWords for management
      const verseWord = {
        word: word,
        position: position,
        rotation: { x: 0, y: angle, z: 0 },
        scale: 1,
        id: nextVerseWordId++,
        mesh: mesh,
        isPoetry: true // Mark as poetry creation
      };
      verseWords.push(verseWord);

      // Play sound for each word placement with slight delay
      if (audioEnabled) {
        setTimeout(() => {
          try {
            playSound(400 + (word.length * 30) + (index * 10), (Math.random() - 0.5) * 0.5);
          } catch (e) {
            console.warn("Could not play poetry sound:", e);
          }
        }, index * 200);
      }
    }
  });

  updateVerseStats();
}

// Create a mesh for poetry words (with different styling than verse words)
function createPoetryWordMesh(word, position, index) {
  if (!defaultFont || !isDefaultFontReady) {
    console.warn("Default font not ready for poetry word creation");
    return null;
  }
  
  try {
    const textGeometry = new THREE.TextGeometry(word, {
      font: defaultFont,
      size: 25 + (word.length * 2), // Size varies with word length
      height: 8,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 2,
      bevelSize: 1.5,
      bevelOffset: 0,
      bevelSegments: 5
    });
    
    // Center the geometry
    textGeometry.computeBoundingBox();
    const centerOffsetX = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
    const centerOffsetY = -0.5 * (textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y);
    textGeometry.translate(centerOffsetX, centerOffsetY, 0);
    
    // Create material with gradient or varying colors
    const hue = (index * 60) % 360; // Cycle through colors
    const color = new THREE.Color(`hsl(${hue}, 70%, 60%)`);
    
    const material = new THREE.MeshPhongMaterial({
      color: color,
      emissive: new THREE.Color(`hsl(${hue}, 50%, 20%)`),
      shininess: 120,
      transparent: true,
      opacity: 0.9
    });
    
    const mesh = new THREE.Mesh(textGeometry, material);
    mesh.position.set(position.x, position.y, position.z);
    mesh.rotation.y = (index * 0.3); // Slight rotation variation
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    // Mark this mesh as a poetry word
    mesh.userData = { 
      isVerseWord: true, 
      isPoetry: true,
      word: word,
      index: index
    };
    
    return mesh;
  } catch (error) {
    console.error("Failed to create poetry word mesh:", error);
    return null;
  }
}

// Mouse click in 3D space
function mousePressed() {
  // Handle RIGHT mouse button for Focus/Resonance tool
  if (mouseButton === RIGHT) {
    if (!isMouseOverUI()) {
      focusResonanceActive = true;
      // Use proper 3D position instead of Z=0 plane
      focusResonancePosition = mousePositionTo3D();
    }
    return false; // IMPORTANT: Prevent default browser context menu
  }
  // Handle LEFT mouse button
  else if (mouseButton === LEFT) {
    // If clicking over UI elements, allow default behavior for normal interaction
    if (isMouseOverUI()) {
      console.log("🖱️ Mouse clicked over UI element - allowing default behavior");
      return true; // Allow default behavior for UI interactions
    }
    
    // Only handle 3D scene interactions when NOT over UI
    // Verse mode: place selected word in 3D space
    if (isVerseMode && selectedWordForPlacement) {
      const position = mousePositionTo3D();
      placeWordInVerse(position);
      return false;
    }
    
    // Letter mode: check if the user clicked on a confirmed word
    if (!isVerseMode && tryClickConfirmedWord()) {
      // Handled by the word click function
      return false;
    }
    
    // Prevent default action only for 3D scene area (not over UI)
    return false;
  }
  
  // Allow default behavior for other mouse buttons or unhandled cases
  return true;
}

// Try to click on a confirmed word
function tryClickConfirmedWord() {
  if (confirmedWords.length === 0) return false;
  
  // Convert mouse position to 3D space coordinates
  const mousePos = createVector(mouseX - width / 2, mouseY - height / 2, 0);
  
  // Calculate camera position and direction
  let cameraPos = createVector(
    cameraZoom * cos(cameraRotation.x) * sin(cameraRotation.y),
    cameraZoom * sin(cameraRotation.x),
    cameraZoom * cos(cameraRotation.x) * cos(cameraRotation.y)
  );
  
  // Simplified ray casting for word selection
  // For each word, check if mouse is roughly over its 2D projection
  for (let i = 0; i < confirmedWords.length; i++) {
    const word = confirmedWords[i];
    
    // Calculate center of the word cluster
    let centerX = 0, centerY = 0, centerZ = 0;
    for (const org of word.organisms) {
      centerX += org.pos.x;
      centerY += org.pos.y;
      centerZ += org.pos.z;
    }
    centerX /= word.organisms.length;
    centerY /= word.organisms.length;
    centerZ /= word.organisms.length;
    
    // Adjust for the offset we applied when displaying
    centerY -= 30;
    
    // Project 3D word position to 2D screen space (simplified)
    // This is a very simplified approach - real 3D picking would be more complex
    const wordScreenPos = projectPoint(centerX, centerY, centerZ);
    
    // Check if mouse is over this word (with some tolerance)
    const clickDistance = dist(mousePos.x, mousePos.y, wordScreenPos.x, wordScreenPos.y);
    const wordRadius = word.word.length * 5 + 20; // Rough size based on word length
    
    if (clickDistance < wordRadius) {
      // Word clicked! Collect it
      collectWord(word);
      
      // Remove from confirmed words display
      confirmedWords.splice(i, 1);
      
      return true;
    }
  }
  
  return false;
}

// Simple helper to roughly project a 3D point to 2D screen space
function projectPoint(x, y, z) {
  // This is a simplified projection for demonstration
  // A proper implementation would use the actual camera matrix
  
  try {
    // Apply perspective division (get point relative to camera, then divide by z)
    const cameraDir = createVector(
      sin(cameraRotation.y) * cos(cameraRotation.x),
      sin(cameraRotation.x),
      cos(cameraRotation.y) * cos(cameraRotation.x)
    );
    
    // Simplified projection - adjust these factors based on your camera setup
    const focalLength = width / 2; // Rough estimate
    const distance = p5.Vector.dot(createVector(x, y, z), cameraDir);
    
    // Apply perspective division (with safety check)
    const divisor = max(1, abs(distance));
    const scale = focalLength / divisor;
    
    return createVector(x * scale, y * scale);
  } catch (error) {
    console.warn("Error in projectPoint:", error);
    // Return a fallback projection (center of screen)
    return createVector(0, 0);
  }
}

// Collect a word and add it to user's collection
function collectWord(word) {
  // Don't exceed max collected words
  if (collectedWords.length >= CONFIG.wordSettings.maxCollectedWords) {
    console.log("Word collection full! Remove some words to collect more.");
    return;
  }
  
  // Add to collected words with placeholder definition
  collectedWords.push({
    word: word.word,
    definition: "A word discovered in the biome.", // Placeholder - would be from API
    translations: {} // Placeholder for translations
  });
  
  console.log(`Collected word: ${word.word}`);
  console.log("Current collection:", collectedWords.map(w => w.word).join(", "));
  
  // Play a sound to acknowledge collection
  if (audioEnabled) {
    try {
      // Calculate a pleasant pitch for word collection
      let notePitch = 300 + (word.word.length * 50);
      playSound(notePitch, 0); // Central pan
    } catch (e) {
      console.warn("Could not play collection sound:", e);
    }
  }
  
  // Animate the organisms in this word
  for (const org of word.organisms) {
    // Add a celebratory animation
    if (org.mesh) {
      // Scale up briefly then back
      if (org.mesh.scale) {
        const originalScale = { x: org.mesh.scale.x, y: org.mesh.scale.y, z: org.mesh.scale.z };
        
        // Scale up
        org.mesh.scale.set(originalScale.x * 1.5, originalScale.y * 1.5, originalScale.z * 1.5);
        
        // Scale back after delay
        setTimeout(() => {
          if (org.mesh && org.mesh.scale) {
            org.mesh.scale.set(originalScale.x, originalScale.y, originalScale.z);
          }
        }, 300);
      }
    }
  }
  
  // Update the UI to show the new word
  updateWordList();
}

// Function to update the word list display - ENHANCED VERSION
function updateWordList() {
  console.log(`🎯 updateWordList called. Total words: ${collectedWords.length}`);
  
  const wordListContent = document.getElementById('wordListContent');
  if (!wordListContent) {
    console.error("❌ ERROR: wordListContent element not found! Creating it...");
    // Try to recreate the UI if it's missing
    setupUI();
    return;
  }
  
  // Update the word count in the header
  const collectedCountEl = document.getElementById('collected-count');
  if (collectedCountEl) {
    collectedCountEl.textContent = `${collectedWords.length} WORD${collectedWords.length !== 1 ? 'S' : ''}`;
  }
  
  console.log("📋 Clearing word list content...");
  wordListContent.innerHTML = ''; // Clear previous words

  // Sort words alphabetically for better presentation
  const sortedWords = [...collectedWords].sort((a, b) => a.word.localeCompare(b.word));
  
  console.log(`📝 Displaying ${sortedWords.length} words in UI`);
  
  // Add each collected word with enhanced styling
  for (let i = 0; i < sortedWords.length; i++) {
    const wordObj = sortedWords[i]; 
    const wordDiv = document.createElement('div');
    
    // Format word with capitalization
    const formattedWord = wordObj.word.charAt(0).toUpperCase() + wordObj.word.slice(1).toLowerCase();
    wordDiv.innerHTML = `<span class="word-text">${formattedWord}</span>`;
    
    // Add tooltip with definition
    if (wordObj.definition) {
      wordDiv.title = wordObj.definition;
    }
    
    // Apply enhanced styling using CSS classes
    wordDiv.className = "collected-word";
    
    // Add click handler to show definition
    wordDiv.addEventListener('click', function() {
      const definition = wordObj.definition || "A word discovered in the environment.";
      const notificationElement = document.getElementById("notification");
      if (notificationElement) {
        notificationElement.innerHTML = `<strong>${formattedWord}:</strong> ${definition}`;
        notificationElement.classList.add("visible");
        setTimeout(() => { notificationElement.classList.remove("visible"); }, 3000);
      }
    });
    
    wordListContent.appendChild(wordDiv);
    console.log(`✅ Added word "${formattedWord}" to UI`);
  }
  
  // Apply verse mode styling if needed
  if (isVerseMode) {
    updateWordListForVerseMode();
  }
  
  // If no words yet, show a helpful message
  if (collectedWords.length === 0) {
    const emptyMessage = document.createElement('div');
    emptyMessage.className = 'collected-words-empty';
    emptyMessage.textContent = "Interact with the environment to discover words and build your collection.";
    wordListContent.appendChild(emptyMessage);
    console.log("📝 Added empty state message");
  }
  
  // Update word count display for other UI elements
  const wordCountEl = document.getElementById("wordCount");
  if (wordCountEl) {
    wordCountEl.textContent = `WORDS: ${collectedWords.length}`;
    console.log(`🔢 Updated word count: ${collectedWords.length}`);
  }
  
  console.log("✅ Word list UI update complete!");
}

// Cycle through color palettes
function cyclePalette() {
  paletteIndex = (paletteIndex + 1) % PALETTES.length;
  selectedPalette = PALETTES[paletteIndex];

  // Update lights with new palette colors
  for (let i = 0; i < lights.length; i++) {
    lights[i].color = selectedPalette[floor(random(selectedPalette.length))];
  }

  console.log("Palette changed to:", paletteIndex);
}

// NEW: Function to cycle through script highlighting modes
function cycleHighlightScript() {
  currentHighlightIndex = (currentHighlightIndex + 1) % availableScriptCategories.length;
  highlightedScriptCategory = availableScriptCategories[currentHighlightIndex];
  console.log("Highlighting script category:", highlightedScriptCategory);
  
  // Update colors of existing mouse-generated letters
  updateLetterFlowColors();

  // Update UI elements to reflect the current mode, if any exist.
  const paletteToggle = document.getElementById("palette-toggle");
  if (paletteToggle) {
    // Get a display name for the script
    let displayName = highlightedScriptCategory;
    if (displayName === "all_white") {
      displayName = "All White";
    } else if (SCRIPT_HIGHLIGHT_COLORS[displayName]) {
      displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
    }
    
    // Update the aria-label and data attribute for accessibility and styling
    paletteToggle.setAttribute("aria-label", `Highlight ${displayName} script`);
    paletteToggle.setAttribute("data-script", highlightedScriptCategory);
    
    // Set a visual indicator via icon - change to an appropriate icon for scripts
    const iconElement = paletteToggle.querySelector('.btn-icon');
    if (iconElement) {
      // Use a language/script appropriate icon
      if (highlightedScriptCategory === "eastAsian") {
        iconElement.textContent = "漢"; // Chinese character as an East Asian script indicator
      } else if (highlightedScriptCategory === "arabic") {
        iconElement.textContent = "ع"; // Arabic letter
      } else if (highlightedScriptCategory === "hebrew") {
        iconElement.textContent = "א"; // Hebrew letter
      } else if (highlightedScriptCategory === "indic") {
        iconElement.textContent = "क"; // Devanagari letter
      } else if (highlightedScriptCategory === "southeastAsian") {
        iconElement.textContent = "ก"; // Thai letter
      } else if (highlightedScriptCategory === "greek") {
        iconElement.textContent = "Ω"; // Greek letter
      } else if (highlightedScriptCategory === "default") {
        iconElement.textContent = "A"; // Latin letter
      } else {
        // For other scripts or all_white
        iconElement.textContent = "◐"; // Default icon
      }
    }
  }
}
// END NEW

// Toggle between letter mode and verse creation mode
function toggleVerseMode() {
  isVerseMode = !isVerseMode;
  
  const verseModeBtn = document.getElementById("verse-mode-toggle");
  const versePanel = document.getElementById("verse-panel");
  
  if (isVerseMode) {
    // Entering verse mode
    verseModeBtn.classList.add("active");
    versePanel.classList.remove("hidden");
    
    // Update collected words to be selectable
    updateWordListForVerseMode();
    
    // Completely clear the entire 3D space for verse mode
    clearSpaceForVerseMode();
    
    console.log("🎨 Entered verse creation mode - letter generation disabled");
  } else {
    // Exiting verse mode
    verseModeBtn.classList.remove("active");
    versePanel.classList.add("hidden");
    
    // Clear verse selection state
    selectedWordForPlacement = null;
    clearVerseSelectionUI();
    
    // Clear verse words from 3D space
    clearVerseWords();
    
    // Reinitialize organisms for letter mode
    initializeOrganisms();
    
    console.log("🔤 Returned to letter mode - letter generation enabled");
  }
  
  updateVerseStats();
}

// Clear verse words from 3D space
function clearVerseWords() {
  verseWords.forEach(verseWord => {
    if (verseWord.mesh && threeScene) {
      threeScene.remove(verseWord.mesh);
      if (verseWord.mesh.geometry) verseWord.mesh.geometry.dispose();
      if (verseWord.mesh.material) verseWord.mesh.material.dispose();
    }
  });
  verseWords = [];
  currentVerse.words = [];
}

// Update word list for verse mode selection
function updateWordListForVerseMode() {
  const wordElements = document.querySelectorAll('.collected-word');
  
  if (isVerseMode) {
    wordElements.forEach(el => {
      el.classList.add('verse-selectable');
      el.addEventListener('click', handleWordSelection);
    });
  } else {
    wordElements.forEach(el => {
      el.classList.remove('verse-selectable', 'verse-selected');
      el.removeEventListener('click', handleWordSelection);
    });
  }
}

// Handle word selection for placement
function handleWordSelection(event) {
  if (!isVerseMode) return;
  
  // Clear previous selection
  clearVerseSelectionUI();
  
  // Mark this word as selected
  event.currentTarget.classList.add('verse-selected');
  
  // Get the word text
  const wordText = event.currentTarget.querySelector('.word-text').textContent;
  selectedWordForPlacement = wordText;
  
  console.log(`📝 Selected word for placement: ${selectedWordForPlacement}`);
}

// Clear verse word selection UI
function clearVerseSelectionUI() {
  document.querySelectorAll('.collected-word.verse-selected').forEach(el => {
    el.classList.remove('verse-selected');
  });
}

// Update verse statistics
function updateVerseStats() {
  const verseWordCountEl = document.getElementById('verse-word-count');
  if (verseWordCountEl) {
    verseWordCountEl.textContent = verseWords.length;
  }
}

// Show notification to user
function showNotification(message) {
  const notificationElement = document.getElementById("notification");
  if (notificationElement) {
    notificationElement.innerHTML = message;
    notificationElement.classList.add("visible");
    setTimeout(() => { 
      notificationElement.classList.remove("visible"); 
    }, 3000);
  }
  console.log("📢 Notification:", message);
}

// Save current verse
function saveCurrentVerse() {
  if (verseWords.length === 0) {
    showNotification("No words placed in verse to save.");
    return;
  }
  
  const verse = {
    title: currentVerse.title || "Untitled Verse",
    words: [...currentVerse.words],
    createdAt: Date.now()
  };
  
  verses.push(verse);
  
  showNotification(`Verse "${verse.title}" saved! Total verses: ${verses.length}`);
  console.log("📝 Verse saved:", verse);
}

// Export current verse as plain text
function exportVerseAsText() {
  if (verseWords.length === 0) {
    showNotification("No words placed in verse to export.");
    return;
  }
  
  // Sort words by their Y position (top to bottom) for natural reading order
  const sortedWords = [...verseWords].sort((a, b) => b.position.y - a.position.y);
  
  const verseText = sortedWords.map(vw => vw.word).join(' ');
  const title = currentVerse.title || "Untitled Verse";
  
  // Create formatted text content
  const textContent = `${title}\n${'='.repeat(title.length)}\n\n${verseText}\n\n--- Created with Semantic Biome by Parsa Azari ---`;
  
  // Create and download text file
  const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${title.replace(/\s+/g, '_')}_verse.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  // Also copy to clipboard as simple text
  navigator.clipboard.writeText(verseText).then(() => {
    showNotification(`Text exported and copied to clipboard: "${verseText}"`);
  }).catch(() => {
    showNotification(`Verse exported as text file: "${title}"`);
  });
  
  console.log("📝 Verse exported as text:", { title, text: verseText });
}

// Export current verse as JSON (with full 3D positioning data)
function exportVerseAsJSON() {
  if (verseWords.length === 0) {
    showNotification("No words placed in verse to export.");
    return;
  }
  
  // Sort words by their Y position (top to bottom) for natural reading order
  const sortedWords = [...verseWords].sort((a, b) => b.position.y - a.position.y);
  
  const verseText = sortedWords.map(vw => vw.word).join(' ');
  const exportData = {
    title: currentVerse.title || "Untitled Verse",
    text: verseText,
    wordCount: verseWords.length,
    words: sortedWords.map(vw => ({
      word: vw.word,
      position: vw.position,
      rotation: vw.rotation,
      scale: vw.scale,
      id: vw.id
    })),
    createdAt: new Date().toISOString(),
    createdWith: "Semantic Biome by Parsa Azari",
    exportFormat: "3D Verse JSON v1.0"
  };
  
  // Create and download JSON file
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${currentVerse.title.replace(/\s+/g, '_')}_verse.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showNotification(`JSON exported: "${exportData.title}" with ${exportData.wordCount} words`);
  console.log("📋 Verse exported as JSON:", exportData);
}

// Export current verse as screenshot (JPG)
function exportVerseAsScreenshot() {
  if (!threeRenderer || !threeRenderer.domElement) {
    showNotification("Canvas not ready for screenshot export.");
    return;
  }
  
  try {
    // Get the canvas from the three.js renderer
    const canvas = threeRenderer.domElement;
    
    // Create a temporary canvas to combine p5.js and three.js content
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    
    // Set the same dimensions as the main canvas
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    
    // Draw the three.js canvas content
    tempCtx.drawImage(canvas, 0, 0);
    
    // Get the p5.js canvas if available
    const p5Canvas = document.querySelector('main canvas');
    if (p5Canvas) {
      // Draw the p5.js canvas on top (for UI elements, text, etc.)
      tempCtx.globalCompositeOperation = 'source-over';
      tempCtx.drawImage(p5Canvas, 0, 0);
    }
    
    // Add title overlay
    const title = currentVerse.title || "Untitled Verse";
    tempCtx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    tempCtx.fillRect(20, 20, title.length * 12 + 40, 60);
    tempCtx.fillStyle = 'white';
    tempCtx.font = '24px Space Mono, monospace';
    tempCtx.fillText(title, 40, 50);
    
    // Add subtle watermark
    tempCtx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    tempCtx.font = '12px Space Mono, monospace';
    tempCtx.fillText('Semantic Biome | Parsa Azari', tempCanvas.width - 250, tempCanvas.height - 20);
    
    // Convert to blob and download
    tempCanvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title.replace(/\s+/g, '_')}_verse_${new Date().toISOString().split('T')[0]}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showNotification(`Screenshot exported: "${title}"`);
        console.log("📷 Screenshot exported:", title);
      } else {
        showNotification("Failed to create screenshot.");
      }
    }, 'image/jpeg', 0.9);
    
  } catch (error) {
    console.error("Error creating screenshot:", error);
    showNotification("Error creating screenshot. Please try again.");
  }
}

// Clear current verse
function clearCurrentVerse() {
  clearVerseWords();
  selectedWordForPlacement = null;
  clearVerseSelectionUI();
  updateVerseStats();
  
  // Reset title
  const verseTitleInput = document.getElementById("verse-title");
  if (verseTitleInput) {
    verseTitleInput.value = "Untitled Verse";
    currentVerse.title = "Untitled Verse";
  }
  
  showNotification("Verse cleared.");
  console.log("🗑️ Current verse cleared");
}

// Create 3D text mesh for verse words
function createVerseWordMesh(word, position) {
  if (!defaultFont || !isDefaultFontReady) {
    console.warn("Default font not ready for verse word creation");
    return null;
  }
  
  try {
    const textGeometry = new THREE.TextGeometry(word, {
      font: defaultFont,
      size: 30,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 5
    });
    
    // Center the geometry
    textGeometry.computeBoundingBox();
    const centerOffsetX = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
    const centerOffsetY = -0.5 * (textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y);
    textGeometry.translate(centerOffsetX, centerOffsetY, 0);
    
    // Create material with verse-specific styling
    const material = new THREE.MeshPhongMaterial({
      color: 0xff3333, // Signature red color
      emissive: 0x111111,
      shininess: 100,
      transparent: true,
      opacity: 0.9
    });
    
    const mesh = new THREE.Mesh(textGeometry, material);
    mesh.position.set(position.x, position.y, position.z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    // Mark this mesh as a verse word (NOT a letter organism) so it won't be cleared
    mesh.userData = { isVerseWord: true, word: word };
    
    return mesh;
  } catch (error) {
    console.error("Failed to create verse word mesh:", error);
    return null;
  }
}

// Place word in 3D space (called when user clicks in verse mode)
function placeWordInVerse(position) {
  if (!selectedWordForPlacement) {
    showNotification("Select a word from your palette first.");
    return;
  }
  
  const mesh = createVerseWordMesh(selectedWordForPlacement, position);
  if (!mesh) {
    showNotification("Failed to create word mesh.");
    return;
  }
  
  const verseWord = {
    word: selectedWordForPlacement,
    position: { x: position.x, y: position.y, z: position.z },
    rotation: { x: 0, y: 0, z: 0 },
    scale: 1,
    id: nextVerseWordId++,
    mesh: mesh
  };
  
  verseWords.push(verseWord);
  currentVerse.words.push(verseWord);
  threeScene.add(mesh);
  
  // Clear selection and update UI
  selectedWordForPlacement = null;
  clearVerseSelectionUI();
  updateVerseStats();
  
  // Play sound for placement
  if (audioEnabled) {
    try {
      playSound(400 + (verseWord.word.length * 30), 0);
    } catch (e) {
      console.warn("Could not play placement sound:", e);
    }
  }
  
  showNotification(`Placed "${verseWord.word}" in verse.`);
  console.log("📍 Word placed in verse:", verseWord);
}

// Toggle sound on/off
function toggleSound() {
  audioEnabled = !audioEnabled;

  if (audioEnabled) {
    setupAudio();
    console.log("Sound enabled");
  } else {
    console.log("Sound disabled");
    // Stop any playing sounds
    try {
      if (audioContext) {
        if (noiseOsc) noiseOsc.stop();
        oscillators.forEach((osc) => {
          try {
            osc.stop();
          } catch (e) {}
        });
        oscillators = [];
      }
    } catch (e) {
      console.warn("Error stopping audio:", e);
    }
  }
}

// Setup audio system
function setupAudio() {
  if (!audioEnabled) return;

  try {
    // Initialize Web Audio API
    if (!audioContext) {
      // Try to use p5.js sound system if available
      if (typeof getAudioContext === 'function') {
        try {
          audioContext = getAudioContext();
          if (!audioContext) {
            // Fallback if p5.sound's context isn't available
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
          }
        } catch (e) {
          console.warn("Error getting p5 audio context:", e);
          // Fallback to native Web Audio API
          audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
      } else {
        // Direct Web Audio API if p5.sound isn't available
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }

      // Create a noise generator for ambient sound
      noiseOsc = audioContext.createOscillator();
      noiseOsc.type = "sawtooth";
      noiseOsc.frequency.value = 50;

      // Create a noise filter
      let noiseFilter = audioContext.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.value = 100;
      noiseFilter.Q.value = 1;

      // Create noise gain
      let noiseGain = audioContext.createGain();
      noiseGain.gain.value = 0.01;

      // Connect noise chain
      noiseOsc.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(audioContext.destination);

      // Start noise
      noiseOsc.start();

      // Create analyzer
      analyzer = audioContext.createAnalyser();
      analyzer.fftSize = 256;
      analyzer.connect(audioContext.destination);

      console.log("Audio system initialized");
    }
  } catch (e) {
    console.warn("Error setting up audio:", e);
    audioEnabled = false;
  }
}

// Play a sound with given parameters
function playSound(frequency, pan = 0) {
  if (!audioEnabled || !audioContext) return;

  try {
    // Limit number of simultaneous sounds
    if (oscillators.length > 8) {
      let oldOsc = oscillators.shift();
      try {
        oldOsc.stop();
      } catch (e) {}
    }

    // Create oscillator
    let osc = audioContext.createOscillator();
    osc.type = random(["sine", "triangle"]);
    osc.frequency.value = frequency;

    // Create envelope
    let gainNode = audioContext.createGain();
    gainNode.gain.value = 0;

    // Create panner for stereo positioning
    let panner = audioContext.createStereoPanner();
    panner.pan.value = pan;

    // Connect audio chain
    osc.connect(gainNode);
    gainNode.connect(panner);
    panner.connect(analyzer);
    panner.connect(audioContext.destination);

    // Apply envelope
    let now = audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.1, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

    // Start and schedule stop
    osc.start();
    osc.stop(now + 1.5);

    // Store in array
    oscillators.push(osc);

    // Remove from array when done
    osc.onended = function () {
      let index = oscillators.indexOf(osc);
      if (index >= 0) oscillators.splice(index, 1);
    };
  } catch (e) {
    console.warn("Error playing sound:", e);
  }
}

// Update statistics display
function updateStats() {
  const statsElement = document.getElementById("stats");
  if (!statsElement) return;

  // Count organism types
  let typeCounts = {};
  CONFIG.types.forEach((type) => (typeCounts[type] = 0));

  // Track script category usage
  let scriptCounts = {};
  
  organisms.forEach((org) => {
    typeCounts[org.dna.type] = (typeCounts[org.dna.type] || 0) + 1;
    
    // Count script categories
    const script = org.scriptCategory || "default";
    scriptCounts[script] = (scriptCounts[script] || 0) + 1;
  });

  // Find dominant type
  let maxCount = 0;
  let dominantType = "";

  for (let type in typeCounts) {
    if (typeCounts[type] > maxCount) {
      maxCount = typeCounts[type];
      dominantType = type;
    }
  }
  
  // Find dominant script
  let maxScriptCount = 0;
  let dominantScript = "";
  
  for (let script in scriptCounts) {
    if (scriptCounts[script] > maxScriptCount) {
      maxScriptCount = scriptCounts[script];
      dominantScript = script;
    }
  }
  
  // Map script name to more readable format
  const scriptDisplayNames = {
    default: "Latin",
    greek: "Greek",
    armenian: "Armenian",
    georgian: "Georgian",
    hebrew: "Hebrew",
    arabic: "Arabic",
    eastAsian: "East Asian",
    indic: "Indic",
    southeastAsian: "Southeast Asian",
    syriac: "Syriac",
    coptic: "Coptic",
    ethiopic: "Ethiopic",
    cherokee: "Cherokee",
    canadianAboriginal: "Aboriginal",
    tibetan: "Tibetan",
    burmese: "Burmese",
    sinhala: "Sinhala",
    mongolian: "Mongolian",
    tifinagh: "Tifinagh",
    nko: "N'Ko",
    vai: "Vai",
    osmanya: "Osmanya",
    adlam: "Adlam",
    ogham: "Ogham",
    runic: "Runic",
    glagolitic: "Glagolitic",
    bamum: "Bamum"
  };

  // Store in metadata
  metadata.dominantType = dominantType;
  
  // Calculate number of script systems in use
  const scriptDiversity = Object.keys(scriptCounts).length;

  // Calculate average lifespan
  let totalLifespan = organisms.reduce((sum, org) => sum + org.dna.lifespan, 0);
  metadata.avgLifespan = totalLifespan / max(1, organisms.length);

  // Calculate runtime
  let elapsedSeconds = floor((millis() - metadata.timeSinceStart) / 1000);
  let minutes = floor(elapsedSeconds / 60);
  let seconds = elapsedSeconds % 60;

  // Calculate system complexity (composite metric)
  metadata.systemComplexity = map(
    (organisms.length * metadata.interactionCount) / max(1, elapsedSeconds),
    0,
    1000,
    0,
    100
  );
  metadata.systemComplexity = min(100, metadata.systemComplexity);

  // Update the stats display
  statsElement.innerHTML = `
    <div><span class="label">Organisms:</span> ${organisms.length}/${
    CONFIG.maxOrganisms
  }</div>
    <div><span class="label">Runtime:</span> ${padZero(minutes)}:${padZero(
    seconds
  )}</div>
    <div><span class="label">Dominant Glyph:</span> ${dominantType}</div>
    <div><span class="label">Dominant Script:</span> ${scriptDisplayNames[dominantScript] || dominantScript}</div>
    <div><span class="label">Script Diversity:</span> ${scriptDiversity} writing systems</div>
    <div><span class="label">Generations:</span> ${
      metadata.generationCount
    }</div>
    <div><span class="label">Interactions:</span> ${
      metadata.interactionCount
    }</div>
    <div><span class="label">System Complexity:</span> ${floor(
      metadata.systemComplexity
    )}%</div>
    <div><span class="label">3D Mode:</span> Active</div>
    <div><span class="label">Average Depth:</span> ${floor(
      averageDepth()
    )}z</div>
  `;
}

// Helper to calculate average depth position of all organisms
function averageDepth() {
  if (organisms.length === 0) return 0;

  let totalDepth = organisms.reduce((sum, org) => sum + org.pos.z, 0);
  return totalDepth / organisms.length;
}

// Helper for consistent stats formatting
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Helper to zero-pad numbers
function padZero(num) {
  return num.toString().padStart(2, "0");
}

// Create noise texture for artistic grain effect
function createNoiseTexture() {
  noiseTexture = createGraphics(width, height);
  noiseTexture.loadPixels();

  for (let i = 0; i < noiseTexture.pixels.length; i += 4) {
    // Create subtle analog-like noise pattern
    let grainValue = 235 + random(-20, 20);
    noiseTexture.pixels[i] = grainValue;
    noiseTexture.pixels[i + 1] = grainValue;
    noiseTexture.pixels[i + 2] = grainValue;
    noiseTexture.pixels[i + 3] = random(5, 15); // Very subtle opacity
  }

  noiseTexture.updatePixels();
}

// Handle window resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Configure 3D settings
  perspective(PI / 3.0, width / height, 10, CONFIG.renderDistance);

  // Regenerate field lines for new dimensions
  ecosystem.generateFieldLines();

  // Recreate noise texture
  createNoiseTexture();
}

// Add applyPostProcessing function after the drawEnvironment function
function applyPostProcessing() {
  // Advanced post-processing for 3D mode
  push();

  // Draw a subtle vignette overlay on top of everything
  // We'll use a plane in 3D space for this
  noLights(); // Disable lighting for this effect
  camera(); // Reset camera temporarily

  // Vignette effect using p5.js native approach instead of drawingContext
  push();
  noStroke();
  translate(0, 0, 1000); // In front of everything

  // Create a custom shader-like vignette effect with concentric shapes
  let vignetteStrength = 0.3; // Max opacity of the vignette
  let steps = 8; // Number of concentric shapes for gradient

  for (let i = steps; i >= 0; i--) {
    let ratio = i / steps;
    let alpha = map(ratio, 1, 0, 0, vignetteStrength);

    fill(0, 0, 0, 255 * alpha);
    let size = map(ratio, 0, 1, width * 2, width / 6);
    ellipse(0, 0, size, size);
  }
  pop();

  // Subtle chromatic aberration in 3D space
  if (CONFIG.postFx && frameCount % 2 === 0) {
    // Only every other frame for performance
    push();
    blendMode(SCREEN);
    noStroke();

    let shift = sin(frameCount * 0.01) * 2 + 2;

    // Red offset layer
    push();
    translate(shift, 0, 990);
    fill(255, 0, 0, 20);
    plane(width * 2, height * 2);
    pop();

    // Blue offset layer
    push();
    translate(-shift, 0, 990);
    fill(0, 0, 255, 20);
    plane(width * 2, height * 2);
    pop();

    pop();
  }

  // Subtle noise texture overlay
  if (noiseTexture && frameCount % 3 === 0) {
    push();
    blendMode(MULTIPLY);
    noLights();
    camera();
    translate(0, 0, 980);
    // Use tint instead of drawingContext.globalAlpha
    tint(255, 20); // Set opacity to 8%
    texture(noiseTexture);
    plane(width, height);
    noTint(); // Reset tint
    pop();
  }

  pop();
}

// Add processCamera function after the applyPostProcessing function
function processCamera() {
  // Skip if video not ready
  if (!cameraInteraction.video || !cameraInteraction.video.loadedmetadata)
    return;

  // Get current frame
  cameraInteraction.video.loadPixels();

  // Skip if pixels not ready
  if (!cameraInteraction.video.pixels) return;

  // Reset detection points
  cameraInteraction.detectionPoints = [];

  // Sample pixels at lower resolution for performance
  const sampleStep = 10;
  const videoWidth = cameraInteraction.video.width;
  const videoHeight = cameraInteraction.video.height;

  // Process pixels to detect motion
  let motionDetected = false;

  for (let y = 0; y < videoHeight; y += sampleStep) {
    for (let x = 0; x < videoWidth; x += sampleStep) {
      const i = (y * videoWidth + x) * 4;

      // Calculate average RGB value as simple brightness
      const currBrightness =
        (cameraInteraction.video.pixels[i] +
          cameraInteraction.video.pixels[i + 1] +
          cameraInteraction.video.pixels[i + 2]) /
        3;

      const prevBrightness =
        (cameraInteraction.previousPixels[i] +
          cameraInteraction.previousPixels[i + 1] +
          cameraInteraction.previousPixels[i + 2]) /
        3;

      // Detect significant changes
      const diff = abs(currBrightness - prevBrightness);

      if (diff > cameraInteraction.motionThreshold) {
        motionDetected = true;

        // Map to canvas coordinates
        const canvasX = map(x, 0, videoWidth, -width / 2, width / 2);
        const canvasY = map(y, 0, videoHeight, -height / 2, height / 2);

        // Store detection point
        cameraInteraction.detectionPoints.push({
          x: canvasX,
          y: canvasY,
          intensity: diff,
        });

        // Add organisms based on motion with rate limiting
        if (
          random() < 0.05 &&
          millis() - cameraInteraction.lastMotionTime > 200
        ) {
          createOrganism(canvasX, canvasY);
          cameraInteraction.lastMotionTime = millis();
        }
      }
    }
  }

  // Update previous pixels with current frame
  if (frameCount % 2 === 0) {
    for (let i = 0; i < cameraInteraction.previousPixels.length; i++) {
      cameraInteraction.previousPixels[i] = cameraInteraction.video.pixels[i];
    }
  }
}

// Add displayCameraDebug function after the processCamera function
function displayCameraDebug() {
  // Display camera debug visualization in 3D space
  push();
  // Reset camera temporarily for HUD-like display
  camera();
  // Draw in front
  translate(0, 0, 900);

  // Draw camera feed as reference
  if (cameraInteraction.video) {
    push();
    translate(-width / 2 + 80, -height / 2 + 60);
    noStroke();
    // Convert the video to texture for WebGL
    texture(cameraInteraction.video);
    plane(160, 120);
    pop();
  }

  // Visualize motion detection points in 3D
  for (let i = 0; i < cameraInteraction.detectionPoints.length; i++) {
    let pt = cameraInteraction.detectionPoints[i];
    let intensity = map(pt.intensity, 0, 255, 0, 1);

    push();
    translate(pt.x, pt.y, 910);
    noStroke();
    fill(255, 0, 0, 150 * intensity);
    sphere(3 * intensity);
    pop();
  }

  pop();
}

// The resetCamera and zoomCamera functions are already defined and exposed to window object

// Helper function to check if mouse is over UI elements
function isMouseOverUI() {
  // Check if mouse is over any UI elements
  // Return true if over UI, false otherwise
  let controlsEl = document.getElementById("controls");
  let infoEl = document.getElementById("info-panel");
  let qrEl = document.getElementById("qr-code");
  let cameraEl = document.querySelector(".camera-controls");
  let wordListEl = document.getElementById("wordListBox"); // Add Poet's Palette
  let versePanelEl = document.getElementById("verse-panel"); // Add verse panel

  if (!controlsEl || !infoEl || !qrEl || !cameraEl) return false;

  // Convert canvas coordinates to window coordinates for correct hit testing
  let canvasElement = document.querySelector("canvas");
  if (!canvasElement) return false;
  
  let canvasRect = canvasElement.getBoundingClientRect();
  let mouseXWindow = (mouseX / width) * canvasRect.width + canvasRect.left;
  let mouseYWindow = (mouseY / height) * canvasRect.height + canvasRect.top;

  // Check each UI element with debugging
  let overControls = isPointInRect(mouseXWindow, mouseYWindow, controlsEl.getBoundingClientRect());
  let overInfo = isPointInRect(mouseXWindow, mouseYWindow, infoEl.getBoundingClientRect());
  let overQr = isPointInRect(mouseXWindow, mouseYWindow, qrEl.getBoundingClientRect());
  let overCamera = isPointInRect(mouseXWindow, mouseYWindow, cameraEl.getBoundingClientRect());
  let overWordList = wordListEl && isPointInRect(mouseXWindow, mouseYWindow, wordListEl.getBoundingClientRect());
  let overVersePanel = versePanelEl && !versePanelEl.classList.contains('hidden') && isPointInRect(mouseXWindow, mouseYWindow, versePanelEl.getBoundingClientRect());

  let result = overControls || overInfo || overQr || overCamera || overWordList || overVersePanel;
  
  // Debug logging when mouse is over UI
  if (result) {
    console.log("🖱️ Mouse over UI:", {
      mousePos: {x: mouseXWindow, y: mouseYWindow},
      overControls, overInfo, overQr, overCamera, overWordList, overVersePanel
    });
    
    // Special debug for word list
    if (overWordList && wordListEl) {
      let wordInputEl = document.getElementById('wordInput');
      if (wordInputEl) {
        let overWordInput = isPointInRect(mouseXWindow, mouseYWindow, wordInputEl.getBoundingClientRect());
        console.log("📝 Mouse over word input specifically:", overWordInput);
      }
    }
  }

  return result;
}

// NEW: Check if mouse is over a scrollable area specifically
function isMouseOverScrollableArea() {
  // Check if mouse is over specific scrollable content areas
  let infoPanelContent = document.querySelector("#info-panel .panel-content");
  let wordListContent = document.getElementById("wordListContent");
  let versePanelContent = document.querySelector("#verse-panel .panel-content");

  if (!infoPanelContent && !wordListContent && !versePanelContent) return false;

  // Convert canvas coordinates to window coordinates for correct hit testing
  let canvasElement = document.querySelector("canvas");
  if (!canvasElement) return false;
  
  let canvasRect = canvasElement.getBoundingClientRect();
  let mouseXWindow = (mouseX / width) * canvasRect.width + canvasRect.left;
  let mouseYWindow = (mouseY / height) * canvasRect.height + canvasRect.top;

  // Check scrollable content areas
  let overScrollableArea = false;
  
  // Check info panel content (only if visible)
  if (infoPanelContent) {
    let infoPanel = document.getElementById("info-panel");
    if (infoPanel && !infoPanel.classList.contains('hidden')) {
      overScrollableArea = overScrollableArea || isPointInRect(mouseXWindow, mouseYWindow, infoPanelContent.getBoundingClientRect());
    }
  }
  
  // Check word list content (Poet's Palette scrollable area)
  if (wordListContent) {
    let wordListBox = document.getElementById("wordListBox");
    if (wordListBox && wordListBox.style.display !== 'none') {
      overScrollableArea = overScrollableArea || isPointInRect(mouseXWindow, mouseYWindow, wordListContent.getBoundingClientRect());
    }
  }
  
  // Check verse panel content (only if visible)
  if (versePanelContent) {
    let versePanel = document.getElementById("verse-panel");
    if (versePanel && !versePanel.classList.contains('hidden')) {
      overScrollableArea = overScrollableArea || isPointInRect(mouseXWindow, mouseYWindow, versePanelContent.getBoundingClientRect());
    }
  }

  return overScrollableArea;
}

// Helper function to check if a point is inside a rectangle
function isPointInRect(x, y, rect) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}
// ENHANCED: Function to draw the Focus/Resonance tool's visual representation with improved visual effects
function drawFocusResonanceVisual() {
  if (focusResonanceActive && focusResonancePosition) {
    // NEW: Add 3D effect for right-click interaction
    let useExtraEffects = mouseButton === RIGHT; // Enable enhanced effects when using right mouse button
    
    push(); // p5.js state saving
    
    // Add 3D lighting for better visual depth
    ambientLight(50, 50, 60);
    pointLight(255, 255, 255, 
               focusResonancePosition.x + 100, 
               focusResonancePosition.y - 100, 
               focusResonancePosition.z + 100);

    // Reset p5.js transformations to ensure we are in a predictable state
    resetMatrix();
    
    // Re-apply camera for p5.js context
    // This is crucial if Three.js has altered the WebGL state
    let finalEyeX, finalEyeY, finalEyeZ;
    const centerX = 0;
    const centerY = 0;
    const centerZ = 0;
    finalEyeY = cameraZoom * sin(cameraRotation.x);
    const radiusOnXZPlane = cameraZoom * cos(cameraRotation.x);
    finalEyeX = radiusOnXZPlane * sin(cameraRotation.y);
    finalEyeZ = radiusOnXZPlane * cos(cameraRotation.y);
    camera(finalEyeX, finalEyeY, finalEyeZ, centerX, centerY, centerZ, 0, 1, 0);

    translate(focusResonancePosition.x, focusResonancePosition.y, focusResonancePosition.z);
    
    // Enhanced: Create a more complex pulsing effect with overlaid sine waves
    let primaryPulseSpeed = CONFIG.wordSettings.focusResonancePulseSpeed || 0.04;
    let secondaryPulseSpeed = primaryPulseSpeed * 1.7;
    let primaryPulse = map(sin(frameCount * primaryPulseSpeed), -1, 1, 0.85, 1.15);
    let secondaryPulse = map(sin(frameCount * secondaryPulseSpeed), -1, 1, -0.05, 0.05);
    let displayRadius = focusResonanceRadius * (primaryPulse + secondaryPulse);
    
    // Get color from palette with enhanced visual appearance
    let color = selectedPalette ? selectedPalette[3] : [180, 220, 255]; // Slightly brighter blue
    
    // Draw more layers for a richer visual effect
    for (let i = 0; i < 5; i++) { // Increased from 3 to 5 layers
      push();
      
      // Enhanced rotation patterns for more organic movement
      rotateX(frameCount * 0.01 * (i * 0.3 + 0.5) + sin(frameCount * 0.003) * 0.2);
      rotateY(frameCount * 0.015 * (i * 0.2 + 0.7) + cos(frameCount * 0.004) * 0.15);
      rotateZ(frameCount * 0.008 * (i * 0.4 + 0.3));
      
      // Different opacity with enhanced visibility for better user feedback
      let opacity = map(i, 0, 4, 170, 50); // Increased from 150-60 to 170-50
      
      // Alternate between filled and wireframe spheres for a more interesting look
      if (i % 2 === 0) {
        fill(color[0], color[1], color[2], opacity * 0.2);
        stroke(color[0], color[1], color[2], opacity);
        strokeWeight(1.0 - (i * 0.15));
      } else {
        noFill();
        // Use a slightly different color for alternating layers
        let altColor = [color[0] - 20, color[1] + 10, color[2] + 20];
        stroke(altColor[0], altColor[1], altColor[2], opacity);
        strokeWeight(0.8 - (i * 0.1));
      }
      
      // More varied sizes for nested effect with greater visual depth
      let layerScale = map(i, 0, 4, 0.9, 1.4); // Changed from 1.0-1.3 to 0.9-1.4
      
      // Draw sphere with appropriate detail level and enhanced 3D appearance
      if (i === 0) {
        // Higher detail for the innermost sphere with specular material
        specularMaterial(color[0], color[1], color[2], opacity * 0.3);
        shininess(30);
        sphere(displayRadius * layerScale, 16, 16);
      } else {
        if (i % 2 === 0) {
          // Use specular material for even layers
          specularMaterial(color[0], color[1], color[2], opacity * 0.2);
          shininess(20);
        }
        sphere(displayRadius * layerScale, 12, 12);
      }
      
      pop();
    }
    
    // Enhanced central glow with layered approach for more depth
    // Inner core glow
    fill(color[0] + 30, color[1] + 30, color[2] + 30, 40); // Brighter core
    noStroke();
    sphere(displayRadius * 0.7);
    
    // Middle glow layer
    fill(color[0] + 15, color[1] + 15, color[2] + 15, 25);
    sphere(displayRadius * 1.0);
    
    // Outer glow layer
    fill(color[0], color[1], color[2], 15);
    sphere(displayRadius * 1.5);
    
    // Add subtle particles with two distinct particle systems for a richer effect
    // Primary particle system
    drawEnergyParticles(displayRadius, color);
    
    // Add a subtle pulsing light at the very center
    let centerPulse = (sin(frameCount * 0.08) * 0.5 + 0.5);
    
    // Enhanced central light with 3D effects
    push();
    noStroke();
    ambientMaterial(255, 255, 255, 80 * centerPulse);
    specularMaterial(255, 255, 255, 200 * centerPulse);
    shininess(100);
    sphere(15 + 10 * centerPulse, 12, 12);
    pop();
    
    pop(); // Restore p5.js state
  }
}

// Helper function to draw energy particles around the focus/resonance sphere
function drawEnergyParticles(radius, baseColor) {
  let particleCount = CONFIG.wordSettings.focusResonanceParticles || 20; // Get from config or use default
  
  push();
  noStroke();
  
  // Create a rotation effect independent of the wireframe's rotation
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.007);
  
  for (let i = 0; i < particleCount; i++) {
    // Position particles in a spherical pattern
    let theta = map(i, 0, particleCount, 0, TWO_PI) + (frameCount * 0.02);
    let phi = map(sin(frameCount * 0.01 + i), -1, 1, 0, PI);
    
    // Calculate position on sphere
    let x = radius * 1.1 * sin(phi) * cos(theta);
    let y = radius * 1.1 * sin(phi) * sin(theta);
    let z = radius * 1.1 * cos(phi);
    
    // Particle size pulsation
    let particleSize = map(sin(frameCount * 0.1 + i * 0.5), -1, 1, 2, 5);
    
    // Color with slight variation
    let colorVariation = sin(frameCount * 0.05 + i) * 20;
    fill(
      constrain(baseColor[0] + colorVariation, 0, 255),
      constrain(baseColor[1] + colorVariation, 0, 255), 
      constrain(baseColor[2] + colorVariation, 0, 255), 
      100
    );
    
    push();
    translate(x, y, z);
    // Draw a simple particle sphere
    sphere(particleSize);
    pop();
  }
  
  pop();
}

// NEW: Get 3D position from mouse coordinates
function mousePositionTo3D() {
  // Convert mouse from screen coordinates to p5.js coordinates
  const mousePos = createVector(mouseX - width / 2, mouseY - height / 2);
  
  // Calculate camera position based on current rotation and zoom
  const cameraPos = createVector(
    cameraZoom * cos(cameraRotation.x) * sin(cameraRotation.y),
    cameraZoom * sin(cameraRotation.x),
    cameraZoom * cos(cameraRotation.x) * cos(cameraRotation.y)
  );
  
  // Calculate the camera's forward direction
  const cameraDir = createVector(
    -sin(cameraRotation.y) * cos(cameraRotation.x),
    -sin(cameraRotation.x),
    -cos(cameraRotation.y) * cos(cameraRotation.x)
  );
  
  // Calculate camera's right and up vectors to form a coordinate system
  const cameraRight = createVector(cos(cameraRotation.y), 0, -sin(cameraRotation.y));
  const cameraUp = p5.Vector.cross(cameraRight, cameraDir);
  cameraUp.normalize();
  
  // Project the mouse position into 3D space
  // First, scale the mouse coordinates based on camera distance
  const scaleFactor = cameraZoom / 500; // Adjust factor based on your scene scale
  const projectedX = mousePos.x * scaleFactor;
  const projectedY = mousePos.y * scaleFactor;
  
  // Find nearby organisms to determine a reasonable depth
  // This helps place the focus point at a depth that makes sense in context
  let closestOrganism = null;
  let closestDist = Infinity;
  
  // Find organism closest to mouse position in screen space
  for (const organism of organisms) {
    // Project organism position to screen space
    const orgScreenPos = projectPoint(organism.pos.x, organism.pos.y, organism.pos.z);
    const dist2D = p5.Vector.dist(mousePos, orgScreenPos);
    
    if (dist2D < closestDist) {
      closestDist = dist2D;
      closestOrganism = organism;
    }
  }
  
  // Default depth if no organisms are found
  let targetDepth = 0;
  
  // If we found a nearby organism, use its depth
  if (closestOrganism && closestDist < 150) {
    targetDepth = closestOrganism.pos.z;
  } else {
    // Otherwise, use average depth of all organisms or a default value
    targetDepth = averageDepth();
  }
  
  // Calculate 3D position using the camera's coordinate system
  const result = p5.Vector.add(
    cameraPos,
    p5.Vector.mult(cameraDir, -cameraZoom)
  );
  
  // Apply the mouse offsets in camera's coordinate space
  result.add(p5.Vector.mult(cameraRight, projectedX));
  result.add(p5.Vector.mult(cameraUp, projectedY));
  
  // Adjust the depth to be more natural
  const cameraToResult = p5.Vector.sub(result, cameraPos);
  const currentDist = cameraToResult.mag();
  cameraToResult.normalize();
  
  // Find intersection with a plane at target depth perpendicular to camera view
  const t = (targetDepth - cameraPos.z) / cameraDir.z;
  if (!isNaN(t) && isFinite(t) && t > 0) {
    return p5.Vector.add(
      cameraPos, 
      p5.Vector.mult(cameraDir, t)
    );
  }
  
  // Fallback: use a reasonable point in 3D space
  return p5.Vector.add(
    cameraPos,
    p5.Vector.mult(cameraToResult, currentDist)
  );
}

// NEW: Function to get appropriate font for script category
function getFontForScript(scriptCategory) {
    let font;
    switch (scriptCategory) {
        case "arabic":
            // Try Arabic fonts in order of preference
            font = loadedFonts['vazir'];
            if (!font) {
                console.warn("Vazir font not loaded, Arabic characters may not display correctly");
                font = loadedFonts['default'];
            }
            return font;
        case "eastAsian":
            // Try East Asian fonts
            return loadedFonts['notoJP'] || loadedFonts['default'];
        case "armenian":
            return loadedFonts['notoArmenian'] || loadedFonts['default'];
        case "indic":
            return loadedFonts['notoDevanagari'] || loadedFonts['notoBengali'] || loadedFonts['notoMalayalam'] || loadedFonts['default'];
        case "georgian":
            return loadedFonts['notoGeorgian'] || loadedFonts['default'];
        case "ethiopic":
            return loadedFonts['notoEthiopic'] || loadedFonts['default'];
        case "southeastAsian":
            return loadedFonts['notoThai'] || loadedFonts['default'];
        case "tibetan":
            return loadedFonts['notoTibetan'] || loadedFonts['default'];
        case "hebrew":
            return loadedFonts['notoHebrewThin'] || loadedFonts['default'];
        case "default":
        case "greek":
        case "latin":
        case "numbers":
        case "punctuation":
        default:
            return loadedFonts['default'];
    }
}

// NEW: Function to update colors of existing letter flow meshes
function updateLetterFlowColors() {
    for (let i = 0; i < letterOrgData.length; i++) {
        const letterData = letterOrgData[i];
        
        if (letterData.mesh && letterData.mesh.material) {
            // Determine color based on highlighting mode
            let scriptColor;
            if (highlightedScriptCategory === "all_white") {
                // All white in default mode
                scriptColor = 0xFFFFFF;
            } else if (letterData.scriptCategory === highlightedScriptCategory) {
                // Use script highlight color when it matches the current highlight
                const highlightColor = SCRIPT_HIGHLIGHT_COLORS[letterData.scriptCategory];
                if (highlightColor && Array.isArray(highlightColor) && highlightColor.length >= 3) {
                    // Convert RGB array to hex
                    scriptColor = (highlightColor[0] << 16) | (highlightColor[1] << 8) | highlightColor[2];
                } else {
                    scriptColor = 0xFFFFFF; // White fallback
                }
            } else {
                // White for non-highlighted scripts
                scriptColor = 0xFFFFFF;
            }
            
            // Update the material color
            letterData.mesh.material.color.setHex(scriptColor);
        }
    }
}

// NEW: Function to draw and update letter flow
function drawLetterFlow() {
    // Use THREE.js to render text
    for (let i = 0; i < letterOrgData.length; i++) {
        const letterData = letterOrgData[i];
        
        // Update position with physics-based movement (3D spring forces)
        const distX = letterData.destX - letterData.x;
        const distY = letterData.destY - letterData.y;
        const distZ = letterData.destZ - letterData.z;
        
        // Calculate distance to destination for adaptive spring strength
        const distTotal = Math.sqrt(distX*distX + distY*distY + distZ*distZ);
        
        // Adaptive spring constant - stronger when further away
        const springFactor = map(distTotal, 0, 500, 0.0005, 0.002);
        
        // Apply spring forces
        letterData.xVel += distX * springFactor;
        letterData.yVel += distY * springFactor;
        letterData.zVel += distZ * springFactor;
        
        // Apply damping (more realistic physics)
        const dampingFactor = 0.98;
        letterData.xVel *= dampingFactor;
        letterData.yVel *= dampingFactor;
        letterData.zVel *= dampingFactor;
        
        // Update positions
        letterData.x += letterData.xVel;
        letterData.y += letterData.yVel;
        letterData.z += letterData.zVel;
        
        // Update rotations - gentle spinning for 3D effect
        if (!letterData.rotX) letterData.rotX = 0;
        if (!letterData.rotY) letterData.rotY = 0;
        if (!letterData.rotZ) letterData.rotZ = 0;
        
        // Continue rotation based on initial rotation speeds
        letterData.rotX += letterData.rotationX || 0;
        letterData.rotY += letterData.rotationY || 0;
        letterData.rotZ += letterData.rotationZ || 0;
        
        // When approaching target, slow down the rotation
        const arrivalDistance = 50;
        if (distTotal < arrivalDistance) {
            const slowFactor = map(distTotal, 0, arrivalDistance, 0.95, 0.999);
            letterData.rotationX *= slowFactor;
            letterData.rotationY *= slowFactor;
            letterData.rotationZ *= slowFactor;
        }
        
        // These are already world coordinates in THREE.js space
        const worldX = letterData.x;
        const worldY = letterData.y;
        const worldZ = letterData.z;
        
        // Create text geometry for the letter if it doesn't exist yet
        if (!letterData.mesh) {
            try {
                // Get appropriate font for this script category
                const font = getFontForScript(letterData.scriptCategory);
                
                // Debug logging for Arabic characters
                if (letterData.scriptCategory === "arabic") {
                    console.log(`Creating Arabic letter: '${letterData.letter}', font available: ${font ? 'yes' : 'no'}`);
                }
                
                // Check if font is loaded AND is a valid THREE.Font
                // For Arabic, we might want to force geometric shapes if text rendering is problematic
                const forceGeometric = false; // Set to true if Arabic text rendering is problematic
                
                if (font && typeof font.generateShapes === 'function' && !forceGeometric) {
                    // Create text geometry
                    let textGeometry;
                    try {
                        textGeometry = new THREE.TextGeometry(letterData.letter, {
                            font: font,
                            size: letterData.size,
                            height: letterData.size/4,  // More pronounced 3D extrusion
                            curveSegments: 6,          // Higher quality curves
                            bevelEnabled: true,         // Enable beveling for 3D look
                            bevelThickness: letterData.size/20,
                            bevelSize: letterData.size/40,
                            bevelSegments: 3
                        });
                    } catch (textError) {
                        console.warn(`Failed to create text geometry for '${letterData.letter}' (${letterData.scriptCategory}):`, textError);
                        // Force fallback to geometric shape
                        throw textError;
                    }
                    
                    // Center the text geometry in all dimensions
                    textGeometry.computeBoundingBox();
                    const centerOffsetX = -0.5 * (
                        textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x
                    );
                    const centerOffsetY = -0.5 * (
                        textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y
                    );
                    const centerOffsetZ = -0.5 * (
                        textGeometry.boundingBox.max.z - textGeometry.boundingBox.min.z
                    );
                    
                    // Determine color based on highlighting mode
                    let scriptColor;
                    if (highlightedScriptCategory === "all_white") {
                        // All white in default mode
                        scriptColor = 0xFFFFFF;
                    } else if (letterData.scriptCategory === highlightedScriptCategory) {
                        // Use script highlight color when it matches the current highlight
                        const highlightColor = SCRIPT_HIGHLIGHT_COLORS[letterData.scriptCategory];
                        if (highlightColor && Array.isArray(highlightColor) && highlightColor.length >= 3) {
                            // Convert RGB array to hex
                            scriptColor = (highlightColor[0] << 16) | (highlightColor[1] << 8) | highlightColor[2];
                        } else {
                            scriptColor = 0xFFFFFF; // White fallback
                        }
                    } else {
                        // White for non-highlighted scripts
                        scriptColor = 0xFFFFFF;
                    }
                    
                    // Create material with appropriate color
                    const material = new THREE.MeshPhongMaterial({ 
                        color: scriptColor,  // Color based on script category and highlighting mode
                        transparent: true,
                        opacity: 0.9,
                        shininess: 40,
                        specular: 0x333333
                    });
                    
                    // Create mesh and position it
                    const textMesh = new THREE.Mesh(textGeometry, material);
                    textMesh.position.set(
                        worldX + centerOffsetX,
                        worldY + centerOffsetY,
                        worldZ + centerOffsetZ
                    );
                    
                    // Apply rotations
                    textMesh.rotation.x = letterData.rotX;
                    textMesh.rotation.y = letterData.rotY;
                    textMesh.rotation.z = letterData.rotZ;
                    
                    // Cast shadows for better 3D appearance
                    textMesh.castShadow = true;
                    textMesh.receiveShadow = true;
                    
                    // Add to scene
                    threeScene.add(textMesh);
                    letterData.mesh = textMesh;
                } else {
                    // If default font isn't ready or valid, use geometric shapes as fallbacks
                    let geometry;
                    
                    // Use shapes based on script category
                    switch (letterData.scriptCategory) {
                        case "default":
                        case "latin":
                            geometry = new THREE.BoxGeometry(
                                letterData.size, letterData.size, letterData.size/4
                            );
                            break;
                        case "greek":
                            geometry = new THREE.SphereGeometry(
                                letterData.size/2, 12, 12
                            );
                            break;
                        case "arabic":
                            geometry = new THREE.OctahedronGeometry(letterData.size/2, 1);
                            break;
                        case "eastAsian":
                            geometry = new THREE.DodecahedronGeometry(letterData.size/2, 0);
                            break;
                        case "numbers":
                            geometry = new THREE.CylinderGeometry(
                                letterData.size/2, letterData.size/2, letterData.size, 12
                            );
                            break;
                        case "punctuation":
                            geometry = new THREE.TorusGeometry(
                                letterData.size/2, letterData.size/6, 12, 18
                            );
                            break;
                        default:
                            geometry = new THREE.TetrahedronGeometry(letterData.size/2, 2);
                    }
                    
                    // Determine color based on highlighting mode
                    let scriptColor;
                    if (highlightedScriptCategory === "all_white") {
                        // All white in default mode
                        scriptColor = 0xFFFFFF;
                    } else if (letterData.scriptCategory === highlightedScriptCategory) {
                        // Use script highlight color when it matches the current highlight
                        const highlightColor = SCRIPT_HIGHLIGHT_COLORS[letterData.scriptCategory];
                        if (highlightColor && Array.isArray(highlightColor) && highlightColor.length >= 3) {
                            // Convert RGB array to hex
                            scriptColor = (highlightColor[0] << 16) | (highlightColor[1] << 8) | highlightColor[2];
                        } else {
                            scriptColor = 0xFFFFFF; // White fallback
                        }
                    } else {
                        // White for non-highlighted scripts
                        scriptColor = 0xFFFFFF;
                    }
                    const material = new THREE.MeshPhongMaterial({ 
                        color: scriptColor,  // Color based on script category
                        transparent: true,
                        opacity: 0.9,
                        shininess: 30,
                        specular: 0x333333
                    });
                    
                    const shapeMesh = new THREE.Mesh(geometry, material);
                    shapeMesh.position.set(worldX, worldY, worldZ);
                    
                    // Apply rotations
                    shapeMesh.rotation.x = letterData.rotX;
                    shapeMesh.rotation.y = letterData.rotY;
                    shapeMesh.rotation.z = letterData.rotZ;
                    
                    // Cast shadows
                    shapeMesh.castShadow = true;
                    shapeMesh.receiveShadow = true;
                    
                    // Add to scene
                    threeScene.add(shapeMesh);
                    letterData.mesh = shapeMesh;
                    letterData.isFallback = true;
                    
                    // Try again later if this is a fallback - flag for replacement
                    letterData.needsReplacement = true;
                }
            } catch (error) {
                console.warn("Error creating letter mesh:", error);
                // Create a simple fallback cube
                const cubeGeometry = new THREE.BoxGeometry(
                    letterData.size/2, letterData.size/2, letterData.size/2
                );
                
                // Determine color based on highlighting mode
                let scriptColor;
                if (highlightedScriptCategory === "all_white") {
                    // All white in default mode
                    scriptColor = 0xFFFFFF;
                } else if (letterData.scriptCategory === highlightedScriptCategory) {
                    // Use script highlight color when it matches the current highlight
                    const highlightColor = SCRIPT_HIGHLIGHT_COLORS[letterData.scriptCategory];
                    if (highlightColor && Array.isArray(highlightColor) && highlightColor.length >= 3) {
                        // Convert RGB array to hex
                        scriptColor = (highlightColor[0] << 16) | (highlightColor[1] << 8) | highlightColor[2];
                    } else {
                        scriptColor = 0xFFFFFF; // White fallback
                    }
                } else {
                    // White for non-highlighted scripts
                    scriptColor = 0xFFFFFF;
                }
                
                const material = new THREE.MeshPhongMaterial({ 
                    color: scriptColor,  // Color based on script category and highlighting mode
                    transparent: true, 
                    opacity: 0.8
                });
                const cubeMesh = new THREE.Mesh(cubeGeometry, material);
                cubeMesh.position.set(worldX, worldY, worldZ);
                threeScene.add(cubeMesh);
                letterData.mesh = cubeMesh;
                letterData.isFallback = true;
            }
        } else {
            // Update existing mesh position
            letterData.mesh.position.set(worldX, worldY, worldZ);
            
            // Update rotation for 3D movement
            letterData.mesh.rotation.x = letterData.rotX;
            letterData.mesh.rotation.y = letterData.rotY;
            letterData.mesh.rotation.z = letterData.rotZ;
            
            // If this is a fallback representation and fonts are now loaded,
            // attempt to replace with the actual text geometry
            if (letterData.needsReplacement && frameCount % 30 === 0) {
                const font = getFontForScript(letterData.scriptCategory);
                
                if (font && typeof font.generateShapes === 'function') {
                    try {
                        // Remove the old fallback mesh
                        threeScene.remove(letterData.mesh);
                        
                        // Create proper text geometry with 3D features
                        const textGeometry = new THREE.TextGeometry(letterData.letter, {
                            font: font,
                            size: letterData.size,
                            height: letterData.size/4,      // More pronounced 3D extrusion
                            curveSegments: 6,              // Higher quality curves
                            bevelEnabled: true,            // Enable beveling for 3D look
                            bevelThickness: letterData.size/20,
                            bevelSize: letterData.size/40,
                            bevelSegments: 3
                        });
                        
                        // Center the text geometry in all dimensions
                        textGeometry.computeBoundingBox();
                        const centerOffsetX = -0.5 * (
                            textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x
                        );
                        const centerOffsetY = -0.5 * (
                            textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y
                        );
                        const centerOffsetZ = -0.5 * (
                            textGeometry.boundingBox.max.z - textGeometry.boundingBox.min.z
                        );
                        
                        // Determine color based on highlighting mode
                        let scriptColor;
                        if (highlightedScriptCategory === "all_white") {
                            // All white in default mode
                            scriptColor = 0xFFFFFF;
                        } else if (letterData.scriptCategory === highlightedScriptCategory) {
                            // Use script highlight color when it matches the current highlight
                            const highlightColor = SCRIPT_HIGHLIGHT_COLORS[letterData.scriptCategory];
                            if (highlightColor && Array.isArray(highlightColor) && highlightColor.length >= 3) {
                                // Convert RGB array to hex
                                scriptColor = (highlightColor[0] << 16) | (highlightColor[1] << 8) | highlightColor[2];
                            } else {
                                scriptColor = 0xFFFFFF; // White fallback
                            }
                        } else {
                            // White for non-highlighted scripts
                            scriptColor = 0xFFFFFF;
                        }
                        const material = new THREE.MeshPhongMaterial({ 
                            color: scriptColor,  // Color based on script category
                            transparent: true,
                            opacity: 0.9,
                            shininess: 40,
                            specular: 0x333333
                        });
                        
                        const textMesh = new THREE.Mesh(textGeometry, material);
                        textMesh.position.set(
                            worldX + centerOffsetX,
                            worldY + centerOffsetY,
                            worldZ + centerOffsetZ
                        );
                        
                        // Transfer rotation
                        textMesh.rotation.x = letterData.rotX;
                        textMesh.rotation.y = letterData.rotY;
                        textMesh.rotation.z = letterData.rotZ;
                        
                        // Cast shadows
                        textMesh.castShadow = true;
                        textMesh.receiveShadow = true;
                        
                        threeScene.add(textMesh);
                        letterData.mesh = textMesh;
                        letterData.needsReplacement = false;
                        letterData.isFallback = false;
                    } catch (e) {
                        console.warn("Failed to replace fallback:", e);
                    }
                }
            }
        }
    }
}