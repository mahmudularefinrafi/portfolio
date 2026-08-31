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
})();