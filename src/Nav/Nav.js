import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    return(
        <>
                <nav >
                    <ul className={`${styles.ul}`}>
                        <Link to='/'>
                            <li className={`${styles.li}`}>Home</li>
                        </Link>
                        <Link to='/login'>
                            <li className={`${styles.li}`}>Login</li>
                        </Link>
                        <Link to='/blog'>
                            <li className={`${styles.li}`}>Blog</li>
                        </Link>
                    </ul>  
                </nav>
        </>
    )
}

export default Nav;