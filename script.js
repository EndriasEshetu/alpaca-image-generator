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

function changeBackground() {
  const styleContainer = document.getElementById("style");
  if (!styleContainer) {
    return;
  }

  styleContainer.innerHTML = "";

  backgrounds.forEach((path) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = path.split("/").pop().replace(".png", "");
    button.onclick = function () {
      setBackground(path);
    };
    styleContainer.appendChild(button);
  });
}

registerSectionActiveState(".accessories");
registerSectionActiveState("#style");
