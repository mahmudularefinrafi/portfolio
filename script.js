(()=>{
  'use strict';

  // Keep the footer year current.
  const year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();

  // Small mouse-follow effect used by the existing CSS.
  if(matchMedia('(pointer:fine)').matches){
    let raf=0,lastX=innerWidth/2,lastY=innerHeight/2;
    addEventListener('mousemove',e=>{
      lastX=e.clientX; lastY=e.clientY;
      if(raf)return;
      raf=requestAnimationFrame(()=>{
        document.body.style.setProperty('--mouse-x',lastX+'px');
        document.body.style.setProperty('--mouse-y',lastY+'px');
        raf=0;
      });
    },{passive:true});
  }

  // Mobile navigation. Create the menu only when it is actually needed.
  const nav=document.querySelector('header nav');
  const navLinks=document.querySelector('.nav-links');
  const menuBtn=document.getElementById('mobileMenuButton');
  if(nav && navLinks && menuBtn){
    let menu=nav.querySelector('.mobile-menu-panel');
    if(!menu){
      menu=document.createElement('div');
      menu.className='mobile-menu-panel';
      menu.innerHTML=navLinks.innerHTML;
      nav.appendChild(menu);
      const style=document.createElement('style');
      style.textContent=`
        .mobile-menu-panel{display:none;position:absolute;top:calc(100% + 8px);left:0;right:0;padding:10px;border:1px solid rgba(255,255,255,.13);border-radius:16px;background:rgba(8,14,30,.96);backdrop-filter:blur(20px);box-shadow:0 20px 50px rgba(0,0,0,.35);z-index:1001}
        .mobile-menu-panel.open{display:block}.mobile-menu-panel a{display:block;padding:12px 14px;border-radius:10px;color:#cbd3e1;font-weight:700}.mobile-menu-panel a:hover{background:rgba(114,183,255,.1);color:#fff}
        .mobile-menu-btn{display:none;border:1px solid rgba(255,255,255,.13);background:rgba(255,255,255,.04);color:#fff;border-radius:10px;padding:7px 10px;cursor:pointer}
        @media(max-width:680px){.mobile-menu-btn{display:inline-flex;align-items:center;justify-content:center}.mobile-menu-panel{display:none}}
      `;
      document.head.appendChild(style);
      menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
    }
    menuBtn.addEventListener('click',e=>{e.stopPropagation();menu.classList.toggle('open');});
    document.addEventListener('click',e=>{if(!menu.contains(e.target)&&e.target!==menuBtn)menu.classList.remove('open');});
  }

  // Add a visible theme menu because the original HTML only had the button.
  const themeButton=document.getElementById('themeButton');
  if(themeButton && !document.getElementById('themeMenu')){
    const menu=document.createElement('div');
    menu.id='themeMenu';
    menu.innerHTML='<button class="theme-choice" data-theme="dark">Dark</button><button class="theme-choice" data-theme="light">Light</button><button class="theme-choice" data-theme="theme-purple">Purple</button><button class="theme-choice" data-theme="theme-cyan">Cyan</button><button class="theme-choice" data-theme="theme-amber">Amber</button>';
    const style=document.createElement('style');
    style.textContent=`#themeMenu{display:none;position:fixed;top:82px;right:24px;z-index:2000;padding:8px;border:1px solid rgba(255,255,255,.13);border-radius:14px;background:rgba(8,14,30,.96);backdrop-filter:blur(18px);box-shadow:0 20px 50px rgba(0,0,0,.35)}#themeMenu.open{display:grid;gap:4px}#themeMenu button{border:0;border-radius:9px;background:transparent;color:#dce4f1;padding:9px 14px;text-align:left;cursor:pointer}#themeMenu button:hover{background:rgba(114,183,255,.1)}@media(max-width:680px){#themeMenu{right:12px}}`;
    document.head.appendChild(style);document.body.appendChild(menu);
    themeButton.addEventListener('click',e=>{e.stopPropagation();menu.classList.toggle('open');});
    menu.querySelectorAll('.theme-choice').forEach(b=>b.addEventListener('click',()=>{
      const t=b.dataset.theme;document.body.classList.remove('light','theme-purple','theme-cyan','theme-amber');if(t!=='dark')document.body.classList.add(t);localStorage.setItem('portfolio-theme',t);menu.classList.remove('open');
    }));
    document.addEventListener('click',e=>{if(!menu.contains(e.target)&&e.target!==themeButton)menu.classList.remove('open');});
  }

  // Smoothly close the mobile menu after normal hash navigation.
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>document.querySelector('.mobile-menu-panel')?.classList.remove('open')));
})();
