import React from 'react';

const UserReader = ({ users }) => {

    const output = users.map ( (user, i) => {
        return (
            <tr key={i}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td><span className="fa fa-pencil"/></td>
                <td><span className="fa fa-trash"/></td>
            </tr>
        )
    });

    return (
        <div>
            <h2 className="page-header">Gebruikers</h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Naam</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefoon</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Bewerken</th>
                            <th scope="col">Verwijderen</th>
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
