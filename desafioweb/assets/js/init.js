$("#btnRegister").click(function (event) {
  if($("#registerPass").val() != $("#registerRepeatPass").val())
  {
    alert("Senhas não correspondem!");
  } 
  else
  {
    var formData = {
      name: $("#registerName").val(),
      email: $("#registerEmail").val(),
      password: $("#registerPass").val(),
    };

    fetch("https://localhost:44309/user/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => {
      if(response.status !== 200){
        alert("Erro ao Cadastrar");
      }
      else{
        alert("Cadastro realizado com Sucesso");
        location.href = "/DesafioWeb/login";
      }
    }).catch(err => console.log(err));
  }
});

$("#btnRecover").click(function (event) {
  var formData = {
    email: $("#recoverEmail").val(),
  };

  fetch("https://localhost:44309/user/recoverypass", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }).then(response => {
    if(response.status !== 200){
      alert("Email Inválido!");
    }
    else{
      alert("Email para redefinir a senha enviado!");
      location.href = "/DesafioWeb/login";
    }
  }).catch(err => console.log(err));
});

$("#btnLogin").click(function (event) {
  
  var formData = {
    email: $("#loginEmail").val(),
    password: $("#loginPass").val(),
  };

  fetch("https://localhost:44309/user/login", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }).then(response => {
    if(response.status !== 200){
      alert("Usuário ou Senha incorreto");
    }
    else{
      response.json().then(data => {
        Cookies.set('token', data.token, { expires: 1 })
      })
      .then(() => location.href = "/DesafioWeb/bemvindo");
    }
  }).catch(err => console.log(err));
});
