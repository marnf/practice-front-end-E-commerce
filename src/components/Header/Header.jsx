import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex max-sm:flex-col items-center p-5 bg-slate-500 rounded-t-lg '>
            <div >
                <p className='text-3xl'>TEST</p>
            </div>
            <div className='flex-1  space-x-6 p-2 m-3'>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Contact</Link>
                
            </div>
            <div>
                <button className='border p-2 bg-white rounded'>
                    <Link to='/'>sign in</Link>
                </button>
            </div>
        </div>
    );
};

export default Header;