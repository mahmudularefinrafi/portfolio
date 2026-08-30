// PORTFOLIO INTERACTIONS - FAST / LIGHTWEIGHT
console.log("Mahmudul Arefin Rafi's Portfolio Loaded Successfully!");

const bootScreen=document.getElementById("boot-screen");
const revealBoot=()=>bootScreen&&bootScreen.classList.add("loaded");
if(bootScreen){window.addEventListener("load",()=>setTimeout(revealBoot,250),{once:true});setTimeout(revealBoot,900)}

const languageToggle=document.getElementById("languageToggle");
const translatableElements=document.querySelectorAll("[data-en][data-bn]");
function setLanguage(language){const bn=language==="bn";document.documentElement.lang=bn?"bn":"en";document.body.classList.toggle("bn-mode",bn);translatableElements.forEach(el=>el.textContent=bn?el.dataset.bn:el.dataset.en);if(languageToggle){languageToggle.querySelectorAll("span").forEach(s=>s.classList.remove("active"));const active=languageToggle.querySelector(bn?"span:last-of-type":"span:first-of-type");if(active)active.classList.add("active")}localStorage.setItem("portfolioLanguage",language)}
setLanguage(localStorage.getItem("portfolioLanguage")||"en");
if(languageToggle)languageToggle.addEventListener("click",()=>setLanguage(document.body.classList.contains("bn-mode")?"en":"bn"));

const themeButton=document.getElementById("themeButton"),themeMenu=document.getElementById("themeMenu"),themeLabel=document.getElementById("themeLabel"),themeChoices=document.querySelectorAll(".theme-choice");
const themeNames={dark:"DARK",light:"LIGHT", "theme-purple":"PURPLE", "theme-cyan":"CYAN", "theme-amber":"AMBER"};
function setTheme(theme){document.body.classList.remove("light","theme-purple","theme-cyan","theme-amber");if(theme!=="dark")document.body.classList.add(theme);if(themeLabel)themeLabel.textContent=themeNames[theme]||"DARK";localStorage.setItem("portfolioTheme",theme)}
setTheme(localStorage.getItem("portfolioTheme")||"dark");
if(themeButton&&themeMenu){themeButton.addEventListener("click",e=>{e.stopPropagation();themeMenu.classList.toggle("open")});themeChoices.forEach(c=>c.addEventListener("click",()=>{setTheme(c.dataset.theme||"dark");themeMenu.classList.remove("open")}));document.addEventListener("click",()=>themeMenu.classList.remove("open"))}

const mobileMenuButton=document.getElementById("mobileMenuButton"),mobileMenu=document.getElementById("mobileMenu");
if(mobileMenuButton&&mobileMenu){mobileMenuButton.addEventListener("click",e=>{e.stopPropagation();mobileMenu.classList.toggle("open")});mobileMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobileMenu.classList.remove("open")))}

document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",function(e){const id=this.getAttribute("href"),target=document.querySelector(id);if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"})}}));

const hero=document.querySelector("#home.hero");
if(hero&&!document.querySelector(".professional-strip")){
 const strip=document.createElement("div");strip.className="professional-strip";strip.innerHTML=`<div class="pro-title"></div><div class="pro-grid"><div class="pro-card"><span class="pro-label" data-en="Current Focus" data-bn="বর্তমান ফোকাস">Current Focus</span><div class="pro-value" data-en="Software & Web Development" data-bn="সফটওয়্যার ও ওয়েব ডেভেলপমেন্ট">Software & Web Development</div></div><div class="pro-card"><span class="pro-label" data-en="Education" data-bn="শিক্ষা">Education</span><div class="pro-value" data-en="CSE • Uttara University" data-bn="CSE • উত্তরা বিশ্ববিদ্যালয়">CSE • Uttara University</div></div><div class="pro-card"><span class="pro-label" data-en="Professional Focus" data-bn="পেশাগত ফোকাস">Professional Focus</span><div class="pro-value" data-en="Technology • Digital Marketing" data-bn="প্রযুক্তি • ডিজিটাল মার্কেটিং">Technology • Digital Marketing</div></div><div class="pro-card"><span class="pro-label" data-en="Status" data-bn="স্ট্যাটাস">Status</span><div class="pro-value"><span class="online" data-en="Open to Opportunities" data-bn="নতুন সুযোগের জন্য আগ্রহী">Open to Opportunities</span></div></div></div>`;
 hero.insertAdjacentElement("afterend",strip);
}

if(window.matchMedia("(pointer:fine)").matches){const bubble=document.querySelector(".cursor-bubble")||document.createElement("div"),dot=document.querySelector(".cursor-dot")||document.createElement("div");bubble.className="cursor-bubble";dot.className="cursor-dot";if(!bubble.parentElement)document.body.appendChild(bubble);if(!dot.parentElement)document.body.appendChild(dot);let mx=innerWidth/2,my=innerHeight/2,bx=mx,by=my,running=true;function tick(){if(!running)return;bx+=(mx-bx)*.18;by+=(my-by)*.18;bubble.style.transform=`translate3d(${bx}px,${by}px,0) translate(-50%,-50%)`;dot.style.transform=`translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`;requestAnimationFrame(tick)}tick();addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;bubble.style.opacity=1;dot.style.opacity=1},{passive:true});document.querySelectorAll("a,button,.skill-card,.project-card,.pro-card").forEach(el=>{el.addEventListener("mouseenter",()=>bubble.classList.add("hovering"));el.addEventListener("mouseleave",()=>bubble.classList.remove("hovering"))});addEventListener("click",e=>{const r=document.createElement("div");r.className="cursor-ripple";r.style.left=e.clientX+"px";r.style.top=e.clientY+"px";document.body.appendChild(r);setTimeout(()=>r.remove(),500)});addEventListener("pagehide",()=>running=false)}

// Extra projects. Birthday Wish Card and Budget Buddy already exist in index.html, so they are not duplicated.
const extraProjects=[
 {n:"16",title:"Eid Fit Check",desc:"A simple Eid-focused outfit and style checking project.",bn:"ঈদ উপলক্ষে পোশাক ও স্টাইল চেক করার একটি প্রজেক্ট।",url:"https://eidfitcheck.netlify.app/",theme:"gradient-fit"},
 {n:"17",title:"Note by Rafi",desc:"A lightweight notes project for writing and organizing personal notes.",bn:"ব্যক্তিগত নোট লেখা ও গুছিয়ে রাখার জন্য তৈরি একটি সহজ নোট অ্যাপ।",url:"https://notebyrafi.netlify.app/",theme:"gradient-docs"},
 {n:"18",title:"Pay Receipt",desc:"A web tool for creating and managing payment receipts.",bn:"পেমেন্ট রসিদ তৈরি ও ব্যবস্থাপনার জন্য একটি ওয়েব টুল।",url:"https://payreceipt.netlify.app/",theme:"gradient-budget"},
 {n:"19",title:"Laksam Upazila Info",desc:"An information-focused website for Laksam Upazila.",bn:"লাকসাম উপজেলা সম্পর্কিত তথ্য সহজে পাওয়ার জন্য তৈরি ওয়েবসাইট।",url:"https://laksamupzilainfo.netlify.app/",theme:"gradient-career"},
 {n:"20",title:"Khilpara",desc:"A dedicated web project for Khilpara and its information.",bn:"খিলপাড়া সম্পর্কিত তথ্য ও বিষয়বস্তু নিয়ে তৈরি ওয়েব প্রজেক্ট।",url:"https://khilpara.netlify.app/",theme:"gradient-islamic"}
];
const projectGrid=document.querySelector(".projects-container");
if(projectGrid&&!document.querySelector("[data-extra-projects]")){
 const fragment=document.createDocumentFragment();
 extraProjects.forEach(p=>{
  const card=document.createElement("article");card.className="project-card";card.setAttribute("data-extra-projects","true");
  card.innerHTML=`<div class="project-image ${p.theme}"><span>${p.n}</span></div><h3>${p.title}</h3><p>${p.desc}</p><p class="project-bn">${p.bn}</p><a class="project-link" href="${p.url}" target="_blank" rel="noopener">View Project ↗</a>`;
  fragment.appendChild(card);
 });
 projectGrid.appendChild(fragment);
}

/* PROJECT WEBSITE PREVIEW COVERS */
(()=>{
 const style=document.createElement('style');
 style.textContent=`
 .project-image.website-preview{position:relative!important;overflow:hidden!important;height:230px!important;min-height:230px!important;background:#0a1018!important;border:1px solid rgba(67,245,160,.12)!important;border-radius:12px!important}
 .project-image.website-preview>span{display:none!important}
 .project-image.website-preview .preview-label{position:absolute;top:9px;left:9px;z-index:4;padding:4px 7px;border:1px solid rgba(67,245,160,.28);border-radius:5px;background:rgba(2,8,12,.82);color:var(--neon,#43f5a0);font:700 8px monospace;letter-spacing:1px}
 .project-image.website-preview img{display:block;width:100%;height:100%;object-fit:cover;object-position:top center;background:#fff;transition:transform .45s ease,filter .3s ease}
 .project-image.website-preview:after{content:'';position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(180deg,transparent 55%,rgba(0,0,0,.18))}
 .project-card:hover .project-image.website-preview img{transform:scale(1.03)}
 @media(max-width:680px){.project-image.website-preview{height:190px!important;min-height:190px!important}}
 `;
 document.head.appendChild(style);
 document.querySelectorAll('#projects .project-card').forEach(card=>{
   const link=card.querySelector('.project-link');
   const image=card.querySelector('.project-image');
   if(!link||!image)return;
   image.classList.add('website-preview');
   const label=document.createElement('div');label.className='preview-label';label.textContent='PROJECT PREVIEW';image.appendChild(label);
   const img=document.createElement('img');
   img.alt=(card.querySelector('h3')?.textContent||'Project')+' website preview';
   img.loading='lazy';
   img.src='https://image.thum.io/get/width/1200/crop/700/noanimate/'+link.href;
   image.appendChild(img);
 });
})();
