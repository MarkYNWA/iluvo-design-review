(()=>{
const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('#page-nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');toggle.focus();}});
nav?.querySelectorAll('a').forEach(a=>{if(new URL(a.href).pathname===location.pathname)a.setAttribute('aria-current','page');});
const form=document.querySelector('#project-form');if(!form)return;
const params=new URLSearchParams(location.search);
for(const name of ['route']){const control=form.elements.namedItem(name),value=params.get(name);if([...control.options].some(o=>o.value===value))control.value=value;}
const route=form.elements.route,business=document.querySelector('#business-fields');
const sync=()=>{const show=route.value!=='homeowner';business.hidden=!show;business.querySelectorAll('input').forEach(i=>{i.disabled=!show;i.required=show;});};route.addEventListener('change',sync);sync();
const postcode=form.elements.postcode;postcode.addEventListener('input',()=>postcode.setCustomValidity(''));
form.addEventListener('submit',e=>{e.preventDefault();const value=postcode.value.trim().toUpperCase().replace(/\s+/g,'');if(!/^(GIR0AA|[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2})$/.test(value)){postcode.setCustomValidity('Enter a UK postcode, for example CW1 2AA.');postcode.reportValidity();return;}postcode.value=value.slice(0,-3)+' '+value.slice(-3);const feedback=document.querySelector('#form-feedback');feedback.textContent='Preview complete — nothing has been sent or saved. On the launched website, ILUVO would review your location and project before confirming availability and next steps.';feedback.focus();});
})();
