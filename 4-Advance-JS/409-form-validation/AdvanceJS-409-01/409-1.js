const checkValidation=(e)=>{
    e.preventDefault();
    var form=document.getElementById("form");
            if(form[0].value.length>=3 && form[0].value.length<=16 && !form[0].value.includes("!") && !form[0].value.includes("@") && !form[0].value.includes("#") && !form[0].value.includes("$") && !form[0].value.includes("%") && !form[0].value.includes("-") && !form[0].value.includes("_") && !form[0].value.includes("*") && !form[0].value.includes("&") && !form[0].value.includes(",") ){
                document.getElementById("fname").style.display="none";
                form[0].style.border="5px solid green";
            }
            else{
                form[0].style.border="5px solid red";
            }

            if(form[1].value.length>=3 && form[1].value.length<=16 && !form[1].value.includes("!") && !form[1].value.includes("@") && !form[1].value.includes("#") && !form[1].value.includes("$") && !form[1].value.includes("%") && !form[1].value.includes("-") && !form[1].value.includes("_") && !form[1].value.includes("*") && !form[1].value.includes("&") && !form[1].value.includes(",") ){
                document.getElementById("lname").style.display="none";
                form[1].style.border="5px solid green";
            }
            else{
                form[1].style.border="5px solid red";
            }

            if(form[2].value.includes("@") && form[2].value.length>=3){
                document.getElementById("email").style.display="none";
                form[2].style.border="5px solid green";
            }
            else{
                form[2].style.border="5px solid red";
            }

            if(form[3].value.length>=6 && form[3].value.length<=20){
                document.getElementById("password").style.display="none";
                form[3].style.border="5px solid green";
            }
            else{
                form[3].style.border="5px solid red";
            }

            if(form[4].value.length===11 ){
                document.getElementById("number").style.display="none";
                form[4].style.border="5px solid green";
            }
            else{
                form[4].style.border="5px solid red";
            }
            
            let regExp=/[A-Z]/;

            if(!regExp.test(form[5].value) && form[5].value.length>=8 && form[5].value.length<=50){
                document.getElementById("bio").style.display="none";
                form[5].style.border="5px solid green";
            }
            else{
                form[5].style.border="5px solid red";
            }
            
        

}
