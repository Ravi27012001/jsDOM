console.log("working...")
// Write the code to access element which is having id as "text"
let element = document.getElementById("text");
console.log(element);
// Write the code to access element which is having tag as "h1"
let element1 = document.getElementsByTagName("h1");
console.log(element1[0]);
// Write the code to access element which is having class as "box"
let element2 = document.getElementsByClassName("box");
console.log(element2);
 

// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
let element3 = document.getElementsByTagName("h1");
element3[0].innerText = "hello world";
console.log(element3[0]);

// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function changeDirection(){
    let element4 = document.getElementsByClassName("class2");
    element4[0].style.flexDirection = "column";
}
// What’s the difference between window vs document?

// "<h1>Hello </h1>
//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
element3[0].style.color = "red";
element3[0].id = "heading";


function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = hh;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
     
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();

//   cons


//  var DOB = document.createElement("input");
// DOB.setAttribute("type","date");
// DOB.setAttribute("name","DOB");
// DOB.setAttribute("placeholder","DOB");
// DOB.setAttribute("min","1995-01-01");
 
function formm(){
    var form = document.createElement("form");
    form.setAttribute("method","get");
    form.setAttribute("action","submit");
 
    var name = document.createElement("input");
    name.setAttribute("type","text");
    name.setAttribute("name","fullname");
    name.setAttribute("placeholder","Name");
 
    var email = document.createElement("input");
    var brr = document.createElement("br");
    email.setAttribute("type","email");
    email.setAttribute("placeholder","email@prepbytes.com");
    email.setAttribute("pattern","[a-zA-Z0-9]+@prepbyte.com")
   var phone = document.createElement("input");
    
   phone.setAttribute("type","tel");
   phone.setAttribute("placeholder","91+phone");
   phone.setAttribute("maxlength","12");
   phone.setAttribute("pattern","[91]{2}[0-9]{10}");

   var DOB = document.createElement("input");
   DOB.setAttribute("type","date");
   DOB.setAttribute("placeholder","DOB");
   DOB.setAttribute("min","1995-01-01");


    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(phone);
    form.appendChild(DOB);
    form.appendChild(brr);

    document.getElementsByClassName("form")[0]
    .appendChild(form);
}
formm();