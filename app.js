
let number = 0;
let result;
const output = () =>{

 result =   setInterval(() => {
        number++
        document.getElementById('time').innerText=number
        console.log(result);
    }, 1000);
    
}


const stopResult = ()=>{
    clearInterval(result);
}

const reset = () =>{
    document.getElementById('time').innerText="0";
    number=0;
}
 
