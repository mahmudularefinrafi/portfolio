/* Interactive project actions */
(()=>{
  const grid=document.querySelector('#projects .projects-container');
  if(!grid)return;
  const style=document.createElement('style');
  style.textContent=`
    #projects .project-card{position:relative;isolation:isolate}
    #projects .project-preview-actions{display:flex;gap:8px;padding:0 20px 18px}
    #projects .project-preview-actions a{display:inline-flex;align-items:center;justify-content:center;flex:1;min-height:38px;padding:8px 10px;border-radius:10px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.035);color:#dce4f1;font:700 11px 'JetBrains Mono',monospace;transition:.2s}
    #projects .project-preview-actions a:first-child{color:var(--accent,#72b7ff);border-color:rgba(114,183,255,.28)}
    #projects .project-preview-actions a:hover{transform:translateY(-2px);background:rgba(114,183,255,.09);border-color:rgba(114,183,255,.55)}
    @media(max-width:680px){#projects .project-preview-actions{padding:0 14px 14px}.project-preview-actions a{min-height:42px}}
  `;
  document.head.appendChild(style);

  grid.querySelectorAll('.project-card').forEach(card=>{
    const live=card.querySelector('.project-link');
    if(!live || card.querySelector('.project-preview-actions'))return;
    const actions=document.createElement('div');
    actions.className='project-preview-actions';
    const liveBtn=document.createElement('a');
    liveBtn.href=live.href; liveBtn.target='_blank'; liveBtn.rel='noopener noreferrer'; liveBtn.textContent='Live Demo ↗';
    const gh=document.createElement('a');
    gh.href=card.dataset.github || 'https://github.com/mahmudularefinrafi'; gh.target='_blank'; gh.rel='noopener noreferrer'; gh.textContent='GitHub ↗';
    actions.append(liveBtn,gh);
    card.appendChild(actions);
    live.style.display='none';
  });
})();
