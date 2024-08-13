"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useThemeContext } from '@/context/ThemeContext';

const SetImageName = () => {
    const { isDark } = useThemeContext();
    const pathname = usePathname();
    const [image, setImage] = useState('/Login-dark.png')
    useEffect(() => {
        pathname === '/login' && (isDark ? setImage('/Login-dark.png') : setImage('/Login-light.png'))
        pathname === '/register' && (isDark ? setImage('/register_dark.png') : setImage('/register_light.png'))
    }, [pathname, isDark])
    
    return image
}

export default SetImageName