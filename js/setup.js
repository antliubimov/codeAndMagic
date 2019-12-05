// setup.js
'use strict';
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomElement = function (arr) {
  var rand = Math.random() * arr.length - 0.5;
  return arr[Math.round(rand)];
};

var wizards = [
  {
    name: `${getRandomElement(firstName)} ${getRandomElement(lastName)}`,
    coatColor: `${getRandomElement(coatColor)}`,
    eyesColor: `${getRandomElement(eyesColor)}`
  },
  {
    name: `${getRandomElement(firstName)} ${getRandomElement(lastName)}`,
    coatColor: `${getRandomElement(coatColor)}`,
    eyesColor: `${getRandomElement(eyesColor)}`
  },
  {
    name: `${getRandomElement(firstName)} ${getRandomElement(lastName)}`,
    coatColor: `${getRandomElement(coatColor)}`,
    eyesColor: `${getRandomElement(eyesColor)}`
  },
  {
    name: `${getRandomElement(firstName)} ${getRandomElement(lastName)}`,
    coatColor: `${getRandomElement(coatColor)}`,
    eyesColor: `${getRandomElement(eyesColor)}`
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


var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var inputCoatColor = document.querySelector('input[name=coat-color]');
var inputEyesColor = document.querySelector('input[name=eyes-color]');
var inputFireballColor = document.querySelector('input[name=fireball-color]');

var onWizardColor = function (wizardThing, thingColors) {
  var randomColor = getRandomElement(thingColors);

  while (randomColor === wizardThing.style.fill) {
    randomColor = getRandomElement(thingColors);
  }

  if (wizardThing === wizardFireball) {
    wizardThing.style.backgroundColor = randomColor;
  } else {
    wizardThing.style.fill = randomColor;
  }

  switch (wizardThing) {
    case wizardCoat:
      inputCoatColor.value = randomColor;
      break;
    case wizardEyes:
      inputEyesColor.value = randomColor;
      break;
    case wizardFireball:
      inputFireballColor.value = randomColor;
      break;
  }
};

wizardCoat.addEventListener('click', onWizardColor.bind(null, wizardCoat, coatColor));
wizardEyes.addEventListener('click', onWizardColor.bind(null, wizardEyes, eyesColor));
wizardFireball.addEventListener('click', onWizardColor.bind(null, wizardFireball, fireballColor));

var dialogHandle = setup.querySelector('.upload');

dialogHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY,
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setup.style.top = (setup.offsetTop - shift.y) + 'px';
    setup.style.left = (setup.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    if (dragged) {
      var onClickPreventDefault = function (evt) {
        evt.preventDefault();
        dialogHandle.removeEventListener('click', onClickPreventDefault)
      };
      dialogHandle.addEventListener('click', onClickPreventDefault);
    }

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };



  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
