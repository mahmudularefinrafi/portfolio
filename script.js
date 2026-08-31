(()=>{
'use strict';
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const langBtn=document.getElementById('languageToggle');
function setLanguage(lang){document.querySelectorAll('[data-en][data-bn]').forEach(el=>{el.textContent=lang==='bn'?el.dataset.bn:el.dataset.en});document.documentElement.lang=lang==='bn'?'bn':'en';if(langBtn)langBtn.textContent=lang==='bn'?'বাংলা / EN':'EN / বাংলা';localStorage.setItem('portfolio-language',lang)}
setLanguage(localStorage.getItem('portfolio-language')||'en');
if(langBtn)langBtn.addEventListener('click',()=>setLanguage((localStorage.getItem('portfolio-language')||'en')==='en'?'bn':'en'));
const navLinks=document.querySelector('.nav-links'),menuBtn=document.getElementById('mobileMenuButton');
if(navLinks&&menuBtn){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('show'));navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('show')))}
})();