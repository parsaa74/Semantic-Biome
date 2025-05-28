# Product Requirements Document: Semantic Biome Poetry Weaver

## 1. Introduction & Vision

**Project Title:** Semantic Biome Poetry Weaver

**Vision:** To create an interactive digital art experience where users collaborate with an emergent, "sentient" 3D biome to discover, collect, and weave poetry from fragments of language. The biome, populated by glyph-based organisms representing diverse scripts, "utters" words through its dynamic interactions, which the user can then translate and arrange into poetic verses. The experience aims to explore themes of emergence, inter-script communication, and the collaborative nature of creation between human and system.

## 2. Goals

*   Develop a visually captivating and evolving 3D environment (the "Semantic Biome").
*   Implement a system where meaningful words and phrases emerge organically from the interactions of glyph-organisms.
*   Provide users with intuitive and subtle tools to influence the biome and collect these emergent linguistic fragments.
*   Enable users to compose poetry using the collected words within a dedicated UI.
*   Incorporate a translation feature, allowing users to explore the meaning of biome-generated words across different languages/scripts.
*   Foster a contemplative and artistic experience, emphasizing discovery and collaboration over direct control.
*   Maintain a cohesive artistic and design language that is both aesthetically pleasing and thematically relevant.

## 3. Target Audience

*   Individuals interested in interactive digital art and generative systems.
*   Enthusiasts of experimental poetry and language art.
*   Users seeking novel and contemplative digital experiences.
*   Students and practitioners of design, art, and creative technology.

## 4. Core Features

### 4.1. Semantic Biome Simulation (Foundation)
*   **3D Environment:** A dynamic, evolving 3D space rendered using p5.js and THREE.js.
*   **Glyph-Organisms:** Organisms represented by characters from diverse global scripts and a "primordial" set of abstract symbols.
    *   Each organism possesses unique DNA influencing its behavior, appearance, and lifecycle.
    *   Organisms exhibit flocking behaviors (cohesion, separation, alignment) and interact with each other and the environment.
    *   Script-specific visual styles (color, animation, trails) for organisms.
*   **Script Diversity & Font Handling:** Robust loading and mapping of fonts for various scripts. Fallback to "primordial" symbols when specific script fonts are unavailable.
*   **Audio System:** Ambient soundscape and organism-specific sounds that react to biome events and user interactions.

### 4.2. Word Emergence System
*   **Cluster Detection:** The system identifies groups of organisms ("clusters") that remain in close proximity for a defined duration.
    *   Cluster parameters (size, stability time, formation radius) defined in `CONFIG.wordSettings`.
*   **Word Identification:**
    *   Characters of organisms in a stable cluster form a potential word string.
    *   An external dictionary API (e.g., `dictionaryapi.dev`) is queried to verify if the string is a real word.
    *   Rate limiting and caching for API calls to ensure performance and respect API usage limits.
*   **Visual Feedback:**
    *   Forming clusters have subtle visual cues (e.g., pulsing connection lines).
    *   Confirmed real words are highlighted visually in the 3D scene (e.g., glowing aura, temporary text overlay near the cluster) for a limited time (`CONFIG.wordSettings.wordDisplayTime3D`).

### 4.3. User Interaction Model: "Biome Whisperer"
*   **Focus/Resonance Tool:**
    *   User can activate an "area of resonance" in the 3D space (e.g., via mouse click-and-hold).
    *   Visual representation: Soft, glowing sphere or distortion effect.
    *   Effect: Subtly influences organisms within the zone, making them more likely to slow down, cluster, or attract based on matching highlighted scripts. This is a gentle guidance, not direct control.
*   **Word Collection:**
    *   Users can "collect" confirmed real words by clicking on their visual representation in the 3D scene.
    *   Collected words (with their definitions) are added to the "Poet's Palette."
*   **Organism Spawning:** Users can spawn new organisms via mouse clicks, introducing new characters into the biome.
*   **Camera Controls:** Standard 3D camera controls (pan, zoom, rotate) for navigating the biome.
*   **UI Toggles:** Controls for sound, information panel, and script highlighting mode.

### 4.4. Poetry Creation Suite
*   **Poet's Palette (UI):**
    *   A 2D UI panel displaying all words collected by the user.
    *   Each word entry shows the word, its definition (from dictionary API), and any available translations.
    *   Limited capacity (`CONFIG.wordSettings.maxCollectedWords`).
*   **Verse Editor (UI):**
    *   A simple text area or structured editor where users can arrange collected words (drag-and-drop or click-to-add) to form lines and verses of poetry.
*   **Saving/Exporting Poetry (Future Enhancement):** Consider options for users to save or export their created poems.

### 4.5. Translation Feature
*   **User-Initiated Translation:** Users can select a collected word (in the Palette or Editor) and request its translation into a predefined list of target languages.
*   **Translation API:** Utilizes an external translation API (e.g., MyMemory API).
    *   Rate limiting and error handling for API calls.
*   **Display:** Translations are displayed alongside the original word in the UI.
    *   Attempt to use stylistically appropriate fonts for translated text if corresponding scripts are part of the biome's visual language.

### 4.6. Visual & Auditory Aesthetics
*   **Overall Mood:** Ethereal, contemplative, organic, dream-like.
*   **Visuals:**
    *   Sophisticated color palettes.
    *   Dynamic lighting and atmospheric effects (vignette, subtle grain).
    *   Fluid animations for organisms and their trails.
    *   Clean, minimalist UI that complements the 3D scene without distracting from it.
*   **Audio:**
    *   Generative ambient soundscape influenced by biome state.
    *   Distinctive sounds for organism interactions, word confirmations, and user actions.

## 5. User Flow / Interaction Loop

1.  **Observe & Explore:** User navigates the 3D biome, observing organism interactions and script diversity.
2.  **Influence (Optional):** User employs the "Focus/Resonance" tool to gently encourage cluster formation in specific areas.
3.  **Discovery:** The biome's organisms form stable clusters; the system checks these against a dictionary. Confirmed words are visually highlighted in the 3D scene.
4.  **Collection:** User clicks on highlighted words in the 3D scene to add them (with definitions) to their "Poet's Palette."
5.  **Composition:** User arranges collected words from the Palette into verses within the "Verse Editor."
6.  **Translation (Optional):** User selects words in their collection or poem and requests translations to explore different linguistic expressions.
7.  **Iteration:** User continues to observe, influence, discover, and compose, weaving poetry in collaboration with the biome.

## 6. Technical Considerations

*   **Performance:**
    *   Efficient 3D rendering and organism simulation are paramount.
    *   Optimize spatial partitioning and neighbor-finding algorithms.
    *   Careful management of THREE.js object creation/disposal, especially for dynamic text.
*   **API Management:**
    *   Asynchronous handling of all API calls (dictionary, translation) to prevent UI freezes.
    *   Robust error handling and fallbacks for API unavailability or errors.
    *   Strict adherence to API rate limits and terms of service. Implement client-side cooldowns.
*   **UI Implementation:**
    *   Seamless integration of HTML/CSS UI elements with the p5.js/THREE.js canvas.
    *   Responsive design considerations for the UI panels.
*   **Modularity:** Structure code for clarity and maintainability (e.g., separate modules/classes for organism logic, UI management, API interactions, visual effects).
*   **Tunability:** Continue using the `CONFIG` object for easy adjustment of simulation parameters, visual settings, and feature behaviors.

## 7. Future Enhancements (Post-MVP)

*   **Advanced Poetry Templates/Constraints:** Allow users to select poetic forms or apply constraints.
*   **Sentiment Analysis:** Analyze the sentiment of generated words/verses.
*   **Biome Memory/Evolution:** The biome could "remember" frequently formed words or poetic structures, influencing future emergences.
*   **Shared Biomes/Poetry:** Allow users to share their biome seeds or created poems.
*   **More Sophisticated Sound Design:** Deeper integration of sound with specific scripts, word meanings, or poetic structures.
*   **Custom Font Uploads:** Allow users to upload their own `.typeface.json` fonts for specific scripts.
*   **Physical Installation Mode:** Adaptations for gallery settings (e.g., Kiosk mode, different interaction methods).

--- 