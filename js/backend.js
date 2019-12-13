// backend.js
'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick/data';

  var load = (onLoad, onError) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', URL);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения')
    });

    xhr.addEventListener('timeout', function () {
      onError(`Запрос не успел выполниться за ${xhr.timeout} мс`)
    });

    xhr.timeout = 10000;

    xhr.open('GET', URL);
    xhr.send();
  };

  var save = (data, onLoad, onError) => {

  };

  return window.backend = {
    load,
    save
  };
})();