# Semantic Biome 3D

An immersive 3D generative art installation exploring the boundary between artificial life and computational aesthetics. Created by Parsa Azari.

![Semantic Biome 3D](https://parsaazari.com/synthetic-biome-preview.jpg)

## About the Work

In this work, I explore the liminal zone between computational aesthetics and digital life forms in three-dimensional space. Each autonomous entity exists within a complex volumetric system of relationships, governed by algorithms that simulate evolutionary behaviors and emergent intelligence.

The visual language draws on the tension between control and chaos—a reflection of how digital systems mirror our own ecological networks. As these entities evolve and respond to your presence within their 3D environment, they create unexpected patterns of behavior and spatial poetry.

## Technical Implementation

This 3D version transforms the original 2D generative artwork into a fully immersive three-dimensional experience:

- Uses p5.js WEBGL mode for 3D rendering
- Implements a customizable 3D camera system with intuitive controls
- Organisms exist and move in a volumetric space with z-axis positioning
- Features sophisticated 3D rendering of shapes with lighting and materials
- Creates dynamic 3D connections between organisms
- Adds depth-aware visual effects and environmental elements
- Maintains the original artwork's generative and interactive nature

## How to Run

1. Navigate to the `modified` directory
2. Open `index-3d.html` in a web browser
   - For best performance, use a modern browser with WebGL support
   - Chrome or Firefox recommended

## Interaction

- **Mouse drag**: Rotate the environment
- **Mouse wheel**: Zoom in/out
- **Click/Touch**: Generate new organisms at that position
- **Keyboard Shortcuts**:
  - `C`: Change color palette
  - `S`: Toggle sound
  - `I`: Show/hide information panel
  - `R`: Reset camera position

## Camera Controls

Use the on-screen camera controls at the bottom of the screen:

- ⟲: Reset camera to default position
- +: Zoom in
- −: Zoom out

## Performance Considerations

The 3D version is more computationally intensive than the 2D original. If you experience performance issues:

1. Reduce the window size
2. Try a different browser
3. Ensure your graphics drivers are up to date
4. Reduce the number of organisms (change `CONFIG.maxOrganisms` in the code)

## Credits

- Created by [Tim Rodenbroeker](https://timrodenbroeker.de)
- Commissioned for Parsa Azari
- Built with [p5.js](https://p5js.org/)

## License

© 2023 Tim Rodenbroeker. All rights reserved.
