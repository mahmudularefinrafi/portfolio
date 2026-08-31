/* Compatibility file for the terminal-mode feature. */
(()=>{
  const body=document.body;
  if(!body)return;
  // Keep this script safe when the optional terminal UI is not present.
  document.querySelectorAll('[data-terminal-theme]').forEach(el=>el.addEventListener('click',()=>body.classList.toggle('terminal-mode')));
})();
