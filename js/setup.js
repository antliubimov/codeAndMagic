// setup.js
'use strict';

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];


var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = [
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
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
// temp
document.querySelector('.setup-similar').classList.remove('hidden');
//

var setup = document.querySelector('.setup');

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var inputCoatColor = document.querySelector('input[name=coat-color]');
var inputEyesColor = document.querySelector('input[name=eyes-color]');
var inputFireballColor = document.querySelector('input[name=fireball-color]');

window.colorize.setColor(wizardCoat, inputCoatColor, window.colorize.wizardCoatColor);
window.colorize.setColor(wizardEyes, inputEyesColor, window.colorize.wizardEyesColor);
window.colorize.setColor(wizardFireball, inputFireballColor, window.colorize.wizardFireballColor);

