var placeID = document.getElementById('place-id');
var nameInput = document.getElementById('name-input');
var emailInput = document.getElementById('email-input');

function loadInfo(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var result = JSON.parse(this.responseText);
      nameInput.value = result.name;
      emailInput.value = result.email;
      placeID.value = result.placeID;
    }
  };
  xhr.open('GET', '/api/user_info');
  xhr.send();
}

loadInfo();
