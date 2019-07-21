import React from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import './menu.css'
import '@/styles/scroll.less';
import LeftMenu from './leftMenu.js'
import Routes from '../../routes/config';
import TopHead from './header.js'
const { Content } = Layout;

const SubMenu = Menu.SubMenu



export default class IndexMenu extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const { auth = { data: {} }, responsive = { data: {} } } = this.props;
        return (
            <Layout className="all-height">
                <LeftMenu collapsed={this.state.collapsed}/>
              <Layout>
                  <TopHead toggle={this.toggle.bind(this)}/>
                <Content style={{
                    margin: '24px 16px', padding: '12px 24px', background: '#fff', minHeight: 280,
                }}
                >
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <Routes auth={auth} />
                </Content>
              </Layout>
            </Layout>
        );
    }
}
