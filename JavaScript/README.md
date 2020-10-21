## JavaScript Fundamentals

**Readings**  
JavaScript Part 1: The JavaScript Language  
Chapter: *JavaScript Fundamentals*
- Code structure
- Variables
- Data types
- Type conversions
- Operators
- Comparisons
- Conditional operators
- Logical operators
- Loops: `while` and `for`
- Functions
- Function expressions and arrows
- JavaScript specials
  
  
## Arrays
### Creating Arrays
By far the simplest way to create an array is with an array literal, which is simply a comma-separated list of array elements within square brackets. 
Example:  
```javascript
let empty = []; // An array with no elements 
let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
let misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma
```

The values in an array literal need not be constants; they may be arbitrary expressions:
```javascript
let base = 1024;
let table = [base, base+1, base+2, base+3];
```
Array literals can contain object literals or other array literals:
`let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];`

### Reading and Writing Array Elements
You access an element of an array using the `[]` operator. A reference to the array should appear to the left of the brackets. An arbitrary expression that has a non-negative integer value should be inside the brackets. You can use this syntax to both read and write the value of an element of an array. The following are all legal JavaScript statements:
```javascript
let a = ["world"];
let value = a[0];
a[1] = 3.14;
let i = 2;
a[i] = 3;
a[i + 1] = "hello";
a[a[i]] = a[0];
```

### Adding and Deleting Array Elements
One way to add elements to an array is to just assign values to new indexes:
```javascript
let a = []; // Start with an empty array.
a[0] = "zero"; // And add elements to it.
a[1] = "one";
```
You can also use the `push()` method to add one or more values to the end of an array:
```javascript
let a = []; // Start with an empty array
a.push("zero"); // Add a value at the end. a = ["zero"]
a.push("one", "two"); // Add two more values. a = ["zero", "one", "two"]
```
You can use the `unshift()` method to insert a value at the beginning of an array, shifting the existing array elements to higher indexes. The `pop()` method is the opposite of `push()`: it removes the last element of the array and returns it, reducing the length of an array by 1. Similarly, the `shift()` method removes and returns the first element of the array, reducing the length by 1 and shifting all elements down to an index one lower than their current index.  

You can delete array elements with the `delete` operator:
```javascript
let a = [1,2,3];
delete a[2];
2 in a
a.length
```

Finally, `splice()` is the general-purpose method for inserting, deleting, or replacing array elements. It alters the length property and shifts array elements to higher or lower indexes as needed.  

### Iterating Arrays
The easiest way to loop through each of the elements of an array (or any iterable object) is with the `for/of` loop:
```javascript
let letters = [..."Hello world"]; // An array of letters let string = "";
for (let letter of letters) {
    string += letter;
}
string // => "Hello world"; we reassembled the original text
```

### Array Methods



## Objects

**Readings**  
JavaScript Part 1: The JavaScript Language  
Chapter: *Objects: the basics*
- Objects
- Object methods, "this"
- Constructor, operator "new"
  
  
## Data Types

**Readings**  
JavaScript Part 1: The JavaScript Language  
Chapter: *Data types*
- Methods of primitives
- Numbers
- Strings
- Arrays
- Array methods
- Iterables
- Object.keys, values, and entries
- Destructuring assignment
- Date and time
- JSON methods, toJSON
  
  
## Classes

**Readings**  
JavaScript Part 1: The JavaScript Language  
Chapter: *Classes*
- Class basic syntax
- Class inheritance
- Static properties and methods
- Private and protected properties and methods
- Class checking: "instanceof"
  
  
## Advanced Function Topics

**Readings**  
JavaScript Part 1: The JavaScript Language  
Chapter: *Advanced working with functions*
- Rest parameters and the spread operator
- Closure
- Scheduling: `setTimeout` and `setInterval`
- Function binding
- Arrow functions revisited
