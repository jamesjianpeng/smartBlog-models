/**
 * @interface 菜单
 * @property icon 菜单小图标
 * @property title 菜单名字
 * @property path 菜单路由
 * @property children 子菜单
 * @property version 版本
 */
export interface IMenu {
    icon?: string;
    title: string;
    path: string;
    children?: IMenu[];
    disabled?: boolean;
    version?: number;
}
