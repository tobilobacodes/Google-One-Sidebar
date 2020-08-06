const toggleBtn = document.querySelector('.toggle');
const close = document.querySelector('.close');
const navList = document.querySelector('.nav-list');

toggleBtn.addEventListener('click', function(){
  navList.classList.add('show-links');
  
})

close.addEventListener('click', function(){
  navList.classList.remove('show-links');
})