---
title: 文件上传
layout: page
comments: false
date: 2024-02-06
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<style>
.upload-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
}

.upload-header {
  text-align: center;
  margin-bottom: 40px;
}

.upload-header h1 {
  color: #2c3e50;
  font-size: 2.5em;
  margin-bottom: 15px;
}

.upload-header p {
  color: #7f8c8d;
  font-size: 1.1em;
}

.upload-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
}

.upload-steps:before {
  content: '';
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  background: #e0e0e0;
  z-index: 1;
}

.step {
  text-align: center;
  position: relative;
  z-index: 2;
  flex: 1;
}

.step-number {
  width: 40px;
  height: 40px;
  background: #ecf0f1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  font-weight: bold;
  color: #95a5a6;
  transition: all 0.3s;
}

.step.active .step-number {
  background: #3498db;
  color: white;
}

.step.completed .step-number {
  background: #2ecc71;
  color: white;
}

.step-title {
  font-size: 14px;
  color: #7f8c8d;
}

.upload-area {
  border: 3px dashed #bdc3c7;
  border-radius: 15px;
  padding: 60px 30px;
  text-align: center;
  background: #f8f9fa;
  margin-bottom: 30px;
  transition: all 0.3s;
  cursor: pointer;
}

.upload-area:hover,
.upload-area.drag-over {
  border-color: #3498db;
  background: #f0f8ff;
}

.upload-icon {
  font-size: 64px;
  color: #bdc3c7;
  margin-bottom: 20px;
  transition: all 0.3s;
}

.upload-area:hover .upload-icon {
  color: #3498db;
}

.upload-area h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.upload-area p {
  color: #7f8c8d;
  margin-bottom: 20px;
}

.upload-btn {
  display: inline-block;
  padding: 12px 30px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.upload-btn:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

.file-preview {
  margin-top: 30px;
}

.file-preview h3 {
  color: #2c3e50;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ecf0f1;
}

.file-list {
  background: white;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
}

.file-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0;
}

.file-item:last-child {
  border-bottom: none;
}

.file-icon {
  font-size: 24px;
  color: #3498db;
  margin-right: 15px;
  width: 40px;
}

.file-info {
  flex: 1;
}

.file-name {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 5px;
}

.file-size {
  color: #7f8c8d;
  font-size: 14px;
}

.file-remove {
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
}

.form-section {
  background: white;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  margin-bottom: 30px;
}

.form-section h3 {
  color: #2c3e50;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid #ecf0f1;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #2c3e50;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.form-actions {
  display: flex;
  gap: 15px;
  justify-content: flex-end;
}

.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #95a5a6;
  color: white;
}

.btn-secondary:hover {
  background: #7f8c8d;
}

.progress-container {
  background: white;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  margin-bottom: 30px;
}

.progress-bar {
  height: 10px;
  background: #ecf0f1;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px 0;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  width: 0%;
  transition: width 0.3s;
  border-radius: 5px;
}

.progress-text {
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 20px;
}

.success-message {
  text-align: center;
  padding: 40px;
}

.success-icon {
  font-size: 64px;
  color: #2ecc71;
  margin-bottom: 20px;
}

.upload-instructions {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  margin-top: 30px;
}

.upload-instructions h4 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.upload-instructions ul {
  list-style: none;
  padding: 0;
}

.upload-instructions li {
  margin-bottom: 10px;
  padding-left: 25px;
  position: relative;
  color: #7f8c8d;
}

.upload-instructions li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #2ecc71;
  font-weight: bold;
}
</style>

<div class="upload-container">
  <div class="upload-header">
    <h1><i class="fas fa-cloud-upload-alt"></i> 文件上传</h1>
    <p>选择您要上传的文件，支持 PDF、Word、Excel、PPT、图片等多种格式</p>
  </div>

  <div class="upload-steps">
    <div class="step active" id="step1">
      <div class="step-number">1</div>
      <div class="step-title">选择文件</div>
    </div>
    <div class="step" id="step2">
      <div class="step-number">2</div>
      <div class="step-title">填写信息</div>
    </div>
    <div class="step" id="step3">
      <div class="step-number">3</div>
      <div class="step-title">完成上传</div>
    </div>
  </div>

  <!-- 步骤1: 选择文件 -->
  <div id="step1-content">
    <div class="upload-area" id="dropArea">
      <div class="upload-icon">
        <i class="fas fa-cloud-upload-alt"></i>
      </div>
      <h3>拖放文件到此处或点击上传</h3>
      <p>支持 PDF, Word, Excel, PPT, 图片, 压缩包等格式</p>
      <p>单个文件最大限制: <strong>50MB</strong></p>
      <input type="file" id="fileInput" multiple hidden>
      <button class="upload-btn" onclick="document.getElementById('fileInput').click()">
        <i class="fas fa-folder-open"></i> 选择文件
      </button>
    </div>

    <div class="file-preview" id="filePreview" style="display: none;">
      <h3>已选择的文件</h3>
      <div class="file-list" id="selectedFiles">
        <!-- 文件列表会动态显示在这里 -->
      </div>
      <div class="form-actions" style="margin-top: 20px;">
        <button class="btn btn-secondary" onclick="clearFiles()">
          <i class="fas fa-times"></i> 清除所有
        </button>
        <button class="btn btn-primary" onclick="nextStep()">
          下一步 <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- 步骤2: 填写信息 -->
  <div id="step2-content" style="display: none;">
    <form id="uploadForm">
      <div class="form-section">
        <h3><i class="fas fa-info-circle"></i> 文件信息</h3>
        
        <div class="form-group">
          <label for="fileName">文件名称 *</label>
          <input type="text" id="fileName" required placeholder="请输入文件名称">
        </div>
        
        <div class="form-group">
          <label for="fileDescription">文件描述</label>
          <textarea id="fileDescription" rows="3" placeholder="请输入文件描述（可选）"></textarea>
        </div>
        
        <div class="form-group">
          <label for="fileCategory">文件分类 *</label>
          <select id="fileCategory" required>
            <option value="">请选择分类</option>
            <option value="pdf">PDF文档</option>
            <option value="office">Office文档</option>
            <option value="image">图片文件</option>
            <option value="archive">压缩文件</option>
            <option value="code">代码文件</option>
            <option value="other">其他文件</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="fileTags">标签（用逗号分隔）</label>
          <input type="text" id="fileTags" placeholder="例如：教程,文档,模板">
        </div>
      </div>
      
      <div class="form-actions">
        <button type="button" class="btn btn-secondary" onclick="prevStep()">
          <i class="fas fa-arrow-left"></i> 上一步
        </button>
        <button type="submit" class="btn btn-primary">
          <i class="fas fa-upload"></i> 开始上传
        </button>
      </div>
    </form>
  </div>

  <!-- 步骤3: 上传进度 -->
  <div id="step3-content" style="display: none;">
    <div class="progress-container" id="uploadProgress">
      <h3><i class="fas fa-sync-alt fa-spin"></i> 正在上传...</h3>
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-text" id="progressText">准备上传文件...</div>
    </div>
    
    <div class="success-message" id="successMessage" style="display: none;">
      <div class="success-icon">
        <i class="fas fa-check-circle"></i>
      </div>
      <h3>上传成功！</h3>
      <p>文件已成功上传到服务器</p>
      <div class="form-actions" style="justify-content: center; margin-top: 30px;">
        <button class="btn btn-primary" onclick="location.href='/hexo-file-demo/files/'">
          <i class="fas fa-archive"></i> 查看文件库
        </button>
        <button class="btn btn-secondary" onclick="location.reload()">
          <i class="fas fa-plus"></i> 继续上传
        </button>
      </div>
    </div>
  </div>

  <div class="upload-instructions">
    <h4><i class="fas fa-lightbulb"></i> 上传说明</h4>
    <ul>
      <li>支持的文件格式：PDF, Word, Excel, PPT, 图片(JPG/PNG/GIF), 压缩包(ZIP/RAR)</li>
      <li>单个文件大小不能超过50MB</li>
      <li>请确保您有上传文件的权限</li>
      <li>请勿上传侵权或非法内容</li>
      <li>文件将存储在 <code>source/uploads</code> 目录中</li>
    </ul>
  </div>
</div>

<script>
let selectedFiles = [];
let currentStep = 1;

// DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
  const fileInput = document.getElementById('fileInput');
  const dropArea = document.getElementById('dropArea');
  
  // 文件选择
  fileInput.addEventListener('change', handleFileSelect);
  
  // 拖放功能
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
  });
  
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
      dropArea.classList.add('drag-over');
    }, false);
  });
  
  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
      dropArea.classList.remove('drag-over');
    }, false);
  });
  
  dropArea.addEventListener('drop', handleDrop, false);
  
  // 表单提交
  document.getElementById('uploadForm').addEventListener('submit', handleUpload);
});

// 处理文件选择
function handleFileSelect(e) {
  const files = Array.from(e.target.files);
  addFiles(files);
}

// 处理拖放
function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = Array.from(dt.files);
  addFiles(files);
}

// 添加文件
function addFiles(files) {
  // 验证文件大小
  const maxSize = 50 * 1024 * 1024; // 50MB
  const validFiles = files.filter(file => {
    if (file.size > maxSize) {
      alert(`文件 "${file.name}" 超过50MB限制，已跳过`);
      return false;
    }
    return true;
  });
  
  if (validFiles.length === 0) return;
  
  selectedFiles.push(...validFiles);
  updateFilePreview();
  
  // 显示预览区域
  document.getElementById('filePreview').style.display = 'block';
  
  // 如果只有一个文件，自动填充文件名
  if (selectedFiles.length === 1) {
    const fileName = selectedFiles[0].name.replace(/\.[^/.]+$/, "");
    document.getElementById('fileName').value = fileName;
  }
}

// 更新文件预览
function updateFilePreview() {
  const container = document.getElementById('selectedFiles');
  
  if (selectedFiles.length === 0) {
    container.innerHTML = '<div class="no-files">请选择文件</div>';
    return;
  }
  
  const html = selectedFiles.map((file, index) => `
    <div class="file-item">
      <div class="file-icon">
        <i class="${getFileIcon(file.name).icon}"></i>
      </div>
      <div class="file-info">
        <div class="file-name">${file.name}</div>
        <div class="file-size">${formatFileSize(file.size)}</div>
      </div>
      <button class="file-remove" onclick="removeFile(${index})">
        <i class="fas fa-times"></i> 移除
      </button>
    </div>
  `).join('');
  
  container.innerHTML = html;
}

// 移除文件
function removeFile(index) {
  selectedFiles.splice(index, 1);
  updateFilePreview();
  
  if (selectedFiles.length === 0) {
    document.getElementById('filePreview').style.display = 'none';
  }
}

// 清除所有文件
function clearFiles() {
  selectedFiles = [];
  document.getElementById('filePreview').style.display = 'none';
  document.getElementById('fileInput').value = '';
}

// 获取文件图标
function getFileIcon(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const icons = {
    pdf: 'fas fa-file-pdf',
    doc: 'fas fa-file-word',
    docx: 'fas fa-file-word',
    xls: 'fas fa-file-excel',
    xlsx: 'fas fa-file-excel',
    ppt: 'fas fa-file-powerpoint',
    pptx: 'fas fa-file-powerpoint',
    jpg: 'fas fa-file-image',
    jpeg: 'fas fa-file-image',
    png: 'fas fa-file-image',
    gif: 'fas fa-file-image',
    zip: 'fas fa-file-archive',
    rar: 'fas fa-file-archive',
    md: 'fas fa-file-code',
    txt: 'fas fa-file-alt'
  };
  
  return { icon: icons[ext] || 'fas fa-file' };
}

// 格式化文件大小
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 步骤导航
function nextStep() {
  if (selectedFiles.length === 0) {
    alert('请先选择文件');
    return;
  }
  
  // 更新步骤指示器
  document.querySelectorAll('.step').forEach(step => {
    step.classList.remove('active');
  });
  
  // 隐藏当前步骤内容
  document.getElementById(`step${currentStep}-content`).style.display = 'none';
  
  // 更新当前步骤
  currentStep++;
  document.getElementById(`step${currentStep}`).classList.add('active');
  document.getElementById(`step${currentStep}-content`).style.display = 'block';
}

function prevStep() {
  // 更新步骤指示器
  document.querySelectorAll('.step').forEach(step => {
    step.classList.remove('active');
  });
  
  // 隐藏当前步骤内容
  document.getElementById(`step${currentStep}-content`).style.display = 'none';
  
  // 更新当前步骤
  currentStep--;
  document.getElementById(`step${currentStep}`).classList.add('active');
  document.getElementById(`step${currentStep}-content`).style.display = 'block';
}

// 处理上传
async function handleUpload(e) {
  e.preventDefault();
  
  // 验证表单
  const fileName = document.getElementById('fileName').value;
  const fileCategory = document.getElementById('fileCategory').value;
  
  if (!fileName || !fileCategory) {
    alert('请填写必填项');
    return;
  }
  
  // 进入上传步骤
  nextStep();
  
  // 显示进度
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  
  // 模拟上传过程
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10 + Math.random() * 15;
    
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      // 模拟上传成功
      setTimeout(async () => {
        // 使用全局上传函数（定义在文件列表页面）
        if (typeof window.uploadFile === 'function') {
          const metadata = {
            name: fileName,
            description: document.getElementById('fileDescription').value,
            category: fileCategory,
            tags: document.getElementById('fileTags').value
          };
          
          await window.uploadFile(selectedFiles[0], metadata);
        }
        
        // 显示成功消息
        document.getElementById('uploadProgress').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        // 更新步骤指示器
        document.getElementById('step3').classList.remove('active');
        document.getElementById('step3').classList.add('completed');
      }, 500);
    }
    
    progressFill.style.width = progress + '%';
    progressText.textContent = `上传中... ${Math.round(progress)}%`;
  }, 200);
}
</script>
