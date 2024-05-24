import React from 'react';
import { Link } from 'react-router-dom';
import { useBucket } from '../../Contexts';

const Header = () => {
    const { totalItems } = useBucket()
    return (
        <>
            <nav className=' w-full bg-slate-400 flex p-4 justify-evenly items-center z-10 fixed'>
                <Link
                to="/"
                >
                <div className=' text-2xl font-bold'>
                    My Bucket
                </div>
                </Link>
                <Link
                to="/bucket"
                >
                <div className=' bg-green-700 text-white p-2 rounded-lg'>
                    Bucket <span>{totalItems}</span>
                </div>
                </Link>
            </nav>
        </>
    );
}

export default Header;
