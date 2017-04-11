/* Shehzad Osama 
Roll # 6561
Batch 4.1 (Bright Section)   */


// Question # 1
// for(var i=0; i <5;i++)
// {
//      document.write("Hello World");
// }

// Question # 2
// for(var i=1; i <=10;i++)
// {
//      document.writeln(i);
// }

// Question # 3
// var no = +prompt("Enter a num to print its multiplication table");
// var len = +prompt("Enter length of multiplication table");
// document.write("multiplication table of "+no);
// document.write("<br />Length "+len);

// for(var i=1;i<=len;i++){
//     document.write("<br /> " +no+ " *" + i + " = "+ (no*i));
// }


// Question # 4
// var a = ["Nokia","Samsung","Apple","Sony","Huawei"];
// for(var i=0;i<a.length;i++)     document.write("<br />"+a[i]);

// Question # 5
// var fruits = ["Apple","Banana","Mango","Orange","Strawberry"];
//  for(var i=0;i<fruits.length;i++)     document.write("<br />"+fruits[i]);

// for(var i=0;i<fruits.length;i++)     document.write("<br /> Element at Index "+i+ " is " +fruits[i]);

// Question # 6
// var noOfItems = +prompt("Enter no of Items");
// var arr = [];
// for(var i=0;i<noOfItems;i++)  
// {
//  arr[i]= prompt("Enter value at index "+i);
// }
// document.write("<br />Num of items: "+noOfItems);
// document.write("<br />Items : <br />");
// for(var i=0;i<arr.length;i++)   
// { document.write("<br/>"+arr[i]);
// }

// Question # 7
// document.write("Counting <br /><br />");
// for(var i=0;i<=15;i++)  
// {
//  document.write(i+", ");
// }
// document.write("<br /><br />Reverse Counting <br /><br />");
// for(var i=10;i>=1;i--)  
// {
//  document.write(i+", ");
// }
// document.write("<br /><br />Even<br /><br />");
// for(var i=0;i<=20;i++)  
// {
//     if(i%2===0)  document.write(i+", ");

// }
// document.write("<br /><br />Odd<br /><br />");
// for(var i=0;i<=20;i++)  
// {
//     if(i%2!==0)  document.write(i+", ");

// }
// document.write("<br /><br />Series<br /><br />");
// for(var i=2;i<=20;i+=2)  
// {
//      document.write(i+"k, ");

// }


//  Question # 8
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var flag =false;
// var j;
// var input = prompt("Welcome to ABC bakery. What do you want to sir/ma'am ?");
// for(var i=0;i<a.length;i++)  
// {
//      if(input===a[i]) 
//      {
//          flag=true;
//          j=i;
//          break;

//      }

// }
// if(flag===true) document.write(input+" is <b>available</b> at index "+j+" in our bakery");
// else document.write("We are sorry. "+input+" is not available in our bakery.");

//  Question # 9
// var A = [24, 53, 78, 91, 12];
// var max = A[0];
// for(var i=0;i<A.length;i++)
// {
//   if(max < A[i]) max =A[i];
// }
// document.write("<br />Array Items: ");

// for(var i=0;i<A.length;i++)  
// {
//      document.write(A[i]+", ");

// }
// document.write("The Largest number "+max);

//  Question # 10
// var A = [24, 53, 78, 91, 12];
// var min = A[0];
// for(var i=0;i<A.length;i++)
// {
//   if(min >A[i]) min =A[i];
// }
// document.write("<br />Array Items: ");

// for(var i=0;i<A.length;i++)  
// {
//      document.write(A[i]+", ");

// }
// document.write("The Smallest number "+min);

//  Question # 11
// var A = [24, 53, 78, 91, 12];
// var max = A[0];
// var min= A[0];
// for(var i=0;i<A.length;i++)
// {
//   if(min >A[i]) min =A[i];
// }
// for(var i=0;i<A.length;i++)
// {
//   if(max < A[i]) max =A[i];
// }
// document.write("<br />Array Items: ");

// for(var i=0;i<A.length;i++)  
// {
//      document.write(A[i]+", ");

// }
// document.write("<br />The Smallest number is "+min);
// document.write("<br />The Largest number is "+max);

//  Question # 12
// for(var i=5;i<=100;i+=5)
// {
//      document.write(i+", ");
// }

//  Question # 13
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
//  document.write("<table class='t'> <tr><td>Students</td><td>Scores</td></tr>");
//  for(var i=0;i<students.length;i++)
// {
//      document.write("<tr><td>"+students[i]+"</td><td>"+scores[i]+"</td></tr>");
// }
// document.write("</table>");

//  Question # 14
// var scores = [12, 45, 3, 22, 34, 50];
// var input = +prompt("Enter any value");
// for(var i=0; i<scores.length;i++)
// {
//     document.write(scores[i]+" , ");
//     if(input === scores[i])
//     {
     
//         break;
//     }
// }


//  Question # 15
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ];
// for(var i =0;i<A.length;i++)
// {
//     for(var j =0;j<A.length;j++)
//     {
        
        
//             document.write(A[i][j]+"  ");
        
//     }
//     document.write("<br/>");
// }

//  Question # 16
// var num =+prompt("Enter a number");
// for(i=num ; i>=0 ;i-=0.5)
// {
//       document.write(i+" , ");
// }

//  Question # 17
// for(var i=0;i<=20;i++)
// {
//     if(i % 2 ===0)
//     {
//           document.write(i+" is Even <br />");  
//     }
//     else  document.write(i+" is Odd <br />");  
// }

//  Question # 18
// var product=1;
// for(var i=1;i<=7;i++)
// {
//     if(i % 2 !== 0)
//     {
//         product *= i ;
        
//     }
// }
// document.write("The product of the odd integers from 1 to 7 is "+product); 

//  Question # 19
// var num= +prompt("Enter initial numbers of Stars: ");
// for(var i=0;i<num;i++)
// {
//     for(var j=num;j>i;j--)
//     {
//         document.write("* ");
//     }
//     document.write("<br />");
// }

//  Question # 20(a)

// var num= +prompt("Enter initial numbers of Stars: ");
// for(var i=0 ; i<num;i++){
//     for(j=0;j<num;j++)
//     {
//         document.write("* ");
//     }
//      document.write("<br />");
// }

//  Question # 20(b)
// var num= +prompt("Enter initial numbers of Stars: ");
// for(var i=0 ; i<=num;i++){
//     for(j=0;j<i;j++)
//     {
//         document.write("* ");
//     }
//      document.write("<br />");
// }

//  Question # 20(c)
// var num= +prompt("Enter initial numbers of Stars: ");
// for(var i=0 ; i<=num;i++){
//     for(j=num;j>i;j--)
//     {
//         document.write("* ");
//     }
//      document.write("<br />");
// }