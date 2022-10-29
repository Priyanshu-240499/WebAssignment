let arr=document.getElementsByClassName('container');
for(let idx=0;idx<arr.length;idx++){
    if(idx==0){
        arr[idx].style.backgroundColor="blue";
    }
   else if (idx==8){
    arr[idx].style.backgroundColor="green"
   }
   else if(idx==16){
    arr[idx].style.backgroundColor = "palevioletred";
   }
   else if(idx%2==1){
    arr[idx].style.backgroundColor="lime"
   }
   else {
    arr[idx].style.backgroundColor = "white";
   }
}