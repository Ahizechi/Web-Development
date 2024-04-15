$(document).ready(function() {
    const buttonColours = ["red", "blue", "green", "yellow"];
    let gamePattern = [];
    let userClickedPattern = [];
    let level = 0;
    let started = false;

    $(document).keydown(function() {
        if (!started) {
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
        }
    });

    $(".btn").click(function() {
        var userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);
        
        playSound(userChosenColour);
        animatePress(userChosenColour);
        flashButton(userChosenColour);
        
        checkAnswer(userClickedPattern.length - 1);
    });

    function nextSequence() {
        userClickedPattern = [];
        level++;
        $("#level-title").text("Level " + level);
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);

        playSound(randomChosenColour);
        flashButton(randomChosenColour);
    }

    function playSound(name) {
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    }

    function animatePress(currentColour) {
        var $button = $("#" + currentColour);
        $button.addClass("pressed");
        setTimeout(function() {
            $button.removeClass("pressed");
        }, 100);
    }

    function flashButton(colour) {
        var $button = $('#' + colour);
        $button.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }

    function checkAnswer(currentLevel) {
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(function() {
                    nextSequence();
                }, 1000);
            }
        } else {
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 200);
            $("#level-title").text("Game Over, Press Any Key to Restart");
            startOver();
        }
    }

    function startOver() {
        level = 0;
        gamePattern = [];
        userClickedPattern = [];  // Also clear user's pattern to restart fresh
        started = false;
    }
});
