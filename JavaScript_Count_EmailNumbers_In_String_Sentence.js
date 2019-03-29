
/*The following JavaScript function demonstrates how to identify email numbers inside a given string sentence*/
/*Written in Vanilla JavaScript and Regular Expressions (Regex) as an identifier*/
/*Written by Vakindu Philliam*/

var n = function findEmailNumbers(words){

//Declare array to store email numbers found in the string

var emailStore=[];

//Function to identify that the character is a email number

 function emailNumber(word){      

   //Define the regex that identifies the email number

   var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

   //Return find
	 	 
	 if(word.value.match(emailRegex)){
   
	 //True for Yes it's a email number
	 
     return true;

   } else {

	 //False for Not a email number
	 
     return false;

     }
 }

//Split the words 

var m = words.split(/\s/);

//Iterate through the words while identifying email numbers

for(var i=0;i<m.length;i++){

//Pass each word through email number identifier

if(emailNumber(m[i])){

//Store the identified email numbers into the email number store

emailStore.push(m[i]);
  
    }
  }
	
//Display phone numbers found

document.write("We found: ");

document.write(emailStore.length+" Email Numbers<p>");

for(var j=0;j<emailStore.length;j++){

document.write(emailStore[j]+"<p>");

  }	
}

//Declare string of words

var sentence="The best UI developers are just one email away: Ahumuza Felix: repvwaks@gmail.com , Atiku Patel: potryqr@yahoo.com , Fred Emma: wqhjsx@hotmail.com";

//Run function upon string

n(sentence);

