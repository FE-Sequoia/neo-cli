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

- wx-cloud-uniapp：基于 `uni-app` 和 `uView-ui` 的项目框架，适用于uni-app生态下的微信小程序云开发项目模版。
- uni-app-uview：基于 `uni-app` 和 `uView-ui` 的项目框架，适用于uni-app生态下的产品开发(小程序、H5、App等)。
- node-express-5.x：基于 `Express5`的后端Restful风格接口开发等项目框架，适用于各种Nodejs接口开发项目。

## 查看帮助
```bash
$ neo -h
```
