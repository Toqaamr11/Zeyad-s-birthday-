
let stage = 1;

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0; // Rewind to the start
    sound.play();
}

function startGame() {
    playSound('click-sound'); // Play click sound when button is pressed
    
    let result = Math.random() > 0.5 ? "win" : "lose"; // Simple luck-based game
    if (result === "win") {
        playSound('win-sound'); // Play win sound
        showLoveMessage(stage);
        stage++;
    } else {
        playSound('lose-sound'); // Play lose sound
        document.getElementById('game-result').innerHTML = "Oh no! You lost. Try again.";
    }
}

function showLoveMessage(stage) {
    const loveMessages = [
        "Congrats! You won the first stage. My love for you grows every day, Zeyad.",
        "Wow, you did it again! Just like Dazai’s clever mind, you surprise me every time.",
        "Amazing! Like Atsushi finding his inner strength, you keep winning my heart.",
        "You’re on a roll! With every win, you show me why I fell in love with you.",
        "Fantastic! Like the unbreakable bond between the Armed Detective Agency members, our love is unstoppable.",
        "Incredible! You won again, just as Dazai always finds a way to turn things around.",
        "Keep going! Your victories make me fall deeper in love with you, Zeyad!",
        "Unbelievable! Like Ranpo solving a tough case, you always know how to win me over!",
        "You’re a true hero in my life, just like Atsushi’s Tiger saving the day.",
        "My heart is yours forever, just like Dazai's loyalty to his friends."
    ];
    
    let message = loveMessages[stage - 1] || "You keep winning, and I keep falling more in love with you!";
    document.getElementById('game-result').innerHTML = message;
}
