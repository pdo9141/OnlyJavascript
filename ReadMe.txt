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
20) 	

CHAPTER 9 Style
