//your code here
const images = document.querySelectorAll(".image");
let draggedElement = null;

images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
    e.target.classList.add("selected");
  });

  image.addEventListener("dragend", (e) => {
    e.target.classList.remove("selected");
  });

  image.addEventListener("dragover", (e) => {
    e.preventDefault(); // Necessary to allow a drop
  });

  image.addEventListener("drop", (e) => {
    e.preventDefault();
    const targetElement = e.target;

    if (draggedElement !== targetElement) {
      // Swap background images between the dragged and target elements
      const draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
      const targetBg = window.getComputedStyle(targetElement).backgroundImage;

      draggedElement.style.backgroundImage = targetBg;
      targetElement.style.backgroundImage = draggedBg;
    }
  });
});
