import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Switch, Route, HashRouter, NavLink, Link } from "react-router-dom";

export default inject("LoginStore")(observer(class Navbar extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        this.props.LoginStore.LogOut();
    }

    render() {
        var adminLinks = (<li><NavLink to="/login">Login</NavLink></li>);

        if (this.props.LoginStore.LoggedIn) {
            var adminLinks = [];
            adminLinks.push(<li key={1}><NavLink to="/users">Alle gebruikers</NavLink></li>
            );
            adminLinks.push(<li key={2}><NavLink to="/create">Gebruiker toevoegen</NavLink></li>
            );
            adminLinks.push(<li key={3}><Link to="/login" onClick={this.onLogout}>Logout</Link></li>
            );
        }

        return (
            <nav className="navbar black">
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo center hide-on-med-and-down">Transit</a>
                    <ul className="left">
                        <li><NavLink to="/">Home</NavLink></li>
                    </ul>
                    <ul className="right">
                        {adminLinks}
                    </ul>
                </div>
            </nav>
        );
    }
}))