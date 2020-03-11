import { IBase } from './base';
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
    title: string;
    post: string;
    content: string;
    tag: string[];
    createTime: string;
    updateTime: string;
    version: number;
    history: IArticle[];
}
