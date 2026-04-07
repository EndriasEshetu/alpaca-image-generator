# Alpaca Image Generator

Interactive alpaca avatar builder made with plain HTML, CSS, and JavaScript.

Live Demo: https://endrias-alpaca-image-generator.vercel.app

## Project Purpose

This project is built as a deep practice project for:

- DOM manipulation in detail
- Writing clean, readable JavaScript
- Building reusable functions manually (without frameworks)
- Organizing UI behavior with reusable component patterns in vanilla JS

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

No frameworks and no UI libraries are used.

## Requirements Covered

- Customize alpaca profile image by selecting parts and styles
- Customization panel for categories and style options
- Randomize feature to generate a full random alpaca
- Download feature to export the generated alpaca image as PNG

## Features

- Layer-based alpaca rendering using stacked image elements
- Category-based style panel (background, hair, eyes, ears, mouth, neck, leg, accessories)
- Active-state button handling for better UX feedback
- Randomize all layers in one click
- Download current alpaca composition as `alpaca-avatar.png`
- Responsive layout for desktop and mobile

## Clean Code and Reusability Approach

- Centralized configuration with `styleGroups`
- Generic asset path builder: `buildAssetPath(folder, item)`
- Generic style renderer: `renderStyleButtons(...)`
- Generic layer updater: `setLayerImage(...)`
- Dynamic handler registration from config instead of repetitive functions

This keeps the code maintainable and makes adding new categories easy.

## Project Structure

```text
alpaca-image-generator/
|-- index.html
|-- style.css
|-- script.js
|-- README.md
|-- favicon.ico
`-- assets/
	|-- backgrounds/
	|-- neck/
	|-- hair/
	|-- eyes/
	|-- ears/
	|-- mouth/
	|-- leg/
	|-- accessories/
	`-- nose.png
```

## Run Locally

1. Clone or download this repository.
2. Open the project folder.
3. Run with a local server (recommended):
   - VS Code Live Server, or
   - `python -m http.server`
4. Open `http://localhost:8000`

You can also open `index.html` directly in a browser.

## License

This project is for learning and portfolio use.
