var ul=document.getElementById("ul");
function fnAdd(e){
 var li=document.createElement("li");
li.style.display="flex";
li.style.justifyContent="space-between";
li.style.width="100%";
var delbtn=document.createElement("button");
    delbtn.innerText="Delete";
var item=e.previousElementSibling.value;
if (item===""){//Checking if empty field or not
document.getElementById("invalid").style.display="block";
}
else{//if not empty then adding
    document.getElementById("invalid").style.display="none";
    li.innerText=item;
    e.previousElementSibling.value="";
    li.appendChild(delbtn);
    ul.appendChild(li); 
    delbtn.addEventListener('click',function(e){
        e.preventDefault();
        // console.log(e.target.nextElementSibling);
        li.remove();

    })
}
}








