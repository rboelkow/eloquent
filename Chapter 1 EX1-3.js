/*  EX 1
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.
let abc = "abc"; console.log(abc.length); // → 3
*/
for (var i = 0, output = "#"; i < 7; console.log(output), i++, output += "#");
// book recommends to use .len property, iterating over the length of the output would change the code to be like
for (var i = 0, output = "#"; output.length < 7; console.log(output), i++, output += "#");

// added function for issue 1
function beersito(pyramido) {
    i = 0, output = '';
    while (i < 7){
        output += String(pyramido);
        console.log(output);
        i ++;
    }
    return output;
}

// test for beersito
testcasevar1 = Math.floor((Math.random() * 100) + 1);
testcase1 = beersito(testcasevar1)
if (testcase1.length % 7 === 0) {
    console.log("Test 1/3 passed.")
} else {
    console.log("Test 1/3 failed.")
}

if (testcase1.length / String(testcasevar1).length === 7) {
    console.log("Test 2/3 passed.")
} else {
    console.log("Test 2/3 failed.")
}

if (testcase1.slice(0 , String(testcasevar1).length) === String(testcasevar1)) {
    console.log("Test 3/3 passed.")
} else {
    console.log("Test 3/3 failed.")
}


/* EX 2
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/
var current = 0
while  (current < 100) {
    current ++;
    if ((current % 3 == 0) && (current % 5 == 0)){        
        console.log("FizzBuzz");}
    else if (current % 3 == 0){
        console.log("Fizz");}
    else if (current % 5 == 0){
    console.log("Buzz");}
    else {
    console.log(current);}
}

/* EX 3A
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
#### ####
#### ####
#### ####
#### ####
*/

/* When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid
of the given width and height.
*/

function chessmaker (gridsize){
    oddLine = "", evenLine = "", fullgrid = "", gridprint = gridsize
    while (gridsize > 0) {
        if (gridsize % 2 == 0) {
            evenLine += ' ';
            oddLine += '#';
            gridsize --;
        }
        else {
            evenLine += '#';
            oddLine += ' ';
            gridsize --;
        }
    }
    oddLine += '\n', evenLine += '\n'
    while (gridprint > 0) {
        if (print % 2 == 0) {
            fullgrid += evenLine;
            gridprint --;
        }
        else {
            fullgrid += oddLine;
            gridprint --;
        }

    }
    return fullgrid
}