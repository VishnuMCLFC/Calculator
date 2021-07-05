/*function dispNumber(num){
inpt.value+=num;
}*/

let dispNumber=(num)=>inpt.value+=num;

function evaluateExpression(){
if(inpt.value=="")
{
    inpt.value=0;
}else{
    try{
        inpt.value=eval(inpt.value);
    }
    catch{
        inpt.value="error";
    }
}
}

//let evaluateExpression=(res)=>inpt.value==""?inpt.value=0:inpt.value=eval(inpt.value);

/*
function clearBox(){
inpt.value="";
}
*/
let clearBox=()=>inpt.value="";
/*
function removeNumber()
{
    inpt.value=inpt.value.slice(0,-1);

}*/

let removeNumber=()=>inpt.value=inpt.value.slice(0,-1);