/**
 * Created by Administrator on 2019/7/28.
 */
import React from 'react'
import * as THREE  from 'three';

let renderer,width,height;
let camera;
let scene;
let light;
export default class IndexMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    initThree(){
        threeStart(); // 开始初始化
        function threeStart() {
            init(); // 背景
            initCamera(); // 摄像头
            initScene(); // 场景或者舞台
            initLight(); // 灯光
            initObject(); // 往场景里放对象
        }

        function init() { // 初始化背景-占用的div大小
            width = window.innerWidth - 100;
            height = window.innerHeight - 100;
            renderer = new THREE.WebGLRenderer({
                antialias: true
            });
            renderer.setSize(width, height);
            document.getElementById('canvas-frame').appendChild(renderer.domElement);
            renderer.setClearColor("whitesmoke", 1.0); // 背景颜色

        }


        function initCamera() { // 相机的位置的角度
            camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
            camera.position.set(500,400,400)
            camera.up.set(0,1,0);
            camera.lookAt(0,0,0);
        }


        function initScene() { // 初始化舞台
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
            let material = new THREE.MeshLambertMaterial({ color: 'lightblue' });
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, 0, 0);
            scene.add(mesh);


            animation(mesh);
            setInterval(() => {
                // mesh.rotateX(10)
                mesh.rotateY(10)
                move(mesh)
            }, 500)

        }



        // 旋转
        function animation(mesh) {
            renderer.render(scene, camera);
            requestAnimationFrame(animation);
        }

        function move(mesh){ // 移动
            console.warn(mesh.position.x)
            const X = mesh.position.x
            if (X >= 300) {
                mesh.position.x = -200
            }
            if (X < 300 && X >= 0) {
                mesh.position.x += 20
            }
            renderer.render(scene, camera);
            console.log(mesh.rotation)
            // requestAnimationFrame(animation);
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
