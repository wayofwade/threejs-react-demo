/**
 * Created by Administrator on 2019/5/11.
 */
import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import './menu.css'
import SiderCustom from './SiderCustom.jsx'


const { Sider } = Layout;

const SubMenu = Menu.SubMenu


export default class LeftMenu extends React.Component {
    state = {
    };

    render() {
        console.log('wwww')
        return (
            <SiderCustom  collapsed={this.props.collapsed}/>
/*                <Sider
                    className="all-height"
                    trigger={null}
                    collapsible
                    collapsed={this.props.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>}
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>*/
        );
    }
}
