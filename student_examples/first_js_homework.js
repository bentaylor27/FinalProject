SECTION 1//
DRY stands for Don't Repeat Yourself, and just means to keep code concise and easy-to-read so that it has optimal functioning whilst being reader-friendly. We have learned to use tools like VS Code and CodePen as well as various other programs that try to minimize extraneous code and keep it to the necessary information.
The difference between const and let is that when the constant is defined, it cannot be changed/re-assigned whereas let can be changed later on. Var is an older way of defining variables that could be classified as either consts or lets. 


SECTION 2//

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
let g = 0;


Boolean(a<b);
    console.log(Boolean(a<b));
Boolean(c>d);
    console.log(Boolean(c>d));
Boolean('Name'=='Name');
    console.log(Boolean('Name'=='Name'));
Boolean(a<b<c);
    console.log(Boolean(a<b<c));
Boolean(a==a<16);
    console.log(Boolean(a==a<16));
Boolean(e=='Kevin');
    console.log(Boolean(e=='Kevin'));
Boolean(48=='48');
    console.log(Boolean(48=='48'));
Boolean(f!=e);
    console.log(Boolean(f!=e));
console.log(g);
g = b + c;
    console.log(g);

Boolean(a _ (b || f) _ !f && e _ c);

10 = g

I used let to keep it aesthetically in line with the above consts a-f rather than using var. I knew it could not be const because it would be changed in a future step.
After playing around with the g in my code, it finally ran when i got rid of the variable in front.
SyntaxError: Invalid left-hand side in assignment


SECTION 3//

The code below is an infinite loop because there are no iterators or conditionals defined so it will never know when to stop running itself.

The second loop is not an infinite loop because the const is not true and thus does not meet the condition to run the loop. Running it would result in the response, 'Do not run this loop.'

let letters = "A";
let i = 0;
//start a while loop that runs as long as i is less than 20
while (i < 20) {
    //adds to the value of A with each iteration until it gets to 20
	letters += "A";
	i++;
}
//runs the while function on the terminal screen 
console.log(letters);

//I was not sure what this code would run, as I thought it might be A, AA, AAA, etc, however resulted in twenty A's in the terminal. I learned through this exercise how while loops when given non-numeric values, and how these can be defined in a slightly different manner.


//SECTION 4//
//The key differences that make a for loop different than while are that there are a defined number of iterations and a for loop requires a new variable to be defined, while a while loop works with existing ones. 
//The first part of the control panel is: iterator
//The second part of the control panel is: conditional
//The third part of the control panel is: final expression

for (let i = 0; i <=999; i++) {
    console.log(i);
}

//Bonus Challenge: The backslash in JS is an escape character meaning that it reads the \ and the character afterwards is voided from the resulting code.

for (let i = 999; i >= 0; i--) {
    console.log(i);
}

const str1= 'The value of is is:'

for (let i = 1; i <= 10; i++) {
    console.log('The value of i is: ' + i + ' of 10');
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
    for (let i = 0; i <=5; i++) {
        console.log(StarWars[i]);
    }

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
    for (let i = 0; i <=5; i++) {
        console.log("i = " + StarWars[i]);
    }
