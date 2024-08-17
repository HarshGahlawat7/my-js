"use strict"; //Treats all JS code as newer version of JS

// alert(3+3) //This will not work as we are using nodejs , not a browser

//Datatypes can be defined using let 

// Example
let name = "Harsh" //String datatype
let age = 18 //Number datatype
let isLoggedin = true //Boolean datatype
let state; //Undefined datatype

//Datatypes are ->

//Number -> 2 to power 53
//bigint 
//string -> ""
//boolean -> true/false
//null -> standalone value
//undefined
//symbol -> unique

//NOT A NUMBER
//NaN is of type number but represents an invalid or undefined numeric result.
//It’s produced when mathematical operations fail or produce non-numeric results.
//It is unique in that it is not equal to anything, including itself.
//To check for NaN, use Number.isNaN() to avoid unwanted type coercion.

console.log(typeof undefined); //Output will be undefined
console.log(typeof null); //Output will be object
