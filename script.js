const techniques=[
['XRD','X-ray diffraction','structure','Crystal structure, phase identification, and interlayer spacing.'],
['XPS','X-ray photoelectron spectroscopy','structure','Surface elemental composition and chemical states.'],
['Raman','Raman spectroscopy','structure','Vibrational signatures and structural characteristics.'],
['FTIR','Fourier-transform infrared spectroscopy','structure','Functional groups and chemical bonding signatures.'],
['XRF','X-ray fluorescence','structure','Elemental composition through characteristic X-ray emission.'],
['SEM–EDS','Scanning electron microscopy & energy-dispersive spectroscopy','imaging','Surface morphology alongside elemental analysis and mapping.'],
['TEM','Transmission electron microscopy','imaging','Nanoscale morphology and internal material structure.'],
['AFM','Atomic force microscopy','imaging','Surface topography, roughness, and nanosheet thickness.'],
['TGA','Thermogravimetric analysis','properties','Mass changes and thermal stability during controlled heating.'],
['DSC','Differential scanning calorimetry','properties','Heat-flow behavior and thermal transitions.'],
['BET','BET surface-area analysis','properties','Specific surface area from gas adsorption measurements.'],
['PPMS','Physical Property Measurement System','properties','Temperature- and field-dependent physical property measurements.'],
['UV–Vis','UV–visible spectroscopy','properties','Optical absorption and transmission behavior.'],
['DCS','Differential centrifugal sedimentation','properties','Particle-size characterization; documented earlier project and literature-based experience.']
];
// The current résumé lists 13 grouped entries (SEM–EDS is one combined entry).
// DCS is separately documented in the extended CV.
const grid=document.querySelector('#tech-grid');
for(const [abbr,name,category,desc] of techniques){const card=document.createElement('article');card.className='tech-card';card.dataset.category=category;const strong=document.createElement('strong');strong.textContent=abbr;const h=document.createElement('h3');h.textContent=name;const p=document.createElement('p');p.textContent=desc;card.append(strong,h,p);grid.append(card)}
let filter='all';const search=document.querySelector('#tech-search');
function update(){const term=search.value.toLowerCase().trim();let count=0;grid.querySelectorAll('article').forEach(card=>{const show=(filter==='all'||card.dataset.category===filter)&&card.textContent.toLowerCase().includes(term);card.hidden=!show;if(show)count++});document.querySelector('#tech-count').textContent=count+' technique'+(count===1?'':'s');document.querySelector('#empty').hidden=count!==0}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected))});update()}));search.addEventListener('input',update);update();
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus()}});document.querySelector('#year').textContent=new Date().getFullYear();
