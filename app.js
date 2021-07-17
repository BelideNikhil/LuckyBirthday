const clicker=document.querySelector("#btn");
const loader=document.querySelector("#loader")
const lucky=document.querySelector("#lucky")
const unlucky=document.querySelector("#unlucky")
const invalid=document.querySelector("#invalid")



clicker.addEventListener("click",()=>{
    loader.style.display="block";
    lucky.style.display="none";
    unlucky.style.display="none";
    invalid.style.display="none";


    let user_birthday=document.querySelector("#user_birthday");
    let lucky_number=(document.querySelector("#user_lucky_number"));
    let output=document.querySelector(".output")
    output.innerHTML=''

    lucky_number=Math.round(Number(lucky_number.value));
    user_birthday=user_birthday.value;

    let birthday_num=0;
    for(let i=0;i<user_birthday.length;i++){
        if(user_birthday[i]!="-"){
            birthday_num +=Number(user_birthday[i]);
        }
    }
    
    
    setTimeout(()=>{
        loader.style.display="none";
        if(birthday_num && lucky_number>0){
            let inLuck;
            inLuck=birthday_num%lucky_number;
            if(inLuck===0){
                output.innerHTML="Woah! You are really lucky. Lets party."
                output.style.color="#099e09";
                lucky.style.display="block";
            }else{
                output.innerHTML="OOPS. You were born on a normal day just like me."
                output.style.color="#cf0e30";
                unlucky.style.display="block";
            }
        }else{
            output.innerHTML="Please enter the valid data bro."
            invalid.style.display="block";

            setTimeout(()=>{
                output.innerHTML=''
                invalid.style.display="none";
            },2500)
        }
    },3000)
    
})
