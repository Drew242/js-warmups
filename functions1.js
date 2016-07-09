// Needs to accept a string
// returns boolean value
// parens, square-brackets, & curly-brackets are properly nested and closed

var syntaxValidator = function(functionString) {
  var leftParenCounter = 0;
  var rightParenCounter = 0;
  var leftSquareCounter = 0;
  var rightSquareCounter = 0;
  var leftCurlyCounter = 0;
  var rightCurlyCounter = 0;
  for (i = 0; i < functionString.length; i++) {
    if (functionString[i] == '(') {
      leftParenCounter++;
    } else if (functionString[i] == ')') {
      rightParenCounter++;
    } else if (functionString[i] == '[') {
      leftSquareCounter++;
    } else if (functionString[i] == ']') {
      rightSquareCounter++;
    } else if (functionString[i] == '{') {
      leftCurlyCounter++;
    } else if (functionString[i] == '}') {
      rightCurlyCounter++;
    }
  }
  ((leftParenCounter === rightParenCounter) && (leftSquareCounter === rightSquareCounter) && (leftCurlyCounter === rightCurlyCounter) ? console.log(true) : console.log(false) )
  // console.log('leftParenCounter: ' + leftParenCounter);
  // console.log('rightParenCounter: ' + rightParenCounter);
  // console.log('leftSquareCounter: ' + leftSquareCounter);
  // console.log('rightSquareCounter: ' + rightSquareCounter);
  // console.log('leftCurlyCounter: ' + leftCurlyCounter);
  // console.log('rightCurlyCounter: ' + rightCurlyCounter);
}


var testString1 = "function htmlDoc(title, bodyContent) {return tag('html', [tag('head', [tag('title', [title])]), tag('body', bodyContent)]);}"

syntaxValidator(testString1);
