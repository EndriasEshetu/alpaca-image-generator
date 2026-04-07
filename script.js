const BASE = "assets";

const styleGroups = {
  background: {
    folder: "backgrounds",
    items: [
      "blue50",
      "blue60",
      "blue70",
      "darkblue30",
      "darkblue50",
      "darkblue70",
      "green50",
      "green60",
      "green70",
      "grey40",
      "grey70",
      "grey80",
      "red50",
      "red60",
      "red70",
      "yellow50",
      "yellow60",
      "yellow70",
    ],
    layerId: "background",
  },
  neck: {
    folder: "neck",
    items: ["default", "bend-forward", "bend-backward", "thick"],
    layerId: "neck",
  },
  hair: {
    folder: "hair",
    items: ["default", "bang", "curls", "elegant", "quiff", "short"],
    layerId: "hair",
  },
  eyes: {
    folder: "eyes",
    items: ["default", "angry", "naughty", "panda", "smart", "star"],
    layerId: "eye",
  },
  ears: {
    folder: "ears",
    items: ["default", "tilt-backward", "tilt-forward"],
    layerId: "ear",
  },
  mouth: {
    folder: "mouth",
    items: ["default", "astonished", "eating", "laugh", "tongue"],
    layerId: "mouth",
  },
  leg: {
    folder: "leg",
    items: [
      "default",
      "bubble-tea",
      "cookie",
      "game-console",
      "tilt-backward",
      "tilt-forward",
    ],
    layerId: "leg",
  },
  accessory: {
    folder: "accessories",
    items: ["headphone", "earings", "flower", "glasses"],
    layerId: "accessory",
  },
};

function buildAssetPath(folder, item) {
  return `${BASE}/${folder}/${item}.png`;
}

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

function renderStyleButtons(group, onSelect) {
  const styleContainer = document.getElementById("style");
  if (!styleContainer) {
    return;
  }

  styleContainer.innerHTML = "";

  group.items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    const label = item.replace(/-/g, " ");
    button.textContent = label.charAt(0).toUpperCase() + label.slice(1);
    button.onclick = function () {
      onSelect(buildAssetPath(group.folder, item));
    };
    styleContainer.appendChild(button);
  });
}

function showStyleGroup(groupName) {
  const group = styleGroups[groupName];
  if (!group) {
    return;
  }

  renderStyleButtons(group, (path) => {
    setLayerImage(group.layerId, path);
  });
}

function registerStyleGroupHandlers() {
  Object.keys(styleGroups).forEach((groupName) => {
    const functionName =
      "change" + groupName.charAt(0).toUpperCase() + groupName.slice(1);

    window[functionName] = function () {
      showStyleGroup(groupName);
    };
  });
}

registerStyleGroupHandlers();
registerSectionActiveState("#accessories");
registerSectionActiveState("#style");
