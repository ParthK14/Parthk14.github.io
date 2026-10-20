const mainContent = document.querySelector('#main');
const profileSection = document.querySelector('#about');

for (const sectionId of ['research', 'publications', 'expertise', 'experience', 'teaching']) {
  const section = document.querySelector(`#${sectionId}`);
  if (section && profileSection) mainContent.insertBefore(section, profileSection);
}

const publicationHeading = document.querySelector('#publications .section-heading .eyebrow');
if (publicationHeading) publicationHeading.textContent = '02 / SELECTED PUBLICATIONS';

const profileHeading = document.querySelector('#about .section-heading .eyebrow');
if (profileHeading) profileHeading.textContent = '06 / PROFILE';

const resumeHeading = document.querySelector('#cv .eyebrow');
if (resumeHeading) resumeHeading.textContent = '07 / RÉSUMÉ';

const contactHeading = document.querySelector('#contact > .eyebrow');
if (contactHeading) contactHeading.textContent = '08 / CONTACT';

const educationEntries = document.querySelectorAll('#about .timeline');
const educationDetails = [
  { location: 'Buffalo, New York', score: '3.79', scale: '/4.00' },
  { location: 'India', score: '9.32', scale: '/10.00' }
];

educationEntries.forEach((entry, index) => {
  const currentDetail = entry.querySelector('.muted');
  const detail = educationDetails[index];
  if (!currentDetail || !detail) return;

  currentDetail.className = 'gpa-highlight';
  currentDetail.innerHTML = `<span class="gpa-location">${detail.location}</span><strong><small>GPA</small>${detail.score}<span>${detail.scale}</span></strong>`;
});

const heroIntroduction = document.querySelector('.hero .intro');
if (heroIntroduction) {
  heroIntroduction.innerHTML = 'I’m Parth Khandagale, a <strong>chemical engineer and materials researcher</strong> developing multifunctional nanomaterials for electromagnetic shielding, neutron attenuation, and rare-earth photonics.';
}

const heroEyebrow = document.querySelector('.hero-copy > .eyebrow');
if (heroEyebrow && !document.querySelector('.hero-name')) {
  const heroName = document.createElement('p');
  heroName.className = 'hero-name';
  heroName.textContent = 'PARTH KHANDAGALE';
  heroEyebrow.insertAdjacentElement('afterend', heroName);
}

const fluteDescription = document.querySelector('.flute-copy > p:not(.eyebrow):not(.personal-note)');
if (fluteDescription) {
  fluteDescription.innerHTML = 'Alongside my research, I am a <strong>professional flutist</strong>. Music brings the same patience, precision, and curiosity that I value in the laboratory.';
}

const publicationLinks = [
  {
    title: 'Rare-Earth-Modified Luminescent Two-Dimensional Nanosheets Derived from Oxidized Mo₂CTₓ MXene',
    url: 'https://doi.org/10.1088/2053-1583/ae262f'
  },
  {
    title: 'Linear and Nonlinear Optical Response of Rare-Earth i-MAX Carbides',
    url: 'https://doi.org/10.1021/acsaom.5c00588'
  },
  {
    title: 'Advanced Oxidation-Based Pretreatment of Wastewater for Enhanced Biofuel Production',
    url: 'https://www.routledge.com/Biomass-and-Biofuels-Advanced-Biorefineries-for-Sustainable-Production-and-Distribution/Jose-Bhaskar/p/book/9781032054841'
  },
  {
    title: 'Overview and advances in wastewater treatment plant with focus on pharmaceutical industry wastewaters',
    url: 'https://scholar.google.com/scholar?q=%22Overview+and+advances+in+wastewater+treatment+plant+with+focus+on+pharmaceutical+industry+wastewaters%22'
  }
];

for (const publication of publicationLinks) {
  const heading = [...document.querySelectorAll('#publications h3')]
    .find(item => item.textContent.trim() === publication.title);
  if (!heading || heading.querySelector('a')) continue;

  const link = document.createElement('a');
  link.href = publication.url;
  link.target = '_blank';
  link.rel = 'noopener';
  link.className = 'paper-link';
  link.textContent = publication.title;
  link.setAttribute('aria-label', `${publication.title} — open publication`);
  heading.replaceChildren(link);
}
