# ECHI_EGG_TS

> 用于学习node框架egg.js的项目

### 本地开发

```bash
$ yarn install
# 或 npm i
$ yarn dev
# 或 npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


### Commit 提交规范

> 根据 angular 规范提交 commit， 这样 history 看起来更加清晰，还可以自动生成 changelog。

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### 数据库设计相关文档

  - 对于大多数有价值的数据删除,大多数使用 `soft dalete`,实现方式参考 `Laravel`

### 数据库配置

> 以下操作推荐使用 [navicat](https://www.navicat.com/en/products)

修改config/config.default.ts文件，并添加

```js
  // 配置数据库
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'echidb',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '你数据库设置的密码',
  };
```

```bash
mysql -u root -p  # 登录
CREATE DATABASE IF NOT EXISTS `echidb`; # 创建数据库, 注意后面的分号
```


> 开发历程

#### 2019-3-18 项目初始化，使用TSLint规范代码
  - 使用egg框架搭建Typescript基础工程
  - 创建项目实例代码,生成基础的文件
  - 添加数据库配置,引入`egg-sequelize`,`mysql2`作为数据库创建基础模型
  - 新增用户表

#### 2019-3-20 添加表单校验
  - 创建用户注册模块
  - 引入`egg-validate-plus`作为表单校验插件
  - 引入`bcryptjs`作为表单数据加密插件

#### 2019-3-27 记录一次坑
  - 添加AOuth2.0
  - 移除AOuth2.0

#### 2019-3-31 新增课程表模型
  - 新增课程表
  - 新增创建课程表模块
  - 新增获取课程表模块

