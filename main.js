// Challenge One-------------------------------
var philip1 = {birth: 2000, yearInQuestion: 2010};
var philip2 = {birth: 2000, yearInQuestion: 1995};
var philip3 = {birth: 2000, yearInQuestion: 2000};

function challenge1(monkey){
    var answer = 0;
    if(monkey.yearInQuestion > monkey.birth){
    answer = (monkey.yearInQuestion - monkey.birth);
    var print = "<h1> You are " +answer+ " years old.</h1>";
    }

    if(monkey.yearInQuestion < monkey.birth){
    answer = (monkey.birth - monkey.yearInQuestion);
    var print = "<h1> You will be born in " +answer+ " years.</h1>";
    }

    if(monkey.yearInQuestion === monkey.birth){
    var print = "<h1> You were born this very year.</h1>";
    }

var ageDiv = document.getElementById("age");
ageDiv.innerHTML += print;
}
challenge1(philip1);
challenge1(philip2);
challenge1(philip3);

// Challenge Two --------------------------------

function challenge2(even) {
    if(even % 2 === 0){
        var turd = true;
    } else {
        turd = false;
    }


    if(even % 10 === 0){
        var poo = true;
    } else {
        poo = false;
        }
    
    if(even === 2){
        var crap = true;
    } else if(even % 2 === 0){
        crap = false;
    } for(var i = 3; i*i <= even; i += 2){
            if(even % i === 0){
                crap = false;
        }  
    }    
var printTwo = "<h1>" + even + " - Even: " + turd +", Mulitple of 10: " + poo + " Prime: " + crap + "</h1>";
var mathDiv = document.getElementById("mathedUp");
mathDiv.innerHTML += printTwo;
} 

challenge2(7);
challenge2(10);
challenge2(3);
challenge2(2);
