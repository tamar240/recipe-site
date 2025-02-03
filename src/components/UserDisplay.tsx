import React, { useContext } from 'react';
import { userContext } from './User';

const UserDisplay: React.FC = () => {
    const [state] = useContext(userContext);

    return (
        <div>
            <h2>User Info</h2>
            <p>Email: {state.email}</p>
            <p>Password: {state.password}</p>
        </div>
    );
};

export default UserDisplay