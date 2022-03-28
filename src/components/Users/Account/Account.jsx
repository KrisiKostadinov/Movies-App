import React, { useContext } from 'react'
import UsersContext from '../../../context/UsersContext';

const Account = () => {

    const { user } = useContext(UsersContext);

    return (
        <div>
            Hello, {user.email}
        </div>
    )
}

export default Account;