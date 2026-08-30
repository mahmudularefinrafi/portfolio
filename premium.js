(()=>{
const d=document.documentElement,b=document.body;
const L=localStorage.getItem('portfolio-lang')||'en',T=localStorage.getItem('portfolio-theme')||'dark';
d.lang=L;b.classList.toggle('light',T==='light');if(T!=='dark'&&T!=='light')b.classList.add(T);
function lang(x){d.lang=x;document.querySelectorAll('[data-en][data-bn]').forEach(e=>e.textContent=e.dataset[x==='bn'?'bn':'en']);localStorage.setItem('portfolio-lang',x);document.querySelectorAll('.language-toggle span[data-lang]').forEach(e=>e.classList.toggle('active',e.dataset.lang===x))}lang(L);
d.getElementById('languageToggle')?.addEventListener('click',()=>lang(d.lang==='bn'?'en':'bn'));
function theme(x){b.classList.remove('light','theme-purple','theme-amber','theme-cyan');if(x==='light')b.classList.add('light');else if(x!=='dark')b.classList.add(x);localStorage.setItem('portfolio-theme',x);const q=document.getElementById('themeLabel');if(q)q.textContent=x==='dark'?'DARK':x==='light'?'LIGHT':x.replace('theme-','').toUpperCase();document.getElementById('themeMenu')?.classList.remove('open')}theme(T);
d.getElementById('themeButton')?.addEventListener('click',e=>{e.stopPropagation();document.getElementById('themeMenu')?.classList.toggle('open')});document.querySelectorAll('.theme-choice').forEach(x=>x.onclick=()=>theme(x.dataset.theme));
d.getElementById('mobileMenuButton')?.addEventListener('click',e=>{e.stopPropagation();document.getElementById('mobileMenu')?.classList.toggle('open')});document.querySelectorAll('#mobileMenu a').forEach(x=>x.onclick=()=>document.getElementById('mobileMenu')?.classList.remove('open'));
const boot=document.getElementById('boot-screen');if(boot)setTimeout(()=>boot.classList.add('loaded'),2300);
const c=document.createElement('canvas');c.style='position:fixed;inset:0;z-index:-2;pointer-events:none;opacity:.08';document.body.prepend(c);const x=c.getContext('2d');let w,h,a;function r(){w=c.width=innerWidth;h=c.height=innerHeight;a=Array(Math.floor(w/18)).fill(1)}function m(){x.clearRect(0,0,w,h);x.fillStyle=getComputedStyle(b).getPropertyValue('--neon')||'#43f5a0';x.font='11px monospace';a.forEach((v,i)=>{x.fillText(Math.random()>.5?'0':'1',i*18,v*18);if(v*18>h&&Math.random()>.975)a[i]=0;a[i]++});requestAnimationFrame(m)}r();addEventListener('resize',r);m();

/* SCREENSHOT-STYLE PROJECT PREVIEWS */
const previewStyle=document.createElement('style');previewStyle.textContent=`
.project-image.live-preview{position:relative!important;height:220px!important;min-height:220px!important;overflow:hidden!important;background:#071018!important;border:1px solid rgba(67,245,160,.12)!important;border-radius:14px!important}
.project-image.live-preview:before{content:'PROJECT PREVIEW';position:absolute;z-index:3;top:10px;left:10px;padding:5px 8px;border:1px solid rgba(67,245,160,.28);border-radius:6px;background:rgba(2,8,12,.78);color:var(--neon);font:700 8px 'JetBrains Mono',monospace;letter-spacing:1px;pointer-events:none;backdrop-filter:blur(8px)}
.project-image.live-preview:after{content:'';position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(180deg,rgba(2,8,12,.06),transparent 35%,rgba(2,8,12,.22))}
.project-image.live-preview img{display:block;width:100%;height:100%;border:0;object-fit:cover;object-position:top center;transition:transform .5s ease,filter .35s ease;filter:saturate(.92) brightness(.92)}
.project-image.live-preview.loaded img{filter:saturate(1) brightness(1)}
.project-image.live-preview .preview-loader{position:absolute;inset:0;z-index:1;display:flex;align-items:center;justify-content:center;color:#7890a0;background:#071018;font:600 9px 'JetBrains Mono',monospace;letter-spacing:1px}.project-image.live-preview.loaded .preview-loader{display:none}
.project-card:hover .project-image.live-preview img{transform:scale(1.025)}
@media(max-width:680px){.project-image.live-preview{height:190px!important;min-height:190px!important}.project-image.live-preview:before{font-size:7px}}
`;document.head.appendChild(previewStyle);
const cards=[...document.querySelectorAll('#projects .project-card')];
cards.forEach(card=>{
 const link=card.querySelector('.project-link'),image=card.querySelector('.project-image');
 if(!link||!image)return;
 image.className='project-image live-preview';
 image.innerHTML='<div class="preview-loader">GENERATING PROJECT PREVIEW...</div>';
 const img=document.createElement('img');
 img.src='https://image.thum.io/get/width/1200/crop/700/noanimate/'+link.href;
 img.alt=(card.querySelector('h3')?.textContent||'Project')+' preview';
 img.loading='lazy';
 img.addEventListener('load',()=>image.classList.add('loaded'),{once:true});
 img.addEventListener('error',()=>{const loader=image.querySelector('.preview-loader');if(loader)loader.textContent='PROJECT PREVIEW';},{once:true});
 image.appendChild(img);
});
})();