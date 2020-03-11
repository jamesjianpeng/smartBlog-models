import { IBase } from './base';
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
    text: string;
    value: string;
    createTime: string;
    updateTime: string;
    version: number;
    history: ITag[];
}
