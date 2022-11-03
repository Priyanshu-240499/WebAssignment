var image =document.createElement("img");
image.src="https://i0.wp.com/allthingstalent.org/wp-content/uploads/2022/07/geekster.jpg?fit=1000%2C535&ssl=1";
var h2=document.createElement("h2");
h2.innerText="Image Element Added.";
document.getElementById("container").appendChild(h2);
h2.style.display="none";
function addImage(){
    if(h2.style.display=="none"){
        h2.style.display="block";       
        document.getElementById("container").appendChild(image);
    }
    else{
        h2.style.display="none";
        image.remove();
    }

    
}