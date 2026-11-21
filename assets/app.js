
const toggle=document.querySelector('.menu-toggle'),drawer=document.querySelector('.drawer'),back=document.querySelector('.drawer-backdrop'),close=document.querySelector('.close');
function setMenu(open){drawer?.classList.toggle('open',open);back?.classList.toggle('open',open);document.body.style.overflow=open?'hidden':'';toggle?.setAttribute('aria-expanded',String(open))}
toggle?.addEventListener('click',()=>setMenu(true));close?.addEventListener('click',()=>setMenu(false));back?.addEventListener('click',()=>setMenu(false));document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
