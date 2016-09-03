

    // make variables global to the runtime of our application
    var audio, timer, time, correctAnswers, incorrectAnswers, unanswered;
    var audio = new Audio('https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90');
    //hide the quiz until user clocks on the start button
    $("#quiz").hide();
    $("#done").hide();
    
    $("#start").on("click", function(){
        	$("#start").hide();
        	$("#quiz").show();
            timer.start();
            audio.play();
            setTimeout(timeUp, 1000 * 80);
            //make the timer start 1:20 seconds by recalling function 
    });
    //play music while playing trivia game
    
    $('input[type="radio"]:checked').each(function() {

        if (this.value > 0 && this.value <= 2) {
           // do something if the value is less than zero and below or equal to two
        }else if (this.value > 2) {
           // do something else if the value is greater than two
        }
    });

    //create an object answer key, with key objects for each individual 
   //question, Question 1 should be something specific and the value should 
   //be the question answer. and name it the answer then do a checker to 
   // compare the radio clicked value to the answer.
   var answerKey =
   {
        "#questionFoundation":
        {
            "wrongYear1": "1986",
            "correctYear": "1889",
            "wrongYear2": "1973",
            "wrongYear2": "1968",
        }
        "#questionMiyamoto":
        {
            "worked1": "Mario",
            "worked2": "The Legend of Zelda",
            "worked3": "Donkey Kong", 
            "didntWork": "pokemon",
        }
        "#questionZelda":
        {
            "wrongLocation1": "The Water Temple",
            "correctLocation": "The Graveyard",
            "wrongLocation2": "Kokiri Forest",
            "wrongLocation3": "Lord Jabu-Jabu's Belly",
        }
        "#questionMarioSport":
        {
            "realSport1": "Mario Hoops 3-on-3",
            "realSport2": "Mario Golf",
            "realSport3": "Super Mario Strikers",
            "fakeSport": "Super Mario Boxing",
        }
        "#questionNext":
        {
            "fakeConsole1": "Wii 2",
            "fakeConsole2": "Nin Ex",
            "realConsole": "NX",
            "fakeConsole3": "Wii X",
        }
   }



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
            // Use the variable you just created to show the converted time in the "display" div.
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

    // Once 80 seconds pass, time is up! hide quiz display results.
        $("#quiz").hide();
        $("#done").show();

    }


