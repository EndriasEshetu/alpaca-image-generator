# Alpaca Image Generator

A front-end web app that lets users build a custom alpaca avatar by combining image layers. This project is inspired by the Codementor Alpaca Image Generator challenge and focuses on DOM manipulation with plain HTML, CSS, and JavaScript.

## Project Goal

Create an interactive avatar generator where users can:

- Customize alpaca parts
- Randomize the avatar
- Download the generated image

## Features

- Layer-based avatar rendering
- Background switch support
- Customization-ready assets structure
- Simple and beginner-friendly codebase
- No external dependencies required

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## Folder Structure

```text
alpaca-image-generator/
|-- index.html
|-- style.css
|-- script.js
|-- README.md
`-- assets/
	|-- hair/
	|-- eyes/
	|-- mouth/
	|-- ears/
	|-- neck/
	`-- background/
```

## How To Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in your browser.

Optional local server examples:

- VS Code Live Server extension
- Python: `python -m http.server`

Then open `http://localhost:8000`.

## How It Works

- The app displays alpaca image layers from the `assets/` folders.
- Each button/action updates one or more layer image sources.
- The background change action cycles through available background images.

## Next Improvements

- Add full customization controls for hair, eyes, mouth, ears, and neck.
- Add a randomize button to generate a complete alpaca combination.
- Add download/export as PNG using a canvas capture flow.
- Improve responsive layout and visual styling.

## Learning Outcomes

This project helps practice:

- DOM selection and updates
- Event-driven UI interactions
- Asset organization and layer compositing
- Building small interactive front-end tools

## License

Use this project for learning and portfolio purposes.
