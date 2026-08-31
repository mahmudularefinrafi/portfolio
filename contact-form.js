(()=>{
'use strict';
const ENDPOINT='https://script.google.com/macros/s/AKfycbwNGVkI72M47dpo5wFSzrSTXOz9Uhl_tKH3bg4ntPIXg6w4_y48z6R1xIwAoScX0Bsj2g/exec';
const form=document.querySelector('#contactForm');
if(!form)return;
form.addEventListener('submit',async e=>{
 e.preventDefault();
 const button=form.querySelector('[type="submit"]');
 const original=button?button.innerHTML:'';
 if(button){button.disabled=true;button.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Sending...';}
 const payload={name:(form.querySelector('[name="name"]')||{}).value?.trim()||'',phone:(form.querySelector('[name="phone"]')||{}).value?.trim()||'',email:(form.querySelector('[name="email"]')||{}).value?.trim()||'',message:(form.querySelector('[name="message"]')||{}).value?.trim()||''};
 try{
  await fetch(ENDPOINT,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload)});
  form.reset();
  alert('Message sent successfully. Thank you!');
 }catch(err){alert('Could not send the message. Please try again.');}
 finally{if(button){button.disabled=false;button.innerHTML=original;}}
});
})();
