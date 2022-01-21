'use strict';


var name = prompt('Please enter your name');
console.log('The user name is: ' + name);


var gender = prompt('Please enter your gender', "Male/Female");
console.log('The user gender is: ' + gender);


var age = prompt('Please enter your age');
if (age <= 0) {
    alert('Oops! Your age is less or equal to zero which is impossible. Fix it please.');
} else {
    console.log('The user age is: ' + age)
}


var conf = confirm('Do you want to skip the welcoming message?');
if (conf == true) {
    console.log('Confirmation to skip the welcoming message is: '+ conf);
} else if (conf == false  &&  gender == 'Male' || gender == 'male') {
    alert('Welcome to the page Mr '+ name + '!');
} else if (conf == false  &&  gender == 'Female' || gender == 'female' ) {
    alert('Welcome to the page Ms '+ name + '!');
} else {
    alert('Welcome to the page '+name + '!');
}







