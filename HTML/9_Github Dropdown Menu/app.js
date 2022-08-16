const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownButton.addEventListener('click', function(e){
  if(this.active === true){
    dropdownMenu.classList.remove('active');
  } else {
    dropdownMenu.classList.add('active');
  }
  this.active = !this.active;
});
dropdownButton.active = false;