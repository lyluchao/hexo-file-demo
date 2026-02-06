const fs = require('fs');
const path = require('path');

hexo.extend.generator.register('file-list', function(locals) {
  const uploadsDir = path.join(hexo.source_dir, 'source/uploads');
  const files = [];

  function scanDir(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else {
        const ext = path.extname(item).toLowerCase();
        const type = getFileType(ext);
        files.push({
          name: item,
          type: type,
          size: formatFileSize(stat.size),
          date: stat.mtime.toISOString().split('T')[0],
          url: fullPath.replace(hexo.source_dir, '').replace(/\\/g, '/')
        });
      }
    });
  }

  if (fs.existsSync(uploadsDir)) {
    scanDir(uploadsDir);
  }

  return {
    path: 'files.json',
    data: JSON.stringify(files)
  };
});

function getFileType(ext) {
  const map = {
    '.pdf': 'pdf',
    '.doc': 'doc',
    '.docx': 'doc',
    '.xls': 'xls',
    '.xlsx': 'xls',
    '.ppt': 'ppt',
    '.pptx': 'ppt',
    '.jpg': 'image',
    '.jpeg': 'image',
    '.png': 'image',
    '.gif': 'image'
  };
  return map[ext] || 'other';
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}