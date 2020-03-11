/**
 * @interface 菜单
 * @param icon 菜单小图标
 * @param title 菜单名字
 * @param path 菜单路由
 * @param children 子菜单
 * @param version 版本
 */
export interface IMenu {
    icon?: string;
    title: string;
    path: string;
    children?: IMenu[];
    disabled?: boolean;
    version?: number;
}
