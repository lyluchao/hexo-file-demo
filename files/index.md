---
title: 文件资源库
layout: page
comments: false
date: 2024-02-06
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<style>
:root {
  --primary: #3498db;
  --secondary: #2ecc71;
  --danger: #e74c3c;
  --warning: #f39c12;
  --dark: #2c3e50;
  --light: #ecf0f1;
}

.file-library {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

.header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.2em;
  opacity: 0.9;
}

.upload-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 30px;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s;
}

.upload-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  text-align: center;
  border-top: 4px solid var(--primary);
}

.stat-card i {
  font-size: 2.5em;
  color: var(--primary);
  margin-bottom: 15px;
}

.stat-number {
  font-size: 2em;
  font-weight: bold;
  color: var(--dark);
}

.stat-label {
  color: #666;
  margin-top: 5px;
}

.controls {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  margin-bottom: 30px;
}

.search-box {
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 16px;
  margin-bottom: 20px;
}

.filters {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 20px;
  background: #f8f9fa;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.file-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
}

.file-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 1px solid #eaeaea;
}

.file-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.file-header {
  padding: 20px;
  background: #f8f9fa;
  text-align: center;
}

.file-icon {
  font-size: 48px;
  color: var(--primary);
}

.file-body {
  padding: 20px;
}

.file-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--dark);
  line-height: 1.4;
}

.file-desc {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
  line-height: 1.5;
}

.file-meta {
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 13px;
  margin-bottom: 15px;
}

.file-footer {
  padding: 15px 20px;
  background: #f8f9fa;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.btn-preview {
  background: var(--primary);
  color: white;
}

.btn-download {
  background: var(--secondary);
  color: white;
}

.btn:hover {
  opacity: 0.9;
  transform: scale(1.05);
}

.no-files {
  text-align: center;
  padding: 50px;
  color: #999;
  font-size: 18px;
  grid-column: 1 / -1;
}

@media (max-width: 768px) {
  .file-grid {
    grid-template-columns: 1fr;
  }
  
  .stats {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="file-library">
  <div class="header">
    <h1><i class="fas fa-archive"></i> 文件资源库</h1>
    <p>这里收集了各种有用的文档、资料和资源文件</p>
    <a href="/hexo-file-demo/files/upload/" class="upload-btn">
      <i class="fas fa-cloud-upload-alt"></i> 上传文件
    </a>
  </div>

  <div class="stats">
    <div class="stat-card">
      <i class="fas fa-file-alt"></i>
      <div class="stat-number" id="total-files">6</div>
      <div class="stat-label">总文件数</div>
    </div>
    <div class="stat-card">
      <i class="fas fa-hdd"></i>
      <div class="stat-number" id="total-size">27.4</div>
      <div class="stat-label">总大小(MB)</div>
    </div>
    <div class="stat-card">
      <i class="fas fa-calendar-alt"></i>
      <div class="stat-number" id="last-update">2024-01-20</div>
      <div class="stat-label">最后更新</div>
    </div>
    <div class="stat-card">
      <i class="fas fa-download"></i>
      <div class="stat-number" id="total-downloads">1006</div>
      <div class="stat-label">总下载次数</div>
    </div>
  </div>

  <div class="controls">
    <input type="text" class="search-box" id="search-input" placeholder="🔍 搜索文件名或描述...">
    
    <div class="filters">
      <button class="filter-btn active" data-category="all">全部文件</button>
      <button class="filter-btn" data-category="pdf">
        <i class="fas fa-file-pdf"></i> PDF文档
      </button>
      <button class="filter-btn" data-category="office">
        <i class="fas fa-file-word"></i> Office文档
      </button>
      <button class="filter-btn" data-category="image">
        <i class="fas fa-file-image"></i> 图片文件
      </button>
      <button class="filter-btn" data-category="archive">
        <i class="fas fa-file-archive"></i> 压缩文件
      </button>
      <button class="filter-btn" data-category="code">
        <i class="fas fa-file-code"></i> 代码文件
      </button>
    </div>
  </div>

  <div class="file-grid" id="file-list">
    <!-- 文件列表会动态加载 -->
    <div class="no-files">
      <i class="fas fa-folder-open" style="font-size: 48px; margin-bottom: 20px;"></i>
      <p>正在加载文件列表...</p>
      <a href="/hexo-file-demo/files/upload/" class="btn btn-primary" style="margin-top: 20px;">
        <i class="fas fa-cloud-upload-alt"></i> 开始上传
      </a>
    </div>
  </div>
</div>

<script>
// 文件数据 - 更新为GitHub Pages路径
const fileData = [
  {
    id: 1,
    name: 'Hexo博客搭建教程.pdf',
    description: '详细的Hexo博客搭建和配置教程，包含主题定制和插件使用',
    category: 'pdf',
    size: '2.3 MB',
    date: '2024-01-20',
    downloads: 245,
    icon: 'fas fa-file-pdf',
    color: '#e74c3c',
    url: '/hexo-file-demo/uploads/documents/hexo-tutorial.pdf',
    preview: 'https://drive.google.com/viewer?url=https://lyluchao.github.io/hexo-file-demo/uploads/documents/hexo-tutorial.pdf'
  },
  {
    id: 2,
    name: '项目需求规格说明书.docx',
    description: '软件开发项目需求文档模板',
    category: 'office',
    size: '1.8 MB',
    date: '2024-01-18',
    downloads: 128,
    icon: 'fas fa-file-word',
    color: '#2b579a',
    url: '/hexo-file-demo/uploads/documents/requirements.docx',
    preview: 'https://view.officeapps.live.com/op/view.aspx?src=https://lyluchao.github.io/hexo-file-demo/uploads/documents/requirements.docx'
  },
  {
    id: 3,
    name: '年度数据分析报告.xlsx',
    description: '2023年度业务数据分析报告',
    category: 'office',
    size: '3.1 MB',
    date: '2024-01-15',
    downloads: 89,
    icon: 'fas fa-file-excel',
    color: '#217346',
    url: '/hexo-file-demo/uploads/documents/analysis.xlsx',
    preview: 'https://view.officeapps.live.com/op/view.aspx?src=https://lyluchao.github.io/hexo-file-demo/uploads/documents/analysis.xlsx'
  },
  {
    id: 4,
    name: '产品发布会演示文稿.pptx',
    description: '新产品发布演示文稿模板',
    category: 'office',
    size: '4.2 MB',
    date: '2024-01-10',
    downloads: 156,
    icon: 'fas fa-file-powerpoint',
    color: '#d24726',
    url: '/hexo-file-demo/uploads/documents/presentation.pptx',
    preview: 'https://view.officeapps.live.com/op/view.aspx?src=https://lyluchao.github.io/hexo-file-demo/uploads/documents/presentation.pptx'
  },
  {
    id: 5,
    name: '项目截图合集.zip',
    description: '项目界面截图和效果图压缩包',
    category: 'archive',
    size: '15.7 MB',
    date: '2024-01-05',
    downloads: 67,
    icon: 'fas fa-file-archive',
    color: '#f39c12',
    url: '/hexo-file-demo/uploads/archives/screenshots.zip'
  },
  {
    id: 6,
    name: 'JavaScript开发指南.md',
    description: 'JavaScript最佳实践和代码规范',
    category: 'code',
    size: '356 KB',
    date: '2024-01-03',
    downloads: 321,
    icon: 'fas fa-file-code',
    color: '#3498db',
    url: '/hexo-file-demo/uploads/code/javascript-guide.md'
  }
];

// 获取文件图标
function getFileIcon(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const icons = {
    pdf: { icon: 'fas fa-file-pdf', color: '#e74c3c' },
    doc: { icon: 'fas fa-file-word', color: '#2b579a' },
    docx: { icon: 'fas fa-file-word', color: '#2b579a' },
    xls: { icon: 'fas fa-file-excel', color: '#217346' },
    xlsx: { icon: 'fas fa-file-excel', color: '#217346' },
    ppt: { icon: 'fas fa-file-powerpoint', color: '#d24726' },
    pptx: { icon: 'fas fa-file-powerpoint', color: '#d24726' },
    jpg: { icon: 'fas fa-file-image', color: '#9b59b6' },
    png: { icon: 'fas fa-file-image', color: '#9b59b6' },
    gif: { icon: 'fas fa-file-image', color: '#9b59b6' },
    zip: { icon: 'fas fa-file-archive', color: '#f39c12' },
    rar: { icon: 'fas fa-file-archive', color: '#f39c12' },
    md: { icon: 'fas fa-file-code', color: '#3498db' },
    txt: { icon: 'fas fa-file-alt', color: '#95a5a6' }
  };
  
  return icons[ext] || { icon: 'fas fa-file', color: '#7f8c8d' };
}

// 渲染文件列表
function renderFileList(files) {
  const container = document.getElementById('file-list');
  
  if (!files || files.length === 0) {
    container.innerHTML = `
      <div class="no-files">
        <i class="fas fa-folder-open" style="font-size: 48px; margin-bottom: 20px;"></i>
        <p>没有找到符合条件的文件</p>
        <button class="btn btn-primary" onclick="clearFilters()" style="margin-top: 20px;">
          <i class="fas fa-times"></i> 清除筛选条件
        </button>
      </div>
    `;
    return;
  }
  
  const html = files.map(file => {
    const fileIcon = file.icon || getFileIcon(file.name).icon;
    const fileColor = file.color || getFileIcon(file.name).color;
    
    return `
      <div class="file-card" data-category="${file.category}">
        <div class="file-header">
          <i class="${fileIcon}" style="font-size: 48px; color: ${fileColor}"></i>
        </div>
        <div class="file-body">
          <h3 class="file-title" title="${file.name}">${file.name}</h3>
          <p class="file-desc">${file.description || '暂无描述'}</p>
          <div class="file-meta">
            <span><i class="fas fa-hdd"></i> ${file.size}</span>
            <span><i class="fas fa-calendar"></i> ${file.date}</span>
            <span><i class="fas fa-download"></i> ${file.downloads || 0}</span>
          </div>
        </div>
        <div class="file-footer">
          ${file.preview ? `
            <a href="${file.preview}" target="_blank" class="btn btn-preview">
              <i class="fas fa-eye"></i> 预览
            </a>
          ` : ''}
          <a href="${file.url}" class="btn btn-download" download="${file.name}">
            <i class="fas fa-download"></i> 下载
          </a>
        </div>
      </div>
    `;
  }).join('');
  
  container.innerHTML = html;
  
  // 更新统计信息
  updateStats(files);
}

// 更新统计信息
function updateStats(files) {
  const totalSize = files.reduce((sum, file) => {
    const size = parseFloat(file.size);
    return sum + (isNaN(size) ? 0 : size);
  }, 0);
  
  const totalDownloads = files.reduce((sum, file) => sum + (file.downloads || 0), 0);
  
  document.getElementById('total-files').textContent = files.length;
  document.getElementById('total-size').textContent = totalSize.toFixed(1);
  document.getElementById('total-downloads').textContent = totalDownloads;
  
  if (files.length > 0) {
    const latestDate = files.reduce((latest, file) => 
      new Date(file.date) > new Date(latest) ? file.date : latest, files[0].date);
    document.getElementById('last-update').textContent = latestDate;
  }
}

// 筛选和搜索
function filterAndSearchFiles() {
  const category = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  
  let filtered = fileData;
  
  // 按分类筛选
  if (category !== 'all') {
    filtered = filtered.filter(file => file.category === category);
  }
  
  // 搜索筛选
  if (searchTerm) {
    filtered = filtered.filter(file => 
      file.name.toLowerCase().includes(searchTerm) || 
      (file.description && file.description.toLowerCase().includes(searchTerm))
    );
  }
  
  return filtered;
}

// 清除筛选条件
function clearFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === 'all') {
      btn.classList.add('active');
    }
  });
  document.getElementById('search-input').value = '';
  renderFileList(fileData);
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  // 初始渲染
  renderFileList(fileData);
  
  // 分类筛选事件
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filtered = filterAndSearchFiles();
      renderFileList(filtered);
    });
  });
  
  // 搜索事件
  document.getElementById('search-input').addEventListener('input', function() {
    const filtered = filterAndSearchFiles();
    renderFileList(filtered);
  });
  
  // 从本地存储加载用户上传的文件
  const userFiles = JSON.parse(localStorage.getItem('user_uploaded_files') || '[]');
  if (userFiles.length > 0) {
    fileData.push(...userFiles);
    renderFileList(fileData);
  }
});

// 模拟文件上传
window.uploadFile = function(file, metadata) {
  return new Promise((resolve) => {
    console.log('模拟上传文件:', file.name, metadata);
    
    // 模拟上传过程
    setTimeout(() => {
      const newFile = {
        id: fileData.length + 1,
        name: metadata.name || file.name,
        description: metadata.description || '用户上传的文件',
        category: metadata.category || 'other',
        size: (file.size / 1024 / 1024).toFixed(1) + ' MB',
        date: new Date().toISOString().split('T')[0],
        downloads: 0,
        icon: getFileIcon(file.name).icon,
        color: getFileIcon(file.name).color,
        url: URL.createObjectURL(file),
        isUserUploaded: true
      };
      
      fileData.unshift(newFile);
      
      // 保存到本地存储
      const userFiles = JSON.parse(localStorage.getItem('user_uploaded_files') || '[]');
      userFiles.unshift({
        ...newFile,
        url: null // 不能保存Blob URL
      });
      localStorage.setItem('user_uploaded_files', JSON.stringify(userFiles.slice(0, 10)));
      
      renderFileList(fileData);
      resolve(newFile);
    }, 1500);
  });
};
</script>
