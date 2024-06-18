import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {UserContext} from '../userContext';
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Header() {
    const {setUserInfo, userInfo} = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            method: 'POST',
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Profile data:', data);
            setUserInfo(data.email);
        })
        .catch(error => {
            console.error('Error fetching profile:', error);
        });
    },[]);

    function logout() {
        fetch('http://localhost:4000/logout', {
            method: 'POST',
            credentials: 'include',
        });
        setUserInfo(null);
    }
    const userEmail = userInfo?.email;
    return (
        <header className='flex justify-center'>
            <div className='container flex flex-row'>
            <Link to='/' className='logo text-2xl font-bold'>Travel Blog</Link>
            <nav className='flex flex-row ml-auto gap-4'>
                {userEmail ? (
                    <>
                        <Link to='/create'>Create New Post</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                ) : (
                    <>
                        <Link to='/login' className='text-xl'>Login</Link>
                        <Link to='/register' className='text-xl'>Register</Link>
                    </>
                )}
            </nav>
            </div>
        </header>
    )
}