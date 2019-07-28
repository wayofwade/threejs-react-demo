import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import myMenu from './components/menu/index.js'
import Index from './components/menu/menu.js'
import Cube from './components/menu/Cube.js'
import Ball from './components/menu/Ball.js'
import MoveCube from './components/menu/MoveCube.js'
import {  HashRouter, Router, Route, Switch} from 'react-router-dom'
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/index" component={myMenu}/>
            <Route exact path="/" component={Index}/>
            <Route exact path="/cube" component={Cube}/>
            <Route exact path="/ball" component={Ball}/>
            <Route exact path="/moveCube" component={MoveCube}/>
        </Switch>
    </HashRouter>,
    document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

