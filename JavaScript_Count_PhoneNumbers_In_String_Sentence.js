
/*The following JavaScript function demonstrates how to identify phone numbers inside a given string sentence*/
/*Written in Vanilla JavaScript and Regular Expressions (Regex) as an identifier*/
/*Written by Vakindu Philliam*/

var n = function findPhoneNumbers(words){

//Declare array to store phone numbers found in the string

var numberStore=[];

//Function to identify that the character is a phonenumber

 function phoneNumber(word){      

   //Define the regex that identifies the phone number

   var phoneRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

   //Return find
	 	 
	 if(word.value.match(phoneRegex)){
   
	 //True for Yes it's a phone number
	 
     return true;

   } else {

	 //False for Not a phone number
	 
     return false;

     }
 }

//Split the words 

var m = words.split(/\s/);

//Iterate through the words while identifying phone numbers

for(var i=0;i<m.length;i++){

//Pass each word through phone number identifier

if(phoneNumber(m[i])){

//Store the identified phone numbers into the phone number store

numberStore.push(m[i]);
  
    }
  }
	
//Display phone numbers found

document.write("We found: ");

document.write(numberStore.length+" Phone Numbers<p>");

for(var j=0;j<numberStore.length;j++){

document.write(numberStore[j]+"<p>");

  }	
}

//Declare string of words

var sentence="The best software developers are just a dial away: Ahumuza Felix: 256975231345, Atiku Patel: 254816478131, Fred Emma: 256641397543";

//Run function upon string

n(sentence);
