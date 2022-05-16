console.log("it is working ...");
// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function changeText(){
let element = document.getElementsByTagName("html");
element[0].innerText = "Welcome to Elevation academy";
}