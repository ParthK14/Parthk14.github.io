# Parth Khandagale — personal academic website

Ready for https://parthk14.github.io/. No installation, build tools, or paid services required.

## Publish on your existing GitHub Pages site

1. Extract the ZIP on your computer. Open the extracted folder.
2. Visit https://github.com/Parthk14/Parthk14.github.io and select the Code tab.
3. Select Add file → Upload files.
4. Drag the CONTENTS of the extracted folder into GitHub, including index.html, styles.css, script.js, assets, scholar, and orcid. Do not upload the ZIP or place these inside an extra parth-website folder. The assets folder includes your photo and the compact CV PDF.
5. Commit to main. If GitHub asks to replace existing scholar/index.html and orcid/index.html, these files contain the intended profile redirects.
6. Keep Settings → Pages set to Deploy from a branch, main, / (root).
7. Wait for the Pages deployment to finish under Actions, then open https://parthk14.github.io/. Refresh if you see a cached version.

Your repository root should contain:
- index.html
- styles.css
- script.js
- 404.html
- assets/ (photo, favicon, compact CV)
- scholar/index.html
- orcid/index.html
- .nojekyll (optional when uploading via the website; included for static publishing)

If GitHub does not allow overwriting a file through Upload files, open the existing file, choose Edit, paste the matching file contents from this package, and commit. The website homepage is root index.html; the Scholar redirect belongs in scholar/index.html.

## Preview locally
Open index.html in your browser. The navigation, filters, photo and PDF links use local files. No web server is needed. The short redirect URLs work once published.

## Updating the site
- Edit index.html for biography, research, experience, publications and links.
- Edit script.js to add or change characterization techniques.
- Edit styles.css to adjust colors and layout.
- Replace assets/Parth-Khandagale-Research-Resume.pdf with your updated compact CV using the same filename to keep links working.
- Replace assets/parth-khandagale.png to update the portrait.

## Content and source notes
Content is based on the two supplied PDFs, portrait, supplied profile links, and Swihart Lab people page. The newer research résumé is used for doctoral projects and recent publications. Only the compact CV is included as a downloadable file; the older CV was used for background information. Research metrics are attributed to the supplied résumé; they are not universal material-performance guarantees. Publication entries do not invent author lists, DOIs or links. Earlier CV entries marked under review have not been presented as published. DCS is separately described as earlier project/literature-based experience.

The site uses the institutional email on the résumé and lab profile. The downloadable compact CV is the original and contains the contact details you supplied. This package includes no analytics, cookies, trackers, external fonts or contact form backend. External profile links open new tabs. The materials graphic is a conceptual CSS illustration, not microscopy or measured data.

## Experience coverage
The dedicated Experience section expands eight documented roles: current doctoral research, the master’s thesis project, Vesuvius–Foseco India, Amogh Chemicals, Snowtech Equipment, the Institute of Chemical Technology research internship, Godrej Industries, and Approcopp Engineering. Entries separate role, organization, dates, location, responsibilities, technical focus, and reported outcomes. Where the supplied materials only gave a year rather than exact months, the website preserves that level of precision.

The Selected Publications section leads with the 2026 *Small* article “Comparative Study of Five Distinct Etching Strategies to Synthesize 2D (Mo2/3Nd1/3)2CTx i-MXene From (Mo2/3Nd1/3)2AlC i-MAX Phase” and links directly to DOI 10.1002/smll.76060.

## Validation
Checked HTML parsing, local asset references and anchor IDs, JavaScript syntax, both redirect destinations, and ZIP integrity. Interactive browser/visual QA was not available in the build environment; open index.html locally before uploading to review the layout on your device.
