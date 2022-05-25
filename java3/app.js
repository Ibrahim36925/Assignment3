// Chapter 6-9

// Question 1 



var a = 10;
document.write("Result:");
document.write("<br>");
document.write("Value of a is: " + a);
document.write("<br>");
document.write("------------------------------------------")
document.write("<br><br>");


++a;
document.write("The value of ++a is : " + a);
document.write("<br>");
document.write("Now the value of a : " + a);
document.write("<br>");
document.write("<br>");


document.write("The value of a++ is : " + a);
document.write("<br>");
a++;
document.write("Now the value of a : " + a);
document.write("<br>");
document.write("<br>");




--a;
document.write("The value of --a is : " + a);
document.write("<br>");
document.write("Now the value of a : " + a);
document.write("<br>");
document.write("<br>");


document.write("The value of a-- is : " + a);
document.write("<br>");
a--;
document.write("Now the value of a : " + a);





// Question 2 


var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//   1  -  0  +  1  +  1
//   1 + 1 + 1
//   3
document.write("<br>")
document.write("<br>")
document.write("<b>Explaination</b>");
document.write("<br>");
document.write("------------------------------------------");
document.write("<br>");
document.write("--a is the pre decrement of a, current value of a is 2 after decrement --a =  1  <br>");
document.write("--b is the pre decrement of b, current value of b is 0 after decrement --b =  0  <br>");
document.write("++b is the pre increment of b, current value of b is 1 after increment ++b =  1  <br>");
document.write("++b is the post decrement of b, it will decrease the value after call the varibale current value of b is 1 after decrement  b-- =  1");


document.write("<br>");
document.write("Current value of a is : 1");
document.write("<br>");
document.write("Current value of b is : 1");


document.write("<br>");
document.write("Result : " + result);






// Question 3



var name = prompt("Enter your name : ");
document.write("Welcome " + name);





// Question 4
document.write("<h2>Table of 5 </h2>")
document.write("5x1= " + 5 * 1 + "<br>" + "5x2= " + 5 * 2 + "<br>" + "5x3= " + 5 * 3 + "<br>" + "5x4= " + 5 * 4 + "<br>" + "5x5= " + 5 * 5 + "<br>" + "5x6= " + 5 * 6 + "<br>" + "5x7= " + 5 * 7 + "<br>" + "5x8= " + 5 * 8 + "<br>" + "5x9= " + 5 * 9 + "<br>" + "5x10= " + 5 * 10 + "<br>")




// Question 5




var nameSub1 = prompt("Enter a your subject name : ");
var subMarks1 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub2 = prompt("Enter a your subject name : ");
var subMarks2 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub3 = prompt("Enter a your subject name : ");
var subMarks3 = parseInt(prompt("Enter Obtained marks of this subject"));


var eachmarks = 100;
var eachpercentage1 = subMarks1 / eachmarks * 100;
var eachpercentage2 = subMarks2 / eachmarks * 100;
var eachpercentage3 = subMarks3 / eachmarks * 100;

var totalMarksStd = 300;
var obtainedMarks = subMarks1 + subMarks2 + subMarks3;
var Percentage = obtainedMarks / totalMarksStd * 100;
document.write(`<table>
    <tr>  
        <th>Subjects</th>  
        <th>Total Marks</th>  
        <th>Obtained Marks</th> 
        <th>Percentage</th>  
    </tr>  
    <tr>
        <td>${nameSub1}</td>
        <td>${eachmarks}</td>
        <td>${subMarks1}</td>
        <td>${eachpercentage1}%</td>
    </tr>
    <tr>
    <td>${nameSub2}</td>
    <td>${eachmarks}</td>
    <td>${subMarks2}</td>
    <td>${eachpercentage2}%</td>
</tr>
<tr>
<td>${nameSub3}</td>
<td>${eachmarks}</td>
<td>${subMarks3}</td>
<td>${eachpercentage3}%</td>
</tr>  
<tr>
<td></td>
<td>${totalMarksStd}</td>
<td>${obtainedMarks}</td>
<td>${Percentage}%</td>
</tr>  
    </table>`)

