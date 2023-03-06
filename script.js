

console.log("hello world !!!");

let inputs; 
inputs=[];

//test=document.getElementsByClassName("table")[0];

test=document.getElementsByClassName("R1 C1")[0].getElementsByClassName("input")[0];
test.style.color="blue";
console.log(test);

test.addEventListener("change", function(){ console.log(this.value); });



// for(let i=1;i<=9;i++)
// {
//  inputs[i]=[]
//  for(let j=1;i<=9;j++)
//     {
//         inputs[i][j]=document.getElementsByClassName("C"+j);
//     }
// } 
