/**
 * Created by Administrator on 2019/7/28.
 */
/**
 * Created by Administrator on 2019/5/12.
 */
import React from 'react'
import { Layout, Menu, Icon, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import avater from '@/assets/imgs/b1.jpg';

const { Header } = Layout;




export default class IndexMenu extends React.Component {
    state = {
        collapsed: false,
    };

    goWebGL(index) {

    }


    render() {
        return (
            <div style={{paddingLeft: "300px"}}>
                <div style={{maxWidth: "300px"}}>
                <p style={{fontSize: "30px"}}>threejs的demo列表：</p>
                <ul>
                    <Link to="/cube" style={{color:'black'}}>
                        <li onClick={this.goWebGL.bind(this)}>一个正方体（坐标轴）</li>
                    </Link>
                    <Link to="/index" style={{color:'black'}}>
                        <li onClick={this.goWebGL.bind(this)}>乱七八糟的例子----监听鼠标事件</li>
                    </Link>
                    <Link to="/ball" style={{color:'black'}}><li onClick={this.goWebGL.bind(this)}>一个球体</li></Link>
                    <Link to="/moveCube" style={{color:'black'}}><li onClick={this.goWebGL.bind(this)}>移动以及旋转的正方体</li></Link>
                </ul>
                </div>
            </div>
        );
    }
}
