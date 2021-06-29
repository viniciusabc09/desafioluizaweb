const token = Cookies.get('token');

fetch("https://localhost:44309/user/authenticated", 
{
  method: "GET",
  headers: {
    "Authorization": "Bearer " + token,
    "Content-type": "application/json; charset=UTF-8 "
  }
}).then(response => {

if(response.status !== 200){
  location.href = "/DesafioWeb/erro"
}
else
{
  response.json().then(data => {
    $("#userName").text(data.name);
  });
}
}).catch(err => console.log(err));