import React from 'react';
import { Link } from 'react-router-dom';

const UserReader = ({ users, onClickHandler }) => {

    const output = users.map ( (user, i) => {
        return (
            <tr key={i}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td><Link to={`/users/`+ user._id}><span className="fa fa-pencil"/></Link></td>
                <td><a onClick={() => onClickHandler(user._id)}><span className="fa fa-trash"/></a></td>
            </tr>
        )
    });

    return (
        <div>
            <h2 className="page-header">Users</h2>
            <Link to={`/create`}>Add user</Link>
            <div className="table-responsive marginTop-20">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telephone</th>
                            <th scope="col">Role</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {output}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default UserReader;
