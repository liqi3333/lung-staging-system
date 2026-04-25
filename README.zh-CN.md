<div align="center">
  <h1>肺癌分期系统</h1>
  <p><strong>面向 NSCLC / SCLC 的双语单文件网页工具，支持自动分期、治疗路径提示和随访建议。</strong></p>
  <p><a href="README.md">English</a> | <strong>简体中文</strong></p>
</div>

## 项目简介

这个项目把肺癌分期工具整理成了一个可直接使用的正式版 HTML 成品。

当前正式版特性：

- 中文 / English 一键切换
- NSCLC 与 SCLC 分页面
- 自动生成 T / N / M 与总分期
- 手术 / 放化疗 / 靶向 / 免疫路径提示
- 随访建议面板
- 单文件部署，可直接浏览器打开，也可放到 GitHub Pages

## 临床依据

当前自动分期主逻辑以稳定的 IASLC / AJCC 第8版肺癌 TNM 框架为核心，同时预留后续升级第9版的空间。

页面设计方向还参考了：

- NCCN 2025 NSCLC 更新
- CSCO 2024/2025 肺癌指南更新
- 中华医学会 2025 肺癌临床诊疗指南

## 文件结构

```text
index.html                正式版双语 HTML
README.md                 英文说明
README.zh-CN.md           中文说明
package.json              本地项目元数据
scripts/build-html-release.js
dist-html/                构建后的 HTML 输出目录
```

## 使用方式

直接用浏览器打开：

```bash
open index.html
```

或生成一个构建输出版本：

```bash
npm run build:html
```

## 注意事项

- 本工具用于临床辅助、教学与流程设计。
- 不替代 MDT 讨论、影像判读、病理复核或正式临床决策。
