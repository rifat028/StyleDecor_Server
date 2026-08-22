const fs = require('fs');
const path = require('path');

const endpoints = [];

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
        const match = line.match(/(axiosSecure|axios)\.(get|post|patch|put|delete)\(([`'"][^`'"]+[`'"])/);
        if (match) {
          endpoints.push({
            file: path.relative(path.join(__dirname, '../../'), fullPath).replace(/\\/g, '/'),
            line: idx + 1,
            method: match[2].toUpperCase(),
            endpoint: match[3]
          });
        }
      });
    }
  }
}

scanDir(path.join(__dirname, '../../StyleDecor_Client/src'));
console.log(JSON.stringify(endpoints, null, 2));
