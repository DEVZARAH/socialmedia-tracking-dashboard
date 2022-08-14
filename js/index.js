let root = document.documentElement;
const theme = document.querySelector('#theme');
theme.addEventListener('click',function(){
  root.classList.toggle('change');
})