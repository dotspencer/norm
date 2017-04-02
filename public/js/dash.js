var userName = document.querySelector('.name');
var menu = document.querySelector('.expand-menu');

userName.addEventListener('click', function(){
  if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});
