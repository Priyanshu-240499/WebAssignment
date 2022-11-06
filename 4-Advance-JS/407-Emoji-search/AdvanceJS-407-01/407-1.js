emojiList.forEach(element => {       
   var tr= document.createElement("tr");
   tr.className="tr";
   var td1=document.createElement("td");
   var td2=document.createElement("td");
   var td3=document.createElement("td");
   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3);
   td1.innerHTML=element.emoji;
   td2.innerHTML=element.aliases.join(" ");
//    td2.style.width="60%"
   td3.innerHTML=element.description;
   document.getElementById("tbody").appendChild(tr);
}); 

const data=()=>{ 
    var search=document.getElementById("input").value;
    var trdata=document.getElementsByClassName("tr");
    for(var i=0;i<trdata.length;i++){
        if(trdata[i].children[2].innerHTML.includes(search)){
            trdata[i].style.display="table-row";
        }
        else{
            trdata[i].style.display="none";
        }
    }
}
document.getElementById("search_button").addEventListener('click',data);



           
