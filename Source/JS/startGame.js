alert("Press Key Start If You Want To Start The Game")
window.onkeydown = function (e) {
    if (e.key === " ") {
        createGameBlock();
    }
};