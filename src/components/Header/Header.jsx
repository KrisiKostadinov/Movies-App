import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                    <li>
                        <NavLink to='/users/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users/register'>Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;