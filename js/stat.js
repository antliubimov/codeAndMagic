'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 20;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP;

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
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура Вы победили!',CLOUD_X + GAP ,CLOUD_Y + GAP);
  ctx.fillText('Список результатов:',CLOUD_X + GAP ,CLOUD_Y + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    // ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillText(players[i], (CLOUD_X + GAP) * i + CLOUD_X + GAP * 7 + TEXT_WIDTH  / 2 - BAR_WIDTH, CLOUD_HEIGHT + GAP * 2);
    ctx.save();
    ctx.translate((CLOUD_X + GAP) * i + CLOUD_X + GAP * 7 + TEXT_WIDTH / 2, CLOUD_Y + GAP * 2 + barHeight);
    ctx.rotate(Math.PI);
    ctx.fillRect(0,0, BAR_WIDTH, (barHeight * times[i]) / maxTime);
    ctx.restore();
  }
};