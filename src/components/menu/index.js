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
var r = 150 / (2* Math.PI);
var far = 300;
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

            // 添加手势
            //添加监听事件
            // document.addEventListener('mousemove', handleMousemove, false);
            document.addEventListener('mouseenter', initMousePosition, false);

            document.addEventListener( 'mousedown', handleMousemove, false );
            // document.addEventListener( 'touchstart', onDocumentTouchStart, false );
            // document.addEventListener( 'touchmove', onDocumentTouchMove, false );
        }
        function initMousePosition(e) {
            mouseX = getMousePos(e || window.event);
        }

        function handleMousemove(e) {

            var e = e || window.event;
            // 获取鼠标x坐标
            var newMouseX = getMousePos(e).x;
            // 若值无效，更新坐标然后返回
            if (Number.isNaN((newMouseX - mouseX) / r)) { mouseX = newMouseX; return; }
            // 更新视角以及坐标位置
            theta += (newMouseX - mouseX) / r;
            mouseX = newMouseX;
            // 更新照相机焦点
            renderCameraLookat();
        }
        function renderCameraLookat() {
            camera.lookAt(new THREE.Vector3(camera.position.x + far * Math.sin(theta), camera.position.y + far * Math.cos(theta), 1));
        }
        function getMousePos(event) {
            var e = event || window.event;
            var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            var x = e.pageX || e.clientX + scrollX;
            var y = e.pageY || e.clientY + scrollY;
            return { 'x': x, 'y': y };
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

            // 正方体
            let geometry = new THREE.CubeGeometry(200, 200, 200);
            let material = new THREE.MeshLambertMaterial({ color: 'yellow' });
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, 0, 0);
            scene.add(mesh);


            // 长方体
            geometry = new THREE.BoxGeometry( 100, 100, 100 );
            material = new THREE.MeshNormalMaterial({color: "red"});
            mesh = new THREE.Mesh( geometry, material );
            mesh.position.set(50, 50, 50);
            scene.add( mesh );

            geometry = new THREE.BoxGeometry( 100, 1100, 100 );
            material = new THREE.MeshNormalMaterial({color: "red"});
            mesh = new THREE.Mesh( geometry, material );
            mesh.position.set(50, 50, 0);
            scene.add( mesh );

            geometry = new THREE.BoxGeometry( 100, 100, 300 );
            material = new THREE.MeshNormalMaterial({color: "red"});
            mesh = new THREE.Mesh( geometry, material );
            mesh.position.set(0, 50, 50);
            scene.add( mesh );
            animation(mesh);
            mesh.rotateX(10)

            // 线
            material = new THREE.LineBasicMaterial( { color: "blue" } );
            geometry = new THREE.Geometry();
            geometry.vertices.push(new THREE.Vector3( -700, 0, 0) );
            geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
            geometry.vertices.push(new THREE.Vector3( 1000, 0, 0) );
            var line = new THREE.Line( geometry, material );
            scene.add( line );
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
            if (mesh && mesh.rotation && mesh.rotation.x !== undefined) {
                console.log('hellooooooo')
                var axis = new THREE.Vector3(0,1,0);//向量axis
                mesh.translateOnAxis(axis,300);//沿着axis轴表示方向平移100
                // mesh.rotation.x += 0.2
            }
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
