# Design Document
## Section 1 – Research and Inspiration
Our chosen artwork is titled Wheel of Fortune, which features a grid of vibrant circular forms layered concentrically and arranged in a staggered pattern. The work evokes both mystical symbolism and digital aesthetics, making it a rich source for creative coding reinterpretation. Our goal was to reimagine this image using generative and interactive techniques, creating a dynamic representation that emphasizes rhythm, structure, and chance.

### 1.1 Artistic Inspiration
- The Original Artwork: The composition of nested, colorful circular wheels directly influenced the modular structure of our code. Each wheel can be decomposed into concentric rings and radial symmetry, which translates well into object-oriented programming using classes.
- Op Art & Mandalas: The repetitive, geometric nature of the wheels shares visual logic with both op art and spiritual mandala designs. These references guided us toward building repeating patterns and ensuring each wheel has a hypnotic, rhythmic quality.
- Jared Tarbell’s Generative Works: His projects like Substrate and Happy Place inspired us to think in terms of rule-based systems and emergent complexity. While our piece is more representational, the idea of building complexity from simple repeated units (wheels) aligns with this generative philosophy.

### 1.2 Technical and Design Inspiration
- p5.js Grid-Based Systems: We were inspired by previous tutorials such as the random walker and image segmentation demos that emphasized class-based design and pixel-by-pixel reimaginings. This directly influenced how we built our Wheel class and handled positioning logic.
- Responsive Design in Creative Coding: Lessons from Week 9 shaped our approach to making the wheels fill the screen regardless of window size. The modular structure allowed us to use windowWidth and windowHeight along with dynamic spacing to generate as many wheels as needed responsively.
- Audio-Responsive Visuals (Coding Train): Since the animation for this project will be extended individually with methods such as Perlin noise, sound reactivity, and user interaction, we looked to Daniel Shiffman’s Coding Train videos for inspiration on how visuals can respond to external data sources (e.g., amplitude, frequency). This influenced how we planned the scalable properties of the wheel elements (e.g., size, color, stroke weight).





## Section 3 – Implementation
### 3.1Early Iteration – Circle Position Layout Only

In our initial prototype, we focused on accurately replicating the geometric layout of the artwork. This version did not include any color, animation, or decoration. Instead, it purely demonstrated the underlying spatial logic of the piece: a grid of evenly spaced circles arranged in a staggered, offset pattern.

To achieve this, we used p5.Vector mathematics to calculate the position of each circle in a rotated grid. The grid is rotated by 15 degrees to match the visual angle of the original artwork, and alternate rows are shifted by half a step to create a dynamic, interlocking structure.

Each circle was rendered as a simple hollow outline using ellipse() with noFill() and a light gray stroke, emphasizing structure over ornamentation. This bare-bones version was critical for confirming that our math and responsive layout logic were functioning as expected.
<img width="1464" alt="1" src="https://github.com/user-attachments/assets/0acf07cf-80b1-4069-9ee3-8e1158e5297f" /><img width="582" alt="1 code" src="https://github.com/user-attachments/assets/cfcfef55-b654-4a64-8541-2eb03ec43ed9" />

