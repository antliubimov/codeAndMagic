// setup.js
'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Поттер'];
var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var randomElem = function (arr) {
  var rand = Math.random() * arr.length - 0.5;
  return Math.round(rand);
};
var wizards = [
  {
    name: `${firstName[randomElem(firstName)]} ${lastName[randomElem(lastName)]}`,
    coatColor: `${coatColor[randomElem(coatColor)]}`,
    eyesColor: `${eyesColor[randomElem(eyesColor)]}`
  },
  {
    name: `${firstName[randomElem(firstName)]} ${lastName[randomElem(lastName)]}`,
    coatColor: `${coatColor[randomElem(coatColor)]}`,
    eyesColor: `${eyesColor[randomElem(eyesColor)]}`
  },
  {
    name: `${firstName[randomElem(firstName)]} ${lastName[randomElem(lastName)]}`,
    coatColor: `${coatColor[randomElem(coatColor)]}`,
    eyesColor: `${eyesColor[randomElem(eyesColor)]}`
  },
  {
    name: `${firstName[randomElem(firstName)]} ${lastName[randomElem(lastName)]}`,
    coatColor: `${coatColor[randomElem(coatColor)]}`,
    eyesColor: `${eyesColor[randomElem(eyesColor)]}`
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

userDialog.querySelector('.setup-similar').classList.remove('hidden');