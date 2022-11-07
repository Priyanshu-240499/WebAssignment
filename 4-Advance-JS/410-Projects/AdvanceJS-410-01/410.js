const searchprofile=(e)=>{
    e.preventDefault();
    var input=document.getElementById("input").value;
    fetch("https://api.github.com/users/" +input)
    .then((data)=>{return data.json()}).catch(()=>{console.log("err");})
        .then(
            (data)=>{
                
                document.getElementById("result").innerHTML=`
                <a target=_blank href=https://github.com/${input}>
                <img src=${data.avatar_url} alt  alt="profile_img"/><br>
                <h6>View Profile</h6></a>
                <img src="https://c.tenor.com/6eJHUVoe_BAAAAAC/bitmoji-emoji.gif" alt="emoji_dance" height="300px" id="emoji"> `     
            },
            ()=>{console.log("error");}
            )
}




document.getElementById("form").addEventListener('submit',searchprofile);