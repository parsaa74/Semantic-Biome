// Synthetic Biome (3D Version)
let threeScene, threeCamera, threeRenderer, threeFont;
// Configuration parameters for the system
const CONFIG = {
  maxOrganisms: 30, // Maximum number of organisms - reduced for WebGL performance
  initialOrganisms: 6, // Number of initial organisms - reduced for WebGL performance
  connectionDistance: 150, // Distance for connection
  audioEnabled: true, // Enable audio
  postFx: false, // Post-processing effects (disabled by default for better performance)
  
  // WebGL optimization settings
  webglOptimization: {
    enabled: true, // Enable WebGL optimization
    textureSize: 1024, // Reduce texture size (default is 2048)
    maxVisibleOrganisms: 25, // Only render this many organisms at once
    drawDistance: 800, // Don't render organisms beyond this distance
    simplifyDistantGeometry: true, // Use simpler geometry for distant objects
    distanceThreshold: 500, // Distance at which to simplify geometry
    disableParticlesWhenFPSBelow: 25 // Disable particle effects when FPS drops below this
  },

  // Physical parameters
  baseSize: { min: 8, max: 35 },
  baseSpeed: { min: 0.4, max: 2.0 }, // Lowered max speed to make organisms slower and more stable
  baseMass: { min: 1, max: 9 },
  baseLifespan: { min: 450, max: 900 }, // Increased lifespan to allow more time for cluster formation
  cohesionDistance: 130, // Increased from 100 to encourage more grouping
  separationDistance: 30, // Reduced from 35 to allow organisms to get closer to each other
  alignmentDistance: 80, // Increased from 60 to make organisms follow each other more consistently
  maxForce: 0.18, // Slightly reduced to make movements more stable
  
  // NEW: Word and Poetry Settings
  wordSettings: {
    minClusterSize: 3,
    maxClusterSize: 7, // Max length of a word to check
    clusterFormationRadiusFactor: 2.0, // Increased from 1.2 to make clustering more likely
    clusterStabilityTime: 1800,    // Reduced from 2500ms to make word detection faster
    apiCooldownDictionary: 2000, // Reduced from 3000ms for more frequent API lookups
    apiCooldownTranslation: 1000, // ms between translation API lookups
    maxCollectedWords: 50,        // Max words in Poet's Palette
    wordDisplayTime3D: 15000,     // ms to display a confirmed word in 3D
    
    // Focus/Resonance Tool Settings
    focusResonanceRadius: 120,    // Increased from 100 to cover more area
    focusResonanceStrength: 0.08, // Increased from 0.05 for stronger effect
    focusResonanceDamping: 0.95,  // Increased damping effect (lower value = more damping)
    focusResonanceParticles: 12,  // Number of particles in the visual effect
    focusResonancePulseSpeed: 0.05 // Speed of the pulsing animation
  },
  // END NEW

  // Font configuration for different scripts
  fontMappings: {
    // Default font for Latin and fallback
    default: { 
      family: "helvetiker_regular", 
      weight: "normal",
      style: "normal"
    },
    // Greek characters
    greek: { 
      family: "Arial, Tahoma, 'Noto Sans'", 
      weight: "normal",
      style: "normal"
    },
    // Armenian characters
    armenian: { 
      family: "'Noto Sans Armenian', 'Arial Unicode MS'", 
      weight: "normal",
      style: "normal"
    },
    // Georgian characters
    georgian: { 
      family: "'Noto Sans Georgian', 'BPG Arial'", 
      weight: "normal",
      style: "normal"
    },
    // Hebrew characters
    hebrew: { 
      family: "'Noto Sans Hebrew', 'Arial Hebrew'", 
      weight: "normal",
      style: "normal"
    },
    // Arabic characters
    arabic: { 
      family: "'Noto Sans Arabic', 'Arabic Typesetting'", 
      weight: "normal",
      style: "normal"
    },
    // East Asian characters (Chinese, Japanese, Korean)
    eastAsian: { 
      family: "'Noto Sans CJK', 'MS Gothic', 'SimSun'", 
      weight: "normal",
      style: "normal"
    },
    // Indic scripts (Devanagari, Bengali, etc.)
    indic: { 
      family: "'Noto Sans Devanagari', 'Noto Sans Bengali'", 
      weight: "normal",
      style: "normal"
    },
    // Southeast Asian scripts (Thai, Lao, Khmer)
    southeastAsian: { 
      family: "'Noto Sans Thai', 'Noto Sans Lao', 'Noto Sans Khmer'", 
      weight: "normal", 
      style: "normal"
    }
  },
  
  // Script to font mapping
  scriptMap: {
    // Latin based
    
    // Greek
    "Α": "greek", "α": "greek", "Β": "greek", "β": "greek", "Γ": "greek", "γ": "greek",
    
    // Armenian
    "Ա": "armenian", "ա": "armenian", "Բ": "armenian", "բ": "armenian", "Գ": "armenian", "գ": "armenian",
    
    // Georgian
    "ა": "georgian", "ბ": "georgian", "გ": "georgian",
    
    // Hebrew
    "א": "hebrew", "ב": "hebrew", "ג": "hebrew",
    
    // Arabic
    "ا": "arabic", "ب": "arabic", "ت": "arabic",
    
    // Chinese, Japanese, Korean
    "人": "eastAsian", "口": "eastAsian", "日": "eastAsian", "あ": "eastAsian", "ア": "eastAsian",
    "ㄱ": "eastAsian", "ㄴ": "eastAsian", "ㄷ": "eastAsian",
    
    // Indic scripts
    "अ": "indic", "आ": "indic", "इ": "indic", 
    "অ": "indic", "আ": "indic", "ই": "indic",
    
    // Southeast Asian
    "ก": "southeastAsian", "ข": "southeastAsian", "ฃ": "southeastAsian",
    "ກ": "southeastAsian", "ຂ": "southeastAsian", "ຄ": "southeastAsian",
    "ក": "southeastAsian", "ខ": "southeastAsian", "គ": "southeastAsian"
  },

  types: [
    // Possible organism types
    // "Α", "α", "Β", "β", "Γ", "γ", // Greek - Will be replaced
    // "Ա", "ա", "Բ", "բ", "Գ", "գ", // Armenian - Will be replaced
    // "ა", "ბ", "გ", // Georgian - Will be replaced

    // Greek - Full Alphabet + Accented
    "Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω",
    "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "ς", "σ", "τ", "υ", "φ", "χ", "ψ", "ω",
    "Ά", "Έ", "Ή", "Ί", "Ό", "Ύ", "Ώ", "ά", "έ", "ή", "ί", "ό", "ύ", "ώ", "ϊ", "ϋ", "ΐ", "ΰ",

    // Armenian - Full Alphabet + Punctuation
    "Ա", "Բ", "Գ", "Դ", "Ե", "Զ", "Է", "Ը", "Թ", "Ժ", "Ի", "Լ", "Խ", "Ծ", "Կ", "Հ", "Ձ", "Ղ", "Ճ", "Մ", "Յ", "Ն", "Շ", "Ո", "Չ", "Պ", "Ջ", "Ռ", "Ս", "Վ", "Տ", "Ր", "Ց", "Ւ", "Փ", "Ք", "Օ", "Ֆ",
    "ա", "բ", "գ", "դ", "ե", "զ", "է", "ը", "թ", "ժ", "ի", "լ", "խ", "ծ", "կ", "հ", "ձ", "ղ", "ճ", "մ", "յ", "ն", "շ", "ո", "չ", "պ", "ջ", "ռ", "ս", "վ", "տ", "ր", "ց", "ւ", "փ", "ք", "օ", "ֆ",
    "և", "ՙ", "՛", "՜", "՝", "՞", "՟", "՚",

    // Georgian (Mkhedruli)
    "ა", "ბ", "გ", "დ", "ე", "ვ", "ზ", "თ", "ი", "კ", "ლ", "მ", "ნ", "ო", "პ", "ჟ", "რ", "ს", "ტ", "უ", "ფ", "ქ", "ღ", "ყ", "შ", "ჩ", "ც", "ძ", "წ", "ჭ", "ხ", "ჯ", "ჰ",

    // Hebrew - Full Alphabet (including final forms)
    "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "ך", "כ", "ל", "ם", "מ", "ן", "נ", "ס", "ע", "ף", "פ", "ץ", "צ", "ק", "ר", "ש", "ת",

    // Arabic - Full Alphabet + common variants
    "ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي",
    "ء", "آ", "أ", "ؤ", "إ", "ئ", "ة", "ى",

    "ܐ", "ܒ", "ܓ", // Syriac
    "Ⲁ", "ⲁ", "Ⲃ", "ⲃ", "Ⲅ", "ⲅ", // Coptic (example based on Greek with a few Coptic letters)
    "ሀ", "ለ", "ሐ", // Amharic (Ethiopic)
    "ሀ", "ለ", "ሐ", // Tigrinya (using Amharic examples as they share Ge'ez script)
    "Ꭰ", "Ꭱ", "Ꭲ", // Cherokee
    "ᐁ", "ᐃ", "ᐅ", // Canadian Aboriginal Syllabics
    "ཀ", "ཁ", "ག", // Tibetan
    "က", "ခ", "ဂ", // Burmese
    "ก", "ข", "ฃ", // Thai
    "ກ", "ຂ", "ຄ", // Lao
    "ក", "ខ", "គ", // Khmer

    // Sinhala - Will be replaced
    // "අ", "ආ", "ඇ",
    // Malayalam - Will be replaced
    // "അ", "ആ", "ഇ",
    // Tamil - Will be replaced
    // "அ", "ஆ", "இ",
    // Telugu - Will be replaced
    // "అ", "ఆ", "ఇ",
    // Kannada - Will be replaced
    // "ಅ", "ಆ", "ಇ",
    // Bengali - Will be replaced
    // "অ", "আ", "ই",

    // Devanagari
    "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ॡ", "ए", "ऐ", "ओ", "औ", "अं", "अः",
    "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "ळ", "क्ष", "ज्ञ",

    // Bengali
    "অ", "আ", "ই", "ঈ", "উ", "ঊ", "ঋ", "এ", "ঐ", "ও", "ঔ",
    "ক", "খ", "গ", "ঘ", "ঙ", "চ", "ছ", "জ", "ঝ", "ঞ", "ট", "ঠ", "ড", "ঢ", "ণ", "ত", "থ", "দ", "ধ", "ন", "প", "ফ", "ব", "ভ", "ম", "য", "র", "ল", "শ", "ষ", "স", "হ", "ড়", "ঢ়", "য়", "ৎ", "ং", "ঃ", "ঁ",

    // Gurmukhi
    "ਅ", "ਆ", "ਇ", "ਈ", "ਉ", "ਊ", "ਏ", "ਐ", "ਓ", "ਔ",
    "ਕ", "ਖ", "ਗ", "ਘ", "ਙ", "ਚ", "ਛ", "ਜ", "ਝ", "ਞ", "ਟ", "ਠ", "ਡ", "ਢ", "ਣ", "ਤ", "ਥ", "ਦ", "ਧ", "ਨ", "ਪ", "ਫ", "ਬ", "ਭ", "ਮ", "ਯ", "ਰ", "ਲ", "ਵ", "ੜ", "ਸ", "ਹ", "ਸ਼", "ਖ਼", "ਗ਼", "ਜ਼", "ਫ਼", "ਲ਼",

    // Gujarati
    "અ", "આ", "ઇ", "ઈ", "ઉ", "ઊ", "ઋ", "એ", "ઐ", "ઓ", "ઔ", "અં", "અઃ",
    "ક", "ખ", "ગ", "ઘ", "ઙ", "ચ", "છ", "જ", "ઝ", "ઞ", "ટ", "ઠ", "ડ", "ઢ", "ણ", "ત", "થ", "દ", "ધ", "ન", "પ", "ફ", "બ", "ભ", "મ", "ય", "ર", "લ", "વ", "શ", "ષ", "સ", "હ", "ળ", "ક્ષ", "જ્ઞ",

    // Odia
    "ଅ", "ଆ", "ଇ", "ଈ", "ଉ", "ଊ", "ଋ", "ଏ", "ଐ", "ଓ", "ଔ",
    "କ", "ଖ", "ଗ", "ଘ", "ଙ", "ଚ", "ଛ", "ଜ", "ଝ", "ଞ", "ଟ", "ଠ", "ଡ", "ଢ", "ଣ", "ତ", "ଥ", "ଦ", "ଧ", "ନ", "ପ", "ଫ", "ବ", "ଭ", "ମ", "ଯ", "ର", "ଲ", "ଵ", "ଶ", "ଷ", "ସ", "ହ", "ଳ", "କ୍ଷ", "ୟ", "ଲ", "ଡ଼", "ଢ଼", "ଁ", "ଂ", "ଃ",

    // Tamil
    "அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ", "ஃ",
    "க", "ங", "ச", "ஞ", "ட", "ண", "த", "ந", "ப", "ம", "ய", "ர", "ல", "வ", "ழ", "ள", "ற", "ன",
    "ஶ", "ஷ", "ஸ", "ஹ", "க்ஷ", "ஸ்ரீ",

    // Telugu
    "అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఋ", "ౠ", "ఎ", "ఏ", "ఐ", "ఒ", "ఓ", "ఔ", "అం", "అః",
    "క", "ఖ", "గ", "ఘ", "ఙ", "చ", "ఛ", "జ", "ఝ", "ఞ", "ట", "ఠ", "డ", "ఢ", "ణ", "త", "థ", "ద", "ధ", "న", "ప", "ఫ", "బ", "భ", "మ", "య", "ర", "ల", "వ", "శ", "ష", "స", "హ", "ళ", "క్ష", "ఱ",

    // Kannada
    "ಅ", "ಆ", "ಇ", "ಈ", "ಉ", "ಊ", "ಋ", "ೠ", "ಎ", "ಏ", "ಐ", "ಒ", "ಓ", "ಔ", "ಅಂ", "ಅಃ",
    "ಕ", "ಖ", "ಗ", "ಘ", "ಙ", "ಚ", "ಛ", "ಜ", "ಝ", "ಞ", "ಟ", "ಠ", "ಡ", "ಢ", "ಣ", "ತ", "ಥ", "ದ", "ಧ", "ನ", "ಪ", "ಫ", "ಬ", "ಭ", "ಮ", "ಯ", "ರ", "ಲ", "ವ", "ಶ", "ಷ", "ಸ", "ಹ", "ಳ", "ಕ್ಷ", "ಜ್ಞ", "ಱ",

    // Malayalam
    "അ", "ആ", "ഇ", "ഈ", "ഉ", "ഊ", "ഋ", "ൠ", "എ", "ഏ", "ഐ", "ഒ", "ഓ", "ഔ", "അം", "അഃ",
    "ക", "ഖ", "ഗ", "ഘ", "ങ", "ച", "ഛ", "ജ", "ഝ", "ഞ", "ട", "ഠ", "ഡ", "ഢ", "ണ", "ത", "ഥ", "ദ", "ധ", "ന", "പ", "ഫ", "ബ", "ഭ", "മ", "യ", "ര", "ല", "വ", "ശ", "ഷ", "സ", "ഹ", "ള", "ഴ", "റ", "ൺ", "ൻ", "ർ", "ൽ", "ൾ", "ൿ",

    // Sinhala
    "අ", "ආ", "ඇ", "ඈ", "ඉ", "ඊ", "උ", "ඌ", "ঋ", "ඎ", "ඏ", "ඐ", "එ", "ඒ", "ඓ", "ඔ", "ඕ", "ඖ",
    "ක", "ඛ", "ග", "ඝ", "ඞ", "ඟ", "ච", "ඡ", "ජ", "ඣ", "ඤ", "ඥ", "ට", "ඨ", "ඩ", "ඪ", "ණ", "ඬ", "ත", "ථ", "ද", "ධ", "න", "ඳ", "ප", "ඵ", "බ", "භ", "ම", "ඹ", "ය", "ර", "ල", "ව", "ශ", "ෂ", "ස", "හ", "ළ", "ෆ", "ං", "ඃ",

    "ᠠ", "ᠡ", "ᠢ", // Mongolian (Traditional Script)
    "ⴰ", "ⴱ", "ⵜ", // Tifinagh

    "𖠀", "𖠁", "𖠂"  // Bamum
  ],

  // 3D specific configuration
  cameraControl: true, // Allow camera movement
  numLights: 3, // Number of point lights
  depthRange: { min: -300, max: 300 }, // Z-axis range for organisms
  ambientLightLevel: 80, // Base light level
  pointLightIntensity: 120, // Intensity of point lights
  defaultCameraZoom: 500, // Default camera zoom distance
  minCameraZoom: 100, // Minimum zoom distance
  maxCameraZoom: 1000, // Maximum zoom distance
  renderDistance: 1200, // Far plane for 3D rendering

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

// UI elements
let fontMono, fontInter; // Typography
let noiseTexture; // For artistic grain texture
let fadeInAlpha = 0; // For fade-in animation

// Camera and 3D specific variables
let cam; // 3D camera
let rotationY = 0; // Camera rotation
let rotationX = 0; // Camera tilt
let cameraZ = 500; // Camera distance
let lights = []; // Array of point lights

// Word formation variables
let potentialClusters = new Map(); // Map cluster ID -> {organisms: [], startTime: timestamp, string: "chars"}
let confirmedWords = []; // Array of {word: string, organisms: [], displayUntil: timestamp}
let collectedWords = []; // Array of {word: string, definition: string, translations: {}}
let lastDictionaryCheck = 0; // Timestamp of last dictionary API call

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
  default: [200, 200, 200], // Light grey for Latin/default
  greek: [0, 150, 255],   // Blue
  armenian: [255, 100, 0], // Orange
  georgian: [100, 200, 50], // Light Green
  hebrew: [150, 100, 255], // Purple
  arabic: [255, 200, 0],   // Yellow
  eastAsian: [255, 50, 100], // Pink/Red
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
let cameraZoom = 500; // Initial camera distance

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
  // Create canvas with WEBGL mode
  const canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.elt.oncontextmenu = () => false;
  
  // Important: Set pixel density to 1 for better performance in 3D
  pixelDensity(1);

  // --- Three.js setup with SHARED WebGL context ---
  // Get the WebGL rendering context from p5.js
  const gl = (this._renderer.GL instanceof WebGLRenderingContext) ? 
             this._renderer.GL : 
             this._renderer.drawingContext;
  
  // Set up Three.js to use the SAME WebGL context
  threeScene = new THREE.Scene();
  
  // Create the camera with proper aspect ratio
  threeCamera = new THREE.PerspectiveCamera(
    60, 
    windowWidth / windowHeight, 
    1, 
    CONFIG.renderDistance
  );
  threeCamera.position.set(0, 0, 800);
  
  // Create renderer with shared WebGL context
  threeRenderer = new THREE.WebGLRenderer({
    canvas: canvas.elt,
    context: gl,
    antialias: true,
    alpha: true,
    // Turn off autoClear - p5.js will handle clearing
    autoClear: false
  });
  threeRenderer.setSize(windowWidth, windowHeight);
  threeRenderer.setClearColor(0x000000, 0);
  
  // Important: No need for threeRenderer to clear the canvas on render, as p5.js does this
  threeRenderer.autoClear = false;

  // Create Three.js lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  threeScene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
  dirLight.position.set(0, 0, 1);
  threeScene.add(dirLight);

  // Configure p5.js 3D settings
  perspective(PI / 3.0, width / height, 10, CONFIG.renderDistance);

  // Initialize camera control
  if (CONFIG.cameraControl) {
    rotationY = 0;
    rotationX = 0;
    cameraZ = 500;
  }

  // Setup lighting for p5.js (legacy visuals)
  ambientLight(CONFIG.ambientLightLevel);

  // Create dynamic point lights
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
  metadata.particlesDisabled = false;
  metadata.lastWebGLReset = null;

  // For consistent typography
  if (fontMono) textFont(fontMono);

  // Enable smooth fading in
  fadeInAlpha = 0;

  console.log(
    "Synthetic Biome 3D setup complete - grid size:",
    cols,
    "x",
    rows
  );

  // Create noise texture for artistic grain effect
  createNoiseTexture();
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
    
    // Determine text type - IMPROVED character selection logic
    // Increase probability of using actual text characters instead of shapes
    const useTextCharacter = random() < 0.85; // 85% chance to use text characters
    
    if (useTextCharacter) {
      // Select a character from CONFIG.types based on available fonts
      // Choose from categories where we have more confidence in font support
      const availableFontScripts = [];
      
      // Add script categories based on which fonts are actually loaded
      if (loadedFonts.notosans && isDefaultFontReady) availableFontScripts.push("default", "greek");
      if (loadedFonts.notoArmenian) availableFontScripts.push("armenian");
      if (loadedFonts.notoGeorgian) availableFontScripts.push("georgian");
      if (loadedFonts.notoHebrewThin) availableFontScripts.push("hebrew");
      if (loadedFonts.vazir) availableFontScripts.push("arabic");
      if (loadedFonts.notoDevanagari) availableFontScripts.push("indic");
      if (loadedFonts.notoBengali) availableFontScripts.push("indic");
      if (loadedFonts.notoJP) availableFontScripts.push("eastAsian");
      if (loadedFonts.notoThai) availableFontScripts.push("southeastAsian");
      
      // If no fonts are loaded yet, default to a small set of Latin characters
      if (availableFontScripts.length === 0 || !isDefaultFontReady) {
        // Use simple Latin characters that should work with most fonts
        this.dna.type = random(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                               "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
      } else {
        // Select a script category from available ones
        const scriptCategory = random(availableFontScripts);
        
        // Get all characters from CONFIG.types that belong to this script category
        const charactersInScript = CONFIG.types.filter(char => {
          try {
            const code = char.charCodeAt(0);
            const charScript = this.getScriptCategory(char);
            return charScript === scriptCategory;
          } catch (e) {
            return false;
          }
        });
        
        // If we found characters for this script, choose one randomly
        if (charactersInScript.length > 0) {
          this.dna.type = random(charactersInScript);
        } else {
          // Fallback to Latin or geometric shapes
          this.dna.type = random([
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
          ]);
        }
      }
    } else {
      // Use geometric shapes for the remaining 15% probability
      this.dna.type = random(["circle", "triangle", "square", "spiral", "asterisk", "cross"]);
    }
    
    this.textType = this.dna.type;
    this.scriptCategory = this.getScriptCategory(this.textType);
    
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
    
    // NEW: Determine color based on highlighted script category
    let organismColorRGB;
    if (highlightedScriptCategory === "all_white" || !this.scriptCategory) {
      organismColorRGB = WHITE_COLOR_RGB;
    } else if (this.scriptCategory === highlightedScriptCategory) {
      organismColorRGB = SCRIPT_HIGHLIGHT_COLORS[this.scriptCategory] || WHITE_COLOR_RGB; // Fallback to white if script color undefined
    } else {
      organismColorRGB = WHITE_COLOR_RGB;
    }
    
    // ADDED: Safely create THREE.Color with proper error handling
    let threeColor;
    try {
      threeColor = new THREE.Color(`rgb(${organismColorRGB[0]},${organismColorRGB[1]},${organismColorRGB[2]})`);
    } catch (e) {
      console.warn("Error creating THREE.Color, using default white:", e);
      threeColor = new THREE.Color(0xffffff);
    }
    // END NEW
    
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
    } else {
      // ... (text character logic remains unchanged) ...
    }
    
    // Create the mesh
    material = new THREE.MeshBasicMaterial({ color: threeColor });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.mesh.scale.set(this.dna.size, this.dna.size, this.dna.size);
    threeScene.add(this.mesh);
  }
}
