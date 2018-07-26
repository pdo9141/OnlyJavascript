00) Avoid global variables like the plague
01) Strive for perfection
02) Prefer forms that are error resistant
03) Utilize http://www.JSLint.com/
04) Always put curly braces on the right (object undefined possibility)
05) Recommended to use // instead of /**/
06) Use the debugger keyword and F12 tool as automatic breakpoint
07) 'c' + 'a' + 't' = 'cat'
08) strings are immutable
09) Javascript is function scoped not block scoped
10) If you declare a variable in a function without the var keyword, it is considered global
11) The falsy values are: false, null, undefined, '', 0, NaN
	All other values are truthy, including true, the string 'false', and all objects
12) To access object fields, you can use the dot notation or ["propertyName"]
13) Use the || operator to fill in default values, e.g., var middle = stooge["middle-name"] || "";
14) Objects are passed around by reference, they are never copied
15) Utilize prototype for memory and performance reasons, a property added to a prototype will be immediately visible to all objects based on that prototype
16) Use the typeof and hasOwnProperty methods for reflection, hasOwnProperty does not look at the prototype chain
17) Use the delete keyword to remove a property from an object, it will not touch any of the objects in the prototype linkage
18) You can create a single global variable that can be a container for your application, 
	e.g., var myApp = {};
19) No reason to use substring (doesn’t handle adjustment for negative parameters), use slice instead

Awful Parts
00) Global variables, (e.g., var foo = value; foo = value; window.foo = value;)
01) JS is function scope not block scoped
02) Semicolon insertion, to avoid issues always put { at the end of line not beginning
	return {              return
	   status: true		  {
	};					      status: true
						  };
03) typeof: be careful typeof null will return 'object' instead of 'null', use my_value === null instead
	//A bigger problem is testing a value for objectness. typeof cannot distinguish between
	//null and objects, but you can because null is falsy and all objects are truthy:
	if (my_value && typeof my_value === 'object') {
		// my_value is an object or an array!
	}
04) parseInt: parseInt("16") and parseInt("16 tons") will return the same result
	//If the first character of the string is 0, then the string 
	//is evaluated in base 8 instead of base 10
	//In base 8, 8 and 9 are not digits, so parseInt("08") and parseInt("09") produce
	//0 as their result. This error causes problems in programs that parse dates and
	//times. Fortunately, parseInt can take a radix parameter, so that parseInt("08",10)
	//produces 8. I recommend that you always provide the radix parameter.
05) Floating Point: Binary floating-point numbers are inept at handling decimal fractions, so 0.1 + 0.2 is not equal to 0.3 
	//This is the most frequently reported bug in JavaScript. Fortunately, integer arithmetic in floating point is exact, so decimal representation
	//errors can be avoided by scaling. For example, dollar values can be converted to whole cents values by multiplying
	//them by 100. The cents then can be accurately added. The sum can be divided by 100 to convert back into dollars. People have a reasonable expectation when they
	//count money that the results will be exact.	
06) NaN: NaN === NaN // false, NaN !== NaN // true. 
	isNaN(NaN) // true
	isNaN(0) // false
	isNaN('oops') // true
	isNaN('0') // false
	The isFinite function is the best way of determining whether a value can be used as
	a number because it rejects NaN and Infinity. Unfortunately, isFinite will attempt to
	convert its operand to a number, so it is not a good test if a value is not actually a
	number. You may want to define your own isNumber function:
	var isNumber = function isNumber(value) { return typeof value === 'number' &&
		isFinite(value);
	}
07) Arrays: The typeof operator does not distinguish between arrays and objects. To determine
	that a value is an array, you also need to consult its constructor property:
	if (my_value && typeof my_value === 'object' && my_value.constructor === Array) {
		// my_value is an array!
	}	
	That test will give a false negative if an array was created in a different frame or window.
	This test is more reliable when the value might have been created in another
	frame:
	if (my_value && typeof my_value === 'object' && typeof my_value.length === 'number' && !(my_value.propertyIsEnumerable('length')) {
		// my_value is truly an array!
	}
08) Don't use == and !=, use === and !== instead
09) Avoid using the with statement (shorthand when accessing properties of an object), its results are sometimes unpredictable
10) Avoid using eval (slower, frustrates ESLint, compromises security like SQL injection), e.g., eval("myValue = myObject." + myKey + ";"); instead of myvalue = myObject[myKey];
11) Avoid using switch fallthrough, add comments if intentional
12) Add braces even if one liner, avoid ++,-- for readability
13) Be more explicit and use function expression over function statement (you get hoisting)
14) Avoid typed wrappers, new Boolean, new Number, new String, new Object, new Array