var Player = function(name) {
    this.name = name;
    this.score = 0;
};

Player.prototype.wonPoint = function() {
    this.score++;
};

Player.prototype.getScore = function() {
    return this.score;
};

Player.prototype.isNamedPlayer = function(name) {
    return name === this.name;
};


if (typeof window === "undefined") {
    module.exports = Player;
}
