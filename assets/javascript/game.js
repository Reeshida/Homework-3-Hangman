var mathWordArray= ["fraction", "decimal", "exponent","power", "integer", "inequality", "equation"];
var randomWord=mathWordArray[Math.floor(Math.random()*mathWordArray.length)];

var m;
var count=0;
var answerArray=[];

function startUp()

{
    for (var i=0; i< randomWord.length;i++)
    console.log(randomWord);
{
    answerArray[i]="__";
}
    m=answerArray.join(" ");
    document.getElementById("answer").innerHTML=m;
    }
    function Letter()   
{
    var letter=document.getElementById("letter").value;

        if (letter.length>0)
        {
            for (var i=0; i<randomWord.length; i++)
        {
                if (randomWord[i]===letter)
                {
                    answerArray[i]=letter;
                }
        }
     
     count++;
     document.getElementById("counter").innerHTML="No of chances:" + count;
     document.getElementById("answer").innerHTML=answerArray.join (" ");
}
    if (count>10)
    {
        document.getElementById("Stats").innerHTML="Try Harder";
    }
}


/*var mathword =['integer', 'exponent', 'power', 'fraction', 'decimal'];

var word=mathword[Math.floor(Math.random()*mathword.length)];
console.log("this is the word we are playing with",word)
var answer= [];

for (var i=0; i<word.length;i++){
    answer[i]=" _ ";
}

var remain=word.length;
while(remain>=0){
   
    alert(answer.join(""));

    var guess=prompt("Guess a letter or click Cancel to stop playing.");
    console.log("this is guess",guess)
    if (guess!==null){
        console.log("inside the if")
        // break;
         if (guess.length!==1){
            alert ("Please enter a single letter.");
            

       

        } else {
           
             for ( var j=0; j<word.length; j++){
                if (word [j]===guess){
                    answer[j]=guess;
                    
              };
            }
            remain--;                
        }
    }
        console.log(answer.join(""))
        console.log(word)
        console.log(remain,"remaining guesses")
        if (answer.join("")==word){   
            alert("You WON!")
        break;
        }
}
// alert (answer.join(""));
alert("Good Job! The Answer was "+ word);*/