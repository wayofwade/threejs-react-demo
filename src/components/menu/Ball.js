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

            // 正方体
            let geometry = new THREE.CubeGeometry(200, 200, 200);
            let material = new THREE.MeshLambertMaterial({ color: 'yellow' });
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, 0, 0);
            scene.add(mesh);




            //设置球体的值
            let radius = 50, segemnt = 16, rings = 16;
            let sphereMaterial = new THREE.MeshLambertMaterial({ color: "lightblue" });
            let sphere = new THREE.Mesh(
                new THREE.SphereGeometry(radius,segemnt,rings),
                sphereMaterial
            );
            sphere.geometry.verticesNeedUpdate = true;
            sphere.geometry.normalsNeedUpdate = true;
            scene.add(sphere);
            let pointLight = new THREE.PointLight(0XFFFFFF);
            pointLight.position.x = 230; // 设置光线颜色
            pointLight.position.y = 250;
            pointLight.position.z = 350;
            sphere.position.set(100, 230, 50) // 设置模型的颜色
            scene.add(pointLight);
            animation(pointLight);




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
            console.log("ball", mesh.rotation)
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
    componentWillUnmount () {
        console.log("ball的路由切换的时候需要销毁组件里的对象，不然内存泄漏------------------")
        /*renderer = null
        width = null
        height = null
        camera = null
        scene = null
        light = null*/
    }
    render() {
        return (
            <div id='canvas-frame'>
            </div>
        );
    }
}
