(()=>{
const option=Math.max(1,Math.min(10,Number(new URLSearchParams(location.search).get('idea'))||5));document.body.classList.add('hero-ideas','left-idea-'+option);
const brand=document.querySelector('#site .brand');const mark=brand.querySelector('svg').outerHTML;
brand.innerHTML=`<span class="idea-lockup">${mark}<span class="idea-name">iluvo<span class="idea-energy">ENERGY</span></span><span class="idea-tagline">Aid <i>|</i> Assist <i>|</i> Enable</span></span>`;
if([1,2,3,6,7,8].includes(option)){brand.querySelector('.idea-energy').remove();brand.setAttribute('aria-label','ILUVO — Aid, Assist, Enable');}
if(option===5)brand.querySelector('.idea-tagline').innerHTML='<span>Aid</span><i aria-hidden="true">|</i><span>Assist</span><i aria-hidden="true">|</i><span>Enable</span>';
if(option===7)brand.querySelector('.idea-name').firstChild.textContent='ILUVO';
brand.querySelector('.refined-symbol').setAttribute('viewBox','8 8 84 84');
const selectedBrand=brand.innerHTML;document.querySelector('#custom-preset').addEventListener('change',()=>{brand.innerHTML=selectedBrand});
document.querySelector('.haven-copy .commercial-enquiry').remove();
const original=document.querySelector('.haven-copy .c-button'),cta=original.cloneNode(false);cta.textContent='Discuss your project';original.replaceWith(cta);
const chooser=document.createElement('dialog');chooser.className='project-chooser';chooser.setAttribute('aria-labelledby','project-choice-title');chooser.innerHTML=`<button class="choice-close" aria-label="Close project choices">×</button><h2 id="project-choice-title">Tell us where to start.</h2><p>Choose the enquiry that fits your project.</p><button data-choice="homeowner"><strong>For your home</strong><span>Solar, batteries, heating and efficiency.</span></button><button data-choice="commercial"><strong>For your business</strong><span>Commercial sites, portfolios and project briefs.</span></button>`;document.body.append(chooser);cta.onclick=()=>chooser.showModal();chooser.querySelector('.choice-close').onclick=()=>chooser.close();chooser.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{chooser.close();enquire(b.dataset.choice==='commercial'?'Commercial project':'Solar & battery',b.dataset.choice)});
})();