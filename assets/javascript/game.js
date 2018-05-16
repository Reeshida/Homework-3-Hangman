var mathword =['integer', 'exponent', 'power', 'fraction', 'decimal'];

var word=mathword[Math.floor(Math.random()*mathword.length)];

var answer= [];

for (var i=0; i<word.length;i++){
    answer[i]="_";
}

var remain=word.length,
while(remain>0){
    alert(answer.join(""));

    var guess=prompt("Guess a letter or click Cancel to stop playing.");

    if (guess===null){
        break;
        else if (guess.length!==1){
            
        }
    }
}