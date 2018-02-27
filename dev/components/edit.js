import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {firstName:'',lastName:'',email:'',phone:'',role:'user'},
            checked: false,
            output: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangePassClick = this.onChangePassClick.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:6601/users/'+this.props.match.params.id)
            .then(res => {
                this.setState({ user: res.data.data });

                if (this.state.user.role === "admin"){
                    let check = true;
                    this.setState({checked: check});
                }
            });
    }

    onChange(e) {
        if(e.target.type === 'checkbox'){
            let role = e.target.checked? "admin" : "user";
            const state = this.state.user;
            state[e.target.name] = role;
            this.setState({user:state, checked: e.target.checked});
        } else {
            const state = this.state.user;
            state[e.target.name] = e.target.value;
            this.setState({user:state});
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const { firstName, lastName, password, email, phone, role } = this.state.user;

        axios.put('http://localhost:6600/auth/update/'+this.props.match.params.id, { firstName, lastName, password, email, phone, role })
            .then((result) => {
                this.props.history.push("/users");
            });
    }

    onChangePassClick(e){
        const output = (
            <div className="form-group"><label htmlFor="password">Password:</label>
            <input type="password" className="form-control" name="password" onChange={this.onChange} placeholder="New password" /></div>
        );

        this.setState({output: output});
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default marginTop-20">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            EDIT USER
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First name:</label>
                                <input type="text" className="form-control" name="firstName" value={this.state.user.firstName} onChange={this.onChange} placeholder="first name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name:</label>
                                <input type="text" className="form-control" name="lastName" value={this.state.user.lastName} onChange={this.onChange} placeholder="last name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="text" className="form-control" name="email" value={this.state.user.email} onChange={this.onChange} placeholder="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telephone:</label>
                                <input type="text" className="form-control" name="phone" value={this.state.user.phone} onChange={this.onChange} placeholder="telephone" />
                            </div>
                            <div>
                                <label htmlFor="role">Admin:</label>
                                <input type="checkbox" className="form-control" name="role" onChange={this.onChange} checked={this.state.checked} />
                            </div>
                            <div className="form-group marginTop-20">
                                <a onClick={this.onChangePassClick}>Change password</a>
                            </div>
                            {this.state.output}
                            <button type="submit" className="btn btn-primary orangeColor marginRight-20">Save</button>
                            <Link className="btn btn-default orangeColor" to={`/users`}>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;