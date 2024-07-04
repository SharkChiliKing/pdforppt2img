# pdf-ppt2image

## 安装必要依赖

- sudo yum install poppler-utils 安装 poppler 插件
- sudo apt install libreoffice-dev（libreoffice） 安装（libreoffice 软件）
- sudo apt install imagemagick （imagemagick ） 安装（imagemagick ）

## 使用

```javascript
// 引入
const { pptx2pdf, pdf2png } = require("../../misc/conver");
```

### pptx2pdf

```javascript
const result = await pptx2pdf(enterPath, outputPath, type);
// enterPath         需要转换的文件路径
// outputPath        输入文件的路径
// type              转换格式


// 成功结果示例
{
    success: true,
    message: "File created successfully",
}
```

### pdf2png 

```javascript
const result = await pdf2png(
  newFileNameBase, // 转换后的文件名
  enterPath,       // 需要转换的文件路径
  outputPath,      // 导出路径
  type,            // 文件格式 （默认 png）
  ratio,           // 分辨率（默认 100）
  quality          // 质量（默认 50）
);


// 成功结果示例
{
    success: true,
    message: 'File created successfully',
    name : newFileNameBase,
}
```
