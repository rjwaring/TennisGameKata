var Player = require("./Player.js");

var TennisGame1 = function(player1Name, player2Name) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);

    this.pointNames = [
        'Love',
        'Fifteen',
        'Thirty',
        'Forty'
    ];
};

TennisGame1.prototype.getPlayerByName = function(name) {
    if (this.player1.isNamedPlayer(name)) {
        return this.player1;
    }

    return this.player2;
};

TennisGame1.prototype.getPointName = function(score) {
    return this.pointNames[score];
};

TennisGame1.prototype.getPlayer1Score = function() {
    return this.player1.getScore();
};

TennisGame1.prototype.getPlayer2Score = function() {
    return this.player2.getScore();
};

TennisGame1.prototype.wonPoint = function(playerName) {
    var player = this.getPlayerByName(playerName);

    player.wonPoint();
};

TennisGame1.prototype.isCurrentlyDrawn = function () {
    return this.getPlayer1Score() === this.getPlayer2Score();
};

TennisGame1.prototype.drawOutput = function(score) {
    if (score < 3) {
        return this.getPointName(score) + '-All';
    }

    return 'Deuce';
};

TennisGame1.prototype.isPotentialGamePoint = function () {
    return this.getPlayer1Score() >= 4 || this.getPlayer2Score() >= 4;
};

TennisGame1.prototype.isAdvantage = function() {
    return Math.abs(this.getPlayer1Score() - this.getPlayer2Score()) === 1;
};

TennisGame1.prototype.isPlayer1Winning = function() {
    return this.getPlayer1Score() > this.getPlayer2Score();
};

TennisGame1.prototype.advantageOutput = function() {
    if (this.isPlayer1Winning()) {
        return "Advantage player1";
    }

    return "Advantage player2";
};

TennisGame1.prototype.winOutput = function() {
    if (this.isPlayer1Winning()) {
        return "Win for player1";
    }

    return "Win for player2";
};

TennisGame1.prototype.calculateAdvantageOrWin = function() {
    if (this.isAdvantage()) {
        return this.advantageOutput();
    }

    return this.winOutput();
};

TennisGame1.prototype.getPlayerVsPlayerScore = function() {
    var score;

    score = this.getPointName(this.getPlayer1Score());
    score += '-';

    return score + this.getPointName(this.getPlayer2Score());
};

TennisGame1.prototype.getScore = function() {
    if (this.isCurrentlyDrawn()) {
        return this.drawOutput(this.getPlayer1Score());
    } else if (this.isPotentialGamePoint()) {
        return this.calculateAdvantageOrWin();
    } else {
        return this.getPlayerVsPlayerScore();
    }
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
