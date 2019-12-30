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

  var setColor = function (element, inputElement, colorArr) {
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

      window.debounce(window.similar.updateWizards)();
    });
  };


  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var inputCoatColor = document.querySelector('input[name=coat-color]');
  var inputEyesColor = document.querySelector('input[name=eyes-color]');
  var inputFireballColor = document.querySelector('input[name=fireball-color]');

  setColor(wizardCoat, inputCoatColor, wizardCoatColor);
  setColor(wizardEyes, inputEyesColor, wizardEyesColor);
  setColor(wizardFireball, inputFireballColor, wizardFireballColor);

  window.colorize = {
      wizardCoatColor,
      wizardEyesColor,
      wizardFireballColor,
    };
})();