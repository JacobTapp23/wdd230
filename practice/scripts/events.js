const click = document.querySelector('.click');
const hover = document.querySelector('.hover');
const out = document.querySelector('.out');
const up = document.querySelector('.up');
const down = document.querySelector('.down');

click.addEventListener('click' , ()=> {click.classList.toggle('clickstyle')});
hover.addEventListener('mouseover' , ()=> {hover.classList.toggle('hoverstyle')});
out.addEventListener('mouseout' , ()=> {out.classList.toggle('outstyle')});
up.addEventListener('mouseup' , ()=> {up.classList.toggle('upstyle')});
down.addEventListener('mousedown' , ()=> {down.classList.toggle('downstyle')});

