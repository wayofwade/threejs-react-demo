/**
 * Created by Administrator on 2019/7/28.
 */
import React from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import './menu.css'
import * as THREE  from 'three';
const { Content } = Layout;

const SubMenu = Menu.SubMenu
let renderer,width,height;
let camera;
let scene;
let light;
var theta = 0;
var mouseX = 0;
var r = 1000 / (2* Math.PI);
var far = 2000;
export default class IndexMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    initThree(){
        threeStart();


        function init() {
            width = window.innerWidth;
            height = window.innerHeight;
            renderer = new THREE.WebGLRenderer({
                antialias: true
            });
            renderer.setSize(width, height);
            document.getElementById('canvas-frame').appendChild(renderer.domElement);
            renderer.setClearColor("whitesmoke", 1.0); // 背景颜色

        }


        function initCamera() {
            camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
            camera.position.set(500,400,400)
            camera.up.set(0,1,0);
            camera.lookAt(0,0,0);
        }


        function initScene() {
            scene = new THREE.Scene();
        }


        /**
         * 灯光颜色
         */
        function initLight() {
            light = new THREE.AmbientLight('lightblue');
            light.position.set(300, 300, 0);
            scene.add(light);
        }

        /**
         * 对象颜色
         */
        function initObject() {
            var axisHelper=new THREE.AxisHelper( 360 );//每个轴的长度
            scene.add(axisHelper);

            // 正方体
            let geometry = new THREE.CubeGeometry(200, 200, 200);
            let material = new THREE.MeshLambertMaterial({ color: 'yellow' });
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, 0, 0);
            scene.add(mesh);


            // 长方体
            geometry = new THREE.BoxGeometry( 100, 100, 200 );
            material = new THREE.MeshNormalMaterial({color: "red"});
            mesh = new THREE.Mesh( geometry, material );
            mesh.position.set(250, 50, 50);
            scene.add( mesh );


            animation(mesh);
            mesh.rotateX(10)

        }

        function threeStart() {
            init();
            initCamera(); // 摄像头
            initScene(); // 场景或者舞台
            initLight(); // 灯光
            initObject(); // 往场景里放对象


        }
        // 旋转
        function animation(mesh) {
            renderer.render(scene, camera);
            console.log(mesh.rotation)
            requestAnimationFrame(animation);
        }
    }

    /**
     * 开始Three
     *
     * @memberof ThreeBim
     */
    componentDidMount(){
        this.initThree();
    }
    render() {
        return (
            <div id='canvas-frame'>
            </div>
        );
    }
}
