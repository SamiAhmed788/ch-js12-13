// chapter 12-13
//Question No 1
var numbers= prompt("Put the letter whether it is an uppercase or lowercase");
if (numbers>="A"&& numbers<="Z"){
    alert('This is an uppercase letter')
}else if (numbers>="a"&&numbers<="z") {
    alert("This is a lowercase letter")
}else{
    alert("This is a number which is neither an uppercase nor a lowercase")
};
// Question No 2
var number1=parseInt(prompt("Write first number to check out if it is a larger"));
var number2=parseInt(prompt("Write second number to check out if it is a larger"));
if (number1>number2) {
    alert(number1+" is larger");
} else if (number2>number1){
   alert(number2+" is larger")
} else if(number1===number2){
    alert("Two integers are equal")
} else{
    alert("Please put the correct number")
};
// Question No 3
var number= prompt('Write a number to find whether it is positive, negative or zero');
if (number>0){
    alert("This is + positive ")
}else if (-number>0) {
    alert("This is a  -negative number")
}else {
    alert("This is 0")
};
// Question No 4
var vowel=prompt("Enter alphabetical letters whether it is vowel? ");
    if (vowel.toLowerCase()=="a" ||vowel.toLowerCase()=="e" ||vowel.toLowerCase()=="i" ||vowel.toLowerCase()=="o" || vowel.toLowerCase()=="u"){
        alert(true)
    }else {
        alert(false);
    }
console.log(vowel);

// Question No 5
var correctPassword='123456';
correctPassword=prompt("Enter your correct password");
if (correctPassword===""){
    alert("Please enter your  correct password")
}
else if(correctPassword==="123456"){
   alert("Correct!The password you entered matches the original password")
}else {
    alert("Incorrect password")
};
// Question No 6
var greeting;
var hour=13;
    hour= prompt("Enter the exact hour in clock formatting");
if (hour<18){
    alert(greeting="Good day");
}else {
    alert(greeting="Good evening");
};
// Question No 7
var time= prompt ("Write time in 24 hours clock format");
if (time>='0000'&& time<'1200'){
    alert(time+"am \n'Good morning!'");
}else if (time>='1200' && time<'1700') {
    alert(time+"pm \n'Good afternoon'");
}else if(time>='1700' && time<'2100') {
    alert(time+"pm \n'Good evening'");
}else {
    alert(time+"pm \n 'Good night'");
}

