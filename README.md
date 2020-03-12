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
> 首次发布之前需要注意 package.json 的包名，不能使用的名字，vscode 会标黄，强行 publish 会提示 400 ;
> 发布之前需要提交或清除git工作区的内容，并且每次发布都要修改 version

> 1. npm publish  (发布正式版本)
>
> 2. npm publish --tag beta (发布测试版本)
>
> 3. npm publish --tag beta --access=public (发布测试版本)
> 
> 4. npm publish --access=public (发布正式版本)
> 
> 创建了组织，没有付费就要设置 --access=public 才能发布
>
> https://docs.npmjs.com/cli/publish

- tag

> https://docs.npmjs.com/cli/dist-tag

## smartBlog前后端接口
### article
```ts
/**
 * @interface 文章接口
 * @property title 文章标题
 * @property post 文章封面
 * @property content 文章内容
 * @property html 文章内容html
 * @property tag 文章标签
 * @property createTime 文章创建时间 YYYY-MM-DD HH:mm:ss
 * @property updateTime 文章更新时间 YYYY-MM-DD HH:mm:ss
 * @property version 版本
 * @property history 修改历史
 */
export interface IArticle extends IBase {
    title: string
    post: string
    content: string
    html: string
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
 * @property text 标签名字
 * @property value 标签key
 * @property createTime 文章创建时间 YYYY-MM-DD HH:mm:ss
 * @property updateTime 文章更新时间 YYYY-MM-DD HH:mm:ss
 * @property version 版本
 * @property history 修改历史
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
 * @property icon 菜单小图标
 * @property title 菜单名字
 * @property path 菜单路由
 * @property children 子菜单
 * @property version 版本 
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
