// Javascript Homework
// Due Monday COB
// Put all homework in:
// github classroom created for you
// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------

 
 /*1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence.*/
function fib(n)
{
	if(n==1||n==0)
	{
		return 1;
	}
	return fib(n-1)+fib(n-2);
}
//console.log(fib(5));

/*2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.*/
function bubbleSort(numArray)
{
	var swapped;
	do{
		swapped=false;
		for(let i = 0; i<numArray.length-1; i++)
		{
			if(numArray[i] > numArray[i+1])
			{
				let temp = numArray[i];
				numArray[i] =numArray[i+1];
				numArray[i+1]=temp;
				swapped=true;
			}
		}
	}while(swapped);
	return numArray;
}
//console.log(bubbleSort([400,23,43,54,7,9,0]));
/*3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.*/
function reverseStr(someStr)
{
	var tempStr = "";
	for(let i = someStr.length-1; i>=0; i--)
	{
		tempStr+=someStr[i];
	}
	return tempStr;
}
//console.log(reverseStr("Dog"));

/*4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.*/
function factorial(someNum)
{
	if(someNum>0)
		return someNum*factorial(someNum-1);
	return 1;
}
//console.log(factorial(6));

/*5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.*/
function substring(someStr, length, offset)
{
	var temp = "";
	if(offset>someStr.length || offset<0)
	{
		alert("Index out of bounds of input string.");
		return;
	}
	if(length+offset > someStr.length)
	{
		alert("String longer than input string");
		return;
	}
	for(let i = offset; i< length+offset; i++)
	{
		temp += someStr[i];
	}
	return temp;		
}
//console.log(substring("HelloWorld",5,5))
//console.log(substring("Hi",5,20));

/*6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.*/
function isEven(someNum)
{
	var even = Math.floor(someNum/2);
	if(someNum==even*2)
		return true;
	return false;
}
//console.log(isEven(5));
//console.log(isEven(6));

/*7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false*/
function isPalindrome(someStr)
{
	if(reverseStr(someStr)==someStr)
		return true;
	return false;
}
//console.log(isPalindrome("karan"));
//console.log(isPalindrome("naran"));

/*8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  **/
function printShape(shape,height,character)
{
	if(shape=="Square")
	{
		for(let i =0; i<height; i++)
		{
			let temp = "";
			for(let j=0; j<height; j++)
				temp+=character;
			console.log(temp);
		}
	}
	if(shape=="Triangle")
	{
		for(let i =0; i<height; i++)
		{
			let temp = "";
			for(let j=0; j<=i; j++)
				temp+=character;
			console.log(temp);
		}
	}
	if(shape=="Diamond")
	{
		let half = Math.floor(height/2);
		for(let i =0; i<height; i++)
		{
			let temp = "";
			for(let j=0; j<height; j++)
			{
				if(
				   i==half||
				   j==half||
				   ((i<half)&&(j<half)&&(i+j>=half))||
				   ((i<half)&&(j>half)&&(j-i<=half))||
				   ((i>half)&&(j<half)&&(i-j<=half))||
				   ((i>half)&&(j>half)&&((height-j-1)+(height-i-1)>=half))
				   )
						temp+=""+character;
				temp+=' ';
			}
			console.log(temp);
		}
	}
}
//printShape("Square",3,'#');
//printShape("Triangle",3,'*');
//printShape("Diamond",5,'4');
//printShape("Diamond",7,'4');
//printShape("Diamond",6,'%');
/*9. Object literal
Define function traverseObject(someObj)
Print every property and it's value.
*/
function traverseObject(someObj)
{
	for(thing in someObj)
	{
		console.log(thing+": "+someObj[thing]);
	}
}
//traverseObject({"Name":"Richard","Age":15});
/*10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.*/
function deleteElement(someArr)
{
	console.log(someArr.length);
	delete someArr[2];
	console.log(someArr.length);
}
//var list = [1,2,3,4,5];
//console.log(list);
//deleteElement(list);
//console.log(list);


/*11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.*/
function spliceElement(someArr)
{
	console.log(someArr.length);
	someArr.splice(3,1);
	console.log(someArr.length);
}
//var listTwo = [1,2,3,4,5];
//console.log(listTwo);
//spliceElement(listTwo);
//console.log(listTwo);



/*12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
	var john = new Person("John", 30);*/
function Person(name, age) {
	this.name=name;
	this.age=age;
}
//var john = new Person("John",30);
//console.log(john);



/*13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
	var john = getPerson("John", 30);
 */
function getPerson(name, age) {
	return {"name":name, "age":age};
}
//var john = getPerson("John",30);
//console.log(john);
 
 
 
// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

function getUSA(){
    let text = "USA";
    let allTag = document.getElementsByTagName("*");
    for(let i=0; i<allTag.length;i++){
		let find = allTag[i].textContent;
		
        if(find===text){
			console.log(allTag[i].innerHTML);

		}
	}

    
}
getUSA();


// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales(){
    let table=document.getElementsByTagName("table")[0];
    for(let i=0;i<table.rows.length;i++){
        let cells = table.rows[i].cells;
        if(cells[1].textContent==="Sales"){
            console.log(cells[0].textContent);
        }
    }
}
getPeopleInSales();
  
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren(){
	let findAnchor = document.getElementsByTagName('a');

	for(let i =0; i<findAnchor.length;i++){
		let findSpan=findAnchor[i].getElementsByTagName('span');
		for(let j=0;j<findSpan.length;j++){
			
			console.log(`Contents from Span: ${findSpan[j].textContent}`);
			
		}
	}
	
}
getAnchorChildren();


// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies(){


	let selectSkill = document.getElementsByName("skills")[0];
	let selected = selectSkill.options[selectSkill.selectedIndex].value;
	let selectedContent = selectSkill.options[selectSkill.selectedIndex].textContent;
	
	if(selected){
		console.log(`value: ${selected} with text content: ${selectedContent}`);
	}
}
getHobbies();


// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute(){
    let elements = document.querySelectorAll('[data-customAttr]');
    for (let i = 0; i <elements.length;i++){
        console.log(elements[i].dataset.customattr);
   }

}
getCustomAttribute();


// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element



let sumChange = document.getElementsByClassName("nums")[0];
sumChange.addEventListener("change",sumEvent);

function sumEvent(){
    let a,b,c = 0;
    a=Number((document.getElementById("num1").value));
	b=Number((document.getElementById("num2").value));
	c=a+b;
	document.getElementById("sum").innerHTML =c;
	let text = "Cannot add"
	if(isNaN(c)){
		document.getElementById("sum").innerHTML=text;
	}
}
//sumEvent();



// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

let actionSkill = document.getElementsByName("skills")[0];
actionSkill.addEventListener("change", function(){
	alert("Are you sure "+this.value+ " is one of your skills? ");
});





// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

let colors = document.getElementsByName("colors");
let body = document.getElementsByTagName("body");
let oldColor;
for(i=0;i<colors.length;i++){
	oldColor=colors[i].value;
}
let colorAction = document.getElementsByName("colors")[0];
colorAction.addEventListener("change",favoriteColor);

function favoriteColor(){
	for(i=0;i<colors.length;i++){
		alert("So you like "+ colors[i].value + " more than "+ oldColor +" now?");
		oldColor=colors[i].value;
		body[0].style.backgroundColor=oldColor;
	}
}


// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

function showHide(){
	let empName = document.getElementsByClassName('empName');

	for (let i=0; i<empName.length;i++){
		empName[i].addEventListener('mouseover',function(){
			//console.log("showhide function");
			// if(empName[i].style.visibility=="hidden"){
			// 	console.log('change to visible');
			// 	empName[i].style.visibility="visible";
			// }
			if(empName[i].style.visibility!=="hidden"){
				console.log('change to hidden');
				empName[i].style.visibility = "hidden";
			}
				
			

		});
	}


}
showHide();



// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.	
let s = setInterval(getTime,200);
function getTime(){
	let showTime = document.getElementById("currentTime");
	let now = new Date();
	hours = now.getHours();
	minutes = now.getMinutes();
	seconds = now.getSeconds();
	if(minutes <10){
		minutes ="0" +minutes;
	}
	else if(seconds<10){
		seconds = "0"+seconds;
	}
		showTime.innerHTML = hours+":"+minutes+":"+seconds;
}







// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

function changeColor(){
	document.getElementById("helloWorld").style.color = randomColor();
}
function randomColor(){
	return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node,func){
	if(node){
		func(node);
		node.childNodes.forEach(ea=>{
			walkTheDOM(ea,func);
		})
	}

}



