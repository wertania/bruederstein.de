const fs = require('fs');
const path = require('path');
const { nanoid } = require('nanoid');

// Generate a GUID (UUID v4)
function generateGuid() {
  return nanoid(8);
}

// Create folder in src/landing with GUID name
function createGuidFolder() {
  const guid = generateGuid();
  const folderPath = path.join('pages', 'landing', guid);
  
  // Create folder
  fs.mkdirSync(folderPath, { recursive: true });
  fs.writeFileSync(path.join(folderPath, 'index.md'), '');
  
  console.log(`Created folder: ${folderPath}`);
  return folderPath;
}

// Execute
createGuidFolder(); 