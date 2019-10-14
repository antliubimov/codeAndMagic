'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GIST_WIDTH = 40;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_GORIS = 50;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var barHeight = 150;

var renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = arr => {
  return Math.max(...arr);
};

window.renderStatistics = (ctx, players, times) => {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx,CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = "16px PT Mono";
  ctx.fillText('Ура Вы победили!',CLOUD_X  + GAP * 2 ,FONT_GAP + GAP * 2);
  ctx.fillText('Список результатов:',CLOUD_X  + GAP * 2,FONT_GAP  * 2 + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP_GORIS + (GAP_GORIS + GIST_WIDTH) * i, CLOUD_HEIGHT - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = `hsl(240, ${100 * Math.random().toFixed(2)}%, 50%)`;
    }
    ctx.fillRect(CLOUD_X + GAP_GORIS + (GAP_GORIS + GIST_WIDTH) * i,CLOUD_HEIGHT -  (barHeight * times[i]) / maxTime - (FONT_GAP + GAP * 2 ), BAR_WIDTH, (barHeight * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(times[i].toFixed(), CLOUD_X + GAP_GORIS + (GAP_GORIS + GIST_WIDTH) * i,CLOUD_HEIGHT -  (barHeight * times[i]) / maxTime - (FONT_GAP + GAP * 3));
  }
};