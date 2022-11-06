var data=document.getElementsByClassName("data");
function Adddata(){
var bool;

for (var i=0;i<data.length;i++){
    if(data[i].value===""){
        document.getElementById("message").style.display="block";
        bool=false;
        break;   
    }
    else{
        document.getElementById("message").style.display="none";
        bool=true;
    }
}

if(bool){
var tr=document.createElement("tr");
var td1=document.createElement("td");
var td2=document.createElement("td");
var td3=document.createElement("td");
var td4=document.createElement("td");
td4.style.display="flex";
td4.style.justifyContent="space-around";
var divdel=document.createElement("div");
divdel.style.borderRadius="5px";
divdel.style.backgroundColor="white"
var divaddscore=document.createElement("div");
divaddscore.style.borderRadius="5px";
divaddscore.style.backgroundColor="white"
var divsubscore=document.createElement("div");
divsubscore.style.borderRadius="5px";
divsubscore.style.backgroundColor="white"
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
td4.appendChild(divdel);
td4.appendChild(divaddscore);
td4.appendChild(divsubscore);


td1.innerHTML=data[0].value+" "+data[1].value;
td2.innerHTML=data[2].value;
td3.innerHTML=data[3].value;
divdel.innerHTML=`<i class="material-icons" onclick="delfn(this)" >&#xe872;</i>`;
divaddscore.innerHTML=`<h6 onclick="addfn(this)">+5</h6>`;
divsubscore.innerHTML=`<h6 onclick="subfn(this)">- 5</h6>`;

document.getElementById("tbody").appendChild(tr);
}
}

function delfn(e){
    e.parentElement.parentElement.parentElement.remove();
}


function addfn(e){
    var score=(+e.parentElement.parentElement.previousElementSibling.innerHTML);
    score+=5;
    e.parentElement.parentElement.previousElementSibling.innerHTML=score;
}


function subfn(e){
    var score=(+e.parentElement.parentElement.previousElementSibling.innerHTML);
    score-=5;
    e.parentElement.parentElement.previousElementSibling.innerHTML=score;
}


document.getElementById("Add").addEventListener('click',Adddata);