const  submit=()=>{
const getData =document.getElementById('get-value')
const getValue=getData.value
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
if(pattern.test(getValue)){
    document.getElementById('success').style.display='block'
    document.getElementById('error').style.display='none'

}

else{
    document.getElementById('error').style.display='block'
    document.getElementById('success').style.display='none'
}
 
}