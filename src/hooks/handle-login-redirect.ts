import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const HandleLoginRedirect = (state: any) => {
    const router = useRouter()
    return useEffect(() => {
        (state && state.status === 'success') && router.push('/login')
    }, [state, router])
}

export default HandleLoginRedirect
