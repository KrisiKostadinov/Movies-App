import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UsersContext from '../../context/UsersContext';

const Header = () => {

    const { user } = useContext(UsersContext);

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <div className='brand'>
                    <NavLink to='/'>Movies App</NavLink>
                </div>
                <div>
                    <form>
                        <input type='text' name='search' placeholder='Search Movies...' />
                        <button>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
                <ul>
                    {
                        !user ?
                            <>
                                <li>
                                    <NavLink to='/users/login'>Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/users/register'>Register</NavLink>
                                </li>
                            </>

                            :
                            <>
                                <li>
                                    <NavLink to='/users/account'>Hello, {user.email}</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/users/logout'>logout</NavLink>
                                </li>
                            </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Header;