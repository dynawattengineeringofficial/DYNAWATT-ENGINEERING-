const fs = require('fs');
const path = require('path');

const filesToUpdate = ['App.tsx', ...fs.readdirSync('components').filter(f => f.endsWith('.tsx')).map(f => path.join('components', f))];

const replacements = [
  ['smart_home_switches.png', 'smart_home_switches.webp'],
  ['electrical-engineering-kampala.jpg', 'electrical-engineering-kampala.webp'],
  ['exterior-architectural-lighting-kitukutwe.jpg', 'exterior-architectural-lighting-kitukutwe.webp'],
  ['luxury-staircase-lighting.jpg', 'luxury-staircase-lighting.webp'],
  ['staircase-profile-lighting.jpg', 'staircase-profile-lighting.webp'],
  ['hybrid-solar-installation-kira-wakiso.jpg', 'hybrid-solar-installation-kira-wakiso.webp'],
  ['dynawatt-engineering-logo.png', 'dynawatt-engineering-logo.webp'],
  ['ceiling-linear-lighting.jpg', 'ceiling-linear-lighting.webp']
];

filesToUpdate.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  replacements.forEach(([oldStr, newStr]) => {
    content = content.split(oldStr).join(newStr);
  });
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
