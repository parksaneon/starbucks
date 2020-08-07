
const nav_btn = document.querySelector('.show__nav');
const nav = document.querySelector('nav');
const header = document.querySelector('.header');
const close_btn = document.querySelector('.close__nav');
const menu_item = document.querySelectorAll('.main__menu > li');

nav_btn.addEventListener('click', function(){
  header.classList.add('show__nav')
  nav.classList.add('show');
});

close_btn.addEventListener('click', function(){
  removeOn();
  header.classList.remove('show__nav');
  nav.classList.remove('show');
});

for(var i = 0; i < menu_item.length; i++){
  menu_item[i].addEventListener('click', function(e){
    if(e.currentTarget.classList.contains('on')){
      removeOn();
    }else{
      removeOn();
      e.currentTarget.classList.add('on');
    }
  });
};

function removeOn(){
  for(let i = 0; i < menu_item.length; i++){
    menu_item[i].classList.remove('on');
  }
}