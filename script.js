const backgrounds = [
  "assets/backgrounds/blue50.png",
  "assets/backgrounds/blue60.png",
  "assets/backgrounds/blue70.png",
  "assets/backgrounds/darkblue30.png",
  "assets/backgrounds/darkblue50.png",
  "assets/backgrounds/darkblue70.png",
  "assets/backgrounds/green50.png",
  "assets/backgrounds/green60.png",
  "assets/backgrounds/green70.png",
  "assets/backgrounds/grey40.png",
  "assets/backgrounds/grey70.png",
  "assets/backgrounds/grey80.png",
  "assets/backgrounds/red50.png",
  "assets/backgrounds/red60.png",
  "assets/backgrounds/red70.png",
  "assets/backgrounds/yellow50.png",
  "assets/backgrounds/yellow60.png",
  "assets/backgrounds/yellow70.png",
];

const neckStyles = [
  "assets/neck/default.png",
  "assets/neck/bend-forward.png",
  "assets/neck/bend-backward.png",
  "assets/neck/thick.png",
];

const hairStyles = [
  "assets/hair/default.png",
  "assets/hair/bang.png",
  "assets/hair/curls.png",
  "assets/hair/elegant.png",
  "assets/hair/fancy.png",
  "assets/hair/quiff.png",
  "assets/hair/short.png",
];

function setActiveButton(sectionElement, clickedButton) {
  const buttons = sectionElement.querySelectorAll("button");
  buttons.forEach((button) => button.classList.remove("is-active"));
  clickedButton.classList.add("is-active");
}

function registerSectionActiveState(sectionSelector) {
  const section = document.querySelector(sectionSelector);
  if (!section) {
    return;
  }

  section.addEventListener("click", (event) => {
    const clickedButton = event.target.closest("button");
    if (!clickedButton || !section.contains(clickedButton)) {
      return;
    }

    setActiveButton(section, clickedButton);
  });
}

function setBackground(path) {
  const backgroundImage = document.getElementById("background");
  if (!backgroundImage) {
    return;
  }

  backgroundImage.setAttribute("src", path);
}

function setNeck(path) {
  const neckImage = document.getElementById("neck");
  if (!neckImage) {
    return;
  }

  neckImage.setAttribute("src", path);
}

function setHair(path) {
  const hairImage = document.getElementById("hair");
  if (!hairImage) {
    return;
  }

  hairImage.setAttribute("src", path);
}

function renderStyleButtons(paths, onSelect) {
  const styleContainer = document.getElementById("style");
  if (!styleContainer) {
    return;
  }

  styleContainer.innerHTML = "";

  paths.forEach((path) => {
    const button = document.createElement("button");
    button.type = "button";
    const label = path.split("/").pop().replace(".png", "").replace(/-/g, " ");
    button.textContent = label.charAt(0).toUpperCase() + label.slice(1);
    button.onclick = function () {
      onSelect(path);
    };
    styleContainer.appendChild(button);
  });
}

function changeBackground() {
  renderStyleButtons(backgrounds, setBackground);
}

function changeNeck() {
  renderStyleButtons(neckStyles, setNeck);
}

function changeHair() {
  renderStyleButtons(hairStyles, setHair);
}

registerSectionActiveState("#accessories");
registerSectionActiveState("#style");
