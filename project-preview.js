/* Interactive Project Preview */
(()=>{
  const grid=document.querySelector('#projects .projects-container');
  if(!grid)return;
  const cards=[...grid.querySelectorAll('.project-card')];
  const css=document.createElement('style');
  css.textContent=`
  #projects .project-card{position:relative;isolation:isolate;overflow:hidden}
  #projects .project-card .project-image.website-preview{position:relative;overflow:hidden;height:230px;min-height:230px;border:1px solid rgba(255,255,255,.1);background:#0a0f16;border-radius:14px;transform:translateZ(0)}
  #projects .project-card .project-image.website-preview:before{content:'';position:absolute;left:0;right:0;top:0;height:30px;z-index:5;background:linear-gradient(180deg,#151d28,#0d141d);border-bottom:1px solid rgba(255,255,255,.08)}
  #projects .project-card .project-image.website-preview:after{content:'•••';position:absolute;left:12px;top:3px;z-index:7;color:#6f8190;font:700 13px/1 monospace;letter-spacing:3px;pointer-events:none}
  #projects .project-card .project-image.website-preview img{position:absolute;left:0;top:30px;width:100%;height:calc(100% - 30px);object-fit:cover;object-position:top center;transition:transform .55s cubic-bezier(.2,.7,.2,1),filter .35s ease;transform-origin:center top}
  #projects .project-card:hover .project-image.website-preview img{transform:scale(1.075);filter:brightness(.68) saturate(1.05)}
  #projects .project-card .preview-label{position:absolute!important;top:7px!important;right:10px!important;left:auto!important;z-index:8!important;padding:4px 7px!important;border:1px solid rgba(67,245,160,.25)!important;border-radius:5px!important;background:rgba(2,7,11,.75)!important;color:#43f5a0!important;font:700 7px monospace!important;letter-spacing:1px!important;display:block!important}
  #projects .project-preview-actions{position:absolute;left:12px;right:12px;bottom:12px;z-index:12;display:flex;gap:8px;opacity:0;transform:translateY(8px);transition:.3s ease}
  #projects .project-card:hover .project-preview-actions{opacity:1;transform:translateY(0)}
  #projects .project-preview-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:38px;padding:8px 12px;border-radius:9px;border:1px solid rgba(255,255,255,.18);background:rgba(5,10,16,.84);backdrop-filter:blur(10px);color:#eaf2f7;font:700 10px 'JetBrains Mono',monospace;transition:.2s;flex:1}
  #projects .project-preview-actions a:first-child{border-color:rgba(67,245,160,.38);color:#43f5a0}
  #projects .project-preview-actions a:hover{transform:translateY(-2px);background:rgba(67,245,160,.11);border-color:#43f5a0}
  #projects .project-card .project-link{display:none}
  @media (hover:none),(pointer:coarse){#projects .project-preview-actions{opacity:1;transform:none;position:relative;left:auto;right:auto;bottom:auto;padding:0 14px 14px}#projects .project-card .project-image.website-preview{height:205px;min-height:205px}#projects .project-card .project-image.website-preview img{transition:transform .3s ease}#projects .project-card:focus-within .project-image.website-preview img{transform:scale(1.04)}}
  @media(max-width:680px){#projects .project-card .project-image.website-preview{height:190px;min-height:190px}#projects .project-preview-actions a{min-height:42px;font-size:9px}}
  `;
  document.head.appendChild(css);
  cards.forEach(card=>{
    const image=card.querySelector('.project-image');
    const live=card.querySelector('.project-link');
    if(!image||!live||image.querySelector('.project-preview-actions'))return;
    const actions=document.createElement('div');
    actions.className='project-preview-actions';
    const liveBtn=document.createElement('a');
    liveBtn.href=live.href; liveBtn.target='_blank'; liveBtn.rel='noopener'; liveBtn.textContent='Live Demo ↗';
    const gh=document.createElement('a');
    gh.href=card.dataset.github||'https://github.com/mahmudularefinrafi'; gh.target='_blank'; gh.rel='noopener'; gh.textContent='GitHub ↗';
    actions.append(liveBtn,gh); image.appendChild(actions);
  });
})();
