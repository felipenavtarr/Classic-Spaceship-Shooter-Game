const OPPONENT_HEIGHT = 5,
    OPPONENT_PICTURE = "assets/images/ufo_128.png",
    OPPONENT_PICTURE_DEAD = "assets/images/malo_muerto.png",
    OPPONENT_SPEED = 5,
    OPPONENT_WIDTH = 5,
    GAME_OVER_PICTURE = "assets/images/game_over.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_PICTURE = "assets/images/spaceship_game_128.png",
    PLAYER_PICTURE_DEAD = "assets/images/bueno_muerto.png",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 5,
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "assets/images/missile_32.png",
    SHOT_PICTURE_OPPONENT = "assets/images/shot2.png",
    SHOT_WIDTH = 1.5,
	PLAYER_LIVES = 3,
	OPPONENT_BOSS_SPEED = 2*OPPONENT_SPEED,
	OPPONENT_BOSS_PICTURE = "assets/images/jefe.png",
    OPPONENT_BOSS_PICTURE_DEAD = "assets/images/jefe_muerto.png",
	YOU_WIN_PICTURE = "assets/images/you_win.png";
	

function getRandomNumber (range) {
    return Math.floor(Math.random() * range);
}

function collision (div1, div2) {
    const a = div1.getBoundingClientRect(),
        b = div2.getBoundingClientRect();
    return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);

}
var game;
document.addEventListener("DOMContentLoaded", () => {
        game = new Game();
        game.start();
    }
);