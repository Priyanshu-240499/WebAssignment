var btn=document.getElementById("calculate");
btn.addEventListener('click',function(){
    var mass=document.getElementById("Mass").value;
    var planetgravity=document.getElementById("planet").value;
    if(mass===""){
     alert("fill mass");
    }
    else if(planetgravity===""){
        alert("fill planet name");
    }
    else{
    var fresult=document.getElementById("fresult");
    var planetimage=document.getElementById("Planetimage");
    fresult.innerText=mass*planetgravity;
    
    
    const planetselected=document.getElementById("planet").value;
    console.log(planetselected);
   
        if(planetselected==3.59){
             
            planetimage.src="ProjectImage/mercury.png";
        }
        else if(planetselected==9.81){
            
            planetimage.src="ProjectImage/earth.png";
        }
        else if(planetselected==25.95){
            
            planetimage.src="ProjectImage/jupiter.png";
        }
        else if(planetselected==1.62){
            
            planetimage.src="ProjectImage/moon.png";
        }
        else if(planetselected==3.77){
            
            planetimage.src="ProjectImage/mars.png";
        }
        else if(planetselected==14.07){
            
            planetimage.src="ProjectImage/neptune.png";
        }
        else if(planetselected==0.7){
            
            planetimage.src="ProjectImage/pluto.png";
        }
        else if(planetselected==11.08){
            
            planetimage.src="ProjectImage/saturn.png";
        }
        else if(planetselected==10.67){
            
            planetimage.src="ProjectImage/uranus.png";
        }

}
})