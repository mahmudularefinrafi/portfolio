(() => {
  'use strict';
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  const style = document.createElement('style');
  style.textContent = `
    .cursor-dot,.cursor-ring{position:fixed;top:0;left:0;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);opacity:0}
    .cursor-dot{width:7px;height:7px;border-radius:50%;background:#fff;box-shadow:0 0 12px rgba(120,190,255,.9),0 0 26px rgba(120,190,255,.45);transition:opacity .2s}
    .cursor-ring{width:30px;height:30px;border:1px solid rgba(120,190,255,.55);border-radius:50%;box-shadow:0 0 18px rgba(120,190,255,.12),inset 0 0 12px rgba(120,190,255,.08);transition:width .2s,height .2s,border-color .2s,opacity .2s}
    .cursor-ring.hover{width:48px;height:48px;border-color:rgba(170,220,255,.9)}
    @media(max-width:900px){.cursor-dot,.cursor-ring{display:none}}
  `;
  document.head.appendChild(style);

  let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y;
  addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;dot.style.opacity='1';ring.style.opacity='1'});
  addEventListener('mouseleave',()=>{dot.style.opacity='0';ring.style.opacity='0'});
  document.querySelectorAll('a,button,.project-card,.skill-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>ring.classList.add('hover'));
    el.addEventListener('mouseleave',()=>ring.classList.remove('hover'));
  });
  function tick(){
    rx += (x-rx)*.16; ry += (y-ry)*.16;
    dot.style.left=x+'px'; dot.style.top=y+'px';
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(tick);
  }
  tick();
})();
