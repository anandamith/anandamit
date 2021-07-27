 var database = [
 {
 	username:"amith",
 	password:"lovely"

   },
    {
 	username:"joey",
 	password:"kinder"

   },
    {
 	username:"lijo",
 	password:"onij"

   }
 ];
var newsFeed =[
{
	username:"bingo",
	timeline:"lets rock "

   },
   {
	username:"lava",
	timeline:"joyjoy "

   }
];
 var usernamePrompt= prompt("what is your username?");
 var passwordPrompt= prompt("what is  your password?");

function signIn(user,pass) {
	if (user=== database[0].username 
	&& pass=== database[0].password) {
		console.log(newsFeed);
	} else {
		alert("sorry,wrong username and password");
	}

}