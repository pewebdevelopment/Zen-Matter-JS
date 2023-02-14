# Zen---Matter-JS
=======
# Projectile Motion | JS

### project outline

- a matter.js animation of projectile motion
- [https://brm.io/matter-js/demo/#restitution](https://brm.io/matter-js/demo/#restitution)
- GitHub link - https://github.com/veeral-agarwal/ProjectileMotion
- documentation - [https://www.notion.so/Projectile-Motion-JS-4924d5911f684b78ac534106f3c33e51?pvs=4](https://www.notion.so/Projectile-Motion-JS-4924d5911f684b78ac534106f3c33e51)

<!-- ### Timeline/Time-breakdown

| learn matter.js | 4 hrs | unpaid |
| --- | --- | --- |
| coding on the project | 1.5 hrs | paid |
| debugging and testing | 1.5 hrs | paid |
| features and documentation | 2 hrs | paid |
 -->
### Introduction

The code implements a simulation of projectile motion using matter.js, a 2D physics engine. The simulation takes as input the initial angle and velocity of the projectile, and outputs its motion in real-time on the screen.

### Design Overview

The code is divided into two main parts: the HTML file and the JavaScript file. The HTML file is responsible for creating the user interface and displaying the output of the simulation. The JavaScript file contains the implementation of the simulation using matter.js.

### HTML

- The head of the document contains links to CSS files (style.css and Bootstrap), JavaScript files (jQuery, Bootstrap, matter.js, bmi.js, and script.js), and Google fonts (Sacramento and Roboto).
- The body of the document contains a container with text center class, which has a heading (Projectile motion simulation) and a form with two input fields (Angle and Velocity), and a button (Shoot the ball).

### CSS

1. **`.frminp`** - This class sets the styles for form input elements. The styles defined in this class include:
    - Border: None
    - Margin: 2em on all sides, with a margin-bottom of 1em
    - Padding: 0.5em
    - Color: Black
    - Border radius: 0
    - Outline: None
    - Transition: All 400ms
2. **`body`** - This sets the styles for the body element of the web page. The styles defined in this class include:
    - Background color: #f5f5f7
    - Color: #0f0f13
    - Height: 100%
3. **`a`** - This sets the styles for the anchor (link) elements in the web page. The styles defined in this class include:
    - Text decoration: None
    - Color: #0f0f13
4. **`#rst`** - This sets the styles for the element with the id "rst". The styles defined in this class include:
    - Margin-top: 0
5. **`form`** - This sets the styles for form elements in the web page. The styles defined in this class include:
    - Margin-top: 0
    - Margin-bottom: 0
6. **`h1`** - This sets the styles for the h1 heading element in the web page. The styles defined in this class include:
    - Font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
    - Font-size: 50px
7. **`footer`** - This sets the styles for the footer element in the web page. The styles defined in this class include:
    - Background color: #f0f0f0
    - Margin-top: 1em
    - Text-align: center
    - Position: absolute
    - Bottom: 0
    - Padding-top: 1em
    - Padding-bottom: 1em
    - Width: 100%
8. **`#renderport`** - This sets the styles for the element with the id "renderport". The styles defined in this class include:
    - Margin: auto
    - Border-radius: 5px
    - Background color: #0f0f13
    - Padding: 0px
    - Width: 1220px

### Javascript

- The script contains the project() function, which is triggered when the Shoot the ball button is clicked.
- The function starts by setting the padding of the renderport and positioning of the footer.
- Then, it creates an instance of the Matter.js engine and renderer and sets the renderer options (width, height, background color, etc.).
- Next, it calculates the horizontal and vertical velocity of the ball based on the angle and velocity entered by the user. The angle is converted from degrees to radians, and the velocity is calculated using the cosine and sine functions.
- The ball and ground bodies are created and added to the world, with the ball starting at the specified velocity.
- The script also adds a trail to the ball's movement, but the details of how this is done are not provided in the code snippet.

### Testing

- The HTML code defines the structure and layout of a webpage for a simulation of projectile motion. It includes references to various libraries such as **`matter.js`** and **`jQuery`** for adding interactivity to the page and styling it with **`bootstrap`** and custom **`style.css`**. The code uses a **`form`** to take inputs for the angle and velocity of the projectile, and a button to trigger the **`project()`** function in the JavaScript code. The output of the simulation is displayed in a **`div`** element with an id of **`renderport`**.
- The JavaScript code implements the simulation using the **`Matter.js`** library. It creates an engine, renderer, and runner, and sets up the simulation environment including the ground and the projectile. The code takes inputs for the angle and velocity of the projectile from the HTML form, calculates the horizontal and vertical velocity, and sets the velocity of the projectile accordingly. The simulation also includes a trail for the projectile and the option to change the coefficient of restitution. The code sets the options for the renderer and adds the bodies to the world. The simulation is updated continuously using the **`Runner`** module and the **`Events`** module is used to track and update the trail.
- Review the HTML and CSS Code. The first step is to review the HTML and CSS code to understand the structure and styles of the website or application. Ensure that the HTML code contains all the elements that require styling and that the CSS code has the styles for those elements.
- Test the User Interactions. Test the user interactions with the website or application, such as clicking buttons and links, and ensure that the styles are consistent and working correctly.
- Validate the CSS Code. Validate the CSS code using a CSS validator to ensure that there are no syntax errors and that the code follows best practices.

### Acknowledgements

- The Projectile Motion Simulator code uses the matter.js library to simulate the motion of a projectile. matter.js is a 2D physics engine for the web that is developed and maintained by Liam Brummitt and contributors.
- The code also uses Bootstrap and jQuery libraries to handle the layout and user interactions. The Google Fonts API is used to provide custom fonts.
