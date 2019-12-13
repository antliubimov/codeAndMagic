// setup.js
'use strict';

(function() {
  var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

 /* var wizards = [
    {
      name: `${window.colorize.getColor(firstName)} ${window.colorize.getColor(lastName)}`,
      coatColor: `${window.colorize.getColor(window.colorize.wizardCoatColor)}`,
      eyesColor: `${window.colorize.getColor(window.colorize.wizardEyesColor)}`
    },
    {
      name: `${window.colorize.getColor(firstName)} ${window.colorize.getColor(lastName)}`,
      coatColor: `${window.colorize.getColor(window.colorize.wizardCoatColor)}`,
      eyesColor: `${window.colorize.getColor(window.colorize.wizardEyesColor)}`
    },
    {
      name: `${window.colorize.getColor(firstName)} ${window.colorize.getColor(lastName)}`,
      coatColor: `${window.colorize.getColor(window.colorize.wizardCoatColor)}`,
      eyesColor: `${window.colorize.getColor(window.colorize.wizardEyesColor)}`
    },
    {
      name: `${window.colorize.getColor(firstName)} ${window.colorize.getColor(lastName)}`,
      coatColor: `${window.colorize.getColor(window.colorize.wizardCoatColor)}`,
      eyesColor: `${window.colorize.getColor(window.colorize.wizardEyesColor)}`
    }
  ];*/

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var error = document.querySelector('.error');
    if (error) {
      error.remove();
    }
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
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

  var userDialog = document.querySelector('.setup');
  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function (response) {
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


