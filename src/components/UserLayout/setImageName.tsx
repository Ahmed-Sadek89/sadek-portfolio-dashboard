"use client"
// import { useThemeContext } from '../../context/ThemeContext';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const SetImageName = () => {
    // const { isDark } = useThemeContext();
    const pathname = usePathname();
    const [image, setImage] = useState('')
    // useEffect(() => {
    //     pathname === '/user/login' && (isDark ? setImage('/Login-dark.png') : setImage('/Login-light.png'))
    //     pathname === '/user/register' && (isDark ? setImage('/register_dark.png') : setImage('/register_light.png'))
    // }, [pathname, isDark])
    useEffect(() => {
        pathname === '/login' && setImage('/Login-dark.png')
        pathname === '/register' && setImage('/register_dark.png')
    }, [pathname])
    return image
}

export default SetImageName