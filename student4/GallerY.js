function expandImage(imgElement, description) {
    var expandedContainer = document.getElementById("expandedContainer");
    var expandImg = document.getElementById("expandedImage");
    var Description = document.getElementById("imgDescription");

    expandImg.src = imgElement.src;
    Description.innerHTML = description;
    

    // Get the current font size of the textToChange element
    var textToChange = document.getElementById("textToChange");
    var currentSize = parseFloat(window.getComputedStyle(textToChange, null).getPropertyValue('font-size'));
    Description.style.fontSize = currentSize + "px";

    expandedContainer.style.display = "flex"; // Use flex to display the contents side by side

    // Get the current background color of the document
    var currentBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
    Description.style.backgroundColor = currentBackgroundColor;
  }

  function hideDescription() {
    var Container = document.getElementById("expandedContainer");
    Container.style.display = "none";
  }

  function increaseTextSize() {
    var textToChange = document.getElementById("textToChange");
    var currentSize = parseFloat(window.getComputedStyle(textToChange, null).getPropertyValue('font-size'));
    textToChange.style.fontSize = (currentSize + 2) + "px";

    // to increase the the font size of the description of the image when text size is changed
    var Description = document.getElementById("imgDescription");
    Description.style.fontSize = (currentSize + 2) + "px";
  }

  function decreaseTextSize() {
    var textToChange = document.getElementById("textToChange");
    var currentSize = parseFloat(window.getComputedStyle(textToChange, null).getPropertyValue('font-size'));
    textToChange.style.fontSize = (currentSize - 2) + "px";

    // to decrese the font size of the  description of the image when text size is changed
    var Description = document.getElementById("imgDescription");
    Description.style.fontSize = (currentSize - 2) + "px";
  }

  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;

    // If the expanded container is visible, update the background color of the description
    var expanded = document.getElementById("expandedContainer");
    if (expanded.style.display === "flex") {
      var Description = document.getElementById("imgDescription");
      Description.style.backgroundColor = color;
      Description.style.fontSize=fontSize;
    }
  }