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

