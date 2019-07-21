/**
 * Created by Administrator on 2019/5/12.
 */
import React from 'react'
import { Layout, Menu, Icon, Dropdown } from 'antd';
import './menu.css'
import avater from '@/assets/imgs/b1.jpg';

const { Header } = Layout;




export default class IndexMenu extends React.Component {
    state = {
        collapsed: false,
    };


    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">1111st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                    2nd menu item
                </Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );
        return (
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.toggle}
                        />
                        <span className="head-img">
                             <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-dropdown-link" href="#">
                                  <img src={avater}/>
                                </a>
                             </Dropdown>
                        </span>
                    </Header>
        );
    }
}
