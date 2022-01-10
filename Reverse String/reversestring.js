var string = prompt("Enter the string to reverse ");

function reverseString( str ){
    let newString = "";
    var i = str.length - 1;
    var x = 0;
    for ( i ; i>=0 ; i = i - 1){
        newString = newString + str[i];}
    console.log(newString);
        return newString
}

document.getElementById("result").innerHTML = reverseString( string );