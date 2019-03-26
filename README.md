# egg-ts-project

> 用于学习node框架egg.js的项目

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run dev
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

### 关于API接口设计和格式定义规范

  - 项目中接口会尽量使用 `REST` 风格，但是涉及安全和 `REST` 标准尚无较好方案的用户登录，文件上传等，项目中会使用其他接口风格。
  - 后端提供消息码msg为异常信息: `const msg = err.msg`;
  - 中间层和前端协商,在接口文档中给前端提供定义好的 `msg`
  - 中间层调用服务获取数据后,利用 `fractal transformer` 为复杂的数据输出提供样式和转化层.
  - 分页参数均要求为整型,前端需要根据总条数和每页条数,自行计算页码总数
  - 后端提供的返回值格式及说明: 
```
{
  error: 0,
  data: {
    totalItems:,  // 可选: 返回的总条数
  }
}
{
  error: 1,
  msg: 'xxx'
}
```    
  - 中间层提供的返回值格式及说明:
```
{
    code: 1,
    msg: '数据获取成功',
    data: {
        totalItems: 34,  // 可选: 分页接口: 返回的总条数; 默认数为xxx
        perPagenum: 10,  // 可选: 分页接口: 每页显示条数; 默认数为xxx
        data: {}
    }
}
{
    code: 0,
    msg: 'xxx';
}
```
  - 对于分页操作,中间层/前端的的请求参数分别为:
```    
{
    reqItems: 1000, // 请求数量
}
{
    nowPage: 1, // 可选: 请求页面; 默认请求第一页
    perPagenum: 10  // 可选: 每页显示条数: 特殊情况下才允许前端自定义这个参数,需要前端记录文档!
}
```

### 尚未完成

- REST API中对uuid的检测
- 控制器方法中对uuid和参数的封装注入,Request $request
- 


> 开发历程

#### 2018-7-24 项目初始化，使用ESLint规范代码
    - GET / 返回hello world，用于测试应用是否启动，外网能否访问
    - resource /users 返回对应字符串，用于测试restful api
    - 单元测试和代码测试覆盖率的使用`npm run test/cov`

#### 2018-8-1 使用Redis完成JWT权限认证
    - 添加ioredis库，完成redis取代session进行权限认证数据缓存
    - 完善单元测试相关代码
    - 实现users实体的Router-Controller-Service流程
    
#### 2018-8-4 添加egg-validate库进行前端参数校验
    - 添加joi库进行参数校验，配置添加验证码接口，三次登陆失败则要求输入验证码
    - 添加articles实体的RESTFul接口，并实现Router-Controller-Service流程
