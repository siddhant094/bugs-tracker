import Link from 'next/link';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ];
    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href='/'>
                <AiFillBug />
            </Link>
            <ul className='flex space-x-6'>
                {links.map((item) => {
                    return (
                        <li>
                            <Link
                                key={item.href}
                                href={item.href}
                                className='text-zinc-500 hover:text-zinc-800 transition-colors'
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
                {/* <li>
                    <Link
                        href='/'
                        className='text-zinc-500 hover:text-zinc-800 transition-colors'
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href='/issues'>Issues</Link>
                </li> */}
            </ul>
        </nav>
    );
};

export default NavBar;
