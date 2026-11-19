(()=>{
const nav=document.querySelector('#site .main-nav');
if(nav){nav.innerHTML='<a href="solar-panels.html">Solar panels</a><a href="battery-storage.html">Battery storage</a><a href="finance.html">Finance guide</a><a href="#journey">Our approach</a>';}
const services=document.querySelector('.c-services');
if(services){const panel=document.createElement('section');panel.className='finance-intro';panel.innerHTML='<p class="c-eyebrow">UNDERSTAND YOUR OPTIONS</p><h2>Government-Backed<br>Solar &amp; Battery Finance</h2><p>Explore our guide to the Warm Homes Loan Scheme and its official information.</p><p>ILUVO’s lender arrangements are not yet confirmed. This is general information, not a finance offer.</p><a href="finance.html">Read the finance guide ↗</a>';services.after(panel);}
const targets={'Solar & battery':'solar-panels.html'};
document.querySelectorAll('[data-haven-service]').forEach(b=>{if(targets[b.dataset.havenService]){const a=document.createElement('a');a.href=targets[b.dataset.havenService];a.innerHTML=b.innerHTML;a.className='service-page-link';b.replaceWith(a);}});
if(new URLSearchParams(location.search).get('enquiry')==='solar')enquire('Solar & battery','homeowner');
})();
(()=>{
const nav=document.querySelector('#site .main-nav');if(nav)nav.innerHTML='<a href="solar-panels.html">Solar</a><a href="battery-storage.html">Batteries</a><a href="finance.html">Finance</a><a href="about.html">About</a><a href="contact.html">Discuss your project</a>';
document.title='Solar, battery storage & energy expertise | ILUVO Energy';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.content='Solar PV, battery storage, surveys and project coordination for homes and businesses. Start your energy project with ILUVO.';
const eyebrow=document.querySelector('.haven-copy .c-eyebrow');if(eyebrow)eyebrow.textContent='SOLAR. STORAGE. EXPERTISE.';
const heroCTA=document.querySelector('.haven-copy .c-button');if(heroCTA)heroCTA.onclick=()=>{location.href='contact.html';};
const footer=document.querySelector('#site footer');if(footer){const links=document.createElement('nav');links.setAttribute('aria-label','Website pages');links.innerHTML='<a href="about.html">About ILUVO</a><a href="solar-quote-guide.html">Compare quotes</a><a href="contact.html">Contact</a>';footer.prepend(links);}
})();
