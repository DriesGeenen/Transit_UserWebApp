import React from 'react';
import {render} from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import LoginStore from "./Components/Mobx/LoginStore";

import Navbar from './components/navbar';
import UserReader from './containers/user_reader';
import Create from './components/create';
import Edit from './components/edit';
import Login from './components/login';

const Main = () => (
    <div className="content">
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/users' component={UserReader}/>
            <Route exact path='/create' component={Create}/>
            <Route exact path='/users/:id' component={Edit}/>
        </Switch>
    </div>
)

const App = function () {
    return (
        <div>
            <Navbar/>
            <Main />
        </div>
    );
};

const stores = {
    LoginStore
};

render(
    <Provider {...stores}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    ,
    document.querySelector("#container")

);