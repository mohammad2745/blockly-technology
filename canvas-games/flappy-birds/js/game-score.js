function GameScore(canvas) {
    let gameScore = this;

    // Global Attributes
    gameScore.canvas = canvas;
    gameScore.context = gameScore.canvas.getContext('2d');

    // Specification
    gameScore.start = new Date();
    gameScore.score = 0;
    gameScore.x = 0;
    gameScore.y = 0;
}

GameScore.prototype.draw = function() {
    let gameScore = this;

    // Draw
    let draw = new Date();
    gameScore.score = parseFloat((draw - gameScore.start) / 1000).toFixed(1);
    gameScore.context.font = '45px Verdana';
    gameScore.context.fillText(gameScore.score, gameScore.x, gameScore.y);
}