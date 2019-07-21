/**
 * Created by Administrator on 2019/5/12.
 */
import React from 'react'
import { Layout, Menu } from 'antd';
import './menu.css'



export default class IndexMenu extends React.Component {
    state = {
    };


    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">2221st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                    2nd menu item
                </Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );
        return (
            <div>Content</div>
        );
    }
}
