const checkboxes = document.querySelectorAll('.inbox-checkbox');
const stars = document.querySelectorAll('.inbox-star');

function toggle(){
  if (this.active === true) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
  }

  this.active = !this.active;
}

checkboxes.forEach(function(item){
  item.addEventListener('click', toggle);
  item.active = false;
});

stars.forEach(function(item){
  item.addEventListener('click', toggle);
  item.active = false;
});
