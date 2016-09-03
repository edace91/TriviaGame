
    // make variables global to the runtime of our application
    var audio, timer, time, correctAnswers, incorrectAnswers, unanswered, selected;
    var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_powerup.wav');
    //hide the quiz until user clocks on the start button
    $("#quiz").hide();
    //hide the quiz until clicked
    $("#done").hide();
    //once clicked start the visual timer and the countdown
    $("#start").on("click", function(){
        	$("#start").hide();
        	$("#quiz").show();
            timer.start();
            audio.play();
            setTimeout(timeUp, 1000 * 80);
            //make the timer start 1:20 seconds by recalling function 
    });
    //declare the value of the variables that will be displayed to the user in the end 
    var correctAnswers=0;
    var incorrectAnswers=0;
    var unanswered=5;
    //get the radio input value and compare the value to find
    //out if it is correct ou incorrect or  unaswered

    //function goes through the the radio input to check 
    //if it is clicked and what the value is 

    function getRadioValue(theRadioGroup){
        var elements = document.getElementsByName(theRadioGroup);
        for (var i = 0, l = elements.length; i < l; i++)
        {
            
            if (elements[i].checked)
            {
                return elements[i].value;
            }

        }
    };

    //getting value of the clicked radio button 
    $("input").on("click", function(){
        var audioCoin = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_coin.wav');
        audioCoin.play();
        var selected = getRadioValue($(this).attr("name"));
        console.log(selected);
        if (selected === "correct"){ correctAnswers++; unanswered--}
        else if(selected === "incorrect"){ incorrectAnswers++; unanswered--}
        
        $('#correct').html("Correct: "+correctAnswers);
        $('#incorrect').html("Incorrect: "+incorrectAnswers); 
        $('#unanswered').html("unanswered: " + unanswered);
    });

    /*function calculate(){
        if (selected === "correct"){
            correctAnswers++;
        }
        else if(selected === "incorrect"){
            incorrectAnswers++
        }
        else if{
            unanswered--
        }
    };*/
   
    //timer object
    //will display the time left to the user
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
    //once the time is up the page will change to the resuts 
    function timeUp(){

    // Once 80 seconds pass, time is up! hide quiz display results.
        $("#quiz").hide();
        $("#done").show();

    };


