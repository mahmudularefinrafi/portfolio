(()=>{
'use strict';
const grid=document.querySelector('#projects .projects-container');
if(!grid)return;
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
@media(max-width:680px){#projects .project-image.live-preview{height:190px!important;min-height:190px!important}#projects .project-preview-actions{padding:0 14px 14px}}
`;document.head.appendChild(style);

grid.querySelectorAll('.project-card').forEach(card=>{
 const live=card.querySelector('.project-link');const image=card.querySelector('.project-image');
 if(!live||!image)return;
 const url=live.href;
 image.className='project-image live-preview';
 image.innerHTML='<div class="preview-status">LOADING PROJECT PREVIEW...</div>';
 const img=document.createElement('img');
 // thum.io accepts the target URL directly. Do not encode the whole URL.
 img.src='https://image.thum.io/get/width/1200/crop/700/noanimate/'+url;
 img.alt=(card.querySelector('h3')?.textContent||'Project')+' interface preview';
 img.loading='lazy';
 img.onload=()=>image.classList.add('loaded');
 img.onerror=()=>{image.classList.add('error');const s=image.querySelector('.preview-status');if(s)s.textContent='PREVIEW UNAVAILABLE'};
 image.appendChild(img);
 if(!card.querySelector('.project-preview-actions')){
  const actions=document.createElement('div');actions.className='project-preview-actions';
  const liveBtn=document.createElement('a');liveBtn.href=url;liveBtn.target='_blank';liveBtn.rel='noopener noreferrer';liveBtn.textContent='Open Project ↗';
  const gh=document.createElement('a');gh.href=card.dataset.github||'https://github.com/mahmudularefinrafi';gh.target='_blank';gh.rel='noopener noreferrer';gh.textContent='GitHub ↗';
  actions.append(liveBtn,gh);card.appendChild(actions);
 }
 live.style.display='none';
});
})();