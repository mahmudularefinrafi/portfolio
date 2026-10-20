(()=>{
'use strict';
const grid=document.querySelector('#projects .projects-container');
if(!grid)return;
/* Defer screenshot downloads until cards are near the viewport to avoid dozens of simultaneous requests. */
const previewObserver=('IntersectionObserver' in window)?new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  const img=entry.target;
  const src=img.dataset.previewSrc;
  if(src&&!img.hasAttribute('src'))img.src=src;
  previewObserver.unobserve(img);
 });
},{rootMargin:'320px 0px',threshold:0.01}):null;
function deferPreview(img,url){
 const width=window.matchMedia('(max-width: 680px)').matches?800:1100;
 img.dataset.previewSrc='https://image.thum.io/get/width/'+width+'/crop/700/noanimate/'+url;
 if(previewObserver)previewObserver.observe(img);else img.src=img.dataset.previewSrc;
}
const style=document.createElement('style');style.textContent=`
#projects .project-image.live-preview{position:relative!important;height:220px!important;min-height:220px!important;overflow:hidden!important;background:#071018!important;border-radius:14px!important}
#projects .project-image.live-preview img{display:block;width:100%;height:100%;object-fit:cover;object-position:top center;border:0}
#projects .project-image.live-preview .preview-status{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#071018;color:#8ea1b4;font:700 10px monospace;letter-spacing:1px;z-index:1}
#projects .project-image.live-preview.loaded .preview-status{display:none}
#projects .project-image.live-preview.error .preview-status{display:flex}
#projects .project-preview-actions{display:flex;gap:8px;padding:0 20px 18px}
#projects .project-preview-actions a{display:inline-flex;align-items:center;justify-content:center;flex:1;min-height:38px;padding:8px 10px;border-radius:10px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.035);color:#dce4f1;font:700 11px monospace;text-decoration:none;transition:.2s}
#projects .project-preview-actions a:first-child{color:var(--accent,#72b7ff);border-color:rgba(114,183,255,.28)}
#projects .project-preview-actions a:hover{transform:translateY(-2px);background:rgba(114,183,255,.09)}
@media(max-width:680px){#projects .project-image.live-preview{height:185px!important;min-height:185px!important}#projects .project-preview-actions{padding:0 14px 14px}}
`;document.head.appendChild(style);

grid.querySelectorAll('.project-card').forEach(card=>{
 const live=card.querySelector('.project-link');
 const image=card.querySelector('.project-image');
 if(!live||!image)return;
 const url=live.href;
 const title=card.querySelector('h3')?.textContent?.trim()||'Project';
 image.className='project-image live-preview';
 image.innerHTML='<div class="preview-status">LOADING REAL PROJECT PREVIEW...</div>';
 const img=document.createElement('img');
 deferPreview(img,url);
 img.alt=title+' — real website screenshot';
 img.loading='lazy';
 img.decoding='async';
 img.onload=()=>image.classList.add('loaded');
 img.onerror=()=>{
  image.classList.add('error');
  const status=image.querySelector('.preview-status');
  if(status)status.textContent='Preview unavailable — open the live project below';
 };
 image.appendChild(img);
 if(!card.querySelector('.project-preview-actions')){
  const actions=document.createElement('div');
  actions.className='project-preview-actions';
  const liveBtn=document.createElement('a');
  liveBtn.href=url;liveBtn.target='_blank';liveBtn.rel='noopener noreferrer';
  liveBtn.textContent='Open Project ↗';
  const gh=document.createElement('a');
  gh.href=card.dataset.github||'https://github.com/mahmudularefinrafi';
  gh.target='_blank';gh.rel='noopener noreferrer';gh.textContent='GitHub ↗';
  actions.append(liveBtn,gh);
  card.appendChild(actions);
 }
 live.style.display='none';
});

/* BOOKS: real website thumbnails, centered CTA, and whole-card navigation */
const bookGrid=document.querySelector('#books .projects-container');
if(bookGrid){
 const bookStyle=document.createElement('style');
 bookStyle.textContent=`
 #books .project-card{position:relative;display:flex;flex-direction:column;min-height:100%;cursor:pointer;border:1px solid rgba(133,177,255,.24);background:linear-gradient(145deg,rgba(18,29,54,.92),rgba(8,13,27,.94));box-shadow:0 18px 45px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.05);transition:transform .3s,border-color .3s,box-shadow .3s}
 #books .project-card:hover{transform:translateY(-8px);border-color:rgba(100,190,255,.68);box-shadow:0 24px 65px rgba(30,110,220,.17),0 0 0 1px rgba(100,190,255,.12)}
 #books .project-image.book-live-preview{height:250px!important;min-height:250px!important;position:relative;overflow:hidden;background:linear-gradient(135deg,#101d39,#292052)!important;border-bottom:1px solid rgba(150,190,255,.18)}
 #books .project-image.book-live-preview:after{content:' ';position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(3,7,17,.03),rgba(3,7,17,.18))}
 #books .project-image.book-live-preview img{width:100%;height:100%;display:block;object-fit:cover;object-position:top center;transition:transform .6s,filter .6s}
 #books .project-card:hover .project-image.book-live-preview img{transform:scale(1.035);filter:saturate(1.08)}
 #books .project-image.book-live-preview .book-preview-status{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#e7efff;font:700 12px 'Manrope',sans-serif;letter-spacing:2px;background:radial-gradient(circle at 50% 35%,rgba(104,154,255,.24),transparent 48%),linear-gradient(135deg,#101d39,#292052);z-index:1}
 #books .project-image.book-live-preview.book-demo-preview{padding:0!important;background:#07101e!important}
 #books .book-demo-art{position:relative;isolation:isolate;width:100%;height:100%;min-height:220px;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;padding:25px 20px;color:#f6f0df;text-align:center;background:radial-gradient(ellipse at 50% 22%,rgba(203,177,111,.23),transparent 38%),linear-gradient(145deg,#0d2030 0%,#102a36 48%,#07131e 100%);border:1px solid rgba(221,195,130,.32)}
 #books .book-demo-art:before{content:'';position:absolute;inset:12px;border:1px solid rgba(221,195,130,.38);pointer-events:none;z-index:-1}
 #books .book-demo-art:after{content:'';position:absolute;width:180px;height:180px;border:1px solid rgba(221,195,130,.18);border-radius:50%;box-shadow:0 0 0 18px rgba(221,195,130,.035),0 0 0 38px rgba(221,195,130,.025);top:25px;left:50%;transform:translateX(-50%);z-index:-1}
 #books .book-demo-orbit{position:absolute;width:135px;height:135px;top:36px;left:50%;transform:translateX(-50%) rotate(-24deg);border:1px solid rgba(221,195,130,.25);border-radius:50% 50% 45% 55%;z-index:-1}
 #books .book-demo-kicker{font-family:'Hind Siliguri',sans-serif;color:#ddc382;font-size:clamp(11px,1.4vw,14px);letter-spacing:.4px;margin-bottom:10px}
 #books .book-demo-title{font-family:'Noto Serif Bengali','Hind Siliguri',serif;font-size:clamp(26px,3.2vw,39px);font-weight:700;line-height:1.45;text-shadow:0 3px 18px rgba(0,0,0,.35)}
 #books .book-demo-rule{width:60px;height:2px;margin:14px auto;background:linear-gradient(90deg,transparent,#ddc382,transparent)}
 #books .book-demo-subtitle{font-family:'Hind Siliguri',sans-serif;color:#d2d8d4;font-size:clamp(10px,1.15vw,13px)}
 #books .book-demo-footer{font-family:'Hind Siliguri',sans-serif;margin-top:15px;color:#ddc382;font-size:clamp(11px,1.2vw,14px)}
 #books .book-demo-badge{position:absolute;right:18px;top:18px;padding:5px 8px;border:1px solid rgba(221,195,130,.35);border-radius:999px;color:#ddc382;background:rgba(4,13,22,.45);font:700 8px 'Manrope',sans-serif;letter-spacing:1.2px}
 @media(max-width:680px){#books .book-demo-art{padding:22px 18px}#books .book-demo-title{font-size:30px}}

 #books .project-image.book-live-preview .book-preview-status:before{content:'BOOK PREVIEW';font-size:10px;letter-spacing:3px;color:#9edfff;border:1px solid rgba(158,223,255,.4);padding:7px 12px;border-radius:999px;background:rgba(7,14,30,.35)}
 #books .project-image.book-live-preview.loaded .book-preview-status{display:none}
 #books .project-image.book-live-preview.error .book-preview-status{display:flex}
 #books .project-card h3{font-family:'Hind Siliguri','Noto Serif Bengali',serif;font-size:clamp(21px,2vw,25px);line-height:1.5;padding:22px 24px 8px}
 #books .project-card p{padding:0 24px 18px;flex:1;line-height:1.8}
 #books .project-card .project-link{display:flex!important;align-items:center;justify-content:center;gap:8px;width:calc(100% - 48px);min-height:48px;margin:0 24px 24px;padding:12px 18px;border:1px solid rgba(117,190,255,.48);border-radius:14px;background:linear-gradient(135deg,rgba(72,139,255,.19),rgba(129,93,255,.16));color:#f2f7ff;font-weight:800;text-align:center;box-shadow:inset 0 1px 0 rgba(255,255,255,.09),0 8px 24px rgba(30,95,220,.1);transition:background .25s,border-color .25s,transform .25s}
 #books .project-card .project-link:after{content:'↗';font-family:Arial,sans-serif}
 #books .project-card .project-link:hover{transform:translateY(-2px);border-color:rgba(117,210,255,.85);background:linear-gradient(135deg,rgba(72,139,255,.32),rgba(129,93,255,.28))}
 #books .project-card:focus-visible{outline:2px solid #83d7ff;outline-offset:4px}
 @media(max-width:680px){#books .project-image.book-live-preview{height:220px!important;min-height:220px!important}#books .project-card h3{padding:20px 18px 8px}#books .project-card p{padding:0 18px 16px}#books .project-card .project-link{width:calc(100% - 36px);margin:0 18px 18px;min-height:46px}}
 @media(prefers-reduced-motion:reduce){#books .project-card,#books .project-image.book-live-preview img,#books .project-card .project-link{transition:none}}
 `;
 document.head.appendChild(bookStyle);
 bookGrid.querySelectorAll('.project-card').forEach(card=>{
  const link=card.querySelector('.project-link');
  const preview=card.querySelector('.project-image');
  if(!link||!preview)return;
  const url=link.href;
  preview.className='project-image book-live-preview';
  const title=card.querySelector('h3')?.textContent?.trim()||'';
  if(title==='সদ্য দ্বীনের পথে ফেরা'){
   preview.classList.add('book-demo-preview');
   preview.innerHTML='<div class="book-demo-art" aria-label="Demo preview for সদ্য দ্বীনের পথে ফেরা"><div class="book-demo-orbit"></div><div class="book-demo-kicker">একটি নতুন সূচনার গাইডবুক</div><div class="book-demo-title">সদ্য দ্বীনের<br>পথে ফেরা</div><div class="book-demo-rule"></div><div class="book-demo-subtitle">ফিরে আসা • নতুন শুরু • আত্মশুদ্ধি</div><div class="book-demo-footer">মাহমুদুল আরেফিন রাফি</div><span class="book-demo-badge">DEMO PREVIEW</span></div>';
   return;
  }
  preview.innerHTML='<div class="book-preview-status">LOADING PREVIEW</div>';
  const img=document.createElement('img');
  deferPreview(img,url);
  img.alt=(card.querySelector('h3')?.textContent||'Book')+' website preview';
  img.loading='lazy';
  img.onload=()=>preview.classList.add('loaded');
  img.onerror=()=>{preview.classList.add('error');const s=preview.querySelector('.book-preview-status');if(s)s.textContent='WEBSITE PREVIEW UNAVAILABLE';};
  preview.appendChild(img);
  card.setAttribute('role','link');
  card.setAttribute('tabindex','0');
  card.setAttribute('aria-label','Open book: '+(card.querySelector('h3')?.textContent||'Book'));
  card.addEventListener('click',event=>{
   if(event.target.closest('a'))return;
   window.open(url,'_blank','noopener,noreferrer');
  });
  card.addEventListener('keydown',event=>{
   if(event.target!==card)return;
   if(event.key==='Enter'||event.key===' '){event.preventDefault();window.open(url,'_blank','noopener,noreferrer');}
  });
 });
}

})();