let num1=28;
let num2=10;
let result=num1+num2;

      // document.write("sum is"+" "+result+"<br>");
   
    //  document.write(`sum is ${result}`)
    //  document.write(`sum is ${result}`) ;
  //  console.log(`sum is ${result}`) //template literals
  // let heading1=document.querySelector(".heading");
  //  heading1.innerHTML=`sum is ${result}`;


  // heading1.style.color="red"

  // heading1.style.background-color="blue"


//  let styleObject = {color: 'red', "background-color" : 'yellow'};
// Object.assign(heading1.style, styleObject) ;


let heading1=document.querySelectorAll('.heading')
for (let i = 0; i < heading1.length; i++) {
  heading1[i].style.backgroundColor = "red";
}


// document.querySelector(".example").style.backgroundColor = "red";




//        let heading1=document.querySelectorAll('.heading').forEach(heading1 => {
//     heading1.innerHTML="vhg";
// })