import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const HandleNavigate = (state: any, navigatePath: string) => {
    const router = useRouter()
    return useEffect(() => {
        (state && state.status === 'success') && router.push(navigatePath)
    }, [state, router, navigatePath])
}

export default HandleNavigate
