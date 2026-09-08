const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./app', function(filePath) {
  if (filePath.endsWith('.js') && filePath !== path.join('app', 'layout.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Remove imports
    content = content.replace(/^import\s+Header\s+from\s+['"].*Header['"];?\r?\n/gm, '');
    content = content.replace(/^import\s+SiteFooter\s+from\s+['"].*SiteFooter['"];?\r?\n/gm, '');
    
    // Remove tags
    content = content.replace(/<Header\s*\/>\r?\n?/g, '');
    content = content.replace(/<SiteFooter\s*\/>\r?\n?/g, '');
    
    // Remove { /* Header Ribbon */ }
    content = content.replace(/\{\s*\/\*\s*Header Ribbon\s*\*\/\s*\}\r?\n?/g, '');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed ' + filePath);
    }
  }
});
