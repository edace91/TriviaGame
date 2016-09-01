

    // make variables global to the runtime of our application
    var audio, timer, time, correctAnswers, incorrectAnswers, unanswered;
    //hide the quiz until user clocks on the start button
    var audio = new Audio('https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90');
    
    $("#quiz").hide();
    $("#done").hide();
    
    $("#start").on("click", function(){
        	$("#start").hide();
        	$("#quiz").show();
            timer.start();
            audio.play();
            //make the timer start 1:20 seconds by recalling function 
    });
    //play music while playing trivia game
    

    setTimeout(timeUp, 1000 * 82);

    //timer object
    var timer = {
        time: 80,
        reset: function(){
            timer.time = 80;
            //Change the "display" div to "00:60."
            $('#display').html('01:20');
        },

        start: function(){
            // Use setInterval to start the count here.
            counter = setInterval(timer.count, 1000);
        },

        count: function(){
            // Decrease time by 1, remember we cant use "this" here.
            timer.time--;
            // Get the current time, pass that into the stopwatch.timeConverter function, 
            // and save the result in a variable.
            var converted = timer.timeConverter(timer.time);
            //Use the variable you just created to show the converted time in the "display" div.
            $('#display').html(converted);
        },

        timeConverter: function(t){
            var minutes = Math.floor(t/60);
            var seconds = t - (minutes * 60);
            if (seconds < 10){
                 seconds = "0" + seconds;
            }
            if (minutes === 0){
                minutes = "00";
            } else if (minutes < 10){
                minutes = "0" + minutes;
            }
            return minutes + ":" + seconds;
        }
    };

    function timeUp(){

    // Once 80 seconds pass, time is up! 
        $("#quiz").hide();
        $("#done").show();

    }


