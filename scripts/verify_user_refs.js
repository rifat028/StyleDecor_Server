const fs = require('fs');
const path = require('path');

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (line.includes('/users') || line.includes('"client"') || line.includes("'client'")) {
          console.log(path.relative(path.join(__dirname, '../../'), fullPath).replace(/\\/g, '/') + ':' + (idx + 1) + ' -> ' + line.trim());
        }
      });
    }
  }
}

scanDir(path.join(__dirname, '../../StyleDecor_Client/src'));
