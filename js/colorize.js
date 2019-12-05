// colorize.js
'use strict';

(function () {
  var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var getRandomElement = function (arr) {
    var rand = Math.random() * arr.length - 0.5;
    return arr[Math.round(rand)];
  };

  return window.colorize = {
      wizardCoatColor,
      wizardEyesColor,
      wizardFireballColor,

      getColor: getRandomElement,

      setColor: function (element, inputElement, colorArr) {
        element.addEventListener('click', function () {
          var color = getRandomElement(colorArr);
  
          while (color === element.style.fill) {
            color = getRandomElement(colorArr);
          }
  
          if (element.tagName.toLocaleLowerCase() === 'div') {
            element.style.backgroundColor = color;
          } else {
            element.style.fill = color;
          }
  
          inputElement.value = color;
        });
      }
    };
})();