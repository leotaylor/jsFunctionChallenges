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

// Challenge Three -  ------------------------

function challenge3(uniqua) {
    var seen = {};
    var newArray = [];
    var j = 0;
        for(var k = 0; k < uniqua.length; k++) {
             var item = uniqua[k];
             if(seen[item] !== 1) {
                   seen[item] = 1;
                   newArray[j++] = item;
             }
        }
        // return newArray;
              var total = 0;  
        for(var l = 0; l < newArray.length; l++)
             total += newArray[l];
            //  return total;   
    var printThree = "<h1>The sum of " + uniqua + " without duplicates is: " + total + "</h1>";
    var arrazingDiv = document.getElementById("arrazing");
    arrazingDiv.innerHTML += printThree;   
    }
challenge3([ 1, 2, 3]); 
challenge3([ 1, 3, 8, 1, 8]);
challenge3([ -1, -1, 5, 2, -7]);

// Challenge 4 ---------------------
var flyingCreatures = (["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];


function challenge4(birds, weirdBirds){
    for(var p = 0; p < birds.length; p++){
        for(var q = 0; q < weirdBirds.length; q++){
            var noGeese = birds.filter(weirdBirds);
            if(birds[p] === weirdBirds[q])
            return noGeese;
        }      
    }   
    var printFour = "<h1> NO Geese Allowed Club: " + noGoose + "</h1>";
    var gooseDiv = document.getElementById("whatGoose");
    gooseDiv.innerHTML += printFour;
}
challenge4(flyingCreatures, geese);
// function challenge4(birds, weirdBirds){
//     var noGeese = [];
//     for(var p = 0; p < birds.length; p++){
//         noGeese = (birds.filter[p] !== weirdBirds);
//         return noGeese; 
//     }
//     var printFour = "<h1> NO Geese Allowed Club: " + noGeese + "</h1>";
//     var gooseDiv = document.getElementById("whatGoose");
//     gooseDiv.innerHTML += printFour;
// }

