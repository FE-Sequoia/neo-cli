# Neo-CLI
自用项目脚手架，整合项目架构模版，标准化开发流程。

## 安装
```bash
$ npm install -g @neo/cli

# or

$ yarn global add @neo/cli
```

## 使用
```bash
# 创建项目
$ neo create projectName

# 更新脚手架
$ neo upgrade

# 查看项目模板列表
$ neo list

# 查看当前版本
$ neo -V
```

## 提供模版

- devops-iframe：基于 `@neo/bk-magic-vue` 和 `Vue2.x` 的项目框架，适用于 `DevOPs` 微前端架构下的 `iframe` 模式。
- devops-amd：基于 `@neo/bk-magic-vue` 和 `Vue2.x` 的项目框架，适用于 `DevOPs` 微前端架构下的 `AMD` 模式。
- devops-plugin-card：支持 `devops` 卡片插件的项目模板

## 查看帮助
```bash
$ devops -h
```
