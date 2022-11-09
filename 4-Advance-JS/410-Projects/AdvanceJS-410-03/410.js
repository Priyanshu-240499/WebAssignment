var result=document.querySelector("#result");
const searchMeal=(e)=>{
    e.preventDefault();
    result.innerHTML="";
    
    var input=document.querySelector("#input");
    if(e.key=='Backspace' && input.value===""){
        result.innerHTML="";
        return;
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        var dataarray=data.meals;
        dataarray.forEach(element => {
            var span=document.createElement("span");
            var p=document.createElement("p");
            var img=document.createElement("img");
            img.style.width="100px";
            img.style.height="100px";
            img.style.margin="5px";
            img.src=element.strMealThumb;
            p.innerHTML=element.strMeal;
            span.appendChild(img);
            span.appendChild(p);
            result.appendChild(span);
        });
         
    })
}

document.getElementById('search').addEventListener('keyup',searchMeal);