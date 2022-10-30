const keyBoard = document.querySelector(".keyboard");

keyBoard.addEventListener("keyup",(e)=>{
   let key = document.getElementById("key-text");
   let ans=document.getElementById('ans');
     ans.innerHTML=e.keyCode;
     key.innerHTML = e.key;
});