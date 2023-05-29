const id1 = document.getElementById("button-1");

function login()
{

    alert("Login efeito!")
    const webstitesettings = {

        cordosite: "bluesky",
        versaodohtml: "HTML 5",
        versaodocss: "3",
        hospedagem: "github",

    };

    console.log(webstitesettings)

}

id1.addEventListener("click", login)