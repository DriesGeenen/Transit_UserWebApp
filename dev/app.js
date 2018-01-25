import React from 'react';
import {render} from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';


import UserReader from './containers/user_reader';
import Create from './components/create';
import Edit from './components/edit';

const Main = () => (
    <div className="content">
        <Switch>
            <Route exact path='/users' component={UserReader}/>
            <Route exact path='/create' component={Create}/>
            <Route exact path='/users/:id' component={Edit}/>
        </Switch>
    </div>
)

const App = function () {
    return (
        <div>
            <Main />
        </div>
    );
};

render(
    <HashRouter>
        <App />
    </HashRouter>
    ,
    document.querySelector("#container")

);