# Design Document
## Section 1 – Research and Inspiration
Our chosen artwork is titled Wheel of Fortune, which features a grid of vibrant circular forms layered concentrically and arranged in a staggered pattern. The work evokes both mystical symbolism and digital aesthetics, making it a rich source for creative coding reinterpretation. Our goal was to reimagine this image using generative and interactive techniques, creating a dynamic representation that emphasizes rhythm, structure, and chance.

### 1.1 Artistic Inspiration
#### The Original Artwork:
Wheel of Fortune by Pacita Abad directly influenced our code structure with the composition of colourful circular wheels and detailed accessories. Her use of vivid colour, layered textures, and designed compositions provided us with a framework for translating her physical complexity into computational logic (Abad, 1994). The structure of her work can be simplified into a set of geometrical shapes, we decided to use circle as our main shape in recreating her artwork. Each wheel can be deconstructed into concentric rings and radial symmetry. These circular modules form the foundational units of our generative system.

#### Op Art & Mandalas:
The repetitive, geometric nature of the wheels shares visual logic with both Op Art and spiritual mandala designs. Op Art’s use of visual illusion and rhythmic geometry guided the development of contrast and motion in our patterns (López-Pedraza, 1990). Similarly, the meditative structure of mandalas—a balance between chaos and control—echoes the hypnotic visual rhythm we aim to evoke (Cirlot, 2002). These influences encouraged us to explore symmetry, repetition, and animation as tools for crafting immersive visual experiences.

#### Jared Tarbell’s Generative Works:
Tarbell’s early generative art projects, such as Substrate and Happy Place, inspired us to approach our piece as a rule-based system with the potential for emergent complexity (Tarbell, n.d.). While our work remains more representational, the philosophy of building richness from simple, repeated forms aligns closely with Tarbell’s generative ethos. His interplay between algorithmic structure and organic variation informed the overall design logic behind our implementation.

#### Peter Halley’s Neo-Geo Abstraction:
To introduce a conceptual counterpoint to Abad’s organic expressiveness, we also drew inspiration from Peter Halley’s geometric abstraction. His work—composed of rigid “cells” and “conduits”—prompted us to consider the underlying systems within our artwork. Halley’s stark use of industrial colours and structural grids offered a contrasting perspective on how pattern and repetition can reflect institutional control, confinement, or connectivity (Halley, 1989). This influence encouraged us to think of each wheel not only as an aesthetic object, but as a symbol within a broader, abstracted network. The interplay between Halley’s systematic geometry and Abad’s exuberant layering ultimately shaped the duality at the heart of our visual and conceptual design.


### 1.2 Technical and Design Inspiration
- p5.js Grid-Based Systems: We were inspired by previous tutorials such as the random walker and image segmentation demos that emphasized class-based design and pixel-by-pixel reimaginings. This directly influenced how we built our Wheel class and handled positioning logic.
- Responsive Design in Creative Coding: Lessons from Week 9 shaped our approach to making the wheels fill the screen regardless of window size. The modular structure allowed us to use windowWidth and windowHeight along with dynamic spacing to generate as many wheels as needed responsively.
- Audio-Responsive Visuals (Coding Train): Since the animation for this project will be extended individually with methods such as Perlin noise, sound reactivity, and user interaction, we looked to Daniel Shiffman’s Coding Train videos for inspiration on how visuals can respond to external data sources (e.g., amplitude, frequency). This influenced how we planned the scalable properties of the wheel elements (e.g., size, color, stroke weight).


## Section 2 – Technical Planning

To translate *Wheel of Fortune* into code, our group decided on a modular, class-based architecture built on p5.js’s lifecycle. Below is our planned approach—no actual code, just responsibilities and data flow.

### 2.1 Module & Class Structure

- **CanvasManager**  
  - **Responsibility:** Initialize and resize the drawing surface.  
  - **Interface:**  
    - `setupCanvas()` creates a full-window canvas.  
    - `resizeCanvas()` re-calculates dimensions on window resize.  
    - `clearBackground()` fills the canvas with a solid base color.

- **CircleManager**  
  - **Responsibility:** Compute a grid of wheel parameters (positions, radii, color palettes).  
  - **Approach:**  
    1. Determine a **base radius** proportional to the smaller of `windowWidth`/`windowHeight`.  
    2. Derive **grid spacing** as twice the sum of that radius plus any decorative offset, plus a margin.  
    3. Generate a two-dimensional loop of `(i, j)` indices, map each to a 2D position via skewed vectors (–30° incline and its perpendicular), and filter to those that intersect the canvas.  
    4. Produce an array of simple objects `{ x, y, radius, palette }`.

- **DecorateWheels**  
  - **Responsibility:** Render one wheel per data object.  
  - **Responsibilities:**  
    - Draw three solid concentric rings, each with its own color from the `palette`.  
    - Draw a fourth decorative stroke ring (the “chain”) with evenly spaced dots along its circumference.  
    - Expose a single method `drawWheel(params)` that accepts the positional and styling fields.

### 2.2 Screen-Fitting Strategy

- **Responsive Sizing:** All radii and spacings derive from `windowWidth`/`windowHeight`, so wheels remain proportional on any display.  
- **Dynamic Coverage:** We calculate the number of rows and columns needed to overlap slightly beyond the canvas edges—this guarantees that, regardless of window aspect ratio, no blank strips appear.  
- **Recalculation on Resize:** In `windowResized()`, we invoke both `CanvasManager.resizeCanvas()` and `CircleManager.generateCircles()`, then trigger a single redraw to reposition and re-render every wheel.

### 2.3 Preparation for Animation

Even though this section covers static planning, we reserve space in each wheel’s data object for:

- **Perlin seeds** (`seedPos`, `seedRad`, etc.) so that individual tasks (noise-driven drift, pulsing, color shifts) can hook into the existing class without refactoring.  
- **Audio or Interaction hooks**, with placeholder properties (e.g., `amplitudeLevel`) to allow alternate animation methods (sound, mouse) to integrate seamlessly.

### 2.4 External Techniques & References

- **p5.js Vector Math:** We leverage `p5.Vector.fromAngle()` to generate incline and perpendicular direction vectors for grid layout—this technique was introduced in Week 9 tutorials.  
- **Modular OOP in p5.js:** Inspired by Daniel Shiffman’s examples, we use simple objects and one-method drawing classes rather than sprawling global code.  
- **Responsive Design Principles:** Drawing from web-responsive best practices, we avoid hard-coded sizes; everything is parameterized to fit any viewport.

This plan balances clarity of responsibility, ease of iteration, and built-in flexibility for each member’s individual animation method, setting a solid foundation for our group’s coding phase.


## Section 3 – Implementation
### 3.1Early Iteration – Circle Position Layout Only

In our initial prototype, we focused on accurately replicating the geometric layout of the artwork. This version did not include any color, animation, or decoration. Instead, it purely demonstrated the underlying spatial logic of the piece: a grid of evenly spaced circles arranged in a staggered, offset pattern.

To achieve this, we used p5.Vector mathematics to calculate the position of each circle in a rotated grid. The grid is rotated by 15 degrees to match the visual angle of the original artwork, and alternate rows are shifted by half a step to create a dynamic, interlocking structure.

Each circle was rendered as a simple hollow outline using ellipse() with noFill() and a light gray stroke, emphasizing structure over ornamentation. This bare-bones version was critical for confirming that our math and responsive layout logic were functioning as expected.
<img width="1464" alt="1" src="https://github.com/user-attachments/assets/0acf07cf-80b1-4069-9ee3-8e1158e5297f" /> ｜ <img width="582" alt="1 code" src="https://github.com/user-attachments/assets/cfcfef55-b654-4a64-8541-2eb03ec43ed9" />


## Reference List
Abad, P. (1994). Wheel of fortune [Mixed media on stitched and padded canvas]. Pacita Abad Art Estate. https://pacitaabad.com/artwork/wheel-of-fortune/

Cirlot, J. E. (2002). A dictionary of symbols (2nd ed., J. Sage, Trans.). Routledge. (Original work published 1962)

Halley, P. (1989). Peter Halley: Collected essays 1981–1987. Galerie Bruno Bischofberger.

López-Pedraza, R. (1990). Cultural anxiety: Jungian perspectives on artistic form and illusion. Spring Publications.

Tarbell, J. (n.d.). Gallery of generative art. Complexification. http://www.complexification.net


