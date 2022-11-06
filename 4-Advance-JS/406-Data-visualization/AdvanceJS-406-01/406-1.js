var arr=document.getElementsByClassName("mycol");
for (var i=0;i<arr.length;i++){
    arr[i].innerHTML=countries[i];
    // arr[i].innerHTML.toUpperCase();
}
// console.log(arr[0].innerHTML);
const display=()=>{
    var search=document.getElementById("search_text").value;
    var count=0;
    for(var i=0;i<arr.length;i++){
        if((arr[i].innerHTML.toUpperCase()).startsWith(search.toUpperCase()) ){
            arr[i].style.display="block";
            count++;
        }
        else{
            arr[i].style.display="none";
        }

    }
    document.getElementById("count").innerHTML=`Countrie starting with ${search} = ${count}`
    
}
document.getElementById("search_text").addEventListener('keyup',display);