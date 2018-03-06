$('#start').on('click', function(){
   game.start();
})
$(document).on('click','#end',function(){
    game.done();
})

var questions =[{
  question:"What town did Lightning McQueen get stuck in on his way to California?",
  answers: ["Radiator Springs","Agrabah","San Fransokyo","Monstropolis"],
  correctAnswer: "Radiator Springs"
},{
  question:"Luigi desperately wanted to meet which model car?",
  answers: ["Honda","Ford","Ferrari","Tesla"],
  correctAnswer: "Ferrari"
},{
  question:"Who was the 1st to discover that Doc was The Hudson Hornet?",
  answers: ["Sally","Lightning McQueen","Tow-Mater","Guido"],
  correctAnswer: "Lightning McQueen"
},{
  question:"What number is Lightning McQueen?",
  answers: ["105","59","33","95"],
  correctAnswer: "95"
},{
  question:"What was the town founders name?",
  answers: ["Stanley","Walt Disney","Buzz Lightyear","Mufasa"],
  correctAnswer: "Stanley"
},{
  question:"Who is Flo married to?",
  answers: ["Sarge","Ramone","Fillmore","Doc Hudson"],
  correctAnswer: "Ramone"
},{
  question:"Who tells the press where McQueen is?",
  answers: ["Sally","Mater","Sarge","Doc"],
  correctAnswer: "Doc"
},{
  question:"What does Sally call Lightning McQueen?",
  answers: ["Lightning","Stickers","McQueen","95"],
  correctAnswer: "Stickers"
},{
  question:"What does Mater want to ride in one day?",
  answers: ["Airplane","Train","Tow Truck","Helicopter"],
  correctAnswer: "Helicopter"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is up")
            game.done();
        }
    },
    start: function(){
        timer=setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0; i<questions.length;i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2>')
            for(var j=0; j<questions[i].answers.length;j++){
              //$('#subwrapper').append('<input type="radio" name="question-0" value="Radiator Springs">')  
             $('#subwrapper').append("<input type='radio' name='question-" +i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]) 
              
            }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button>');
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function(){
             console.log($(this).val());
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
                console.log(game.correct+"correct");
            } else {
                game.incorrect++;
                console.log("Incorrect")
            }
        });
        $.each($("input[name='question-1']:checked"),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"),function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"),function(){
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
        },
        result: function(){
            console.log(game.correct);
            clearInterval(timer);
            $('#subwrapper h2').remove();

            $('#subwrapper').html("<h2>All done!</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
            console.log("Testing")
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            console.log("Testing 1")
            $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
            console.log("Testing 2")
        }
}


