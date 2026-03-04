const fs = require('fs');
const filepath = 'c:\\\\My Files\\\\CODING SHIT\\\\porto\\\\porto\\\\src\\\\App.jsx';
let content = fs.readFileSync(filepath, 'utf8');
let lines = content.split('\n');

const navStartIndex = lines.findIndex(l => l.includes('const NAV_LINKS = ['));
const navEndIndex = lines.findIndex((l, idx) => idx > navStartIndex && l.includes('];'));
let navLines = lines.slice(navStartIndex, navEndIndex + 1);
const contactNavIdx = navLines.findIndex(l => l.includes("{ id: 'contact', label: 'CONTACT' }"));

if (contactNavIdx !== -1) {
    const contactLine = navLines.splice(contactNavIdx, 1)[0];
    const portfolioIdx = navLines.findIndex(l => l.includes("{ id: 'portfolio'"));
    navLines.splice(portfolioIdx + 1, 0, contactLine);
    lines.splice(navStartIndex, navEndIndex - navStartIndex + 1, ...navLines);
}

const startContact = lines.findIndex(l => l.includes('{/* Contact Section */}'));
const endContact = lines.findIndex((l, idx) => idx > startContact && l.includes('</section >') && lines[idx - 1] && lines[idx - 1].includes('</footer>') === false);

// Wait, the end of contact section is at line 1555 `      </section >`
// Let's accurately find the end by looking for the section immediately following it or looking at the known line structure.
const contactLines = lines.splice(1394, 162); // 1394 is index of `{/* Contact Section */}`, 162 lines long up to `      </section >`
// Recalculate based on exact text to be safe
const actualStart = lines.findIndex(l => l.includes('{/* Contact Section */}'));
let actualEnd = -1;
for (let i = actualStart; i < lines.length; i++) {
    if (lines[i].includes('</section >') || lines[i].includes('</section>')) {
        actualEnd = i;
        break;
    }
}

if (actualStart !== -1 && actualEnd !== -1) {
    const cLines = lines.splice(actualStart, actualEnd - actualStart + 1);
    const startWritings = lines.findIndex(l => l.includes('{/* Writings Section */}'));
    if (startWritings !== -1) {
        lines.splice(startWritings, 0, ...cLines, '');
    }
}

fs.writeFileSync(filepath, lines.join('\n'));
console.log('Moved Contact section and NAV_LINKS successfully.');
