//condition ? expr1: expr2;

function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(true)?"you may enter" :"Access Denied"

var automatedAnswer =
"your account # is "+(isUserValid(false)?"1234":"not avilable")