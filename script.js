// let ans=Array.from(document.getElementsByTagName('button'));
// ans.forEach(element=>{
//     element.classList.add("button1")

// });

let string="";
let buttons=Array.from(document.querySelectorAll(".button1"));

buttons.forEach((item)=>{
    item.addEventListener('click',(e)=>{
       // console.log(e.value);
    //    string=e.target.value;
    //    console.log(string)
       if(e.target.value == "="){
        string=eval(string);
        document.querySelector('input').value=string;
       }
       else if(e.target.value == "Clr")
       {
        string="";
        document.querySelector('input').value=string;
       }
       else if(e.target.value == "Del")
       {
        string=string.slice(0,string.length-1);
        document.querySelector('input').value=string;
       }
        else{
        string +=e.target.value;
        //console.log(string)
        document.querySelector('input').value=string;
       }
       
    })
})