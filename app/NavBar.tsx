'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import classNames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();
    console.log(currentPath);

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
                                className={classNames({
                                    'text-zinc-900': item.href === currentPath,
                                    'text-zinc-500': item.href != currentPath,
                                    'hover:text-zinc-800 transition-colors font-semibold':
                                        true,
                                })}
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
