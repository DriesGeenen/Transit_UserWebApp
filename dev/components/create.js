import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

// todo refresh list users after onSubmit is called

class Create extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            phone: '',
            role: 'user',
            redirect: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        if(e.target.type === 'checkbox'){
            let role = e.target.checked? "admin" : "user";
            this.setState({role:role});
        } else {
            const state = this.state;
            state[e.target.name] = e.target.value;
            this.setState(state);
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const { firstName, lastName, password, email, phone, role } = this.state;

        axios.post('http://localhost:6600/auth/register', { firstName, lastName, password, email, phone, role })
            .then((result) => {
                console.log(result);
                this.setState({redirect: true});
            });
    }

    render() {
        const { firstName, lastName, password, email, phone } = this.state;

        if (this.state.redirect) {
            return <Redirect push to="/users" />;
        }

        return (
            <div className="container">
                <div className="panel panel-default marginTop-20">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            ADD USER
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First name:</label>
                                <input type="text" className="form-control" name="firstName" value={firstName} onChange={this.onChange} placeholder="first name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name:</label>
                                <input type="text" className="form-control" name="lastName" value={lastName} onChange={this.onChange} placeholder="last name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="form-control" name="password" value={password} onChange={this.onChange} placeholder="password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="text" className="form-control" name="email" value={email} onChange={this.onChange} placeholder="email" />                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telephone:</label>
                                <input type="text" className="form-control" name="phone" value={phone} onChange={this.onChange} placeholder="telephone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="checked">Admin:</label>
                                <input type="checkbox" name="checked" onChange={this.onChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary orangeColor marginRight-20">Submit</button>
                            <Link className="btn btn-default orangeColor" to={`/users`}>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;