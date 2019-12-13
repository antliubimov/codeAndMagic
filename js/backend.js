// backend.js
'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  var load = (onLoad, onError) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    var getUrl = `${URL}/data`;
    //console.log(getUrl);
    xhr.open('GET', getUrl);

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

    xhr.open('GET', getUrl);
    xhr.send();
  };

  var save = (data, onLoad, onError) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения')
    });

    xhr.addEventListener('timeout', function () {
      onError(`Запрос не успел выполниться за ${xhr.timeout} мс`)
    });
    xhr.open('POST', URL);
    xhr.send(data);
  };

  return window.backend = {
    load,
    save
  };
})();