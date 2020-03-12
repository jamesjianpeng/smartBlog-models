import { IBase } from './base'
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
 * @property state 文章状态
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
    state: 'doing' | 'file' | 'discard' | string
    history: IArticle[]
}
