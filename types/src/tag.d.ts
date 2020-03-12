import { IBase } from './base';
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
    text: string;
    value: string;
    createTime: string;
    updateTime: string;
    version: number;
    history: ITag[];
}
