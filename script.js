(()=>{
'use strict';
const cursorScript=document.createElement('script');cursorScript.src='cursor-effects.js?v=2';cursorScript.defer=true;document.head.appendChild(cursorScript);
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const langBtn=document.getElementById('languageToggle'),themeBtn=document.getElementById('themeButton');
function setLanguage(lang){document.querySelectorAll('[data-en][data-bn]').forEach(el=>el.textContent=lang==='bn'?el.dataset.bn:el.dataset.en);document.documentElement.lang=lang==='bn'?'bn':'en';if(langBtn)langBtn.textContent=lang==='bn'?'বাংলা / EN':'EN / বাংলা';localStorage.setItem('portfolio-language',lang);localStorage.setItem('portfolio-lang',lang)}
setLanguage(localStorage.getItem('portfolio-language')||localStorage.getItem('portfolio-lang')||'en');
if(langBtn)langBtn.addEventListener('click',()=>setLanguage((localStorage.getItem('portfolio-language')||localStorage.getItem('portfolio-lang')||'en')==='en'?'bn':'en'));
const themes=['dark','purple','cyan','amber','midnight'];let theme=localStorage.getItem('portfolio-theme')||'dark';
function setTheme(t){theme=t;document.body.classList.remove('light','theme-purple','theme-cyan','theme-amber','theme-midnight');if(t!=='dark')document.body.classList.add('theme-'+t);if(themeBtn)themeBtn.textContent=t==='dark'?'DARK':t.toUpperCase();localStorage.setItem('portfolio-theme',t)}
setTheme(theme);
if(themeBtn){themeBtn.addEventListener('click',()=>{const i=themes.indexOf(theme);setTheme(themes[(i+1)%themes.length])});themeBtn.title='Click to switch dark themes'}
const navLinks=document.querySelector('.nav-links'),menuBtn=document.getElementById('mobileMenuButton');if(navLinks&&menuBtn){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('show'));navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('show')))}

/* Font Awesome: icon-only enhancement, no existing text/layout/content is replaced. */
const fa=document.createElement('link');fa.rel='stylesheet';fa.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';fa.crossOrigin='anonymous';document.head.appendChild(fa);
const iconStyle=document.createElement('style');iconStyle.textContent=`
.nav-links a::before,.btn::before,.skill-card h3::before,.education-card h4::before,.project-link::before,.contact-content a::before{font-family:'Font Awesome 6 Free';font-weight:900;display:inline-block;margin-right:8px;opacity:.9}
.nav-links a[href='#home']::before{content:'\\f015'}.nav-links a[href='#about']::before{content:'\\f007'}.nav-links a[href='#skills']::before{content:'\\f085'}.nav-links a[href='#education']::before{content:'\\f19d'}.nav-links a[href='#projects']::before{content:'\\f1b2'}.nav-links a[href='#contact']::before{content:'\\f0e0'}
.btn[href='#projects']::before{content:'\\f1b2'}.btn[href='#contact']::before{content:'\\f0e0'}
.skill-card:nth-child(1) h3::before{content:'\\f121'}.skill-card:nth-child(2) h3::before{content:'\\f0ac'}.skill-card:nth-child(3) h3::before{content:'\\f201'}.skill-card:nth-child(4) h3::before{content:'\\f508'}
.education-card h4::before{content:'\\f19d'}
.project-link::before{content:'\\f35d'}
@media(max-width:680px){.nav-links a::before{margin-right:9px}.btn::before{margin-right:9px}}
`;document.head.appendChild(iconStyle);
})();