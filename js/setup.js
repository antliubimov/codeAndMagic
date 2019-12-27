// setup.js
'use strict';

(function() {
  var similarListElement = document.querySelector('.setup-similar-list');

  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      return rankDiff === 0 ? namesComparator(left.name, right.name) : rankDiff;
    }));
  };

  window.colorize.wizard.onCoatChange = function(color) {
    eyesColor = color;
    updateWizards();
  };

  window.colorize.onCoatChange = function(color) {
    coatColor = color;
    updateWizards();
  };

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.classList.add('error');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  var removeError = function () {
    var error = document.querySelector('.error');
    if (error) {
      error.remove();
    }
  };

  var userDialog = document.querySelector('.setup');
  var form = document.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function (response) {
      removeError();
      userDialog.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var inputCoatColor = document.querySelector('input[name=coat-color]');
  var inputEyesColor = document.querySelector('input[name=eyes-color]');
  var inputFireballColor = document.querySelector('input[name=fireball-color]');

  window.colorize.setColor(wizardCoat, inputCoatColor, window.colorize.wizardCoatColor);
  window.colorize.setColor(wizardEyes, inputEyesColor, window.colorize.wizardEyesColor);
  window.colorize.setColor(wizardFireball, inputFireballColor, window.colorize.wizardFireballColor);
})();


