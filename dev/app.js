import React from 'react';
import ReactDOM from 'react-dom';

import UserReader from './containers/user_reader';

const App = function () {
    return (
        <div>
            <UserReader />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#container")
);