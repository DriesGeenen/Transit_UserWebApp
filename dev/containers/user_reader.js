import React, {Component} from 'react';
import axios from 'axios';

import UserReader from '../components/user_reader';

class UserReaderContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        var promise = axios.get("http://localhost:6600/users/");

        promise.then(function(result){
                let users = result.data.data;
                this.setState({ users:users });
            }.bind(this),
            function (error){
                console.log('Something went wrong')
            }.bind(this)
        );
    }

    render() {
        return (
            <UserReader users={this.state.users} />
        );
    }
}

export default UserReaderContainer;
