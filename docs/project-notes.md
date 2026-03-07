# Project Notes – Keo-Codes Simple Calculator

## Project Goal
The goal of this project was to create a simple calculator web application using:
- HTML
- CSS
- JavaScript
- Python Flask

The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

---

## Development Process

1. Created the basic calculator interface using **HTML**.
2. Styled the interface using **CSS**.
3. Implemented the calculator functionality using **JavaScript**.
4. Integrated the application with a **Flask backend** to serve the webpage.
5. Organized project files using a standard Flask structure:
   - `templates` for HTML
   - `static` for CSS and JavaScript
   - `assets` for screenshots

---

## Challenges Encountered

### Running HTML with Flask
Initially, the HTML file was opened directly in the browser. However, once Flask was introduced, the application had to be run through the Flask server instead.

Solution:
- Placed `index.html` inside the `templates` folder.
- Used Flask's `render_template()` to serve the page.

### Static File Loading
CSS and JavaScript files were not loading at first.

Solution:
- Moved them to the `static` folder.
- Used Flask static file referencing in the HTML file.

---

## Testing

The calculator was tested by performing several operations including:

- 5 + 3
- 10 - 4
- 6 × 7
- 20 ÷ 5

Screenshots were captured showing the application running with a timestamp.

---

## Possible Future Improvements

- Add keyboard input support
- Improve mobile responsiveness
- Add advanced operations (square root, power, etc.)
- Improve UI design

---

## Summary

This project demonstrates how a simple web application can be built using frontend technologies and served using a Python Flask backend.