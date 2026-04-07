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
  "assets/hair/quiff.png",
  "assets/hair/short.png",
];

const eyeStyles = [
  "assets/eyes/default.png",
  "assets/eyes/angry.png",
  "assets/eyes/naughty.png",
  "assets/eyes/panda.png",
  "assets/eyes/smart.png",
  "assets/eyes/star.png",
];

const earStyles = [
  "assets/ears/default.png",
  "assets/ears/tilt-backward.png",
  "assets/ears/tilt-forward.png",
];

const mouthStyles = [
  "assets/mouth/default.png",
  "assets/mouth/astonished.png",
  "assets/mouth/eating.png",
  "assets/mouth/laugh.png",
  "assets/mouth/tongue.png",
];

const legStyles = [
  "assets/leg/default.png",
  "assets/leg/bubble-tea.png",
  "assets/leg/cookie.png",
  "assets/leg/game-console.png",
  "assets/leg/tilt-backward.png",
  "assets/leg/tilt-forward.png",
];

const accessoryStyles = [
  "assets/accessories/headphone.png",
  "assets/accessories/earings.png",
  "assets/accessories/flower.png",
  "assets/accessories/glasses.png",
];

const styleGroups = {
  background: { paths: backgrounds, layerId: "background" },
  neck: { paths: neckStyles, layerId: "neck" },
  hair: { paths: hairStyles, layerId: "hair" },
  eyes: { paths: eyeStyles, layerId: "eye" },
  ears: { paths: earStyles, layerId: "ear" },
  mouth: { paths: mouthStyles, layerId: "mouth" },
  leg: { paths: legStyles, layerId: "leg" },
  accessory: { paths: accessoryStyles, layerId: "accessory" },
};

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

function setLayerImage(layerId, path) {
  const layerImage = document.getElementById(layerId);
  if (!layerImage) {
    return;
  }

  layerImage.setAttribute("src", path);
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

function showStyleGroup(groupName) {
  const group = styleGroups[groupName];
  if (!group) {
    return;
  }

  renderStyleButtons(group.paths, (path) => {
    setLayerImage(group.layerId, path);
  });
}

function changeBackground() {
  showStyleGroup("background");
}

function changeNeck() {
  showStyleGroup("neck");
}

function changeHair() {
  showStyleGroup("hair");
}

function changeEyes() {
  showStyleGroup("eyes");
}

function changeEars() {
  showStyleGroup("ears");
}

function changeMouth() {
  showStyleGroup("mouth");
}

function changeLeg() {
  showStyleGroup("leg");
}

function changeAccessory() {
  showStyleGroup("accessory");
}

registerSectionActiveState("#accessories");
registerSectionActiveState("#style");
