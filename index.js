const weight=document.getElementById("wet").value;
const hfeet=document.getElementById("feet").value;
const inches=document.getElementById("inches").value;
const button =document.querySelector("button");
const bmiscore=document.getElementById("bmi")
const feettoinc=hfeet*12
let add=feettoinc+Number(inches)
let meterconversan=add*0.0254
let metersquare=meterconversan*meterconversan
let finalBMI=int(weight/metersquare)


button.addEventListener('click',function(){
    let result=(finalBMI.toFixed(2))
    bmiscore.textContent=`${result}`
    console.log(result)
    
    
    
})



