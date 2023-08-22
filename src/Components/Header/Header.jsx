import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h6>Programming Blog</h6>
            <div>
                <a href="/home">Home</a>
                <a href="/blog">Blog</a>
                <a href="/contact us">Contact Us</a>
            </div>
        </div>
    );
};

export default Header;