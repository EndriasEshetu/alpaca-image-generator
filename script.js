function changeBackground() {
  const backgrounds = [
    "assets/background/background1.jpg",
    "assets/background/background2.png",
    "assets/background/background3.png",
  ];
  const background = document.getElementById("background");
  const currentSrc = background.getAttribute("src");
  const currentIndex = backgrounds.indexOf(currentSrc);
  const nextIndex = (currentIndex + 1) % backgrounds.length;
  background.setAttribute("src", backgrounds[nextIndex]);
}
