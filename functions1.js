// Needs to accept a string
// returns boolean value
// parens, square-brackets, & curly-brackets are properly nested and closed

// var syntaxValidator = function(functionString) {
//   var leftParenCounter = 0;
//   var rightParenCounter = 0;
//   var leftSquareCounter = 0;
//   var rightSquareCounter = 0;
//   var leftCurlyCounter = 0;
//   var rightCurlyCounter = 0;
//   for (i = 0; i < functionString.length; i++) {
//     if (functionString[i] == '(') {
//       leftParenCounter++;
//     } else if (functionString[i] == ')') {
//       rightParenCounter++;
//     } else if (functionString[i] == '[') {
//       leftSquareCounter++;
//     } else if (functionString[i] == ']') {
//       rightSquareCounter++;
//     } else if (functionString[i] == '{') {
//       leftCurlyCounter++;
//     } else if (functionString[i] == '}') {
//       rightCurlyCounter++;
//     }
//   }
//   ((leftParenCounter === rightParenCounter) && (leftSquareCounter === rightSquareCounter) && (leftCurlyCounter === rightCurlyCounter) ? console.log(true) : console.log(false) )
// }

var syntaxValidator = function(functionString) {
  var openStack = [];
  var closeStack = [];
  for (i = 0; i < functionString.length; i++) {
    if (functionString[i] == '(' || functionString[i] == '[' || functionString[i] == '{') {
      openStack.push(functionString[i]);
    } else if (functionString[i] == ')') {
      if (openStack.pop() === '(') {
        continue
      } else {
        console.log(false);
        return false;
      }
    } else if (functionString[i] == ']') {
      if (openStack.pop() === '[') {
        continue
      } else {
        console.log(false);
        return false;
      }
    } else if (functionString[i] == '}') {
      if (openStack.pop() === '{') {
        continue
      } else {
        console.log(false);
        return false;
      }
    }
  }
  console.log(true);
  return true;
}

var testString1 = "function htmlDoc(title, bodyContent) {return tag('html', [tag('head', [tag('title', [title])]), tag('body', bodyContent)]);}"
var testString2 = "function htmlDoc(title, bodyContent) {return tag('html', [tag('head', [tag('title', [title])), tag('body', bodyContent)]);}"
var testString3 = "function htmlDoc(title, bodyContent) {return tag('html', [tag 'head', [tag('title', [title])]), tag('body', bodyContent)]);}"
var testString4 = "function htmlDoc(title, bodyContent) {return tag('html', [tag('head', [tag('title', [title]])), tag('body', bodyContent)]);}"
syntaxValidator(testString1);
syntaxValidator(testString2);
syntaxValidator(testString3);
syntaxValidator(testString4);
