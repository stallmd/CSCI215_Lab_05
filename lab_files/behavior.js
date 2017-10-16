
console.clear();

// ---------------------------------------------
// Task 1
// ---------------------------------------------
var divNode = document.getElementById("fiddle");

// ---------------------------------------------
// Task 2
// ---------------------------------------------
var pNode = document.createElement("P");
var pTextNode = document.createTextNode('CSCI: Lab 5 Todo');
pNode.appendChild(pTextNode);
divNode.appendChild(pNode);

// ---------------------------------------------
// Task 3
// ---------------------------------------------
var hrNode= document.createElement('HR');
divNode.appendChild(hrNode);


// ---------------------------------------------
// Task 4
// ---------------------------------------------
var olNode = document.createElement('OL');
var liNode1 = document.createElement('LI');
var liNode2 = document.createElement('LI');

var liTextNode1 = document.createTextNode('Read Assignment');
var liTextNode2 = document.createTextNode('Code Assignment');

liNode1.appendChild(liTextNode1);
liNode2.appendChild(liTextNode2);

olNode.appendChild(liNode1);
olNode.appendChild(liNode2);

divNode.appendChild(olNode);

// ---------------------------------------------
// Task 5
// ---------------------------------------------

var imgNode =document.createElement('IMG');
var srcAttr =document.createAttribute('SRC');
srcAttr.value("http://munsellb.people.cofc.edu/img/prettypicture.jpg");
imgNode.setAttribute("srcAttr");
divNode.appendChild(imgNode);


