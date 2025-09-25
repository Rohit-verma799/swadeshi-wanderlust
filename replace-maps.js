const fs = require('fs');

// Read the file
const filePath = 'src/data/moredetail.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all Google Maps URLs with OpenStreetMap URLs
content = content.replace(/https:\/\/maps\.google\.com\/\?q=/g, 'https://www.openstreetmap.org/search?query=');

// Write back to file
fs.writeFileSync(filePath, content);

console.log('Successfully replaced Google Maps URLs with OpenStreetMap URLs');