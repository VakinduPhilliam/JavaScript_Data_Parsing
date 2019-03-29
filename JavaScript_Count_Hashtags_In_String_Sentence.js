
/*The following JavaScript function demonstrates how to identify hashtag words in a given string sentence*/
/*Written in Vanilla JavaScript and Regular Expressions (Regex) as an identifier*/
/*Written by Vakindu Philliam*/

var n = function findHashtag(words){

//Declare array to store hashtags found in string

var hashtagStore=[];

//Function to identify that the word contains a hashtag

 function hashtag(word){      

   //Define the regex that identifies the hashtag

   var hashtagRegex = "(#\\w+)";

   //Return find
	 	 
	 if(word.value.match(hashtagRegex)){
   
	 //If hashtag, return true
	 
     return true;

   } else {

	 //false for Not hashtag
	 
     return false;

     }
 }

//Split the words 

var m = words.split(/\s/);

//Iterate through the words while identifying Hashtages

for(var i=0;i<m.length;i++){

//Pass each word through hashtag identifier

if(hashtag(m[i])){

//Store the identified hashtags into hashtag store

hashtagStore.push(m[i]);
  
    }
  }
	
//Display Hashtags found

document.write("We found: ");

document.write(hashtagStore.length+" Hashtags<p>");

for(var j=0;j<hashtagStore.length;j++){

document.write(hashtagStore[j]+"<p>");

  }	
}

//Declare string of words

var sentence="Computer #Science is the study of #complex algorithms and their #numerical data #paths.";

//Run function upon string

n(sentence);
