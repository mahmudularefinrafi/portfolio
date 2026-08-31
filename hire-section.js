/* Optional hire section hook. Safe when the section is not enabled. */
(()=>{
  const section=document.querySelector('#hire');
  if(!section)return;
  section.querySelectorAll('a[href^="mailto:"]').forEach(a=>a.setAttribute('rel','noopener'));
})();
