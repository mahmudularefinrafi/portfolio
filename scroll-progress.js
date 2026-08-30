// Scroll progress indicator
(()=>{
  const bar=document.createElement('div');
  bar.className='scroll-progress';
  bar.innerHTML='<span></span>';
  const style=document.createElement('style');
  style.textContent=`.scroll-progress{position:fixed;top:0;left:0;width:100%;height:3px;z-index:10000;pointer-events:none;background:rgba(255,255,255,.04)}.scroll-progress span{display:block;width:0;height:100%;transform-origin:left center;background:linear-gradient(90deg,var(--neon,#43f5a0),var(--cyan,#27d9ff),#a477ff);box-shadow:0 0 10px rgba(67,245,160,.65);transition:width .08s linear}`;
  document.head.appendChild(style);document.body.appendChild(bar);
  const fill=bar.firstElementChild;
  let ticking=false;
  function update(){const d=document.documentElement,b=document.body,max=Math.max(1,Math.max(d.scrollHeight,b.scrollHeight)-innerHeight),p=Math.min(100,Math.max(0,(scrollY/max)*100));fill.style.width=p+'%';ticking=false}
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true}},{passive:true});addEventListener('resize',update,{passive:true});update();
})();
