const token = location.pathname.split("/")[3];
var email;

$("#btnReset").click(function (event) {
  if($("#loginPass").val() != $("#loginConfirmPass").val())
  {
    alert("Senhas não correspondem!");
  } 
  else
  {
  	fetch("https://localhost:44309/user/recoverypass/" + token, 
	{
	  method: "POST",
	}).then(response => {
		response.json().then(data => {
	        if(response.status !== 200){
			  alert("Url de recuperação invalida!");
			} 
			else if(data.email != $("#loginEmail").val())
			{
			  alert("Link de email enviado diferente do e-mail informado");
			}
			else
			{
			  	var formData = {
			      email: $("#loginEmail").val(),
			      password: $("#loginPass").val(),
			    };

			    fetch("https://localhost:44309/user/resetpass", {
			      method: "Put",
			      body: JSON.stringify(formData),
			      headers: {"Content-type": "application/json; charset=UTF-8"}
			    }).then(response => {
			      if(response.status !== 200){
			        alert("Erro em alterar a senha tente novamente!");
			      }
			      else{
			        alert("Senha Alterada com Sucesso!");
			        location.href = "/DesafioWeb/login";
			      }
			    }).catch(err => console.log(err));
			}
	    })
	}).catch(err => console.log(err));
  }
});


