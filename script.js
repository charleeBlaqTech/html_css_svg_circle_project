
const percentValue1= document.querySelector('.percent-number.one');
const percentValue2= document.querySelector('.percent-number.two');
const percentValue3= document.querySelector('.percent-number.three');

let count1 = 0
let count2 = 0
let count3 = 0

setInterval(()=>{
    if(count1 === 70){
        clearInterval()
    }else{
        count1 +=1

        percentValue1.textContent = count1 + "%";
    }
   
},17)
setInterval(()=>{
    if(count2 === 90){
        clearInterval()
    }else{
        count2 +=1
        percentValue2.textContent = count2 + "%";
    }
   
   
},12)

setInterval(()=>{
    if(count3 === 36){
        clearInterval()
    }else{
        count3 +=1
        percentValue3.textContent = count3 + "%";
    }
   
},37)
