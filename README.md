# smartBlog models
- [npm](#npm)
- [smartBlog 前后端接口](#smartBlog前后端接口)
  - [article](#article)
  - [tag](#tag)
  - [menu](#menu)


## npm
- npm login （只需要登录一次）
> 1. 登录的时候需要使用源地址: ``` npm login --registry http://registry.npmjs.org ```  否则会提示 409

- version
> 1. npm version patch （上升一个小版本：0.0.1 -> 0.0.2）

> 2. 可以直接修改 package.json 中的 version 不需要使用 npm version patch 

- publish
> 首次发布之前需要注意 package.json 的包名，不能使用的名字，vscode 会标黄，强行 publish 会提示 400 
> 发布之前需要提交或清除git工作区的内容，并且每次发布都要修改 version
> 1. npm publish  (发布正式版本)
> 2. npm publish --[tag] beta (发布测试版本)

## smartBlog前后端接口
### article
```ts
/**
 * @interface 文章接口
 * @param title 文章标题
 * @param post 文章封面
 * @param content 文章内容
 * @param tag 文章标签
 * @param createTime 文章创建时间 YYYY-MM-DD HH:mm:ss
 * @param updateTime 文章更新时间 YYYY-MM-DD HH:mm:ss
 * @param version 版本
 * @param history 修改历史
 */
export interface IArticle extends IBase {
    title: string
    post: string
    content: string
    tag: string[]
    createTime: string
    updateTime: string
    version: number
    history: IArticle[]
}
```

### tag
```ts
/**
 * @interface 标签
 * @param text 标签名字
 * @param value 标签key
 * @param createTime 文章创建时间 YYYY-MM-DD HH:mm:ss
 * @param updateTime 文章更新时间 YYYY-MM-DD HH:mm:ss
 * @param version 版本
 * @param history 修改历史
 */
export interface ITag extends IBase {
    text: string
    value: string
    createTime: string
    updateTime: string
    version: number
    history: ITag[]
}
```

### menu
```ts
/**
 * @interface 菜单
 * @param icon 菜单小图标
 * @param title 菜单名字
 * @param path 菜单路由
 * @param children 子菜单
 * @param version 版本 
 */
export interface IMenu {
    icon?: string
    title: string
    path: string
    children?: IMenu[]
    disabled?: boolean
    version?: number
}
```