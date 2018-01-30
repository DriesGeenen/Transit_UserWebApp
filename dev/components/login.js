import React, { Component } from 'react';
import { Button, Icon, Input, Card } from "react-materialize";
import { observer, inject } from 'mobx-react';

export default inject("LoginStore")(observer(class Login extends Component {
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    onEmailChange(event) {
        this.props.LoginStore.Email = event.target.value;
    }

    onPasswordChange(event) {
        this.props.LoginStore.Password = event.target.value;
    }

    onLogin() {
        this.props.LoginStore.SignIn();

        if(this.props.LoginStore.LoggedIn){
            this.props.history.push('/');
        }
    }

    render() {
        return (<div className="row">
            <div className="col m6 offset-m3 s12">
                <Card className='darken-1' textClassName='' title='Login' actions={[<Button key="loginButton" onClick={this.onLogin} waves='light'>Login</Button>]}>
                    <Input s={12} label="Email" value={this.props.LoginStore.Email} onChange={this.onEmailChange} />
                    <Input s={12} label="Password" value={this.props.LoginStore.Password} onChange={this.onPasswordChange} type="password" />
                    <div className="clearfix" />
                </Card>
            </div>
        </div>);
    }
}))