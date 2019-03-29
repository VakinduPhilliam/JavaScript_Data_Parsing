
/*The following JavaScript function demonstrates how to identify numbers inside a given string sentence*/
/*Written in Vanilla JavaScript and Regular Expressions (Regex) as an identifier*/
/*Written by Vakindu Philliam*/

var n = function findNumbers(words){

//Declare array to store numbers found in the string

var numberStore=[];

//Function to identify that the character is a number

 function number(word){      

   //Define the regex that identifies the number

   var numberRegex = /^[0-9]+$/;

   //Return find
	 	 
	 if(word.value.match(numberRegex)){
   
	 //True for Yes it's a number
	 
     return true;

   } else {

	 //False for Not a number
	 
     return false;

     }
 }

//Split the words 

var m = words.split(/\s/);

//Iterate through the words while identifying numbers

for(var i=0;i<m.length;i++){

//Pass each word through number identifier

if(number(m[i])){

//Store the identified numbers into the number store

numberStore.push(m[i]);
  
    }
  }
	
//Display numbers found

document.write("We found: ");

document.write(numberStore.length+" Numbers<p>");

for(var j=0;j<numberStore.length;j++){

document.write(numberStore[j]+"<p>");

  }	
}

//Declare string of words

var sentence="Computer Science 101 is the study of complex 01 algorithms and their 2 binary numerical data paths.";

//Run function upon string

n(sentence);
