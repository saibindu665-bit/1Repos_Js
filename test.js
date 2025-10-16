//Array Basics
// //#Create an array of 5 colors and print the second and last color. 
let colors = ["red", "green", "blue", "yellow", "purple"];
console.log(colors[1]); 
console.log(colors[colors.length - 1])
// Create an array of numbers and replace the first element with 100. 
let numbers = [10, 20, 30, 40];
numbers[0] = 100;
console.log(numbers); 
//Create an array with mixed data types (string, number, boolean).
//  Print the type of each element using a loop.
let mixed = ["hello", 25, true];
mixed.forEach(item => console.log(typeof item));
 //Create a nested array and print the inner array’s second element. 
let nested = [[1, 2, 3], ["a", "b", "c"]];
console.log(nested[1][1]); 
//Create an array using the Array constructor and display its length.
let arr = new Array(5);
console.log(arr.length);
//2. push(), pop(), shift(), unshift() 
//6. Create an array of fruits and add one fruit at the end using push(). 
let fruits = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits); // ['apple','banana','mango','orange']
//7. Remove the last element from the array using pop() and display the updated array
fruits.pop();
console.log(fruits); 
//8. Add two new fruits at the beginning using unshift().
fruits.unshift("kiwi", "grape");
console.log(fruits); // ['kiwi','grape','apple','banana','mango']
//9. Remove the first element using shift() and print the new array
fruits.shift();
console.log(fruits); 
//10. Use a combination of push() and pop() to keep only 3 elements in your array.
fruits.push("pear");
fruits.pop();
fruits.pop();
while (fruits.length > 3) fruits.pop();
console.log(fruits); 
//3. slice() and splice()
// 11. Create an array [10, 20, 30, 40, 50] and use slice() to extract [20, 30]. 
let nums = [10, 20, 30, 40, 50];
let sliced = nums.slice(1, 3);
console.log(sliced); // [20, 30]
// 12. Using the same array, use splice() to replace 30 with 35. 
nums.splice(2, 1, 35);
console.log(nums); // [10,20,35,40,50]
// 13. Insert 25 before 30 using splice(). 
nums.splice(2, 0, 25);
console.log(nums); // [10,20,25,35,40,50]
// 14. Remove the last two elements using splice(). 
nums.splice(-2, 2);
console.log(nums); // [10,20,25,35]
// 15. Use slice() to copy the first three elements into a new array. 
let copyArr = nums.slice(0, 3);
console.log(copyArr); // [10,20,25]
//4. concat(), join(), toString()
//16. Create two arrays [1,2,3] and [4,5,6] and merge them using concat(). 
let a1 = [1,2,3];
let a2 = [4,5,6];
let merged = a1.concat(a2);
console.log(merged); // [1,2,3,4,5,6]
//17. Convert an array of names into a string separated by commas using join().
let names = ["John", "Jane", "Smith"];
console.log(names.join(",")); 
 // 18. Use toString() on an array and display the output.
 console.log(names.toString());  
 //19. Merge three arrays using concat() and find the length of the new array.
let x = [1,2], y = [3,4], z = [5,6];
let combined = x.concat(y, z);
console.log(combined.length);  
//20. Create an array of city names and join them using ' - ' as a separator. 
let cities = ["Delhi", "Mumbai", "Pune"];
console.log(cities.join(" - ")); 
 //5. Search Methods (indexOf, lastIndexOf, includes)
//21. Create an array ['apple', 'banana', 'orange', 'banana', 'grape'] and find the first index of 'banana'. 
let fruitList = ['apple', 'banana', 'orange', 'banana', 'grape'];
console.log(fruitList.indexOf('banana'));
//22. Find the last index of 'banana' using lastIndexOf(). 
console.log(fruitList.lastIndexOf('banana')); // 3

//23. Check if 'mango' exists in the array using includes().
console.log(fruitList.includes('mango'));
//24. Write code to check if a specific number exists in an array, if not, push it. 
let nums2 = [10, 20, 30];
if (!nums2.includes(40)) nums2.push(40);
console.log(nums2); // [10,20,30,40]
//25. Use includes() to verify if 'kiwi' is present in your fruit array and print a message accordingly. 
if (fruitList.includes('kiwi')) {
    console.log("Kiwi is present");
} else {
    console.log("Kiwi not found");
}

//6. find() and findIndex() 
//26. Create an array [5, 12, 8, 130, 44] and find the first number greater than 10.
let arr1 = [5, 12, 8, 130, 44];
console.log(arr1.find(num => num > 10)); 
//27. Use findIndex() to locate the position of the first element greater than 50.
console.log(arr1.findIndex(num => num > 50));
 //28. Find the first even number in an array using find(). 
 let arr2 = [1, 3, 4, 7, 8];
console.log(arr2.find(num => num % 2 === 0));
 //29. Find the index of the first odd number in an array using findIndex().
 console.log(arr2.findIndex(num => num % 2 !== 0));  
  //30. Use find() to search for a string longer than 5 characters in an array of words.
let words = ["hi", "hello", "elephant", "yes"];
console.log(words.find(w => w.length > 5)); 
  // 7. sort(), reverse(), copyWithin(), flat() 
 //31. Sort an array [5,3,8,1,2] in ascending order.
 let arr3 = [5,3,8,1,2];
arr3.sort((a,b) => a - b);
console.log(arr3);  
 //32. Reverse the sorted array and print it. 
 arr3.reverse();
console.log(arr3); 
//33. Use copyWithin() to copy first two elements to the end of an array [10,20,30,40,50].
 let arr4 = [10,20,30,40,50];
arr4.copyWithin(3,0,2);
console.log(arr4); 
//34. Flatten a nested array ['a','b',['c','d'],['e',['f']]] using flat(). 
let arr5 = ['a','b',['c','d'],['e',['f']]];
console.log(arr5.flat()); 

//35. Use flat() with depth 2 to flatten ['x',['y',['z',['w']]]]]. 
let arr6 = ['x',['y',['z',['w']]]];
console.log(arr6.flat(2)); 

//8. length, Destructuring & Misc
 //36. Create an array of 10 numbers and print its length.
 let arr7 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr7.length); 
 //37. Remove the last element using pop() and print the new length.
 arr7.pop();
console.log(arr7.length); 
 //38. Use array destructuring to extract first three elements into variables.
 let [first, second, third] = arr7;
console.log(first, second, third); 
 //39. Create a constant array and modify one element (to show arrays are mutable).
 const constArr = [10,20,30];
constArr[1] = 25; // allowed (mutable)
console.log(constArr); 
 
 //40. Combine multiple array methods (push, splice, sort, reverse) to manipulate data dynamically.
 let data = [3,1,4];
data.push(2);
data.splice(1,1,5);
data.sort((a,b)=>a-b);
data.reverse();
console.log(data);

