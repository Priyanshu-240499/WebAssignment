let i=0;
const display=(e)=>{
    e.preventDefault();
    fetch("https://type.fit/api/quotes")
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        var h1=document.getElementById("quote")
        h1.innerHTML=data[i].text;
        var h4=document.getElementById("author")
        h4.innerHTML=`~ `+data[i].author;
        i++;
        if(i===1643){
            i=0;
        }
    })
}

document.getElementById("display").addEventListener('click',display);