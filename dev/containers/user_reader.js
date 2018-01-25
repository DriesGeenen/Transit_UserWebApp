import React, {Component} from 'react';
import axios from 'axios';

import UserReader from '../components/user_reader';

class UserReaderContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount LIJST USERS");
        this.getUsers();
    }

    getUsers(){
        var promise = axios.get("http://localhost:6601/users/");

        promise.then(function(result){
                let users = result.data.data;
                this.setState({ users:users });
            console.log(result.data.data);
            }.bind(this),
            function (error){
                console.log('Something went wrong')
            }.bind(this)
        );
    }

    delete(id){
        axios.delete('http://localhost:6601/users/'+id)
            .then((result) => {
            this.getUsers();
            });
    }

    render() {
        return (
            <UserReader users={this.state.users} onClickHandler={this.delete} />
        );
    }
}

export default UserReaderContainer;
